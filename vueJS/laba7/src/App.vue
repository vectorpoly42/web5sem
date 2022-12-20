<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="d-flex flex-column">
    <header class="container">
      <header class="navbar navbar-expand-lg mb-4">
        <nav class="d-flex">
          <RouterLink class="nav-link mx-1" to="/">Пользователи</RouterLink>
          <RouterLink class="nav-link mx-1" to="/add-user">Добавить пользователя</RouterLink>
        </nav>
      </header>
    </header>

    <RouterView />
  </div>
</template>

<style>
@import "bootstrap";
</style>
