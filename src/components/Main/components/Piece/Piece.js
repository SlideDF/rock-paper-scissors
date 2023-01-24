import './Piece.css'
import paper from '../../../../assets/images/icon-paper.svg'
import scissors from '../../../../assets/images/icon-scissors.svg'
import rock from '../../../../assets/images/icon-rock.svg'
import { useEffect, useState } from 'react'

const Piece = ({ name }) => {
    const [icon, setIcon] = useState()

    useEffect(() => {
        if(name.includes('paper')) {
            setIcon(paper)
        }

        if(name.includes('scissors')) {
            setIcon(scissors)
        }

        if(name.includes('rock')) {
            setIcon(rock)
        }
    }, [name])

    return (
        <div className={name + ' piece'}>
            <img src={icon} alt='' />
        </div>
    )
}

export default Piece