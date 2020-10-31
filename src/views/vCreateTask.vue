<template>
  <div>
    <vNavbar></vNavbar>
    <div class="row">
      <div class="col-3 pr-0">
        <div class="list-group rounded-0" id="list-tab" role="tablist">
          <a class="list-group-item list-group-item-action active" id="list-home-list" data-toggle="list" href="#list-home" role="tab">Admin</a>
          <a class="list-group-item list-group-item-action" id="list-profile-list" data-toggle="list" href="#list-profile" role="tab" aria-controls="profile">Profile</a>
        </div>
      </div>
      <div class="col-9">
        <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">1</div>
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
    get_command: async function() {
      await axios.get('')
      .then(res => (console.log(res)))
      .catch(e => console.log(e))
    }
  }
}
</script>

<style>

</style>