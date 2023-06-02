import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../app/store'

interface CounterState {
    value: string
    chatRoom: object
  }
  
  // Define the initial state using that type
  const initialState: CounterState = {
    value: '0',
    chatRoom: {
      chatRoomName: '',
      otherUserId: ''
    }
  }
  export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, sentBy) => {
            state.value = String(sentBy.payload)
            console.log('User ID: ',sentBy.payload);
        },
        getData: state => {
            
        },

        setChatRoom: (state, action) => {
          state.chatRoom = {
            chatRoomName: action.payload[0],
            otherUserId: action.payload[1]
          }
        }
    },
  })

  export const {getData, setData, setChatRoom} = dataSlice.actions
  export default dataSlice.reducer