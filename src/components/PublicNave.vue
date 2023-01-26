<template>
  <img alt="Vue logo" src="../assets/logo.png">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/Cocktails">Cocktails</router-link> |
    <router-link to="/Contact">Contact</router-link>
  </nav>
</template>

<script>
export default {
    name: 'PublicNave',
}
</script>

<style>
    img {
        width: 60px;
        position: absolute;
        left: 200px;
    }
</style>