import './Header.css'
import logo from '../../assets/images/logo.svg'
import { useSelector } from 'react-redux'
import { selectHeader } from '../../utils/selector'

const Header = () => {
    const { score } = useSelector(selectHeader)

    return (
        <div className='header'>
            <img src={logo} alt="" className='logo' />
            <div className='score'>
                <p className='score-text'>SCORE</p>
                <div className='score-number'>{score}</div>
            </div>
        </div>
    )
}

export default Header