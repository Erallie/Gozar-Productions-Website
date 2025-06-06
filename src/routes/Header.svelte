<script lang="ts">
	import { page } from "$app/state";
	import logo from "$lib/images/gozar-productions-logo.svg";
	import { type HeaderProps } from "$lib/types/types";
	import { onMount } from "svelte";
	import {
		barInitialHeight,
		barFinalHeight,
		initialHeightSet,
	} from "./stores";
	import LightDarkSwitcher from "./LightDarkSwitcher.svelte";

	let {
		title,
		subtitle,
		pretitle,
		isDarkMode = $bindable(),
		children,
	}: HeaderProps = $props();

	const initialPadding = 100; // Initial height of the header
	const finalPadding = 0;
	let scrolled = $state(false); // Flag to determine if the header is sticky
	let currentPadding = $state(initialPadding); // Current height of the header
	let textMultiplier = $state(1); // Multiplier for text size
	let isHome = $state(true);

	let ticking = false; // Flag to indicate if a scroll event is being processed

	let headerBar: HTMLHeadingElement;

	// Function to handle scroll updates
	const updateScroll = () => {
		const scrollY = window.scrollY;

		// Calculate new padding based on scroll position
		const newPadding = Math.max(
			finalPadding,
			initialPadding - scrollY / 3.25
		);

		// Only update if the value has changed
		if (newPadding !== currentPadding) {
			currentPadding = newPadding; // Update only if changed
			scrolled = currentPadding <= finalPadding; // Update scrolled flag
			textMultiplier =
				(currentPadding - finalPadding) /
				(initialPadding - finalPadding);

			if (currentPadding == finalPadding) {
				setTimeout(() => {
					barFinalHeight.set(headerBar!.offsetHeight);
				}, 100);
			} else if (!$initialHeightSet && scrollY == 0) {
				setTimeout(() => {
					if (scrollY == 0) {
						barInitialHeight.set(headerBar!.offsetHeight);
						initialHeightSet.set(true);
					}
				}, 100);
			}
		}

		// Reset the ticking flag
		ticking = false;
	};

	// Scroll event handler
	const handleScroll = () => {
		if (!ticking) {
			ticking = true; // Set the ticking flag to true
			window.requestAnimationFrame(updateScroll);
		}
	};

	$effect(() => {
		const relativeUrl = page.url.pathname;

		if (relativeUrl === "/" || relativeUrl === "") {
			if (!$initialHeightSet && window.scrollY == 0) {
				setTimeout(() => {
					if (scrollY == 0) {
						barInitialHeight.set(headerBar!.offsetHeight);
						initialHeightSet.set(true);
					}
				}, 100);
			}
			isHome = true;
			window.addEventListener("scroll", handleScroll);
			updateScroll();

			// Cleanup the event listener on component destroy
			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		} else {
			scrolled = true;
			currentPadding = finalPadding;
			textMultiplier = 0;
			isHome = false;
			setTimeout(() => {
				barFinalHeight.set(headerBar!.offsetHeight);
			}, 100);
		}
	});

	/* let menuOpen = $state(false);

	function openMenu() {
		menuOpen = !menuOpen;
	} */
</script>

