import ApiMarvel from "./http";
import Router from '../router/index'
import Swal from "sweetalert2";
import Utils from "../util/utils";


    const publicKey = "3d204c9b3a3f03ed929dbe1841f22e1b";
    const maxCharacters = 1500;
    //tempo agora
    const timeStamp = Date.now().toString();
    //numero randomico de herois
    const offset = Math.floor((Math.random() * maxCharacters) + 1);
    //hash para validar a requisição
    const hash = Utils.createHash(timeStamp);

const Service = {

    async authenticate(user, password){
      if(user === "desafio" && password === "123456"){
        Router.push('/home');
      }else{
        Swal.fire('Erro!', 'Ocorreu um problema ao realizar o login! Por favor, verifique as suas informações.', 'error')
      }
      console.log(hash);
      console.log(timeStamp);
    },

    async getAllStories(params =''){
      let data;
       await ApiMarvel.get("/v1/public/characters?limit=9&offset="+offset+"&ts="+timeStamp+"&apikey="+publicKey+"&hash="+hash).then(response => {
        data = response.data;
        return data;
      }, response => {
        console.log('erro!');
        console.log(response.body);
        Swal.fire('Erro!','Ocorreu um erro ao listar quadrinhos, por favor tente novamente. ', 'error');
      });
      return data;
    },
   
 
}

export default Service;
