<template>
    <div class="admin-pages">
        <PageTitle icon="fa fa-cogs" main="Administração do Sistema"
            sub="Cadastros" />
        <div class="admin-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Hospitais" active>
                        <HospitalAdmin />
                    </b-tab>
                    <!-- <b-tab title="Categorias">
                        <CategoryAdmin />
                    </b-tab> -->
                    <b-tab title="Usuários">
                        <UserAdmin />
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import HospitalAdmin from './HospitalAdmin'
// import CategoryAdmin from './CategoryAdmin'
import UserAdmin from './UserAdmin'

export default {
    name: 'AdminPages',
    components: { PageTitle, HospitalAdmin, UserAdmin }
}
</script>

<style>

</style>
