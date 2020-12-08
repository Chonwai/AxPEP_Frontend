<template>
    <div class="input-fasta-area-container">
        <v-textarea
            v-show="source === 'textarea'"
            outlined
            label="Input Sequences"
            value=""
        ></v-textarea>
        <v-file-input
            v-show="source === 'file'"
            show-size
            v-model="file"
            accept=".fasta"
            placeholder="Upload your FASTA file"
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
                <v-radio label="Upload FASTA sequences (.fasta)" value="file"></v-radio>
                <v-radio label="Option 2" value="radio-2"></v-radio>
            </v-radio-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputFASTAArea',
    data() {
        return {
            source: 'textarea',
            file: [],
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
