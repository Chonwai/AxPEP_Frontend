<template>
    <div class="p-0 md:p-8">
        <IndexPageHelper page="hemopep" />
        <v-stepper class="stepper-container" v-model="e6" vertical>
            <v-stepper-step class="flex items-center" :complete="e6 > 1" step="1">
                <div class="flex items-center">
                    <span>Input peptide sequences in FASTA format</span>
                    <v-btn class="mx-2" small @click="showExample = true">(Example)</v-btn>
                </div>
                <ExampleDialog
                    :dialog="showExample"
                    v-on:dialogToggle="exampleDialogCallback"
                    title="Example"
                >
                    <div>
                        <p>
                            >Peptide1<br />AAKIILNPKFR<br />>Peptide2<br />KWKLFKKIEKVGQNIRDGIIKAGSAVAVVGQAATIYK
                        </p>
                        <b>Note: >Peptide1 is the ID you give for the sequence.</b>
                    </div>
                </ExampleDialog>
            </v-stepper-step>

            <v-stepper-content step="1">
                <InputFastaArea
                    class="py-2"
                    v-on:file="uploadFile"
                    v-on:source="fileSource"
                    application="hemopep"
                />
                <v-btn color="primary" @click="e6 = 2">CONTINUE</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2"
                >Prediction for Hemolytic Activity</v-stepper-step
            >

            <v-stepper-content step="2">
                <div class="flex flex-wrap">
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['hemopep60']"
                        label="BERT-HemoPep60"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                </div>
                <v-btn color="primary" @click="e6 = 3">CONTINUE</v-btn>
                <v-btn text @click="e6 = 1">CANCEL</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3">Job Description (optional)</v-stepper-step>

            <v-stepper-content step="3">
                <v-text-field
                    class="py-2"
                    v-model="description"
                    label="Job Description"
                    outlined
                    counter="255"
                    maxlength="255"
                ></v-text-field>
                <v-btn color="primary" @click="e6 = 4">CONTINUE</v-btn>
                <v-btn text @click="e6 = 2">CANCEL</v-btn>
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
                <v-btn color="primary" @click="submit">SUBMIT</v-btn>
                <v-btn text @click="e6 = 3">CANCEL</v-btn>
            </v-stepper-content>
        </v-stepper>
    </div>
</template>

<script>
import IndexPageHelper from '../../components/IndexPageHelper';
import ExampleDialog from '../../components/ExampleDialog';
import InputFastaArea from '../../components/InputFastaArea';
import TaskAPI from '@/apis/task';
import rules from '../../utils/rules';

export default {
    layout: 'hemopep',
    name: 'HomePageIndex',
    components: {
        IndexPageHelper,
        ExampleDialog,
        InputFastaArea,
    },
    data() {
        return {
            e6: 1,
            file: [],
            description: '',
            email: '',
            source: '',
            methods: {
                hemopep60: 1,
            },
            rules,
            showExample: false,
        };
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
        prepareFormData() {
            let form = new FormData();
            form.append('description', this.description);
            form.append('email', this.email);
            form.append('source', this.source);
            form.append('application', 'hemopep');
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
                this.rules.email(this.email) &&
                this.rules.required(this.email) &&
                this.rules.fasta(this.file)
            ) {
                let res = null;
                let form = this.prepareFormData();
                if (this.source == 'file') {
                    form.append('file', this.file);
                    res = await TaskAPI.newHemoPepTaskByFile(form);
                } else if (this.source == 'textarea') {
                    form.append('fasta', this.file);
                    res = await TaskAPI.newHemoPepTaskByTextarea(form);
                }
                if (res.status == true) {
                    this.$router.push({
                        name: 'hemopep-retrieve-email',
                        params: { email: this.email },
                    });
                }
            } else {
                this.$notify({
                    group: 'foo',
                    type: 'error',
                    title: 'Error',
                    text: this.$store.state.warning,
                });
            }
        },
    },
};
</script>

<style scoped>
.stepper-container {
    box-shadow: none !important;
}
</style>
