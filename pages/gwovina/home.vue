<template>
    <div id="home-page-index" class="p-0 md:p-8">
        <section id="PSOVina" class="mb-8">
            <h2 class="text-4xl">
                GWOVina - Fast Protein-Ligand Docking Tool based on GWO and AutoDock Vina
            </h2>
            <p>
                Protein-ligand docking programs are indispensable tools for predicting the binding
                pose of a ligand to the receptor protein. Based on the implementation of AutoDock
                Vina, GWOVina employs grey wolf optimization (GWO) algorithm to speed up the search
                for optimal ligand poses. Our rigid docking experiments show that GWOVina has
                enhanced exploration capability leading to significant speedup in the search while
                maintaining comparable binding pose prediction accuracy to AutoDock Vina. For
                flexible receptor docking, GWOVina is also competitive in pose ranking. Its success
                rate is higher than AutoDock Vina, but similar to AutoDockFR.
            </p>
            <ImageCard src="/images/GWOVinaCard.png" />
        </section>
        <section id="Releases" class="mb-8">
            <h2 class="text-4xl">Releases</h2>
            <ul class="list-disc">
                <li>(2020-06-02) GWOVina-1.0 is released!</li>
            </ul>
        </section>
        <section id="Download" class="mb-8">
            <h2 class="text-4xl">Download</h2>
            <p>
                (Freely available for academic use only, please read our
                <a href="https://cbbio.online/software/gwovina/LICENSE_GWOVINA.txt"
                    >Open Source License</a
                >)
            </p>
            <ul class="list-disc">
                <li>
                    <a href="https://sourceforge.net/projects/gwovina/files/"
                        >Source code tarball</a
                    >
                </li>
            </ul>
        </section>
        <section id="Required-Software" class="mb-8">
            <h2 class="text-4xl">Required Software</h2>
            <p>
                For successful compilation, please install
                <a href="https://www.boost.org/">Boost (version 1.59 or above)</a>. For preparing
                molecules for docking, please install
                <a href="http://mgltools.scripps.edu/">AutoDockTools (ADT)</a>.
            </p>
        </section>
        <section id="Installation" class="mb-8">
            <h2 class="text-4xl">Installation</h2>
            <p>
                The installation basically follows the
                <a href="http://vina.scripps.edu/manual.html#build">installation of AutoDock Vina</a
                >:
            </p>
            <ol class="list-decimal">
                <li>unpack the files</li>
                <li>cd psovina-x.x/build/{your-platform}/release</li>
                <li>modify Makefile to suit your system setting</li>
                <li>type "make" to compile</li>
            </ol>
            <p>
                The binary psovina will be generated at the current directory. You can copy this
                binary to a directory in your PATH e.g. /usr/local/bin, or add the path of the
                current directory to your PATH.
            </p>
        </section>
        <section id="Running-GWOVina" class="mb-8">
            <h2 class="text-4xl">Running GWOVina</h2>
            <p>
                You can run gwovina as the way you run vina but an additional parameter to specify
                the population size can be given:
            </p>
            <v-data-table
                dense
                :headers="headers"
                :items="data"
                hide-default-footer
                item-key="parameter"
                class="elevation-1 mb-4"
            ></v-data-table>
            <p>
                For example, docking Kifunensine in the Mannosidase enzyme (PDBID 1ps3 from the
                PDBbind v2012 dataset) using GWOVina:
                <br />
                <code
                    >% {path-to-AutoDockTools}/prepare_ligand4.py -l 1ps3_ligand.mol2 -o
                    1ps3_ligand.pdbqt</code
                >
                <br />
                <code
                    >% {path-to-AutoDockTools}/prepare_receptor4.py -r 1ps3_protein.pdb -o
                    1ps3_protein.pdbqt</code
                >
                <br />
                <code
                    >% {path-to-gwovina}/gwovina --receptor 1ps3_protein.pdbqt --ligand
                    1ps3_ligand.pdbqt --center_x 31.951 --center_y 65.5053 --center_z 7.63888
                    --size_x 33.452 --size_y 27.612 --size_z 35.136</code
                >
            </p>
        </section>
        <section id="Develop-GWOVina" class="mb-8">
            <h2 class="text-4xl">Develop GWOVina</h2>
            <p>
                If you are interested in the source code of GWOVina for any research purposes,
                please note that the following files were newly developed in our work or modified
                based on Vina:<br />
                <code>gwovina-x.x/src/main/main.cpp</code><br />
                <code>gwovina-x.x/src/lib/gwo.h</code><br />
                <code>gwovina-x.x/src/lib/gwo.cpp</code><br />
                <code>gwovina-x.x/src/lib/parallel_gwo.h</code><br />
                <code>gwovina-x.x/src/lib/parallel_gwo.cpp</code><br />
                <code>gwovina-x.x/src/lib/gwo_mutate.h</code><br />
                <code>gwovina-x.x/src/lib/gwo_mutate.cpp</code>
            </p>
        </section>
        <section id="Citations" class="mb-8">
            <h2 class="text-4xl">Citations</h2>
            <p>
                Please cite our paper if you have used GWOVina or its variants. It would also be
                nice to let us know that you found GWOVina useful by sending us an email:
            </p>
            <p><b>For GWOVina 1.0:</b></p>
            <ReferenceCard
                authors="Kin Meng Wong, Hio Kuan Tai, and Shirley W. I. Siu*."
                title="Evaluation of Grey Wolf Optimization Algorithm on Rigid and Flexible Receptor Docking."
                subtitle="(Submitted)"
                link="https://onlinelibrary.wiley.com/doi/full/10.1111/cbdd.13764"
            />
        </section>
        <section id="Contact-Us" class="mb-8">
            <h2 class="text-4xl">Contact Us</h2>
            <p>If you have further questions, please contact:</p>
            <h3 class="text-2xl">Developer:</h3>
            <ul>
                <li>
                    <span class="font-bold">Michael Wong</span>
                    <code>emailtoming15@hotmail.com</code>
                </li>
                <li>
                    <span class="font-bold">Edison Un (Web Developer)</span>
                    <code>chonwaiun@gmail.com</code>
                </li>
            </ul>
            <h3 class="text-2xl">Project P.I.:</h3>
            <ul>
                <li>
                    <span class="font-bold">Shirley W. I. Siu</span> <code>shirleysiu@umac.mo</code>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import ReferenceCard from '@/components/ReferenceCard';
import ImageCard from '@/components/ImageCard';
export default {
    layout: 'blog',
    name: 'HomePageIndex',
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
            data: [
                {
                    parameter: '--num_wolves arg (=12)',
                    description: 'Number of wolves',
                },
            ],
            headers: [
                { text: 'Parameters', value: 'parameter' },
                { text: 'Description', value: 'description' },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
$navigation-drawer-border-width: 0px !important;
</style>
