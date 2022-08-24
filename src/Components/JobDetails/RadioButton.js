import styled from "styled-components";

const RadioButton = styled.div`
  width: ${(props) => (props.size ? props.size : 20)}px;
  height: ${(props) => (props.size ? props.size : 20)}px;
  border-radius: 50%;
  border: ${(props) =>
    props.active ? `3px solid #8D19FF` : `3px solid #1F1F1F`};
}
`;

export default RadioButton;