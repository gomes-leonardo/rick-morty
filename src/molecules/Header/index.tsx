import React from 'react';
import { CharacterImage, HeaderContainer, HeaderContent, HeaderTitle } from './style';


function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <CharacterImage
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="Rick"
        />
        <HeaderTitle>Rick and Morty</HeaderTitle>
        <CharacterImage
          src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
          alt="Rick"
        />
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;
