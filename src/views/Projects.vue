<template>
  <div class="projects">
    <div class="container">
      <h1 class="section-title">My <span>Projects</span></h1>
      
      <div class="projects-intro">
        <p>Here are some of my recent works. Each project represents a unique challenge and learning opportunity.</p>
      </div>
      
      <div class="projects-grid">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project" 
          @click="openProjectModal(project)"
        />
      </div>
      
      <!-- Project Modal -->
      <div class="modal" v-if="selectedProject" @click.self="closeModal">
        <div class="modal-content">
          <button class="close-btn" @click="closeModal">&times;</button>
          
          <div class="modal-body">
            <div class="modal-image">
              <img :src="selectedProject.image" :alt="selectedProject.title">
            </div>
            
            <div class="modal-details">
              <h2>{{ selectedProject.title }}</h2>
              <p class="project-date">{{ selectedProject.date }}</p>
              
              <div class="project-description">
                <h3>Description</h3>
                <p>{{ selectedProject.fullDescription || selectedProject.description }}</p>
              </div>
              
              <div class="project-features" v-if="selectedProject.features">
                <h3>Key Features</h3>
                <ul>
                  <li v-for="(feature, index) in selectedProject.features" :key="index">
                    {{ feature }}
                  </li>
                </ul>
              </div>
              
              <div class="project-tech">
                <h3>Technologies Used</h3>
                <div class="tech-tags">
                  <span v-for="tech in selectedProject.technologies" :key="tech">
                    {{ tech }}
                  </span>
                </div>
              </div>
              
              <div class="project-links">
                <a 
                  v-if="selectedProject.github" 
                  :href="selectedProject.github" 
                  target="_blank" 
                  class="project-link"
                >
                  <font-awesome-icon :icon="['fab', 'github']" /> View Code
                </a>
                <a 
                  :href="selectedProject.demo" 
                  target="_blank" 
                  class="project-link"
                >
                  <font-awesome-icon icon="external-link-alt" /> Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ProjectCard from '../components/ProjectCard.vue'

const projects = ref([
  {
    id: 1,
    title: 'Laundry App',
    description: 'Aplikasi manajemen laundry dengan fitur pemantauan pesanan',
    fullDescription: 'Aplikasi laundry berbasis web yang memudahkan pengelolaan pesanan laundry, melacak status pesanan, dan manajemen pelanggan. Dibangun dengan teknologi modern untuk pengalaman pengguna yang optimal.',
    date: 'Mei 2023',
    technologies: ['Vue.js', '', ' CSS', 'Vue Router'],
    image: 'https://loundry-app-tau.vercel.app/screenshot.png', // Anda bisa ganti dengan URL screenshot
    demo: 'https://loundry-app-tau.vercel.app/',
    features: [
      'Manajemen pesanan laundry',
      'Pelacakan status pesanan',
      'Manajemen pelanggan',
      'Antarmuka pengguna yang intuitif',
      'Responsive design'
    ]
  },
  {
    id: 2,
    title: 'Jadwal Kuliah Dashboard',
    description: 'Dashboard untuk mengelola jadwal mata kuliah',
    fullDescription: 'Aplikasi dashboard untuk mengelola jadwal perkuliahan dengan fitur penjadwalan, pengingat, dan visualisasi jadwal. Membantu mahasiswa dan dosen dalam mengorganisir aktivitas akademik.',
    date: 'Juni 2023',
    technologies: ['Vue Js', 'CSS'],
    image: 'https://loundry-app-tau.vercel.app/', // Anda bisa ganti dengan URL screenshot
    demo: 'https://jadwal-mata-kuliah-dashboard.vercel.app/',
    features: [
      'Manajemen jadwal kuliah',
      'Pengingat jadwal',
      'Visualisasi kalender',
      'Multi-user support',
      'Ekspor/impor jadwal'
    ]
  }
])

const selectedProject = ref(null)

const openProjectModal = (project) => {
  selectedProject.value = project
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
.projects {
  padding: 80px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
}

.section-title span {
  color: var(--primary-color);
}

.projects-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
}

.modal-content {
  background-color: var(--card-bg);
  border-radius: 8px;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.close-btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--text-color);
  z-index: 10;
}

.modal-body {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}

.modal-image {
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 1.5rem;
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-details {
  flex: 1;
}

.modal-details h2 {
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.project-date {
  color: #888;
  margin-bottom: 1.5rem;
}

.project-description,
.project-features,
.project-tech {
  margin-bottom: 1.5rem;
}

.project-description h3,
.project-features h3,
.project-tech h3 {
  color: var(--primary-color);
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
}

.project-features ul {
  padding-left: 1.5rem;
}

.project-features li {
  margin-bottom: 0.5rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tags span {
  background-color: var(--primary-color);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s;
}

.project-link:hover {
  background-color: var(--secondary-color);
}

@media (max-width: 768px) {
  .modal-body {
    flex-direction: column;
  }
  
  .modal-image {
    height: 200px;
  }
}
</style>