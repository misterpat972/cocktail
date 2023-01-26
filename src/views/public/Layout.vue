<template>
    <div class="public">        
        <PublicNave/>
    </div>
    <router-view/>
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