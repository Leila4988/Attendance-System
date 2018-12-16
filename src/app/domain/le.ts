export class Leave {
    id: string; //请假id
    reason: string; //请假原因
    cuttentTime:string; //当前时间
    startTime:string; //开始请假时间
    finalTime:string; //结束请假时间


    constructor(
        id: string,
        reason: string,
        cuttentTime:string,
        startTime:string,
        finalTime:string
    ) {
        this.id = id;
        this.reason = reason;
        this.cuttentTime = cuttentTime;
        this.startTime = startTime;
        this.finalTime = finalTime;
    }
}