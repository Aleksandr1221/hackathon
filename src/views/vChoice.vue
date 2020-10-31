<template>
<div class="row">
    <router-link to="/userRegister" tag="button" type="button" class="btn user">Я - работник</router-link>
    <router-link to="/adminRegister" tag="button" type="button" class="btn admin">Я - управляющий</router-link>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
}
.btn {
  height: 200px;
  width: 200px;
  margin: 20px;
  color: #f7f3f3;
  font-size: 20px;
  border-radius: 30px;
}
.user {
  background-color: #e2e2e2;
  color: #343a40;
}
.admin {
  background: #343a40;
  color: #f7f3f3;
}
.btn:hover {
  box-shadow:0 0 20px #555;
}
</style>