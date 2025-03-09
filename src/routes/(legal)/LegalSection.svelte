<script lang="ts">
	import { type LegalSectionProps } from "$lib/types/types";
	import { onMount } from "svelte";
	import { barFinalHeight } from "../stores";

	let { title, children }: LegalSectionProps = $props();

	let id = title
		.toLowerCase()
		.replaceAll(" ", "-")
		.replaceAll("'", "")
		.replaceAll("&", "and");
</script>

<section
	{id}
	style="
        scroll-margin-top: {$barFinalHeight}px"
>
	<h2><a href="#{id}">{title}</a></h2>
	{@render children()}
</section>

<style>
	section {
		width: 80%;
		margin: 60px auto;
	}

	a {
		color: inherit;
		font-weight: inherit;
	}
</style>
