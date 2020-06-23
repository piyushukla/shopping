

const reducer = (state = {}, action) => {


    if (action.type === "UPDATE_QTY") {

     state[action.payload.id]=action.payload.qty
        

                      return  { ...state}

    }

    return state
}

export default reducer