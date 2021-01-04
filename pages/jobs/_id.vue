<template>
    <div class="py-8">
        <div>
            <p class="text-xl">
                Result of Job ID
                <span
                    ><b>#{{ data.id }}</b></span
                >
            </p>
            <p class="mb-0">
                Description:
                <span
                    ><b>{{ data.description }}</b></span
                >
            </p>
            <p>
                Submitted at:
                <span
                    ><b>{{ data.created_at }}</b></span
                >
            </p>
            <v-alert border="left" colored-border color="deep-purple accent-4" elevation="2">
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
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </div>
    </div>
</template>

<script>
import TaskAPI from '../../apis/task';
import ResultTable from '../../components/ResultTable';
export default {
    name: 'GetJobByIDPageIndex',
    components: {
        ResultTable,
    },
    data() {
        return {
            id: this.$route.params.id,
            loading: true,
            data: [],
            classificationsHeader: [],
            scoresHeader: [],
            tab: null,
            items: [{ tab: 'Classification' }, { tab: 'Prediction Score' }],
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
            let res = await TaskAPI.getSpecifyTask(this.id);
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
                    text: item.charAt(0).toUpperCase() + item.slice(1),
                    value: item,
                });
            }
            for (const item of Object.keys(this.data.scores[0])) {
                if (item == 'sequence') {
                    continue;
                }
                this.scoresHeader.push({
                    text: item.charAt(0).toUpperCase() + item.slice(1),
                    value: item,
                });
            }
        },
    },
};
</script>
