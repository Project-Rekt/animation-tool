<script>
  import Layout from "../components/layout/layout.svelte";

  let pages = [
    { title: "Editor", link: "#/editor" },
    { title: "Projects", link: "#/projects" },
    { title: "Settings", link: "#/settings" }
  ];
</script>

<style lang="scss">
  $bg-color: #f2f0f0;
  * {
    font-family: "Nanum Gothic", sans-serif;
    font-weight: 500;
  }

  :global(body) {
    background-color: $bg-color;
  }

  .pages {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  .page {
    margin: 5px;
    min-width: 300px;
    min-height: 300px;
    border: 1px solid black;

    text-decoration: none;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.25s linear;
    background-color: $bg-color;
  }

  .page:hover {
    transform: scale(1.05);
    background-color: white;
    transition: 0.25s linear;
  }
</style>

<Layout title="Home">
  <h1 class="main-heading">Animation Tool</h1>
  <div class="pages">
    {#each pages as page}
      <a class="page" href={page.link}>
        <h2>{page.title}</h2>
      </a>
    {/each}
  </div>
</Layout>
