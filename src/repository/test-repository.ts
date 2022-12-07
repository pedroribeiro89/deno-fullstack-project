import {Test} from "../models/test.ts";
import {Database} from "../fake-database.ts";

export class TestRepository {
    private dbConnection: Database;

    constructor(dbConnection: Database) {
        this.dbConnection = dbConnection
    }
    async find(): Promise<Test[]> {
        return await this.dbConnection.find()
    }
}