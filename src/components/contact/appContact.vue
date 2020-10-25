<template>
  <header>
    <base-heading>
      Contact Me
    </base-heading>
  </header>

  <contact-form></contact-form>
  <contact-socials></contact-socials>

</template> 

<script>
import ContactForm from './ContactForm.vue'
import ContactSocials from './ContactSocials.vue'

export default {
  components: {
    ContactSocials,
    ContactForm
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/** TODO REMOVE MARGIN TOP FOR MOBILE */
header {
  background-color: #f4f4f4;
  margin-top:90px;
  letter-spacing: 5px;
  word-spacing: 2px;
}

</style>


