<template>
    <StatisticsPage
        application="ecotoxicology"
        :lineChartColor="lineChartColor"
        :doughnutChartColor="doughnutChartColor"
    ></StatisticsPage>
</template>

<script>
import StatisticsPage from '@/components/StatisticsPage';
import Utils from '@/utils/utils.js';
export default {
    layout: 'ecotoxicology',
    name: 'SSLBESToxStatisticsPageIndex',
    data() {
        return {
            lineChartColor: Utils.randomItem([
                '#1ABC9C', // 綠色 - 代表 Algae
                '#3498DB', // 藍色 - 代表 Fish
                '#E67E22', // 橙色 - 代表 Crustaceans
            ]),
            doughnutChartColor: [
                '#1ABC9C', // 綠色 - 代表 Algae
                '#3498DB', // 藍色 - 代表 Fish
                '#E67E22', // 橙色 - 代表 Crustaceans
            ],
        };
    },
    components: {
        StatisticsPage,
    },
};
</script>
