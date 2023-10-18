import styled from "styled-components";

export const Image = styled.img`
  border-radius: 8px;
  max-width: 100%;
`;

export const Grid = styled.div`
  padding-left: 30px;
  padding-right: 30px;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`;

export const CharacterCard = styled.div`
  border: 2px solid #42b883;
  background-color: #f5f5f5;
  border-radius: 12px;
  padding: 10px;
  text-align: center;
`;

export const CharacterName = styled.h4`
  margin: 0;
  color: #333;
  font-size: 1.2rem;
  margin-top: 10px;
`;

export const SearchContainer = styled.div`
  padding: 30px;
  width: 30%;
  margin: auto;
`;

export const Button = styled.button `
width: 60px;
padding: 10px;
border: none;
cursor: pointer;
font-weight: bold;
border-radius: 8px;
transition: background-color 0.3s; 

&:hover {
  background-color: #CCC;
}
&.active {
  background-color: #CCC;
  }
`
export const ContainerPagination = styled.div `

margin-bottom: 30px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 4px;

`
export const InfoCharacter = styled.span `

&.gender {
  color: red
}
`