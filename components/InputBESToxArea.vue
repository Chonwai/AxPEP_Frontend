<template>
    <div class="input-fasta-area-component">
        <v-textarea
            v-show="source === 'textarea'"
            outlined
            label="Input your SMILES"
            value=""
            v-model="textarea"
        ></v-textarea>
        <div v-show="source === 'draw'">Draw Something</div>
        <v-file-input
            v-show="source === 'file'"
            show-size
            v-model="file"
            accept=".fasta"
            placeholder="Upload a SMILES document:"
            label="File input"
            prepend-icon="mdi-paperclip"
        >
            <template v-slot:selection="{ text }">
                <v-chip small label color="primary">
                    {{ text }}
                </v-chip>
            </template>
        </v-file-input>
        <div>
            <v-radio-group v-model="source" row>
                <v-radio label="Type manually" value="textarea"></v-radio>
                <v-radio label="Draw the molecule" value="draw"></v-radio>
                <v-radio label="Upload a file of SMILES (max. 500 SMILES)" value="file"></v-radio>
            </v-radio-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputBESToxAreaComponent',
    data() {
        return {
            source: 'textarea',
            file: [],
            textarea: '',
        };
    },
    watch: {
        file: {
            deep: true,
            immediate: true,
            handler: function (val, oldVal) {
                this.$emit('file', val);
            },
        },
        textarea: {
            deep: true,
            immediate: true,
            handler: function (val, oldVal) {
                this.$emit('file', val);
            },
        },
        source: {
            deep: true,
            immediate: true,
            handler: function (val, oldVal) {
                this.$emit('source', val);
            },
        },
    },
};
</script>

<style lang="scss" scoped></style>
