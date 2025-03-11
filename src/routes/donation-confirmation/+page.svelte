<script lang="ts">
	import Button from "../Button.svelte";
</script>

<section id="donation-confirmation">
	<hgroup>
		<h1>Thank you</h1>
		<h2>for donating!</h2>
	</hgroup>
	<Button
		link="https://discord.com/channels/1102582171207741480/1210774986076196865/1210778804755107950"
		newTab
	>
		View Your Benefits
	</Button>
</section>

<style>
	section {
		color: white;
		text-shadow: 0px 0px 1.2em black;

		--text-color: 255, 255, 255;
		--shadow-color: 0, 0, 0;
		display: flex;
		/* width: 100%; */
		/* height: 100%; */
		flex-direction: column;
		justify-content: center;
		padding: 80px 20px;
		/* position: absolute;
		top: 0;
		left: 0; */
		& h1 {
			font-size: max(8.5vw, 2.5rem);
		}
		& h2 {
			font-size: max(6vw, 2rem);
		}
		& h1,
		& h2 {
			line-height: 1.2rem;
		}
		text-align: center;
	}
</style>
