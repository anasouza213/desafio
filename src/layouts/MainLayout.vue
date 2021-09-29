<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />
        <q-toolbar-title>
          Seja bem vindo!
        </q-toolbar-title>
        <q-space/>
        <div class="q-gutter-sm row items-center no-wrap">
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-primary text-white"
    >
      <q-list>
         <q-item to="/Produtos" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Quadrinhos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Profile" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="people"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Perfil</q-item-label>
          </q-item-section>
        </q-item>
      <!--  <q-item to="/Produtos" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="shopping_cart"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Quadrinhos</q-item-label>
          </q-item-section>
        </q-item>
        <q-item to="/Users" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="people"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Usuários</q-item-label>
          </q-item-section>
        </q-item>
         <q-item to="/Sellers" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="check"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>teste</q-item-label>
          </q-item-section>
        </q-item>
         <q-item to="/Pedidos" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="fa fa-address-book"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Pedidos</q-item-label>
          </q-item-section>
        </q-item>-->
        <q-item to="/login" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="fa fa-sign-out-alt"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Sair</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container class="bg-grey-2">
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
    import EssentialLink from 'components/EssentialLink'
    import Messages from "./Messages";

    export default {
        name: 'MainLayout',

        components: {
            Messages,
            EssentialLink
        },

        data() {
            return {
                leftDrawerOpen: false,
            }
        }
    }
</script>
