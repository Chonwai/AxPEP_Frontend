<template>
    <div>
        <v-app-bar color="#3f51b5" height="100px">
            <v-app-bar-nav-icon color="#FFFFFF" @click="drawer = true"></v-app-bar-nav-icon>
            <img class="h-16" src="/images/logo.png" alt="" srcset="" />
            <v-col cols="12" class="py-2 float-right">
                <v-btn-toggle v-model="text" tile color="white accent-3" group>
                    <v-btn style="text-transform: capitalize" text color="white" nuxt to="/">
                        <p class="text-base" style="margin-bottom: 0px; text-transform: capitalize">
                            Home
                        </p>
                    </v-btn>
                    <v-btn style="text-transform: capitalize" text color="white" nuxt to="/method">
                        <p class="text-base" style="margin-bottom: 0px; text-transform: capitalize">
                            Method
                        </p>
                    </v-btn>
                    <v-btn style="text-transform: capitalize" text color="white" nuxt to="/dataset">
                        <p class="text-base" style="margin-bottom: 0px; text-transform: capitalize">
                            Dataset
                        </p>
                    </v-btn>
                    <v-btn style="text-transform: capitalize" text color="white" nuxt to="/method">
                        <p class="text-base" style="margin-bottom: 0px; text-transform: capitalize">
                            Statistics
                        </p>
                    </v-btn>
                    <v-btn style="text-transform: capitalize" text color="white" nuxt to="/help">
                        <p class="text-base" style="margin-bottom: 0px; text-transform: capitalize">
                            Help
                        </p>
                    </v-btn>
                    <v-btn
                        class="capitalize"
                        text
                        color="white"
                        value="Help"
                        href="https://cbbio.online/"
                    >
                        <div class="flex flex-row justify-center items-center">
                            <p
                                class="text-2xl"
                                style="margin-bottom: 0px; text-transform: capitalize"
                            >
                                CBBio
                            </p>
                            <v-spacer class="w-1" />
                            <p
                                class="text-xs"
                                style="margin-bottom: 0px; text-transform: capitalize"
                            >
                                Computational Biology <br />and Bioinformatics Lab
                            </p>
                        </div>
                    </v-btn>
                </v-btn-toggle>
            </v-col>
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" absolute temporary>
            <v-list nav dense>
                <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'AppNav',
    data() {
        return {
            drawer: false,
            group: null,
            fixed: false,
            text: 'center',
        };
    },
};
</script>
