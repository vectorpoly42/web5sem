<template>
  <main class="container">
    <div v-for="user in users" :key="`${user.name} - ${user.surname}`" class="card mb-2 shadow-sm">
      <div class="card-header">
        {{ user.name }}
        {{ user.surname }}
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item"><b>Пол</b> - {{ user.sex }}</li>
        <li class="list-group-item"><b>Возраст</b> - {{ user.age }} года</li>
        <li class="list-group-item"><b>Фреймворки</b> - {{ user.frameworks.join(', ') }}</li>
      </ul>
    </div>
    <div v-if="users.length === 0">
      <div class="alert alert-warning">
        <h4 class="alert-heading mb-0">Нет пользователей</h4>
      </div>
    </div>
    <div>
      <button class="btn btn-danger" :disabled="users.length === 0" @click="handleClearUsers">Очистить список</button>
    </div>
  </main>
</template>

<script>
import {mapMutations, mapState} from "vuex";

export default {
  data: () => ({
  }),
  computed: {
    ...mapState({
      users: state => state.users
    })
  },
  methods: {
    ...mapMutations(['clear']),
    handleClearUsers() {
      this.clear()
    }
  }
}
</script>
