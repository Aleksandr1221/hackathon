<template>
  <div>
    <vNavbar></vNavbar>
    <div class="row m-0">
      <div class="col-3 pr-0 pl-0">
        <ul class="list-group rounded-0">
          <li class="list-group-item p-3">Cras justo odio</li>
          <li class="list-group-item p-3">Dapibus ac facilisis in</li>
          <li class="list-group-item p-3">Morbi leo risus</li>
          <li class="list-group-item p-3">Porta ac consectetur ac</li>
          <li class="list-group-item p-3">Vestibulum at eros</li>
        </ul>
      </div>
      <div class="col-9 border-top pl-5">
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
import vNavbar from '../components/navbar'

export default {
  data: function() {
    return {

    }
  },
  components: {
    vNavbar
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

<style>

</style>