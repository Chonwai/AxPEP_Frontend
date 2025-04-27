<template>
    <div id="method-page-index">
        <div class="p-8">
            <section id="BERT-HemoPep60-Server" class="mb-8">
                <h2 class="text-4xl">BERT-HemoPep60</h2>
                <p>
                    A deep learning method based on transformer architecture and Domain Adaptive
                    Pre-Training (DAPT) for quantitative prediction of peptide hemolytic activity
                    against human red blood cells.
                </p>
            </section>
            <section id="Overview" class="mb-8">
                <h2 class="text-4xl">Overview</h2>
                <p>
                    BERT-HemoPep60 is a deep learning method based on transformer architecture and
                    Domain Adaptive Pre-Training (DAPT) for quantitative prediction of peptide
                    hemolytic activity against human red blood cells. The model employs an
                    innovative prefix prompting approach that integrates experimental hemolysis data
                    from six common mammalian species (human, mouse, rat, horse, sheep, and rabbit)
                    and multiple hemolysis indicators (HC5, HC10, HC50) for peptide toxicity
                    prediction.
                </p>
                <v-card class="mx-auto w-4/5 mb-8">
                    <v-img
                        class="white--text align-end w-2/3 m-auto"
                        src="/images/hemopep-overview.png"
                    >
                        <template v-slot:placeholder>
                            <v-skeleton-loader class="mx-auto" type="image"></v-skeleton-loader>
                        </template>
                    </v-img>
                    <v-card-subtitle class="pb-0 flex justify-center items-center"
                        >Figure 1. BERT-HemoPep60 Model Overview</v-card-subtitle
                    >
                </v-card>
            </section>
            <section id="Model-Performance" class="mb-8">
                <h2 class="text-4xl">Model Performance</h2>
                <p>
                    We employed an innovative prefix prompting approach to integrate experimental
                    data from six mammalian species into a single model, significantly improving
                    prediction accuracy. Compared to traditional methods, BERT-HemoPep60 achieves
                    excellent performance across various metrics.
                </p>
            </section>
            <section id="Results-Interpretation" class="mb-8">
                <h2 class="text-4xl">Results Interpretation</h2>
                <p>BERT-HemoPep60 provides three key hemolytic activity indicators:</p>
                <ul class="mb-4">
                    <li>
                        <strong>HC5</strong>: Represents the peptide concentration (μM) required to
                        cause 5% hemolysis of red blood cells
                    </li>
                    <li>
                        <strong>HC10</strong>: Represents the peptide concentration (μM) required to
                        cause 10% hemolysis of red blood cells
                    </li>
                    <li>
                        <strong>HC50</strong>: Represents the peptide concentration (μM) required to
                        cause 50% hemolysis of red blood cells
                    </li>
                </ul>
                <p>
                    <strong>Important Note:</strong>
                    Lower HC values indicate stronger hemolytic activity (higher toxicity), while
                    higher HC values indicate weaker hemolytic activity (lower toxicity).
                </p>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    layout: 'hemopep',
    name: 'MethodPageIndex',
    data() {
        return {};
    },
};
</script>

<style scoped>
$navigation-drawer-border-width: 0px !important;
</style>
