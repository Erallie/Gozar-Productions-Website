<script lang="ts">
    import { page } from "$app/state";
    import logo from "$lib/images/gozar-productions-logo.svg";
    import { type HeaderProps } from "$lib/types/types";
    let { title, subtitle, pretitle, children }: HeaderProps = $props();

    import { onMount } from "svelte";

    const initialPadding = 100; // Initial height of the header
    const finalPadding = 0;
    let scrolled = $state(false); // Flag to determine if the header is sticky
    let currentPadding = $state(initialPadding); // Current height of the header
    let titleMultiplier = $state(1);
    let miscTextMultiplier = $state(1);

    onMount(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            currentPadding = initialPadding - scrollY / 2; // Decrease height based on scroll
            if (currentPadding <= finalPadding) {
                currentPadding = finalPadding; // Ensure it doesn't go below 60px
                scrolled = true;
            } else {
                scrolled = false;
            }
            miscTextMultiplier =
                (currentPadding - finalPadding) /
                (initialPadding - finalPadding);
            titleMultiplier =
                (currentPadding -
                    finalPadding +
                    (initialPadding - finalPadding) * 0.5 -
                    (currentPadding - finalPadding) * 0.5) /
                (initialPadding - finalPadding);
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup the event listener on component destroy
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<header>
    <div class="bar {scrolled ? 'scrolled' : ''}">
        <img src={logo} alt="Gozar Productions Logo" />
        <hgroup
            style="--header-padding: {currentPadding}px;--title-multiplier: {titleMultiplier}; --misc-text-multiplier: {miscTextMultiplier}"
        >
            {#if pretitle}
                <span>{pretitle}</span>
            {/if}
            <h1>
                {title}
            </h1>
            <h2>{subtitle}</h2>
        </hgroup>
    </div>

    <nav class={scrolled ? "scrolled" : ""}>
        <ul>
            <li aria-current={page.url.pathname === "/" ? "page" : undefined}>
                <a href="/">Home</a>
            </li>
            <li
                aria-current={page.url.pathname === "#about"
                    ? "page"
                    : undefined}
            >
                <a href="#about">About</a>
            </li>
            <li
                aria-current={page.url.pathname.startsWith("#watch")
                    ? "page"
                    : undefined}
            >
                <a href="#watch">Watch</a>
            </li>
            <li
                aria-current={page.url.pathname.startsWith("#music")
                    ? "page"
                    : undefined}
            >
                <a href="#music">Our Music</a>
            </li>
            <li
                aria-current={page.url.pathname.startsWith("#code")
                    ? "page"
                    : undefined}
            >
                <a href="#code">Our Code</a>
            </li>
            <li
                aria-current={page.url.pathname.startsWith("#contact")
                    ? "page"
                    : undefined}
            >
                <a href="#contact">Contact</a>
            </li>
            <li
                aria-current={page.url.pathname.startsWith("#donate")
                    ? "page"
                    : undefined}
            >
                <a href="#donate">Donate</a>
            </li>
        </ul>
    </nav>
</header>
<section></section>

<style>
    section {
        height: 400px;
    }
    header {
        z-index: 50;
    }
    div.bar {
        position: fixed;
        transition:
            height 0.3s,
            background-color 0.3s;
        text-transform: uppercase;
        text-align: center;
        color: white;
        text-shadow:
            0 0 5em black,
            0 0 7em black,
            0 0 9em black;
        /* line-height: 1rem; */
        width: 100%;
        top: 0;

        display: inline-flex;
        align-self: center;
        align-content: center;
        align-items: center;
    }

    div.bar.scrolled {
        background-color: rgba(255, 255, 255, 0.8);
    }

    hgroup > span:first-child {
        position: relative;
        z-index: 10;
    }
    hgroup {
        margin-right: auto;
        padding: var(--header-padding) 0px;
        height: 100%;
        display: flex; /* Use flexbox for hgroup */
        flex-direction: column; /* Stack items vertically */
        align-items: center; /* Center items horizontally */
        justify-content: center; /* Center items vertically */
        height: 100%; /* Ensure it takes full height */
    }

    div.bar span:first-child,
    div.bar h2 {
        height: calc(1em * var(--misc-text-multiplier));
        overflow: visible;
        opacity: calc(1 * var(--misc-text-multiplier));
        transition:
            opacity 0.3s,
            margin 0.3s;
        margin: 1rem 0px;
    }

    div.bar.scrolled h2,
    div.bar.scrolled span:first-child {
        margin: 0px;
        font-size: 0px;
    }

    div.bar h1 {
        font-size: calc(4rem * var(--title-multiplier));
        line-height: 1em;
        margin: 1rem 0px 0.5rem;
        transition:
            margin 0.3s,
            color 0.3s;
    }

    div.bar.scrolled h1 {
        color: black;
        margin: 0px;
    }

    div.bar > img {
        aspect-ratio: 1/1;
        vertical-align: middle;
        /* transform: translate(0px, -4px); */
        margin: 1em auto;
        margin-right: 0.8em;
        opacity: 1;
        width: 3.5rem;
        transition:
            opacity 0.3s,
            width 0.3s,
            margin-right 0.3s;
    }
    div.bar:not(.scrolled) img {
        width: 0px;
        margin-right: 0px;
        opacity: 0;
        transition:
            opacity 0.3s,
            width 0.3s,
            margin-right 0.3s;
    }

    nav:not(.scrolled) {
        display: none;
    }

    nav.scrolled {
        position: fixed;
        top: 0px;
        right: 0px;
    }
</style>
