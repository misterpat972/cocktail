<template>
    <div class="public">        
        <PublicNave/>
        <router-view/>
    </div>
</template>

<script>
import PublicNave from '@/components/PublicNave.vue'
export default {
    name: 'PublicLayout',
    components: {
        PublicNave
}

}
</script>

<style>

</style>