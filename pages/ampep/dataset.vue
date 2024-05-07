<template>
    <div id="dataset-page-index" class="p-0 md:p-8">
        <section id="Dataset" class="mb-8">
            <h2 class="text-4xl">Dataset</h2>
            <p>
                Datasets are provided here for the purpose of reproducibility and future method
                testing. If you are looking for information about AMP sequences, you are recommended
                to visit other AMP databases such as ADP, CAMP, LAMP, etc. Our datasets here were
                collected from these databases and filtered out sequences with non-natural amino
                acids.
            </p>
        </section>
        <section id="Anti-Microbial-Peptides" class="mb-8">
            <h2 class="text-4xl">Anti-Microbial Peptides</h2>
            <p>Data used for constructing the AmPEP prediction model.</p>
            <div class="flex flex-row justify-center mb-4">
                <DownloadCard
                    class="flex-1"
                    title="AMP"
                    text="Unique data collected from ADP3, CAMPR3, LAMP. All non-natural amino acids were removed."
                    downloadLink="https://sourceforge.net/projects/axpep/files/AmPEP_datasets/"
                />
                <DownloadCard
                    class="flex-1"
                    title="Non-AMP"
                    text="Generated from Uniprot sequences without annotation of AMP, membrane, toxic, secretory, defensing, antibiotic, anticancer, antiviral and antifungal."
                    downloadLink="https://sourceforge.net/projects/axpep/files/AmPEP_datasets/"
                />
            </div>
            <p>
                Benchmark datasets from Xiao et al. (iAMP-2L) for methods comparison can be
                <a href="http://www.jci-bioinfo.cn/iAMP/data.html">downloaded from here</a>.
            </p>
            <ReferenceCard
                authors="Bhadra, P.; Yan, J.; Li, J.; Fong, S.; Siu, Shirley W. I.*"
                title="AmPEP: Sequence-based prediction of antimicrobial peptides using distribution patterns of amino acid properties and random forest."
                subtitle="Scientific Reports 2018, 8, 1697."
                link="https://www.nature.com/articles/s41598-018-19752-w"
            />
        </section>
        <section id="Short-Anti-Microbial-Peptides" class="mb-8">
            <h2 class="text-4xl">Short Anti-Microbial Peptides</h2>
            <ImageCard src="/images/deep-ampep30-web.png" />
            <p>
                Data is filtered from our AmPEP dataset, include sequences only with 5-30 AA in
                length. This dataset is used for constructing the Deep-AmPEP30 and RF-AmPEP30
                prediction models. An independent dataset was constructed as benchmark to compare
                model performances with other existing methods.
            </p>
            <div class="flex flex-row justify-center mb-4">
                <DownloadCard
                    class="flex-1"
                    title="Train Dataset"
                    text="1529 positives and 1529 negatives"
                    downloadLink="https://sourceforge.net/projects/axpep/files/Deep-AmPEP30_datasets/"
                />
                <DownloadCard
                    class="flex-1"
                    title="Test Dataset (Benchmark)"
                    text="94 positives and 94 negatives"
                    downloadLink="https://sourceforge.net/projects/axpep/files/Deep-AmPEP30_datasets/"
                />
            </div>
            <ReferenceCard
                authors="Yan, J.; Bhadra, P.; Li, A.; Sethiya, P.; Qin, L.; Tai, H. K.; Wong, K. H.; and Siu, Shirley W. I.* "
                title="Deep-AmPEP30: Improve short antimicrobial peptides prediction with deep learning."
                subtitle="Molecular Therapy - Nucleic Acid 2020, 20, 882-894."
                link="https://www.sciencedirect.com/science/article/pii/S2162253120301323"
            />
        </section>
        <section id="ProtBERT-finetuned-AMP-Regressors" class="mb-8">
            <h2 class="text-4xl">ProtBERT-finetuned-AMP-Regressors</h2>
            <p>
                Antimicrobial peptides: Data is curated from DBAASP, it includes sequences only with
                5-60 AA in length. The activity values of the peptides were converted to pMIC (),
                where the unit of MIC is µM. This dataset was used to construct regression models
                for Escherichia coli and Staphylococcus aureus.
                <br />
                <br />
                Dataset for Escherichia coli has a median MIC value of 13.49 µM (corresponding to a
                pMIC of −1.13): 4042 sequences. EC.csv
                <br />
                Train dataset for Escherichia coli: 3638 sequences. train-EC.csv
                <br />
                Test dataset for Escherichia coli: 404 sequences. test-EC.csv
                <br />
                <br />
                Dataset for Staphylococcus aureus has a median MIC value of 16.22 µM (corresponding
                to a pMIC of −1.21): 3275 sequences. SA.csv
                <br />
                Train dataset for Staphylococcus aureus: 2947 sequences. train-SA.csv
                <br />
                Test dataset for Staphylococcus aureus: 328 sequences. test-SA.csv
            </p>
            <DownloadCard
                class="flex-1"
                title="ProtBERT-finetuned-AMP-Regressors"
                text="Data is curated from DBAASP, it includes sequences only with 5-60 AA in length"
                downloadLink="https://github.com/janecai0714/AMP_regression_EC_SA/tree/master/data"
            />
        </section>
    </div>
</template>

<script>
import DownloadCard from '@/components/DownloadCard';
import ReferenceCard from '@/components/ReferenceCard';
import ImageCard from '@/components/ImageCard';
export default {
    layout: 'ampep',
    name: 'DatasetPageIndex',
    components: {
        DownloadCard,
        ReferenceCard,
        ImageCard,
    },
};
</script>
