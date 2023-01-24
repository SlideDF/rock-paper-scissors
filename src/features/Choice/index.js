import { createSlice } from "@reduxjs/toolkit"

const initialState = {}

const { actions, reducer } = createSlice({
    name: 'choice',
    initialState,
    reducers: {
        setPicked: (draft, action) => {
            draft.picked = action.payload
            return
        },
        resetChoice: () => {
            return initialState
        }
    }
})

export const { setPicked, resetChoice } = actions

export default reducer