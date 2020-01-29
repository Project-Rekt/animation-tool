<script>
	import Router, {link} from 'svelte-spa-router';
	import routes from './routes';
</script>

<svelte:head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<Router {routes}/>

