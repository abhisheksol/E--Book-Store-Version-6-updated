const initialState = {
    cardData: []
}

export default function Carditems(state = initialState, action) {
    // eslint-disable-next-line default-case
    switch (action.type) {

        case "AddToCart": return {

            ...state,
            cardData: [...state.cardData, action.payload]
        }
    default: return state
    }
    

}