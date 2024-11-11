<template>
    <div class="py-8">
        <div>
            <p class="text-xl">
                Result of Job ID
                <span
                    ><b>#{{ data.id }}</b></span
                >
            </p>
            <div class="flex justify-center items-center mb-4">
                <div class="w-full">
                    <p class="mb-0">
                        Description:
                        <span
                            ><b>{{ data.description }}</b></span
                        >
                    </p>
                    <p class="mb-0">
                        Submitted at:
                        <span
                            ><b>{{ data.created_at }}</b></span
                        >
                    </p>
                </div>
                <v-btn class="w-auto" large color="primary" dark @click="downloadResult"
                    >Export to CSV</v-btn
                >
            </div>
            <v-alert
                class="w-full mr-4 my-4"
                border="left"
                colored-border
                color="deep-purple accent-4"
                elevation="2"
            >
                Note: The default classification cutoff is 0.5. Positive sequence is 1, negative
                sequence is 0, invalid sequence is -1.
            </v-alert>
            <v-card>
                <v-tabs v-model="tab" background-color="primary" dark>
                    <v-tab v-for="item in items" :key="item.tab">
                        {{ item.tab }}
                    </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in items" :key="item.tab">
                        <ResultTable
                            v-show="item.tab == 'Classification'"
                            :header.sync="classificationsHeader"
                            :items.sync="data.classifications"
                        />
                        <ResultTable
                            v-show="item.tab == 'Prediction Score'"
                            :header.sync="scoresHeader"
                            :items.sync="data.scores"
                        />
                        <ResultTable
                            v-if="data.amp_activity_prediction"
                            v-show="item.tab == 'Activity Prediction'"
                            :header.sync="ampActivityPredictionHeader"
                            :items.sync="computedAmpActivityPredictionItems"
                        />
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </div>
    </div>
</template>

<script>
import TaskAPI from '../../../apis/task';
import ResultTable from '../../../components/ResultTable';
import Utils from '../../../utils/utils';
import { Parser } from 'json2csv';

export default {
    layout: 'ampep',
    name: 'GetJobByIDPageIndex',
    components: {
        ResultTable,
    },
    data() {
        return {
            id: this.$route.params.id,
            application: 'ampep',
            loading: true,
            data: [],
            classificationsHeader: [],
            scoresHeader: [],
            ampActivityPredictionHeader: [],
            tab: null,
            items: [
                { tab: 'Classification' },
                { tab: 'Prediction Score' },
                { tab: 'Activity Prediction' },
            ],
        };
    },
    computed: {
        computedAmpActivityPredictionItems() {
            return this.data.amp_activity_prediction.map(item => {
                if (item.sa_predicted_MIC_μM && item.ec_predicted_MIC_μM) {
                    return {
                        ...item,
                        sa_ec: (item.sa_predicted_MIC_μM / item.ec_predicted_MIC_μM).toFixed(8),
                    };
                }
                return item;
            });
        },
    },
    async created() {
        await this.init();
    },
    methods: {
        init() {
            this.getJob();
        },
        async getJob() {
            let res = await TaskAPI.getSpecifyTask(this.id, this.application);
            this.data = res.message[0];
            this.data.created_at = new Date(res.message[0].created_at)
                .toISOString()
                .slice(0, 19)
                .replace('T', ' ');
            for (const item of Object.keys(this.data.classifications[0])) {
                if (item == 'sequence') {
                    continue;
                }
                this.classificationsHeader.push({
                    text: await Utils.convertAmPEPTableHeader(item),
                    value: item,
                });
            }
            for (const item of Object.keys(this.data.scores[0])) {
                if (item == 'sequence') {
                    continue;
                }
                this.scoresHeader.push({
                    text: await Utils.convertAmPEPTableHeader(item),
                    value: item,
                });
            }
            if (this.data.amp_activity_prediction) {
                for (const item of Object.keys(this.data.amp_activity_prediction[0])) {
                    if (item == 'sequence') {
                        continue;
                    }
                    this.ampActivityPredictionHeader.push({
                        text: await Utils.convertAmPEPTableHeader(item),
                        value: item,
                    });
                }
                this.ampActivityPredictionHeader.push({
                    text: 'SA_MIC (uM) / EC_MIC (uM)',
                    value: 'sa_ec',
                });
                for (const item of this.data.amp_activity_prediction) {
                    item.id = item.id.replace('>', '');
                }
            }
        },
        async downloadResult() {
            // Prepare classification data for CSV
            const classificationData = this.data.classifications.map(item => ({
                ...item,
            }));

            // Prepare score data for CSV
            const scoreData = this.data.scores.map(item => ({
                ...item,
            }));

            // Prepare activity prediction data for CSV
            const activityPredictionData = this.computedAmpActivityPredictionItems.map(item => ({
                ...item,
            }));

            try {
                // Convert to CSV
                const json2csvParser = new Parser();
                const classificationCsv = json2csvParser.parse(classificationData);
                const scoreCsv = json2csvParser.parse(scoreData);
                const activityPredictionCsv = json2csvParser.parse(activityPredictionData);

                // Download CSV files
                await Utils.downloadResult(classificationCsv, `${this.id}-classification.csv`);
                await Utils.downloadResult(scoreCsv, `${this.id}-score.csv`);
                await Utils.downloadResult(
                    activityPredictionCsv,
                    `${this.id}-activity-prediction.csv`
                );
            } catch (error) {
                console.error('Error converting JSON to CSV:', error);
            }
        },
    },
};
</script>
