import React, { createContext, useContext } from 'react'
export const resumeContext =  createContext()
export const useResume = () => useContext(resumeContext);

const ResumeContextResume = ({children}) => {
const arr=[1,2,3];


const values={
    arr,
}
  return (
    <resumeContext.Provider value={values}>
        {children}
    </resumeContext.Provider>
  )
}
    
export default ResumeContextResume