const initialState = {
  loading: false,
  classes: [],
  students: [],
  tutors: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "STUDENTS":
      return {
        ...state,
        students: action.payload,
        loading: true
      };
    case "CLASSES":
      return {
        ...state,
        classes: action.payload,
        loading: false
      };
    case "TUTORS":
      return {
        ...state,
        tutors: action.payload
      };
    default:
      return state;
  }
};
