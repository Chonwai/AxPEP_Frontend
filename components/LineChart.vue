<script>
import { Line } from 'vue-chartjs';
export default {
    extends: Line,
    props: ['data'],
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
            this.renderChart(this.chartData);
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
