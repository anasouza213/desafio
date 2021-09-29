<template>
  <q-layout>
    <q-page-container>
      <q-page class="flex bg-image flex-center">
        <q-card v-bind:style="$q.screen.lt.sm?{'width': '80%'}:{'width':'50%'}">
          <q-card-section>
            <q-avatar size="103px" class="absolute-center shadow-10">
              <img class="bg-white" src="logo.jpg">
            </q-avatar>
          </q-card-section>
          <q-card-section>
            <div class="text-center q-pt-lg">
              <div class="col text-h6 ellipsis">
                Portal Marvel
              </div>
            </div>
          </q-card-section>
          <q-card-section>
            <q-form ref="formCpf"
              class="q-gutter-md"
            >
              <q-input
                filled
                :rules="userRules"
                v-model="user"
                placeholder="Digite seu Usuário"
                color="primary" />

                <q-input
                    filled
                    style="background: #ffffff;border-radius: 28px;"
                    :rules="passwordRules"
                    :type="show ? 'text' : 'password'"
                    v-model="password"
                    label="Senha"
                    color="primary"
                    label-color="primary">
                    <template v-slot:prepend>
                        <q-icon  color="primary" name="lock" />
                    </template>
                    <template v-slot:append>
                        <q-icon
                        :name="show ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer" color="primary"
                        @click="show = !show"
                        />
                    </template>
                </q-input>


              <div>
                <q-btn
                    class="full-width"
                    label="Login"
                    @click="validateAdvance()"
                    type="button"
                    color="primary"/>

              </div>
               <div class="row text-center">
                    <span class="">
                        <router-link style="text-decoration: none;color: #363636;" :to="{path: '/empresa'}">
                            Crie sua conta aqui!
                        </router-link>
                    </span>
                </div>
            </q-form>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { cpf } from 'cpf-cnpj-validator';
import Service from "../../service/Service";
export default {
  name: 'Login',
   data: () => ({
      show: false,
      cpf: '',
      password: '',
      user: '',
      userRules: [
          v => !!v || 'O campo usuário é obrigatório!'
      ],
        passwordRules: [
          v => !!v || 'O campo de senha é obrigatório!',
      ]
     }),
    async mounted() {
    // if(!this.$route.params.cpf){
    //   this.cpf = localStorage.getItem('cpf');
    // }else{
    //   this.cpf  =  this.$route.params.cpf;
    // }

    //  this.user =  this.$route.params.user;
    //  console.log('primeiro cpf', this.cpf)
    //   if(this.cpf !== '' || this.cpf !== undefined)
    //     localStorage.setItem('cpf', this.cpf);

    //   if(this.user)
    //     localStorage.setItem('userRecover', JSON.stringify(this.user));

    //   this.cpf = localStorage.getItem('cpf');
    //   console.log('segundo cpf', this.cpf)
    //   this.user = JSON.parse(localStorage.getItem('userRecover'));
    },
    methods:{
      validateAdvance(){
          this.$refs.formCpf.validate().then(success => {
              if (success) {
                    this.authenticate();
              }
          })
        },
      async authenticate(){
        await Service.authenticate(this.user,this.password);
      }
    },
};

// import { cpf } from 'cpf-cnpj-validator';
// import LoginService from "../../service/LoginService";
// import Router from 'src/router'
// export default {
//   name: 'Login',
//     data: () => ({
//       cpfCheck: false,
//       cpf: '',
//       isCpf: false,
//        show: false,
//       cpfRules: [
//           v => !!v || 'O campo CPF é obrigatório!',
//           v => cpf.isValid(v) || 'O CPF deve ser válido',
//       ],
//        passwordRules: [
//           v => !!v || 'O campo de senha é obrigatório!',
//       ]
//   //this.$router.push('/logar'); this.$router.push('/register');
//      }),
//   async mounted() {
//     console.log('usuario', localStorage.getItem('user'));
//       if(localStorage.getItem('user') !== null){
//         this.$router.push('/home');
//       }
//    },
//     methods:{
//        validateAdvance(){
//           this.$refs.formCpf.validate().then(success => {
//               if (success) {
//                     this.verificarUsuario();
//               }
//           })
//         },
//       async verificarUsuario(){
//          await LoginService.checkCpf(this.cpf).then( (res) => {
//            console.log(res);
//            this.cpfCheck = res.response;
//              if( this.cpfCheck  !== 'false'){
//                 this.$router.push({ name: 'logar', params: { cpf: this.cpf, user: res.user} });
//               }else{
//                   this.$router.push({ name: 'register', params: { cpf: this.cpf} })
//               }
//         });
//       }
//     },
// };
</script>

<style>

  .bg-image {
   background-image: linear-gradient(135deg, #e45d28 0%, rgba(255, 144, 0, 0.71) 100%);
  }
</style>
