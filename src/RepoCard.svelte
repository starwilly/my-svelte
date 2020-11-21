<script>
    export let repo;
</script>

<style>
    .repo-card {
        border: 1px solid #ccc;
        width: 300px;
        border-radius: 8px;
        padding: 0.5em;
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

</style>

<div class="repo-card">
{#if repo}
    <img class="avatar" src={repo.owner.avatar_url} alt="owner">
    <a href={repo.html_url} target="_blank">{repo.name}</a>
    star: {repo.stargazers_count}
{/if}
</div>

