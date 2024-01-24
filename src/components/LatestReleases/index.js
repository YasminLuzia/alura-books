import { books } from './latestReleasesData'
import { Title } from '../Title'
import SuggestedCard from '../SuggestedCard'
import bookImage from '../../img/book2.png'
import styled from 'styled-components'

const LatestReleasesContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`
const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

function LatestReleases() {
    return (
        <LatestReleasesContainer>
            <Title color='#EB9B00' fontSize='36px'>ÚLTIMOS LANÇAMENTOS</Title>
            <NewBooksContainer>
                {
                    books.map(
                        book => (
                            <img src={book.src} alt='Capa do livro' />
                        )
                    )
                }
            </NewBooksContainer>
            <SuggestedCard title='Talvez você se interesse por' subtitle='Angular 11' description='Contruindo uma aplicação com a plataforma Google.' image={bookImage}/>
        </LatestReleasesContainer>
    )
}

export default LatestReleases