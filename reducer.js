let id = 0
export default function reducer(state =[], action){
    if(action.type === "add"){
        return [
            ...state,
            {
                id: ++id,
                description: action.payload.description,
                isComplete: false
            }
        ]
    }
    else if(action.type === "remove"){
        return state.filter(ele=>ele.id !== action.payload.id)
    }
    else if(action.type === "completed"){
        let element = state.find(ele=>ele.id===action.payload.id)
        state.filter(ele=>ele === element)
        return state
    }
    else{
        return state
    }
}