<template>
    <StatisticsPage
        application="ssl-gcn"
        :lineChartColor="lineChartColor"
        :doughnutChartColor="doughnutChartColor"
    ></StatisticsPage>
</template>

<script>
import StatisticsPage from '@/components/StatisticsPage';
import Utils from '@/utils/utils.js';
export default {
    layout: 'toxicty',
    name: 'SSLBESToxStatisticsPageIndex',
    data() {
        return {
            lineChartColor: Utils.randomItem([
                '#E74C3C',
                '#9B59B6',
                '#8E44AD',
                '#2980B9',
                '#3498DB',
                '#1ABC9C',
                '#16A085',
                '#27AE60',
                '#2ECC71',
                '#F1C40F',
                '#F39C12',
                '#E67E22',
            ]),
            doughnutChartColor: [
                '#E74C3C',
                '#9B59B6',
                '#8E44AD',
                '#2980B9',
                '#3498DB',
                '#1ABC9C',
                '#16A085',
                '#27AE60',
                '#2ECC71',
                '#F1C40F',
                '#F39C12',
                '#E67E22',
            ],
        };
    },
    components: {
        StatisticsPage,
    },
};
</script>
