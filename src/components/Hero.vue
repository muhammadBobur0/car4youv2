<script>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import 'swiper/css'
import axios from 'axios'
const data = ref([])

async function get() {
  const res = await axios.get('https://server-1g9l.onrender.com/banner')
  data.value = res.data.data
}

get()

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const onSwiper = (swiper) => {
      console.log(swiper)
    }
    const onSlideChange = () => {
      console.log('slide change')
    }
    return {
      onSwiper,
      onSlideChange,
      data
    }
  }
}
</script>

<template>
  <section class="swiper-section">
    <div class="container">
      <Swiper spaceBetween="50" slidesPerView="1" navigation autoplay effect="fade">
        <SwiperSlide v-for="item in data">
          <div class="sweper-bg">
            <img class="swiper-img" :src="item.img" :alt="item.title" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>
