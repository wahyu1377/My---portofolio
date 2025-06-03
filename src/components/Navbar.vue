<template>
  <nav :class="{'dark-nav': darkMode}">
    <div class="logo">
      <router-link to="/">{{ name }}</router-link>
    </div>
    <ul class="nav-links">
      <li><router-link to="/"><font-awesome-icon icon="user" /> Home</router-link></li>
      <li><router-link to="/about"><font-awesome-icon icon="user" /> About</router-link></li>
      <li><router-link to="/skills"><font-awesome-icon icon="code" /> Skills</router-link></li>
      <li><router-link to="/projects"><font-awesome-icon icon="briefcase" /> Projects</router-link></li>
      <li><router-link to="/contact"><font-awesome-icon icon="phone" /> Contact</router-link></li>
      <li>
        <button @click="$emit('toggle-dark-mode')" class="dark-mode-toggle">
          <font-awesome-icon :icon="darkMode ? 'sun' : 'moon'" />
        </button>
      </li>
    </ul>
    <div class="burger" @click="toggleMenu">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  darkMode: Boolean
})

defineEmits(['toggle-dark-mode'])

const name = "Portfolio Saya"
const menuActive = ref(false)

const toggleMenu = () => {
  menuActive.value = !menuActive.value
  const navLinks = document.querySelector('.nav-links')
  navLinks.classList.toggle('nav-active')
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 5%;
  background-color: var(--card-bg);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 90%;
  top: 0;
  z-index: 1000;
  transition: background-color 0.3s;
}

.dark-nav {
  background-color: var(--card-bg);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.logo a {
  font-weight: bold;
  font-size: 1.5rem;
  color: var(--primary-color);
  text-decoration: none;
}

.nav-links {
  display: flex;
  list-style: none;
}

.nav-links li {
  margin-left: 2rem;
}

.nav-links a {
  color: var(--text-color);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: var(--primary-color);
}

.nav-links a.router-link-exact-active {
  color: var(--primary-color);
  font-weight: bold;
}

.dark-mode-toggle {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  font-size: 1rem;
  transition: color 0.3s;
}

.dark-mode-toggle:hover {
  color: var(--primary-color);
}

.burger {
  display: none;
  cursor: pointer;
}

.burger div {
  width: 25px;
  height: 3px;
  background-color: var(--text-color);
  margin: 5px;
  transition: all 0.3s ease;
}

@media screen and (max-width: 768px) {
  .nav-links {
    position: absolute;
    right: 0;
    top: 70px;
    background-color: var(--card-bg);
    width: 50%;
    height: calc(100vh - 70px);
    flex-direction: column;
    align-items: center;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
  }

  .nav-links li {
    margin: 2rem 0;
  }

  .nav-active {
    transform: translateX(0);
  }

  .burger {
    display: block;
  }
}
</style>