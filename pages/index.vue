<template>
    <div>
        <div
            class="flex flex-col items-center justify-center h-screen mb-4 bg-fixed bg-center bg-cover banner-img"
        >
            <div class="p-4 animate__animated animate__fadeInUp z-50">
                <a class="cursor-pointer" href="https://shirleysiulab.wordpress.com/">
                    <h1 class="text-4xl text-white font-normal" cursor="pointer">
                        Computational Drug Discovery and AI Lab
                    </h1>
                </a>
                <a class="cursor-pointer" href="https://www.mpu.edu.mo/esca/en/aidd.php">
                    <h4 class="text-base text-white font-normal">
                        Centre for Artificial Intelligence Driven Drug Discovery
                        <br />
                        Faculty of Applied Sciences
                        <br />
                        Macao Polytechnic University
                    </h4>
                </a>
            </div>
        </div>
        <v-container class="min-h-80vh">
            <section class="py-4">
                <h2 class="text-2xl font-medium mb-4">Software</h2>
                <p>We share Bioinformatics software and data to facilitate research.</p>
                <v-chip-group mandatory active-class="primary--text mb-4">
                    <div v-for="(item, i) in cardItems" :key="i">
                        <v-chip v-if="item.title != 'LigTMap'" link nuxt :to="item.to">{{
                            item.title
                        }}</v-chip>
                        <v-chip v-if="item.title == 'LigTMap'" :href="item.to">{{
                            item.title
                        }}</v-chip>
                    </div>
                </v-chip-group>
            </section>
            <v-divider></v-divider>
            <section class="py-4">
                <h2 class="text-2xl font-medium mb-4">Applications</h2>
                <div class="md:flex md:flex-wrap">
                    <div class="md:w-1/2 p-1" v-for="(item, i) in cardItems" :key="i">
                        <v-card
                            class="h-full d-flex flex-no-wrap justify-space-between"
                            :color="item.color"
                            dark
                        >
                            <div class="w-2/3">
                                <v-card-title v-text="item.title" class="headline"></v-card-title>
                                <v-card-subtitle v-text="item.subtitle"></v-card-subtitle>
                                <v-card-actions>
                                    <v-btn
                                        v-if="item.title != 'LigTMap'"
                                        class="ml-2 mt-5"
                                        outlined
                                        rounded
                                        small
                                        link
                                        nuxt
                                        :to="item.to"
                                    >
                                        START
                                    </v-btn>
                                    <v-btn
                                        v-if="item.title == 'LigTMap'"
                                        class="ml-2 mt-5"
                                        outlined
                                        rounded
                                        small
                                        link
                                        :href="item.to"
                                    >
                                        START
                                    </v-btn>
                                </v-card-actions>
                            </div>
                            <div class="w-1/3 p-2 relative flex justify-center items-center">
                                <v-img
                                    position="center center"
                                    :contain="true"
                                    :src="item.src"
                                ></v-img>
                            </div>
                        </v-card>
                    </div>
                </div>
            </section>
        </v-container>
    </div>
</template>

<script>
export default {
    layout: 'default',
    name: 'HomePageIndex',
    data() {
        return {
            cardItems: [
                {
                    color: '#3f51b5',
                    src: '/images/AmPEPCard.png',
                    title: 'AmPEP',
                    subtitle: 'Sequence-based classification of Antimicrobial peptides',
                    to: '/ampep/home',
                },
                {
                    color: '#fe6e00',
                    src: '/images/acpep-logo.png',
                    title: 'AcPEP',
                    subtitle: 'Sequence-based classification of Antimicrobial peptides',
                    to: '/acpep/home',
                },
                {
                    color: '#1C2833',
                    src: '/images/BESToxCard.png',
                    title: 'BESTox',
                    subtitle:
                        'Convolutional neural network regression model for acute oral ecotoxicology prediction',
                    to: '/bestox/home',
                },
                {
                    color: '#1C2833',
                    src: '/images/ssl-toxgcn-transparent-logo.png',
                    title: 'SSL-GCN',
                    subtitle:
                        'Compound Ecotoxicology Prediction Based onSemi-supervised Learning and GraphConvolutional Neural Network',
                    to: '/ssl-gcn/home',
                },
                {
                    color: '#89cff0',
                    src: '/images/LigTMapCard.png',
                    title: 'LigTMap',
                    subtitle: 'Target and activity prediction server for small molecules',
                    to: 'https://cbbio.online/LigTMap/',
                },
                {
                    color: '#049068',
                    src: '/images/POSVinaCard.png',
                    title: 'PSOVina',
                    subtitle: 'Fast protein-ligand docking tool based on PSO and AutoDock Vina',
                    to: '/psovina/home',
                },
                {
                    color: '#049068',
                    src: '/images/GWOVinaCard.png',
                    title: 'GWOVina',
                    subtitle: 'Fast Protein-Ligand Docking Tool based on GWO and AutoDock Vina',
                    to: '/gwovina/home',
                },
                {
                    color: '#8b0000',
                    src: '/images/hemopep-logo.png',
                    title: 'BERT-HemoPep60',
                    subtitle:
                        'Predicting Hemolytic Activity of Peptides against Human Red Blood Cells',
                    to: '/hemopep/home',
                },
            ],
        };
    },
    methods: {},
};
</script>

<style lang="scss" scoped>
.banner-img {
    background-image: url('/images/banner.jpg');
}
</style>
