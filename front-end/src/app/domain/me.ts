export class Message {
    result: boolean;
    message: string
    constructor(result: boolean,
        message: string
    ) {
        this.message = message;
        this.result = result;
    }
}