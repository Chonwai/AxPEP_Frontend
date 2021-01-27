<template>
    <div id="statistics-page-index" class="p-0 md:p-8">
        <section id="Statistics" class="mb-8">
            <h2 class="text-4xl">
                Statistics <span class="text-lg">({{ daysAgo }} days)</span>
            </h2>
            <div class="flex flex-row items-center py-2">
                <p class="mb-0">Select the Period:</p>
                <v-btn-toggle v-model="daysAgo" tile color="deep-purple accent-3" group>
                    <v-btn :value="7"> 7 Days </v-btn>
                    <v-btn :value="14"> 14 Days </v-btn>
                    <v-btn :value="30"> 30 Days </v-btn>
                    <v-btn :value="365"> 365 Days </v-btn>
                </v-btn-toggle>
            </div>
            <div id="map-wrap" class="h-80 mb-8">
                <no-ssr>
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
                </no-ssr>
            </div>
            <div class="line-chart mb-8">
                <LineChart :height="96" :data="lineChartData" />
            </div>
        </section>
    </div>
</template>

<script>
import LineChart from '../components/LineChart';
import AnalysisAPI from '../apis/analysis';
export default {
    name: 'StatisticsPageIndex',
    data() {
        return {
            daysAgo: 14,
            locationsList: [],
            lineChartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Jobs',
                        backgroundColor: '#f87979',
                        data: [],
                    },
                ],
            },
        };
    },
    components: {
        LineChart,
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
        },
        async getCountLocations() {
            let res = await AnalysisAPI.getCountingLocationsByNDaysAgo(this.daysAgo);
            this.locationsList = res.message;
        },
        async getCountTasks() {
            let res = await AnalysisAPI.getCountingTasksByNDaysAgo(this.daysAgo);
            console.log(res);
            let dateList = [];
            let countList = [];
            for (const item of res.message) {
                dateList.push(item.date);
                countList.push(item.total);
            }
            this.lineChartData.labels = dateList;
            this.lineChartData.datasets[0].data = countList;
            console.log(this.lineChartData);
        },
    },
};
</script>
