<template>
    <div>
        <v-btn style="text-transform: capitalize" text color="white" nuxt to="/">
            <p class="text-base" style="margin-bottom: 0px; text-transform: capitalize">Home</p>
        </v-btn>
        <v-btn style="text-transform: capitalize" text color="white" nuxt to="/method">
            <p class="text-base" style="margin-bottom: 0px; text-transform: capitalize">Method</p>
        </v-btn>
        <v-btn style="text-transform: capitalize" text color="white" nuxt to="/dataset">
            <p class="text-base" style="margin-bottom: 0px; text-transform: capitalize">Dataset</p>
        </v-btn>
        <v-btn style="text-transform: capitalize" text color="white" nuxt to="/statistics">
            <p class="text-base" style="margin-bottom: 0px; text-transform: capitalize">
                Statistics
            </p>
        </v-btn>
        <v-btn style="text-transform: capitalize" text color="white" nuxt to="/help">
            <p class="text-base" style="margin-bottom: 0px; text-transform: capitalize">Help</p>
        </v-btn>
        <v-btn class="capitalize" text color="white" value="Help" href="https://cbbio.online/">
            <div class="flex flex-row justify-center items-center">
                <p class="text-2xl" style="margin-bottom: 0px; text-transform: capitalize">CBBio</p>
                <v-spacer class="w-1" />
                <p class="text-xs" style="margin-bottom: 0px; text-transform: capitalize">
                    Computational Biology <br />and Bioinformatics Lab
                </p>
            </div>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'NavItemsIndex',
};
</script>
