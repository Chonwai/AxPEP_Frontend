function newTaskByFile(data) {
    return window.$nuxt.$api.$post(
        `axpep/tasks/file?ampep=${data.ampep}&deepampep30=${data.deepampep30}&rfampep30=${data.rfampep30}`,
        {
            file: 'new name',
            email: data.email,
            source: 'file',
            description: data.description,
        }
    );
}

export default {
    newTaskByFile,
};
