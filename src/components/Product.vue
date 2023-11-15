<script setup>
import { ref } from 'vue'
import axios from 'axios'
import ProductSingle from './ProductSingle.vue'

const range = ref(400000)
const products = ref([])

async function getproducts() {
  const res = await axios.get('https://server-1g9l.onrender.com/cars')
  products.value = res.data
}

getproducts()
</script>

<template>
  <section>
    <div class="container query-inner">
      <div class="serach-box">
        <h2 class="serach-box-title">Параметры поиска</h2>
        <span class="serach-span">Цена</span>
        <input
          class="range-input"
          type="range"
          name=""
          min="400000"
          step="100000"
          max="1000000"
          @input="(event) => (range = event.target.value)"
          id=""
        />
        <div class="price-box">
          <span class="price-span">{{ range }}</span>
          <span class="price-span">1000000</span>
        </div>
        <select class="select" name="" id="">
          <option value="" disabled defaultValue>Кузов</option>
          <option value="Седан">Седан</option>
          <option value="Хэтчбэк">Хэтчбэк</option>
        </select>

        <div class="boxs" style="margin-bottom: 20px">
          <div class="query-box">
            <h3 class="label-query">Mect</h3>
          </div>
          <select class="select" name="" id="">
            <option value="" disabled defaultValue>Mect</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </div>
      <div class="product-box">
        <div v-for="item in products">
          <ProductSingle :data="item" />
        </div>
      </div>
    </div>
  </section>
</template>
