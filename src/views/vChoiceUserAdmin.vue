<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-8 m-auto border p-0 shadow">
        <div class="d-block border-bottom text-center pt-3 mb-0 pb-3 bg-light">
          <h2>Войдите или создайте команду</h2>
        </div>
        <div class="d-flex justify-content-around p-4 flex-wrap">
          <button class="btn btn-success choice mt-4 mb-4 p-5 shadow-sm" data-toggle="modal" data-target="#exampleModal">Создать команду</button>
          <button class="btn btn-primary choice mt-4 mb-4 p-5 shadow-sm" data-toggle="modal" data-target="#exampleModal1">Войти в команду</button>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Создание команды</h5>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
            <button type="button" class="btn btn-primary">Сохранить</button>
          </div>
        </div>
      </div>
    </div>


    <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Вход в команду</h5>
          </div>
          <div class="modal-body">
            ...1
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>
            <button type="button" class="btn btn-primary">Сохранить</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.choice {
  font-size: 20px;
  border-radius: 8rem;
}
</style>