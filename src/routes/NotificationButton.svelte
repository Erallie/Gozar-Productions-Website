<script lang="ts">
	import { type ButtonProps } from "$lib/types/types";
	let { link, newTab, children }: ButtonProps = $props();

	// Function to determine if the link is absolute
	/* function isAbsoluteUrl(url: string) {
        return /^(http|https):\/\//.test(url) || url.startsWith("www");
    } */
</script>

<a href={link} target={newTab ? "_blank" : undefined}>
	<button class="notification-button">
		{@render children()}
	</button>
</a>

<style>
	a {
		text-decoration: none;
	}
	button {
		/* border: 2px solid rgb(var(--text-color)); */
		border: none;
		/* padding: 10px; */
		margin: 4px 0px;
		border-radius: 10px;
		background: none;
		color: rgb(var(--text-color));
		transition: color 1s;
		display: flex;
		justify-content: center; /* horizontal center */
		align-items: center; /* vertical center */
	}
</style>
