import {Application} from "./app.ts";

const server = Deno.listen({ port: 8080 });
console.log(`HTTP webserver running.  Access it at:  http://localhost:8080/`);

const app = await Application.createInstance();

for await (const conn of server) {
    // not using await makes that each requests its executed
    // simultaneously without blocking the execution
    serveHttp(conn);
}

async function serveHttp(conn: Deno.Conn) {
    const httpConn = Deno.serveHttp(conn);
    for await (const requestEvent of httpConn) {
        let response;
        try {
            response = app.handle(requestEvent.request);
        } catch (error: any) {
            response = new Response(error, { status: 404, })
        }
        requestEvent.respondWith(response);
    }
}