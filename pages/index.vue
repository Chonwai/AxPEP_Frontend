<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="12">
            <v-alert icon="mdi-alert-circle-outline" prominent dense text type="info">
                <v-row align="center">
                    <v-col class="grow"> You have uploaded sequences already? </v-col>
                    <v-col class="shrink">
                        <v-btn>Click here to retrieve</v-btn>
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
                        v-on:dialogToggle="dialogCallback"
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
                    <InputFastaArea class="py-2" />
                    <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
                    <v-btn text> Cancel </v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 2" step="2"> Prediction Methods </v-stepper-step>

                <v-stepper-content step="2">
                    <v-checkbox v-model="ampep" label="Anti-microbial peptide (AmPEP)"></v-checkbox>
                    <v-checkbox
                        v-model="deepampep30"
                        label="Short anti-microbial peptide (Deep-AmPEP30, for length <=30)"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="rfampep30"
                        label="Short anti-microbial peptide (RF-AmPEP30, for length <=30)"
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

export default {
    data() {
        return {
            e6: 1,
            description: '',
            email: '',
            rules: {
                required: value => !!value || 'Required.',
                counter: value => value.length <= 255 || 'Max 255 characters',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    return pattern.test(value) || 'Invalid e-mail.';
                },
            },
            ampep: true,
            deepampep30: true,
            rfampep30: true,
            showExample: false,
        };
    },
    name: 'HomePageIndex',
    components: {
        InputFastaArea,
        ExampleFastaDialog,
    },
    methods: {
        dialogCallback(toggle) {
            this.showExample = toggle;
        },
        submit() {
            console.log('Submit!');
        },
    },
};
</script>

<style lang="scss" scoped>
.stepper-container {
    box-shadow: none !important;
}
</style>
