<script setup>

const props = defineProps({
  data : {
    type : Object
  }
})
let link = '/product?id=' + props.data?.id
</script>


<template>
<div class="product">
    <a :href=link  class="product">
    <img class="product-img" :src=props.data.img width=316 height=171  :alt=props.data.title />
    <div class="product-body">
    <h2 class="product-title"> {{props.data.title}}</h2>
    <div class="product-span-box">
      <span class="product-span"> rangi :{{ props.data.color }}</span>
      <span class="product-span"> kuzov : {{ props.data.kuzov }}</span>
      <span class="product-span"> sigimi : {{ props.data.capacity }}</span>
    </div>
    <p class="product-price">{{props.data.price}} SO'M</p>
    </div>
    </a>
    </div>
</template>