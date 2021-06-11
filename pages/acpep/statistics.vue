<template>
    <StatisticsPage
        application="acpep"
        :lineChartColor="lineChartColor"
        :doughnutChartColor="doughnutChartColor"
    ></StatisticsPage>
</template>

<script>
import StatisticsPage from '@/components/StatisticsPage';
export default {
    layout: 'acpep',
    name: 'AcPEPStatisticsPageIndex',
    data() {
        return {
            lineChartColor: '#fe6e00',
            doughnutChartColor: ['#ED6D0D', '#F2A805', '#FEE4B5', '#9BD185', '#7CC26A', '#649748'],
        };
    },
    components: {
        StatisticsPage,
    },
};
</script>
