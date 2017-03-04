import axios from 'axios';

//Reviews submitted will send an axios POST to the backend route 'api/reviews' to create a review and then we will push that object to the itemReviews array that will hold the item's current review

const ADD_REVIEW = 'ADD_REVIEW';

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
    default:
      return state;
  }
  return newState;
};


export const addReview = (review) => ({
  type: ADD_REVIEW,
  review
});

export const createReview = (review) => {
  return dispatch => {
    axios.post('/api/reviews', review)
    .then(res => res.data)
    .then(() => dispatch(addReview(review)));
  };
};

//export const
