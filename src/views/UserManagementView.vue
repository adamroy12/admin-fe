<template>
    <h1> User Management  </h1>
    <UserSearchForm />
</template>

<script>
import UserSearchForm from '../components/UserSearchForm.vue'

export default {
    name: 'UserManagementView',
    components: {
        UserSearchForm
    }
}

</script>