<template>
  <div :class="{'dark-mode': darkMode}">
    <Navbar @toggle-dark-mode="toggleDarkMode" :darkMode="darkMode" />
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'



const darkMode = ref(false)

const toggleDarkMode = () => {
  darkMode.value = !darkMode.value
  localStorage.setItem('darkMode', darkMode.value)
}

onMounted(() => {
  const savedMode = localStorage.getItem('darkMode')
  if (savedMode !== null) {
    darkMode.value = savedMode === 'true'
  } else {
    // Default to dark mode if preferred
    darkMode.value = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }
})
</script>

<style>
/* Global Styles */
:root {
  --primary-color: #4a6fa5;
  --secondary-color: #166088;
  --text-color: #333;
  --bg-color: #f8f9fa;
  --card-bg: #fff;
  --border-color: #ddd;
}

.dark-mode {
  --primary-color: #64b5f6;
  --secondary-color: #42a5f5;
  --text-color: #f0f0f0;
  --bg-color: #121212;
  --card-bg: #1e1e1e;
  --border-color: #707070;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.3s, color 0.3s;
}

/* Transition effects */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>