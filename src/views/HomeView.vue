<template>
  <div class="flex items-center justify-between flex-wrap bg-gray-300 p-6">
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto justify-center">
      <img src="../assets/image/logo.png" class="fill-current h-20 w-20" width="54" height="54" viewBox="0 0 54 54"></img>
    </div>
  </div>
  <nav class="flex items-center justify-between flex-wrap bg-black p-6 text-xl">
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto gap-6 justify-center">
      <div v-for="sneaker in sneakers" :key="sneaker.id" class="relative group block mt-4 lg:inline-block lg:mt-0 text-gray-400 hover:text-white">
        <ul class="absolute left-0 hidden mt-8 bg-white text-gray-800 group-hover:block min-w-full whitespace-nowrap text-base">
          <li class="block px-4 py-2">{{ sneaker.name }}</li>
        </ul>
        <router-link :to="{ name: 'Sneaker', params: { id: sneaker.id } }">
          {{ sneaker.title }}
        </router-link>
      </div>
    </div>
  </nav>
  <!-------------------------------------------------------------------------------------------------->
  <div class="flex items-center justify-center bg-gray-300 w-4/5 h-full mx-auto border border-gray-500">
    <div class="flex-shrink content-center px-4 py-2 m-2">
      <img class="w-20 h-20 hover:cursor-pointer" @click="changeImage('left')" src="../assets/image/left.png">
    </div>
    <div class="flex-shrink content-center px-4 py-2 m-2 hover:cursor-pointer" @click="GoToSneaker">
      <img :src="Image">
    </div>
  <div class="flex-shrink content-center px-4 py-2 m-2">
    <img class="w-20 h-20 hover:cursor-pointer" @click="changeImage('right')" src="../assets/image/right.png">
  </div>
</div>
<footer class="flex items-center justify-center flex-wrap bg-gray-500 p-6">
    <p class="text-center text-gray-100">課堂使用,若有侵權請來信告知 <br>
      Copyright © 2022 Department of Information Communication.Yuan Ze University.</p>
</footer>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import sneakersData from '../sneakers.json';

  const sneakers = ref([]);
  const Sneaker_Now = ref(0);
  const router = useRouter();

  sneakers.value = sneakersData;

  const Image = ref(sneakers.value[Sneaker_Now.value].image);
  const Image_Id = ref(sneakers.value[Sneaker_Now.value].id);

  const changeImage = direction => {
    if (direction === 'left') {
      Sneaker_Now.value = (Sneaker_Now.value - 1 + sneakers.value.length) % sneakers.value.length;
    } else if (direction === 'right') {
      Sneaker_Now.value = (Sneaker_Now.value + 1) % sneakers.value.length;
    }
    Image.value = sneakers.value[Sneaker_Now.value].image;
    Image_Id.value = sneakers.value[Sneaker_Now.value].id;
  };
  const GoToSneaker = () => {
    router.push({ name: 'Sneaker', params: { id: Image_Id.value } });
  };
</script>

<style scoped>
</style>