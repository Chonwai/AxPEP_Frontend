<template>
    <div id="help-page-index" class="p-0 md:p-8">
        <section id="Manual" class="mb-8">
            <h2 class="text-4xl">Manual</h2>
            <div>
                <h3 class="text-2xl">Input – Peptide Sequences</h3>
                <p>
                    Input a set of peptide sequences in FASTA format. Each sequence should start
                    with a header line beginning with ">" followed by a sequence identifier, and the
                    amino acid sequence in the subsequent line(s).
                </p>
                <pre class="bg-gray-100 p-2 rounded">
>Peptide1
AAKIILNPKFR
>Peptide2
KWKLFKKIEKVGQNIRDGIIKAGSAVAVVGQAATIYK
                </pre>
                <p>
                    You can either type sequences directly in the text area or upload a FASTA file.
                </p>
            </div>
            <div>
                <h3 class="text-2xl">Input – Prediction Parameters</h3>
                <p>Select prediction models for hemolytic activity:</p>
                <ul>
                    <li>
                        <code>BERT-HemoPep60</code> - This model predicts quantitative hemolytic
                        activity indicators (HC5, HC10, HC50)
                    </li>
                </ul>
                <p>
                    <strong>HC indicators:</strong>
                </p>
                <ul>
                    <li>HC5 - Concentration (μM) required to cause 5% hemolysis</li>
                    <li>HC10 - Concentration (μM) required to cause 10% hemolysis</li>
                    <li>HC50 - Concentration (μM) required to cause 50% hemolysis</li>
                </ul>
                <p>
                    <strong>Note:</strong> Lower HC values indicate stronger hemolytic activity
                    (higher toxicity).
                </p>
            </div>
            <div>
                <h3 class="text-2xl">Input – Job Description (Optional)</h3>
                <p>
                    A short description can be supplied together with a job submission. The
                    description will be displayed in your job list.
                </p>
            </div>
            <div>
                <h3 class="text-2xl">Input – Email (Required)</h3>
                <p>
                    If you provide an email to your submitted job, you can easily retrieve all your
                    past job results by giving your email. Note that we will not send you any emails
                    about your job run.
                </p>
            </div>
            <div>
                <h3 class="text-2xl">Input – Submit</h3>
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
                <h3 class="text-2xl">Result Interpretation</h3>
                <p>The prediction results include three hemolytic activity indicators:</p>
                <ul>
                    <li><strong>HC5</strong>: Concentration (μM) required to cause 5% hemolysis</li>
                    <li>
                        <strong>HC10</strong>: Concentration (μM) required to cause 10% hemolysis
                    </li>
                    <li>
                        <strong>HC50</strong>: Concentration (μM) required to cause 50% hemolysis
                    </li>
                </ul>
                <p>
                    <strong>Important:</strong> Lower values indicate stronger hemolytic activity
                    (higher toxicity), while higher values indicate weaker hemolytic activity (lower
                    toxicity).
                </p>
                <p>
                    For example, a peptide with HC50 = 10 μM is more hemolytic (more toxic) than a
                    peptide with HC50 = 100 μM.
                </p>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    layout: 'hemopep',
    name: 'HelpPageIndex',
};
</script>
