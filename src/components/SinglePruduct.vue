
<script setup>
import axios from 'axios';
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const data = ref({})
let link = '/order?id=' 

async function getPro(id) {
	const res = await axios.get(`https://server-1g9l.onrender.com/cars/${id}`)
	data.value = res.data.data
	link = '/order?id=' +  res.data.data.title
}

getPro(route.query.id)
</script>




<template>
	<div class='container iteam-iner'>
		<button class='home'>
			<a href="/">
				Home
			</a>
		</button>
		<img :src=data.img alt='' class='img-iteam' />
		<div class='hero-box'>
			<div class='hero-bottom'>
				<div class='hero-items'>
					<h3 class='hero-titles'>ОТ {{ data.price }} SO'M</h3>
					<p class='hero-texts'>Цена указана без учетом НДС</p>
				</div>
				<div class='hero-items'>
					<h3 class='hero-titles'>КУЗОВ</h3>
					<p class='hero-texts'>{{ data.kuzov }}</p>
				</div>
				<div class='hero-items'>
					<h3 class='hero-titles'>ЦВЕТ</h3>
					<p class='hero-texts'>{{ data.color }}</p>
				</div>
				<div class='hero-items'>
					<h3 class='hero-titles'>ТРАНСМИССИЯ</h3>
					<p class='hero-texts'>Автоматическая</p>
				</div>
				<div class='hero-items'>
					<h3 class='hero-titles'>МЕСТ</h3>
					<p class='hero-texts'>{{ data.capacity }}</p>
				</div>
			</div>
			<a class='order-link' :href=link>
				ORDER
			</a>
		</div>
	</div>
</template>