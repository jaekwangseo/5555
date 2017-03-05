import axios from 'axios';


//Reviews submitted will send an axios POST to the backend route 'api/reviews' to create a review and then we will push that object to the itemReviews array that will hold the item's current review

const ADD_REVIEW = 'ADD_REVIEW';
const GET_ITEM_REVIEWS = 'GET_ITEM_REVIEWS';

//not sure if i need both
const initialState = {
  itemReviews: [],
  itemReview: {}
};


export default (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {

    case ADD_REVIEW:
      newState.itemReviews = [...state.itemReviews, action.review ];
      newState.itemReview = action.review;
      break;
    case GET_ITEM_REVIEWS:

      newState.itemReviews = action.allReviews;
      break;
    default:
      return state;
  }
  return newState;
};

export const gotAllItemReviews = (allReviews) => ({
  type: GET_ITEM_REVIEWS,
  allReviews
});

export const gettingItemReviews = (itemId) => {
  return dispatch => {
    axios.get(`/api/reviews/${itemId}`)
    .then( res => res.data)
    .then((reviews) => dispatch(gotAllItemReviews(reviews)))
    .then(() => console.log('I GOT ALL ITEMS'))
    .catch(err => console.error(err));
  };
};


export const addReview = (review) => ({
  type: ADD_REVIEW,
  review
});

//Will component re-render when I add a review by just calling addReview?

export const createReview = (review) => {
  return dispatch => {
    axios.post('/api/reviews', review)
    .then(res => res.data)
    .then(() => dispatch(addReview(review)))
    .then(() => dispatch(gettingItemReviews(review.item_id)))
    .catch(err => console.error(err));
  };
};

