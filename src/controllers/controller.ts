export abstract class Controller {
    abstract handleGet(request: Request): Promise<Response>;
    abstract handlePost(request: Request): Promise<Response>;
    abstract handlePatch(request: Request): Promise<Response>;
    abstract handlePut(request: Request): Promise<Response>;
    abstract handleDelete(request: Request): Promise<Response>;

    public handle(request: Request): Promise<Response> {
        switch (request.method) {
            case 'GET': { return this.handleGet(request); }
            case 'POST': { return this.handlePost(request); }
            case 'PATCH': { return this.handlePatch(request); }
            case 'PUT': { return this.handlePut(request); }
            case 'DELETE': { return this.handleDelete(request); }
            default: { throw new Error(); }
        }
    }
}