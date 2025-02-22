<script lang="ts">
    import Button from "./Button.svelte";
    import Section from "./Section.svelte";
    import { SectionType, TextColor } from "$lib/types/types";
    import Counter from "./Counter.svelte";
    import welcome from "$lib/images/svelte-welcome.webp";
    import welcomeFallback from "$lib/images/svelte-welcome.png";
</script>

<svelte:head>
    <title>Gozar Productions</title>
    <meta
        name="description"
        content="Gozar Productions is a small film company on YouTube creating short films and music videos with a passion for music. Birthed from a young girl's aspirations and pet projects, this small company endeavors to share our passions with the world for all to enjoy."
    />
    <meta
        property="og:title"
        content="Gozar Productions: A Musical Film Company"
    />
    <meta
        property="og:description"
        content="Gozar Productions is a small film company on YouTube creating short films and music videos with a passion for music. Birthed from a young girl's aspirations and pet projects, this small company endeavors to share our passions with the world for all to enjoy."
    />
    <meta
        property="og:image"
        content="https://static.wixstatic.com/media/3d52c1_ea36ec3c8e3b48948b1a1d72011d99b4%7Emv2.jpeg/v1/fit/w_2500,h_1330,al_c/3d52c1_ea36ec3c8e3b48948b1a1d72011d99b4%7Emv2.jpeg"
    />
    <meta property="og:image:width" content="2500" />
    <meta property="og:image:height" content="1330" />
    <meta property="og:url" content="https://www.gozarproductions.com" />
    <meta property="og:site_name" content="Gozar Productions" />
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
    <Button link="https://youtube.com/GozarProductions">Watch us now</Button>
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
    <Button link="https://www.gozarproductions.com/erika-gozar"
        >Listen now</Button
    >
</Section>

<Section id="code" type={SectionType.Image} textColor={TextColor.Black}>
    <h2>Our code</h2>
    <p>
        Along with our musical and cinematic endeavors, we also create a number
        of code-based tools, ranging from Discord bots to VR aids. We aim to
        make our projects free for anyone to use.
    </p>
    <Button link="https://github.com/Erallie">View our projects</Button>
</Section>

<Section id="contact" type={SectionType.White} textColor={TextColor.Black}>
    <h2>Contact us</h2>
</Section>
