import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'
import { reverseSring } from '@/app/helpers/functions'

interface CounterState {
  value: string
}

const initialState: CounterState = {
  value: '',
}

export const counterSlice = createSlice({
  name: 'string',
  initialState,
  reducers: {
    setStr: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    reset:(state)=>{
        state.value = ''
    },
    reverseStr: (state, action: PayloadAction<string>) => {
      state.value = reverseSring(action.payload)
    },
  },
})

export const {setStr, reset, reverseStr } = counterSlice.actions

export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer