<template>
    <v-app dark>
        <notifications group="foo" />
        <BESToxHeader />
        <v-main>
            <v-container>
                <nuxt />
            </v-container>
        </v-main>
        <AppFooter />
    </v-app>
</template>

<script>
import BESToxHeader from './components/BESToxHeader';
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
        BESToxHeader,
        AppFooter,
    },
};
</script>
