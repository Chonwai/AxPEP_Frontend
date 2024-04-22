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
                            :items.sync="data.amp_activity_prediction"
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
                for (const item of this.data.amp_activity_prediction) {
                    item.id = item.id.replace('>', '');
                }
            }
        },
        async downloadResult() {
            let data = await TaskAPI.downloadSpecifyClassificationFile(this.id);
            await Utils.downloadResult(data, `${this.id}-classification.csv`);
            data = await TaskAPI.downloadSpecifyScoreFile(this.id);
            await Utils.downloadResult(data, `${this.id}-score.csv`);
        },
    },
};
</script>
