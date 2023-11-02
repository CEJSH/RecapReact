import { atom } from "recoil";

export interface ITodo {
    id: number;
    text: string;
}
interface IToDoState {
    [key: string]: ITodo[];
}
export const toDoState = atom<IToDoState>({
    key: "toDo",
    default: {
        "To Do": [],
        Doing: [],
        Done: [],
    },
})




// Movement within the same board
// 1) make a copy only of a array that happened modifying
// 2) then we put that copy next to the older things

// Movement between the different boards
// 1) have to make copy of 2 boards
