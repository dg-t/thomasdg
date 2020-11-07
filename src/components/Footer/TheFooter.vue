<template>

	<footer class="page-footer container-fluid mb-0" v-if="!$route.meta.contactFooter">
		<div class="row custom text-white text-center">
			<div class="mt-5 icon-container w-100">
				<a href="https://www.linkedin.com/in/thomas-di-giovine-39589817b/" target="_blank" class="mx-4 my-3">
                    <i class="fab fa_custom fa-linkedin-in"></i>
                </a>
				<a href="https://github.com/dg-t?tab=repositories" target="_blank" class="mx-4 my-3">
                    <i class="fab fa-github fa_custom"></i>
                </a>
			</div>
            <p class="pb-4 mt-3 text-center w-100">Copyright © 2020 Thomas Di Giovine. All Rights Reserved.</p>
		</div>
	</footer>

    <footer class="page-footer container-fluid mb-0" v-if="$route.meta.contactFooter">
		<div class="row custom text-white text-center">
            <p class="py-3 my-3 text-center w-100">Copyright © 2020 Thomas Di Giovine. All Rights Reserved.</p>
		</div>
	</footer>

</template>

<script>
export default {
}
</script>

<style scoped>

footer {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(../../assets/footer/desktop-min.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;
    font-size: 60%;
    position:relative;
    height:auto;
}


.icon-container {
    display:flex;
    justify-content: center;

}


.fa_custom {
    font-size: 1.8em;
    width: 1.6em;
    text-align: center;
    line-height: 1.6em;
    background: #fff;
    color: #007bb5;
    border-radius: 0.8em;
}

i:hover {
    background: #007bb5;
    color: #fff;
}
/* Complete home page layout and footer */
</style>
