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
        <section id="BERT-AmPEP60" class="mb-8">
            <h2 class="text-4xl">BERT-AmPEP60</h2>
            <p>
                The antimicrobial peptide data were curated from DBAASP and include only sequences
                with a length of 5-60 AA. The activity values of the peptides were converted to
                pMIC, where the unit of MIC is µM. These datasets were used to create regression
                models for <i>Escherichia coli</i> and <i>Staphylococcus aureus</i>.
                <br />
                <br />
                Dataset for <i>Escherichia coli</i> has a median MIC value of 13.49 µM
                (corresponding to a pMIC of −1.13):
                <v-data-table
                    :headers="ampRegressorsEscherichiaColiTableHeader"
                    :items="formattedAmpRegressorsEscherichiaColiTableItems"
                    hide-default-footer
                    class="elevation-1 mt-8"
                >
                    <template v-slot:header.escherichia_coli="{ header }">
                        <span v-html="header.text"></span>
                    </template>
                    <template v-slot:item.download="{ item }">
                        <a :href="item.downloadUrl">{{ item.downloadText }}</a>
                    </template>
                </v-data-table>
                <br />
                Dataset for <i><i>Staphylococcus aureus</i></i> has a median MIC value of 16.22 µM
                (corresponding to a pMIC of −1.21):
                <v-data-table
                    :headers="ampRegressorsStaphylococcusAureusTableHeader"
                    :items="formattedAmpRegressorsStaphylococcusAureusTableItems"
                    hide-default-footer
                    class="elevation-1 mt-8"
                >
                    <template v-slot:header.staphylococcus_aureus="{ header }">
                        <span v-html="header.text"></span>
                    </template>
                    <template v-slot:item.download="{ item }">
                        <a :href="item.downloadUrl">{{ item.downloadText }}</a>
                    </template>
                </v-data-table>
            </p>
            <DownloadCard
                class="flex-1"
                title="BERT-AmPEP60 Regressors"
                text="Download All datasets for <i>Escherichia coli</i> and <i>Staphylococcus aureus</i>"
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
    data() {
        return {
            ampRegressorsEscherichiaColiTableHeader: [
                { text: '<i>Escherichia coli</i>', value: 'escherichia_coli', width: '34%' },
                { text: 'No. of Sequences', value: 'no_of_sequences', width: '33%' },
                { text: 'Download', value: 'download', width: '33%' },
            ],
            ampRegressorsEscherichiaColiTableItems: [
                {
                    escherichia_coli: 'All',
                    no_of_sequences: '4042',
                    download:
                        '<a href="https://github.com/janecai0714/AMP_regression_EC_SA/blob/master/data/EC.csv">EC.csv</a>',
                },
                {
                    escherichia_coli: 'Train dataset',
                    no_of_sequences: '3638',
                    download:
                        '<a href="https://github.com/janecai0714/AMP_regression_EC_SA/blob/master/data/train-EC.csv">train-EC.csv</a>',
                },
                {
                    escherichia_coli: 'Test dataset',
                    no_of_sequences: '404',
                    download:
                        '<a href="https://github.com/janecai0714/AMP_regression_EC_SA/blob/master/data/train-SA.csv">test-EC.csv</a>',
                },
            ],
            ampRegressorsStaphylococcusAureusTableHeader: [
                {
                    text: '<i>Staphylococcus aureus</i>',
                    value: 'staphylococcus_aureus',
                    width: '34%',
                },
                { text: 'No. of Sequences', value: 'no_of_sequences', width: '33%' },
                { text: 'Download', value: 'download', width: '33%' },
            ],
            ampRegressorsStaphylococcusAureusTableItems: [
                {
                    staphylococcus_aureus: 'All',
                    no_of_sequences: '3275',
                    download:
                        '<a href="https://github.com/janecai0714/AMP_regression_EC_SA/blob/master/data/SA.csv">SA.csv</a>',
                },
                {
                    staphylococcus_aureus: 'Train dataset',
                    no_of_sequences: '2947',
                    download:
                        '<a href="https://github.com/janecai0714/AMP_regression_EC_SA/blob/master/data/train-SA.csv">train-SA.csv</a>',
                },
                {
                    staphylococcus_aureus: 'Test dataset',
                    no_of_sequences: '328',
                    download:
                        '<a href="https://github.com/janecai0714/AMP_regression_EC_SA/blob/master/data/test-SA.csv">test-SA.csv</a>',
                },
            ],
        };
    },
    computed: {
        formattedAmpRegressorsEscherichiaColiTableItems() {
            return this.ampRegressorsEscherichiaColiTableItems.map(item => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(item.download, 'text/html');
                const anchor = doc.querySelector('a');
                return {
                    ...item,
                    downloadUrl: anchor ? anchor.href : '',
                    downloadText: anchor ? anchor.textContent : '',
                };
            });
        },
        formattedAmpRegressorsStaphylococcusAureusTableItems() {
            return this.ampRegressorsStaphylococcusAureusTableItems.map(item => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(item.download, 'text/html');
                const anchor = doc.querySelector('a');
                return {
                    ...item,
                    downloadUrl: anchor ? anchor.href : '',
                    downloadText: anchor ? anchor.textContent : '',
                };
            });
        },
    },
};
</script>
