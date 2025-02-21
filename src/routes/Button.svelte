<script lang="ts">
    import logo from "$lib/images/button-arrow.svg";
    let { children } = $props();
</script>

<button>{@render children()}<img src={logo} alt="→" /></button>

<style>
    button {
        font-family: Montserrat;
        --text-color: 0, 0, 0;
        border-radius: 50px;
        padding: 16px 28px;
        border: 2px solid rgb(var(--text-color));
        background-color: rgba(var(--text-color), 0);
        text-align: center;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        font-size: 15px;
        margin: 20px;
        transition: background-color 0.3s;
    }
    button > img {
        aspect-ratio: 200 / 60;
        height: 0.8em;
        vertical-align: middle;
        transform: translate(0, -1px);
        padding-left: 0.5em;
        transition: height 0.3s;
    }

    button:hover {
        background-color: rgba(var(--text-color), 0.15);
    }
    button:hover > img {
        height: 1em;
    }
</style>
