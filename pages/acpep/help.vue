<template>
    <div id="help-page-index" class="p-0 md:p-8">
        <section id="Contact" class="mb-8">
            <h2 class="text-4xl">Contact</h2>
            <p>If you have further questions, please contact:</p>
            <h3 class="text-2xl">Developer:</h3>
            <ul>
                <li>
                    <span class="font-bold">Pratiti Bhadra</span>
                    <code>pratiti.bhadra@gmail.com</code>
                </li>
                <li><span class="font-bold">Jielu Yan</span> <code>oyanjielu@gmail.com</code></li>
                <li>
                    <span class="font-bold">Edison Un (web developer)</span>
                    <code>chonwaiun@gmail.com</code>
                </li>
            </ul>
            <h3 class="text-2xl">PI:</h3>
            <ul>
                <li>
                    <span class="font-bold">Shirley W. I. Siu</span> <code>shirleysiu@umac.mo</code>
                </li>
            </ul>
        </section>
    </div>
</template>

<script>
import ImageCard from '@/components/ImageCard';
export default {
    layout: 'acpep',
    name: 'HelpPageIndex',
    component: {
        ImageCard,
    },
};
</script>

<style lang="scss" scoped></style>
