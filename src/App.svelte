<style global>
	@tailwind base;
@tailwind components;
@tailwind utilities;

</style>
<script>
	import {onMount} from 'svelte';
import RepoCard from './RepoCard.svelte';

	let term = 'svelte';


	let repos = [];
	async function search() {
	 const resp = await fetch(`https://api.github.com/search/repositories?q=${term}`)
	 const data = await resp.json()
	 repos = data.items
	}

	onMount(search)

</script>

Search github

<form>
	<input type="text" bind:value={term}>
	<button on:click|preventDefault={search}>search</button>
</form>


<div>

{#each repos as repo }
	<RepoCard repo={repo}></RepoCard>
{/each}
</div>
  


  