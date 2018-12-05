import { UPDATE_LIKE , UPDATE_FEED_DATA } from './constants';
const updateLike = (data) =>({
    type: UPDATE_LIKE,
    payload: data
})
const updateFeedData = (data) =>({
    type: UPDATE_FEED_DATA,
    payload: data
})
export {
    updateLike,
    updateFeedData
}