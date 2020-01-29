<script>
	import Router, {link} from 'svelte-spa-router';
	import routes from './routes';
</script>

<main>
	<h1>Animation Tool</h1>
	<a href="/" use:link>Home</a>
	<a href="/page" use:link>Page</a>
	<Router {routes}/>
</main>

<style>

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
</style>