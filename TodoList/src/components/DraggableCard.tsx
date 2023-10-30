import { Draggable } from "react-beautiful-dnd";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${props => props.theme.cardColor};
  padding: 5px 10px;
  margin-bottom:5px;
  border-radius: 5px;
`;

interface IDraggableCardProps {
    toDo: string;
    index: number;
}
function DraggableCard({ toDo, index }: IDraggableCardProps) {
    console.log(toDo, "has been rendered")
    return (
        <Draggable draggableId={toDo} key={toDo} index={index} >
            {(magic) => (<Card
                ref={magic.innerRef}
                {...magic.draggableProps}
                {...magic.dragHandleProps}
            >
                {toDo}
            </Card>)}
        </Draggable>
    )
}

export default React.memo(DraggableCard)