function getCountingLocationsByNDaysAgo(daysAgo, application) {
    return window.$nuxt.$api.$get(
        `axpep/analysis/count/tasks/locations?days_ago=${daysAgo}&application=${application}`
    );
}

function getCountingTasksByNDaysAgo(daysAgo, application) {
    return window.$nuxt.$api.$get(
        `axpep/analysis/count/tasks?days_ago=${daysAgo}&application=${application}`
    );
}

function getCountingEachMethods(application) {
    return window.$nuxt.$api.$get(`axpep/analysis/count/method?application=${application}`);
}

export default {
    getCountingTasksByNDaysAgo,
    getCountingLocationsByNDaysAgo,
    getCountingEachMethods,
};
