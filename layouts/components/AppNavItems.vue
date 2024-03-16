<template>
    <div>
        <v-btn
            v-for="(item, i) in navList"
            :key="i"
            style="text-transform: capitalize"
            text
            color="white"
            nuxt
            :to="item.to"
        >
            <p class="text-base" style="margin-bottom: 0px; text-transform: capitalize">
                {{ item.title }}
            </p>
        </v-btn>
        <v-btn text color="white" value="Help" href="https://app.cbbio.online/">
            <div class="flex flex-row justify-center items-center">
                <p class="text-2xl" style="margin-bottom: 0px; text-transform: capitalize">CBBio</p>
                <v-spacer class="w-1" />
                <p class="text-xs" style="margin-bottom: 0px; text-transform: capitalize">
                    Computational Biology <br />and Bioinformatics Tools
                </p>
            </div>
        </v-btn>
    </div>
</template>

<script>
export default {
    name: 'NavItemsIndex',
    props: {
        navList: {
            type: Array,
            default: [],
        },
    },
};
</script>
