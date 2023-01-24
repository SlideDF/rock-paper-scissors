import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    score: 0
}

const { actions, reducer } = createSlice({
    name: 'header',
    initialState,
    reducers: {
        setScore: (draft, action) => {
            draft.score = action.payload
            return
        },
    }
})

export const { setScore } = actions

export default reducer