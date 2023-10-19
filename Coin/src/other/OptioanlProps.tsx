//3.3 Optional Props

import { useState } from "react";
import styled from "styled-components";


// default option optional option

interface ContainerProps {
    bgColor: string;
    borderColor: string;

}
const Container = styled.div<ContainerProps>`
width:200px;
height:200px;
bakground-color:${props => props.bgColor}
border: 1px solid ${props => props.borderColor}
`;
// 속성 맨끝에 ?을 붙이면 필수조건이 아니라 옵셔널이 된다.

interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
    const [value, setValue] = useState<number | string>(0);
    setValue("hello");
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>{text}</Container>
}

export default Circle

interface PlayerShape {
    name: string;
    age: number;

}
const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} years old.`

sayHello({ name: "eunajae", age: 28 })
sayHello({ name: "wonbin", age: 22 })