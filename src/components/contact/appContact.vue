<template>
  <contact-heading></contact-heading>

  <contact-form></contact-form>
  <contact-socials></contact-socials>

  <contact-footer></contact-footer>
</template> 

<script>
import ContactHeading from './ContactHeading.vue'
import ContactForm from './ContactForm.vue'
import ContactFooter from '../Footer/ContactFooter.vue'
import ContactSocials from './ContactSocials.vue'

export default {
  components: {
    ContactHeading,
    ContactFooter,
    ContactSocials,
    ContactForm
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>


