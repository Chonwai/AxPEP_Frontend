<template>
    <div class="z-50">
        <v-app-bar color="#3f51b5" height="96px">
            <v-container d-flex align-center>
                <v-app-bar-nav-icon
                    class="d-md-none"
                    color="#FFFFFF"
                    @click="drawer = true"
                ></v-app-bar-nav-icon>
                <v-toolbar-title>
                    <img
                        class="h-16 cursor-pointer"
                        src="/images/ampep-logo.png"
                        alt="ampep-logo"
                        @click="goToIndex"
                /></v-toolbar-title>
                <v-spacer></v-spacer>
                <AmPEPNavItems :navList="navList" class="d-none d-md-block" />
            </v-container>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav>
                <v-list-item link nuxt to="/ampep/home">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
                <v-list-item link nuxt to="/ampep/method">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Method</v-list-item-title>
                </v-list-item>
                <v-list-item link nuxt to="/ampep/dataset">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Dataset</v-list-item-title>
                </v-list-item>
                <v-list-item link nuxt to="/ampep/statistics">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Statistics</v-list-item-title>
                </v-list-item>
                <v-list-item link nuxt to="/ampep/help">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Help</v-list-item-title>
                </v-list-item>
                <v-list-item link href="https://cbbio.online/">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>CBBio</v-list-item-title>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
import AmPEPNavItems from './AmPEPNavItems';
export default {
    name: 'AmPEPHeader',
    components: {
        AmPEPNavItems,
    },
    data() {
        return {
            drawer: false,
            group: null,
            fixed: false,
            text: 'center',
            navList: [
                {
                    to: '/ampep/home',
                    title: 'Home',
                    icon: 'mdi-home',
                },
                {
                    to: '/ampep/method',
                    title: 'Method',
                    icon: 'mdi-home',
                },
                {
                    to: '/ampep/dataset',
                    title: 'Dataset',
                    icon: 'mdi-home',
                },
                {
                    to: '/ampep/statistics',
                    title: 'Statistics',
                    icon: 'mdi-home',
                },
                {
                    to: '/ampep/help',
                    title: 'Help',
                    icon: 'mdi-home',
                },
            ],
        };
    },
    methods: {
        goToIndex() {
            this.$router.push({ path: '/' });
        },
    },
};
</script>
