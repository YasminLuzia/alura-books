import './style.css'

const optionsText = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE']

function OptionsHeader() {
    return (
        <ul className='options'>
            {optionsText.map((text) => (
                <li className='option'><p>{text}</p></li>
            ))}
        </ul>
    )
}

export default OptionsHeader