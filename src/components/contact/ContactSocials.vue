<template>
    <section>
        <div class="row icon-container section-color">

            <div class="col-md-3 col-sm-6 icon-contact">
                <p class="description">LinkedIn</p>
                <a href="https://www.linkedin.com/in/thomas-di-giovine-39589817b/" target="_blank" class=""> 
                    <i class="fab fa_custom fa-linkedin-in"></i>
                </a>
            </div>

            <div class="col-md-3 col-sm-6 icon-contact">
                <p class="description">GitHub</p>
                <a href="https://github.com/dg-t?tab=repositories" target="_blank" class="">
                    <i class="fab fa-github fa_custom"></i>
                </a>
            </div>

            <div class="col-md-3 col-sm-6 icon-contact">
                <p class="description">E-mail</p>
                <a href="mailto:thomas.dg.101@gmail.com" target="_blank" class=""> 
                    <i class="fa fa-envelope-open fa_custom" aria-hidden="true"></i>
                </a>
            </div>

            <div class="col-md-3 col-sm-6 icon-contact">
                <p class="description">WhatsApp</p>
                <a href="https://wa.me/34627133240" target="_blank" class="">
                    <i class="fa fa-whatsapp fa_custom" aria-hidden="true"></i>
                </a>
            </div>

        </div>
    </section>
</template>

<script>
export default {
}
</script>

<style scoped>

/** GLOBAL */
section {
    overflow-x: hidden;
}

/** CONTAINER ICONS */

.icon-container {
    display:flex;
    justify-content: center;
    border: 1px solid rgba(0, 170, 255, 0.4);
    padding:10%;
    margin-top: 10%;
}

/** ICONS STYLE */
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

/** DESCRIPTION ICONS */
.description {
    letter-spacing: 1px;
}

/** MEDIA QUERY */

@media only screen and (max-width: 500px) {

    /** CONTAINER ICONS */
    .icon-container {
        padding:20px !important;
    }
}
</style>