<header>
	<div
		id="header-bar"
		bind:this={headerBar}
		class={scrolled ? "scrolled" : ""}
	>
		<div class="backdrop"></div>
		<LightDarkSwitcher bind:isDarkMode addedClass="desktop-switcher" />
		<div>
			<img src={logo} alt="Gozar Productions Logo" />
			<hgroup
				style="--header-padding: {currentPadding}px; --current-padding: {currentPadding}; --text-multiplier: {textMultiplier}; --initial-padding: {initialPadding}; --final-padding: {finalPadding}"
			>
				{#if pretitle}
					<span class="pretitle">{pretitle}</span>
				{/if}
				<h1>{title}</h1>
				<h2>{subtitle}</h2>
			</hgroup>
		</div>
		<hr />
		<nav class={scrolled ? "scrolled" : ""}>
			<div class="backdrop"></div>
			<!-- <button aria-label="menu" onclick={openMenu}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="100"
					height="100"
					viewBox="0 0 100 100"
				>
					<g
						stroke="currentColor"
						stroke-width="5"
						stroke-linecap="round"
					>
						<line x1="2.5" y1="20" x2="97.5" y2="20" />
						<line x1="2.5" y1="50" x2="97.5" y2="50" />
						<line x1="2.5" y1="80" x2="97.5" y2="80" />
					</g>
				</svg>
			</button> -->
			<ul>
				<li
					aria-current={page.url.pathname === "/"
						? "page"
						: undefined}
				>
					<a href="/">Home</a>
				</li>
				<li
					aria-current={page.url.pathname === "/#about"
						? "page"
						: undefined}
				>
					<a href="/#about">About</a>
				</li>
				<li
					aria-current={page.url.pathname.startsWith("/#watch")
						? "page"
						: undefined}
				>
					<a href="/#watch">Watch</a>
				</li>
				<li
					aria-current={page.url.pathname.startsWith("/#music")
						? "page"
						: undefined}
				>
					<a href="/#music">Our Music</a>
				</li>
				<li
					aria-current={page.url.pathname.startsWith("/#code")
						? "page"
						: undefined}
				>
					<a href="/#code">Our Code</a>
				</li>
				<li
					aria-current={page.url.pathname.startsWith(
						"/#get-notified"
					) ||
					page.url.pathname.startsWith("/#donate") ||
					page.url.pathname.startsWith("/#contact")
						? "page"
						: undefined}
				>
					<span>More</span>
					<ul>
						<div class="backdrop"></div>
						<li
							aria-current={page.url.pathname.startsWith(
								"/#get-notified"
							)
								? "page"
								: undefined}
						>
							<a href="/#get-notified">Get Notified</a>
						</li>
						<li
							aria-current={page.url.pathname.startsWith(
								"/#donate"
							)
								? "page"
								: undefined}
						>
							<a href="/#donate">Donate</a>
						</li>
						<li
							aria-current={page.url.pathname.startsWith(
								"/#contact"
							)
								? "page"
								: undefined}
						>
							<a href="/#contact">Contact</a>
						</li>
					</ul>
				</li>
			</ul>
			<LightDarkSwitcher bind:isDarkMode addedClass="mobile-switcher" />
		</nav>
	</div>
</header>
<section
	style="height: {isHome ? `${$barInitialHeight}px` : `${$barFinalHeight}px`}"
></section>

<style>
	div.backdrop {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: -1;
	}
	header {
		z-index: 50;
	}
	#header-bar {
		position: fixed;
		transition: height 1s;
		text-transform: uppercase;
		text-align: center;
		color: white;
		width: 100%;
		top: 0;
		& > div:not(.backdrop) {
			display: inline-flex;
			align-items: center;
			flex-grow: 1;
		}
		& > div.backdrop {
			transition: background-color 1s;
		}

		& .pretitle,
		& h2 {
			height: calc(1em * var(--text-multiplier));
			overflow: visible;
			opacity: var(--text-multiplier);
			text-shadow: 0 0 0.6em black;
			transition:
				margin-top 1s,
				margin-bottom 1s,
				font-size 1s,
				text-shadow 1s;
			margin: 1rem 0px;
			line-height: 1em;
			will-change:
				height, opacity, margin-top, margin-bottom, font-size,
				text-shadow;
		}
		& h1 {
			--font-size-initial: max(8.5vw, 2rem);
			--font-size-final: min(2rem, 8.5vw);
			font-size: calc(
				(
						var(--font-size-initial) *
							(var(--current-padding) - var(--final-padding)) /
							(var(--initial-padding) - var(--final-padding))
					) +
					(
						var(--font-size-final) *
							(var(--initial-padding) - var(--current-padding)) /
							(var(--initial-padding) - var(--final-padding))
					)
			);
			line-height: 1em;
			margin: 1rem 0px 0.5rem;
			text-shadow: 0 0 3rem black;
			transition:
				margin-top 1s,
				margin-bottom 1s,
				color 1s,
				text-shadow 1s;
			will-change:
				font-size, margin-top, margin-bottom, color, text-shadow;
		}
		& hr {
			width: 0px;
			border: none;
			border-top: 1px solid rgba(var(--foreground));
			margin: -1px auto;
			transition:
				width 1s,
				border-color 1s;
		}

		&.scrolled {
			& > div.backdrop {
				background-color: rgba(var(--background), 0.7);
				backdrop-filter: blur(5px);
			}

			& h2,
			& .pretitle {
				margin-top: 0px;
				margin-bottom: 0px;
				font-size: 0px;
				text-shadow: none;
				transition:
					margin-top 1s,
					margin-bottom 1s,
					font-size 1s,
					text-shadow 1s;
			}
			& h1 {
				color: rgb(var(--foreground));
				margin-top: 0px;
				margin-bottom: 0px;
				text-shadow: none;
			}
			& hr {
				width: 200px;
			}
		}
		& img {
			aspect-ratio: 1/1;
			vertical-align: middle;
			margin: 1em 1rem;
			margin-right: 0.8em;
			opacity: 1;
			width: 3.5rem;
			transition:
				opacity 1s,
				width 1s,
				margin-right 1s;
			will-change: opacity, width, margin-right;
		}
		&:not(.scrolled) img {
			width: 0px;
			margin-right: 0px;
			opacity: 0;
			transition:
				opacity 1s,
				width 1s,
				margin-right 1s;
			will-change: opacity, width, margin-right;
		}
	}

	hgroup {
		margin-right: 1rem;
		padding: var(--header-padding) 0px;
		will-change: padding-top, padding-bottom;
		max-width: 80dvw;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		& > .pretitle {
			position: relative;
			z-index: 10;
		}
	}

	nav {
		position: relative;
		display: flex;
		justify-content: center;
		height: 100%;
		flex-basis: auto;
		/* will-change: background-color; */
		text-shadow: none;
		word-break: keep-all;
		& > div.backdrop {
			transition: background-color 1s;
		}
		& li {
			position: relative;
			height: 100%;
		}
		&:not(.scrolled) {
			& > div.backdrop {
				background-color: rgba(var(--background), 0.7);
				backdrop-filter: blur(5px);
				will-change: background-color;
			}
			& li {
				border-top-color: rgba(var(--foreground), 0);
				border-top-width: 0px;
				transition:
					border-top-color 0.3s,
					border-top-width 0.3s;
				will-change: border-top-color, border-top-width;
			}
		}
		& ul {
			list-style-type: none;
			padding: 0px;
			/* text-align: center; */
			/* position: relative; */
			& > div.backdrop {
				background-color: rgba(var(--background), 0.7);
				backdrop-filter: blur(5px);
			}
		}
		& > ul {
			/* position: relative; */
			padding: 0;
			margin: 0;
			height: 3em;
			display: flex;
			justify-content: center;
			align-items: center;
			list-style: none;
			flex-grow: 1;
			& li {
				width: max-content;
				&:hover {
					cursor: default;
					& > a {
						background-color: rgba(var(--foreground), 0.2);
					}
					& > ul {
						display: block;
					}
				}
			}
			& > li {
				& ul {
					display: none; /* Hide nested ul by default */
					position: absolute;
					/* background-color: rgba(var(--background), 0.7); */
					& li {
						min-width: 100%;
						height: 40px;
						margin: auto;
					}
				}
			}
		}
		& a,
		& span {
			display: flex;
			height: 100%;
			align-items: center;
			padding: 0 0.5rem;
			color: rgb(var(--foreground));
			font-size: 0.8rem;
			text-transform: uppercase;
			letter-spacing: 0.1em;
			text-decoration: none;
			transition:
				background-color 0.2s linear,
				color 1s;
			font-weight: initial;
			&:hover {
				background-color: rgba(var(--foreground), 0.2);
			}
		}
	}

	@media (max-width: 484px) {
		nav {
			/* display: none; */
			/* height: max-content; */
			& ul {
				/* display: none; */
				/* flex-direction: column; */
				flex-wrap: wrap;
				height: min-content;
				li {
					height: 40px;
				}
				/* &.open {
					display: flex;
				} */
			}
		}
	}

	@media (max-width: 480px) {
		/* Styles for mobile devices */
		hgroup {
			max-width: 92dvw;
		}

		#header-bar h1 {
			--font-size-initial: 11.24vw;
			/* --font-size-final: calc(
				9.2dvw - (1rem + 0.8rem + 3.5rem + 1rem + 1rem + 0.5rem) / 100
			); */
			--font-size-final: 8.3vw;
			/* --font-size-final: calc(
				9.2dvw - ((1rem + 0.8rem + 3.5rem + 1rem) / 100)
			); */
			/* --font-size-final: calc(9.2dvw - (100.8px) / 100); */
			/* --font-size-final: clamp(1.25rem, 2vw + 1rem, 8.3vw); */
		}
	}
	@media (max-width: 320px) {
		#header-bar h1 {
			--font-size-final: calc(
				9.2dvw - (1rem + 0.8rem + 3.5rem + 1rem + 1rem + 0.5rem) / 100
			);
		}
	}
</style>
