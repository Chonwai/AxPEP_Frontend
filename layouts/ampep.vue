<template>
    <v-app light>
        <notifications group="foo" />
        <AmPEPHeader />
        <v-main>
            <v-container>
                <nuxt />
            </v-container>
        </v-main>
        <AppFooter />
    </v-app>
</template>

<script>
import AmPEPHeader from './components/AmPEPHeader';
import AppFooter from './components/AppFooter';
export default {
    data() {
        return {
            drawer: false,
            group: null,
            fixed: false,
            miniVariant: false,
            right: true,
            rightDrawer: false,
            text: 'center',
        };
    },
    components: {
        AmPEPHeader,
        AppFooter,
    },
};
</script>
