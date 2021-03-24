<template>
    <div>
        <div
            class="flex flex-col items-center justify-center h-80vh mb-4 bg-fixed bg-center bg-cover banner-img"
        >
            <div class="p-4 animate__animated animate__fadeInUp">
                <h1 class="text-4xl text-white font-normal">
                    Computational Biology and Bioinformatics Lab (CBBio)
                </h1>
                <h4 class="text-base text-white font-normal">
                    Department of Computer and Information Science University of Macau
                </h4>
            </div>
        </div>
        <v-container class="min-h-80vh">
            <section class="py-4">
                <h2 class="text-2xl font-medium mb-4">Software</h2>
                <p>We share Bioinformatics software and data to facilitate research.</p>
                <v-chip-group mandatory active-class="primary--text mb-4">
                    <v-chip>AmPEP</v-chip>
                    <v-chip>AcPEP</v-chip>
                    <v-chip>BESTox</v-chip>
                    <v-chip>LigTMap</v-chip>
                    <v-chip>PSOVina</v-chip>
                    <v-chip>GWOVina</v-chip>
                    <v-chip>TMDIM</v-chip>
                    <v-chip>ProtPOS</v-chip>
                    <v-chip>PyMOL mControl</v-chip>
                </v-chip-group>
            </section>
            <v-divider></v-divider>
            <section class="py-4">
                <h2 class="text-2xl font-medium mb-4">Applications</h2>
                <div class="my-4" v-for="(item, i) in cardItems" :key="i">
                    <v-card :color="item.color" dark>
                        <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title v-text="item.title" class="headline"
                                    >AmPEP | AxPEP</v-card-title
                                >
                                <v-card-subtitle v-text="item.subtitle"></v-card-subtitle>
                                <v-card-actions>
                                    <v-btn
                                        class="ml-2 mt-5"
                                        outlined
                                        rounded
                                        small
                                        nuxt
                                        :to="item.to"
                                    >
                                        START
                                    </v-btn>
                                </v-card-actions>
                            </div>
                            <v-avatar class="ma-3 h-full" width="33.3333%" height="100%" tile>
                                <v-img
                                    position="center center"
                                    :contain="true"
                                    :src="item.src"
                                ></v-img>
                            </v-avatar>
                        </div>
                    </v-card>
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
                    title: 'AmPEP | AxPEP',
                    subtitle: 'Sequence-based classification of Antimicrobial peptides',
                    to: '/ampep',
                },
                {
                    color: '#c0d9c2',
                    src: '/images/AmPEPCard.png',
                    title: 'AcPEP | AxPEP',
                    subtitle: 'Sequence-based classification of Antimicrobial peptides',
                    to: '/acpep',
                },
                {
                    color: '#1C2833',
                    src: '/images/BESToxCard.png',
                    title: 'BESTox',
                    subtitle:
                        'Convolutional neural network regression model for acute oral toxicity prediction',
                    to: '/bestox',
                },
                {
                    color: '#89cff0',
                    src: '/images/LigTMapCard.png',
                    title: 'LigTMap',
                    subtitle: 'Target and activity prediction server for small molecules',
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
