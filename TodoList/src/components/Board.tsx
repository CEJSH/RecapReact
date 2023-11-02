import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./DraggableCard";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { ITodo } from "../atoms";

const Wrapper = styled.div`
width:300px;
display:flex;
flex-direction:column;
  padding-top:10px;
  background-color: ${props => props.theme.boardColor};
  border-radius: 5px;
  min-height:300px;
  overflow: hidden;
`
const Form = styled.form`
    width: 100%;
    input {
    width: 100%;
  }
`
const Title = styled.h2`
    text-align: center;
    font-weight:600;
    margin-bottom: 10px;
    font-size: 18px;
`
const Area = styled.div <IAreaProps> `
    background-color: ${props => props.isDraggingOver ? "#dfe6e9" : props.DraggingFromThisWith ? "#b2bec3" : "transparent"};
    flex-grow:1;
    padding: 20px;
    transition: background-color 0.3s ease-in-out;
`
interface IBoardProps {
    toDos: ITodo[];
    boardId: string;
}
interface IAreaProps {
    isDraggingOver: boolean;
    DraggingFromThisWith: boolean;
}
interface IForm {
    toDo: string;
}
function Board({ toDos, boardId }: IBoardProps) {
    const { register, setValue, handleSubmit } = useForm<IForm>();
    const onValid = ({ toDo }: IForm) => {
        console.log(toDo);
        setValue("toDo", "");
    }
    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onValid)}>
                <input {...register("toDo", { required: true })} type="text" placeholder={`Add task on ${boardId}`} />
            </Form>

            <Droppable droppableId={boardId}>
                {(magic, info) =>
                    <Area isDraggingOver={info.isDraggingOver}
                        DraggingFromThisWith={Boolean(info.draggingFromThisWith)} ref={magic.innerRef}
                        {...magic.droppableProps}>
                        {toDos.map((toDo, index) => <DraggableCard
                            key={toDo.id}
                            index={index}
                            toDoId={toDo.id}
                            toDoText={toDo.text}
                        />
                        )}
                        {magic.placeholder}
                    </Area>}
            </Droppable>
        </Wrapper>
    )
}

export default Board;