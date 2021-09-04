<template>
    <div id="method-page-index">
        <div class="p-8">
            <section id="BESTox-Server" class="mb-8">
                <h2 class="text-4xl">BESTox Server</h2>
                <p>
                    BESTox is a novel convolutional neural network regression model, to predict the
                    acute oral toxicity (LD50) of chemical compounds. In a benchmark experiment
                    using a dataset (Oral Rat LD50 set) of 7413 observations (train/test,
                    5931/1482), BESTox achieved a squared Pearson correlation coefficient (R2) of
                    0.619, root-mean-squared error (RMSE) of 0.603, and mean absolute error (MAE) of
                    0.433.
                </p>
                <p>
                    This model learns the compositional and chemical properties of compounds from
                    their two-dimensional binary matrices. Each matrix encodes the occurrences of
                    certain atom types, number of bonded hydrogens, atom charge, valence, ring,
                    degree, aromaticity, chirality, and hybridization along the SMILES string of a
                    given compound. This model supports SMILES with max length 300 characters,
                    SMILES with less characters will be padded with 0. (The detail presents in
                    Figure 2 and Figure 3)
                </p>
                <v-card class="mx-auto w-4/5 mb-8">
                    <v-img
                        class="white--text align-end w-2/3 m-auto"
                        src="/images/bestox-method-1.png"
                    >
                        <template v-slot:placeholder>
                            <v-skeleton-loader class="mx-auto" type="image"></v-skeleton-loader>
                        </template>
                    </v-img>
                    <v-card-subtitle class="pb-0 flex justify-center items-center"
                        >Figure 1. Illustration of the Binary-Encoded SMILES (BES)
                        method.</v-card-subtitle
                    >
                </v-card>
                <v-card class="mx-auto w-4/5 mb-8">
                    <v-img
                        class="white--text align-end w-2/3 m-auto"
                        src="/images/bestox-method-2.png"
                    >
                        <template v-slot:placeholder>
                            <v-skeleton-loader class="mx-auto" type="image"></v-skeleton-loader>
                        </template>
                    </v-img>
                    <v-card-subtitle class="pb-0 flex justify-center items-center"
                        >Figure 2. Each SMILES character is encoded into a vector of 56 bits; each
                        value, either a 1 or 0, represents the existence of that feature type and
                        the element that it has.
                    </v-card-subtitle>
                </v-card>
                <p>
                    The architecture of our optimized CNN model is presented in Figure. 3. The model
                    contains two convolutional layers (Conv) with 512 and 1024 filters respectively.
                    After each convolutional layer is an average pooling layer and a batch
                    normalization layer (BN). Then, a max pooling layer is used before the learned
                    features fed into the fully connected layers (FC). Four FCs containing 2048,
                    1024, 512, and 256 hidden nodes were found to be the optimal combination for
                    toxicity prediction and the ReLU function is used to generate the prediction
                    output (-log10(LD50 mol/kg)).
                </p>
                <v-card class="mx-auto w-4/5 mb-8">
                    <v-img
                        class="white--text align-end w-2/3 m-auto"
                        src="/images/bestox-method-3.png"
                    >
                        <template v-slot:placeholder>
                            <v-skeleton-loader class="mx-auto" type="image"></v-skeleton-loader>
                        </template>
                    </v-img>
                    <v-card-subtitle class="pb-0 flex justify-center items-center"
                        >Figure 3. Proposed CNN architecture for oral toxicity prediction.
                    </v-card-subtitle>
                </v-card>
            </section>
            <section id="Deep-AmPEP30" class="mb-8">
                <h2 class="text-4xl">Acknowledgement</h2>
                <p>
                    The Oral Rrat LD50 dataset used in this study was kindly provided by the author
                    of TopTox. (Wu, K., Wei, G.W.: Quantitative toxicity prediction using topology
                    based multitask deep neural networks. Journal of chemical information and
                    modeling 58(2), 520–531 (2018))
                </p>
                <v-card class="mx-auto w-4/5 mb-8">
                    <v-card-text>
                        <div>Reference</div>
                        <p class="text-base font-bold text--primary">
                            BESTox: A Convolutional Neural Network Regression Model Based on
                            Binary-Encoded SMILES for Acute Oral Toxicity Prediction of Chemical
                            Compounds.
                        </p>
                        <p>
                            International Conference on Algorithms for Computational Biology.
                            Springer, Cham, 2020.
                        </p>
                        <div class="text--primary">
                            Jiarui Chen, Hong-Hin Cheong, and Shirley Weng In Siu.
                        </div>
                    </v-card-text>
                </v-card>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'ssl-gcn',
    name: 'MethodPageIndex',
    data() {
        return {};
    },
};
</script>

<style scoped>
$navigation-drawer-border-width: 0px !important;
</style>
