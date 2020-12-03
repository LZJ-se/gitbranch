import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import * as test from './test.js'
import { DataStore } from "https://deno.land/x/sqlite/mod.ts";
import { Session } from "https://deno.land/x/session@1.1.0/mod.ts";

const DataStore = new DataStore("pos.DataStore");
DataStore.query("CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, employee TEXT, title TEXT, body TEXT)");
DataStore.query("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, employee TEXT, password TEXT, email TEXT)");

const path = new Router()

path.get('/login', test.loginUI)

const session = new Session({ framework: "oak" });
await session.init();

const posTest = new Application();
posTest.use(session.use()(session))
posTest.use(path.routes())
posTest.use(path.allowedMethods())

async function loginUI(ctx){
    ctx.response.body = await test.loginUI()
}

await posTest.listen({ hostname : "127.0.0.1", port : 8000});