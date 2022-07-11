import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from 'react';

type FormStepType = 
"selectProfileType"
| "mainInformation"
| "address"
| "registerPet"
| "registerSitter";
type ProfileType = "proprietario" | "cuidador";

interface RegisterContextData {
  formStep: FormStepType;
  setFormStep: Dispatch<SetStateAction<FormStepType>>;
  nextStep: () => void;
  prevStep: () => void;
  profileType: ProfileType;
  setProfileType: Dispatch<SetStateAction<ProfileType>>;
}

const RegisterContext = createContext<RegisterContextData>(
  {} as RegisterContextData,
);

export function RegisterProvider({ children }: { children: ReactNode }) {
  const [formStep, setFormStep] = useState<FormStepType>("selectProfileType");
  const [profileType, setProfileType] = useState<ProfileType>("proprietario");

  function nextStep() {
    if (formStep === "selectProfileType") {
      setFormStep("mainInformation");
    } else if (formStep === "mainInformation") {
      setFormStep("address");
    } else if (formStep === "address") {
      setFormStep(profileType === "proprietario" ? "registerPet" : "registerSitter");
    }
  }
  function prevStep() {
    if (formStep === "mainInformation") {
      setFormStep("selectProfileType");
    } else if (formStep === "address") {
      setFormStep("mainInformation");
    } else if (formStep === "registerPet" || formStep === "registerSitter") {
      setFormStep("address");
    }
  }

  return (
    <RegisterContext.Provider
      value={{
        formStep,
        setFormStep,
        nextStep,
        prevStep,
        profileType,
        setProfileType
      }}
    >
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegister() {
  const context = useContext(RegisterContext);

  return context;
}