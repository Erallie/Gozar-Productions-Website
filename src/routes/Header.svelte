<script lang="ts">
    import { page } from "$app/state";
    import logo from "$lib/images/gozar-productions-logo.svg";
    import { type HeaderProps } from "$lib/types/types";
    import { onMount } from "svelte";

    let { title, subtitle, pretitle, children }: HeaderProps = $props();

    const initialPadding = 100; // Initial height of the header
    const finalPadding = 0;
    let scrolled = $state(false); // Flag to determine if the header is sticky
    let currentPadding = $state(initialPadding); // Current height of the header
    let textMultiplier = $state(1); // Multiplier for text size

    let ticking = false; // Flag to indicate if a scroll event is being processed

    // Function to handle scroll updates
    const updateScroll = () => {
        const scrollY = window.scrollY;

        // Calculate new padding based on scroll position
        const newPadding = Math.max(
            finalPadding,
            initialPadding - scrollY / 3.25,
        );

        // Only update if the value has changed
        if (newPadding !== currentPadding) {
            currentPadding = newPadding; // Update only if changed
            scrolled = currentPadding <= finalPadding; // Update scrolled flag
            textMultiplier =
                (currentPadding - finalPadding) /
                (initialPadding - finalPadding);
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

    onMount(() => {
        window.addEventListener("scroll", handleScroll);
        updateScroll();

        // Cleanup the event listener on component destroy
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<header>
    <div id="header-bar" class={scrolled ? "scrolled" : ""}>
        <div>
            <img src={logo} alt="Gozar Productions Logo" />
            <hgroup
                style="--header-padding: {currentPadding}px; --current-padding: {currentPadding}; --text-multiplier: {textMultiplier}; --initial-padding: {initialPadding}; --final-padding: {finalPadding}"
            >
                {#if pretitle}
                    <span>{pretitle}</span>
                {/if}
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </hgroup>
        </div>
        <nav class={scrolled ? "scrolled" : ""}>
            <ul>
                <li
                    aria-current={page.url.pathname === "/"
                        ? "page"
                        : undefined}
                >
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
    </div>
</header>
<section></section>

<style>
    section {
        height: 400px;
    }
    header {
        z-index: 50;
    }
    #header-bar {
        position: fixed;
        transition:
            height 1s,
            background-color 1s,
            text-shadow 1s;
        text-transform: uppercase;
        text-align: center;
        color: white;
        text-shadow: 0 0 4em black;
        width: 100%;
        top: 0;
        /* display: inline-flex;
        align-items: center; */
    }
    #header-bar > div {
        display: inline-flex;
        align-items: center;
        flex-grow: 1;
    }

    #header-bar.scrolled {
        background-color: rgba(255, 255, 255, 0.8);
        text-shadow: none;
    }

    hgroup > span:first-child {
        position: relative;
        z-index: 10;
    }
    hgroup {
        margin-right: auto;
        padding: 0px;
        padding-top: var(--header-padding);
        padding-bottom: var(--header-padding);
        will-change: padding-top, padding-bottom;
        max-width: 80dvw;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    #header-bar span:first-child,
    #header-bar h2 {
        height: calc(1em * var(--text-multiplier));
        overflow: visible;
        opacity: var(--text-multiplier);
        transition:
            margin-top 1s,
            margin-bottom 1s,
            font-size 1s;
        margin: 0px;
        margin-top: 1rem;
        margin-bottom: 1rem;
        will-change: height, opacity, margin-top, margin-bottom, font-size;
    }

    #header-bar.scrolled h2,
    #header-bar.scrolled span:first-child {
        margin-top: 0px;
        margin-bottom: 0px;
        font-size: 0px;
        transition:
            margin-top 1s,
            margin-bottom 1s,
            font-size 1s;
    }

    #header-bar h1 {
        --font-size-initial: 8.5vw;
        --font-size-final: 2rem;
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
        margin: 0px;
        margin-top: 1rem;
        margin-bottom: 0.5rem;
        transition:
            margin-top 1s,
            margin-bottom 1s,
            color 1s;
        will-change: font-size, margin-top, margin-bottom, color;
    }

    #header-bar.scrolled h1 {
        color: black;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    #header-bar img {
        aspect-ratio: 1/1;
        vertical-align: middle;
        margin: 1em auto;
        margin-right: 0.8em;
        opacity: 1;
        width: 3.5rem;
        transition:
            opacity 1s,
            width 1s,
            margin-right 1s;
        will-change: opacity, width, margin-right;
    }
    #header-bar:not(.scrolled) img {
        width: 0px;
        margin-right: 0px;
        opacity: 0;
        transition:
            opacity 1s,
            width 1s,
            margin-right 1s;
        will-change: opacity, width, margin-right;
    }

    nav {
        position: relative;
        display: flex;
        justify-content: center;
        height: 100%;
        flex-basis: auto;
        transition: background-color 1s;
        will-change: background-color;
    }

    nav:not(.scrolled) {
        background-color: rgba(255, 255, 255, 0.8);
        will-change: background-color;
    }

    ul {
        position: relative;
        padding: 0;
        margin: 0;
        height: 3em;
        display: flex;
        justify-content: center;
        align-items: center;
        list-style: none;
        flex-grow: 1;
    }

    li {
        position: relative;
        height: 100%;
        border-top-style: solid;
        border-top-color: rgba(0, 0, 0, 1);
        border-top-width: 1px;
        transition: border-top-color 1s;
        will-change: border-top-color;
    }
    nav:not(.scrolled) li {
        border-top-color: rgba(0, 0, 0, 0);
        border-top-width: 0px;
        transition:
            border-top-color 0.3s,
            border-top-width 0.3s;
        will-change: border-top-color, border-top-width;
    }

    li[aria-current="page"]::before {
        --size: 6px;
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: 0;
        left: calc(50% - var(--size));
        border: var(--size) solid transparent;
        border-top: var(--size) solid var(--color-theme-1);
    }

    nav a {
        display: flex;
        height: 100%;
        align-items: center;
        padding: 0 0.5rem;
        color: black;
        font-size: 0.8rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        text-decoration: none;
        transition: background-color 0.2s linear;
    }

    a:hover {
        background-color: rgba(0, 0, 0, 0.2);
    }
</style>
