import { DragDropContext, Draggable, DropResult, Droppable } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import DraggableCard from "./components/DraggableCard";

const Wrapper = styled.div`
display: flex;
max-width: 480px;
width:100%;
margin: 0 auto;
justify-content: center;
align-items: center;
height:100vh;
`
const Boards = styled.div`
  display: grid;
  width:100%;
  grid-template-columns:  repeat(1, 1fr);
`
const Board = styled.div`
  padding: 20px 10px;
  padding-top:30px;
  background-color: ${props => props.theme.boardColor};
  border-radius: 5px;
  min-height:200px;

`
const Card = styled.div`
  background-color: ${props => props.theme.cardColor};
  padding: 5px 10px;
  margin-bottom:5px;
  border-radius: 5px;
`;

function App() {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
    if (!destination) return;

    setToDos(oldToDos => {
      const toDosCopy = [...oldToDos];
      // 1) Delete item on source.index
      console.log("Delete item on", source.index)
      console.log(toDosCopy)
      toDosCopy.splice(source.index, 1)
      console.log("Deleted item")
      console.log(toDosCopy)
      // 2) Put back the item on the destination.index
      console.log("Put back", draggableId, "on", destination.index)
      toDosCopy.splice(destination?.index, 0, draggableId)
      return toDosCopy;
    })
  }
  return <DragDropContext onDragEnd={onDragEnd}>
    <Wrapper>
      <Boards>
        <Droppable droppableId="one">
          {(magic) =>
            <Board ref={magic.innerRef} {...magic.droppableProps}>
              {toDos.map((toDo, index) => <DraggableCard key={toDo} toDo={toDo} index={index} />
              )}
              {magic.placeholder}
            </Board>}
        </Droppable>
      </Boards>
    </Wrapper>
  </DragDropContext >
}
export default App;