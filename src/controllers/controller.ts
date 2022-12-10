export class Controller {
    protected async handleGet(request: Request): Promise<Response> { throw new Error('GET not available'); }
    protected async handlePost(request: Request): Promise<Response> { throw new Error('POST not available'); }
    protected async handlePatch(request: Request): Promise<Response> { throw new Error('PATCH not available'); }
    protected async handlePut(request: Request): Promise<Response> { throw new Error('PUT not available'); }
    protected async handleDelete(request: Request): Promise<Response> { throw new Error('DELETE not available'); }

    public handle(request: Request): Promise<Response> {
        switch (request.method) {
            case 'GET': { return this.handleGet(request); }
            case 'POST': { return this.handlePost(request); }
            case 'PATCH': { return this.handlePatch(request); }
            case 'PUT': { return this.handlePut(request); }
            case 'DELETE': { return this.handleDelete(request); }
            default: { throw new Error('Endpoint not available'); }
        }
    }
}