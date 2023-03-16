<template>
  <div>
    <a href="#" @click="postData">postData</a>
    <ul>
      <li v-for="todo of todos" :key="todo.id">
        {{ todo.name }}
      </li>
    </ul>

  </div>
</template>

<script>
import axios from "axios";
import {ref, onMounted} from 'vue'

export default {
  name: "demo",


  setup() {

    const todos = ref([])

    const getData = onMounted(() => {

          axios.get('http://localhost:3000/todos')
              .then(function (response) {
                todos.value = response.data
              })
              .catch(function (error) {
                console.log(error);
              })
              .finally(function () {
              });

        }
    )

    const postData = () => {
      axios.post('http://localhost:3000/todos', {
        name: "Ahmed",
        done: false
      })
          .then(function () {
            getData()
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    return {todos, getData, postData}
  },


}
</script>

<style scoped>

</style>
