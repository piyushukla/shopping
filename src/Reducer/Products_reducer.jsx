

const reducer = (state=[],action)=>{


    if(action.type==="CHANGE_NAME"){
        return [...action.products]
    }

    return state
}

export default reducer