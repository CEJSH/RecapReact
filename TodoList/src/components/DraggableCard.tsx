import { Draggable } from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const Card = styled.div<{ isDragging: boolean }>`
  background-color: ${props => props.theme.cardColor};
  padding: 10px;
  margin-bottom:5px;
  border-radius: 5px;
  background-color: ${(props) =>
        props.isDragging ? "#e4f2ff" : props.theme.cardColor};
  box-shadow: ${(props) =>
        props.isDragging ? "0px 2px 5px rgba(0, 0, 0, 0.05)" : "none"};
`;

interface IDraggableCardProps {
    toDoId: number;
    toDoText: string;
    index: number;
}
function DraggableCard({ toDoId, toDoText, index }: IDraggableCardProps) {
    console.log(toDoId, "has been rendered")
    return (
        <Draggable draggableId={toDoId + ""} key={toDoId} index={index} >
            {(magic, snapshot) => (<Card
                isDragging={snapshot.isDragging}
                ref={magic.innerRef}
                {...magic.draggableProps}
                {...magic.dragHandleProps}
            >
                {toDoText}
            </Card>)}
        </Draggable>
    )
}

export default React.memo(DraggableCard)