<script setup>
import { useRoute } from 'vue-router'
import Banner from '../components/Banner.vue'
import {ref} from 'vue'
import axios from 'axios';
let target = ref(false)
const aktive = ref({
  on: false,
  update : false
})
const  banners = ref([])

const route = useRoute()
if(!route.params.nomer !== '998977777701') {
  target.value = !target.value
}

async function get () {
 const res = await axios.get('https://server-1g9l.onrender.com/banner')
 banners.value = res.data.data
}
get()


</script>

<template>
<div v-if="target.value == false">
  <a href="/">qaytish</a>
</div>
<div v-else class="container">
  <div class="button">
      <button @click="()=> aktive.on = !aktive.on">
        +
      </button>
      <Banner v-if="aktive.on" :aktive="aktive"  />
    </div>
  <div class="banners">
    <div v-for="itm in banners">
      <div class="banner">
        <img :src=itm?.img alt="" width="300" height="200" style="display: block; margin-bottom: 25px;" @error="(e)=> e.target.src = 'https://server-1g9l.onrender.com/' + itm.img" >
        <button class="remove">x</button>
      </div>
    </div>

  </div>

  <div class="bannerstwo">

</div>

</div>

</template>