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
        <h2 class="mt-4">Команды</h2>

        <div class="row row-cols-1 mt-1 row-cols-md-3 g-5 w-100" v-if="my_command.length == 0">
          <button data-toggle="modal" data-target="#exampleModal1" class="btn btn-primary btn-lg">Создать команду</button>

    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Создание команды</h5>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="exampleInputName1" class="form-label">Введите название вашей команды</label>
              <input v-model="TeamName" type="text" class="form-control" id="exampleInputName1">
            </div>
            <div class="mb-3">
              <label for="exampleInputType1" class="form-label">Введите направление вашей команды</label>
              <input v-model="TeamType" type="text" class="form-control" id="exampleInputType1">
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
            <button @click="createTeam()" type="button" class="btn btn-primary">Создать</button>
          </div>
        </div>
      </div>
    </div>
        </div>
        
        <div class="row row-cols-1 mt-1 row-cols-md-2 g-5 w-100" v-if="my_command.length > 0">
          <div class="col" v-for="(team, id) in my_command" :key="id">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{team.name}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{{team.type}}</h6>
                <p class="card-text">ID для добавления в команду: {{team.id}}</p>
                <button @click="addTask(team.id)" class="btn btn-primary">Добавить задачу</button>
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
import { mapActions } from "vuex"

export default {
  data: function() {
    return {
      my_command: [],
      TeamName: '',
      TeamType: ''
    }
  },
  components: {
  },
  methods: {
    get_my_command: async function() {
      await axios.get('https://vk-hack-ykt.herokuapp.com/registration/company/' + localStorage.getItem('CompanyName'))
      .then(res => (console.log(res.data.teams, this.my_command = res.data.teams)))
      .catch(e => console.log(e))
    },
    createTeam: async function() {
      await axios.get('https://vk-hack-ykt.herokuapp.com/registration/' + localStorage.getItem("localEmail"))
      .then(response => {
        console.log(response.data.companys[response.data.companys.length-1].id)
        axios.post('https://vk-hack-ykt.herokuapp.com/registration/team', {
          name: this.TeamName,
          type: this.TeamType,
          company: {"id": `${response.data.companys[response.data.companys.length-1].id}`}
        }).then(res => {
          console.log(res)
        }).catch(e => {
          console.log(e)
        })
      })
      .catch(error => (console.log(error)))
    },
    ...mapActions([
      'GET_USER_TEAM',
    ]),
    addTask: async function(id) {
      //this.$store.commit('SET_TEAM', team)
      location.href = '/teamUsers'
    }
  },
  mounted() {
    this.get_my_command()
  },
  computed: {
    ...mapGetters([
      	'GET_TEAM',
    	])
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
