<template>
    <div id="method-page-index">
        <v-navigation-drawer class="p-2" absolute permanent right disable-resize-watcher>
            <h2 class="p-2 text-xl text-gray-700 font-bold">Content</h2>

            <v-divider></v-divider>

            <!-- <v-list dense>
                <v-list-item v-for="item in items" :key="item.title">
                    <v-list-item-icon>
                        <v-icon>{{ item.icon }}</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list> -->
            <v-tabs vertical>
                <v-tab>Item One</v-tab>
                <v-tab>Item Two</v-tab>
                <v-tab>Item Three</v-tab>
            </v-tabs>
        </v-navigation-drawer>

        <section>
            <h2>AxPEP Server</h2>
            <p>
                Antimicrobial peptides (AMPs) are promising candidates in the fight against
                multidrug-resistant pathogens due to its broad range of activities and low toxicity.
                Some AMPs also display antitumor and antivirus functions making them alternative
                drug candidates for these important diseases. To facilitate the discovery of AMPs
                and their functions, we provide this one-stop server for antimicrobial peptide and
                other activity prediction for unknown sequences. Three methods are currently
                available:
            </p>
        </section>
    </div>
</template>

<script>
export default {
    name: 'MethodPageIndex',
    data() {
        return {
            items: [
                { title: 'Home', icon: 'mdi-home-city' },
                { title: 'My Account', icon: 'mdi-account' },
                { title: 'Users', icon: 'mdi-account-group-outline' },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
$navigation-drawer-border-width: 0px !important;
</style>
