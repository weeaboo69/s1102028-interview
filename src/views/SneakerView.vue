<template>
  <div class="flex items-center justify-between flex-wrap bg-gray-300 p-6">
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-center">
      <img src="../assets/image/logo.png" class="fill-current h-20 w-20" width="54" height="54" viewBox="0 0 54 54"></img>
    </div>
  </div>
  <nav class="flex items-center justify-between flex-wrap bg-black p-6">
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto gap-6 justify-center">
      <div class="block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white text-xl">
        <router-link to="/">Home</router-link>
      </div>
    </div>
  </nav>
  <!--------------------------------------------------------------------------------------------->
  <div class="p-4">
    <div class="flex items-center justify-center mx-auto p-6 w-full">
      <div class="flex-1 flex flex-col items-center p-4 m-2">
        <img :src="sneaker.image" alt="Sneaker Image" class="max-w-full h-auto mb-4">
      </div>
      <div class="flex-1 flex flex-col items-center p-4 m-2 border-2 border-gray-300">
        <h2 class="text-xl text-gray-400 font-bold">{{ sneaker.brand }}</h2>
        <br>
        <h2 class="text-2xl font-bold text-center">{{ sneaker.name }}</h2>
        <br>
        <h2 class="text-xl text-gray-400 font-bold">{{ sneaker.price }}</h2>
      </div>
    </div>
    <h1 class="text-2xl font-bold mt-6">商品敘述</h1>
    <p class="whitespace-pre-wrap">{{ sneaker.description }}</p>
  </div>
  <footer class="flex items-center justify-center flex-wrap bg-gray-500 p-6">
    <p class="text-center text-gray-100">課堂使用,若有侵權請來信告知 <br>
      Copyright © 2022 Department of Information Communication.Yuan Ze University.</p>
  </footer>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import sneakers from '../sneakers.json';

const route = useRoute();
const sneaker = ref({});

onMounted(() => {
  const sneakerId = route.params.id;
  sneaker.value = sneakers.find(s => s.id == sneakerId);
}); 
</script>

<style scoped>
</style>