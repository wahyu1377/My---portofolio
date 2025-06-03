import { defineStore } from 'pinia'

export const useProjectStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        title: 'E-commerce Website',
        description: 'A full-featured online store with cart functionality and payment integration.',
        date: 'Jan 2023',
        technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
        tags: ['web'],
        image: 'https://via.placeholder.com/400x225/4a6fa5/ffffff?text=E-commerce',
        github: 'https://github.com',
        demo: 'https://example.com'
      },
      {
        id: 2,
        title: 'Task Management App',
        description: 'Productivity application for managing tasks with drag-and-drop functionality.',
        date: 'Mar 2023',
        technologies: ['React', 'Firebase', 'Material UI'],
        tags: ['web'],
        image: 'https://via.placeholder.com/400x225/166088/ffffff?text=Task+App',
        github: 'https://github.com'
      },
      {
        id: 3,
        title: 'Fitness Mobile App',
        description: 'Cross-platform mobile application for tracking workouts and nutrition.',
        date: 'Jun 2023',
        technologies: ['Flutter', 'Firebase'],
        tags: ['mobile'],
        image: 'https://via.placeholder.com/400x225/4cb944/ffffff?text=Fitness+App',
        demo: 'https://example.com'
      },
      {
        id: 4,
        title: 'Portfolio Website Design',
        description: 'Modern UI/UX design for a creative portfolio website.',
        date: 'Aug 2023',
        technologies: ['Figma', 'Photoshop'],
        tags: ['design'],
        image: 'https://via.placeholder.com/400x225/ff715b/ffffff?text=Portfolio+Design'
      }
    ]
  }),
  actions: {
    addProject(project) {
      this.projects.push(project)
      this.saveToLocalStorage()
    },
    deleteProject(id) {
      this.projects = this.projects.filter(project => project.id !== id)
      this.saveToLocalStorage()
    },
    saveToLocalStorage() {
      localStorage.setItem('projects', JSON.stringify(this.projects))
    },
    loadFromLocalStorage() {
      const savedProjects = localStorage.getItem('projects')
      if (savedProjects) {
        this.projects = JSON.parse(savedProjects)
      }
    }
  }
})