function getCountingLocationsByNDaysAgo(daysAgo) {
    return window.$nuxt.$api.$get(`axpep/analysis/count/tasks/locations?days_ago=${daysAgo}`);
}

function getCountingTasksByNDaysAgo(daysAgo) {
    return window.$nuxt.$api.$get(`axpep/analysis/count/tasks?days_ago=${daysAgo}`);
}

function getCountingEachMethods(application) {
    return window.$nuxt.$api.$get(`axpep/analysis/count/method?application=${application}`);
}

export default {
    getCountingTasksByNDaysAgo,
    getCountingLocationsByNDaysAgo,
    getCountingEachMethods,
};
