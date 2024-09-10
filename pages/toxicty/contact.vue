<template>
    <div id="method-page-index">
        <div class="p-8">
            <section id="contact" class="mb-8">
                <h2 class="text-4xl">Contact</h2>
                <p>If you have further questions, please contact:</p>
                <p><b>Developer:</b></p>
                <div class="flex flex-wrap">
                    <ContactCard
                        class="w-1/2"
                        title="Developer"
                        name="Ray Chen"
                        email="chen709847237@gmail.com"
                    />
                    <ContactCard
                        class="w-1/2"
                        title="Developer"
                        name="Edison Un"
                        email="chonwaiun@gmail.com"
                    />
                </div>
                <p><b>PI:</b></p>
                <div class="flex flex-wrap">
                    <ContactCard
                        class="w-1/2"
                        title="PI"
                        name="Shirley W. I. Siu"
                        email="shirleysiu@umac.mo"
                    />
                </div>
            </section>
        </div>
    </div>
</template>

<script>
import ContactCard from '../../components/ContactCard';
export default {
    layout: 'toxicty',
    name: 'ContactPageIndex',
    components: {
        ContactCard,
    },
};
</script>
