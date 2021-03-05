<script>
import { Line } from 'vue-chartjs';
export default {
    extends: Line,
    props: ['labels', 'data', 'dataName', 'height'],
    mounted() {
        this.renderLineChart();
    },
    computed: {
        chartData: function () {
            return this.data;
        },
    },
    methods: {
        renderLineChart() {
            this.renderChart(
                {
                    labels: this.labels,
                    datasets: [
                        {
                            label: this.dataName,
                            backgroundColor: '#f87979',
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
                    this.renderLineChart();
                }
            },
        },
    },
};
</script>
