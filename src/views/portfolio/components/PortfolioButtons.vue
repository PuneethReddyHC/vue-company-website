<template>
    <section class=" mt-80 pt-5">

        <!-- portfolio Menu -->
        <div class="portfolio-menu text-center mb-80">
            <button class="portfolio_button raise" data-filter="*">All portfolio</button>
            <button class="portfolio_button raise" data-filter=".ux-ui-design">UX/UI Design</button>
            <button class="portfolio_button raise" data-filter=".market-analytics">Market Analytics</button>
            <button class="portfolio_button raise" data-filter=".marketing-social">Marketing Social</button>
        </div>
    
    </section>
</template>
<script>
export default {};
</script>
<style scoped>

.clearfix{clear:both;}


.raise:hover, .raise:focus {
	box-shadow: 0 0.5em 0.5em -0.4em #e5ff60;
	transform: translateY(-0.25em);
}
.raise {
	--color: #ffa260;
	--hover: #e5ff60;
}
.portfolio_button {
	border: 2px solid;
	color: #21D4FD;
	transition: 0.25s;
}
.portfolio_button:hover, .portfolio_button:focus {
	border-color: #e5ff60;
	color: #a1ee14;
}
.portfolio_button {
	background: none;
	font: inherit;
	line-height: 1;
	margin: 0.5em;
	padding: 1em 2em;
}
@media  (max-width: 400px) {
    .portfolio_button {
		padding: 6px 6px;
	}
}
@media (min-width: 400px) and (max-width: 991px) {
    .portfolio_button {
		padding: 8px 8px;
	}
}

</style>
