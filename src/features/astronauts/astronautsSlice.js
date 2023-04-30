// Action Creators
export function fetchAstronauts() {
  return function (dispatch) {
    // dispatch action to indicate that we are about to make a request to our API
    dispatch({ type: "astronauts/astronautsLoading" });

    // make a request
    fetch("http://api.open-notify.org/astros.json")
      .then((response) => response.json())
      .then((astronauts) =>
        dispatch({
          type: "astronauts/astronautsLoaded",
          payload: astronauts.people,
        })
      );
  };
}

// Reducers
// We can update our reducer to include both types and to also change a
// bit of state to indicate if data is in the process of being fetched.
// We'll modify the initial state to do this:

const initialState = {
  entities: [], //array of astronauts
  status: "idle", //loading status for fetch
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoaded":
      return {
        ...state,
        status: "idle",
        entities: action.payload,
      };
    case "astronauts/astronautsLoading":
      return {
        ...state,
        status: "loading",
      };
    default:
      return state;
  }
}

// Now, we have a way to indicate in our app when data is being loaded! 
// If status is 'loading', we could display a loading message in our 
// components.
