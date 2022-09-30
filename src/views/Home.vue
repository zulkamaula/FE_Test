<template>
    <div class="container-fluid m-0 py-5">
        <div class="row justify-content-center py-3">
            <div class="col-1 pt-3 pr-0 align-self-start" style="font-size: 1vmax">
                <div class="bg-contain py-2 pl-3 pr-0 btn-home" :class="{'btn-page-active': homeView == true}" @click="setPage('home')">
                    Home
                </div>
                <div class="bg-contain py-2 pl-3 pr-0 btn-master" :class="{'btn-page-active': masterRuasView == true}" @click="setPage('master-ruas')">
                    Master Ruas
                </div>
            </div>
            <div class="col-10 py-3 px-3 rounded-lg bg-contain">
                <div class="container-fluid">
                    <transition name="fade2">
                        <section id="graph-section" v-if="homeView">
                            <h4 class="mb-4">
                                <b>H</b>ome
                            </h4>
        
                            <div class="row mt-4">
                                <div class="col-4">
                                    <div class="border just-box text-center">
                                        <canvas width="20vw" height="150px" id="myChart3"></canvas>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="border just-box text-center">
                                        <BarChart />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="border just-box text-center">
                                        <PieChart />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </transition>

                    <transition name="fade2">
                        <section id="gallery-section" v-if="homeView">
                            <h5 class="mt-5">
                                Image Gallery
                            </h5>
    
                            <div class="row mt-3">
                                <div class="col p-3 border rounded shadow-sm mx-2" v-for="gimg in gallerImage" :key="gimg.key">
                                    <b-img :src="gimg.link_img" fluid :alt="gimg.name_alt"></b-img>
                                </div>
                            </div>
                        </section>
                    </transition>

                    <section id="master-ruas">
                        <transition name="fade2">
                            <div v-if="masterRuasView">
                                <h4 class="mb-4">
                                    <b>R</b>uas
                                </h4>
                                <div class="btn btn-success">
                                    <i class="fas fa-plus-circle text-white mr-3"></i> Tambah Data
                                </div>
                            </div>
                        </transition>

                        <transition name="fade2">
                            <div class="container-fluid position-relative" style="height: 20vh" v-if="!masterRuasView && !homeView">
                                <span class="d-empty text-center font-italic text-muted">
                                    Please select page on beside to the contain..
                                </span>
                            </div>
                        </transition>
                        <transition name="fade2">
                            <b-container fluid class="my-1 px-0" v-if="masterRuasView || homeView">
                                <!-- User Interface controls -->
                                <b-row class="justify-content-between mb-2">
                                    <b-col sm="4" md="4" class="my-1 d-flex align-self-center">
                                        <span class="mr-2">
                                            Show
                                        </span>
                                        <b-form-select
                                        id="per-page-select"
                                        v-model="perPage"
                                        :options="pageOptions"
                                        size="sm"
                                        ></b-form-select>
                                        <span class="ml-2">
                                            entries
                                        </span>
                                    </b-col>
    
                                    <b-col sm="5" md="3" class="my-1">
                                        <div class="form-label-group">
                                            <b-input
                                            v-model="filter"
                                            type="search"
                                            ></b-input>
                                            <label>
                                                <b-icon icon="search"></b-icon>
                                                Search
                                            </label>
                                        </div>
                                    </b-col>
                                </b-row>
    
                                <!-- Main table element -->
                                <b-table
                                :items="items"
                                :fields="fields"
                                :filter="filter"
                                :current-page="currentPage"
                                :per-page="perPage"
                                sticky-header="200px"
                                no-border-collapse
                                show-empty
                                small
                                >
                                    <template #cell(gambar)="row">
                                        <b-button @click="previewGambar(row.value)">
                                            Preview Gambar
                                        </b-button>
                                    </template>

                                    <!-- <template #cell(tanggal)="row">
                                        {{ row.value.slice(0, 10) }}
                                    </template> -->
    
                                    <template #cell(aksi)="row">
                                        <div class="d-flex justify-content-center">
                                            <b-icon role="button" icon="pencil-fill" class="mx-1" @click="edit(row.value)">
                                            </b-icon>
                                            <b-icon role="button" icon="eye-fill" class="mx-1" @click="edit(row.value.id)">
                                            </b-icon>
                                            <b-icon role="button" icon="trash-fill" class="mx-1" @click="del(row.value.id)">
                                            </b-icon>
                                        </div>
                                    </template>
                                </b-table>
    
                                <b-row class="mb-3">
                                    <div class="col">
                                        <small>
                                            Showing <b>1</b> to <b>{{perPage}}</b> of <b>{{totalRows}}</b> entries
                                        </small>
                                    </div>
                                    <div class="col-4">
                                        <b-pagination
                                        v-model="currentPage"
                                        :total-rows="totalRows"
                                        :per-page="perPage"
                                        align="fill"
                                        size="sm"
                                        class="my-0"
                                        ></b-pagination>
                                    </div>
                                </b-row>
                                <!-- Info modal -->
                                <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
                                <pre>{{ infoModal.content }}</pre>
                                </b-modal>
                            </b-container>
                        </transition>
                    </section>

                </div>
            </div>
        </div>

        <section class="bg-animate">
            <div class='light x1'></div>
            <div class='light x2'></div>
            <div class='light x3'></div>
            <div class='light x4'></div>
            <div class='light x5'></div>
            <div class='light x6'></div>
            <div class='light x7'></div>
            <div class='light x8'></div>
            <div class='light x9'></div>
        </section>
    </div>
