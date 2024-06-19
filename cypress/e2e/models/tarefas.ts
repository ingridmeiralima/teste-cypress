import {faker} from "@faker-js/faker"

export class Tarefas{
    name: string
    is_done: boolean
    id: string

    constructor(params: Partial<Tarefas>){
        Object.assign(this, params)
    }
    
    public static createValida(): Tarefas {
        return new Tarefas({
            id: "",
            name: faker.music.songName(),
            is_done: false
        })
    }
}