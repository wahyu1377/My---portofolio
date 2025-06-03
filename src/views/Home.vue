<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="typing-effect">Hi, I'm <span class="highlight">{{ name }}</span></h1>
        <h2>{{ title }}</h2>
        <p>{{ intro }}</p>
        <div class="cta-buttons">
          <router-link to="/contact" class="btn primary">Contact Me</router-link>
          <a href="#" class="btn secondary" @click.prevent="downloadCV">Download CV</a>
        </div>
      </div>
      <div class="hero-image">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const name = ref('Wahyu Kurnia Pratama')
const title = ref('Web Developer')
const intro = ref('I build amazing web experiences with modern technologies. Passionate about creating clean, efficient, and user-friendly applications.')

const downloadCV = () => {
  // In a real app, this would download your CV
  alert('Downloading CV...')
}

// Typing effect
onMounted(() => {
  const texts = ['Web Developer', 'UI/UX Designer', 'Vue.js Expert', 'Full Stack Developer']
  let count = 0
  let index = 0
  let currentText = ''
  let letter = ''
  
  function type() {
    if (count === texts.length) {
      count = 0
    }
    
    currentText = texts[count]
    letter = currentText.slice(0, ++index)
    
    title.value = letter
    
    if (letter.length === currentText.length) {
      setTimeout(erase, 2000)
    } else {
      setTimeout(type, 100)
    }
  }
  
  function erase() {
    letter = currentText.slice(0, --index)
    title.value = letter
    
    if (letter.length === 0) {
      count++
      index = 0
      setTimeout(type, 500)
    } else {
      setTimeout(erase, 50)
    }
  }
  
  setTimeout(type, 1000)
})
</script>

<style scoped>
.home {
  padding-top: 80px;
  min-height: calc(100vh - 80px);
}

.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 5%;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content {
  flex: 1;
  padding-right: 2rem;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content h2 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
  min-height: 2.5rem;
}

.hero-content p {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 600px;
}

.highlight {
  color: var(--primary-color);
}

.cta-buttons {
  display: flex;
  gap: 1rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s;
}

.primary {
  background-color: var(--primary-color);
  color: white;
}

.primary:hover {
  background-color: var(--secondary-color);
  transform: translateY(-2px);
}

.secondary {
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
}

.secondary:hover {
  background-color: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.hero-image {
  position: relative;
  width: 400px;
  height: 400px;
}

.circle {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(74, 111, 165, 0.1);
}

.circle:nth-child(1) {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  animation: pulse 4s infinite;
}

.circle:nth-child(2) {
  width: 70%;
  height: 70%;
  top: 15%;
  left: 15%;
  animation: pulse 4s infinite 0.5s;
}

.circle:nth-child(3) {
  width: 40%;
  height: 40%;
  top: 30%;
  left: 30%;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 2rem;
  animation: pulse 4s infinite 1s;
}

@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
  }
  
  .hero-content {
    padding-right: 0;
    margin-bottom: 2rem;
  }
  
  .hero-content p {
    max-width: 100%;
  }
  
  .cta-buttons {
    justify-content: center;
  }
  
  .hero-image {
    width: 300px;
    height: 300px;
  }
}
</style>