function getAllCodons() {
    return window.$nuxt.$api.$get(`axpep/codons/all`);
}

export default {
    getAllCodons,
};
