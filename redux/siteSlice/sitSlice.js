


const initState = {
    sidbar:false,
    cart:false
}


export const siteReducer = (state = initState , action)=>{
    switch (action.type) {
        case "handle_sidbar":
            console.log(state.sidbar);
            
            return {
                ...state,
                sidbar:!state.sidbar
            }
    
        default:
            return state
    }
}

