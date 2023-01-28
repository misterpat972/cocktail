<template>
   <h1>Connexion</h1>
   <form @submit.prevent="login">
        <div class="form-group">
            <label for="text">Login</label>
            <input  type="text" name="text" id="text" class="form-control" v-model="user.login">
            <label for="password">Mot de passe</label>
            <input  type="password" name="password" id="password" class="form-control" v-model="user.password">
            <button type="submit" class="btn btn-primary">Se connecter</button>
        </div>
   </form>
</template>

<script>
import {accountService} from '@/_services';
export default {
    name: 'Login',
    data() {
        return {
            user: {
                login: '',
                password: ''
            }           
        }
    },  
    // avant de charger le composant, on va vérifier si l'utilisateur est connecté
    // si oui, on va le rediriger vers la page d'accueil
    // sinon, on va le laisser sur la page de connexion
    // beforeMount() {
    //     if(localStorage.getItem('token')) {
    //         this.$router.push({name: 'Dashboard'});
    //     }
    // },
   
    methods: {
        login() {
         // on va récupérer les données du formulaire et les envoyer au serveur
            // pour vérifier si l'utilisateur existe
            // si oui, on va stocker les données de l'utilisateur dans le localstorage
            // et on va rediriger l'utilisateur vers la page d'accueil
            // si non, on va afficher un message d'erreur
            //console.log(this.user);
            // if(this.user.login === 'admin' && this.user.password === 'admin') {
            //     localStorage.setItem('token', JSON.stringify(this.user));
            //     this.$router.push({name: 'Dashboard'});
            // } else {
            //     alert('Login ou mot de passe incorrect');
            // }
            accountService.login(this.user)
                .then(res => {
                        if(res.token) {
                            localStorage.setItem('token', JSON.stringify(res.token));
                            this.$router.push({name: 'Dashboard'});
                        } else {
                            alert('Login ou mot de passe incorrect');
                        }
                    // console.log(res)
                })
                .catch(err => {
                    console.log(err)
                })
                
            // fetch('http://localhost:8080/login', {
            //     method: 'POST',
            //     headers: {
            //         'Accept': 'application/json',
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(this.user)
            // })
            // .then(response => response.json())
            // .then(data => {
            //     console.log(data)
            //     // if(data.token) {
            //     //     localStorage.setItem('token', JSON.stringify(data.token));
            //     //     this.$router.push({name: 'Dashboard'});
            //     // } else {
            //     //     alert('Login ou mot de passe incorrect');
            //     // }
            // })
        }
    }
}
</script>

<style>
form {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    margin-top: 10%;
}

.form-group {
    width: 50%;
    margin: 0 auto;   
    display: flex;
    flex-direction: column;
}
.form-control {
    margin-bottom: 10px;
    border-radius: 10px;
}
button {
    background-color: #007bff;
    border : none;
    border-radius: 10px;
    padding: 5px;    
}
button:hover {
    background-color: #0069d9;
    color: white;
}
</style>