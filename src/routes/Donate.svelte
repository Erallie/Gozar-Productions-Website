<script lang="ts">
	import Button from "./Button.svelte";

	let amount = $state(0);
	let branch = $state("Anything");
	let discord = $state("");
	let errorMessage = $state("");

	const branches = [
		"Anything",
		"VR Performances",
		"Original Music and Music Videos",
		"Short Films",
		"Coding Projects",
		"The Rose Theater",
	];
	const paypalEmail = "eds.gozar@outlook.com";
	const discordWebhook = "YOUR_DISCORD_WEBHOOK_URL";

	// Discord username validation regex
	const discordRegex =
		/^@?(?!.*[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9._]{0,30}[a-zA-Z0-9])$/;

	function handleSubmit(event: Event) {
		event.preventDefault();
		errorMessage = "";

		// Validate Discord username
		if (!discordRegex.test(discord)) {
			errorMessage = "Invalid Discord username!";
			return;
		}

		// PayPal Donation URL
		const paypalUrl = new URL("https://www.paypal.com/donate");
		paypalUrl.searchParams.append("business", paypalEmail);
		paypalUrl.searchParams.append("amount", amount.toString());
		paypalUrl.searchParams.append("currency_code", "USD");
		paypalUrl.searchParams.append(
			"custom",
			JSON.stringify({ branch, discord })
		);

		// Send webhook notification to Discord
		sendDiscordNotification();

		// Redirect to PayPal
		window.location.href = paypalUrl.toString();
	}

	async function sendDiscordNotification() {
		const message = {
			content: `**@${discord}** just donated **$${amount}** to Gozar Productions for **${branch}**!`,
		};

		try {
			await fetch(discordWebhook, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(message),
			});
		} catch (error) {
			console.error("Failed to send webhook:", error);
		}
	}
</script>

<div class="popup">
	<div class="content">
		<h2>Support Gozar Productions</h2>
		<p>
			Enter your donation amount, select a branch, and provide your
			Discord username for role assignment.
		</p>

		<form onsubmit={handleSubmit}>
			<div>
				<label for="amount">Donation Amount ($):</label>
				<input type="number" bind:value={amount} min="1" required />
			</div>

			<div>
				<label for="branch">Choose a Branch:</label>
				<select bind:value={branch}>
					{#each branches as b}
						<option value={b}>{b}</option>
					{/each}
				</select>
			</div>

			<div>
				<label for="discord">Discord Username:</label>
				<input
					type="text"
					bind:value={discord}
					placeholder="@erallie"
					required
				/>
			</div>
			{#if errorMessage}
				<p class="error">{errorMessage}</p>
			{/if}

			<Button submit>Submit</Button>
		</form>
	</div>
</div>

<style>
	.error {
		color: red;
	}

	input,
	select {
		border-radius: 50px;
		border: 2px solid rgb(var(--foreground));
		padding: 12px 20px;
		background-color: rgba(var(--foreground), 0);
		color: rgb(var(--foreground));
	}

	.popup {
		--text-color: var(--foreground);
		text-shadow: none;
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100dvh;
		z-index: 100;
		display: flex;
		align-items: center;
		background-color: rgba(0, 0, 0, 0.8);
		& > .content {
			color: rgb(var(--foreground));
			margin: auto;
			background-color: rgb(var(--background));
			border-radius: 40px;
			width: 500px;
			box-sizing: border-box;
			max-width: 90%;
			max-height: 90%;
			overflow-y: auto;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 40px;
			& form > div {
				display: flex;
				margin: 12px 0px;
				justify-content: space-between;
				align-items: center;
			}
		}
	}
</style>
