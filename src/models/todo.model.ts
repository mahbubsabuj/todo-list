import { Guid } from "typescript-guid";

export class Todo {
    public id: Guid;
    public title: string;
    public isComplete: boolean;
    constructor(id: Guid, title: string, isComplete: boolean) {
        this.id = id;
        this.title = title;
        this.isComplete = isComplete;
    }
}