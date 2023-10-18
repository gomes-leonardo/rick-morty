import React, { useState, useEffect } from "react";
import axios from "axios";
import { ComponentProps } from "./type";
import {
  Button,
  CharacterCard,
  CharacterName,
  ContainerPagination,
  Grid,
  Image,
  SearchContainer,
} from "./style";
import Search from "../../atoms/Search";
import { motion } from "framer-motion";

function List() {
  const [characters, setCharacters] = useState<ComponentProps[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [noResults, setNoResults] = useState(false);
  const pagesToShow = 6;
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState<
    ComponentProps[]
  >([]);
  useEffect(() => {
    const apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setCharacters(response.data.results);
        setTotalPages(response.data.info.pages);

        const filtered = response.data.results.filter(
          (character: { name: string }) =>
            character.name.toLowerCase().includes(searchTerm)
        );
        setFilteredCharacters(filtered);
      })
      .catch((error) => {
        console.error("Erro ao buscar dados da API:", error);
      });
  }, [page, searchTerm]);

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);

    const filtered = characters.filter((character) =>
      character.name.toLowerCase().includes(searchValue)
    );

    if (filtered.length === 0) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }

    setFilteredCharacters(filtered);
  };

  const getVisiblePageNumbers = () => {
    const halfVisiblePages = Math.floor(pagesToShow / 2);
    let startPage = page - halfVisiblePages;
    let endPage = page + halfVisiblePages;

    if (startPage < 1) {
      startPage = 1;
      endPage = pagesToShow;
    }

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = totalPages - pagesToShow + 1;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  const visiblePageNumbers = getVisiblePageNumbers();
  const showFirstPageButton = page >= 6;
  const lastPage = totalPages;
  console.log(filteredCharacters);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.0 }}
    >
      <SearchContainer>
        <Search onChange={handleSearchChange} value={searchTerm} />
      </SearchContainer>
      <ContainerPagination>
        {showFirstPageButton && (
          <Button onClick={() => handlePageClick(1)}>First</Button>
        )}
        {visiblePageNumbers.map((pageNumber) => (
          <Button
            className={pageNumber === page ? "active" : ""}
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
          >
            {pageNumber}
          </Button>
        ))}
        {lastPage && (
          <Button onClick={() => handlePageClick(lastPage)}>Last</Button>
        )}
      </ContainerPagination>
      <Grid>
        {noResults ? (
          <div style={{margin: 'auto', textAlign: 'center', width: '100vw'}}>
          <CharacterName style={{fontSize: '20px', marginTop: '30px', marginBottom: '30px'}}>Não foi encontrado nenhum resultado</CharacterName>
          </div>
        ) : (
          filteredCharacters.map((character) => (
            <CharacterCard key={character.id}>
              <Image src={character.image} alt={character.name} />
              <CharacterName>
                Name: <span>{character.name}</span>
              </CharacterName>
              <p>
                Gender: <span>{character.gender}</span>{" "}
              </p>
              <p>
                Status: <span>{character.status}</span>
              </p>
              <p>
                Species: <span>{character.species}</span>
              </p>
            </CharacterCard>
          ))
          )}
      </Grid>
      <ContainerPagination style={{ marginTop: "30px" }}>
        {showFirstPageButton && (
          <Button onClick={() => handlePageClick(1)}>First</Button>
        )}
        {visiblePageNumbers.map((pageNumber) => (
          <Button className={pageNumber === page ? 'active' : ''} key={pageNumber} onClick={() => handlePageClick(pageNumber)}>
            {pageNumber}
          </Button>
        ))}
        {lastPage && (
          <Button onClick={() => handlePageClick(lastPage)}>Last</Button>
        )}
      </ContainerPagination>
    </motion.div>
  );
}

export default List;
