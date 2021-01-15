export default function ({ $axios }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            common: {
                Accept: 'text/plain, */*',
            },
        },
    });

    api.onResponse(response => {
        if (response.data.status == false) {
            for (const iterator in response.data.message) {
                window.$nuxt.$notify({
                    group: 'foo',
                    type: 'error',
                    title: 'Error',
                    text: response.data.message[`${iterator}`][0],
                });
            }
        }
        return response;
    });

    // Inject to context as $api
    inject('api', api);
}
