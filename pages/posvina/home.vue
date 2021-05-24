<template>
    <div id="home-page-index" class="p-0 md:p-8">
        <section id="Deep-AmPEP30" class="mb-8">
            <h2 class="text-4xl">
                PSOVina: Fast Protein-Ligand Docking Tool based on PSO and AutoDock Vina
            </h2>
            <p>
                A fast docking tool based on the efficient optimization algorithm of Particle Swarm
                Intelligence and the framework of AutoDock Vina. Based on the initial PSO
                implementation, our PSOVina method has undergone several important improvements to
                enhance the docking accuary and achieve remarkable efficiency as compared to the
                original AutoDock Vina.
            </p>
            <ImageCard src="/images/POSVinaCard.png" />
            <ImageCard src="/images/psovina-vs-vina.png" />
        </section>
        <section id="Releases" class="mb-8">
            <h2 class="text-4xl">Releases</h2>
            <ul class="list-disc">
                <li>
                    (2018-06-07) <b>PSOVina-2.0</b> An improved PSOVina2LS with Singer chaotic
                    function embedded into the PSO global search algorithm to improve search
                    diversity and improve pose prediction. This version has been extensively tested
                    by four docking sets and two DUD-E virtual screening sets.
                </li>
                <li>
                    (2018-05-04) <b>PSOVina2LS</b> uses 2-stage local search to effectively reduce
                    time for expensive local search.
                </li>
                <li>
                    (2018-06-18) <b>PSOVina-1.1</b> is now patched to be compatible with newer
                    version of Boost, tested with boost 1.59.
                </li>
                <li>
                    (2016-05-10) <b>PSOVina-1.0</b> is released, try it out for your next docking!
                </li>
            </ul>
        </section>
        <section id="Download" class="mb-8">
            <h2 class="text-4xl">Download</h2>
            <p>
                (Freely available for academic use only, please read our
                <a href="https://cbbio.online/software/psovina/LICENSE_PSOVINA.txt"
                    >Open Source License</a
                >)
            </p>
            <ul class="list-disc">
                <li>
                    <a href="https://sourceforge.net/projects/psovina/files/"
                        >Source code tarball</a
                    >
                </li>
                <li>
                    <a href="https://sourceforge.net/projects/psovina/files/"
                        >Linux/Mac executables</a
                    >
                    (compiled in Ubuntu x86_64 and MacOSX)
                </li>
                <li>
                    <a href="https://sourceforge.net/projects/psovina/files/extras/"
                        >Datasets and tools to benchmark docking programs</a
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
        <section id="Running-PSOVina" class="mb-8">
            <h2 class="text-4xl">Running PSOVina</h2>
            <p>
                You can run psovina as the way you run vina but additional three parameters
                (optional) are used to specify how the PSO algorithm perform searching:
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
                PDBbind v2012 dataset) using PSOVina with default PSO parameters in a 8-core
                computer and obtain the lowest energy prediction:
                <br />
                <code
                    >% {path-to-AutoDockTools}/prepare_ligand4.py -l 1ps3_ligand.mol2 -o
                    1ps3_ligand.pdbqt -A 'hydrogens' -U 'nphs_lps_waters'</code
                >
                <br />
                <code
                    >% {path-to-AutoDockTools}/prepare_receptor4.py -r 1ps3_protein.pdb -o
                    1ps3_protein.pdbqt -A 'hydrogens' -U 'nphs_lps_waters'</code
                >
                <br />
                <code
                    >% {path-to-psovina}/psovina --receptor 1ps3_protein.pdbqt --ligand
                    1ps3_ligand.pdbqt --center_x 31.951 --center_y 65.5053 --center_z 7.63888
                    --size_x 33.452 --size_y 27.612 --size_z 35.136 --num_modes 1 --cpu 8</code
                >
                <br />
                More test cases can be available soon.
            </p>
        </section>
        <section id="Develop-PSOVina" class="mb-8">
            <h2 class="text-4xl">Develop PSOVina</h2>
            <p>
                If you are interested in the source code of PSOVina for any academic purposes,
                please note that the following files were newly developedin our work or modified
                based on Vina: <br />
                <code>
                    psovina-x.x/src/main/main.cpp<br />
                    psovina-x.x/src/lib/pso.h<br />
                    psovina-x.x/src/lib/pso.cpp<br />
                    psovina-x.x/src/lib/parallel_pso.h<br />
                    psovina-x.x/src/lib/parallel_pso.cpp<br />
                    psovina-x.x/src/lib/pso_mutate.h<br />
                    psovina-x.x/src/lib/pso_mutate.cpp<br />
                    psovina-x.x/src/lib/pso_search.h<br />
                    psovina-x.x/src/lib/pso_search.cpp<br
                /></code>
            </p>
        </section>
        <section id="Citations" class="mb-8">
            <h2 class="text-4xl">Citations</h2>
            <p>
                Please cite our paper if you have used PSOVina or its variants. It would also be
                nice to let us know that you found PSOVina useful by sending us an email:
            </p>
            <p><b>For PSOVina 2.0:</b></p>
            <ReferenceCard
                authors="Hio Kuan Tai, Siti Azma Jusoh, and Shirley W. I. Siu*."
                title="Chaos-embedded particle swarm optimization approach for protein-ligand docking and virtual screening."
                subtitle="Journal of Cheminformatics 10:62, 2018."
                link="https://www.nature.com/articles/s41598-018-19752-w"
            />
            <p><b>For PSOVina2LS:</b></p>
            <ReferenceCard
                authors="Hio Kuan Tai, Hin Lin and Shirley W. I. Siu*."
                title="Improving the efficiency of PSOVina for protein-ligand docking by two-stage local search."
                subtitle="The 2016 IEEE Congress on Evolutionary Computation (CEC), Vancouver, BC, 2016, pp. 770-777."
                link="https://www.nature.com/articles/s41598-018-19752-w"
            />
            <p><b>For PSOVina 1.0:</b></p>
            <ReferenceCard
                authors="Marcus C. K. Ng, Simon Fong, and Shirley W. I. Siu*."
                title="PSOVina: The Hybrid Particle Swarm Optimization Algorithm for Protein-Ligand Docking."
                subtitle="Journal of Bioinformatics and Computational Biology 13 (3), 1541007, 2015."
                link="https://www.nature.com/articles/s41598-018-19752-w"
            />
        </section>
        <section id="Contact-Us" class="mb-8">
            <h2 class="text-4xl">Contact Us</h2>
            <p>If you have further questions, please contact:</p>
            <h3 class="text-2xl">Developer:</h3>
            <ul>
                <li>
                    <span class="font-bold">Giotto Tai</span>
                    <code>giottotai@yahoo.com.hk</code>
                </li>
                <li>
                    <span class="font-bold">Allan Lin</span>
                    <code>lhang33@126.com</code>
                </li>
                <li>
                    <span class="font-bold">Marcus C. K. Ng</span>
                    <code>marcus.ckng@gmail.com</code>
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
                    parameter: '--num_particles arg (=8)',
                    description: 'Number of particles',
                },
                {
                    parameter: '--w arg (=0.36)',
                    description: 'Inertia weight',
                },
                {
                    parameter: '--c1 arg (=0.99)',
                    description: 'Cognitive weight',
                },
                {
                    parameter: '--c2 arg (=0.99)',
                    description: 'Social weight',
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
