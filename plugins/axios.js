export default function ({ $axios }) {
    $axios.onError(error => {
        if (error.response && error.response.status === 500) {
            console.log(error);
        }
    });
    $axios.interceptors.response.use(response => {
        if (response.status === 200) {
            console.log(response);
        }
        return response;
    });
}
