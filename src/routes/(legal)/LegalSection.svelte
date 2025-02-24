<script lang="ts">
    import { type LegalSectionProps } from "$lib/types/types";
    import { onMount } from "svelte";

    let { id, children }: LegalSectionProps = $props();
</script>

<section {id}>
    {@render children()}
</section>

<style>
    section {
        width: 80%;
        margin: 60px auto;
    }
</style>
