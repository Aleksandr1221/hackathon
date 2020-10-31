<template>
  <div>
    
    <div class="row" v-for="(todo, id) in todoList" :key="id">
      <div class="col-3 pr-0">
        <div class="list-group rounded-0" id="list-tab" role="tablist">
          <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab">{{todo.name}}</a>
          <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
        </div>
      </div>
      <div class="col-9 border-top">
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">{{todo.desc}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Todolist",
  components: {
  },
  data: function() {
    return {
      todoList: []
    }
  },
  methods: {
    getTodo: function() {
      axios.get('https://vk-hack-ykt.herokuapp.com/registration/'+localStorage.getItem("localEmail"))
          .then((response) => (
              console.log(response))
          ).catch(error => (console.log(error)))

    }

  }
}
</script>

<style scoped>

</style>