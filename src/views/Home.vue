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
                    <section class="graph-section">
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

                    <section class="gallery-section">
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

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    @import '../assets/css/style-guide.css';
</style>