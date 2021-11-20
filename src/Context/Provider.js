import React, {createContext, useReducer} from 'react';
import Auth_Reducer from './Reducers/Auth_Reducer';
import Home_Reducer from './Reducers/Home_Reducer';
import Auth_Initial from './InitialStates/Auth_Initial';
import Home_Initial from './InitialStates/Home_Initial';

export const GlobalContext = createContext({});

function GlobalProvider({children}) {
  const [authState, authDispatch] = useReducer(Auth_Reducer, Auth_Initial);
  const [HomeState, HomeDispatch] = useReducer(Home_Reducer, Home_Initial);

  return (
    <GlobalContext.Provider
      value={{authState, authDispatch, HomeState, HomeDispatch}}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalProvider;
