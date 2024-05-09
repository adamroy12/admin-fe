<template>
    <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <aside :class="`${sidebar_expand && 'sidebar_expand'}`">
      <div class="sidebar-top">
          <i class="material-symbols-outlined" @click="Toggle">Menu</i>
        </div>
        <div class="logo">
            <img src="../assets/dysonlogo.png" alt="Dyson Logo">
      </div>
      <div class="menu">
          <h3> Menu </h3>
          <ul>
          <li class="hover"><router-link to="/" >
            <span class="material-symbols-outlined">home</span> 
            <span class="text">Home</span>
            </router-link></li>
          <li class="hover"><router-link :to=" { name: 'userManagement'}">
            <span class="material-symbols-outlined">Person</span>
            <span class="text">Users</span>
          </router-link></li>
          <li class="hover"><router-link :to=" { name: 'examManagement'}">
            <span class="material-symbols-outlined">Assignment</span>
            <span class="text">Exams</span>
          </router-link></li>
          <li class="hover"><router-link :to=" { name: 'projectManagement'}">
            <span class="material-symbols-outlined">Share</span>
            <span class="text">Projects</span>
          </router-link></li>
          <li class="hover"><router-link :to=" { name: 'timetableManagement'}">
            <span class="material-symbols-outlined">Calendar_Month</span>
            <span class="text">Timetables</span>
          </router-link></li>
          </ul>
      </div>

    </aside>
    <router-view/>
  </template>

<script setup>
import {ref} from 'vue'

const sidebar_expand =ref(false)

const Toggle = () => {
  sidebar_expand.value = !sidebar_expand.value;
}
</script>


<style scoped>
  aside {
    display: flex;
    flex-direction: column;
    width: calc(2rem + 32px);
    background-color: black;
    color: white;
    padding: 1rem;
    overflow:hidden;
    transition: 0.2s ease-out;
    height:100vh;

    .sidebar-top {
        display: flex;
        justify-content: flex-end;
    }

    .logo {
      margin-bottom: 1rem;
      
      img {
          width: 100%;
      }
    }

    i {
      cursor: pointer;
    }

    .menu {
      text-align: center;

      li {
        display:flex;
        align-items: center;
        text-decoration: none;
        margin: 0.5rem 1rem;
        transition: 0.2s ease-out;
      }

      .material-symbols-outlined {
        font-size:2rem;
        transition: 0.2s ease-out;
        color: white;
      }

      h3, .text {
      opacity:0;
      color: white;
      } 

      .hover:hover, .router-link-exact-active {
      background-color: grey;
      }

    }

    ul {
      padding-top: 10px;
      text-align:left;
    }

    h3 {
      font-size: 0.9rem;
      text-transform: uppercase;
    }

    a {
      display: flex;
      text-decoration:none;
      width:100%;
      height:100%;
    }
    


    &.sidebar_expand {
      width: 300px; 

      h3, .text {
        opacity: 1;
      }

      ul {
        align-items: center;
      }

      li {
        margin-top: 4px;
      }

      .material-symbols-outlined {
        font-size:2rem;
        margin-right: 1rem;
      }

      img {
          width: 50%;
      }

      
    }

    @media (max-width: 768px) {
        position: fixed;
        z-index: 99;
    }



  
  }
</style>
