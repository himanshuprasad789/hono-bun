import { Hono } from "hono";
import { bearerAuth } from 'hono/bearer-auth'
import { html } from 'hono/html'
const port = parseInt(process.env.PORT) || 3000;

const app = new Hono();
const token = "secret"

app.use('/api/*', bearerAuth({ token }))
app.get("/",(c)=>{
  return c.text("hello bun/hono user")
})
app.get('/api/random', (c) => {
  const random = Math.floor(Math.random() * 10) * 100;
  return c.json({ random: random }, 200)
})
app.get('/html', (c) => {
  return c.html(
    html`<head><title>hello</title></head><h1>HELLO WORLD</h1>`
  )
})


export default {
  port,
  fetch: app.fetch
};
