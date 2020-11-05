<template>
  <div>
    <header>
      <base-heading>
        Contact Me
      </base-heading>
    </header>

    <contact-form></contact-form>
    <contact-socials></contact-socials>
  </div>
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
  transition: all 0.1s ease-in;
  overflow-x: hidden;
  padding-bottom:2px;
}

@media only screen and (max-width: 767px)  {
  header {
    padding-bottom:0;
  }
}

@media only screen and (max-width: 575px)  {
  header {
    margin-top:0;
    transition: all 0.1s ease-in;
  }
}

</style>


