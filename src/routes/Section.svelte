<script lang="ts">
    import logo from "$lib/images/button-arrow.svg";
    import {
        type SectionProps,
        SectionType,
        TextColor,
    } from "$lib/types/types";
    import { text } from "@sveltejs/kit";
    let { id, type, backgroundSource, textColor, children }: SectionProps =
        $props();

    import { barFinalHeight } from "./stores";

    // svelte-ignore non_reactive_update
    let color: string;
    // svelte-ignore non_reactive_update
    let shadowColor: string;
    switch (textColor) {
        case TextColor.White:
            color = "255, 255, 255";
            shadowColor = "0, 0, 0";
            break;
        case TextColor.Black:
            color = "0, 0, 0";
            shadowColor = "255, 255, 255";
            break;
    }
</script>

<section
    {id}
    class={type}
    style="
        {type === SectionType.Image
        ? `--image-src: url(${backgroundSource});`
        : ''}
        --text-color: {color};
        --shadow-color: {shadowColor}; scroll-margin-top: {type !==
    SectionType.First
        ? `${$barFinalHeight}px`
        : '0px'}
    "
>
    {#if type == SectionType.Video}
        <video autoplay muted loop>
            <source src={backgroundSource} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    {/if}
    <div>
        {@render children()}
    </div>
</section>

<style>
    section {
        color: rgb(var(--text-color));
        width: 100%;
        padding: 5rem 0px;
    }
    section > div {
        max-width: min(90%, 25rem);
        text-align: center;
        margin-left: auto;
        margin-right: auto;
    }

    section.first {
        background-image: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.45) 37.5%,
            rgba(255, 255, 255, 0.9) 75%
        );
        padding-top: 15rem;
    }

    section.white {
        background-color: rgba(255, 255, 255, 0.8);
    }

    section.image {
        background-image: var(--image-src);
        background-attachment: fixed;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    section.image,
    section.video {
        text-shadow: 0 0 2em rgb(var(--shadow-color));
    }

    section.video {
        position: relative;
        overflow: hidden;
    }

    section.video > video {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        z-index: -1; /* Place video behind content */
        transform: translate(-50%, -50%);
        object-fit: cover; /* Ensures the video covers the entire area */
        /* Optional: You can also set a max-width and max-height if needed */
        max-width: none; /* Prevents the video from being constrained */
        max-height: none; /* Prevents the video from being constrained */
    }

    section.video > div {
        position: relative;
        z-index: 1; /* Ensure content is above the video */
        color: white; /* Change text color for visibility */
        text-align: center; /* Center the text */
        padding: 20px; /* Add some padding */
    }
</style>
