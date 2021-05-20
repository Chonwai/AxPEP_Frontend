<template>
    <div class="z-50">
        <v-app-bar color="#c0d9c2" height="96px">
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
                        alt="axpep-logo"
                        @click="goToIndex"
                /></v-toolbar-title>
                <v-spacer></v-spacer>
                <AcPEPNavItems :navList="navList" class="d-none d-md-block" />
            </v-container>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav>
                <v-list-item link nuxt to="/acpep">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
                <v-list-item link nuxt to="/acpep/statistics">
                    <v-list-item-icon>
                        <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Statistics</v-list-item-title>
                </v-list-item>
                <v-list-item link nuxt to="/acpep/help">
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
import AcPEPNavItems from './AcPEPNavItems';
export default {
    name: 'AmPEPHeader',
    components: {
        AcPEPNavItems,
    },
    data() {
        return {
            drawer: false,
            group: null,
            fixed: false,
            text: 'center',
            navList: [
                {
                    to: '/acpep',
                    title: 'Home',
                    icon: 'mdi-home',
                },
                {
                    to: '/acpep/statistics',
                    title: 'Statistics',
                    icon: 'mdi-home',
                },
                {
                    to: '/acpep/help',
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
