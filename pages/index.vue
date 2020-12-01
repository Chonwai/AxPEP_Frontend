<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="8" md="12">
            <v-stepper class="stepper-container" v-model="e6" vertical>
                <v-stepper-step :complete="e6 > 1" step="1">
                    Input sequences in FASTA format (length >= 5)
                </v-stepper-step>

                <v-stepper-content step="1">
                    <InputFastaArea class="py-2" />
                    <v-btn color="primary" @click="e6 = 2"> Continue </v-btn>
                    <v-btn text> Cancel </v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 2" step="2"> Prediction Methods </v-stepper-step>

                <v-stepper-content step="2">
                    <v-checkbox
                        v-model="checkbox"
                        label="Anti-microbial peptide (AmPEP)"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="checkbox"
                        label="Short anti-microbial peptide (Deep-AmPEP30, for length <=30)"
                    ></v-checkbox>
                    <v-checkbox
                        v-model="checkbox"
                        label="Short anti-microbial peptide (RF-AmPEP30, for length <=30)"
                    ></v-checkbox>
                    <v-btn color="primary" @click="e6 = 3"> Continue </v-btn>
                    <v-btn text> Cancel </v-btn>
                </v-stepper-content>

                <v-stepper-step :complete="e6 > 3" step="3">
                    Job Description (optional)
                </v-stepper-step>

                <v-stepper-content step="3">
                    <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                    <v-btn color="primary" @click="e6 = 4"> Continue </v-btn>
                    <v-btn text> Cancel </v-btn>
                </v-stepper-content>

                <v-stepper-step step="4">
                    Create account to retrieve all submitted jobs</v-stepper-step
                >
                <v-stepper-content step="4">
                    <v-card color="grey lighten-1" class="mb-12" height="200px"></v-card>
                    <v-btn color="primary" @click="e6 = 1"> Continue </v-btn>
                    <v-btn text> Cancel </v-btn>
                </v-stepper-content>
            </v-stepper>
        </v-col>
    </v-row>
</template>

<script>
import InputFastaArea from '../components/InputFastaArea';

export default {
    data() {
        return {
            e6: 1,
        };
    },
    name: 'HomePageIndex',
    components: {
        InputFastaArea,
    },
};
</script>

<style lang="scss" scoped>
.stepper-container {
    box-shadow: none !important;
}
</style>
