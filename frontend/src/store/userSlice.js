import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null, // Change "value" to "user"
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload
      console.log("userDetails: ", action.payload)
    }
  },
})

export const { setUserDetails } = userSlice.actions

export default userSlice.reducer
