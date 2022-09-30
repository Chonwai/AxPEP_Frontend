<template>
    <div id="method-page-index">
        <div class="p-8">
            <section id="Citation" class="mb-8">
                <h2 class="text-4xl">Citation</h2>
                <ReferenceCard
                    authors="Jiarui Chen, Hong-Hin Cheong, and Shirley Weng In Siu."
                    title="xDeep-AcPEP: Deep Learning Method for Anticancer Peptide Activity Prediction based on Convolutional Neural Network and Multi-Task Learning."
                    subtitle="American Chemical Society, 2021 (published)"
                    link="https://pubs.acs.org/doi/10.1021/acs.jcim.1c00181"
                />
            </section>
            <section id="ACP" class="mb-8">
                <h2 class="text-4xl">What are Anticancer Peptides (ACP)?</h2>
                <p>
                    Cancer is one of the leading causes of death worldwide. Conventional cancer
                    treatment relies on radiotherapy and chemotherapy, but both methods bring severe
                    side effects to patients, as these therapies not only attack cancer cells but
                    also damage normal cells. Anticancer peptides (ACPs) are a promising alternative
                    as therapeutic agents that are efficient and selective against tumor cells.
                    Several modes of mechanism of ACPs are known: They attack cancers by disrupting
                    their cell membranes. They penetrate into the mitochondria, causing release of
                    cytochrome C and apoptosis. They may target certain membrane receptors,
                    modulating signal transduction and cell cycle.
                </p>
                <ImageCard src="/images/acp.png" />
            </section>
            <section id="AcPEP" class="mb-8">
                <h2 class="text-4xl">AcPEP: Method to Classify ACPs and non-ACPs</h2>
                <p>
                    The development of the ACP classifier is presented in Figure. It includes
                    feature extraction (step 1) – each sample sequence was converted into numerical
                    feature vectors of 32 feature groups using iFeature. Initial feature group
                    selection (step 2) – The feature groups were evaluated for target relevance by
                    comparing the performance of their Random Forest models. Model selection (step
                    3) – The features of the best performing feature groups were concatenated and
                    subjected to extensive evaluation using a combination of feature preprocessing,
                    feature selection and learning algorithms to build prediction models which
                    8+1(raw method) feature preprocessing methods, 6+1(raw method) feature selection
                    methods and 5 learning algorithm as shown in Figure. So totally 315 different
                    model training procedures were compared by 10-fold cross validation to identify
                    the optimal one.
                </p>
                <ImageCard
                    src="/images/acp-classifier.png"
                    caption="Figure 3. The development of the ACP classifier."
                />
            </section>
            <section id="AcPEP" class="mb-8">
                <h2 class="text-4xl">
                    xDeep-AcPEP: Method to Predict the Biological Activity of ACPs against Cancers
                </h2>
                <p>
                    xDeep-AcPEP is a novel regression method based on convolutional neural network
                    and multi-task learning to predict the bioactivity of anticancer peptides. A set
                    of cancer-specific models were trained using the CancerPPD data sets to predict
                    for six tumor cells: breast, colon, cervix, lung, skin, and prostate.
                </p>
                <p>
                    As shown in the workflow figure (Figure 1), we chose the following 4 descriptors
                    to describe a sequence into numerical form: AAINDEX (AAI), BLOSUM62 (BLO),
                    Z-scale descriptor (ZSC) and Binary profile (BIN). The encoder contains two
                    1D-convolutional layers with ReLU, two average pooling layers, two batch
                    normalization layers and one max pooling layer. The regressor contains three
                    fully connected layers with one final output neuron. We define the applicability
                    domain (AD) of each model to allow estimation of the uncertainty in the
                    prediction for an unknown instance. The Euclidean distance between an instance
                    and the centroid of the training data in the feature space is measured. If the
                    instance is within a pre-defined cutoff (Z), then prediction can be made with
                    confidence.
                </p>
                <ImageCard
                    src="/images/xdeep-acpep.png"
                    caption="Figure 1. The development workflow of xDeep-AcPEP."
                />
            </section>
            <section id="Model-Performance" class="mb-8">
                <h2 class="text-4xl">Model Performance</h2>
                <p>
                    Using repeated five-fold cross validation, we assessed the performance of our
                    models in a range of AD cutoffs (Z=0.5 to 2.0), i.e. four domains with
                    incremental coverage areas were defined. The results in Figure 2 show:
                </p>
                <ol class="list-decimal">
                    <li>
                        <p>
                            For all tissue types, there is a trend that the performance of the model
                            improves as the scope of the AD shrinks (decreasing Z).
                        </p>
                    </li>
                    <li>
                        <p>
                            With AD shrinks, a large amount of data is dropout and may lead to an
                            unstable change in the resulting model (increasing standard deviation).
                        </p>
                    </li>
                </ol>
                <p>
                    Switching from Z= 1.0 to Z= 0.5, a large amount of data is dropout that led to a
                    substantial change in the resulting model. We want to find a balance between
                    data coverage and model performance, i.e. we want to include as much data as
                    possible while trying to reduce noisy data or outliners that are affecting the
                    performance. Because of the unstable performance of the AD models using Z= 0.5,
                    we eventually selected 1.0 as the default Z value.
                </p>
                <p>
                    Overall, the optimal models with AD=1.0 achieve an average MSE of 0.24 (-log M)
                    and PCC of 0.74.
                </p>
                <ImageCard
                    src="/images/multi-task-model-with-different-ad-ratio.png"
                    caption="Figure 2. Multi-task models with different AD cutoffs."
                />
            </section>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'acpep',
    name: 'MethodPageIndex',
    data() {
        return {};
    },
};
</script>

<style scoped>
$navigation-drawer-border-width: 0px !important;
</style>
