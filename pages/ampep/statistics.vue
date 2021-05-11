<template>
    <StatisticsPage
        application="ampep"
        :lineChartColor="lineChartColor"
        :doughnutChartColor="doughnutChartColor"
    ></StatisticsPage>
</template>

<script>
import StatisticsPage from '@/components/StatisticsPage';
export default {
    layout: 'ampep',
    name: 'AmPEPStatisticsPageIndex',
    data() {
        return {
            lineChartColor: '#3f51b5',
            doughnutChartColor: ['#3f51b5', '#69f0ae', '#0288d1', '#00bfa5'],
        };
    },
    components: {
        StatisticsPage,
    },
};
</script>
