<template>
    <v-app dark>
        <notifications group="foo" />
        <SSLGCNHeader />
        <v-main>
            <v-container>
                <nuxt />
            </v-container>
        </v-main>
        <AppFooter />
    </v-app>
</template>

<script>
import SSLGCNHeader from './components/SSLGCNHeader';
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
        SSLGCNHeader,
        AppFooter,
    },
    mounted() {
        const theme = ThemesUtils.bestox;
        Object.keys(theme.light).forEach(i => {
            this.$vuetify.theme.themes.light[i] = theme.light[i];
        });
        this.$vuetify.theme.themes.name = theme.name;
        this.$meta().refresh();
    },
};
</script>
