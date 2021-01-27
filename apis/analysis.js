function getCountingTasksByNDaysAgo(daysAgo) {
    return window.$nuxt.$api.$get(`axpep/analysis/count/tasks/locations?days_ago=${daysAgo}`);
}

export default {
    getCountingTasksByNDaysAgo,
};
