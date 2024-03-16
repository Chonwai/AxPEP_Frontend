<template>
    <div class="z-50">
        <v-app-bar :color="color" height="96px">
            <v-container d-flex align-center>
                <v-app-bar-nav-icon
                    class="d-md-none"
                    color="#FFFFFF"
                    @click="drawer = true"
                ></v-app-bar-nav-icon>
                <v-toolbar-title>
                    <img
                        class="h-16 cursor-pointer"
                        src="/images/cbbio-logo.png"
                        alt="cbbio-logo"
                        @click="goToIndex"
                /></v-toolbar-title>
                <v-spacer></v-spacer>
                <AppNavItems :navList="navList" class="d-none d-md-block" />
            </v-container>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav>
                <v-list-item v-for="(item, i) in navList" :key="i" link nuxt :to="item.to">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
                <v-list-item link href="https://app.cbbio.online/">
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
import AppNavItems from './AppNavItems';
export default {
    name: 'AppHeader',
    components: {
        AppNavItems,
    },
    props: {
        color: {
            type: String,
            default: '#049068',
        },
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
                    title: 'AmPEP',
                    icon: 'mdi-home',
                },
                {
                    to: '/acpep/home',
                    title: 'AcPEP',
                    icon: 'mdi-home',
                },
                {
                    to: '/bestox/home',
                    title: 'BESTox',
                    icon: 'mdi-home',
                },
                {
                    to: '/ssl-gcn/home',
                    title: 'SSL-GCN',
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
