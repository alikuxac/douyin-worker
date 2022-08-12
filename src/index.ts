import { Hono } from 'hono';

const app = new Hono();

app.notFound((c) => {
	return c.text('404 Not Found', 404)
})

app.get('/', (c) => c.text('Hono!!'))

app.fire();
