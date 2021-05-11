<template>
    <div class="input-fasta-area-component">
        <v-textarea
            v-show="source === 'textarea'"
            outlined
            label="Input Sequences"
            value=""
            v-model="handleTextarea"
        ></v-textarea>
        <v-file-input
            v-show="source === 'file'"
            show-size
            v-model="handleFile"
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
        <div v-show="source === 'codon'">
            <v-file-input
                show-size
                v-model="handleFile"
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
            <v-select
                v-model="handleCodon"
                :items="getCodonList"
                label="*Please Select Codon Table:"
                dense
                prepend-icon="mdi-table"
            ></v-select>
        </div>
        <div>
            <v-radio-group v-model="handleSource" row>
                <v-radio label="Type manually" value="textarea"></v-radio>
                <v-radio label="Upload FASTA sequences (.fasta)" value="file"></v-radio>
                <v-radio
                    v-if="application === 'ampep'"
                    label="Upload Genome sequences (.fasta, max. file size 50 MB)"
                    value="codon"
                ></v-radio>
            </v-radio-group>
        </div>
    </div>
</template>

<script>
import CodonAPI from '../apis/codon';
export default {
    name: 'InputFASTAArea',
    props: ['application'],
    data() {
        return {
            source: 'textarea',
            file: [],
            textarea: '',
            codonList: [],
            codon: false,
        };
    },
    async mounted() {
        const res = await CodonAPI.getAllCodons();
        this.codonList = res.message;
        this.$emit('source', this.source);
    },
    computed: {
        getCodonList() {
            return this.codonList.map(condon => {
                return condon.name;
            });
        },
        handleTextarea: {
            get() {
                return this.textarea;
            },
            set(value) {
                this.textarea = value;
                this.$emit('file', value);
            },
        },
        handleFile: {
            get() {
                return this.file;
            },
            set(value) {
                this.file = value;
                this.$emit('file', value);
            },
        },
        handleSource: {
            get() {
                return this.source;
            },
            set(value) {
                this.source = value;
                this.$emit('source', value);
            },
        },
        handleCodon: {
            get() {
                return this.codon;
            },
            set(value) {
                this.codon = value;
                let target = this.codonList.find(this.findCodonID);
                this.$emit('codon', target.codons_number);
            },
        },
    },
    methods: {
        findCodonID(codon) {
            return codon.name == this.codon;
        },
    },
};
</script>

<style lang="scss" scoped></style>
