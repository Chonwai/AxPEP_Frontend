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
                />
                <DownloadCard
                    class="flex-1"
                    title="Non-AMP"
                    text="Generated from Uniprot sequences without annotation of AMP, membrane, toxic, secretory, defensing, antibiotic, anticancer, antiviral and antifungal."
                />
            </div>
            <p>
                Benchmark datasets from Xiao et al. (iAMP-2L) for methods comparison can be
                <a href="http://www.jci-bioinfo.cn/iAMP/data.html">downloaded from here</a>.
            </p>
            <ReferenceCard
                title="AmPEP: Sequence-based prediction of antimicrobial peptides using distribution patterns of amino acid properties and random forest."
                subtitle="Scientific Reports, 1697 (2018)."
                authors="Pratiti Bhadra, Jielu Yan, Jinyan Li, Simon Fong, and Shirley W. I. Siu.*"
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
                />
                <DownloadCard
                    class="flex-1"
                    title="Test Dataset (Benchmark)"
                    text="94 positives and 94 negatives"
                />
            </div>
            <ReferenceCard
                title="Deep-AmPEP30: Improve short antimicrobial peptides prediction with deep learning."
                subtitle="Accepted for publication in Molecular Therapy – Nucleic Acids."
                authors="Jielu Yan, Pratiti Bhadra, Ang Li, Pooja Sethiya, Longguang Qin, Hio Kuan Tai, Koon Ho Wong, and Shirley W. I. Siu*"
            />
        </section>
    </div>
</template>

<script>
import DownloadCard from '../components/DownloadCard';
import ReferenceCard from '../components/ReferenceCard';
import ImageCard from '../components/ImageCard';
export default {
    name: 'DatasetPageIndex',
    components: {
        DownloadCard,
        ReferenceCard,
        ImageCard,
    },
};
</script>
