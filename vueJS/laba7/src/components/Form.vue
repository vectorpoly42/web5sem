<template>
  <form @submit.prevent="handleSubmit" @reset="handleReset">
    <div class="mb-3">
      <label for="name" class="form-label">Имя</label>
      <input type="text" id="name" class="form-control" v-model.trim="formData.name"/>
    </div>
    <div class="mb-3">
      <label for="surname" class="form-label">Фамилия</label>
      <input type="text" id="surname" class="form-control" v-model.trim="formData.surname"/>
    </div>
    <div class="mb-3">
      <label for="age" class="form-label">Возраст</label>
      <input type="number" id="age" class="form-control" v-model.number="formData.age"/>
    </div>

    <div class="mb-3">
      <label for="sex" class="form-label">Пол</label>
      <div v-for="option in sexOptions" class="form-check" :key="option">
        <input class="form-check-input" v-model="formData.sex" :value="option" type="radio" name="sex" :id="`sex-${option}`">
        <label class="form-check-label" :for="`sex-${option}`">
          {{ option }}
        </label>
      </div>
    </div>

    <div class="mb-3">
      <label for="framework" class="form-label">Фреймворк</label>
      <div v-for="option in frameWorksOptions" class="form-check" :key="option">
        <input class="form-check-input" v-model="formData.frameworks" :value="option" type="checkbox" name="sex" :id="`framework-${option}`">
        <label class="form-check-label" :for="`framework-${option}`">
          {{ option }}
        </label>
      </div>
    </div>
    <div v-if="showValidateState && errors.length > 0">
      <div class="alert alert-danger">
        <h4 class="alert-heading">Ошибка валидации</h4>
        <ul class="mb-0">
          <li v-for="error in errors" :key="error.message">{{ error.message }}</li>
        </ul>
      </div>
    </div>
    <div v-if="isSaveCompete">
      <div class="alert alert-success">
        <h4 class="alert-heading">Сохранение</h4>
        Данные успешно сохранены
      </div>
    </div>
    <div class="btn-group">
      <button class="btn btn-primary">Сохранить</button>
      <button type="reset" class="btn btn-danger">Сброс</button>
    </div>
  </form>
</template>

<script>
import {mapMutations} from "vuex";

const defaultFormData = {
  name: "",
  surname: "",
  age: null,
  sex: "",
  frameworks: [],
}


export default {
  data: () => ({
    showValidateState: false,
    isSaveCompete: false,
    sexOptions: Object.freeze({
      M: "M",
      F: "F"
    }),
    frameWorksOptions: Object.freeze({
      VUE: "Vue",
      ANGULAR: "ANGULAR",
      SVELTE: "SVELTE",
      REACT: "REACT"
    }),
    formData: {...defaultFormData}
  }),
  computed: {
    errors() {
      const errors = [];

      if (!this.formData.name) {
        errors.push({
          field: "name", message: "Введите имя!"
        });
      } else {
        errors.filter((error) => error.field !== "name")
      }

      if (!this.formData.surname) {
        errors.push({field: "surname", message: "Введите Фамилию!"})
      } else {
        errors.filter((error) => error.field !== "surname")
      }

      if (!this.formData.age) {
        errors.push({field: "age", message: "Укажите возраст!"})
      } else {
        errors.filter((error) => error.field !== "age")
      }

      if (!this.formData.sex) {
        errors.push({
          field: "sex", message: "Укажите пол!"
        })
      } else {
        errors.filter((error) => error.field !== "sex")
      }

      return errors;
    }
  },
  methods: {
    ...mapMutations(['addUser']),
    handleSubmit() {
      this.$data.showValidateState = true

      if (this.errors.length === 0) {
        this.addUser(this.$data.formData)

        this.$data.formData = {...defaultFormData}
        this.$data.showValidateState = false
        this.$data.isSaveCompete = true
      }
    },
    handleReset() {
      this.$data.showValidateState = false
      this.$data.isSaveCompete = false
      this.$data.formData = {...defaultFormData}
    }
  }
}
</script>

<style scoped>

</style>
