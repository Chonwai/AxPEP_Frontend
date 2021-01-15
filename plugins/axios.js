export default function ({ $axios }) {
    $axios.onError(error => {
        if (error.response && error.response.status === 500) {
            console.log(error);
        }
    });
}
