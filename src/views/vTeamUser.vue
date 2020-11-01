<template>
  <div>

    <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Task Menager</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav burger-menu">
            <a class="nav-link active">Команда</a>
            <a class="nav-link">Отчеты</a>
            <a class="nav-link">Рейтинг</a>
          </div>
        </div>
      </div>
    </nav>
    
    <div class="row m-0">
      <div class="col-3 pr-0 pl-0 saidbar">
        <ul class="list-group rounded-0">
          <router-link to="createTask" tag="li" class="list-group-item list-group-item-action active p-3">Команда</router-link>
          <li class="list-group-item list-group-item-action p-3">Отчеты</li>
          <router-link to="/adminRating" tag="li" class="list-group-item list-group-item-action p-3">Рейтинг</router-link>
        </ul>
      </div>
      <div class="col-9 border-top pl-5 my_command mb-5">
        <h2 class="mt-4">Команда</h2>

        <div class="row row-cols-1 mt-1 row-cols-md-3 g-5 w-100" v-if="team.length == 0">
          <h3>Команда пустая</h3>
        </div>
        
        <div class="row row-cols-1 mt-1 row-cols-md-2 g-5 w-100" v-if="team.length">
          <div class="col" v-for="(user, id) in team" :key="id">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{user.fullName}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{user.position}}</h6>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button data-toggle="modal" data-target="#exampleModal" class="btn btn-primary">Добавить задачу</button>
              </div>
            </div>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Добавление задачи</h5>
      </div>
      <div class="modal-body">
        <div class="mb-3">
          <label for="exampleInputName1" class="form-label">Введите название здачи</label>
          <input v-model="name" type="text" class="form-control" id="exampleInputName1">
        </div>
        <div class="mb-3">
          <label for="exampleInputName1" class="form-label">Введите описание задачи</label>
          <input v-model="desc" type="text" class="form-control" id="exampleInputName1">
        </div>
        <div class="mb-3">
          <label for="exampleInputName1" class="form-label">Сколько баллов начислится за выполнение задачи</label>
          <input v-model="points" type="number" class="form-control" id="exampleInputName1">
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
        <button type="button" @click="addTaskUser(user.id)" class="btn btn-primary">Отправить</button>
      </div>
    </div>
  </div>
</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters } from "vuex"

export default {
  data: function() {
    return {
      team: [],
      name: '',
      desc: '',
      points: 0
    }
  },
  computed: {
    ...mapGetters([
      	'GET_TEAM',
    	])
  },
  methods: {
    get_my_command: async function() {
      await axios.get('https://vk-hack-ykt.herokuapp.com/registration/company/' + localStorage.getItem('CompanyName'))
      .then(res => (
        console.log(res.data.teams[0].id),
        axios.get('https://vk-hack-ykt.herokuapp.com/registration/team/' + res.data.teams[0].id)
        .then(response => this.team = response.data.clients)
        .catch(error => (console.log(error)))
      ))
      .catch(e => console.log(e))
    },
    addTaskUser: async function(id) {
      await axios.post('https://vk-hack-ykt.herokuapp.com/task', {
        name: this.name,
        description: this.desc,
        points: `${this.points}`,
        client: {"id": `${id}`}
      }, {
        auth: {
          username: localStorage.getItem("localEmail"),
          password: localStorage.getItem("localPass")
        }
      }).then(res => (console.log(res)))
        .catch(e => (console.log(e)))
    }
  },
  mounted() {
    //this.get_users_team()
    this.get_my_command()
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