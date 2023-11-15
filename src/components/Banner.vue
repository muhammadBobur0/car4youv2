<script setup>
import axios from 'axios'
import { ref } from 'vue'
const title = ref('')
const img = ref('')

const props = defineProps({
  aktive: {
    type: Object
  }
})

async function susces() {
  const formData = new FormData()
  formData.append('img', img.value.files[0])
  formData.append('title', title.value.value)
  const res = await axios.post('https://server-1g9l.onrender.com/banner', formData)
  console.log(res)

  if (res.status == 201) props.aktive.on = false
}

function close() {
  props.aktive.on = false
}
</script>

<template>
  <div class="modal-banner">
    <div class="label">
      <input type="text" class="edd" ref="title" placeholder="rasimni ismi" />
      <input type="file" class="edd" ref="img" />
      <div class="knopka">
        <button class="remove" @click="() => close()">x</button>
        <button class="remove sus" @click="() => susces()">jonatish</button>
      </div>
    </div>
  </div>
</template>
