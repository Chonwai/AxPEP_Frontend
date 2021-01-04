<template>
    <div>
        <v-data-table
            dense
            :headers.sync="header"
            :items.sync="items"
            item-key="id"
            class="elevation-1"
            :itemsPerPage="15"
            show-expand
        >
            <template v-slot:expanded-item="{ headers, item }">
                <td :colspan="headers.length">Sequence: {{ item.sequence.substring(0, 50) }}...</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
    name: 'ResultTableIndex',
    props: {
        header: {
            type: Array,
            default: () => {
                return [];
            },
        },
        items: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
};
</script>
