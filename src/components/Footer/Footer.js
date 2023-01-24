import { useDispatch } from 'react-redux'
import { setOpenRules } from '../../features/Footer'
import './Footer.css'

const Footer = () => {
    const dispatch= useDispatch()

    return (
        <div className='footer'>
            <button className='button-footer' onClick={() => dispatch(setOpenRules(true))}>Rules</button>
        </div>       
    )
}

export default Footer