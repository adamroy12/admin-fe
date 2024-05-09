<!-- No backend provided yet so this page is unfinished -->
<template>
    <main class="users">
        <h1> User Management  </h1>
        <UserSearchForm />
    </main>
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