<script>
    export let repo;
</script>

<style>
    .repo-card {
        width: 300px;
    }

    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

</style>

<div class="repo-card border-gray-200 border-solid border px-6 py-4 m-3 shadow-md rounded">
{#if repo}
    <img class="avatar" src={repo.owner.avatar_url} alt="owner">
    <a class="text-xl text-blue-900" href={repo.html_url} target="_blank">{repo.name}</a>
    star: {repo.stargazers_count}
{/if}
</div>

