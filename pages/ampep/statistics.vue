<template>
    <StatisticsPage
        application="ampep"
        :lineChartColor="lineChartColor"
        :doughnutChartColor="doughnutChartColor"
    ></StatisticsPage>
</template>

<script>
import StatisticsPage from '@/components/StatisticsPage';
import Utils from '@/utils/utils.js';
export default {
    layout: 'ampep',
    name: 'AmPEPStatisticsPageIndex',
    data() {
        return {
            lineChartColor: Utils.randomItem(['#3f51b5', '#69f0ae']),
            doughnutChartColor: ['#3f51b5', '#69f0ae'],
        };
    },
    components: {
        StatisticsPage,
    },
};
</script>
