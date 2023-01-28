<template>
    <div class="admin">
        <AdminHeader/>
            <div class="contain">
                <div class="side">
                    <AdminNav/>
                </div>
            </div>
            <div class="display">
                <router-view/>
            </div>
    </div>
</template>

<script>
import AdminHeader from '@/components/AdminHeader.vue'
import AdminNav from '@/components/AdminNav.vue'
export default {
    name: 'AdminLayout',
    components: {
        AdminHeader,
        AdminNav
    }

}
</script>

<style>

</style>