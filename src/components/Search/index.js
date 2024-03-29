import Input from '../Input'
import styled from 'styled-components'
import { getBooks } from '../../services/books'
import { useEffect, useState } from 'react'
import { postFavorite } from '../../services/favorites'

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #FFF;
    text-align: center;
    padding: 85px 0;
    min-height: 270px;
    width: 100%;
`
const Title = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const Subtitle = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

function Search() {
    const [searchedBooks, setSearchedBooks] = useState([])
    const [books, setBooks] = useState([])

    useEffect(() => {
        fetchBooks()
    }, [])

    async function fetchBooks() {
        const booksAPI = await getBooks()
        setBooks(booksAPI)
    }

    async function insertFavorite(id) {
        await postFavorite(id)
        alert(`Livro de id: ${id} inserido com sucesso!`)
    }

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar?</Title>
            <Subtitle>Encontre seu livro em nossa estante.</Subtitle>
            <Input placeholder='Escreva sua próxima leitura' onBlur={event => {
                const search = event.target.value
                const searchResult = books.filter(book => book.name.includes(search))
                setSearchedBooks(searchResult)
            }} />
            {searchedBooks.map(book => (
                <Result onClick={() => insertFavorite(book.id)}>
                    <img src={book.src} alt='Capa do livro' />
                    <p>{book.name}</p>
                </Result>
            ))}
        </SearchContainer>
    )
}

export default Search