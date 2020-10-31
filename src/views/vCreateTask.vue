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
            <a class="nav-link">Команда</a>
            <a class="nav-link">Отчеты</a>
            <a class="nav-link">Рейтинг</a>
          </div>
        </div>
      </div>
    </nav>
    
    <div class="row m-0">
      <div class="col-3 pr-0 pl-0 saidbar">
        <ul class="list-group rounded-0">
          <li class="list-group-item p-3">Команда</li>
          <li class="list-group-item p-3">Отчеты</li>
          <li class="list-group-item p-3">Рейтинг</li>
        </ul>
      </div>
      <div class="col-9 border-top pl-5 my_command mb-5">
        <h2 class="mt-4">Моя команда</h2>
        
        <div class="row row-cols-1 mt-1 row-cols-md-2 g-5 w-100">
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Иван Иванов Иванович</h5>
                <h6 class="card-subtitle mb-2 text-muted">UI UX дизайнер</h6>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button class="btn btn-primary">Добавить задачу</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Иван Иванов Иванович</h5>
                <h6 class="card-subtitle mb-2 text-muted">UI UX дизайнер</h6>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button class="btn btn-primary">Добавить задачу</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Иван Иванов Иванович</h5>
                <h6 class="card-subtitle mb-2 text-muted">UI UX дизайнер</h6>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button class="btn btn-primary">Добавить задачу</button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Иван Иванов Иванович</h5>
                <h6 class="card-subtitle mb-2 text-muted">UI UX дизайнер</h6>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button class="btn btn-primary">Добавить задачу</button>
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

export default {
  data: function() {
    return {

    }
  },
  components: {
  },
  methods: {
    get_my_command: async function() {
      await axios.get('')
      .then(res => (console.log(res)))
      .catch(e => console.log(e))
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
