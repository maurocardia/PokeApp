import { configureStore } from '@reduxjs/toolkit'
import usernameSlice from "./slices/username.slice"
import { useSelector } from 'react-redux'

export default configureStore({
  reducer: {
      username: usernameSlice
	}
})