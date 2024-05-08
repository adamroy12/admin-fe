<template>
  <nav class="sidebar">
    <div class="sidebartop">
      <div class="logo">
        <img src="./assets/dysonlogo.png" alt="Dyson Logo">
      </div>
    </div>
    <ul>
      <li><router-link to="/">Home </router-link></li>
      <li><router-link :to=" { name: 'userManagement'}">Users</router-link></li>
      <li><router-link :to=" { name: 'examManagement'}">Exams</router-link></li>
      <li><router-link :to=" { name: 'projectManagement'}">Projects</router-link></li>
      <li><router-link :to=" { name: 'timetableManagement'}">Timetables</router-link></li>
  </ul> 
  </nav>


  <router-view/>
</template>


<script>
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');

#app {
  font-family: "Noto Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.sidebar {
  padding: 11px;
  height: 100%; /* 100% Full-height */
  width: 220px; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  left: 0;
  background-color: #000000; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

.logo {
  img {
    width:95%;
  }

}


.sidebar a {
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidebar ul {
  list-style-type: none;
  text-align:left;
  
    li {
      display: list-item;
      padding:1.25rem 0;
      position:relative;
      background-color:transparent;
      transition: background-color .25s ease-in-out;
    }
    a {
      color: white;
      text-decoration: none;
      width: 130px;
    }
}


nav a.router-link-exact-active {
  color: #42b983;
}

</style>
