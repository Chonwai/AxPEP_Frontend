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
                Description: <span>{{ data.description }}</span>
            </p>
            <p>
                Submitted at: <span>{{ data.created_at }}</span>
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
                        <v-card flat>
                            <v-data-table
                                v-show="item.tab == 'Classification'"
                                dense
                                :headers.sync="classificationsHeader"
                                :items.sync="data.classifications"
                                item-key="id"
                                class="elevation-1"
                                :itemsPerPage="15"
                            ></v-data-table>
                            <v-data-table
                                v-show="item.tab == 'Prediction Score'"
                                dense
                                :headers.sync="scoresHeader"
                                :items.sync="data.scores"
                                item-key="id"
                                class="elevation-1"
                                :itemsPerPage="15"
                            ></v-data-table>
                        </v-card>
                    </v-tab-item>
                </v-tabs-items>
            </v-card>
        </div>
    </div>
</template>

<script>
import TaskAPI from '../../apis/task';
export default {
    name: 'GetJobByIDPageIndex',
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
            console.log(res);
        },
    },
};
</script>

<style lang="scss" scoped></style>
