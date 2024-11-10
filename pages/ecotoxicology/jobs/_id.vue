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
                            v-show="item.tab == 'Classification'"
                            :header.sync="classificationHeader"
                            :items.sync="computedClassifications"
                        />
                        <ResultTable
                            v-show="item.tab == 'Probability'"
                            :header.sync="probabilityHeader"
                            :items.sync="data.classifications"
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
    layout: 'ecotoxicology',
    name: 'GetJobByIDPageIndex',
    components: {
        ResultTable,
    },
    data() {
        return {
            id: this.$route.params.id,
            application: 'ecotoxicology',
            loading: true,
            data: {},
            classificationHeader: [],
            probabilityHeader: [],
            tab: null,
            items: [
                { tab: 'Classification' },
                { tab: 'Probability' },
            ],
        };
    },
    computed: {
        computedClassifications() {
            if (!this.data.classifications) return [];
            return this.data.classifications.map(item => {
                return {
                    ...item,
                    A2A: item.A2A > 0.5 ? 1 : 0,
                    F2F: item.F2F > 0.5 ? 1 : 0,
                    C2C: item.C2C > 0.5 ? 1 : 0,
                };
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

            // Prepare headers for classification and probability
            if (this.data.classifications && this.data.classifications.length > 0) {
                for (const item of Object.keys(this.data.classifications[0])) {
                    if (item == 'smiles') {
                        continue;
                    }
                    const headerText = {
                        A2A: 'Algae',
                        F2F: 'Fish',
                        C2C: 'Crustaceans',
                    }[item] || item.charAt(0).toUpperCase() + item.slice(1);

                    this.classificationHeader.push({
                        text: headerText,
                        value: item,
                    });
                    this.probabilityHeader.push({
                        text: headerText,
                        value: item,
                    });
                }
            }
        },
        async downloadResult() {
            let data = await TaskAPI.downloadSpecifyClassificationFile(this.id);
            await Utils.downloadResult(data, `${this.id}-classification.csv`);
        },
    },
};
</script>
