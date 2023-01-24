import './Choice.css'
import triangle from '../../../../assets/images/bg-triangle.svg'
import Piece from '../Piece/Piece'
import { setPicked } from '../../../../features/Choice/index.js'
import { getResult } from '../../../../features/Result'
import { useDispatch } from 'react-redux'

const Choice = () => {
    const dispatch = useDispatch()

    const getChoice = async (picked) => {
        await dispatch(setPicked(picked))
        dispatch(getResult())
    }
    
    return (
        <div className='choose'>
            <img src={triangle} className='triangle' alt="" />
            <div onClick={() => getChoice('paper')}>
                <Piece name='paper' />
            </div>
            <div onClick={() => getChoice('scissors')}>
                <Piece name='scissors' />
            </div>
            <div onClick={() => getChoice('rock')}>
                <Piece name='rock' />
            </div>
        </div>
    )
}

export default Choice