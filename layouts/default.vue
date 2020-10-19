<template>
    <v-app light>
        <AppNav />
        <v-main>
            <v-container>
                <nuxt />
            </v-container>
        </v-main>
        <v-footer>
            <span class="p-2 flex justify-center items-center font-medium"
                >Copyright &copy; {{ new Date().getFullYear() }} University of Macau</span
            >
        </v-footer>
    </v-app>
</template>

<script>
import AppNav from './components/AppNav';
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
        AppNav,
    },
};
</script>
