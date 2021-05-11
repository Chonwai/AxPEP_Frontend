function newTaskByFile(param, data) {
    return window.$nuxt.$api.$post(
        `axpep/tasks/file?ampep=${param.ampep}&deepampep30=${param.deepampep30}&rfampep30=${param.rfampep30}`,
        data
    );
}

function newTaskByTextarea(param, data) {
    return window.$nuxt.$api.$post(
        `axpep/tasks/textarea?ampep=${param.ampep}&deepampep30=${param.deepampep30}&rfampep30=${param.rfampep30}`,
        data
    );
}

function newTaskByCodon(param, data) {
    return window.$nuxt.$api.$post(
        `axpep/tasks/codon?ampep=${param.ampep}&deepampep30=${param.deepampep30}&rfampep30=${param.rfampep30}`,
        data
    );
}

function newAcPEPTaskByFile(data) {
    return window.$nuxt.$api.$post(`acpep/tasks/file`, data);
}

function newAcPEPTaskByTextarea(data) {
    return window.$nuxt.$api.$post(`acpep/tasks/textarea`, data);
}

function getSpecifyTask(id) {
    return window.$nuxt.$api.$get(`axpep/tasks/${id}`);
}

function getSpecifyAcPEPTask(id) {
    return window.$nuxt.$api.$get(`acpep/tasks/${id}`);
}

function getSpecifyTasksByEmail(data, page = 1) {
    return window.$nuxt.$api.$get(`axpep/emails/${data}/tasks?page=${page}`);
}

function getSpecifyAcPEPTasksByEmail(data, page = 1) {
    return window.$nuxt.$api.$get(`acpep/emails/${data}/tasks?page=${page}`);
}

function downloadSpecifyClassificationFile(id) {
    return window.$nuxt.$api.$get(`axpep/tasks/${id}/classification/download`);
}

function downloadSpecifyScoreFile(id) {
    return window.$nuxt.$api.$get(`axpep/tasks/${id}/score/download`);
}

export default {
    newTaskByFile,
    newTaskByTextarea,
    newTaskByCodon,
    newAcPEPTaskByFile,
    newAcPEPTaskByTextarea,
    getSpecifyTask,
    getSpecifyAcPEPTask,
    getSpecifyTasksByEmail,
    getSpecifyAcPEPTasksByEmail,
    downloadSpecifyClassificationFile,
    downloadSpecifyScoreFile,
};
