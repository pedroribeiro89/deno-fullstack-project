import {urlParse} from "./deps.ts";
import {TestController} from "./controllers/test-controller.ts";

export class RequestHandler {
    private testController: TestController;
    constructor(testController: TestController) {
        this.testController = testController;
    }

    async handle(request: Request): Promise<Response> {
        const parsedUrl = urlParse(request.url);
        switch (parsedUrl.pathname) {
            case '/test': {
                return await this.testController.handle(request);
            }
            default: {
                throw new Error();
            }
        }
    }
}