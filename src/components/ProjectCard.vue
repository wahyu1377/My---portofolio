<template>
  <div class="project-card" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="card-image">
      <img :src="project.image" :alt="`${project.title} screenshot`" />
      <div class="overlay" :class="{'show-overlay': hover}">
        <a v-if="project.github" :href="project.github" target="_blank" class="icon-link">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a v-if="project.demo" :href="project.demo" target="_blank" class="icon-link">
          <font-awesome-icon icon="external-link-alt" />
        </a>
      </div>
    </div>
    <div class="card-content">
      <h3>{{ project.title }}</h3>
      <p>{{ project.description }}</p>
      <div class="tech-tags">
        <span v-for="tech in project.technologies" :key="tech">{{ tech }}</span>
      </div>
      <p class="project-date">{{ project.date }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const hover = ref(false)
</script>

<style scoped>
.project-card {
  background-color: var(--card-bg);
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  margin: 1rem;
  width: 300px;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-image {
  position: relative;
  height: 180px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s;
}

.project-card:hover .card-image img {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s;
}

.show-overlay {
  opacity: 1;
}

.icon-link {
  color: white;
  font-size: 1.5rem;
  margin: 0 10px;
  transition: color 0.3s;
}

.icon-link:hover {
  color: var(--primary-color);
}

.card-content {
  padding: 1.5rem;
}

.card-content h3 {
  margin-top: 0;
  color: var(--primary-color);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  margin: 10px 0;
}

.tech-tags span {
  background-color: var(--primary-color);
  color: white;
  padding: 3px 8px;
  border-radius: 20px;
  font-size: 0.8rem;
  margin-right: 5px;
  margin-bottom: 5px;
}

.project-date {
  font-size: 0.9rem;
  color: #888;
}

@media (max-width: 768px) {
  .project-card {
    width: 100%;
    margin: 1rem 0;
  }
}
</style>