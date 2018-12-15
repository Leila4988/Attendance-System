export class Handle {
    id: string; //请假id
    name: string; //姓名
    department: string; //部门
    reason: string; //请假原因
    totalTime:number; //请假时间
    state:boolean; //是否批准
    


    constructor(
        id: string,
        name: string,
        department: string,
        reason: string,
        totalTime: number,
        state: boolean
    ) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.reason = reason;
        this.totalTime = totalTime;
        this.state = state;
    }
}