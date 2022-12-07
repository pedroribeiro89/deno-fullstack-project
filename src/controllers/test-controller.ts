import {Controller} from "./controller.ts";
import {ListTestsUseCase} from "../use-cases/list-tests-usecase.ts";

export class TestController extends Controller {
    private listTestsUseCase: ListTestsUseCase;

    constructor(listTestsUseCase: ListTestsUseCase) {
        super();
        this.listTestsUseCase = listTestsUseCase
    }

    handleDelete(request: Request): Promise<Response> {
        throw new Error()
    }

    async handleGet(request: Request): Promise<Response> {
        const testResults = await this.listTestsUseCase.execute();
        return new Response(JSON.stringify(testResults), {
            status: 200,
        });
    }

    handlePatch(request: Request): Promise<Response> {
        throw new Error()
    }

    handlePost(request: Request): Promise<Response> {
        throw new Error()
    }

    handlePut(request: Request): Promise<Response> {
        throw new Error()
    }

}