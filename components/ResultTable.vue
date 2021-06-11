<template>
    <div class="result-table-component">
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
                <td v-if="item.hasOwnProperty('sequence')" :colspan="headers.length">
                    Sequence: {{ chopSequence(item.sequence) }}
                </td>
                <td v-if="item.hasOwnProperty('smiles')" :colspan="headers.length">
                    Smile: {{ item.smiles }}
                </td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import Utils from '../utils/utils';
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
    methods: {
        chopSequence(sequence) {
            return Utils.chopSequence(sequence);
        },
    },
};
</script>
