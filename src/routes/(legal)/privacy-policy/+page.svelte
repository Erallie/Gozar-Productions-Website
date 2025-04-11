<script>
	import LegalSection from "../LegalSection.svelte";
	import { barFinalHeight } from "../../stores";
</script>

<svelte:head>
	<title>Privacy Policy</title>
</svelte:head>
<LegalSection title="Introduction">
	<p>
		At <strong>Gozar Productions</strong>, accessible from
		<a href="/">gozarproductions.com</a> and all its subdomains, we value the
		privacy of our visitors. This Privacy Policy explains what information we
		collect, how we use it, and your rights regarding your data.
	</p>
	<p>
		This Privacy Policy applies to <strong
			><a href="/">gozarproductions.com</a></strong
		>
		and all of its subdomains. However, it does <strong>not</strong> apply to
		any code-based projects that Gozar Productions provides, even if they are
		hosted on our subdomains. Those projects may have their own separate privacy
		policies.
	</p>
	<p>
		If you have any questions about this policy, feel free to contact us at <a
			href="mailto:contact@gozarproductions.com"
			>contact@gozarproductions.com</a
		>.
	</p>
</LegalSection>
<LegalSection title="Information We Collect">
	<p>
		We do not actively collect personal information from visitors. However,
		the following data may be processed:
	</p>
	<a href="#cookies">
		<h3 id="cookies" style="scroll-margin-top: {$barFinalHeight}px">
			Cookies (Stored on Your Device)
		</h3>
	</a>
	<p>We use cookies for the following purposes:</p>
	<a href="#essential-cookies">
		<h4
			id="essential-cookies"
			style="scroll-margin-top: {$barFinalHeight}px"
		>
			Essential Cookies
		</h4>
	</a>
	<p>
		These cookies are necessary for the website to function and cannot be
		disabled. They include:
	</p>
	<ul>
		<li>
			<strong>Light/Dark Mode Preference</strong> – To remember your preferred
			theme.
		</li>
		<li>
			<strong>Volume Preference</strong> – To save your audio settings for
			a better user experience.
		</li>
	</ul>
	<a href="#non-essential-cookies">
		<h4
			id="non-essential-cookies"
			style="scroll-margin-top: {$barFinalHeight}px"
		>
			Non-Essential Cookies
		</h4>
	</a>
	<p>
		These cookies are not strictly necessary but may enhance your browsing
		experience. They include:
	</p>
	<ul>
		<li>
			<strong>Embedded Content</strong> – Certain embedded content, such as
			Google Calendar, may store cookies on your device when interacted with
			on our website.
		</li>
	</ul>
	<p>You can manage or disable cookies through your browser settings.</p>
	<a href="#third-party-data">
		<h3
			id="third-party-data"
			style="scroll-margin-top: {$barFinalHeight}px"
		>
			Third-Party Data Collection
		</h3>
	</a>
	<p>
		While we do not collect personal data ourselves, certain third-party
		services may process data when you interact with them:
	</p>
	<ul>
		<li>
			<strong>Cloudflare</strong> – Provides security and performance
			enhancements. Cloudflare may collect IP addresses and other
			technical data. (<a
				href="https://www.cloudflare.com/privacypolicy/"
				target="_blank">Cloudflare Privacy Policy</a
			>)
		</li>
		<li>
			<strong>GitHub Pages</strong> – Our website is hosted on GitHub
			Pages, which may collect visitor data such as IP addresses and
			browser details. (<a
				target="_blank"
				href="https://docs.github.com/en/github/site-policy/github-privacy-statement"
				>GitHub Privacy Policy</a
			>)
		</li>
		<li>
			<strong>PayPal</strong> – If you choose to donate, PayPal may
			collect personal and financial information. (<a
				href="https://www.paypal.com/us/legalhub/paypal/privacy-full"
				target="_blank">PayPal Privacy Policy</a
			>)
		</li>
		<li>
			<strong>Short.io</strong> – The link to our Discord server is
			redirected through Short.io, which may collect data related to your
			interaction with the shortened URL. (<a
				href="https://short.io/privacy"
				target="_blank">Short.io Privacy Policy</a
			>)
		</li>
	</ul>
	<a href="#external-links">
		<h3 id="external-links" style="scroll-margin-top: {$barFinalHeight}px">
			External Links & Embedded Content
		</h3>
	</a>
	<p>
		Our website contains links to third-party platforms and embeds content
		from external services. These services are not operated by us and may
		collect data according to their own privacy policies. Please note that
		embedded content, such as Google Calendar, may store cookies on your
		device. These include, but are not limited to:
	</p>
	<ul>
		<li>
			<strong>YouTube, GitHub, Discord</strong> (linked from
			<a href="/">gozarproductions.com</a>)
		</li>
		<li>
			<strong
				>Spotify, Apple Music, YouTube, YouTube Music, Pandora, Amazon
				Music</strong
			>
			(linked from
			<a href="https://music.gozarproductions.com/"
				>music.gozarproductions.com</a
			>)
		</li>
		<li>
			<strong>Google Calendar</strong> (embedded on
			<a
				href="https://music.gozarproductions.com/performances#calendar"
				target="_blank">music.gozarproductions.com/performances</a
			>)
		</li>
	</ul>
	<p>
		We recommend reviewing the privacy policies of these platforms before
		interacting with them.
	</p>
</LegalSection>
<LegalSection title="How We Use Your Information">
	<p>
		We only use stored cookies to enhance your browsing experience. We do
		not collect, store, or share personal data ourselves.
	</p>
</LegalSection>
<LegalSection title="Data Sharing & Security">
	<p>
		Since we do not collect personal data, we do not share any with third
		parties. Any data collected by external platforms is managed under their
		respective privacy policies.
	</p>
</LegalSection>
<LegalSection title="Your Rights & Choices">
	<p>
		As we do not process personal data, there are no user accounts or stored
		information to access, modify, or delete. However, you may:
	</p>
	<ul>
		<li>
			<strong>Manage Cookies</strong> – Adjust your browser settings to control
			or disable cookies.
		</li>
		<li>
			<strong>Review Third-Party Policies</strong> – If you interact with PayPal,
			Cloudflare, GitHub Pages, or any linked services, refer to their privacy
			policies for details on your rights.
		</li>
	</ul>
</LegalSection>
<LegalSection title="Updates to This Policy">
	<p>
		We may update this Privacy Policy from time to time. Any changes will be
		reflected on this page with an updated revision date.
	</p>
	<p><strong>Last Updated:</strong> April 11th, 2025</p>
</LegalSection>

<style>
	a {
		color: rgb(151, 151, 255);
	}
	li {
		margin: 8px 0;
	}

	a:has(> h3),
	a:has(> h4) {
		color: inherit;
	}

	h3,
	h4 {
		font-weight: 400;
		text-transform: uppercase;
		text-align: center;
	}
	h3 {
		font-size: 1.5em;
	}
	h4 {
		font-size: 1.25em;
	}
</style>
