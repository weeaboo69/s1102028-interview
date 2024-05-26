import { createRouter,createMemoryHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SneakerView from '../views/SneakerView.vue';

const router = createRouter({
    history: createMemoryHistory(),
    routes:[
        { path: "/", name:"Home", component: HomeView },
        { path: "/:id", name:"Sneaker", component: SneakerView },
    ],
  })
  export default router;
