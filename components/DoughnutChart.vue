<script>
import { Doughnut } from 'vue-chartjs';
export default {
    extends: Doughnut,
    props: ['labels', 'data', 'dataName', 'height', 'color'],
    mounted() {
        this.renderDoughnutChart();
    },
    computed: {
        chartData: function () {
            return this.data;
        },
    },
    methods: {
        renderDoughnutChart() {
            this.renderChart(
                {
                    labels: this.labels,
                    datasets: [
                        {
                            label: this.dataName,
                            backgroundColor: this.color,
                            data: this.data,
                        },
                    ],
                },
                { responsive: true, maintainAspectRatio: false }
            );
        },
    },
    watch: {
        data: {
            deep: true,
            immediate: true,
            handler: function (val, oldVal) {
                if (this.$data._chart != null) {
                    this.$data._chart.destroy();
                    this.renderDoughnutChart();
                }
            },
        },
    },
};
</script>