</template>

<script>
    import constant from '../constant.js';
    import { Chart, registerables } from 'chart.js';
    Chart.register(...registerables);
    import BarChart from '@/components/BarChart.vue';
    import PieChart from '@/components/PieChart.vue';
    import axios from 'axios';
    import Swal from 'sweetalert2';
    // import ChartDataLabels from 'chartjs-plugin-datalabels';
    // Chart.register(...registerables, ChartDataLabels);

    export default {
        components: {
            BarChart,
            PieChart
        },
        data() {
            return {
                endpoint: process.env.VUE_APP_ENDPOINT,
                homeView: true,
                bulan: constant.bulan,
                masterRuasView: false,
                lineChart: '',
                barChart: '',
                labelsLine: constant.labelsLine,
                labelsBar: constant.labelsBar,
                resDataMultipleLine: constant.resDataMultipleLine,
                resDataBarChart: constant.resDataBarChart,
                gallerImage: constant.gallerImage,
                items: [],
                fields: [
                    { key: 'no', label: 'No', sortable: true, sortDirection: 'desc' },
                    { key: 'ruas', label: 'Ruas', sortable: true, class: 'text-center' },
                    { key: 'unit_kerja', label: 'Unit Kerja', sortable: true, class: 'text-center' },
                    { key: 'gambar', label: 'Gambar', sortable: true, class: 'text-center' },
                    { key: 'tanggal', label: 'Tanggal', sortable: true, class: 'text-center' },
                    { key: 'aksi', label: 'Aksi', class: 'text-center' }
                ],
                totalRows: 1,
                currentPage: 1,
                perPage: 5,
                pageOptions: [5, 10, 15, { value: 100, text: "Show a lot" }],
                filter: null,
                filterOn: [],
                infoModal: {
                id: 'info-modal',
                title: '',
                content: ''
                } 
            }
        },
        created() {
            // console.log(`===========> this.endpoint `, this.endpoint)
        },
        mounted() {
            // Set the initial number of items
            this.getDataRuas()
            this.canvasLine()
            this.canvasBar()
        },
        methods: {
            del(value){
                Swal.fire({
                    icon: 'warning',
                    title: 'Anda yakin?',
                    text: 'Anda akan menghapus data ini!',
                    showCancelButton: true,
                    confirmButtonColor: 'rgb(101, 194, 93)',
                    cancelButtonColor: '#d33',
                    confirmButtonText: 'Ya, hapuskan!',
                    cancelButtonText: 'Batal',
                })
                .then((res) => {
                    if(res.isConfirmed){
                        const api = `${this.endpoint}/${value}`
                        axios.delete(api)
                        .then((res) => {
                            const data_result = res.data;
                            const Toast = Swal.mixin({
                                toast: true,
                                position: 'top-end',
                                showConfirmButton: false,
                                timer: 1500,
                                timerProgressBar: true,
                                didOpen: (toast) => {
                                    toast.addEventListener('mouseenter', Swal.stopTimer)
                                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                                }
                                })

                                Toast.fire({
                                    icon: 'success',
                                    title: 'Hapus Berhasil!',
                                    html: `
                                        Anda berhasil menghapus data <b>${data_result.ruas.toUpperCase()}</b> pada <b>${data_result.unit.toUpperCase()}</b>.
                                    `
                                })
                                .then(() => {
                                    this.getDataRuas()
                                })
                            console.log(`===========> data_result `, data_result)
                        })
                        .catch((err) => {
                            const error = err.response;
                            console.log(`===========> error `, error)
                        })
                    }
                })
            },
            edit(value){
                console.log(`===========> value `, value)
                const unit = value.unit;
                const ruas = value.ruas;
                const gambar = value.picture;
                const tanggal = value.date_create.slice(0, 10);

                Swal.fire({
                    title: 'Detail Ruas',
                    html: `
                    <div class='container text-left'>
                        <label for="unit_kerja">
                            <small class="ml-1">
                                Unit Kerja
                            </small>
                        </label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="unit_kerja" value='${unit}'>
                        </div>

                        <label for="ruas">
                            <small class="ml-1">
                                Ruas
                            </small>
                        </label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="ruas" value='${ruas}'>
                        </div>

                        <label for="gambar">
                            <small class="ml-1">
                                Gambar
                            </small>
                        </label>
                        <div class="mb-3">
                            <img src="${gambar}" class="img-thumbnail">
                        </div>

                        <label for="tanggal">
                            <small class="ml-1">
                                Tanggal
                            </small>
                        </label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="tanggal" value='${tanggal}'>
                        </div>

                        <label for="status">
                            <small class="ml-1">
                                Status
                            </small>
                        </label>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" id="status" value='Aktif' readonly>
                        </div>
                    </div>
                    `
                    
                })
            },
            getDataRuas(){
                const api = this.endpoint
                axios.get(api)
                .then((res) => {
                    const data_result = res.data;
                    console.log(`===========> data_result `, data_result)
                    let data_items = [];
                    data_result.forEach((i, index) => data_items.push({
                        no: index+1,
                        ruas: i.ruas,
                        unit_kerja: i.unit,
                        gambar: i.picture,
                        tanggal: i.date_create.slice(0, 10),
                        aksi: i
                    }))
                    this.items = data_items;
                    console.log(`===========> items `, this.items)
                    this.totalRows = this.items.length;
                })
                .catch((err) => {
                    const error = err.response;
                    console.log(`===========> error `, error)
                })
            },
            info(item, index, button) {
                this.infoModal.title = `Row index: ${index}`
                this.infoModal.content = JSON.stringify(item, null, 2)
                this.$root.$emit('bv::show::modal', this.infoModal.id, button)
            },
            resetInfoModal() {
                this.infoModal.title = ''
                this.infoModal.content = ''
            },
            setPage(value){
                const { homeView, masterRuasView } = this;
                if(value == 'home'){
                    if(homeView == false){
                        this.homeView = true;
                        this.masterRuasView = false;
                        this.$nextTick(() => {
                            this.canvasLine()
                        });
                    } else {
                        this.homeView = false;
                    }
                } else if(value == 'master-ruas'){
                    if(masterRuasView == false){
                        this.masterRuasView = true;
                        this.homeView = false;
                    } else {
                        this.masterRuasView = false;
                    }
                }

                console.log(`*** value ==> `, value)
            },
            canvasBar() {
                const ctx2 = document.getElementById("myChart2");
                this.barChart = new Chart(ctx2, {
                    type: 'bar',
                    // labels: this.labelsBar,
                    data: this.resDataBarChart,
                    options: {
                        scales: {
                        y: {
                            beginAtZero: true
                        }
                        }
                    },
                })

            },
            canvasLine(){
            ///// LINE CHART
            const ctx3 = document.getElementById("myChart3");
            const datalabels = {
                font: {
                    weight: 'bold',
                },
                textShadowColor: 'black',
                textShadowBlur: 5,
                color: 'white',
                anchor: 'center',
                align: 'left',
                offset: 10,
                padding: 5,
                backgroundColor: 'rgba(96, 57, 64, 0.5)',
                borderRadius: 5,
                formatter: (value, context) => {
                const format = Intl.NumberFormat('id-ID', {
                    style: 'currency',
                    currency: 'IDR',
                    maximumSignificantDigits: 3
                }).format(value);
                return `${context.dataset.label.toUpperCase()} : ${format}`;
                },
                display: (context) => {
                return (context.dataIndex === context.dataset.data.length - 1)
                }
            }
            this.lineChart = new Chart(ctx3, {
                type: "line",
                data: {
                labels: this.labelsLine,
                datasets: this.resDataMultipleLine
                },
                options: {
                layout:{
                    padding: 20
                },
                plugins: {
                    datalabels,
                    filler: {
                    propagate: true
                    }
                },
                tension: 0.4,
                responsive: true,
                responsiveAnimationDuration: 0,
                maintainAspectRatio: true,
                aspectRatio: 2,
                oneResie: null,
                }
            });
            }
        },
    }
</script>

<style scoped>
    @import '../assets/css/style-guide.css';
</style>