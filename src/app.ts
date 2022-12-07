import {RequestHandler} from "./request-handler.ts";
import {TestController} from "./controllers/test-controller.ts";
import {TestRepository} from "./repository/test-repository.ts";
import {ListTestsUseCase} from "./use-cases/list-tests-usecase.ts";
import {Database} from "./fake-database.ts";

export class Application {

    constructor() {}

    static async createInstance(): Promise<RequestHandler> {
        const db = new Database('fake-db://localhost');
        const dbConnection = await db.connect();
        const testRepo = new TestRepository(dbConnection);
        const testUsecase = new ListTestsUseCase(testRepo);
        const testController = new TestController(testUsecase);
        return new RequestHandler(testController);
    }

}