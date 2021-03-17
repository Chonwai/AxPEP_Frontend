<template>
    <v-app light>
        <notifications group="foo" />
        <AppHeader color="transparent" class="absolute top-0" />
        <v-main>
            <nuxt />
        </v-main>
        <AppFooter />
    </v-app>
</template>

<script>
import AppHeader from './components/AppHeader';
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
        AppHeader,
        AppFooter,
    },
};
</script>
