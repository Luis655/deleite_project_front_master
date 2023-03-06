<template>
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getPageItems()" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.age }}</td>
          </tr>
        </tbody>
      </table>
      <Pagination :items="items" :items-per-page="itemsPerPage" v-model:current-page="currentPage" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Pagination from '../components/paginacion.vue';
  
  export default defineComponent({
    components: {
      Pagination,
    },
    data() {
      return {
        currentPage: 1,
        itemsPerPage: 3,
        items: [
          { id: 1, name: 'Juan', age: 25 },
          { id: 2, name: 'María', age: 32 },
          { id: 3, name: 'Pedro', age: 18 },
          { id: 4, name: 'Lucía', age: 27 },
          { id: 5, name: 'Carlos', age: 41 },
          { id: 6, name: 'Ana', age: 19 },
          { id: 7, name: 'Pablo', age: 35 },
          { id: 8, name: 'Luisa', age: 23 },
          { id: 9, name: 'Eduardo', age: 28 },
          { id: 10, name: 'Fernanda', age: 22 },
        ],
      };
    },
    methods: {
      getPageItems() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.items.slice(startIndex, endIndex);
      },
   
  