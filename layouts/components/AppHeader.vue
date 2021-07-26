<template>
    <div class="z-50 w-full">
        <v-app-bar style="box-shadow: none !important" :color="color" height="96px">
            <v-app-bar-nav-icon
                class="d-md-none"
                color="#FFFFFF"
                @click="drawer = true"
            ></v-app-bar-nav-icon>
            <v-container d-flex align-center>
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
import AppNavItems from './AppNavItems';
export default {
    name: 'AppHeader',
    components: {
        AppNavItems,
    },
    props: {
        color: {
            type: String,
            default: 'transparent',
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
                    to: '/ssl-bestox/home',
                    title: 'SSL-BESTox',
                    icon: 'mdi-home',
                },
            ],
        };
    },
};
</script>
