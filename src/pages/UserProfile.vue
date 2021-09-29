<template>
  <q-page class="q-pa-sm">
    <div class="row q-col-gutter-sm">
      <div class="col-lg-12 col-md-12 col-xs-12 col-sm-12">
        <q-card class="card-bg ">
          <q-card-section class="text-h6 ">
            <div class="text-h6">Editar Perfil</div>
          </q-card-section>
          <q-card-section class="q-pa-sm">
            <q-list class="row">
               <div class="col-12">
                <q-item>
                   <q-input
                        filled
                        class="full-width"
                        :rules="nomeRules"
                        v-model="form.dadosBasico.nome"
                        label="Nome"
                        color="primary" />
                </q-item>
              </div>
              <div class="col-md-12 col-sm-12 col-xs-12">
                <q-item>
                    <q-input
                        filled
                        class="full-width"
                        :rules="emailRules"
                        v-model="form.dadosBasico.email"
                        label="Email"
                        color="primary" />
                </q-item>
              </div>

               <div class="col-md-6 col-sm-12 col-xs-12">
                <q-item>
                  <q-input
                    filled
                     class="full-width"
                    :rules="passwordRules"
                    v-model="form.dadosBasico.password"
                    label="Senha"
                    color="primary"
                    ref="password"
                    label-color="primary"
                    :type="show ? 'text' : 'password'">
                      <template v-slot:append>
                        <q-icon
                          :name="show ? 'visibility_off' : 'visibility'"
                          class="cursor-pointer" color="primary"
                          @click="show = !show"
                        />
                      </template>
                      <template v-slot:prepend>
                        <q-icon  color="primary" name="lock" />
                      </template>
                       </q-input>
                </q-item>
              </div>
              <div class="col-md-6 col-sm-12 col-xs-12">
                <q-item>
                    <q-input
                    filled
                     class="full-width"
                    :rules="confirmaPassworddRules"
                    v-model="form.dadosBasico.confirmaPassword"
                    label="Confirmar senha"
                    color="primary"
                    ref="password"
                    label-color="primary"
                    :type="show1 ? 'text' : 'password'">
                      <template v-slot:append>
                        <q-icon
                          :name="show1 ? 'visibility_off' : 'visibility'"
                          class="cursor-pointer" color="primary"
                          @click="show1 = !show1"
                        />
                      </template>
                      <template v-slot:prepend>
                        <q-icon  color="primary" name="lock" />
                      </template>
                       </q-input>
                </q-item>
              </div>
            </q-list>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn class="text-white full-width text-capitalize bg-info "> ATUALIZAR PERFIL </q-btn>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
    export default {
        name: "UserProfile",
        data() {
            return {
       form:{
        dadosBasico: {
            nome: '',
            email: '',
            cpf: '',
            aceite_termos: false,
            password: '',
            confirmaPassword: '',
            tipo_user:'empresa'
          },
      },
      nameRules: [
          v => !!v || 'O campo de nome é obrigatório!',
      ],
      emailRules: [
          v => !!v || 'O campo de e-mail é obrigatório!',
          v => /.+@.+\..+/.test(v) || 'O e-mail deve ser válido',
      ],
      telefoneRules: [
          v => !!v || 'O campo de telefone é obrigatório!',
      ],
     cpfRules: [
          v => !!v || 'O campo cpf é obrigatório!',
          v => cpf.isValid(v) || 'O cpf deve ser válido',
      ],
        passwordRules: [
          v => !!v || 'O campo de senha é obrigatório!',
          v => 7 < v.length || 'Mínimo 8 caracteres',
       ],
       aceiteRules: [
          v => v === false || 'Aceite o termo',
      ],
      cnpjRules: [
          v => !!v || 'O campo CNPJ é obrigatório!',
          v => cnpj.isValid(v) || 'O CNPJ deve ser válido',
      ],
      nomeRules: [
          v => !!v || 'O campo de nome é obrigatório!',
      ],
       dataSituacaoRules: [
          v => !!v || 'O campo de data situação é obrigatório!',
      ],
       localidadeRules: [
          v => !!v || 'O campo de localidade é obrigatório!',
      ],
       ufRules: [
          v => !!v || 'O campo de UF é obrigatório!',
      ],
       telefoneRules: [
          v => !!v || 'O campo de telefone é obrigatório!',
      ],
       bairroRules: [
          v => !!v || 'O campo de bairro é obrigatório!',
      ],
       situacaoRules: [
          v => !!v || 'O campo de situação é obrigatório!',
      ],
       logradourodRules: [
          v => !!v || 'O campo de endereço é obrigatório!',
      ],
       numeroRules: [
          v => !!v || 'O campo de número é obrigatório!',
      ],
       cepRules: [
          v => !!v || 'O campo de cep é obrigatório!',
      ],
       aberturaRules: [
          v => !!v || 'O campo de abertura é obrigatório!',
      ],
       naturezaJuridicaRules: [
          v => !!v || 'O campo de natureza jurídica é obrigatório!',
      ],
      fantasiaRules: [
          v => !!v || 'O campo de fantasia é obrigatório!',
      ],
       statusRules: [
          v => !!v || 'O campo de stattus é obrigatório!',
      ],
                user_details: {},
                password_dict: {}
            }
        }
    }
</script>

<style scoped>

  .card-bg {
    background-color: #eaeaea;
  }
</style>
