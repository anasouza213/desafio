<template>
  <q-page class="q-pa-sm">
    <div>
      <q-card class="no-border no-shadow bg-transparent">
        <q-card-section class="q-pa-sm">
          <q-input rounded v-model="search" outlined placeholder="Search Product">
            <template v-slot:append>
              <q-icon v-if="search === ''" name="search"/>
              <q-icon v-else name="clear" class="cursor-pointer" @click="search = ''"/>
            </template>
          </q-input>
        </q-card-section>
      </q-card>
    </div>
    <div class="row q-col-gutter-sm ">
      <div class="col-md-4 col-lg-4 col-sm-12 col-xs-12" v-for="item, item_index in data">
        <card-product :data="item"></card-product>
      </div>
    </div>
  </q-page>
</template>


<script>
import Service from "../../service/Service";
import { mapGetters, mapState, useStore, mapActions } from "vuex";
import {  store } from "../../store/index"
export default {
  name: "Index",
  components: {CardProduct: () => import('components/cards/CardProduct')},
    computed:{
     
    ...mapState([
      'marvels', 
      ]),
    ...mapGetters('marvels',[
      'marvels', 
    ]),
  },
   methods : {
       ...mapActions( 'marvels',[
           
            'MARVEL_STORE_LOAD'
        ]),
        // ...mapMutations([
        //     'marvel',
        // ]),
    },

  data() {
        return {
             data: [],
            search: '',
            categorias: [],
            subcategorias: [],
            categoria: '',
            subcategoria: '',
            products: [],
            limit: 30,
          
        }
    },
    async mounted(){
     // await store.dispatch('MARVEL_STORE_LOAD');
      this.getCategorias();
    },
    methods:{
      onLoad(){
        console.log('oi fundo');
      },
    async getCategorias(){
        this.subcategoria = '';
        this.subcategorias = [];
        let categorias = await Service.getAllStories();       
       categorias = categorias.data;
        console.log(categorias);
        let self = this;
        categorias.results.map((item, i) => {
          self.data.push({
            title: item.name,
            caption: item.description,
            rating: 4,
            amount: item.id,
            img: item.thumbnail.path+'.jpg',
             chip: 'Discount 90%',
            chip_color: 'grey-4',
            chip_class: 'text-blue absolute-top-right'
            });
        });
        console.log(self.categorias);
      },
   
     
    }
}
</script>

<style scoped>

</style>
