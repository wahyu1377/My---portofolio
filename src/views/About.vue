<template>
  <div class="about">
    <div class="container">
      <h1 class="section-title">About <span>Me</span></h1>
      
      <div class="about-content">
        <div class="about-image">
          <div class="image-wrapper">
            <img v-if="imagePreview" :src="imagePreview" alt="Profile" />
            <div v-else class="upload-area" @click="triggerFileInput">
              <font-awesome-icon icon="user" size="3x" />
              <p>Click to upload photo</p>
            </div>
            <input 
              type="file" 
              ref="fileInput" 
              @change="handleImageUpload" 
              accept="image/*" 
              style="display: none;"
            />
          </div>
        </div>
        
        <div class="about-text">
          <h2>Personal Info</h2>
          
          <div class="info-grid">
            <div class="info-item">
              <span class="info-label">Name:</span>
              <span class="info-value">{{ personalInfo.name }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Email:</span>
              <span class="info-value">{{ personalInfo.email }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Age:</span>
              <span class="info-value">{{ personalInfo.age }}</span>
            </div>
            <div class="info-item">
              <span class="info-label">Location:</span>
              <span class="info-value">{{ personalInfo.location }}</span>
            </div>
          </div>
          
          <h2>Bio</h2>
          <div class="bio">
            <p v-for="(paragraph, index) in bio" :key="index">{{ paragraph }}</p>
          </div>
          
          <div class="experience">
            <h2>Experience</h2>
            <div class="timeline">
              <div v-for="(exp, index) in experience" :key="index" class="timeline-item">
                <div class="timeline-date">{{ exp.period }}</div>
                <div class="timeline-content">
                  <h3>{{ exp.position }}</h3>
                  <h4>{{ exp.company }}</h4>
                  <p>{{ exp.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const fileInput = ref(null)
const imagePreview = ref(null)

const personalInfo = {
  name: 'Wahyu Kurnia Pratama',
  email: 'wahyukp2004@gmail.com',
  age: '21',
  location: 'Riau, Indonesia'
}

const bio = [
  'I am a 4th-semester university student with a strong passion for learning IT and web development.',
  'Currently, I am focusing on improving my frontend development skills and enjoy creating engaging and responsive user interfaces.',
  'In my free time, I love exploring new technologies, reading programming articles, and working on small projects to sharpen my skills.'
]

const experience = [
  {
    period: '2023 - Present',
    position: 'Frontend Web Developer (Student Projects)',
    company: 'Self-initiated & Academic Projects',
    description: 'Building responsive websites and UI components using HTML, CSS, JavaScript, Vue.js, and Tailwind CSS. Focused on clean code, modern UI/UX practices, and continuous learning through personal and team projects.'
  },
  {
    period: '2024',
    position: 'Project Member - Mental Health App',
    company: 'Rekayasa Perangkat Lunak Course',
    description: 'Collaborated in a team of 4 to design a mobile-based mental health app using the incremental development model. Responsible for the context diagram and part of the UI design.'
  },
  {
    period: '2023 - Present',
    position: 'Independent Learner & Hobbyist',
    company: 'Freelance Practice',
    description: 'Exploring real-world web development by creating mini projects, contributing to GitHub, and studying modern frontend frameworks and best practices.'
  }
]

// Load saved image from localStorage when component mounts
onMounted(() => {
  const savedImage = localStorage.getItem('profileImage')
  if (savedImage) {
    imagePreview.value = savedImage
  }
})

const triggerFileInput = () => {
  fileInput.value.click()
}

const handleImageUpload = (event) => {
  const file = event.target.files[0]
  if (file && file.type.match('image.*')) {
    const reader = new FileReader()
    reader.onload = (e) => {
      imagePreview.value = e.target.result
      // Save to localStorage
      localStorage.setItem('profileImage', e.target.result)
    }
    reader.readAsDataURL(file)
  }
}

// Function to clear profile image (optional)
const clearProfileImage = () => {
  imagePreview.value = null
  localStorage.removeItem('profileImage')
}
</script>

<style scoped>
.about {
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
  margin-bottom: 3rem;
}

.section-title span {
  color: var(--primary-color);
}

.about-content {
  display: flex;
  gap: 3rem;
}

.about-image {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-text {
  flex: 2;
}

.image-wrapper {
  position: relative;
  width: 100%;
  max-width: 350px;
  height: 350px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.upload-area {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  color: #888;
  cursor: pointer;
  transition: all 0.3s;
}

.upload-area:hover {
  background-color: #e0e0e0;
}

.clear-btn {
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.clear-btn:hover {
  background-color: #d32f2f;
}

h2 {
  color: var(--primary-color);
  margin: 1.5rem 0 1rem;
  font-size: 1.5rem;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.info-item {
  display: flex;
}

.info-label {
  font-weight: bold;
  margin-right: 0.5rem;
  min-width: 80px;
}

.bio p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

.timeline {
  position: relative;
  padding-left: 30px;
  margin-top: 1.5rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 0;
  height: 100%;
  width: 2px;
  background-color: var(--primary-color);
}

.timeline-item {
  position: relative;
  margin-bottom: 2rem;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-date {
  position: absolute;
  left: -30px;
  top: -20px;
  width: 100px;
  padding: 0.2rem 0.5rem;
  background-color: var(--primary-color);
  color: white;
  border-radius: 15px;
  font-size: 0.8rem;
  text-align: center;
}

.timeline-content {
  padding: 0.5rem 1rem;
  background-color: var(--card-bg);
  border-radius: 5px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
}

.timeline-content h3 {
  margin: 0 0 0.3rem;
  font-size: 1.1rem;
}

.timeline-content h4 {
  margin: 0 0 0.5rem;
  font-size: 0.9rem;
  color: #666;
}

.timeline-content p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.5;
}

@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }
  
  .image-wrapper {
    margin: 0 auto;
  }
  
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>