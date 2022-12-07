export class Database {
    private connectionString: string;

    constructor(connectionString: string) {
        this.connectionString = connectionString
    }

    async sleep(ms: number) {
        return new Promise(resolve => {
            setTimeout(resolve, ms)
        })
    }

    async connect() {
        await this.sleep(100)
        return this
    }

    async find() {
        await this.sleep(100)
        return [
            {value: 'Test1'},
            {value: 'Test2'},
            {value: 'Test3'}
        ]
    }
}