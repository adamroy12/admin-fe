<!-- user search form for searching a user in the user management view -->
<template>
<div>
    <form>
        <label>User Search: </label> 
        <input type="email" value="user email" required>
    </form>
</div>

<!-- No backend provided yet so no back end integration -->
</template>

<script>
export default {


}
</script>

<style>

label {
    color: #aaa;
    display: inline-block;
    font-weight: bold;
    letter-spacing: 1px;
    margin-right: 15px;
}

input {
    display: inline-block;
    padding: 10px 6px;
    box-sizing: border-box;
    width: 300px;

}

</style>

