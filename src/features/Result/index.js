import { createSlice } from "@reduxjs/toolkit"
import { selectChoice, selectHeader, selectResult } from "../../utils/selector"
import { setScore } from "../Header"

const initialState = {}

const { actions, reducer } = createSlice({
    name: 'result',
    initialState,
    reducers: {
        setHousePicked: (draft, action) => {
            const randomNumber = Math.floor(Math.random() * 3)

            if(randomNumber === 0) {
                
                draft.housePicked = 'paper'
            }
        
            if(randomNumber === 1) {
                draft.housePicked = 'scissors'
            }
        
            if(randomNumber === 2) {
                draft.housePicked = 'rock'
            }
            return
        },
        setResult: (draft, action) => {
            draft.result = action.payload
            return
        },
        resetResult: () => {
            return initialState
        }
    }
})

export const getResult = () => {
    return (dispatch, getState) => {

        setTimeout(async () => {
            await dispatch(setHousePicked())

            const { housePicked } = selectResult(getState())
            const { score } = selectHeader(getState())
            const { picked } = selectChoice(getState())
    
            setTimeout(() => {
                if(picked === housePicked) {
                    dispatch(setResult('DRAW'))
                    return
                }
            
                if((picked === 'paper' && housePicked === 'rock') || (picked === 'scissors' && housePicked === 'paper') || (picked === 'rock' && housePicked === 'scissors')) {
                    dispatch(setScore(score + 1))
                    dispatch(setResult('YOU WIN'))
                    return
                }
            
                dispatch(setScore(score - 1))
                dispatch(setResult('YOU LOSE'))
                return
            }, 1000)
        }, 1000)
    }
}



// setTimeout(() => {

// }, 2000)

export const { setResult, setHousePicked, resetResult } = actions

export default reducer