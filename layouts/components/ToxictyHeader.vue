<template>
    <div class="z-50">
        <v-app-bar color="#78e4ff" height="96px">
            <v-container d-flex align-center>
                <v-app-bar-nav-icon
                    class="d-md-none"
                    color="#FFFFFF"
                    @click="drawer = true"
                ></v-app-bar-nav-icon>
                <v-toolbar-title>
                    <img
                        class="h-16 cursor-pointer"
                        src="/images/toxicty-logo.png"
                        alt="toxicty-logo"
                        @click="goToIndex"
                    />
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <ToxictyNavItems :navList="navList" class="d-none d-md-block" />
            </v-container>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary color="#78e4ff">
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
import ToxictyNavItems from './ToxictyNavItems';
export default {
    name: 'ToxictyHeader',
    components: {
        ToxictyNavItems,
    },
    data() {
        return {
            drawer: false,
            group: null,
            fixed: false,
            text: 'center',
            navList: [
                {
                    to: '/toxicty/home',
                    title: 'Home',
                    icon: 'mdi-home',
                },
                {
                    to: '/toxicty/method',
                    title: 'Method',
                    icon: 'mdi-home',
                },
                {
                    to: '/toxicty/statistics',
                    title: 'Statistics',
                    icon: 'mdi-home',
                },
                {
                    to: '/toxicty/help',
                    title: 'Help',
                    icon: 'mdi-home',
                },
                {
                    to: '/toxicty/contact',
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
