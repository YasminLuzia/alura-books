import './style.css'
import profile from '../../img/profile.svg'
import bag from '../../img/bag.svg'

const icons = [profile, bag]

function IconsHeader() {
    return (
        <ul className='icons'>
            {icons.map((icon) => (
                <li className='icon'><img src={icon} alt=''></img></li>
            ))}
        </ul>
    )
} 

export default IconsHeader