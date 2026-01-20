<script lang="ts">
	import Button from "./Button.svelte";
	import Section from "./Section.svelte";
	import { SectionType, TextColor } from "$lib/types/types";
	/* import Donate from "./Donate.svelte"; */

	const title = "Gozar Productions";
	const description =
		"Gozar Productions is a small film company on YouTube creating short films and music videos with a passion for music. Birthed from a young girl's aspirations and pet projects, this small company endeavors to share our passions with the world for all to enjoy.";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta property="og:title" content="{title}: A Musical Film Company" />
	<meta property="og:description" content={description} />
	<meta property="og:image" content="/website-preview.webp" />
	<meta property="og:image:width" content="2500" />
	<meta property="og:image:height" content="1330" />
	<meta property="og:image:type" content="image/webp" />
	<meta property="og:url" content="https://www.gozarproductions.com" />
	<meta property="og:site_name" content={title} />
	<meta property="og:type" content="website" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="{title}: A Musical Film Company" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content="/website-preview.webp" />
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
	backgroundSource="/watch-background.webm"
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
	backgroundSource="/music-background-lighter-35.webp"
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
	backgroundSource="/code-background.webp"
>
	<h2>Our code</h2>
	<p>
		Along with our musical and cinematic endeavors, we also create a number
		of code-based tools, ranging from Discord bots and Obsidian plugins to
		VR aids. We aim to make our projects free for all to use.
	</p>
	<Button link="https://github.com/Erallie" newTab={true}
		>View our projects</Button
	>
</Section>
<Section
	id="merch"
	type={SectionType.Image}
	textColor={TextColor.Black}
	backgroundSource="/shop-background.webp"
>
	<h2>Our Merch</h2>
	<p>
		We offer merchandise and high-quality downloads through our online
		store. All proceeds directly support the creation of bigger and better
		projects.
	</p>
	<Button link="https://ko-fi.com/gozarproductions/shop" newTab={true}
		>Browse Shop</Button
	>
</Section>

<Section
	id="assets"
	type={SectionType.Video}
	textColor={TextColor.White}
	backgroundSource="/vr-assets-background-2.webm"
>
	<h2>Our VR Assets</h2>
	<p>
		We just recently started selling assets for VR games like <a
			href="https://hello.vrchat.com/"
			target="_blank"
			class="light-override">VRChat</a
		>. While our collection is still small, we offer unique items that can
		add a bit of magic to your VR gaming experience.
	</p>
	<div class="columns horizontal-container">
		<Button link="https://erallie.booth.pm/" newTab={true} columns={true}
			>Visit Booth</Button
		>
		<Button link="https://erallie.gumroad.com/" newTab={true} columns={true}
			>Visit Gumroad</Button
		>
		<Button link="https://jinxxy.com/Erallie" newTab={true} columns={true}
			>Visit Jinxxy</Button
		>
	</div>
</Section>

<Section
	id="disney"
	type={SectionType.Image}
	textColor={TextColor.White}
	backgroundSource="/disney-ball-background.webp"
>
	<h2>Our Disney Balls</h2>
	<p>
		Unaffiliated with Gozar Productions or The Walt Disney Company, we throw
		Disney-themed balls in the metaverse through <a
			href="https://hello.vrchat.com/"
			target="_blank"
			class="light-override">VRChat</a
		>. With beautiful music, breathtaking performances, and a new King and
		Queen announced each time, each event is a night you won't want to miss!
	</p>
	<Button link="https://disney.gozarproductions.com" newTab={false}
		>Learn More</Button
	>
</Section>

<Section id="get-notified" type={SectionType.White} textColor={TextColor.Black}>
	<h2>Get Notified</h2>
	<p>
		We share frequent updates on our current projects and seek active input
		from our Discord community. Join our server to be the first to know
		about our latest works or to get involved in the things we do. Or follow
		us on Facebook or Twitter!
	</p>

	<div class="columns notified">
		<div>
			<Button
				link="https://discord.gozarproductions.com/"
				newTab={true}
				customSVG
				columns={true}
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
		</div>
		<span class="or">- or -</span>
		<div class="two-horizontal-buttons">
			<Button
				link="https://facebook.com/GozarProductions"
				newTab={true}
				columns={true}
				customSVG
				>View our Facebook
				<svg
					version="1.0"
					xmlns="http://www.w3.org/2000/svg"
					width="2143.000000pt"
					height="2143.000000pt"
					viewBox="0 0 2143.000000 2143.000000"
					preserveAspectRatio="xMidYMid meet"
				>
					<metadata>
						Created by potrace 1.16, written by Peter Selinger
						2001-2019
					</metadata>
					<g
						transform="translate(0.000000,2143.000000) scale(0.100000,-0.100000)"
						fill="currentColor"
						stroke="none"
					>
						<path
							d="M10115 21369 c-1118 -64 -2202 -296 -3245 -697 -416 -160 -990 -430
