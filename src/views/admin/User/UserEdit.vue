<template>
    <div class="userEdit">       
       User edit {{id}}
    </div>
</template>

<script>

export default {
    name: 'UserEdit',
    props: ['id'],
    
    //----- 1er  methode pour recuperer l'id de l'utilisateur passé en paramètre dans l'url via le monted -----//
    // mounted() {
    //     // on recupere l'id de l'utilisateur passé en paramètre dans l'url
    //     console.log(this.$route.params.id);
    //     this.test = this.$route.params.id;
    // },    
    // updated() {
    //     // on met à jour l'id qui a été mounté au chargement de la page
    //     console.log(this.$route.params.id);
    //     this.test = this.$route.params.id;
    // }
    //----- 2eme  methode pour recuperer l'id de l'utilisateur passé en paramètre dans l'url via le monted -----//

}
</script>

<style>

</style>