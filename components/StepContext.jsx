import { createContext, useContext, useState } from 'react';

export const TrackStepContext = createContext(0);


export const useStep = () => useContext(TrackStepContext);

export default function StepContext({children}) {
  const [step, setStep] = useState(0);
  return (
      <TrackStepContext.Provider value={{step, setStep}}>
        {children}
      </TrackStepContext.Provider>
  )
}