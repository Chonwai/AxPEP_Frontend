<template>
    <div class="input-fasta-area-component">
        <v-textarea
            v-if="application === 'bestox'"
            v-show="source === 'textarea'"
            outlined
            label="Input your SMILES"
            value=""
            v-model="textarea"
        ></v-textarea>
        <v-textarea
            v-if="application === 'ssl-bestox'"
            v-show="source === 'textarea'"
            outlined
            label="Input your Sequences"
            value=""
            v-model="textarea"
        ></v-textarea>
        <div v-show="source === 'draw'">
            <center>
                <div>
                    <br />
                    <canvas id="sketcher"></canvas>
                </div>
            </center>
        </div>
        <v-file-input
            v-if="application === 'bestox'"
            v-show="source === 'file'"
            show-size
            v-model="file"
            accept=".smi"
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
        <v-file-input
            v-if="application === 'ssl-bestox'"
            v-show="source === 'file'"
            show-size
            v-model="file"
            accept=".fasta"
            placeholder="Upload a FASTA document:"
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
                <v-radio
                    v-if="application === 'ssl-bestox'"
                    label="Upload FASTA sequences (.fasta)"
                    value="file"
                ></v-radio>
                <v-radio
                    v-else-if="application === 'bestox'"
                    label="Upload a file of SMILES (max. 500 SMILES)"
                    value="file"
                ></v-radio>
            </v-radio-group>
        </div>
    </div>
</template>

<script>
export default {
    name: 'InputBESToxAreaComponent',
    props: ['application'],
    data() {
        return {
            source: 'textarea',
            file: [],
            textarea: '',
        };
    },
    mounted() {
        console.log('The version of ChemDoodle installed is: ' + ChemDoodle.getVersion());
        ChemDoodle.ELEMENT['H'].jmolColor = 'black';
        ChemDoodle.ELEMENT['S'].jmolColor = '#B9A130';
        var sketcher = new ChemDoodle.SketcherCanvas('sketcher', 500, 300, {
            useServices: true,
            oneMolecule: true,
        });
        sketcher.styles.atoms_displayTerminalCarbonLabels_2D = true;
        sketcher.styles.atoms_useJMOLColors = true;
        sketcher.styles.bonds_clearOverlaps_2D = true;
        sketcher.repaint();
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
