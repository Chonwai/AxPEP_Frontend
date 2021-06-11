<template>
    <v-app light>
        <notifications group="foo" />
        <AppHeader color="transparent" class="fixed top-0 h-screen" />
        <v-main>
            <nuxt />
        </v-main>
        <AppFooter />
    </v-app>
</template>

<script>
import AppHeader from './components/AppHeader';
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
        AppHeader,
        AppFooter,
    },
    mounted() {
        const theme = ThemesUtils.default;
        Object.keys(theme.light).forEach(i => {
            this.$vuetify.theme.themes.light[i] = theme.light[i];
        });
        this.$vuetify.theme.themes.name = theme.name;
        this.$meta().refresh();
    },
};
</script>
