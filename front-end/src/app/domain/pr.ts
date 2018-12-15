export class Process {
    id: string; //请假id
    schedule: number; //请假进度
  
    constructor(
        id: string,
        schedule: number
    ) {
        this.id = id;
        this.schedule = schedule;
    }
}