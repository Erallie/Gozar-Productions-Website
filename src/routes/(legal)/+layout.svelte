<script lang="ts">
    import { page } from "$app/state";

    function getTitle() {
        let name = page.url.pathname;
        return name.replace("-", " ").slice(1);
    }

    let title = $derived(getTitle());

    let { children } = $props();
</script>

<h1>{title}</h1>
<div class="content">
    {@render children()}
</div>

<style>
    h1 {
        font-size: 2.5rem;
        margin: 2em 0px;
        color: white;
        text-shadow: 0 0 0.6em black;
    }

    div.content {
        max-width: 90%;
        width: 900px;
        margin: 0 auto;
        background-color: rgba(59, 23, 23, 0.85);
        color: white;
    }
</style>
