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

function getSpecifyTask(id) {
    return window.$nuxt.$api.$get(`axpep/tasks/${id}`);
}

function getSpecifyTasksByEmail(data, page = 1) {
    return window.$nuxt.$api.$get(`axpep/emails/${data}/tasks?page=${page}`);
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
    getSpecifyTasksByEmail,
    getSpecifyTask,
    downloadSpecifyClassificationFile,
    downloadSpecifyScoreFile,
};
