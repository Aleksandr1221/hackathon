<template>
<div class="form_wrapper mt-5">
  <form action="" class="form">
    <div class="d-flex">
      <router-link to="/">
        <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMmVtIiBoZWlnaHQ9IjJlbSIgdmlld0JveD0iMCAwIDE2IDE2IiBjbGFzcz0iYmkgYmktY2FyZXQtbGVmdC1maWxsIiBmaWxsPSJjdXJyZW50Q29sb3IiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgICAgIDxwYXRoIGQ9Ik0zLjg2IDguNzUzbDUuNDgyIDQuNzk2Yy42NDYuNTY2IDEuNjU4LjEwNiAxLjY1OC0uNzUzVjMuMjA0YTEgMSAwIDAgMC0xLjY1OS0uNzUzbC01LjQ4IDQuNzk2YTEgMSAwIDAgMCAwIDEuNTA2eiIvPg0KICAgICAgPC9zdmc+" alt="">
      </router-link>
      <h2 class="form__title mb-5">Регистрация управляющего</h2>
    </div>

  <div class="row">
    <div class="form__group col-md-4">
      <input v-model="firstname" class="form__input" placeholder=" " required>
      <label class="form__label_row">Имя</label>
    </div>
    <div class="form__group col-md-4">
      <input v-model="lastname" class="form__input" placeholder=" " required>
      <label class="form__label_row">Фамилия</label>
    </div>
    <div class="form__group col-md-4">
      <input v-model="middlename" class="form__input" placeholder=" " required>
      <label class="form__label_row">Отчество</label>
    </div>
  </div>

  <div class="row">

    <div class="form__group col-md-6">
      <input v-model="position" class="form__input" placeholder=" " required>
      <label class="form__label_row">Должность</label>
    </div>
  </div>

    <div class="form__group">
      <input v-model="email" type="email" class="form__input" placeholder=" " required>
      <label class="form__label">Email</label>
    </div>
    <div class="form__group">
      <input v-model="password" type="password" class="form__input" placeholder=" " required>
      <label class="form__label">Придумайте пароль</label>
    </div>

    <button @click="submitForm()" class="form__button">Регистрация</button>
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data: function() {
    return {
      firstname: '',
      lastname: '',
      middlename: '',
      position: '',
      email: '',
      password: ''
    }
  },
  methods: {
    submitForm: async function() {
      //e.preventDefault()
      await axios.post('https://vk-hack-ykt.herokuapp.com/registration/admin', {
        firstname: this.firstname,
        lastname: this.lastname,
        username: this.email,
        password: this.password,
        position: this.position,
        fullName: `${this.lastname} ${this.firstname} ${this.middlename}`
      }).then(response => {
        let a = eval('({obj:[' + response.config.data + ']})');
        //console.log(a.obj[0].fullname)
        localStorage.setItem('localEmail', a.obj[0].username)
        localStorage.setItem('localPass', a.obj[0].password)
        location.href = '/rating'
      }).catch(error => {
        console.log(error)
        console.log('Запрос отменен')
      })
    }
  }
}
</script>

<style scoped>
.form_wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.form {
  width: 800px;
  padding: 32px;
  border-radius: 7px;
  box-shadow: 0 4px 16px #ccc;
  font-family: sans-serif;
  letter-spacing: 1px;
}
.form__input,
.form__button {
  font-family: sans-serif;
  letter-spacing: 1px;
  font-size: 16px;
}
.form__title {
  text-align: center;
  margin: 0 0 32px;
  font-weight: normal;
  margin-left: 7rem;
}
.form__group {
  position: relative;
  margin-bottom: 32px;
}
.form__label {
  position: absolute;
  top: 0;
  z-index: -1;
  color: #9e9e9e;
  transition: .3s;
  left: 0;
}
.form__label_row {
  position: absolute;
  top: 0;
  z-index: -1;
  color: #9e9e9e;
  transition: .3s;
  left: 12px;
}
.form__input {
  width: 100%;
  padding: 0 0 10px 0;
  border: none;
  border-bottom: 1px solid #e0e0e0;
  background-color: transparent;
  outline: none;
  transition: .3s;
}
.form__input:focus {
  border-bottom: 1px solid #1a73a8;
}
.form__button {
  padding: 10px 20px;
  border: none;
  border-radius: 22px; /**/
  color: #fff;
  background-color: #0071f0;
  outline: none;
  cursor: pointer;
  transition: .3s;
}
.form__button:focus,
.form__button:hover {
  background-color: rgba(0, 113, 240, 0.7);
}
.form__input:focus ~ .form__label,
.form__input:not(:placeholder-shown) ~ .form__label {
  top: -18px;
  font-size: 12px;
  color: #e0e0e0;
}
.form__input:focus ~ .form__label_row,
.form__input:not(:placeholder-shown) ~ .form__label_row {
  top: -18px;
  font-size: 12px;
  color: #e0e0e0;
}
</style>