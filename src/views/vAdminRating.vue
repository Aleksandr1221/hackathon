<template>
    <div>

    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">GoTask</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav burger-menu">
            <a class="nav-link">Команда</a>
            <a class="nav-link">Отчеты</a>
            <a class="nav-link active">Рейтинг</a>
          </div>
        </div>
      </div>
    </nav>
    
    <div class="row m-0">
      <div class="col-3 pr-0 pl-0 saidbar">
        <ul class="list-group rounded-0">
          <router-link to="createTask" tag="li" class="list-group-item list-group-item-action p-3">Команда</router-link>
          <li class="list-group-item list-group-item-action p-3">Отчеты</li>
          <router-link to="/adminRating" tag="li" class="list-group-item list-group-item-action active p-3">Рейтинг</router-link>
        </ul>
      </div>
      <div class="col-9 border-top my_command mb-5 p-0">

        <h2 class="mt-4 ml-5">Рейтинг</h2>
        
        <div class="container p-5">
          <div class="row">
            <div class="col w-100 m-auto p-0">
              <ul class="list-group rounded-0">
                <li
                  class="list-group-item d-flex justify-content-between align-items-center p-3"
                  v-for="(user, index) in adminRating" :key="index">
                  {{index+1}}) {{user.name}}
                  <span class="badge bg-primary rounded-pill">{{user.points}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
 name: 'AdminRating',
 data: function() {
   return {
     adminRating: []
   }
 },
 methods: {
   get_admin_rating: async function() {
     await axios.get('')
     .then(response => (
       console.log(response)
     ))
     .catch(error => (
       console.log(error)
     ))
   }
 }
}
</script>

<style scoped>
.burger-menu {
  display: none;
}
  @media (max-width:767px) {
    .saidbar {
      display: none !important;
    }
    .my_command {
      width: 100%;
    }
    .burger-menu {
      display: unset;
    }
  }
</style>