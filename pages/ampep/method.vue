<template>
    <div id="method-page-index" class="p-0 md:p-8">
        <section id="AxPEP-Server" class="mb-8">
            <h2 class="text-4xl">AxPEP Server</h2>
            <p>
                Antimicrobial peptides (AMPs) are promising candidates in the fight against
                multidrug-resistant pathogens due to its broad range of activities and low toxicity.
                Some AMPs also display antitumor and antivirus functions making them alternative
                drug candidates for these important diseases. To facilitate the discovery of AMPs
                and their functions, we provide this one-stop server for antimicrobial peptide and
                other activity prediction for unknown sequences. Three methods are currently
                available:
            </p>
            <ul>
                <li><a href="#AxPEP-Server">AmPEP</a>: Predict antimicrobial activity</li>
                <li>
                    <a href="#Deep-AmPEP30">Deep-AmPEP30</a>: Predict antimicrobial activity of
                    short peptides with length <= 30 AA
                </li>
                <li><a href="#AcPEP">AcPEP</a>: Predict anticancer activity (under development)</li>
            </ul>
            <p>
                Our methods and server are in constant development. How often is our server
                accessed? See <a href="/">statistics page</a>.
            </p>
        </section>
        <section id="Antimicrobial-Peptide-Prediction" class="mb-8">
            <h2 class="text-4xl">AmPEP: Antimicrobial Peptide Prediction</h2>
            <p>
                AmPEP is a sequence-based classification method for AMP using random forest. The
                prediction model is based on the distribution patterns of amino acid properties
                along the sequence:
            </p>
            <v-card class="mx-auto w-4/5 mb-8">
                <v-img class="white--text align-end w-2/3 m-auto" src="/images/ampep.png">
                    <template v-slot:placeholder>
                        <v-skeleton-loader class="mx-auto" type="image"></v-skeleton-loader>
                    </template>
                </v-img>
                <v-card-subtitle class="pb-0 flex justify-center items-center"
                    >Figure 1: Encode a peptide sequence into distribution patterns of 7-type &
                    3-class of physiochemical properties.</v-card-subtitle
                >
            </v-card>
            <p>
                Using our collection of large and diverse set of AMP/non-AMP data (3268/166791
                sequences), we evaluated 19 random forest classifiers with different
                positive:negative data ratios by 10-fold cross-validation. Our optimal model, AmPEP
                with 1:3 data ratio achieved a very high accuracy of 96%, MCC of 0.9, AUC-ROC of
                0.99 and Kappa statistic of 0.9. Descriptor analysis by Pearson correlation
                coefficients of AMP/non-AMP distributions revealed that reduced feature sets (from
                full-feature of 105 to minimal-feature of 23) can achieve comparable performance in
                all aspects except some reductions in precision. Furthermore, AmPEP achieved high
                performance in terms of AUC-ROC (0.995), AUC-PR (0.957), MCC (0.921) and kappa
                (0.962) using a benchmark dataset. Our performance is 1-5% better than two published
                methods iAMPpred and iAMP-2L.
            </p>
            <v-card class="mx-auto w-4/5 mb-8">
                <v-img class="white--text align-end w-1/3 m-auto" src="/images/ampep_2.png">
                    <template v-slot:placeholder>
                        <v-skeleton-loader class="mx-auto" type="image"></v-skeleton-loader>
                    </template>
                </v-img>
                <v-card-subtitle class="pb-0 flex justify-center items-center"
                    >Figure 2: The prediction model of AmPEP is based on random forest (originally
                    implemented in MATLAB, but now in R for online server).</v-card-subtitle
                >
            </v-card>
            <p>
                This online prediction model has been reimplemented in R and tested to achieve very
                close accuracy to our original MATLAB implementation used for publication. If you
                want to run the MATLAB code yourself, feel free to
                <a href="https://sourceforge.net/projects/axpep/files/AmPEP_MATLAB_code/"
                    >download it from here</a
                >. A re-implementation of the AmPEP with Python is also available
                <a href="http://47.57.24.139/AxPEP/?action=datamethod#deepampep30">here</a>.
            </p>
            <v-card class="mx-auto w-4/5 mb-8">
                <v-card-text>
                    <div>Reference</div>
                    <p class="text-base font-bold text--primary">
                        AmPEP: Sequence-based prediction of antimicrobial peptides using
                        distribution patterns of amino acid properties and random forest.
                    </p>
                    <p>Scientific Reports, 1697 (2018).</p>
                    <div class="text--primary">
                        Pratiti Bhadra, Jielu Yan, Jinyan Li, Simon Fong, and Shirley W. I. Siu.*
                    </div>
                </v-card-text>
            </v-card>
        </section>
        <section id="Deep-AmPEP30" class="mb-8">
            <h2 class="text-4xl">Deep-AmPEP30: Short Antimicrobial Peptide Prediction</h2>
            <v-card class="mx-auto w-4/5 mb-8">
                <v-img
                    class="white--text align-end w-2/3 m-auto"
                    src="/images/deep-ampep30-web.png"
                >
                    <template v-slot:placeholder>
                        <v-skeleton-loader class="mx-auto" type="image"></v-skeleton-loader>
                    </template>
                </v-img>
            </v-card>
            <p>
                Short-length AMPs are considered better drug options as they have enhanced
                antimicrobial activities, higher stability, and lower manufacturing cost. As
                existing AMP prediction methods often mixing long sequences and short sequences in
                both the training and validation of the prediction model, we found out that their
                prediction accurcies are surprisingly low (60-77%) for short AMPs. To meet the needs
                of short AMP prediction, we developed Deep-AmPEP30. This is a sequence-based
                classification method using selected types of PseKRAAC reduced amino acids
                composition as features (see Figure 3) and convolutional neural network as learning
                algorithm. Deep-AmPEP30 was tuned to optimize the prediction of short AMPs of 30 AA
                or less in length and tested to achieve good performances in accuracy 83%, AUC-ROC
                0.92 and AUC-PR 0.94.
            </p>
            <v-card class="mx-auto w-4/5 mb-8">
                <v-img class="white--text align-end w-2/3 m-auto" src="/images/deep-ampep30-1.png">
                    <template v-slot:placeholder>
                        <v-skeleton-loader class="mx-auto" type="image"></v-skeleton-loader>
                    </template>
                </v-img>
                <v-card-subtitle class="pb-0 flex justify-center items-center"
                    >Figure 3. Steps to generate the feature vector of an example peptide sequence
                    using PseKRAAC feature Type 7-Cluster 15.
                </v-card-subtitle>
            </v-card>
            <v-card class="mx-auto w-4/5 mb-8">
                <v-img class="white--text align-end w-2/3 m-auto" src="/images/deep-ampep30-2.png">
                    <template v-slot:placeholder>
                        <v-skeleton-loader class="mx-auto" type="image"></v-skeleton-loader>
                    </template>
                </v-img>
                <v-card-subtitle class="pb-0 flex justify-center items-center"
                    >Figure 4. The architecture of our CNN-based classifier for short AMP
                    prediction.
                </v-card-subtitle>
            </v-card>
            <v-card class="mx-auto w-4/5 mb-8">
                <v-card-text>
                    <div>Reference</div>
                    <p class="text-base font-bold text--primary">
                        Deep-AmPEP30: Improve short antimicrobial peptides prediction with deep
                        learning.
                    </p>
                    <p>Submitted.</p>
                    <div class="text--primary">
                        Pratiti Bhadra, Jielu Yan, Ang Li, Pooja Sethiya, Longguang Qin, Hio Kuan
                        Tai, Koon Ho Wong, and Shirley W. I. Siu.*
                    </div>
                </v-card-text>
            </v-card>
        </section>
        <section id="AcPEP" class="mb-8">
            <h2 class="text-4xl">AcPEP: Anti-Cancer Peptide Prediction (under development)</h2>
            <p>
                An enduring challenge in cancer drug discovery is to identify highly selective
                molecules that can target cancer cells with minimum disruption of normal cells.
                Because short-chain anticancer peptides display high specificity and low toxicity,
                they are believed to be a promising solution as the next generation of cancer
                therapeutics.
            </p>
            <p>
                To facilitate the drug discovery process, we propose an anticancer peptide
                prediction method based on Chou's amphiphilic pseudo amino acid composition
                (Am-Pse-AAC), anticancer profile sequence similarity scores (PSI-BLAST-Sc), and
                water-membrane partitioning free energies of peptides (dG-Part). PSI-BLAST-Sc
                captures the evolutionary relation among the anticancer peptides, and dG-Part
                characterizes the ability of peptides to partition into the surface and center of
                cell membranes. Using three independent datasets, we compared our models to
                state-of-the-art methods with respect to sensitivity, specificity, accuracy, and
                Matthew's correlation coefficient. Our three-feature model trained with support
                vector machine consistently outperformed existing methods on 5-, 10-fold, or
                leave-one-out cross-validation. Our prediction accuracy is in the range of 92-96% in
                all three datasets, with Matthew's correlation coefficient 2-11% above that of the
                best existing methods.
            </p>
            <p>
                Results of our study show that our proposed method shows promise for anticancer
                peptide prediction. New features PSI-BLAST-Sc and dG-Part can supplement the
                well-established Am-Pse-AAC to classify anti-cancer peptides more selectively,
                specifically, and precisely. For future work, the dG-Part feature can be further
                improved by adopting cancer membrane models in the theoretical calculation of the
                transfer free energy scale.
            </p>
            <v-card class="mx-auto w-4/5 mb-8">
                <v-card-text>
                    <div>Reference</div>
                    <p class="text-base font-bold text--primary">
                        A machine learning approach to anticancer peptide prediction using amino
                        acid composition, profile similarity, and water-membrane partitioning free
                        energy.
                    </p>
                    <p>Manuscript in Preparation (2018).</p>
                    <div class="text--primary">
                        Pratiti Bhadra, Jielu Yan, and Shirley W. I. Siu.*
                    </div>
                </v-card-text>
            </v-card>
        </section>
    </div>
</template>

<script>
export default {
    layout: 'ampep',
    name: 'MethodPageIndex',
    data() {
        return {
            items: [
                { title: 'Home', icon: 'mdi-home-city' },
                { title: 'My Account', icon: 'mdi-account' },
                { title: 'Users', icon: 'mdi-account-group-outline' },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
$navigation-drawer-border-width: 0px !important;
</style>
