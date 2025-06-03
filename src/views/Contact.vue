<template>
  <div class="contact">
    <div class="container">
      <h1 class="section-title">Get In <span>Touch</span></h1>
      
      <div class="contact-content">
        <div class="contact-info">
          <h2>Contact Information</h2>
          <p>Feel free to reach out to me for any questions or opportunities!</p>
          
          <div class="info-items">
            <div class="info-item">
              <font-awesome-icon icon="envelope" />
              <span>wahyukp2004@gmail.com</span>
            </div>
            <div class="info-item">
              <font-awesome-icon icon="phone" />
              <span>+62 823 512 437 24</span>
            </div>
            <div class="info-item">
              <font-awesome-icon :icon="['fab', 'github']" />
              <span>https://github.com/wahyu1377</span>
            </div>
            <div class="info-item">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
              <span>https://www.linkedin.com/in/wahyu-kurnia-pratama-8191052a0/4</span>
            </div>
          </div>
          
          <div class="social-links">
            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'github']" /></a>
            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'linkedin']" /></a>
            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'twitter']" /></a>
            <a href="#" target="_blank"><font-awesome-icon :icon="['fab', 'instagram']" /></a>
          </div>
        </div>
        
        <div class="contact-form">
          <h2>Send Me a Message</h2>
          <form @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                @blur="validateField('name')"
                :class="{ 'error': errors.name }"
              >
              <span class="error-message" v-if="errors.name">{{ errors.name }}</span>
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email" 
                @blur="validateField('email')"
                :class="{ 'error': errors.email }"
              >
              <span class="error-message" v-if="errors.email">{{ errors.email }}</span>
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                @blur="validateField('subject')"
                :class="{ 'error': errors.subject }"
              >
              <span class="error-message" v-if="errors.subject">{{ errors.subject }}</span>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                @blur="validateField('message')"
                :class="{ 'error': errors.message }"
              ></textarea>
              <span class="error-message" v-if="errors.message">{{ errors.message }}</span>
            </div>
            
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const errors = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const isSubmitting = ref(false)

const validateField = (field) => {
  if (field === 'name') {
    errors.value.name = form.value.name.trim() === '' ? 'Name is required' : ''
  }
  
  if (field === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    errors.value.email = form.value.email.trim() === '' 
      ? 'Email is required' 
      : !emailRegex.test(form.value.email) 
        ? 'Please enter a valid email' 
        : ''
  }
  
  if (field === 'subject') {
    errors.value.subject = form.value.subject.trim() === '' ? 'Subject is required' : ''
  }
  
  if (field === 'message') {
    errors.value.message = form.value.message.trim() === '' ? 'Message is required' : ''
  }
}

const validateForm = () => {
  validateField('name')
  validateField('email')
  validateField('subject')
  validateField('message')
  
  return !Object.values(errors.value).some(error => error !== '')
}

const submitForm = () => {
  if (validateForm()) {
    isSubmitting.value = true
    
    // Simulate API call
    setTimeout(() => {
      alert('Message sent successfully!')
      form.value = { name: '', email: '', subject: '', message: '' }
      isSubmitting.value = false
    }, 1500)
  }
}
</script>

<style scoped>
.contact {
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

.contact-content {
  display: flex;
  gap: 3rem;
}

.contact-info {
  flex: 1;
}

.contact-form {
  flex: 2;
}

.contact-info h2,
.contact-form h2 {
  color: var(--primary-color);
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.contact-info p {
  line-height: 1.6;
  margin-bottom: 2rem;
}

.info-items {
  margin-bottom: 2rem;
}

.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.info-item svg {
  width: 20px;
  margin-right: 15px;
  color: var(--primary-color);
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-links a {
  color: var(--text-color);
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-links a:hover {
  color: var(--primary-color);
}

form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 0.5rem;
  font-weight: 500;
}

input,
textarea {
  padding: 0.8rem;
  border: 1px solid var(--border-color);
  border-radius: 5px;
  background-color: var(--card-bg);
  color: var(--text-color);
  transition: border-color 0.3s;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

textarea {
  min-height: 150px;
  resize: vertical;
}

.error {
  border-color: #f44336;
}

.error-message {
  color: #f44336;
  font-size: 0.8rem;
  margin-top: 0.3rem;
}

.submit-btn {
  padding: 0.8rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;
  align-self: flex-start;
}

.submit-btn:hover:not(:disabled) {
  background-color: var(--secondary-color);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

@media (max-width: 768px) {
  .contact-content {
    flex-direction: column;
  }
}
</style>