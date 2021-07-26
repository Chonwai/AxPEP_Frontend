<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="12">
            <IndexPageHelper page="bestox" />
            <v-stepper class="stepper-container" v-model="e6" vertical>
                <v-stepper-step class="flex items-center" :complete="e6 > 1" step="1">
                    <div class="flex items-center">
                        <span>Input a single SMILES: (length <= 300)</span>
                        <v-btn class="mx-2" small @click="showExample = true">(Example)</v-btn>
                    </div>
                    <ExampleDialog
                        :dialog="showExample"
                        v-on:dialogToggle="exampleDialogCallback"
                        title="Example"
                    >
                        <p>CC(C)=CCO</p>
                    </ExampleDialog>
                </v-stepper-step>

                <v-stepper-content step="1">
                    <InputBESToxArea class="py-2" v-on:file="uploadFile" v-on:source="fileSource" />
                    <v-btn color="primary" @click="e6 = 2">Continue</v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 2" step="2"
                    >Prediction for types of cancer</v-stepper-step
                >

                <v-stepper-content step="2">
                    <div class="flex flex-wrap">
                        <v-checkbox
                            class="flex-1 w-1/2"
                            v-model="methods.skin"
                            label="Method 1"
                            :falseValue="0"
                            :trueValue="1"
                        ></v-checkbox>
                        <v-checkbox
                            class="flex-1 w-1/2"
                            v-model="methods.skin"
                            label="Method 2"
                            :falseValue="0"
                            :trueValue="1"
                        ></v-checkbox>
                        <v-checkbox
                            class="flex-1 w-1/2"
                            v-model="methods.skin"
                            label="Method 3"
                            :falseValue="0"
                            :trueValue="1"
                        ></v-checkbox>
                        <v-checkbox
                            class="flex-1 w-1/2"
                            v-model="methods.skin"
                            label="Method 4"
                            :falseValue="0"
                            :trueValue="1"
                        ></v-checkbox>
                        <v-checkbox
                            class="flex-1 w-1/2"
                            v-model="methods.skin"
                            label="Method 5"
                            :falseValue="0"
                            :trueValue="1"
                        ></v-checkbox>
                        <v-checkbox
                            class="flex-1 w-1/2"
                            v-model="methods.skin"
                            label="Method 6"
                            :falseValue="0"
                            :trueValue="1"
                        ></v-checkbox>
                        <v-checkbox
                            class="flex-1 w-1/2"
                            v-model="methods.skin"
                            label="Method 7"
                            :falseValue="0"
                            :trueValue="1"
                        ></v-checkbox>
                        <v-checkbox
                            class="flex-1 w-1/2"
                            v-model="methods.skin"
                            label="Method 8"
                            :falseValue="0"
                            :trueValue="1"
                        ></v-checkbox>
                        <v-checkbox
                            class="flex-1 w-1/2"
                            v-model="methods.skin"
                            label="Method 9"
                            :falseValue="0"
                            :trueValue="1"
                        ></v-checkbox>
                        <v-checkbox
                            class="flex-1 w-1/2"
                            v-model="methods.skin"
                            label="Method 10"
                            :falseValue="0"
                            :trueValue="1"
                        ></v-checkbox>
                        <v-checkbox
                            class="flex-1 w-1/2"
                            v-model="methods.skin"
                            label="Method 11"
                            :falseValue="0"
                            :trueValue="1"
                        ></v-checkbox>
                        <v-checkbox
                            class="flex-1 w-1/2"
                            v-model="methods.skin"
                            label="Method 12"
                            :falseValue="0"
                            :trueValue="1"
                        ></v-checkbox>
                    </div>
                    <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                    <v-btn text @click="e6 = 1">Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 3" step="3"
                    >Job Description (optional)</v-stepper-step
                >

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

                <v-stepper-step step="4"
                    >Create account to retrieve all submitted jobs</v-stepper-step
                >
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
        </v-col>
    </v-row>
</template>

<script>
import IndexPageHelper from '../../components/IndexPageHelper';
import ExampleDialog from '../../components/ExampleDialog';
import InputBESToxArea from '../../components/InputBESToxArea';
import TaskAPI from '@/apis/task';
import rules from '../../utils/rules';

export default {
    layout: 'bestox',
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
                skin: 1,
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
            form.append('application', 'bestox');
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
                    res = await TaskAPI.newBESToxTaskByFile(form);
                } else if (this.source == 'textarea') {
                    form.append('smi', this.file);
                    res = await TaskAPI.newBESToxTaskByTextarea(form);
                }
                if (res.status == true) {
                    this.$router.push({
                        name: 'bestox-retrieve-email',
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
