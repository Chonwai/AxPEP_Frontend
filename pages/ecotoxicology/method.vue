<template>
    <div id="method-page-index">
        <div class="p-8">
            <section id="SSL-EcotoxicologyGCN-Server" class="mb-8">
                <h2 class="text-4xl">EcoTox-GCN</h2>
                <p>
                    Graph Convolutional Neural network models for chemical ecotoxicology prediction.
                </p>
            </section>
            <section id="Overview" class="mb-8">
                <h2 class="text-4xl">Overview</h2>
                <p>
                    Currently, Regulating chemicals to protect the environment based on
                    ecotoxicological assessments is a major challenge. However, experimental
                    ecotoxicity tests are time-consuming and expensive, which underscores the need
                    for accurate prediction methods. In this study, we conducted a comprehensive
                    analysis on the application of machine learning and graph-based learning
                    techniques for the ecotoxicological prediction of chemicals. A total of 84
                    models were constructed using a combination of three molecular representations
                    (Morgan, MACCS, Mol2vec), six machine learning algorithms (KNN, NB, RF, SVM,
                    XGB, DNN), and five graph neural networks (GAT, GCN, MPNN, Attentive FP and
                    FPGNN). In predicting the ecotoxicity of three aquatic taxonomic groups - fish,
                    crustaceans, and algae - GCN achieved the best performance overall.
                </p>
                <v-card class="mx-auto w-4/5 mb-8">
                    <v-img
                        class="white--text align-end w-2/3 m-auto"
                        src="/images/ssl-ecotoxicology-gcn-overview.png"
                    >
                        <template v-slot:placeholder>
                            <v-skeleton-loader class="mx-auto" type="image"></v-skeleton-loader>
                        </template>
                    </v-img>
                    <v-card-subtitle class="pb-0 flex justify-center items-center"
                        >Figure 1. Model construction pipeline.</v-card-subtitle
                    >
                </v-card>
            </section>
            <section id="Model-Performance" class="mb-8">
                <h2 class="text-4xl">Model Performance</h2>
                <p>
                    We adopted the scaffold splitting method with splitting ratios of 0.8:0.1:0.1 to
                    divide the dataset into training, validation and test sets. All experiments were
                    repeated 5 times on test set to observe the variability of the results and
                    obtain an accurate measure of model performance through the average ROC-AUC
                    score.
                </p>
                <v-card class="mx-auto w-4/5 mb-8">
                    <v-img
                        class="white--text align-end w-2/3 m-auto"
                        src="/images/ssl-ecotoxicology-gcn-model-performance.png"
                    >
                        <template v-slot:placeholder>
                            <v-skeleton-loader class="mx-auto" type="image"></v-skeleton-loader>
                        </template>
                    </v-img>
                    <v-card-subtitle class="pb-0 flex justify-center items-center"
                        >Figure 2. Test performance of fingerprint-based ecotoxicity prediction
                        models. (A) AUC scores of the Morgan-based models. (B) AUC scores of the
                        MACCS-based models. (C) AUC scores of the Mol2vec-based models. (D) AUC
                        scores of the Graph-based models.</v-card-subtitle
                    >
                </v-card>
                <p>
                    Overall, the predictive performance of molecular graph-based models is generally
                    superior to that of ML and DL models based on molecular fingerprints and
                    molecular embeddings. Consequently, using molecular graph-based models allows
                    for more effective capturing of complex relationships and features within
                    chemical structures, leading to improved predictive performance.
                </p>
            </section>
            <section id="Prediction-Models" class="mb-8">
                <h2 class="text-4xl">Prediction Models</h2>
                <p>
                    This web server offers three ecotoxicological prediction models, namely A2A for
                    Algae, C2C for Crustaceans, and F2F for Fish. According to our evaluations, the
                    accuracy of these models in terms of AUCROC is 0.989 for Algae, 0.984 for
                    Crustaceans, and 0.982-0.992 for Fish.
                </p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'ecotoxicology',
    name: 'MethodPageIndex',
    data() {
        return {};
    },
};
</script>

<style scoped>
$navigation-drawer-border-width: 0px !important;
</style>
