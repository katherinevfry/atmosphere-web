import { createContext, useContext, useState } from 'react';

export const TrackFlowContext = createContext({step: 0, selectedCategories: []});


export const useFlow = () => useContext(TrackFlowContext);

export default function FlowContext({children}) {
  const [step, setStep] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  return (
      <TrackFlowContext.Provider value={{step, setStep, selectedCategories, setSelectedCategories}}>
        {children}
      </TrackFlowContext.Provider>
  )
}