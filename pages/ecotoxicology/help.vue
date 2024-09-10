<template>
    <div id="method-page-index">
        <div class="p-8">
            <section id="contact" class="mb-8">
                <h2 class="text-4xl">Help</h2>
                <div>
                    <h3 class="text-2xl">Input – Sequences</h3>
                    <ImageCard class="mt-2" src="/images/ssl-toxgcn-help-sequences.png" />
                    <p>Paste your SMILES strings using the FASTA format such as:</p>
                    <code class="bg-gray-500"
                        >>TEST0<br />O=C1Cc2cc(CCN3CCN(c4nsc5ccccc45)CC3)c(Cl)cc2N1<br />>TEST1<br />CN(C)CCOC1=Cc2ccccc2Sc2ccc(Cl)cc21</code
                    >
                    <p>
                        where TEST0 and TEST1 are IDs. If the number of compounds is large, you can
                        upload them in a file (in a FASTA-like format) by selecting the “Upload”
                        checkbox. Uploaded data files are limited to 1 MB.
                    </p>
                </div>
                <div>
                    <h3 class="text-2xl">
                        Input – Prediction for Types of Toxicological Endpoints
                    </h3>
                    <ImageCard
                        class="mt-2"
                        src="/images/ssl-toxgcn-help-prediction-for-toxicological-endpoints.png"
                    />
                    <p>
                        Select the prediction for types of toxicological endpoint that you are
                        interested to predict:
                    </p>
                    <ul>
                        <li>
                            <code>NR-AR</code>
                        </li>
                        <li>
                            <code>NR-AhR</code>
                        </li>
                        <li>
                            <code>NR-ER</code>
                        </li>
                        <li>
                            <code>NR-PPAR-gamma</code>
                        </li>
                        <li>
                            <code>SR-ATAD5</code>
                        </li>
                        <li>
                            <code>SR-MMP</code>
                        </li>
                        <li>
                            <code>NR-AR-LBD</code>
                        </li>
                        <li>
                            <code>NR-Aromatase</code>
                        </li>
                        <li>
                            <code>NR-ER-LBD</code>
                        </li>
                        <li>
                            <code>SR-ARE</code>
                        </li>
                        <li>
                            <code>SR-HSE</code>
                        </li>
                        <li>
                            <code>SR-p53</code>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-2xl">Input – Job Description (Optional)</h3>
                    <ImageCard class="mt-2" src="/images/ssl-toxgcn-help-description.png" />
                    <p>
                        A short description can be supplied together with a job submission. The
                        description will be displayed in your job list.
                    </p>
                </div>
                <div>
                    <h3 class="text-2xl">Input – Create Account (Necessary)</h3>
                    <ImageCard class="mt-2" src="/images/ssl-toxgcn-help-email.png" />
                    <p>
                        If you provide an email to your submitted job, you can easily retrieve all
                        your past job results by giving your email. Note that we will not send you
                        any emails about your job run.
                    </p>
                </div>
                <div>
                    <h3 class="text-2xl">Input – Submit</h3>
                    <ImageCard class="mt-2" src="/images/ssl-toxgcn-help-email.png" />
                    <p>
                        Click the submit button when ready. A job ID will be given to your submitted
                        job; a status page will be displayed with automatically refreshing function
                        to check for the running status of your job. As soon as the run is finished,
                        the result will be displayed in the same window. Please bookmark the status
                        page before leaving the window, so that you can check back the result later.
                        Or if you have provided an email during job submission, you can enter your
                        email at the Input page to login and retrieve all your past job results.
                    </p>
                </div>
                <div>
                    <h3 class="text-2xl">Result</h3>
                    <p>
                        The prediction result of all submitted compounds will be displayed in a
                        single page. All columns can be sorted as user’s need, and all results are
                        downloadable in a CSV file.
                    </p>
                    <ImageCard class="mt-2" src="/images/ssl-tocgnc-classification.png" />
                </div>
            </section>
            <section id="Contact" class="mb-8">
                <h2 class="text-4xl">Contact</h2>
                <p>If you have further questions, please contact:</p>
                <h3 class="text-2xl">Developer:</h3>
                <ul>
                    <li>
                        <span class="font-bold">Jiarui Chen</span>
                        <code>chen709847237@gmail.com</code>
                    </li>
                    <li>
                        <span class="font-bold">Edison Un (web developer)</span>
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
        </div>
    </div>
</template>

<script>
export default {
    layout: 'ecotoxicology',
    name: 'HelpPageIndex',
};
</script>
