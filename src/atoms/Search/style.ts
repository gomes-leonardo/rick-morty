import styled from "styled-components";

export const Input = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s;
  width: 100%;

  &:focus {
    border-color: #42b883; /* Cor da borda quando o input está em foco */
  }
`;