-1375 -648 -1717 -970 -3119 -2372 -4089 -4089 -140 -247 -391 -755 -501
-1015 -498 -1170 -773 -2354 -845 -3635 -13 -236 -13 -915 0 -1152 99 -1754
605 -3410 1498 -4903 217 -363 559 -855 816 -1175 1638 -2040 3919 -3397 6471
-3850 109 -19 199 -35 201 -35 2 0 4 1679 4 3730 l0 3730 -1355 0 -1355 0 0
1545 0 1545 1355 0 1354 0 4 1393 c4 1479 3 1446 53 1792 183 1273 792 2233
1769 2787 449 255 1011 426 1615 493 613 67 1625 16 2693 -135 154 -22 281
-40 283 -40 2 0 4 -591 4 -1314 l0 -1315 -797 -4 c-853 -4 -892 -6 -1118 -59
-583 -135 -971 -513 -1109 -1078 -55 -228 -56 -248 -56 -1431 l0 -1089 1475 0
c1331 0 1475 -2 1475 -16 0 -16 -456 -3001 -466 -3047 l-6 -27 -1239 0 -1239
0 -2 -3730 -3 -3730 25 5 c14 2 81 14 149 25 861 144 1812 441 2637 823 825
383 1635 893 2324 1466 491 408 1013 930 1421 1421 1286 1547 2115 3461 2363
5460 61 490 80 811 80 1345 0 535 -19 855 -80 1345 -320 2575 -1591 4962
-3558 6685 -562 492 -1219 954 -1871 1315 -229 127 -695 355 -935 457 -1170
501 -2363 780 -3639 853 -209 11 -975 11 -1186 -1z"
						/>
					</g>
				</svg>
			</Button>
			<Button
				link="https://x.com/ErikaGozar"
				newTab={true}
				columns={true}
				customSVG
				>View our Twitter <svg
					width="1200"
					height="1227"
					viewBox="0 0 1200 1227"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
						fill="currentColor"
					/>
				</svg>
			</Button>
		</div>
	</div>
</Section>

<Section
	id="donate"
	type={SectionType.Image}
	textColor={TextColor.White}
	backgroundSource="/donate-background.webp"
>
	<h2>Donate</h2>
	<p>
		Being a small company, we don't really make any money. So it's difficult
		to provide for the resources necessary to make great videos. If you
		pitch in even just a dollar or two, it could help us reach great
		heights.
	</p>
	<Button link="https://ko-fi.com/gozarproductions" newTab={true}
		>Donate</Button
	>
	<!-- <Donate /> -->
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
				link="https://discord.gozarproductions.com/"
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

<style>
	div.horizontal-container {
		width: 40rem;
		max-width: 90dvw;
		margin-left: 50%;
		transform: translateX(-50%);
		flex-wrap: wrap;
	}
	div.two-horizontal-buttons {
		width: 46rem;
		max-width: 90dvw;

		position: relative;
		left: 50%;
		transform: translateX(-50%);

		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	div.columns {
		display: flex;
		padding: 10px 0px;
		&.notified {
			/* width: min(90dvw, 840px);
			margin-left: 50%;
			transform: translateX(-50%); */
			flex-direction: column;
		}
		& > * {
			padding: 10px 0px;
			flex-grow: 1;
		}
		&:not(.notified) > :first-child {
			margin: auto 20px;
		}
		& > :last-child:not(.two-horizontal-buttons) {
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
		.columns {
			flex-direction: column;
		}
	}
	@media (max-width: 713px) {
		div.two-horizontal-buttons {
			flex-wrap: wrap;
		}
	}
</style>
