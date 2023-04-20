const initialState = {
  data: {
    profile: {
      area: "",
      bio: "",
      email: "",
      image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
      name: "",
      surname: "",
      title: "",
      username: "",
    },
    exp: [], // esperienze lavorative
    allProfiles:[]//tutti i profili 
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PROFILE":
      return {
        ...state,
        data: {
          ...state.data,
          profile: action.payload,
        },
      };
    case "GET_EXPS":
      return {
        ...state,
        data: {
          ...state.data,
          exp: action.payload,
        },
      };
      case "GET_ALL_PROFILE":
        return {
          ...state,
          data: {
            ...state.data,
            allProfiles: action.payload,
          },
        };
    default:
      return state;
  }

};

export default mainReducer;
