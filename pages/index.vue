<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="12">
            <v-alert icon="mdi-alert-circle-outline" prominent dense text type="info">
                <v-row align="center">
                    <v-col class="grow"> You have uploaded sequences already? </v-col>
                    <v-col class="shrink">
                        <v-btn @click="showRetrieve = true">Click here to retrieve</v-btn>
                        <TaskRetrieveDialog
                            :dialog="showRetrieve"
                            v-on:dialogToggle="retrieveDialogCallback"
                        />
                    </v-col>
                </v-row>
            </v-alert>
            <v-alert border="left" colored-border color="deep-purple accent-4" elevation="2">
                AxPEP is a collection of sequence-based machine learning methods for peptide
                activities prediction. Currently, we predict peptides for anti-microbial and
                anti-cancer activities.
            </v-alert>
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
                            <p>>AC_1</p>
                            <p>ALWKTMLKKLGTMALHAGKAALGAAADTISQGTQ</p>
                            <p>>AC_2</p>
                            <p>AWKKWAKAWKWAKAKWWAKAA</p>
                            <b>Note: AC_1 is the ID you give for the serial.</b>
                        </div>
                    </ExampleFastaDialog>
                </v-stepper-step>

                <v-stepper-content step="1">
                    <InputFastaArea class="py-2" v-on:file="uploadFile" v-on:source="fileSource" />
                    <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
                    <v-btn text> Cancel </v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 2" step="2"> Prediction Methods </v-stepper-step>

                <v-stepper-content step="2">
                    <v-checkbox
                        v-model="models.ampep"
                        label="Anti-microbial peptide (AmPEP)"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="models.deepampep30"
                        label="Short anti-microbial peptide (Deep-AmPEP30, for length <=30)"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="models.rfampep30"
                        label="Short anti-microbial peptide (RF-AmPEP30, for length <=30)"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
                    <v-btn text> Cancel </v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 3" step="3">
                    Job Description (optional)
                </v-stepper-step>

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
                    <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
                    <v-btn text> Cancel </v-btn>
                </v-stepper-content>

                <v-stepper-step step="4">
                    Create account to retrieve all submitted jobs</v-stepper-step
                >
                <v-stepper-content step="4">
                    <v-text-field
                        class="py-2"
                        v-model="email"
                        :rules="[rules.required, rules.email]"
                        label="Email"
                        outlined
                    ></v-text-field>
                    <v-btn color="primary" @click="submit"> Submit </v-btn>
                    <v-btn text> Cancel </v-btn>
                </v-stepper-content>
            </v-stepper>
        </v-col>
    </v-row>
</template>

<script>
import InputFastaArea from '../components/InputFastaArea';
import ExampleFastaDialog from '../components/ExampleFastaDialog';
import TaskRetrieveDialog from '../components/TaskRetrieveDialog';
import TaskAPI from '../apis/task';

export default {
    data() {
        return {
            e6: 1,
            file: [],
            description: '',
            email: '',
            source: '',
            models: {
                ampep: 1,
                deepampep30: 1,
                rfampep30: 1,
            },
            rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length <= 255 || 'Max 255 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'Invalid e-mail.';
                },
            },
            showExample: false,
            showRetrieve: false,
        };
    },
    name: 'HomePageIndex',
    components: {
        InputFastaArea,
        ExampleFastaDialog,
    },
    methods: {
        exampleDialogCallback(toggle) {
            this.showExample = toggle;
        },
        retrieveDialogCallback(toggle) {
            this.showRetrieve = toggle;
        },
        uploadFile(file) {
            this.file = file;
        },
        fileSource(source) {
            this.source = source;
        },
        async submit() {
            let form = new FormData();
            form.append('description', this.description);
            form.append('email', this.email);
            form.append('source', this.source);
            if (this.source == 'file') {
                form.append('file', this.file);
                let res = await TaskAPI.newTaskByFile(this.models, form);
            } else if (this.source == 'textarea') {
                form.append('fasta', this.file);
                let res = await TaskAPI.newTaskByTextarea(this.models, form);
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
