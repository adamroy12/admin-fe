<!-- Author Adam Royal -->
<template>
  <div class="app">
    <SideBar /> <!-- importing sidebar component -->
  </div>
  



</template>


<script setup>
import SideBar from './components/SideBar.vue'
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

/* reset margin and padding on every element */
* {
  margin: 0;
  padding: 0;
}
.app {
  display: flex;

  main {
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width: 768px) {
      padding-left: 6rem;
    }
  }
}

/* universal stylings for everything in the app */
#app {
  margin: 0;
  padding: 0;
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
