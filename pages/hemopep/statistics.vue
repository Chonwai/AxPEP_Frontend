<template>
    <StatisticsPage
        application="hemopep"
        :lineChartColor="lineChartColor"
        :doughnutChartColor="doughnutChartColor"
    ></StatisticsPage>
</template>

<script>
import StatisticsPage from '@/components/StatisticsPage';
import Utils from '@/utils/utils.js';
export default {
    layout: 'hemopep',
    name: 'HemoPepStatisticsPageIndex',
    data() {
        return {
            lineChartColor: '#8b0000',
            doughnutChartColor: [
                '#8b0000', // 主色
                '#d32f2f', // 輔助色
                '#ff6b6b', // 亮色
            ],
        };
    },
    components: {
        StatisticsPage,
    },
};
</script>
