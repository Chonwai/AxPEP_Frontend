<template>
    <div id="retrieve-page-index" class="py-8">
        <h2 class="text-xl mb-4">
            Email: <b>{{ email }}</b>
        </h2>
        <v-data-table
            class="mb-4 elevation-1"
            :headers="headers"
            :items="data"
            :loading="loading"
            :server-items-length="total"
            :itemsPerPage="itemsPerPage"
            hide-default-footer
        >
            <template v-slot:item.id="{ item }">
                <v-btn
                    v-show="item.action == 'finished'"
                    text
                    color="success"
                    @click="retrieve(item.id)"
                    ><v-icon left> mdi-magnify </v-icon>{{ item.id }}</v-btn
                >
                <v-btn v-show="item.action == 'running'" text disabled
                    ><v-icon left> mdi-pulse </v-icon>{{ item.id }}</v-btn
                >
                <v-btn v-show="item.action == 'failed'" text color="error"
                    ><v-icon left> mdi-close-box </v-icon>{{ item.id }}</v-btn
                >
            </template>
            <template v-slot:item.action="{ item }">
                <v-chip v-show="item.action == 'finished'" color="green" text-color="white" small>{{
                    item.action
                }}</v-chip>
                <v-chip v-show="item.action == 'running'" color="blue" text-color="white" small>{{
                    item.action
                }}</v-chip>
                <v-chip v-show="item.action == 'failed'" color="red" text-color="white" small>{{
                    item.action
                }}</v-chip>
            </template>
            <template v-slot:no-data>
                <div class="text-center">No data available</div>
            </template>
        </v-data-table>
        <div class="text-center">
            <v-pagination v-model="page" :length="pageCount" @input="fetch"></v-pagination>
        </div>
    </div>
</template>

<script>
import TaskAPI from '../../../apis/task';
export default {
    layout: 'hemopep',
    name: 'HemoPepRetrieveTaskIndex',
    data() {
        return {
            email: this.$route.params.email,
            data: [],
            loading: false,
            headers: [
                {
                    text: 'Job ID',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                },
                {
                    text: 'Description',
                    align: 'start',
                    sortable: false,
                    value: 'description',
                },
                {
                    text: 'Created at',
                    align: 'start',
                    sortable: false,
                    value: 'created_at',
                },
                {
                    text: 'Status',
                    align: 'start',
                    sortable: false,
                    value: 'action',
                },
            ],
            page: 1,
            itemsPerPage: 10,
            pageCount: 0,
            total: 0,
        };
    },
    mounted() {
        this.fetch();
        this.runTimer();
    },
    beforeDestroy() {
        clearInterval(this.timer);
    },
    methods: {
        async fetch() {
            this.loading = true;
            try {
                let res = await TaskAPI.getSpecifyTasksByEmail(this.email, this.page, 'hemopep');

                if (res.status && res.message && res.message.data) {
                    this.data = res.message.data;
                    this.pageCount = res.message.last_page;
                    this.total = res.message.total;
                } else {
                    console.error('Invalid response format:', res);
                    this.data = [];
                }
            } catch (error) {
                console.error('Error fetching tasks:', error);
                this.data = [];
            } finally {
                this.loading = false;
            }
        },
        retrieve(id) {
            this.$router.push({
                name: 'hemopep-jobs-id',
                params: { id: id },
            });
        },
        runTimer() {
            this.timer = setInterval(() => {
                this.fetch();
            }, 5000);
        },
    },
};
</script>
