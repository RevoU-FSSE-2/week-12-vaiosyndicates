import initState from "./state";

const enum REDUCER_TYPE {
  SET_LOADING_TRUE,
  SET_LOADING_FALSE,
}

type ReducerAction = {
  type: REDUCER_TYPE,
}

const reducer = (state: typeof initState, action: ReducerAction) : typeof initState => {
  // console.log(`reducer ${JSON.stringify(action)}`)

  switch (action.type) {
    case REDUCER_TYPE.SET_LOADING_TRUE:
      return { ...state, loading: true }

    case REDUCER_TYPE.SET_LOADING_FALSE:
      return { ...state, loading: false }

    default:
      throw new Error();
  }
}

export {
  reducer,
  REDUCER_TYPE,
}