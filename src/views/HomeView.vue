<script setup>
import {todosFactory} from '../todosSetup';

const {todosCompleted,todosIncompleted,toggle,deleteTodo} = todosFactory();
</script>

<template>
<div>
  <h3>Todo List</h3>
  <p v-if="todosIncompleted.length === 0">Nada que Hacer</p>
  <ul id="incomplete-tasks">
    <li v-for="todo in todosIncompleted" :key="todo.id" @click="toggle(todo.id)">
      <input type="checkbox"/>
      <label>{{todo.nombre}}</label>
      <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
    </li>
  </ul>
  <h3>Completed</h3>
  <ul id="completed-tasks">
    <li v-for="todo in todosCompleted" :key="todo.id" @click="toggle(todo.id)" >
      <input type="checkbox" checked/>
      <label>{{todo.nombre}}</label>
      <button class="delete" @click="deleteTodo(todo.id)">Delete</button>
    </li>
  </ul>
</div>
</template>
<style>

</style>
