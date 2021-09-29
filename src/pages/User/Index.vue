<template>
  <q-layout view="lHh Lpr lFf">
    <q-page class="q-pa-sm">
      <q-card>
        <q-card-section>
          <div class="text-h6 text-grey-8">
            Usuários
            <q-btn label="Export" class="float-right text-capitalize text-indigo-8 shadow-3" icon="person"/>
          </div>
        </q-card-section>
        <q-card-section class="q-pa-none">
          <q-table :data="listaUsuarios" :columns="columns" hide-bottom >
            <template v-slot:body-cell-Name="props" >
              <q-td :props="props">
                <q-item style="max-width: 420px">
                  <q-item-section avatar>
                    <q-avatar>
                      <img :src="props.row.avatar">
                    </q-avatar>
                  </q-item-section>

                  <q-item-section>
                    <q-item-label>{{ props.row.name }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-td>
            </template>
            <template v-slot:body-cell-Action="props">
              <q-td :props="props">
                <q-btn icon="edit" size="sm" flat dense :to="{name: 'editarUser', params:{user: props.row}}"/>
                <q-btn icon="delete" size="sm" class="q-ml-sm" flat dense/>
              </q-td>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
    </q-page>

  </q-layout>
</template>


<script>
import { cpf } from 'cpf-cnpj-validator';
export default {
  name: 'Users',
   data: () => ({
      listaUsuarios: [],
      abrirModalEditarUsuario: false,
     
       columns: [
        {name: 'Nome', label: 'Nome', field: 'nome', sortable: true, align: 'left'},
        {name: 'Cpf', label: 'CPF', field: 'cpf', sortable: true, align: 'left'},
        {name: 'Tipo_user', label: 'Tipo usuário', field: 'tipo_user', sortable: true, align: 'left'},
        {name: 'Email', label: 'Email', field: 'email', sortable: true, align: 'left'},
        {name: 'Created_at', label: 'Data Cadastro', field: 'created_at', sortable: true, align: 'left'},
        {name: 'Teste', label: 'Loja Vinculada', field: 'teste', sortable: true, align: 'left'},
         {name: 'Teste', label: 'Situação', field: 'teste', sortable: true, align: 'left'},
        {name: 'Action', label: '', field: 'Action', sortable: false, align: 'center'}
      ],
      
     }),
    async mounted() {
    },
    methods:{
       formatDate(date){
                return moment(date).format('DD/MM/YYYY')
        },
  
     
    },
};
</script>

<style scoped>

</style>
