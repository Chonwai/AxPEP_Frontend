<template>
    <div class="p-0 md:p-8">
        <IndexPageHelper page="ssl-gcn" />
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
                            >TEST0<br />O=C1Cc2cc(CCN3CCN(c4nsc5ccccc45)CC3)c(Cl)cc2N1<br />>TEST1<br />CN(C)CCOC1=Cc2ccccc2Sc2ccc(Cl)cc21
                        </p>
                        <b>Note: TEST0 is the ID you give for the serial.</b>
                    </div>
                </ExampleDialog>
            </v-stepper-step>

            <v-stepper-content step="1">
                <InputBESToxArea
                    class="py-2"
                    v-on:file="uploadFile"
                    v-on:source="fileSource"
                    application="ssl-gcn"
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
                        v-model="methods['NR-AR']"
                        label="NR-AR"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['NR-AR-LBD']"
                        label="NR-AR-LBD"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['NR-AhR']"
                        label="NR-AhR"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['NR-Aromatase']"
                        label="NR-Aromatase"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['NR-ER']"
                        label="NR-ER"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['NR-ER-LBD']"
                        label="NR-ER-LBD"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['NR-PPAR-gamma']"
                        label="NR-PPAR-gamma"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['SR-ARE']"
                        label="SR-ARE"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['SR-ATAD5']"
                        label="SR-ATAD5"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['SR-HSE']"
                        label="SR-HSE"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['SR-MMP']"
                        label="SR-MMP"
                        :falseValue="0"
                        :trueValue="1"
                    ></v-checkbox>
                    <v-checkbox
                        class="flex-1 w-1/2"
                        v-model="methods['SR-p53']"
                        label="SR-p53"
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
    layout: 'ssl-gcn',
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
                'NR-AR': 1,
                'NR-AR-LBD': 1,
                'NR-AhR': 1,
                'NR-Aromatase': 1,
                'NR-ER': 1,
                'NR-ER-LBD': 1,
                'NR-PPAR-gamma': 1,
                'SR-ARE': 1,
                'SR-ATAD5': 1,
                'SR-HSE': 1,
                'SR-MMP': 1,
                'SR-p53': 1,
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
            form.append('application', 'ssl-gcn');
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
                    res = await TaskAPI.newSSLBESToxTaskByFile(form);
                } else if (this.source == 'textarea') {
                    form.append('fasta', this.file);
                    res = await TaskAPI.newSSLBESToxTaskByTextarea(form);
                }
                if (res.status == true) {
                    this.$router.push({
                        name: 'ssl-gcn-retrieve-email',
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
