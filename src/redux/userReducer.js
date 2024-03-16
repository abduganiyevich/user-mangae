const defaultState = {
    users: []
  };
  
 export function userReducer(state = defaultState, action) {
    switch (action.type) {
      case "USER_ADD":
        let addCopied = JSON.parse(JSON.stringify(state.users));
        addCopied.push(action.payload); 
        return { ...state, users: addCopied };
  
      case "USER_REMOVE":
        let removeCopied = JSON.parse(JSON.stringify(state.users));
        removeCopied = removeCopied.filter(user => user.id !== action.payload); 
        return { ...state, users: removeCopied };
  
      default:
        return state;
    }
  }
  