<template>
    <div class="z-50">
        <v-app-bar color="#8b0000" height="96px">
            <v-container d-flex align-center>
                <v-app-bar-nav-icon
                    class="d-md-none"
                    color="#FFFFFF"
                    @click="drawer = true"
                ></v-app-bar-nav-icon>
                <v-toolbar-title>
                    <img
                        class="h-16 cursor-pointer"
                        src="/images/hemopep-logo.png"
                        alt="hemopep-logo"
                        @click="goToIndex"
                    />
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <HemoPepNavItems :navList="navList" class="d-none d-md-block" />
            </v-container>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary color="#8b0000" dark>
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
import HemoPepNavItems from './HemoPepNavItems';
export default {
    name: 'HemoPepHeader',
    components: {
        HemoPepNavItems,
    },
    data() {
        return {
            drawer: false,
            group: null,
            fixed: false,
            text: 'center',
            navList: [
                {
                    to: '/hemopep/home',
                    title: 'Home',
                    icon: 'mdi-home',
                },
                {
                    to: '/hemopep/method',
                    title: 'Method',
                    icon: 'mdi-beaker',
                },
                {
                    to: '/hemopep/statistics',
                    title: 'Statistics',
                    icon: 'mdi-chart-bar',
                },
                {
                    to: '/hemopep/help',
                    title: 'Help',
                    icon: 'mdi-help-circle',
                },
                {
                    to: '/hemopep/contact',
                    title: 'Contact',
                    icon: 'mdi-email',
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
