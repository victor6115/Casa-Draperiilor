<template>
  <div class="contact-page-wrapper">
    <main class="container my-4 my-md-5">
      <h1 class="mb-4 mb-md-5 display-5 fw-bold">
        {{ $t('contactPage.pageTitle') }}
      </h1>

      <section class="row g-5 mb-5">
        <div class="col-lg-5">
          <h2 class="h4 fw-bold mb-4">{{ $t('contactPage.infoSectionTitle') }}</h2>
          
          <div class="d-flex mb-3 contact-detail-item">
            <div class="contact-icon-bs me-3 fs-4 text-primary">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div>
              <strong class="d-block">{{ $t('contactPage.address.title') }}</strong>
              <p class="mb-0">{{ $t('contactPage.address.street') }}</p>
            </div>
          </div>

          <div class="d-flex mb-3 contact-detail-item">
            <div class="contact-icon-bs me-3 fs-4 text-primary">
              <i class="fas fa-phone-alt"></i>
            </div>
            <div>
              <strong class="d-block">{{ $t('contactPage.phone.title') }}</strong>
              <p class="mb-0">{{ $t('contactPage.phone.number1') }}</p>
              <p class="mb-0">{{ $t('contactPage.phone.number2') }}</p>
            </div>
          </div>

          <div class="d-flex mb-3 contact-detail-item">
            <div class="contact-icon-bs me-3 fs-4 text-primary">
              <i class="fas fa-envelope"></i>
            </div>
            <div>
              <strong class="d-block">{{ $t('contactPage.email.title') }}</strong>
              <p class="mb-0">{{ $t('contactPage.email.address1') }}</p>
              <p class="mb-0">{{ $t('contactPage.email.address2') }}</p>
            </div>
          </div>

          <div class="d-flex mb-4 contact-detail-item">
            <div class="contact-icon-bs me-3 fs-4 text-primary">
              <i class="fas fa-clock"></i>
            </div>
            <div>
              <strong class="d-block">{{ $t('contactPage.hours.title') }}</strong>
              <p class="mb-0">{{ $t('contactPage.hours.lnV') }}</p>
              <p class="mb-0">{{ $t('contactPage.hours.s') }}</p>
              <p class="mb-0">{{ $t('contactPage.hours.d') }}</p>
            </div>
          </div>
          
          <hr class="my-4">
          
          <h3 class="h5 fw-bold mb-3">{{ $t('contactPage.locationTitle') }}</h3>
          <div class="map-container-bs ratio ratio-16x9 rounded overflow-hidden shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.026861040606!2d28.854254438033497!3d47.042417402486315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97c55c5592dd1%3A0x5822e7f3a14cf791!2sStrada%20Nadejda%20Russo%2017%2C%20Chi%C8%99in%C4%83u%2C%20Moldova!5e1!3m2!1sro!2s!4v1747379873597!5m2!1sro!2s" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>

        <div class="col-lg-7">
          <div class="bg-light p-4 p-md-5 rounded shadow-sm">
            <h2 class="h4 fw-bold mb-4">{{ $t('contactPage.formSectionTitle') }}</h2>
            <form @submit.prevent="submitForm">
              <div class="row g-3 mb-3">
                <div class="col-md-6">
                  <label for="contactName" class="form-label">
                    {{ $t('contactPage.form.nameLabel') }} <span class="text-danger">*</span>
                  </label>
                  <input type="text" class="form-control" id="contactName" v-model="formData.name" required>
                </div>
                <div class="col-md-6">
                  <label for="contactEmail" class="form-label">
                    {{ $t('contactPage.form.emailLabel') }} <span class="text-danger">*</span>
                  </label>
                  <input type="email" class="form-control" id="contactEmail" v-model="formData.email" required>
                </div>
              </div>
              <div class="row g-3 mb-3">
                <div class="col-md-6">
                  <label for="contactPhone" class="form-label">{{ $t('contactPage.form.phoneLabel') }}</label>
                  <input type="tel" class="form-control" id="contactPhone" v-model="formData.phone">
                </div>
                <div class="col-md-6">
                  <label for="contactSubject" class="form-label">
                    {{ $t('contactPage.form.subjectLabel') }} <span class="text-danger">*</span>
                  </label>
                  <select class="form-select" id="contactSubject" v-model="formData.subject" required>
                    <option value="" disabled>{{ $t('contactPage.form.selectSubject') }}</option>
                    <option value="info">{{ $t('contactPage.form.generalInfo') }}</option>
                    <option value="order">{{ $t('contactPage.form.orderInquiry') }}</option>
                    <option value="support">{{ $t('contactPage.form.support') }}</option>
                  </select>
                </div>
              </div>
              <div class="mb-3">
                <label for="contactMessage" class="form-label">
                  {{ $t('contactPage.form.messageLabel') }} <span class="text-danger">*</span>
                </label>
                <textarea class="form-control" id="contactMessage" rows="5" v-model="formData.message" required></textarea>
              </div>
              <div class="form-check mb-4">
                <input class="form-check-input" type="checkbox" id="privacyCheck" v-model="formData.privacy" required>
                <label class="form-check-label" for="privacyCheck">
                  <i18n-t keypath="contactPage.form.privacyPolicy">
                    <template #policyLink>
                      <a href="/privacy-policy" class="text-primary text-decoration-underline">{{ $t('contactPage.form.policyLinkText') }}</a>
                    </template>
                  </i18n-t>
                </label>
              </div>
              <button type="submit" class="btn btn-primary btn-lg px-4">
                <i class="fas fa-paper-plane me-2"></i>{{ $t('contactPage.form.sendButton') }}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section class="my-5 pt-5 border-top">
        <h2 class="h4 fw-bold mb-4 text-center">{{ $t('contactPage.faqSectionTitle') }}</h2>
        <div class="row g-4">
          <div v-for="faq in faqs" :key="faq.id" class="col-md-6 col-lg-4">
            <div class="border rounded p-3 h-100">
              <h3 class="h6 fw-semibold mb-2">{{ $t(faq.questionKey) }}</h3>
              <p class="small text-muted mb-0">{{ $t(faq.answerKey) }}</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-4">
          <router-link to="/faq" class="btn btn-outline-primary">
            {{ $t('contactPage.viewAllFaqs') }} <i class="fas fa-arrow-right ms-1"></i>
          </router-link>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  privacy: false,
});

