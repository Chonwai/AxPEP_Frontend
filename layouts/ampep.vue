<template>
    <v-app theme="ampep">
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
        AmPEPHeader,
        AppFooter,
    },
    mounted() {
        const theme = ThemesUtils.ampep;
        Object.keys(theme.light).forEach(i => {
            this.$vuetify.theme.themes.light[i] = theme.light[i];
        });
        this.$vuetify.theme.themes.name = theme.name;
        this.$meta().refresh();
    },
};
</script>
