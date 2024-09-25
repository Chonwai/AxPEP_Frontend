<template>
    <div class="sequence-info-page">
        <AppHeader color="#FFD700" class="top-0" />
        <div class="mt-4">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <h1 class="text-4xl font-bold text-center text-gray-800">
                            Sequence Information
                        </h1>
                        <v-card class="info-card">
                            <v-card-title class="text-gray-800 text-2xl font-semibold"
                                >Sequence: {{ sequenceData.sequence }}</v-card-title
                            >
                            <v-card-text>
                                <v-row>
                                    <v-col cols="12" class="text-lg">
                                        <v-icon color="blue">mdi-dna</v-icon>
                                        <strong> Length:</strong> {{ sequenceData.length }}
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" class="text-lg">
                                        <v-icon color="green">mdi-weight</v-icon>
                                        <strong> Molecular Weight:</strong>
                                        {{ sequenceData.molecular_weight }}
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" class="text-lg">
                                        <v-icon color="red">mdi-water</v-icon>
                                        <strong> Isoelectric Point:</strong>
                                        {{ sequenceData.isoelectric_point }}
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" class="text-lg">
                                        <v-icon color="orange">mdi-flask</v-icon>
                                        <strong> Gravy:</strong> {{ sequenceData.gravy }}
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" class="text-lg">
                                        <v-icon color="purple">mdi-battery-charging</v-icon>
                                        <strong> Charge:</strong> {{ sequenceData.charge }}
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="12" class="text-lg">
                                        <v-icon color="yellow">mdi-wave</v-icon>
                                        <strong> Hydrophobic Moment:</strong>
                                        {{ sequenceData.hydrophobic_moment }}
                                    </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </div>
</template>

<script>
import AppHeader from '../layouts/components/AppHeader';
export default {
    layout: 'empty',
    name: 'SequenceInfoPage',
    data() {
        return {
            sequenceData: {},
        };
    },
    components: {
        AppHeader,
    },
    async created() {
        const sequence = this.$route.query.sequence;
        if (sequence) {
            const response = await fetch(
                `https://axpeppropertiescalculationfastapi.vercel.app/api/calculate?sequence=${sequence}`
            );
            const data = await response.json();
            if (data.status === 'success') {
                this.sequenceData = data.data;
            }
        }
    },
    methods: {},
};
</script>

<style scoped>
.sequence-info-page {
    background-color: lightyellow;
    min-height: 100vh;
}

.sequence-info-page h1 {
    margin-bottom: 20px;
}

.info-card {
    margin-top: 20px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 1);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
    color: white;
}

.info-card .v-card-title {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.info-card .v-card-text {
    padding: 20px;
}

.info-card .v-icon {
    margin-right: 10px;
}
</style>
