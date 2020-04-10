<template>
    <div class="hospital-admin">
        <b-form>
            <input id="hospital-id" type="hidden" v-model="hospital.id" />
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Hospital:" label-for="hospital-name">
                        <b-form-input id="hospital-name" type="text"
                        v-model="hospital.hospital" required
                        :readonly="mode === 'remove'"
                        placeholder="Informe o Nome do Hospital..." />
                    </b-form-group>
                </b-col>
                <b-col md="6" sm="12">
                    <b-form-group label="Cidade" label-for="hospital-cidade">
                        <b-form-input id="hospital-cidade" type="text"
                        v-model="hospital.city" required
                        :readonly="mode === 'remove'"
                        placeholder="Informe a Cidade..." />
                    </b-form-group>
                </b-col>
            </b-row>
            
            <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Estado" label-for="hospital-estado">
                        <b-form-input id="hospital-estado" type="text"
                        v-model="hospital.state" required
                        :readonly="mode === 'remove'"
                        placeholder="Informe a Estado..." />
                    </b-form-group>
                </b-col>
                 <b-col md="6" sm="12">
                    <b-form-group label="País" label-for="hospital-pais">
                        <b-form-input id="hospital-pais" type="text"
                        v-model="hospital.country" required
                        :readonly="mode === 'remove'"
                        placeholder="Informe o País..." />
                    </b-form-group>
                </b-col>
            </b-row>
             <b-row>
                <b-col md="6" sm="12">
                    <b-form-group label="Latitude" label-for="hospital-latitude">
                        <b-form-input id="hospital-latitude" type="text"
                        v-model="hospital.latitude" required
                        :readonly="mode === 'remove'"
                        placeholder="Informe a latitude..." />
                    </b-form-group>
                </b-col>
                 <b-col md="6" sm="12">
                    <b-form-group label="Longitude" label-for="hospital-longitude">
                        <b-form-input id="hospital-longitude" type="text"
                        v-model="hospital.longitude" required
                        :readonly="mode === 'remove'"
                        placeholder="Informe a longitude..." />
                    </b-form-group>
                </b-col>
            </b-row>
            <!-- <b-form-group v-if="mode === 'save'" 
                label="Categoria:" label-for="hospital-categoryId">
                <b-form-select id="hospital-categoryId"
                :options="categories" v-model="hospital.categoryId" />
            </b-form-group> -->
            <!-- <b-form-group v-if="mode === 'save'" 
                label="Autor:" label-for="hospital-userId">
                <b-form-select id="hospital-userId"
                :options="users" v-model="hospital.userId" />
            </b-form-group> -->
            <!-- <b-form-group v-if="mode === 'save'"
                label="Conteúdo" label-for="hospital-content">
                <VueEditor v-model="hospital.content"
                placeholder="Informe o Conteúdo do Artigo..." />
            </b-form-group> -->
            <b-button variant="primary" v-if="mode === 'save'"
            @click="save">Salvar</b-button>
            <b-button variant="danger" v-if="mode === 'remove'"
            @click="remove">Excluir</b-button>
            <b-button class="ml-2" @click="reset">Cancelar</b-button>
        </b-form>
        <hr>
        <b-table hover striped :items="hospitals" :fields="fields">
            <template slot="actions" slot-scope="data">
                <b-button variant="warning" @click="loadHospital(data.item)" class="mr-2">
                    <i class="fa fa-pencil"></i>
                </b-button>
                <b-button variant="danger" @click="loadHospital(data.item, 'remove')">
                    <i class="fa fa-trash"></i>
                </b-button>
            </template>
        </b-table>
        <b-pagination size="md" v-model="page" :total-rows="count" :per-page="limit" />
    </div>
</template>

<script>
    import { VueEditor } from "vue2-editor"
    import { baseApiUrl, showError } from '@/global'
    import axios from 'axios'
    
    export default {
        name: 'HospitalAdmin',
        components: { VueEditor },
        data: function() {
            return {
                mode: 'save',
                hospital: {},
                hospitals: [],
                // categories: [],
                users: [],
                page: 1,
                limit: 0,
                count: 0,
                fields: [
                { key: 'id', label: 'Código', sortable: true },
                { key: 'hospital', label: 'Hospital', sortable: true },
                { key: 'city', label: 'Descrição', sortable: true },
                { key: 'actions', label: 'Ações' }
                ]
            }
        },
        methods: {
            loadHospitals() {
                const url = `${baseApiUrl}/hospital?page=${this.page}`
                axios.get(url).then(res => {
                    this.hospitals = res.data.data
                    this.count = res.data.count
                    this.limit = res.data.limit
                })
            },
            reset() {
                this.mode = 'save'
                this.hospital = {}
                this.loadHospitals()
            },
            save() {
                const method = this.hospital.id ? 'put' : 'post'
                const id = this.hospital.id ? `/${this.hospital.id}` : ''
                axios[method](`${baseApiUrl}/hospital${id}`, this.hospital)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
            },
            remove() {
                const id = this.hospital.id
                axios.delete(`${baseApiUrl}/hospitals/${id}`)
                .then(() => {
                    this.$toasted.global.defaultSuccess()
                    this.reset()
                })
                .catch(showError)
            },
            loadHospital(hospital, mode = 'save') {
                this.mode = mode
                axios.get(`${baseApiUrl}/hospital/${hospital.id}`)
                .then(res => this.hospital = res.data)
            },
            // loadCategories() {
                //     const url = `${baseApiUrl}/categories`
                //     axios.get(url).then(res => {
                    //         this.categories = res.data.map(category => {
                        //             return { value: category.id, text: category.path }
                        //         })
                        //     })
                        // },
                        loadUsers() {
                            const url = `${baseApiUrl}/users`
                            axios.get(url).then(res => {
                                this.users = res.data.map(user => {
                                    return { value: user.id, text: `${user.name} - ${user.email}` }
                                })
                            })
                        }
                    },
                    watch: {
                        page() {
                            this.loadHospitals()
                        }
                    },
                    mounted() {
                        this.loadUsers()
                        // this.loadCategories()
                        this.loadHospitals()
                    }
                }
            </script>
            
            <style>
                
            </style>