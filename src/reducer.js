export const reducer = (state,action)=>{
    switch (action.type) {
      case "ADD_ITEM":
        const newItems = [...state.people, action.payload ]
        return {
        ...state,
        people: newItems ,
        isModalOpen: true,
        modalContent : "اضافه شد!"
      }
      case "NO_VALUE":
        return {
          ...state, isModalOpen:true,modalContent:'یک نام وارد کن!'
        }
        case "CLOSE_MODAL":
          return {
            ...state,
            isModalOpen: false
          }
        case "REMOVE_ITEM":
          const newPeople = state.people.filter(item => item.id !== action.payload)
          return {...state, people : newPeople}
    
    
    throw new Error("مقادیر صحیح نیست")
    }
    }