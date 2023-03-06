<template>
    <div>
      <ul>
        <li v-for="item in getPageItems()" :key="item.id">{{ item.name }}</li>
      </ul>
      <div>
        <button @click="currentPage -= 1" :disabled="currentPage === 1">Anterior</button>
        <button @click="currentPage += 1" :disabled="currentPage === totalPages()">Siguiente</button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    props: {
      items: {
        type: Array,
        required: true,
      },
      itemsPerPage: {
        type: Number,
        default: 10,
      },
      currentPage: {
        type: Number,
        default: 1,
      },
    },
    methods: {
      totalPages() {
        return Math.ceil(this.items.length / this.itemsPerPage);
      },
      getPageItems() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.items.slice(startIndex, endIndex);
      },
    },
  });
  </script>
  