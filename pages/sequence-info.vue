<template>
    <div class="sequence-info-page">
        <AppHeader color="#FFD700" class="top-0" />
        <div class="mt-4">
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <h1 class="text-2xl font-bold">Sequence Information</h1>
                        <v-card>
                            <v-card-title>Sequence: {{ sequenceData.sequence }}</v-card-title>
                            <v-card-text>
                                <p><strong>Length:</strong> {{ sequenceData.length }}</p>
                                <p>
                                    <strong>Molecular Weight:</strong>
                                    {{ sequenceData.molecular_weight }}
                                </p>
                                <p>
                                    <strong>Isoelectric Point:</strong>
                                    {{ sequenceData.isoelectric_point }}
                                </p>
                                <p><strong>Gravy:</strong> {{ sequenceData.gravy }}</p>
                                <p><strong>Charge:</strong> {{ sequenceData.charge }}</p>
                                <p>
                                    <strong>Hydrophobic Moment:</strong>
                                    {{ sequenceData.hydrophobic_moment }}
                                </p>
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
.sequence-info-page h1 {
    margin-bottom: 20px;
}

.sequence-info-page .v-card {
    margin-top: 20px;
}
</style>
