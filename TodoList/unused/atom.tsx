import { atom, selector } from "recoil";

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE"
}

export interface IToDo {
    text: string;
    id: number;
    category: Categories
}

// handle category the user is currently selecting

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO
})


export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
})

//  selector를 이용하여 category별로 구분을 하고 싶다면?

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((toDo) => toDo.category === category)
    }
})