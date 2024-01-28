import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Options = styled.ul`
    display: flex;
`
const Option = styled.li`
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;
`

const optionsText = ['CATEGORIAS', 'FAVORITOS', 'ESTANTE']

function OptionsHeader() {
    return (
        <Options>
            {optionsText.map((text) => (
                <Link to={`/${text.toLowerCase()}`}><Option><p>{text}</p></Option></Link>
            ))}
        </Options>
    )
}

export default OptionsHeader