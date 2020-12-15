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
            </template>
            <template v-slot:item.action="{ item }">
                <v-chip color="primary" label v-show="item.action == 'finished'">
                    {{ item.action }}
                </v-chip>
                <v-chip
                    color="cyan"
                    text-color="white"
                    label
                    v-show="item.action == 'running'"
                    class="flex flex-col"
                >
                    {{ item.action }}
                </v-chip>
            </template>
            <template v-slot:item.created_at="{ item }">
                <v-chip>
                    {{ new Date(item.created_at).toISOString().slice(0, 19).replace('T', ' ') }}
                </v-chip>
            </template>
        </v-data-table>
        <v-pagination
            class="mb-4"
            v-model="current_page"
            :length="last_page"
            @input="pagination"
        ></v-pagination>
    </div>
</template>

<script>
import TaskAPI from '../../apis/task';
export default {
    name: 'RetrievePageIndex',
    data() {
        return {
            email: this.$route.params.email,
            loading: true,
            total: 0,
            data: [],
            itemsPerPage: 20,
            current_page: 1,
            last_page: 1,
            headers: [
                {
                    text: 'Job ID',
                    align: 'start',
                    sortable: false,
                    value: 'id',
                },
                { text: 'Description', value: 'description' },
                { text: 'Status', value: 'action' },
                { text: 'Created At', value: 'created_at' },
            ],
        };
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            this.updateTable();
        },
        async updateTable() {
            this.loading = true;
            let res = await TaskAPI.getSpecifyTasksByEmail(this.email, this.current_page);
            this.data = res.message.data;
            this.total = res.message.total;
            this.itemsPerPage = res.message.per_page;
            this.current_page = res.message.current_page;
            this.last_page = res.message.last_page;
            this.loading = false;
        },
        pagination(current_page) {
            this.current_page = current_page;
            this.updateTable();
        },
        retrieve(id) {
            this.$router.push({ name: 'jobs-id', params: { id: id } });
        },
    },
};
</script>
