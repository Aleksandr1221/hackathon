<template>
<div>

  <!--<div class="row" v-for="(todo, id) in todoList" :key="id">
  <div class="col-3 pr-0">
    <div class="list-group rounded-0" id="list-tab" role="tablist">
      <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab">{{todo.name}}</a>
    </div>
  </div>
  <div class="col-9 border-top">
    <div class="tab-content" id="nav-tabContent">
      <div class="tab-pane fade show active" id="list-home active" role="tabpanel" aria-labelledby="list-home-list">{{todo.description}}</div>
    </div>
  </div>
  </div>-->



   <div class="row row-cols-1 mt-1 row-cols-md-2 g-5 pl-5 w-100" v-if="todoList.length > 0">
          <div class="col" v-for="(todo, id) in todoList" :key="id">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{todo.name}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Баллов: {{todo.points}}</h6>
                <p class="card-text">Описание: {{todo.description}}</p>
                <button class="btn btn-primary">Выполнено</button>
              </div>
            </div>
          </div>
        </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Todolist",
  data: function() {
    return {
      todoList: []
    }
  },
  methods: {
    getTodo: function() {
      axios.get('https://vk-hack-ykt.herokuapp.com/task/user/' + localStorage.getItem("localEmail"))
      .then((response) => (
        console.log(response.data),
        this.todoList = response.data
        //response.data.find(element => element.username === localStorage.getItem('localEmail')).tasks.forEach(element => {
        //  this.todoList.push({name: element.name, desc: element.desc})
        //  console.log(element)
        //}

      )).catch(error => (console.log(error)))
    }
  },
  mounted() {
    this.getTodo()
  }
}
</script>

<style scoped>

</style>
