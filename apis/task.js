function newTaskByFile(data) {
    return window.$nuxt.$api.$post(`ampep/tasks/file`, data);
}

function newTaskByTextarea(data) {
    return window.$nuxt.$api.$post(`ampep/tasks/textarea`, data);
}

function newTaskByCodon(data) {
    return window.$nuxt.$api.$post(`ampep/tasks/codon`, data);
}

function newAcPEPTaskByFile(data) {
    return window.$nuxt.$api.$post(`acpep/tasks/file`, data);
}

function newAcPEPTaskByTextarea(data) {
    return window.$nuxt.$api.$post(`acpep/tasks/textarea`, data);
}

function newBESToxTaskByFile(data) {
    return window.$nuxt.$api.$post(`bestox/tasks/file`, data);
}

function newBESToxTaskByTextarea(data) {
    return window.$nuxt.$api.$post(`bestox/tasks/textarea`, data);
}

function getSpecifyTask(id, application) {
    return window.$nuxt.$api.$get(`axpep/tasks/${id}?application=${application}`);
}

function getSpecifyTasksByEmail(data, page = 1, application) {
    return window.$nuxt.$api.$get(
        `axpep/emails/${data}/tasks?page=${page}&application=${application}`
    );
}

function downloadSpecifyClassificationFile(id) {
    return window.$nuxt.$api.$get(`axpep/tasks/${id}/classification/download`);
}

function downloadSpecifyScoreFile(id) {
    return window.$nuxt.$api.$get(`axpep/tasks/${id}/score/download`);
}

function downloadSpecifyResultFile(id) {
    return window.$nuxt.$api.$get(`axpep/tasks/${id}/result/download`);
}

export default {
    newTaskByFile,
    newTaskByTextarea,
    newTaskByCodon,
    newAcPEPTaskByFile,
    newAcPEPTaskByTextarea,
    newBESToxTaskByFile,
    newBESToxTaskByTextarea,
    getSpecifyTask,
    getSpecifyTasksByEmail,
    downloadSpecifyClassificationFile,
    downloadSpecifyScoreFile,
    downloadSpecifyResultFile,
};
