<template>
    <div class="p-0 md:p-8">
        <IndexPageHelper page="ecotoxicology" />
        <v-stepper class="stepper-container" v-model="e6" vertical>
            <v-stepper-step class="flex items-center" :complete="e6 > 1" step="1">
                <div class="flex items-center">
                    <span>Input SMILES strings in FASTA-like format</span>
                    <v-btn class="mx-2" small @click="showExample = true">(Example)</v-btn>
                </div>
                <ExampleDialog
                    :dialog="showExample"
                    v-on:dialogToggle="exampleDialogCallback"
                    title="Example"
                >
                    <div>
                        <p>
                            >Dodecyltrimethylammonium chloride (algae positive)<br />
                            Nc1ccc(S(=O)(=O)Nc2ncccn2)cc1<br />
                            >2,4,6-Trichlorophenol (algae negative)<br />
                            Oc1c(Cl)cc(Cl)cc1Cl<br />
                            >Sodium pentachlorophenate (fish positive)<br />
                            [Na+].[O-]c1c(Cl)c(Cl)c(Cl)c(Cl)c1Cl<br />
                            >Methyl methacrylate (fish negative)<br />
                            C=C(C)C(=O)OC<br />
                            >Diphenyl Ether (crustaceans positive)<br />
                            c1ccc(Oc2ccccc2)cc1<br />
                            >Sodium lauryl sulfate (crustaceans negative)<br />
                            CCCCCCCCCCCOS(=O)(=O)[O-].[Na+]<br />
                        </p>
                        <b>Note: >XXX is the ID you give for the serial.</b>
                    </div>
                </ExampleDialog>
            </v-stepper-step>

            <v-stepper-content step="1">
                <InputBESToxArea
                    class="py-2"
                    v-on:file="uploadFile"
                    v-on:source="fileSource"
                    application="ecotoxicology"
                />
                <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
            </v-stepper-content>

            <v-stepper-step :complete="e6 > 2" step="2"
                >Prediction for Toxicological Endpoints</v-stepper-step
            >

            <v-stepper-content step="2">
                <div class="flex flex-wrap">
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['A2A']"
                        label="Algae (A2A)"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['F2F']"
                        label="Fish (F2F)"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['C2C']"
                        label="Crustaceans (C2C)"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                </div>
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
import IndexPageHelper from '../../components/IndexPageHelper';
import ExampleDialog from '../../components/ExampleDialog';
import InputBESToxArea from '../../components/InputBESToxArea';
import TaskAPI from '@/apis/task';
import rules from '../../utils/rules';

export default {
    layout: 'ecotoxicology',
    name: 'HomePageIndex',
    components: {
        IndexPageHelper,
        ExampleDialog,
        InputBESToxArea,
    },
    data() {
        return {
            e6: 1,
            file: [],
            description: '',
            email: '',
            source: '',
            methods: {
                A2A: 1,
                F2F: 1,
                C2C: 1,
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
            form.append('application', 'ecotoxicology');
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
                this.rules.smi(this.file)
            ) {
                let res = null;
                let form = this.prepareFormData();
                if (this.source == 'file') {
                    form.append('file', this.file);
                    res = await TaskAPI.newEcotoxicologyTaskByFile(form);
                } else if (this.source == 'textarea') {
                    // 替換所有換行符號為 \n
                    const fastaContent = this.file.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
                    form.append('fasta', fastaContent);
                    res = await TaskAPI.newEcotoxicologyTaskByTextarea(form);
                }
                if (res.status == true) {
                    this.$router.push({
                        name: 'ecotoxicology-retrieve-email',
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
