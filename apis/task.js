function newTaskByFile(param, data) {
    return window.$nuxt.$api.$post(
        `axpep/tasks/file?ampep=${param.ampep}&deepampep30=${param.deepampep30}&rfampep30=${param.rfampep30}`,
        data
    );
}

function getSpecifyTasksByEmail(data, page = 1) {
    return window.$nuxt.$api.$get(`axpep/emails/${data}/tasks?page=${page}`);
}

export default {
    newTaskByFile,
    getSpecifyTasksByEmail,
};
