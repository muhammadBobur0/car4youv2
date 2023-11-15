<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

	const cars = ref();
	const tour = ref();
	const datestart = ref();
	const dateend = ref();
  const peopleCount = ref()

	const clicked = async (e) => {
		e.preventDefault();
		const url = 'https://7777701.uz/send';
		let res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({
				fio: cars.value.value,
				tour: tour.value.value,
				startDate: datestart.value.value,
				endDate: dateend.value.value,
				peopleCount: "0",
			}),
		});
		if (res.status == 200) {
			cars.value.value = '';
			tour.value.value = '';
			(datestart.value.value = ''), (dateend.value.value = '');
		}
	};
</script>

<template>

<section class='order-form'>
			<div class='container'>
				<button class='home'>
          <a href="/">
            Home
          </a>
				</button>
				<div class='bg'>
					<form  class='bg-form' @submit="(e)=>clicked(e)" >
						<span class='order'>ЗАБРОНИРОВАТЬ</span>
						<label class='label'>
							Имя
							<input
								class='order-input'
								ref='cars'
								type='text'
								name=''
								id=''
								required
							/>
						</label>

						<label class='label'>
							Телефон
							<input
								class='order-input'
								type='number'
								name=''
								id=''
								ref='tour'
								required
							/>
						</label>

						<label class='label'>
							Дата получения
							<input
								class='order-input'
								type='date'
								name=''
								id=''
								ref='datestart'
								required
							/>
						</label>

						<label class='label'>
							Какую машину вы хотите
							<input
								class='order-input'
								type='text'
								name=''
								:value='route.query.id'
								id=''
								ref='dateend'
								required
							/>
						</label>

						<span class='label'>Стаж вождения:</span>

						<div class='box-redio'>
							<div class='radio-box'>
								<input type='radio' class='radio'  />
								<span class='label span'>До 1 года</span>
							</div>

							<div class='radio-box'>
								<input type='radio' class='radio' />
								<span class='label span'>1-5 лет</span>
							</div>

							<div class='radio-box'>
								<input type='radio' class='radio' />
								<span class='label span'>Больше 5 лет</span>
							</div>
						</div>

						<span class='label'>Дополнительные опции:</span>

						<div class='box-redio'>
							<div class='radio-box'>
								<input type='radio' class='radio' name="Водитель" ref="peopleCount" />
								<span class='label span'>Водитель</span>
							</div>

							<div class='radio-box'>
								<input type='radio' class='radio' name="Детское кресло" ref="peopleCount" />
								<span class='label span'>Детское кресло</span>
							</div>

							<div class='radio-box'>
								<input type='radio' class='radio' name="Другое" ref="peopleCount" />
								<span class='label span'>Другое</span>
							</div>

							<div class='radio-box'>
								<input type='radio' class='radio' required name="Мне больше 25 лет" ref="peopleCount" />
								<span class='label span'>Мне больше 25 лет</span>
							</div>
						</div>

						<button class='btn-order' type='submit'>
							Заказать
						</button>
					</form>
				</div>
			</div>
		</section>

</template>