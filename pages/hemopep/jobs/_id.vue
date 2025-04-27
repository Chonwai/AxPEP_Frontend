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
            <v-card>
                <v-tabs v-model="tab" background-color="primary" dark>
                    <v-tab v-for="item in items" :key="item.tab">
                        {{ item.tab }}
                    </v-tab>
                </v-tabs>
                <v-tabs-items v-model="tab">
                    <v-tab-item v-for="item in items" :key="item.tab">
                        <ResultTable
                            v-show="item.tab == 'Result'"
                            :header.sync="resultHeader"
                            :items.sync="data.detailed_predictions"
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
    layout: 'hemopep',
    name: 'HemoPepJobsPageIndex',
    components: {
        ResultTable,
    },
    data() {
        return {
            id: this.$route.params.id,
            data: {
                id: '',
                description: '',
                created_at: '',
                detailed_predictions: [],
            },
            tab: null,
            items: [
                {
                    tab: 'Result',
                },
            ],
            resultHeader: [
                {
                    text: 'Sequence ID',
                    align: 'start',
                    sortable: true,
                    value: 'Sequence ID',
                },
                {
                    text: 'Sequence',
                    align: 'start',
                    sortable: true,
                    value: 'Sequence',
                },
                {
                    text: 'HC5 (μM)',
                    align: 'start',
                    sortable: true,
                    value: 'HC5',
                },
                {
                    text: 'HC10 (μM)',
                    align: 'start',
                    sortable: true,
                    value: 'HC10',
                },
                {
                    text: 'HC50 (μM)',
                    align: 'start',
                    sortable: true,
                    value: 'HC50',
                },
            ],
        };
    },
    mounted() {
        this.getTaskDetail();
    },
    methods: {
        async getTaskDetail() {
            try {
                const res = await TaskAPI.getSpecifyTask(this.id, 'hemopep');
                if (res.status) {
                    this.data = {
                        id: res.message[0].id,
                        description: res.message[0].description,
                        created_at: res.message[0].created_at,
                        detailed_predictions: res.message[0].detailed_predictions,
                    };
                }
            } catch (error) {
                console.error(error);
            }
        },
        async downloadResult() {
            try {
                await Utils.downloadResult(
                    this.data.detailed_predictions,
                    `hemopep-${this.data.id}.csv`
                );
            } catch (error) {
                console.error(error);
            }
        },
    },
};
</script>
