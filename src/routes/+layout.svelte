<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.ico';
	import Header from "$lib/Header.svelte";
	import Footer from "$lib/Footer.svelte";
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script src="https://kit.fontawesome.com/2dd1bad15b.js" crossorigin="anonymous"></script>
	<link rel="stylesheet" href="/highlight/styles/monokai-sublime.min.css">
	<script src="/highlight/highlight.min.js"></script>
	<script src="/highlight/languages/yaml.min.js"></script>
	<script src="/highlight/languages/powershell.min.js"></script>
	<script src="/highlight/languages/bash.min.js"></script>
	<script>hljs.highlightAll();</script>
</svelte:head>

<Header />
<br>

{@render children?.()}

<Footer />