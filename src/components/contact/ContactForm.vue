<template>
  <section class="container-fluid">
    <div class="form-heading">
      <div class="icon-contact">
        <h4>Send me an Email</h4>
        <i class="fa fa-envelope ml-4 fa_custom" aria-hidden="true"></i>
      </div>
    </div>

    <div class="row">
      <div class="col-md-7">
        <form 
            :action="'mailto:thomas.dg.101@gmail.com?subject=Lets Talk - ' + userName.validatedName + '&body=' + userMessage.validatedMessage + ''" 
            method="post" 
            enctype="text/plain" 
            ref="anyName"
            target="_blank"
            @submit="formSubmit"
            class="form-text section-color">
            
          <div class="row pt-2">
            <div class="form-group col-md-6 form-input-group">
              <input 
                  id="user-name" 
                  type="text" 
                  class="form-control" 
                  placeholder="Your Name *"
                  v-model="userName.name" 
                  @blur="validateName" />

                <transition name="fade" class="validation">
                    <p v-if="!userName.isValidated" class="validation">This field is required.</p>                    
                </transition>
            </div>

            <div class="form-group col-md-6 form-input-group">
              <input 
                  id="user-email" 
                  type="email" 
                  class="form-control" 
                  placeholder="E-mail *"
                  v-model="userEmail.email" 
                  @blur="validateEmail" />
                
                <transition name="fade" class="validation">
                    <p v-if="!userEmail.isValidated" class="validation">This field is required.</p>
                </transition>
            </div>
          </div>

          <div class="form-group pt-4">
            <textarea 
                class="form-control form-text" 
                id="user-message" 
                rows="3" 
                placeholder="Your message *"
                v-model="userMessage.message"
                @blur="validateMessage"></textarea>

            <transition name="fade" class="validation">
              <p v-if="!userMessage.isValidated" class="validation">This field is required.</p>
            </transition>
          </div>

          <div class="button-container pt-3">
            <button type="submit">SEND</button>
          </div>

        </form>
      </div>

      <div class="col-md-5 postman-image">
          <img src="../../assets/contact/postman.jpg" alt="Postman">
      </div>

    </div>
  </section>



</template> 

<script>

export default {
  data() {
    return {
      userMessage: {
        message: "",
        validatedMessage: "",
        isValidated: true
      },
      userName: {
        name: "",
        validatedName: "",
        isValidated: true,
      },
      userEmail: {
        email: "",
        validatedEmail: "",
        isValidated: true
      }
    }
  },
  methods: {
    validateName() {
      this.userName.name.length == "" ? this.userName.isValidated = false : this.userName.isValidated = true;
    },
    validateEmail() {
      this.userEmail.email.length == "" ? this.userEmail.isValidated = false : this.userEmail.isValidated = true;
    },
    validateMessage() {
      this.userMessage.message.length == "" ? this.userMessage.isValidated = false : this.userMessage.isValidated = true;
    },
    formSubmit(e) {
      this.validateName();
      this.validateEmail();
      this.validateMessage();
      if (!this.userName.isValidated || !this.userEmail.isValidated || !this.userMessage.isValidated) {
        e.preventDefault();
        return
      } else if (this.userName.isValidated && this.userEmail.isValidated && this.userMessage.isValidated) {
        let savedMessage = JSON.parse(JSON.stringify(this.userMessage.message));
        let savedName = JSON.parse(JSON.stringify(this.userName.name));
        let newMessage = savedMessage.replace(/\r\n|\r|\n/g, "%0D%0A");
        this.userMessage.message = ""
        this.userName.name = ""
        this.userEmail.email = ""

        this.userMessage.validatedMessage = newMessage; 
        this.userName.validatedName = savedName ;
        return
      } 
    }
  }
}
</script>

<style scoped>

/** GLOBAL */
section {
  overflow-x: hidden;
}

/** FORM */

form {
  margin: 5% auto;
  width: 80%;
  max-width:900px;
  height:auto;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
}

/** HEADING */

.form-heading {
  display:flex;
  justify-content: center;
  padding-top: 5%;
}

/** FORM INPUTS */

.form-input-group {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;

} 

input,
textarea {
  width: 100%;
  padding:10px;
  font-size: 90%;
}

input:focus,
textarea:focus {
  outline: none;
  box-shadow: 0 1px 1px rgba(229, 103, 23, 0.1) inset, 0 0 5px rgba(0, 170, 255, 0.3);
}

/** TEXTAREA */

.form-text {
  white-space: pre-wrap;
}

/** VALIDATION TEXT */
.validation {
  font-size: 60%;
  color:rgba(255, 0, 0, 0.7);
  font-style: italic;
  text-decoration: underline;
  width:100%;
  padding:5px;
  margin-left: 2%;
}

/** BUTTON */
.button-container {
  display:flex;
  justify-content: center;
}


button {
  padding: 5px 20px;
  color: white;
  background-color: #07c;
  border-radius: 20px;
  transition: 0.6s;
  box-shadow: 1px 2px 2px  #888888;
  text-decoration: none;
}

button:focus {
  outline:none;
  box-shadow: 0 0 3px 2px #0af;
}


button:hover {
  background-color: #0af;
  transition: all 0.5s ease;
}

/** ICON */

.icon-container {
    display:flex;
    justify-content: center;
    border: 1px solid rgba(0, 170, 255, 0.4);
    padding:10%;
    margin-top: 10%;

}

.icon-contact {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
}

.fa_custom {
    font-size: 1.8em;
    width: 1.6em;
    text-align: center;
    line-height: 1.6em;
    background: #fff;
    color: #007bb5;
    border-radius: 0.8em;
    transition: all 0.5s ease;
}

.fa_custom:hover {
    background: #007bb5;
    color: #fff;
    transition: all 0.5s ease;
}

/** IMAGE POSTMAN */

.postman-image {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

img {
    height: 400px;
}

/** ADD TRANSITION TO VALIDATION */

.fade-enter-from {
    opacity:0;
    transform:translateY(-8px);
}

.fade-enter-active {
    font-size: 60%;
    color:#f00;
    font-style: italic;
    text-decoration: underline;
    width:100%;
    padding:5px;
    margin-left: 2%;
    transition: all 0.5s ease-out;
}

.fade-leave-active {
    font-size: 60%;
    color:#f00;
    font-style: italic;
    text-decoration: underline;
    width:100%;
    padding:5px;
    margin-left: 2%;
    transition: all 0.5s ease-out;
}

.fade-leave-to {
    opacity:0;
    transform:translateY(-8px);
}

/** MEDIA QUERY */

@media only screen and (max-width: 767px) {
  .postman-image {
    display:none;
  }
}

@media only screen and (max-width: 500px) {
  form {
    margin: 5% auto;
    width: 90%;
    padding: 0.8rem !important;
  }
  button {
    font-size: 90%;
  }
}

</style>


