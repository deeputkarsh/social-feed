import { UPDATE_LIKE , UPDATE_FEED_DATA } from "./constants";

const initialState = {
    feedData: [],
    users: {},
    feedposts : {},
    questions : {}
}

export const updateState = (state=initialState,action={})=>{
    const data = action.payload;
    switch(action.type){
        case UPDATE_LIKE : 
            const updatedStateField = {};
            updatedStateField[data.element_type] = Object.assign({}, state[data.element_type] || {});
            const selectedElement = updatedStateField[data.element_type][data.element_id] || {};
            selectedElement.totalLikes = data.newLikeCount;
            return {...state,...updatedStateField};
        case UPDATE_FEED_DATA :
            return {...state,...data};
        default :
            return state;
    }
}