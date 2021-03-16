<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="12">
            <IndexPageHelper />
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
                    >Job Description (optional)</v-stepper-step
                >

                <v-stepper-content step="2">
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
                    <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                    <v-btn text @click="e6 = 1">Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-step step="3"
                    >Create account to retrieve all submitted jobs</v-stepper-step
                >
                <v-stepper-content step="3">
                    <v-text-field
                        class="py-2"
                        v-model="email"
                        :rules="[rules.required, rules.email]"
                        label="Email"
                        outlined
                    ></v-text-field>
                    <v-btn color="primary" @click="submit">Submit</v-btn>
                    <v-btn text @click="e6 = 2">Cancel</v-btn>
                </v-stepper-content>
            </v-stepper>
        </v-col>
    </v-row>
</template>

<script>
import IndexPageHelper from '../../components/IndexPageHelper';
import ExampleDialog from '../../components/ExampleDialog';
import InputBESToxArea from '../../components/InputBESToxArea';
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
            showExample: false,
            rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length <= 255 || 'Max 255 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'Invalid e-mail.';
                },
            },
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
        submit() {
            console.log('Hi');
        },
    },
};
</script>

<style scoped>
.stepper-container {
    box-shadow: none !important;
}
</style>
