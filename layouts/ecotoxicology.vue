<template>
    <v-app dark>
        <notifications group="foo" />
        <EcotoxicologyHeader />
        <v-main>
            <v-container>
                <nuxt />
            </v-container>
        </v-main>
        <AppFooter />
    </v-app>
</template>

<script>
import EcotoxicologyHeader from './components/EcotoxicologyHeader';
import AppFooter from './components/AppFooter';
import ThemesUtils from '../utils/theme';
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
        EcotoxicologyHeader,
        AppFooter,
    },
    mounted() {
        const theme = ThemesUtils.ecotoxicology;
        Object.keys(theme.light).forEach(i => {
            this.$vuetify.theme.themes.light[i] = theme.light[i];
        });
        this.$vuetify.theme.themes.name = theme.name;
        this.$meta().refresh();
    },
};
</script>
