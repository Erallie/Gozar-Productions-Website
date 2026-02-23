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
		Gozar Productions is a small company engaging in projects ranging from
		short films and music videos to Discord bots and Obsidian plugins to
		live music performances in virtual reality. Birthed from a young girl's
		aspirations and pet projects, this small company endeavors to share our
		passions with the world for all to enjoy.
	</p>
</Section>

<Section
	id="videos"
	type={SectionType.Video}
	backgroundSource="/watch-background.webm"
	textColor={TextColor.White}
>
	<h2>Our Videos</h2>
	<p>
		Whether we're filming covers of Disney and musical theater favorites, or
		sharing lyric videos of new original songs, or even producing fan short
		films based on our favorite series, you can find all of our videos on
		our YouTube channel.
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
	backgroundSource="/disney-ball-background-4.webp"
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
		us on social media!
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

			<Button
				link="https://bsky.app/profile/gozarproductions.bsky.social"
				newTab={true}
				columns={true}
				customSVG
				>View our Bluesky <svg
					width="568"
					height="501"
					viewBox="0 0 568 501"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M123.121 33.6637C188.241 82.5526 258.281 181.681 284 234.873C309.719 181.681 379.759 82.5526 444.879 33.6637C491.866 -1.61183 568 -28.9064 568 57.9464C568 75.2916 558.055 203.659 552.222 224.501C531.947 296.954 458.067 315.434 392.347 304.249C507.222 323.8 536.444 388.56 473.333 453.32C353.473 576.312 301.061 422.461 287.631 383.039C285.169 375.812 284.017 372.431 284 375.306C283.983 372.431 282.831 375.812 280.369 383.039C266.939 422.461 214.527 576.312 94.6667 453.32C31.5556 388.56 60.7778 323.8 175.653 304.249C109.933 315.434 36.0535 296.954 15.7778 224.501C9.94525 203.659 0 75.2916 0 57.9464C0 -28.9064 76.1345 -1.61183 123.121 33.6637Z"
						fill="currentColor"
					/>
				</svg>
			</Button>
			<Button
				link="https://ko-fi.com/GozarProductions"
				newTab={true}
				columns={true}
				customSVG
				>Follow our Ko-fi <svg
					width="241"
					height="194"
					viewBox="0 0 241 194"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<mask
						id="mask0_1_219"
						style="mask-type:luminance"
						maskUnits="userSpaceOnUse"
						x="-1"
						y="0"
						width="242"
						height="194"
					>
						<path
							d="M240.469 0.958984H-0.00585938V193.918H240.469V0.958984Z"
							fill="white"
						/>
					</mask>
					<g mask="url(#mask0_1_219)">
						<path
							d="M96.1344 193.911C61.1312 193.911 32.6597 178.256 15.9721 149.829C1.19788 124.912 -0.00585938 97.9229 -0.00585938 67.7662C-0.00585938 49.8876 5.37293 34.3215 15.5413 22.7466C24.8861 12.1157 38.1271 5.22907 52.8317 3.35378C70.2858 1.14271 91.9848 0.958984 114.545 0.958984C151.259 0.958984 161.63 1.4088 176.075 2.85328C195.29 4.76026 211.458 11.932 222.824 23.5955C234.368 35.4428 240.469 51.2624 240.469 69.3627V72.9994C240.469 103.885 219.821 129.733 191.046 136.759C188.898 141.827 186.237 146.871 183.089 151.837L183.006 151.964C172.869 167.632 149.042 193.918 103.401 193.918H96.1281L96.1344 193.911Z"
							fill="white"
						/>
						<path
							d="M174.568 17.9772C160.927 16.6151 151.38 16.1589 114.552 16.1589C90.908 16.1589 70.9008 16.387 54.7644 18.4334C33.3949 21.164 15.2058 37.5285 15.2058 67.7674C15.2058 98.0066 16.796 121.422 29.0741 142.107C42.9425 165.751 66.1302 178.707 96.1412 178.707H103.414C140.242 178.707 160.25 159.156 170.253 143.698C174.574 136.874 177.754 130.058 179.801 123.234C205.947 120.96 225.27 99.3624 225.27 72.9941V69.3577C225.27 40.9432 206.631 21.164 174.574 17.9772H174.568Z"
							fill="white"
						/>
						<path
							d="M15.1975 67.7674C15.1975 37.5285 33.3866 21.164 54.7559 18.4334C70.8987 16.387 90.906 16.1589 114.544 16.1589C151.372 16.1589 160.919 16.6151 174.559 17.9772C206.617 21.1576 225.255 40.937 225.255 69.3577V72.9941C225.255 99.3687 205.932 120.966 179.786 123.234C177.74 130.058 174.559 136.874 170.238 143.698C160.235 159.156 140.228 178.707 103.4 178.707H96.1264C66.1155 178.707 42.9277 165.751 29.0595 142.107C16.7814 121.422 15.1912 98.4563 15.1912 67.7674"
							fill="#202020"
						/>
						<path
							d="M32.2469 67.9899C32.2469 97.3168 34.0654 116.184 43.6127 133.689C54.5225 153.924 74.3018 161.653 96.8117 161.653H103.857C133.411 161.653 147.736 147.329 155.693 134.829C159.558 128.462 162.966 121.417 164.784 112.547L166.147 106.864H174.332C192.521 106.864 208.208 92.09 208.208 73.2166V69.8082C208.208 48.6669 195.024 37.5228 172.058 34.7987C159.102 33.6646 151.372 33.2084 114.538 33.2084C89.7602 33.2084 72.0272 33.4364 58.6152 35.4828C39.7483 38.2134 32.2407 48.8951 32.2407 67.9899"
							fill="white"
						/>
						<path
							d="M166.158 83.6801C166.158 86.4107 168.204 88.4572 171.841 88.4572C183.435 88.4572 189.802 81.8619 189.802 70.9523C189.802 60.0427 183.435 53.2195 171.841 53.2195C168.204 53.2195 166.158 55.2657 166.158 57.9963V83.6866V83.6801Z"
							fill="#202020"
						/>
						<path
							d="M54.5321 82.3198C54.5321 95.732 62.0332 107.326 71.5807 116.424C77.9478 122.562 87.9515 128.93 94.7685 133.022C96.8147 134.157 98.8611 134.841 101.136 134.841C103.866 134.841 106.134 134.157 107.959 133.022C114.782 128.93 124.779 122.562 130.919 116.424C140.694 107.332 148.195 95.7383 148.195 82.3198C148.195 67.7673 137.286 54.8115 121.599 54.8115C112.28 54.8115 105.912 59.5882 101.136 66.1772C96.8147 59.582 90.2259 54.8115 80.9001 54.8115C64.9855 54.8115 54.5256 67.7673 54.5256 82.3198"
							fill="#FF5A16"
						/>
					</g>
				</svg>
			</Button>
			<Button
				link="https://www.instagram.com/gozarproductions/"
				newTab={true}
				columns={true}
				customSVG
				>View our Instagram <svg
					id="Layer_1"
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1000 1000"
					><defs
						><style>
							.cls-1 {
								fill: currentColor;
							}
						</style></defs
					><path
						class="cls-1"
						d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"
						transform="translate(-2.5 -2.5)"
					/></svg
				>
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
		flex-wrap: wrap;
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
</style>
