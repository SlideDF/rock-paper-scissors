import { useSelector } from 'react-redux'
import { selectChoice } from '../../utils/selector'
import Choice from './components/Choice/Choice'
import Result from './components/Result/Result'
import './Main.css'

const Main = () => {
    const { picked } = useSelector(selectChoice)

    return (
        <div className='main'>
            {picked ? (
                <Result />
                ) : (
                    <Choice />
                )}
        </div>
    )
}

export default Main