<template>
  <div class="skills">
    <div class="container">
      <h1 class="section-title">My <span>Skills</span></h1>
      
      <div class="skills-intro">
        <p>Here are the technologies and tools I work with. I'm always learning and adding new skills to my toolkit.</p>
      </div>
      
      <div class="skills-categories">
        <div class="category" v-for="(category, index) in skills" :key="index">
          <h2>{{ category.name }}</h2>
          <div class="skill-items">
            <div class="skill-item" v-for="(skill, skillIndex) in category.items" :key="skillIndex">
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-percent">{{ skill.level }}%</span>
              </div>
              <div class="skill-bar">
                <div 
                  class="skill-progress" 
                  :style="{ width: skill.level + '%', backgroundColor: getProgressColor(skill.level) }"
                  :data-level="skill.level"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="other-skills">
        <h2>Other Skills</h2>
        <div class="skill-tags">
          <span v-for="(skill, index) in otherSkills" :key="index">{{ skill }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const skills = [
  {
    name: 'Frontend',
    items: [
      { name: 'HTML/CSS', level: 95 },
      { name: 'JavaScript', level: 70 },
      { name: 'Vue.js', level: 65 }
    ]
  },
  {
    name: 'Tools & Others',
    items: [
      { name: 'Git', level: 85 },
      { name: 'Figma', level: 75 },
      { name: 'Bootsrap', level: 85}
    ]
  }
]

const otherSkills = [
  'Responsive Design', 'Java',
  'MySQL', 'Vite'
]

const getProgressColor = (level) => {
  if (level >= 80) return '#4CAF50' // Green
  if (level >= 60) return '#FFC107' // Yellow
  return '#F44336' // Red
}
</script>

<style scoped>
.skills {
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

.skills-intro {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
}

.skills-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.category {
  background-color: var(--card-bg);
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.category h2 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.3rem;
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.skill-item {
  margin-bottom: 1rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
}

.skill-name {
  font-weight: 500;
}

.skill-percent {
  color: #666;
}

.skill-bar {
  height: 10px;
  background-color: #eee;
  border-radius: 5px;
  overflow: hidden;
}

.skill-progress {
  height: 100%;
  border-radius: 5px;
  transition: width 1s ease-in-out;
}

.other-skills {
  margin-top: 3rem;
}

.other-skills h2 {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 1.5rem;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
}

.skill-tags span {
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

@media (max-width: 768px) {
  .skills-categories {
    grid-template-columns: 1fr;
  }
}
</style>