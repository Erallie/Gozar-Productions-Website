<script lang="ts">
	import Button from "./Button.svelte";
	import Section from "./Section.svelte";
	import { SectionType, TextColor } from "$lib/types/types";

	const title = "Gozar Productions";
	const description =
		"Gozar Productions is a small film company on YouTube creating short films and music videos with a passion for music. Birthed from a young girl's aspirations and pet projects, this small company endeavors to share our passions with the world for all to enjoy.";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="{title}: A Musical Film Company" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/website-preview.png" />
	<meta property="og:image:width" content="2500" />
	<meta property="og:image:height" content="1330" />
	<meta property="og:url" content="https://www.gozarproductions.com" />
	<meta property="og:site_name" content={title} />
	<meta property="og:type" content="website" />
</svelte:head>

<Section id="about" type={SectionType.First} textColor={TextColor.Black}>
	<h2>Who we are</h2>
	<p>
		Gozar Productions is a small film company on YouTube creating short
		films and music videos with a passion for music. Birthed from a young
		girl's aspirations and pet projects, this small company endeavors to
		share our passions with the world for all to enjoy.
	</p>
</Section>

<Section
	id="watch"
	type={SectionType.Video}
	backgroundSource="/watch-background.mp4"
	textColor={TextColor.White}
>
	<h2>Watch us on YouTube</h2>
	<p>
		We believe in keeping our content as accessible as possible, even if it
		means less money for us. The best way to do that is through YouTube,
		where you can find all the videos we've made throughout the years.
	</p>
	<Button link="https://youtube.com/GozarProductions" newTab={true}>
		Watch us now
	</Button>
</Section>

<Section
	id="music"
	type={SectionType.Image}
	backgroundSource="/music-background.png"
	textColor={TextColor.Black}
>
	<h2>Our music</h2>
	<p>
		The genius behind our original music is the mind of a young girl named
		Erika Gozar. She writes all of our original scores with simply an ear
		for music and no formal training in composition.
	</p>
	<Button link="https://music.gozarproductions.com" newTab={false}>
		Listen now
	</Button>
</Section>

<Section
	id="code"
	type={SectionType.Image}
	textColor={TextColor.White}
	backgroundSource="/code-background.png"
>
	<h2>Our code</h2>
	<p>
		Along with our musical and cinematic endeavors, we also create a number
		of code-based tools, ranging from Discord bots to VR aids. We aim to
		make our projects free for all to use.
	</p>
	<Button link="https://github.com/Erallie" newTab={true}
		>View our projects</Button
	>
</Section>

<Section id="contact" type={SectionType.White} textColor={TextColor.Black}>
	<h2>Contact us</h2>
	<p>We're always here to answer your questions!</p>

	<div class="columns">
		<div>
			<h3>Gozar Productions</h3>
			<hr />
			<a href="mailto:contact@gozarproductions.com"
				>contact@gozarproductions.com</a
			>
		</div>
		<span class="or">- or -</span>
		<div>
			<Button
				link="https://discord.gg/cCCEk7BX4W"
				newTab={true}
				customSVG
				marginTopMultiplier={0}
				marginBottomMultiplier={0.5}
			>
				Join our Discord
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="127.14px"
					height="96.36px"
					viewBox="0 0 127.14 96.36"
				>
					<path
						fill="currentColor"
						d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
					/>
				</svg>
			</Button>
			<br />
			<Button
				link="mailto:contact@gozarproductions.com"
				newTab={false}
				customSVG
				marginTopMultiplier={0.5}
				marginBottomMultiplier={0}
			>
				Send an email
				<svg
					width="20px"
					height="14px"
					viewBox="2 5 20 14"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g id="SVGRepo_bgCarrier" stroke-width="0" />
					<g
						id="SVGRepo_tracerCarrier"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<g id="SVGRepo_iconCarrier">
						<path
							fill-rule="evenodd"
							clip-rule="evenodd"
							d="M2.272 6.365C2 6.9 2 7.6 2 9v6c0 1.4 0 2.1.272 2.635a2.5 2.5 0 0 0 1.093 1.092C3.9 19 4.6 19 6 19h12c1.4 0 2.1 0 2.635-.273a2.5 2.5 0 0 0 1.092-1.092C22 17.1 22 16.4 22 15V9c0-1.4 0-2.1-.273-2.635a2.5 2.5 0 0 0-1.092-1.093C20.1 5 19.4 5 18 5H6c-1.4 0-2.1 0-2.635.272a2.5 2.5 0 0 0-1.093 1.093zM4.647 7h14.706a.5.5 0 0 1 .278.916l-7.075 4.732a1 1 0 0 1-1.112 0L4.369 7.916A.5.5 0 0 1 4.647 7z"
							fill="currentColor"
						/>
					</g>
				</svg>
			</Button>
		</div>
	</div>
</Section>

<Section
	id="donate"
	type={SectionType.Image}
	textColor={TextColor.White}
	backgroundSource="/donate-background.png"
>
	<h2>Donate</h2>
	<p>
		Being a small company, we don't really make any money. So it's difficult
		to provide for the resources necessary to make great videos. If you
		pitch in even just a dollar or two, it could help us reach great
		heights.
	</p>
	<Button
		link="https://www.paypal.com/donate/?hosted_button_id=PHHGM83BQZ8MA"
		newTab={false}>Donate</Button
	>
</Section>

<style>
	div.columns {
		display: flex;
		flex-wrap: wrap;
		padding: 10px 0px;
		& > * {
			padding: 10px 0px;
			flex-grow: 1;
		}
		& > :first-child {
			margin: auto 20px;
		}
		& > :last-child {
			margin: auto 0px;
		}
		& > .or {
			white-space: nowrap;
			text-transform: uppercase;
			flex-grow: 0;
			flex-shrink: 0;
			margin: auto;
		}
		& h3 {
			margin-top: 0px;
			margin-bottom: 0.5em;
			font-weight: 700;
		}
	}

	hr {
		border-top: 1px solid black;
		width: 50%;
	}
	@media (max-width: 809px) {
		.or {
			width: 100%;
		}
	}
</style>
