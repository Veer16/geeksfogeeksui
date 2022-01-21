// This UsersReducer is like a Table where we are going to store the data

export interface IUser {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

// this particular data will be stored in the Reducer
export interface IStatusizedUser {
  users: IUser[];
  loading: boolean; //If the api has finished or not
}
// Action in Reducer is something which tells the Reducer in which column the data should be stored
interface IUserAction {
  payload: IUser[]; //It is the data which is to be stored
  type: string; //Which column we need to update in the Reducers, it is a unique identifer which tell us where to insert the data something like which table
}

// Creating the Reducer
export const UsersReducer = (
  state: IStatusizedUser, //Whatever the data is being stored in the Reducer will be passed to the state variable and also as  the return type of the Reducer
  action: IUserAction //Which Column we need to update it work as a unique identifier
): IStatusizedUser => {
  switch (action.type) {
    case "started":
      return { ...state, loading: true }; //We cannot change the state thats why we destruct the state using ...
    case "completed":
      return { ...state, users: action.payload, loading: false };
  }
  // If the Action name is incorrect then we have to return the default
  return { loading: true, users: [] };
};
