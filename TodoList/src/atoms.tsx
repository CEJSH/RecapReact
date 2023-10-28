import { atom, selector } from "recoil";

export interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE"
}
export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
})
//  selector를 이용하여 category별로 구분을 하고 싶다면?

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState)
        return [
            toDos.filter(toDo => toDo.category === "TO_DO"),
            toDos.filter(toDo => toDo.category === "DOING"),
            toDos.filter((toDo) => toDo.category === "DONE"),]
    }
})