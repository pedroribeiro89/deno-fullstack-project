import {Test} from "../models/test.ts";
import {TestRepository} from "../repository/test-repository.ts";

export class ListTestsUseCase {
    testRepository: TestRepository;

    constructor(testRepository: TestRepository) {
        this.testRepository = testRepository;
    }

    async execute(): Promise<Test[]> {
        return await this.testRepository.find();
    }
}