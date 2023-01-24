import './Rules.css'
import close from '../../assets/images/icon-close.svg'
import imageRules from '../../assets/images/image-rules.svg'
import { useDispatch } from 'react-redux'
import { setOpenRules } from '../../features/Footer'

const Rules = () => {
    const dispatch = useDispatch()

    window.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            dispatch(setOpenRules(false))
        }
    })

    return (
        <div className='rules'>
            <div className='rules-wrapper'>
                <div className='title-rules'>RULES</div>
                <img rel="preload" src={imageRules} alt="" className='img-rules'/>
                <img src={close} alt="" className='close' onClick={() => dispatch(setOpenRules(false))} />
            </div>
        </div>
    )
}

export default Rules