function getCountingLocationsByNDaysAgo(daysAgo) {
    return window.$nuxt.$api.$get(`axpep/analysis/count/tasks/locations?days_ago=${daysAgo}`);
}

function getCountingTasksByNDaysAgo(daysAgo) {
    return window.$nuxt.$api.$get(`axpep/analysis/count/tasks?days_ago=${daysAgo}`);
}

export default {
    getCountingTasksByNDaysAgo,
    getCountingLocationsByNDaysAgo,
};