const faqs = ref([
  { id: 'faq1', questionKey: 'contactPage.faq1.q', answerKey: 'contactPage.faq1.a' },
  { id: 'faq2', questionKey: 'contactPage.faq2.q', answerKey: 'contactPage.faq2.a' },
  { id: 'faq3', questionKey: 'contactPage.faq3.q', answerKey: 'contactPage.faq3.a' },
]);

const submitForm = () => {
  if (!formData.value.privacy) {
    alert(t('contactPage.form.privacyPolicy'));
    return;
  }
  console.log('Form submitted:', formData.value);
  alert('Message sent (simulated)!');
  formData.value = { name: '', email: '', phone: '', subject: '', message: '', privacy: false };
};

const addBootstrapCDN = () => {
  const bootstrapCSS = document.createElement('link');
  bootstrapCSS.id = 'bootstrap-css-cdn';
  bootstrapCSS.rel = 'stylesheet';
  bootstrapCSS.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css';
  bootstrapCSS.integrity = 'sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM';
  bootstrapCSS.crossOrigin = 'anonymous';
  document.head.appendChild(bootstrapCSS);

  let faCSS = document.getElementById('fontawesome-css-cdn');
  if (!faCSS) {
      faCSS = document.createElement('link');
      faCSS.id = 'fontawesome-css-cdn';
      faCSS.rel = 'stylesheet';
      faCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
      document.head.appendChild(faCSS);
  }
};

const removeBootstrapCDN = () => {
  const bootstrapCSS = document.getElementById('bootstrap-css-cdn');
  if (bootstrapCSS) bootstrapCSS.remove();
  
};

onMounted(() => {
  addBootstrapCDN();
});

onUnmounted(() => {
  removeBootstrapCDN();
});

</script>

<style scoped>
.contact-icon-bs {
    width: 24px;
    text-align: center;
}
.map-container-bs {
  height: 350px;
}

.form-label {
  font-weight: 500; 
  margin-bottom: 0.5rem;
}
.form-control, .form-select {
  font-size: 1rem;
}
</style>