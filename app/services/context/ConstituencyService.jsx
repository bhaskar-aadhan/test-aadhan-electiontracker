import React, { useState, createContext } from 'react'

export const ConstituencyContext = createContext("aadhan mobile")

export const ConstituencyProvider = ({ children }) => {
  const [ select, setSelect ] = useState(true)
  const [ state, setState ] = useState("Telangana")
  const [ constituency, setConstituency ] = useState("Gajwel")
  return (
      <ConstituencyContext.Provider value={[select,setSelect,state,setState,constituency,setConstituency]}>
        {children}
      </ConstituencyContext.Provider>
    )
}
