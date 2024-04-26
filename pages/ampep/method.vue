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
                    <a href="#Deep-AmPEP30">Deep-AmPEP30</a>: Convolutional neural network model for
                    short sequence <=30 residues
                </li>
                <li>
                    <a href="#AcPEP">RF-AmPEP30</a>: Random forest model for short sequence <=30
                    residues
                </li>
                <li>
                    <a href="#ProtBERT-Finetuned-AMP-Regressors">BERT-AmPEP60</a>: Peptide minimum

                    inhibitory concentration (MIC) prediction against <i>E. coli</i> and <i>S. aureas</i> for
                    sequences between 5 and 60 residues.
                </li>
            </ul>
            <p>
                Our methods and server are in constant development. How often is our server
                accessed? See <a href="/">statistics page</a>.
            </p>
        </section>
        <section id="Deep-AmPEP30" class="mb-8">
            <h2 class="text-4xl">Deep-AmPEP30: Short Antimicrobial Peptide Prediction</h2>
            <ImageCard src="/images/deep-ampep30-web.png" />
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
            <ImageCard
                src="/images/deep-ampep30-1.png"
                caption="Figure 3. Steps to generate the feature vector of an example peptide sequence
                    using PseKRAAC feature Type 7-Cluster 15."
            />
            <ImageCard
                src="/images/deep-ampep30-2.png"
                caption="Figure 4. The architecture of our CNN-based classifier for short AMP
                    prediction."
            />
            <ReferenceCard
                authors="Yan, J.; Bhadra, P.; Li, A.; Sethiya, P.; Qin, L.; Tai, H. K.; Wong, K. H.; and Siu, Shirley W. I.* "
                title="Deep-AmPEP30: Improve short antimicrobial peptides prediction with deep learning."
                subtitle="Molecular Therapy - Nucleic Acid 2020, 20, 882-894."
                link="https://www.sciencedirect.com/science/article/pii/S2162253120301323"
            />
        </section>
        <section id="Antimicrobial-Peptide-Prediction" class="mb-8">
            <h2 class="text-4xl">AmPEP: Antimicrobial Peptide Prediction</h2>
            <p>
                AmPEP is a sequence-based classification method for AMP using random forest. The
                prediction model is based on the distribution patterns of amino acid properties
                along the sequence:
            </p>
            <ImageCard
                src="/images/ampep.png"
                caption="Figure 1: Encode a peptide sequence into distribution patterns of 7-type &
                    3-class of physiochemical properties."
            />
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
            <ImageCard
                src="/images/ampep_2.png"
                caption="Figure 2: The prediction model of AmPEP is based on random forest (originally
                    implemented in MATLAB, but now in R for online server)."
                direction="vertical"
            />
            <p>
                This online prediction model has been reimplemented in R and tested to achieve very
                close accuracy to our original MATLAB implementation used for publication. If you
                want to run the MATLAB code yourself, feel free to
                <a href="https://sourceforge.net/projects/axpep/files/AmPEP_MATLAB_code/"
                    >download it from here</a
                >. A re-implementation of the AmPEP with Python is also available
                <a href="http://47.57.24.139/AxPEP/?action=datamethod#deepampep30">here</a>.
            </p>
            <ReferenceCard
                authors="Bhadra, P.; Yan, J.; Li, J.; Fong, S.; Siu, Shirley W. I.*"
                title="AmPEP: Sequence-based prediction of antimicrobial peptides using distribution patterns of amino acid properties and random forest."
                subtitle="Scientific Reports 2018, 8, 1697."
                link="https://www.nature.com/articles/s41598-018-19752-w"
            />
        </section>
        <section id="ProtBERT-Finetuned-AMP-Regressors" class="mb-8">
            <h2 class="text-4xl">
                ProtBERT finetuned AMP regressors: BERT based regression models to predict MIC
                values against <i>Escherichia coli</i> (EC) and <i>Staphylococcus aureus</i> (SA)
            </h2>
            <p>
                ProtBERT finetuned AMP regressors: Antimicrobial Peptide Activity Prediction for
                sequences with 5 to 60 residues
            </p>
            <p>
                We proposed a deep learning model based on the fine-tuned Bidirectional Encoder
                Representations from Transformers (BERT) architecture to extract embedding features
                from input sequences and predict minimum inhibitory concentrations (MICs) for target
                bacterial species. Using the transfer learning strategy, we built regression models
                for <i>Escherichia coli</i> (EC) and <i>Staphylococcus aureus</i> (SA) using data curated from
                DBAASP. In five independent experiments with 10% leave-out sequences as test sets,
                the optimal EC and SA models achieved an average mean squared error of 0.2664 and
                0.7530 (log µM), respectively. They also showed a Pearson’s correlation coefficient
                of 0.7955 and 0.7530, and a Kendall’s tau coefficient of 0.5797 and 0.5222,
                respectively.
            </p>
            <ImageCard
                src="/images/protBERT-finetune-AMP-regressor.png"
                caption="Figure 5: Overview of the proposed model. Each amino acid sequence is first tokenized for data representation, and the BERT encoder layers derived from the pre-trained ProtBERT model are fine-tuned for the downstream AMP regression task."
                direction="vertical"
            />
        </section>
    </div>
</template>

<script>
import ReferenceCard from '@/components/ReferenceCard';
import ImageCard from '@/components/ImageCard';
export default {
    layout: 'ampep',
    name: 'MethodPageIndex',
    components: {
        ReferenceCard,
        ImageCard,
    },
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
