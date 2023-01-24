import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    openRules: false
}

const { actions, reducer } = createSlice({
    name: 'footer',
    initialState,
    reducers: {
        setOpenRules: (draft, action) => {
            draft.openRules = action.payload
            return
        }
    }
})

export const { setOpenRules } = actions

export default reducer