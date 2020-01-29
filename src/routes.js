import Home from './routes/home.svelte';
import Page from './routes/page.svelte';
import Editor from './routes/editor.svelte';

export default {
    '/': Home,
    '/page': Page,
    '/editor': Editor
}