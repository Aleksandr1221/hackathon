<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-6 m-auto">
        <div class="d-block text-center border-right border-left pt-3 mb-0 pb-3 bg-light">
          <h2>Рейтинг</h2>
        </div>
        <ul class="list-group rounded-0">
          <li
            class="list-group-item d-flex justify-content-between align-items-center p-3"
            v-for="(user, index) in ratingList" :key="index"
          >
            {{index+1}}) {{user.fullName}}
            <span class="badge bg-primary rounded-pill">{{user.points}}</span>
          </li>
        </ul>
        <div class="d-block border-right border-left pt-4 mb-0 pb-5 text-right bg-light">
          <button @click="redirectToTodolist()" type="button" class="btn btn-primary mr-3">Продолжить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      ratingList: []
    }
  },
  methods: {
    redirectToTodolist: function() {
      location.href = 'todolist'
    },
    get_users: async function() {
      await axios.get('https://vk-hack-ykt.herokuapp.com/rating/reversed/')
      .then(response => (
        //console.log(response.data.find(element => element.roles[0].name == "ROLE_USER")),
        
        this.ratingList = response.data.filter(user => {return user.companys.length == 0}),
        console.log(response)
      ))
      .catch(error => (console.log(error)))
    }
  },
  mounted() {
    this.get_users()
  }
};
</script>
