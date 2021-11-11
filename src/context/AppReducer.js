/* eslint-disable import/no-anonymous-default-export */

// Reducer specifies the application state changes
// in response to certain action to our store/context
export default (state, action) => {
    switch(action.type) {
        case 'DELETE_ASSET':
            return {
                // payload: id
                ...state,
                assets: state.assets.filter(assets => assets.id !== action.payload)                                       
            }
        case 'ADD_ASSET':
            return {
                // payload: asset
                ...state,
                assets: [action.payload, ...state.assets]
            }
        default: 
            return state;
    
    }
}
