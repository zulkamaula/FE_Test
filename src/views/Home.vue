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
            <div class="col-9 py-3 px-3 rounded-lg bg-contain">
                <div class="container-fluid">
                    <transition name="fade2">
                        <section id="graph-section" v-if="homeView">
                            <h4 class="mb-4">
                                Home
                            </h4>
        
                            <div class="row mt-4">
                                <div class="col-4">
                                    <div class="border just-box text-center">
                                        Grafik
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="border just-box text-center">
                                        Bar Chart
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="border just-box text-center">
                                        Line Chart
                                    </div>
                                </div>
                            </div>
                        </section>
                    </transition>

                    <transition name="fade2">
                        <section id="gallery-section" v-if="homeView">
                            <h5 class="mt-4">
                                Image Gallery
                            </h5>
    
                            <div class="row mt-3">
                                <div class="col p-3 border rounded shadow-sm mx-2">
                                    <i class="fas fa-image fa-2xl"></i>
                                </div>
                                <div class="col p-3 border rounded shadow-sm mx-2">
                                    <i class="fas fa-image fa-2xl"></i>
                                </div>
                                <div class="col p-3 border rounded shadow-sm mx-2">
                                    <i class="fas fa-image fa-2xl"></i>
                                </div>
                                <div class="col p-3 border rounded shadow-sm mx-2">
                                    <i class="fas fa-image fa-2xl"></i>
                                </div>
                            </div>
                        </section>
                    </transition>

                    <section id="master-ruas">
                        <transition name="fade2">
                            <div class="btn btn-success" v-if="masterRuasView">
                                <i class="fas fa-plus-circle text-white mr-3"></i> Tambah Data
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
                            <b-container fluid class="my-4 px-0" v-if="masterRuasView || homeView">
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
                                :current-page="currentPage"
                                :per-page="perPage"
                                sticky-header="200px"
                                no-border-collapse
                                show-empty
                                small
                                >
                                    <template #cell(name)="row">
                                        {{ row.value.first }} {{ row.value.last }}
                                    </template>
    
                                    <template #cell(actions)="row">
                                        <b-button size="sm" @click="info(row.item, row.index, $event.target)" class="mr-1">
                                        Info modal
                                        </b-button>
                                        <b-button size="sm" @click="row.toggleDetails">
                                        {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                                        </b-button>
                                    </template>
    
                                    <template #row-details="row">
                                        <b-card>
                                        <ul>
                                            <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                                        </ul>
                                        </b-card>
                                    </template>
                                </b-table>
    
                                <b-row>
                                    <div class="col">
                                        <small>
                                            Showing <b>1</b> to <b>{{perPage}}</b> of <b>{{totalRows}}</b> entries
                                        </small>
                                    </div>
                                    <div class="col">
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
    export default {
        data() {
            return {
                endpoint: process.env.VUE_APP_ENDPOINT,
                homeView: true,
                masterRuasView: false,
                items: [
                    { isActive: true, age: 40, name: { first: 'Dickerson', last: 'Macdonald' } },
                    { isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' } },
                    {
                        isActive: false,
                        age: 9,
                        name: { first: 'Mini', last: 'Navarro' },
                        _rowVariant: 'success'
                    },
                    { isActive: false, age: 89, name: { first: 'Geneva', last: 'Wilson' } },
                    { isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' } },
                    { isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' } },
                    { isActive: true, age: 40, name: { first: 'Thor', last: 'Macdonald' } },
                    {
                        isActive: true,
                        age: 87,
                        name: { first: 'Larsen', last: 'Shaw' },
                        _cellVariants: { age: 'danger', isActive: 'warning' }
                    },
                    { isActive: false, age: 26, name: { first: 'Mitzi', last: 'Navarro' } },
                    { isActive: false, age: 22, name: { first: 'Genevieve', last: 'Wilson' } },
                    { isActive: true, age: 38, name: { first: 'John', last: 'Carney' } },
                    { isActive: false, age: 29, name: { first: 'Dick', last: 'Dunlap' } }
                    ],
                    fields: [
                    { key: 'name', label: 'Person full name', sortable: true, sortDirection: 'desc' },
                    { key: 'age', label: 'Person age', sortable: true, class: 'text-center' },
                    {
                        key: 'isActive',
                        label: 'Is Active',
                        formatter: (value) => {
                        return value ? 'Yes' : 'No'
                        },
                        sortable: true,
                        sortByFormatted: true,
                        filterByFormatted: true
                    },
                    { key: 'actions', label: 'Actions' }
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
            this.totalRows = this.items.length
        },
        methods: {
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
            }
        },
    }
</script>

<style scoped>
    @import '../assets/css/style-guide.css';
</style>