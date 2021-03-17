<template>
    <v-app dark>
        <AppHeader color="#663399" class="top-0" />
        <v-container>
            <div class="h-full flex flex-col justify-center items-center">
                <p class="text-6xl font-bold">Oops...</p>
                <p class="text-2xl font-bold" v-if="error.statusCode === 404">
                    {{ pageNotFound }}
                </p>
                <p class="text-2xl font-bold" v-else>
                    {{ otherError }}
                </p>
                <NuxtLink to="/"> Home page </NuxtLink>
            </div>
        </v-container>
    </v-app>
</template>

<script>
import AppHeader from './components/AppHeader';
export default {
    layout: 'empty',
    props: {
        error: {
            type: Object,
            default: null,
        },
    },
    data() {
        return {
            pageNotFound: '404 Not Found',
            otherError: 'An error occurred',
        };
    },
    components: {
        AppHeader,
    },
    head() {
        const title = this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
        return {
            title,
        };
    },
};
</script>

<style scoped>
h1 {
    font-size: 20px;
}
</style>
