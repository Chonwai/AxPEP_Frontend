<template>
    <div id="statistics-page-index" class="p-0 md:p-8">
        <section id="Statistics" class="mb-8">
            <h2 class="text-4xl">
                Statistics <span class="text-lg">({{ daysAgo }} days)</span>
            </h2>
            <div class="flex flex-row items-center py-2">
                <p class="mb-0">Select the Period:</p>
                <v-btn-toggle v-model="daysAgo" tile group>
                    <v-btn :value="7"> 7 Days </v-btn>
                    <v-btn :value="14"> 14 Days </v-btn>
                    <v-btn :value="30"> 30 Days </v-btn>
                    <v-btn :value="180"> 180 Days </v-btn>
                    <v-btn :value="365"> 365 Days </v-btn>
                </v-btn-toggle>
            </div>
            <div id="map-wrap z-10" class="h-80 mb-8">
                <l-map :zoom="1" :center="[25, 0]">
                    <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                    <div v-if="locationsList != []">
                        <l-marker
                            v-for="(location, index) in locationsList"
                            :key="index"
                            :lat-lng="[location.latitude, location.longitude]"
                        ></l-marker>
                    </div>
                </l-map>
            </div>
            <div class="line-chart mb-8">
                <p>Total {{ totalJobs }} jobs on period {{ daysAgo }} days</p>
                <LineChart
                    :height="360"
                    :labels="lineChartLabels"
                    :data="lineChartData"
                    :dataName="lineChartDataName"
                    :color="lineChartColor"
                />
            </div>
            <div class="doughnut-chart mb-8">
                <p>How often are methods used?</p>
                <DoughnutChart
                    :height="360"
                    :labels="doughnutLabels"
                    :data="doughnutChartData"
                    :dataName="doughnutChartDataName"
                    :color="doughnutChartColor"
                />
            </div>
        </section>
    </div>
</template>

<script>
import LineChart from '@/components/LineChart';
import DoughnutChart from '@/components/DoughnutChart';
import AnalysisAPI from '@/apis/analysis';
export default {
    name: 'StatisticsPageIndex',
    props: ['application', 'lineChartColor', 'doughnutChartColor'],
    data() {
        return {
            daysAgo: 14,
            locationsList: [],
            lineChartLabels: [],
            lineChartData: [],
            lineChartDataName: 'Jobs',
            doughnutLabels: [],
            doughnutChartData: [],
            doughnutChartDataName: 'Each Methods',
            totalJobs: 0,
        };
    },
    components: {
        LineChart,
        DoughnutChart,
    },
    async created() {
        await this.init();
    },
    watch: {
        daysAgo() {
            this.init();
        },
    },
    methods: {
        async init() {
            this.getCountLocations();
            this.getCountTasks();
            this.getCountEachMethods();
        },
        async getCountLocations() {
            let res = await AnalysisAPI.getCountingLocationsByNDaysAgo(this.daysAgo);
            this.locationsList = res.message;
        },
        async getCountTasks() {
            let res = await AnalysisAPI.getCountingTasksByNDaysAgo(this.daysAgo);
            let dateList = [];
            let countList = [];
            let totalCount = 0;
            for (const item of res.message) {
                dateList.push(item.date);
                countList.push(item.total);
                totalCount += item.total;
            }
            this.lineChartLabels = dateList;
            this.lineChartData = countList;
            this.totalJobs = totalCount;
        },
        async getCountEachMethods() {
            let res = await AnalysisAPI.getCountingEachMethods(this.application);
            let dateList = [];
            let countList = [];
            let totalCount = 0;
            for (const item of res.message) {
                dateList.push(item.method);
                countList.push(item.total);
                totalCount += item.total;
            }
            this.doughnutLabels = dateList;
            this.doughnutChartData = countList;
        },
    },
};
</script>
