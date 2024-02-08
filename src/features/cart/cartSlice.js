import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   
  value: {
    items:[],
    total:null,
    totalItems:null,
    updateAt:""
  }
}



export const cartSlice = createSlice({
  
  name: 'cart',
  initialState,
  reducers: {
    addItem:(state,action)=>{
          
      const foundItem = state.value.items.find(item => item.id === action.payload.id)
      if(foundItem) foundItem.quantity++
      else state.value.items.push({...action.payload,quantity:1})
      
      state.value.total = state.value.items.reduce((acc,item)=> acc + (item.price * item.quantity),0)
      state.value.updateAt = new Date().toLocaleString()
      state.value.totalItems = state.value.items.reduce((acc,item)=> acc + (item.quantity),0)
      
    },
    removeItem:(state,action)=>{

      const cartUpdated = state.value.items.filter(items => items.id !== action.payload)
      state.value.items = cartUpdated
      state.value.total = state.value.items.reduce((acc,item)=> acc + (item.price * item.quantity),0)
      state.value.updateAt = new Date().toLocaleString()
      state.value.totalItems = state.value.items.reduce((acc,item)=> acc + (item.quantity),0)
      
    },

    removeAllItem: (state) => {
      state.value = {
        items:[],
        total:null,
        totalItems:null,
        updateAt:null
    }
      
    },
    
    
    
  },
})


export const { addItem,removeItem, removeAllItem} = cartSlice.actions

export default cartSlice.reducer