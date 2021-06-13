<template>
    <div class="p-0 md:p-8">
        <IndexPageHelper page="acpep" />
        <v-stepper class="stepper-container" v-model="e6" vertical>
            <v-stepper-step class="flex items-center" :complete="e6 > 1" step="1">
                <div class="flex items-center">
                    Input sequences in FASTA format (5 to 38 residues, only 20 naturally occuring
                    amino acids)
                    <v-btn class="mx-2" small @click="showExample = true">(Example)</v-btn>
                </div>
                <ExampleFastaDialog
                    :dialog="showExample"
                    v-on:dialogToggle="exampleDialogCallback"
                    title="Example"
                >
                    <div>
                        <p>
                            >AP1-Z1<br />FLFSLIPHAISGLISAFK<br />>AP1-Z5b<br />FLFKLIKHAIKGLIKAFK<br />>OutAD<br />ALWKTMLKKLGTMALHAGKAALGAAADTISQGTQ
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
                    application="acpep"
                />
                <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2"
                >Prediction for types of cancer</v-stepper-step
            >

            <v-stepper-content step="2">
                <v-checkbox
                    v-model="methods.breast"
                    label="Breast"
                    :falseValue="0"
                    :trueValue="1"
                ></v-checkbox>
                <v-checkbox
                    v-model="methods.cervix"
                    label="Cervix"
                    :falseValue="0"
                    :trueValue="1"
                ></v-checkbox>
                <v-checkbox
                    v-model="methods.colon"
                    label="Colon"
                    :falseValue="0"
                    :trueValue="1"
                ></v-checkbox>
                <v-checkbox
                    v-model="methods.lung"
                    label="Lung"
                    :falseValue="0"
                    :trueValue="1"
                ></v-checkbox>
                <v-checkbox
                    v-model="methods.prostate"
                    label="Prostate"
                    :falseValue="0"
                    :trueValue="1"
                ></v-checkbox>
                <v-checkbox
                    v-model="methods.skin"
                    label="Skin"
                    :falseValue="0"
                    :trueValue="1"
                ></v-checkbox>
                <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                <v-btn text @click="e6 = 1">Cancel</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 3" step="3">Job description (optional)</v-stepper-step>

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
        <v-alert border="left" colored-border elevation="2">
            <b>Funding:</b><br />
            This project is supported by University of Macau (grant No. MYRG2019-00098-FST and
            MYRG2017-00146-FST)
        </v-alert>
    </div>
</template>

<script>
import IndexPageHelper from '@/components/IndexPageHelper';
import InputFastaArea from '@/components/InputFastaArea';
import ExampleFastaDialog from '@/components/ExampleFastaDialog';
import TaskAPI from '@/apis/task';
import Fasta from 'biojs-io-fasta';
import rules from '../../utils/rules';

export default {
    layout: 'acpep',
    name: 'HomePageIndex',
    data() {
        return {
            e6: 1,
            file: [],
            description: '',
            email: '',
            source: '',
            methods: {
                breast: 1,
                cervix: 1,
                colon: 1,
                lung: 1,
                prostate: 1,
                skin: 1,
            },
            rules,
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
            form.append('application', 'acpep');
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
                    res = await TaskAPI.newAcPEPTaskByFile(form);
                } else if (this.source == 'textarea') {
                    form.append('fasta', this.file);
                    res = await TaskAPI.newAcPEPTaskByTextarea(form);
                }
                if (res.status == true) {
                    this.$router.push({
                        name: 'acpep-retrieve-email',
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

<style lang="scss" scoped>
.stepper-container {
    box-shadow: none !important;
}
</style>
