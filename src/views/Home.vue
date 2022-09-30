<template>
    <div class="container-fluid">
        <div class="row border justify-content-center py-3">
            <div class="col-2 pt-3 pr-0 align-self-start">
                <div class="border-top border-left p-2 btn-home">
                    Home
                </div>
                <div class="border-top border-bottom border-left p-2 btn-master">
                    Master Ruas
                </div>
            </div>
            <div class="col-9 py-3 border rounded-lg">
                <div class="container-fluid">
                    <section id="graph-section">
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

                    <section id="gallery-section">
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

                    <section id="master-ruas">
                        <b-container fluid class="my-4">
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

                                <b-col sm="5" md="5" class="my-1">
                                    <b-form-group
                                    label="Filter"
                                    label-for="filter-input"
                                    label-cols-sm="3"
                                    label-align-sm="right"
                                    label-size="sm"
                                    class="mb-0"
                                    >
                                    <b-input-group size="sm">
                                        <b-form-input
                                        id="filter-input"
                                        v-model="filter"
                                        type="search"
                                        placeholder="Type to Search"
                                        ></b-form-input>

                                        <b-input-group-append>
                                        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                                        </b-input-group-append>
                                    </b-input-group>
                                    </b-form-group>
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
                                <b-pagination
                                v-model="currentPage"
                                :total-rows="totalRows"
                                :per-page="perPage"
                                align="fill"
                                size="sm"
                                class="my-0"
                                ></b-pagination>
                            </b-row>
                            <!-- Info modal -->
                            <b-modal :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
                            <pre>{{ infoModal.content }}</pre>
                            </b-modal>
                        </b-container>
                    </section>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                endpoint: process.env.VUE_APP_ENDPOINT,
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
        }
    }
</script>

<style scoped>
    @import '../assets/css/style-guide.css';
</style>