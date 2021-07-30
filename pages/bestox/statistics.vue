<template>
    <StatisticsPage
        application="bestox"
        :lineChartColor="lineChartColor"
        :doughnutChartColor="doughnutChartColor"
    ></StatisticsPage>
</template>

<script>
import StatisticsPage from '@/components/StatisticsPage';
export default {
    layout: 'ssl-bestox',
    name: 'SSLBESToxStatisticsPageIndex',
    data() {
        return {
            lineChartColor: '#c0d9c2',
            doughnutChartColor: ['#ED6D0D', '#F2A805', '#FEE4B5', '#9BD185', '#7CC26A', '#649748'],
        };
    },
    components: {
        StatisticsPage,
    },
};
</script>
