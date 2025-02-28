<template>
    <div id="help-page-index" class="p-0 md:p-8">
        <section id="Help" class="mb-8">
            <h2 class="text-4xl">Help</h2>
            <div>
                <h3 class="text-2xl">Input – Sequences</h3>
                <ImageCard class="mt-2" src="/images/help-sequences.png" />
                <p>Paste your amino acide sequences in FASTA format such as:</p>
                <code class="bg-gray-500"
                    >>AC_1<br />ALWKTMLKKLGTMALHAGKAALGAAADTISQGTQ<br />>AC_2<br />AWKKWAKAWKWAKAKWWAKAA</code
                >
                <p>
                    where AC_1 and AC_2 are sequence IDs. Each sequence should be at least 5 a.a.
                    long and maximally 250 a.a. or an error will be reported. Only 1-letter code for
                    20 standard amino acids is acceptable. If the number of sequences is large, you
                    can upload them in a file (in FASTA format) by selecting the "Upload FASTA
                    sequences" checkbox. If you want to screen a genome sequence to identify AMPs
                    from that, use the "Upload Genome sequences" checkbox. In this case, only
                    1-letter code for nucleotides (ATCG) is acceptable. Genome sequences will be
                    processed to extract the open reading frames (ORF) in all six-frame translation
                    using the the user-selected codon table (standard by default). ORF sequences
                    which include arbitrary residues will be discarded; sequences which are shorter
                    than 5 residues and longer than 250 residues will also be ignored. Uploaded
                    sequence files are limited to 1 MB.
                </p>
            </div>
            <div>
                <h3 class="text-2xl">Input – Methods</h3>
                <ImageCard class="mt-2" src="/images/help-methods.png" />
                <p>Select the antimicrobial activities that you are interested to predict:</p>
                <ul>
                    <li>
                        <span class="text-purple-900 font-bold">AmPEP</span> for general AMP
                        prediction of 5-250 AA sequences.
                    </li>
                    <li>
                        <span class="text-blue-900 font-bold">Deep-AmPEP30</span> for short AMP
                        prediction of 5-30 AA sequences (According to our benchmark test,
                        Deep-AmPEP30 is about 18% more accurate in short AMP prediction than AmPEP).
                        This is the only method currently available for genome screening.
                    </li>
                    <li>
                        <span class="text-gray-500 font-bold">AcPEP (trial version)</span> for
                        anticancer prediction, still under development.
                    </li>
                    <li>
                        <span class="text-blue-900 font-bold">BERT-AmPEP60</span> for short AMP
                        prediction of 5-60 AA sequences. It returns the predicted MIC values for E.
                        coli and S. auerus in the
                        <a href="#Activity Prediction">ACTIVITY PREDICTION</a> tag in the Result
                        page.
                    </li>
                </ul>
            </div>
            <div>
                <h3 class="text-2xl">Input – Job Description (Optional)</h3>
                <ImageCard class="mt-2" src="/images/help-job-description.png" />
                <p>
                    A short description can be supplied together with a job submission. The
                    description will be displayed in your job list.
                </p>
            </div>
            <div>
                <h3 class="text-2xl">Input – Create Account (Necessary)</h3>
                <ImageCard class="mt-2" src="/images/help-email.png" />
                <p>
                    If you provide an email to your submitted job, you can easily retrieve all your
                    past job results by giving your email. Note that we will not send you any emails
                    about your job run.
                </p>
            </div>
            <div>
                <h3 class="text-2xl">Input – Submit</h3>
                <ImageCard class="mt-2" src="/images/help-email.png" />
                <p>
                    Click the submit button when ready. A job ID will be given to your submitted
                    job; a status page will be displayed with automatically refreshing function to
                    check for the running status of your job. As soon as the run is finished, the
                    result will be displayed in the same window. Please bookmark the status page
                    before leaving the window, so that you can check back the result later. Or if
                    you have provided an email during job submission, you can enter your email at
                    the Input page to login and retrieve all your past job results.
                </p>
            </div>
            <div>
                <h3 class="text-2xl">Result</h3>
                <p>
                    The prediction result of all submitted sequences will be displayed in a single
                    page. All columns can be sorted as user's need, and all results are downloadable
                    in a CSV file.
                </p>
                <ImageCard class="mt-2" src="/images/help-classification.png" />
                <p>
                    The <b>Classification</b> tag shows 1 or 0 predicted by each selected method,
                    where 1 for positive and 0 for negative. In case there are invalid sequences,
                    such as violating the sequence length required by the method, they are
                    classified as -1. The last column shows the sum of the prediction results for
                    each sequence. A classification threshold of 0.5 is used by default to color
                    code the result table.
                </p>
                <ImageCard class="mt-2" src="/images/help-prediction-score.png" />
                <p>
                    The <b>Prediction Score</b> tag shows the predicted score returned by each
                    method, with a value close to 1 being positive and close to 0 being negative.
                    Again, invalid sequences are given -1. The last column shows the product of all
                    predicted scores for each sequence. A classification threshold of 0.5 is used by
                    default to color code the result table.
                </p>
                <p>
                    For genome screening, only the top-scoring 1000 sequences will be displayed.
                    Prediction result of all valid sequences is available in the CSV file.
                </p>
            </div>
            <section id="Activity Prediction">
                <h3 class="text-2xl">ACTIVITY PREDICTION</h3>
                <p>
                    The Activity Prediction tag shows the predicted values of minimum inhibitory
                    concentration (MIC in the unit of micromolar, uM) of the peptide against
                    <i>Escherichia coli</i> and <i>Staphylococcus aureus</i>. The last column shows
                    the ratio of the two MIC values. The lower values indicate a stronger inhibitory
                    function of the peptide.
                </p>
                <ImageCard class="mt-2" src="/images/help-activity-prediction.png" />
            </section>
        </section>
        <section id="Contact" class="mb-8">
            <h2 class="text-4xl">Contact</h2>
            <p>If you have further questions, please contact:</p>
            <h3 class="text-2xl">Developer:</h3>
            <ul>
                <li>
                    <span class="font-bold">Pratiti Bhadra (AmPEP)</span>
                    <code>pratiti.bhadra@gmail.com</code>
                </li>
                <li>
                    <span class="font-bold">Jielu Yan (Deep-AmPEP30)</span>
                    <code>oyanjielu@gmail.com</code>
                </li>
                <li>
                    <span class="font-bold">Jianxiu Cai (BERT-AmPEP60)</span>
                    <code>janecai0714@gmail.com</code>
                </li>
                <li>
                    <span class="font-bold">Edison Un (System Developer)</span>
                    <code>chonwaiun@gmail.com</code>
                </li>
            </ul>
            <h3 class="text-2xl">PI:</h3>
            <ul>
                <li>
                    <span class="font-bold">Shirley W. I. Siu</span>
                    <code>siuwengin@gmail.com</code>
                </li>
            </ul>
        </section>
        <section id="References" class="mb-8">
            <h2 class="text-4xl">References</h2>
            <ReferenceCard
                authors="Cai, Jianxiu; Yan, Jielu; Un, Chonwai; Wang, Yapeng*; Campbell-Valoise, FX*; Siu, Shirley W. I.*"
                title="BERT-AmPEP60: A BERT-based Transfer Learning Approach to Predict the Minimum Inhibitory Concentrations of Antimicrobial Peptides for Escherichia coli and Staphylococcus aureus."
                subtitle="Journal of Chemical Information and Modeling. (in press)"
            />
        </section>
    </div>
</template>

<script>
import ReferenceCard from '@/components/ReferenceCard';
import ImageCard from '@/components/ImageCard';

export default {
    layout: 'ampep',
    name: 'HelpPageIndex',
    components: {
        ReferenceCard,
        ImageCard,
    },
};
</script>

<style lang="scss" scoped></style>
