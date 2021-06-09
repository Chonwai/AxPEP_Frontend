<template>
    <div class="p-0 md:p-8">
        <IndexPageHelper page="ampep" />
        <v-stepper class="stepper-container" v-model="e6" vertical>
            <v-stepper-step class="flex items-center" :complete="e6 > 1" step="1">
                <div class="flex items-center">
                    Input sequences in FASTA format (length >= 5)
                    <v-btn class="mx-2" small @click="showExample = true">(Example)</v-btn>
                </div>
                <ExampleFastaDialog
                    :dialog="showExample"
                    v-on:dialogToggle="exampleDialogCallback"
                    title="Example"
                >
                    <div>
                        <p>
                            >AC_1
                            <br />ALWKTMLKKLGTMALHAGKAALGAAADTISQGTQ <br />>AC_2
                            <br />AWKKWAKAWKWAKAKWWAKAA
                        </p>
                        <b>Note: AC_1 is the ID you give for the serial.</b>
                    </div>
                </ExampleFastaDialog>
            </v-stepper-step>

            <v-stepper-content step="1">
                <InputFastaArea
                    class="py-2"
                    v-on:file="uploadFile"
                    v-on:source="fileSource"
                    v-on:codon="selectedCodon"
                    application="ampep"
                />
                <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2">Prediction Methods</v-stepper-step>

            <v-stepper-content step="2">
                <v-checkbox
                    v-model="methods.ampep"
                    label="AmPEP: Random forest model for sequence of any length"
                    :falseValue="0"
                    :trueValue="1"
                ></v-checkbox>
                <v-checkbox
                    v-model="methods.deepampep30"
                    label="Deep-AmPEP30: Convolutional neural network model for short sequence <=30 residues"
                    :falseValue="0"
                    :trueValue="1"
                    disabled
                ></v-checkbox>
                <v-checkbox
                    v-model="methods.rfampep30"
                    label="RF-AmPEP30: Random forest model for short sequence <=30 residues"
                    :falseValue="0"
                    :trueValue="1"
                ></v-checkbox>
                <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                <v-btn text @click="e6 = 1">Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3">Job Description (optional)</v-stepper-step>

            <v-stepper-content step="3">
                <v-text-field
                    class="py-2"
                    v-model="description"
                    :rules="[rules.counter]"
                    counter
                    maxlength="255"
                    hint="This field uses maxlength attribute"
                    label="Job Description"
                    outlined
                ></v-text-field>
                <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
                <v-btn text @click="e6 = 2">Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-step step="4">Create account to retrieve all submitted jobs</v-stepper-step>
            <v-stepper-content step="4">
                <v-text-field
                    class="py-2"
                    v-model="email"
                    :rules="[rules.required, rules.email]"
                    label="Email"
                    outlined
                ></v-text-field>
                <v-btn color="primary" @click="submit">Submit</v-btn>
                <v-btn text @click="e6 = 3">Cancel</v-btn>
            </v-stepper-content>
        </v-stepper>
    </div>
</template>

<script>
import IndexPageHelper from '@/components/IndexPageHelper';
import InputFastaArea from '@/components/InputFastaArea';
import ExampleFastaDialog from '@/components/ExampleFastaDialog';
import TaskAPI from '@/apis/task';

export default {
    layout: 'ampep',
    name: 'HomePageIndex',
    data() {
        return {
            e6: 1,
            file: [],
            description: '',
            email: '',
            source: '',
            codon: false,
            methods: {
                ampep: 1,
                deepampep30: 0,
                rfampep30: 1,
            },
            warning: null,
            rules: {
                required: value => {
                    if (value) {
                        this.warning = 'Please enter a correct email address.';
                        return false;
                    }
                    return true;
                },
                counter: value => {
                    if (value.length > 255) {
                        this.warning = 'Max 255 characters';
                        return false;
                    }
                    return true;
                },
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    if (!pattern.test(value)) {
                        this.warning = 'Please enter a correct email address.';
                        return false;
                    }
                    return true;
                },
                file: value => {
                    if (value.size > 1024 * 1024) {
                        this.warning =
                            'The FASTA file is too big! Please upload small than 1MB FASTA file.';
                        return false;
                    }
                    return true;
                },
            },
            showExample: false,
        };
    },
    components: {
        InputFastaArea,
        ExampleFastaDialog,
        IndexPageHelper,
    },
    methods: {
        exampleDialogCallback(toggle) {
            this.showExample = toggle;
        },
        uploadFile(file) {
            this.file = file;
        },
        fileSource(source) {
            this.source = source;
        },
        selectedCodon(codon) {
            this.codon = codon;
        },
        prepareFormData() {
            let form = new FormData();
            form.append('description', this.description);
            form.append('email', this.email);
            form.append('source', this.source);
            form.append('application', 'ampep');
            for (const key in this.methods) {
                if (this.methods.hasOwnProperty(key)) {
                    const element = this.methods[key];
                    form.append(`methods[${key}]`, element);
                }
            }
            return form;
        },
        async submit() {
            if (
                this.rules.email(this.email) ||
                this.rules.required(this.email) ||
                this.rules.file(this.file)
            ) {
                this.$notify({
                    group: 'foo',
                    type: 'error',
                    title: 'Error',
                    text: this.warning,
                });
            } else {
                let res = null;
                let form = this.prepareFormData();
                if (this.source == 'file') {
                    form.append('file', this.file);
                    res = await TaskAPI.newTaskByFile(form);
                } else if (this.source == 'textarea') {
                    form.append('fasta', this.file);
                    res = await TaskAPI.newTaskByTextarea(form);
                } else if (this.source == 'codon') {
                    form.append('file', this.file);
                    form.append('codon', this.codon);
                    res = await TaskAPI.newTaskByCodon(form);
                }
                if (res.status == true) {
                    this.$router.push({
                        name: 'ampep-retrieve-email',
                        params: { email: this.email },
                    });
                }
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.stepper-container {
    box-shadow: none !important;
}
</style>
