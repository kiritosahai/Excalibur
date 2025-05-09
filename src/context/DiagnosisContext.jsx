
import React, { createContext, useContext, useState } from "react";

const DiagnosisContext = createContext({
  triggerFileUpload: () => {},
  setTriggerFileUpload: () => {},
  useCameraMode: false,
  setUseCameraMode: () => {},
});

export const DiagnosisProvider = ({ children }) => {
  const [triggerFileUpload, setTriggerFileUploadState] = useState(() => {});
  const [useCameraMode, setUseCameraMode] = useState(false);

  const setTriggerFileUpload = (callback) => {
    setTriggerFileUploadState(() => callback);
  };

  return (
    <DiagnosisContext.Provider value={{ 
      triggerFileUpload, 
      setTriggerFileUpload,
      useCameraMode,
      setUseCameraMode
    }}>
      {children}
    </DiagnosisContext.Provider>
  );
};

export const useDiagnosis = () => useContext(DiagnosisContext);
