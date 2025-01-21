import { AxiosResponse } from "axios";

export const UserActionTypes = {
    FETCH_USERS_REQUEST: '@user/FETCH_USERS_REQUEST',
    GET_USERS_REQUEST: '@user/GET_USERS_REQUEST',
    TOGGLE_FAVORITE: '@user/TOGGLE_FAVORITE',
    CHANGE_LOADING: '@user/CHANGE_LOADING',
    FETCH_USER_BY_ID_REQUEST: '@user/FETCH_USER_BY_ID_REQUEST',
    GET_USER_BY_ID_REQUEST: '@user/GET_USER_BY_ID_REQUEST'
  };

  export interface UserData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }

  export interface RootState {
    User: {
      usersList: any[];
      favorites: number[];
      loading: boolean;
      userDetails: UserData;
    };
  }
  export interface UsersState {
    usersList: any[];
    favorites: number[];
    loading: boolean;
    userDetails: UserData | null;
  }

  const initialState: UsersState = {
    usersList: [],
    favorites: [],
    loading: false,
    userDetails: null,
  };


  
  export const reducer = (state = initialState,  action: { type: string; payload?: any }) => {
    switch (action.type) {
      case UserActionTypes.FETCH_USERS_REQUEST:
        return {
          ...state,
          loading: true,
        };
    case UserActionTypes.GET_USERS_REQUEST:
        return {
            ...state,
            usersList: action.payload,
        }
    case UserActionTypes.TOGGLE_FAVORITE:
        const userId = action.payload;
          return {
            ...state,
            favorites: state.favorites.includes(userId)
              ? state.favorites.filter(id => id !== userId)
              : [...state.favorites, userId],
          };
    case UserActionTypes.CHANGE_LOADING:
          return {
            ...state,
            loading: action.payload,
          };
    case UserActionTypes.GET_USER_BY_ID_REQUEST:
          return {
            ...state,
            userDetails: action.payload,
          };
      default:
        return state;
    }
  };

  export const fetchUsers = () => ({
    type: UserActionTypes.FETCH_USERS_REQUEST,
  });
  
  export const setUsersList = (payload: any) => ({
    type: UserActionTypes.GET_USERS_REQUEST,
    payload,
  });
  
  export const toggleFavorite = (userId: number) => ({
    type: UserActionTypes.TOGGLE_FAVORITE,
    payload: userId,
  });
  
  export const changeLoading = (payload: boolean) => ({
    type: UserActionTypes.CHANGE_LOADING,
    payload
  })

  export const fetchUserByID = (userId: string) => ({
    type: UserActionTypes.FETCH_USER_BY_ID_REQUEST,
    userId,
  });

  export const setUserDetails = (payload: AxiosResponse<UserData>) => ({
    type: UserActionTypes.GET_USER_BY_ID_REQUEST,
    payload
  })