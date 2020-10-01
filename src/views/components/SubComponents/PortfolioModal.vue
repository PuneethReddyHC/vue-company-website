<template>
      <div class="portfolio_overlay">
				<div class="portfolio_overlay__reveal"></div>
				<div class="portfolio_overlay__item" id="portfolio_1">
					<div class="box">
						<div class="box__shadow"></div>
						<img class="box__img box__img--original" src="@/assets/img/hero/hero_right.png" alt="portfolio title"/>
						<h3 class="box__title"><span class="box__title-inner">portfolio title</span></h3>
						<h4 class="box__text"><span class="box__text-inner">portfolio title</span></h4>
						<div class="box__deco">&#10014;</div>
					</div>
					<p class="portfolio_overlay__content">This is about portfolio</p>
				</div>
				
				<button class="portfolio_overlay__close"><img class="icon icon--cross" src="@/assets/img/close.svg"></button>
		</div>
</template>
<script>

export default {};
</script>
<style scoped>




@import url('https://fonts.googleapis.com/css?family=Anton|Buenard:400,700');


.icon path{
	display: block;
	width: 1.5em;
	height: 1.5em;
	margin: 0 auto;
	fill: currentColor;
}


.box {
	position: relative;
	margin: 2rem;
}

.box__title {
	margin: 0;
	line-height: 1;
	position: absolute;
	z-index: 100;
}

.box__title-inner {
	display: none;
	position: relative;
	font-weight: normal;
	text-transform: uppercase;
	font-size: 2.15rem;
	letter-spacing: 0.15rem;
	line-height: 1.25;
	font-family: 'Anton', sans-serif;
}

.box__title-inner[data-hover] {
	-webkit-text-stroke: 2px #000;
	text-stroke: 2px #000;
	-webkit-text-fill-color: transparent;
	text-fill-color: transparent;
	color: transparent;
}

.box__title-inner::before {
	content: attr(data-hover);
	position: absolute;
	top: 0;
	left: 0;
	height: 0;
	overflow: hidden;
	white-space: nowrap;
	-webkit-text-stroke: 0;
	text-stroke: 0;
	-webkit-text-fill-color: #000;
	text-fill-color: #000;
	color: #000;
	transition: all 0.3s;
}


.box__text {
	margin: 0;
	position: absolute;
	top: -6rem;
	font-weight: normal;
	text-transform: uppercase;
	letter-spacing: 0.15rem;
	font-size: 1.75rem;
	margin: 0.5rem 1rem;
	font-family: 'Anton', sans-serif;
	display: block;
}

.box__text-inner {
	position: relative;
	display: block;
	border: 6px solid var(--color-text);
	padding: 1.25rem 1.25rem;
}

.box__text-inner--reverse {
	background: var(--color-text);
	color: var(--color-bg);
}

.box__img {
	display: block;
	flex: none;
	margin: 0 auto;
	max-width: 100%;
	filter: grayscale(1);
	transition: filter 0.3s;
	pointer-events: none;
}



.box__shadow {
	position: absolute;
	width: 100%;
	height: 100%;
	top: -1rem;
	left: -1rem;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAOklEQVQoU43MSwoAMAgD0eT+h7ZYaOlHo7N+DNHL2HAGgBWcyGcKbqTghTL4oQiG6IUpOqFEC5bI4QD8PAoKd9j4XwAAAABJRU5ErkJggg==);
}

.box__deco {
	font-size: 6rem;
	line-height: 1;
	font-weight: bold;
	position: absolute;
	bottom: -4rem;
	right: -4rem;
	display: none;
}

.box__content {
	position: absolute;
	max-width: 195px;
	font-size: 0.9rem;
	text-align: right;
	display: none;
}

.box__content strong {
	white-space: nowrap;
}

.portfolio_overlay {
	pointer-events: none;
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;
	overflow: hidden;
}

.portfolio_overlay--open {
	pointer-events: auto;
}

.portfolio_overlay__reveal {
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: #000;
	position: absolute;
	z-index: 100;
	transform: translate3d(100%,0,0);
}

.portfolio_overlay__item {
	width: 100%;
	height: 100vh;
	position: absolute;
	top: 0;
	left: 0;
	background: var(--color__bg);
	opacity: 0;
	display: flex;
	flex-direction: column;
    align-items: center;
    padding: 5rem 5vw;
    justify-content: center;
}

.portfolio_overlay__item .box {
	max-width: 600px;
	max-height: 100%;
	margin: 0;
}

.portfolio_overlay__item .box__title {
	bottom: 0;
}

.box__img--original {
	max-height: calc(100vh - 10rem);
	filter: none;
}

.portfolio_overlay__close {
	position: absolute;
	top: 0;
	right: 0;
	background: none;
	border: 0;
	margin: 1rem;
	padding: 1rem;
	opacity: 0;
}

.portfolio_overlay__close:focus {
	outline: none;
}

.portfolio_overlay__content {
	font-size: 1.2rem;
	line-height: 1.3;
	max-width: 25rem;
	margin: 1rem 0 0 10vw;
	overflow: scroll;
}

@media screen and (min-width: 55em) {
	
	.box {
		margin: 4rem;
	}
	.box__title {
		top: -4rem;
		right: -5.5rem;
		-webkit-writing-mode: vertical-rl;
		writing-mode: vertical-rl;
	}
	.box__title--straight {
		-webkit-writing-mode: horizontal-tb;
		writing-mode: horizontal-tb;
	}
	.box__title--straight .box__title-inner::before {
		width: 0;
		height: auto;
	}
	.box__title--bottom {
		bottom: -5rem;
		top: auto;
	}
	.box__title--left {
		left: -2rem;
		right: auto;
	}
	.box__text--topcloser {
		top: -5rem;
	}
	.box__text--bottom {
		bottom: -5rem;
		top: auto;
	}
	.box__text--bottomcloser {
		bottom: -5rem;
		top: auto;
	}
	.box__text--right {
		right: 0;
		left: auto;
	}
	.box__text-inner--rotated1 {
		transform: rotate(4deg);
	}
	.box__text-inner--rotated2 {
		transform: rotate(-3deg);
	}
	.box__text-inner--rotated3 {
		transform: rotate(-15deg);
	}
	.box__deco {
		display: block;
	}
	.box__deco--left {
		right: auto;
		left: -3rem;
	}
	.box__deco--top {
		top: 0;
		bottom: auto;
	}
	.portfolio_overlay__item {
		flex-direction: row;
	}
	.portfolio_overlay__content {
		font-size: 1.25rem;
		margin-top: 0;
	}
	.portfolio_overlay__item .box__title--bottom {
		bottom: 0;
	}
	.box__text {
		display: none;
	}
	.box__title-inner {
		display: block;
	}
}

@media screen and (min-width: 80em) {
	
	.box {
		margin: 6rem 4.5rem;
	}
	.box__content {
		display: block;
	}
	
}

@media screen and (min-width: 536px) and (max-width: 880px) {
	.portfolio_overlay__item {
		height: 115vh;
	}
	.portfolio_overlay__content {
		max-width: 33rem;
	}
}
</style>
