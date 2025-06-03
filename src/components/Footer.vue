<template>
  <footer :class="{'dark-footer': darkMode}">
    <div class="social-links">
      <a href="https://github.com" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
      <a href="https://linkedin.com" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
      <a href="https://twitter.com" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
    </div>
    <p>&copy; {{ new Date().getFullYear() }} My Portfolio. All rights reserved.</p>
  </footer>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  darkMode: Boolean
})
</script>

<style scoped>
footer {
  background-color: var(--card-bg);
  color: var(--text-color);
  text-align: center;
  padding: 1.5rem 0;
  margin-top: 2rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, color 0.3s;
}

.dark-footer {
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.3);
}

.social-links {
  margin-bottom: 1rem;
}

.social-links a {
  color: var(--text-color);
  font-size: 1.5rem;
  margin: 0 10px;
  transition: color 0.3s;
}

.social-links a:hover {
  color: var(--primary-color);
}
</style>