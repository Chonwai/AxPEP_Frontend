<template>
    <StatisticsPage
        application="acpep"
        :lineChartColor="lineChartColor"
        :doughnutChartColor="doughnutChartColor"
    ></StatisticsPage>
</template>

<script>
import StatisticsPage from '@/components/StatisticsPage';
import Utils from '@/utils/utils.js';
export default {
    layout: 'acpep',
    name: 'AcPEPStatisticsPageIndex',
    data() {
        return {
            lineChartColor: Utils.randomItem([
                '#ED6D0D',
                '#F2A805',
                '#FEE4B5',
                '#9BD185',
                '#7CC26A',
                '#649748',
            ]),
            doughnutChartColor: ['#ED6D0D', '#F2A805', '#FEE4B5', '#9BD185', '#7CC26A', '#649748'],
        };
    },
    components: {
        StatisticsPage,
    },
};
</script>
