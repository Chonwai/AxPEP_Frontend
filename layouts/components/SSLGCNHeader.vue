<template>
    <div class="z-50">
        <v-app-bar color="#1C2833" height="96px">
            <v-container d-flex align-center>
                <v-app-bar-nav-icon
                    class="d-md-none"
                    color="#FFFFFF"
                    @click="drawer = true"
                ></v-app-bar-nav-icon>
                <v-toolbar-title>
                    <img
                        class="h-16 cursor-pointer"
                        src="/images/ssl-toxgcn-transparent-logo.png"
                        alt="ssl-gcn-logo"
                        @click="goToIndex"
                    />
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <SSLGCNNavItems :navList="navList" class="d-none d-md-block" />
            </v-container>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary color="#1C2833" dark>
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
import SSLGCNNavItems from './SSLGCNNavItems';
export default {
    name: 'SSLGCNHeader',
    components: {
        SSLGCNNavItems,
    },
    data() {
        return {
            drawer: false,
            group: null,
            fixed: false,
            text: 'center',
            navList: [
                {
                    to: '/ssl-gcn/home',
                    title: 'Home',
                    icon: 'mdi-home',
                },
                {
                    to: '/ssl-gcn/method',
                    title: 'Method',
                    icon: 'mdi-home',
                },
                {
                    to: '/ssl-gcn/statistics',
                    title: 'Statistics',
                    icon: 'mdi-home',
                },
                {
                    to: '/ssl-gcn/help',
                    title: 'Help',
                    icon: 'mdi-home',
                },
                {
                    to: '/ssl-gcn/contact',
                    title: 'Contact',
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
