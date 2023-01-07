export abstract class Controller {
    protected responseHeaders = new Headers();
    protected handleGet(request: Request): Promise<Response> { throw new Error('GET not available'); }
    protected handlePost(request: Request): Promise<Response> { throw new Error('POST not available'); }
    protected handlePatch(request: Request): Promise<Response> { throw new Error('PATCH not available'); }
    protected handlePut(request: Request): Promise<Response> { throw new Error('PUT not available'); }
    protected handleDelete(request: Request): Promise<Response> { throw new Error('DELETE not available'); }
    abstract createHeaders(): void;

    protected constructor() {
        this.createHeaders();
    }

    handleOptions(request: Request): Promise<Response> {
        return Promise.resolve(new Response(null, { status: 204, headers: this.responseHeaders }));
    }

    public handle(request: Request): Promise<Response> {
        switch (request.method) {
            case 'GET': { return this.handleGet(request); }
            case 'POST': { return this.handlePost(request); }
            case 'PATCH': { return this.handlePatch(request); }
            case 'PUT': { return this.handlePut(request); }
            case 'DELETE': { return this.handleDelete(request); }
            case 'OPTIONS': { return this.handleOptions(request); }
            default: { throw new Error('Endpoint not available'); }
        }
    }
}