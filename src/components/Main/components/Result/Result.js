import { useDispatch, useSelector } from 'react-redux'
import { resetChoice } from '../../../../features/Choice'
import { resetResult } from '../../../../features/Result'
import { selectChoice, selectResult } from '../../../../utils/selector'
import Piece from '../Piece/Piece'
import './Result.css'

const Result = () => {
    const { housePicked, result } = useSelector(selectResult)
    const { picked } = useSelector(selectChoice)
    const dispatch = useDispatch()

    const newGame = () => {
        dispatch(resetChoice())
        dispatch(resetResult())
    }
    
    return (
        <div className='result'>
            <div className='wrapper-picked'>
                <div className='picked picked-player'>
                    <Piece name={picked + ' player'}/>
                    <p className='title-picked'>YOU PICKED</p>
                </div>
                <div className='picked picked-house'>
                    {housePicked ? (
                        <Piece name={housePicked + ' player'} />
                    ) : (
                        <div className='picked-pending'></div>
                    )}
                    <p className='title-picked'>THE HOUSE PICKED</p>
                </div>
                <div className='result-wrapper'>
                        <div className='result-picked'>{result}</div>
                        {result ? (
                            <button className='play-again' onClick={() => newGame()}>PLAY AGAIN</button>
                        ) : null}
                </div>
            </div>
        </div>
    )
}

export default Result