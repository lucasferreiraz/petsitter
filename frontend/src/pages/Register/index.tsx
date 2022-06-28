import { useState } from "react";
import { Flex, Heading, ScaleFade } from "@chakra-ui/react";
import { SelectProfileType } from "./SelectProfileType";
import { MainInformation } from "./MainInformation";
import { Address } from "./Address";

type FormStep = "selectProfileType" | "mainInformation" | "address";

export interface formStateProps {
  formStep: FormStep;
  prevStep: () => void;
  nextStep: () => void;
}

export function Register() {
  const [formStep, setFormStep] = useState<FormStep>("selectProfileType");

  function nextStep() {
    if (formStep === "selectProfileType") {
      setFormStep("mainInformation");
    } else if (formStep === "mainInformation") {
      setFormStep("address");
    } else if (formStep === "address") {
      setFormStep("selectProfileType");
    }
  }
  function prevStep() {
    if (formStep === "mainInformation") {
      setFormStep("selectProfileType");
    } else if (formStep === "address") {
      setFormStep("mainInformation");
    }
  }

  return (
    <Flex
      w="100vw"
      h="100vh"
      overflow="hidden"
    >
      <Flex
        flex="1"
        align="center"
        justify="center"
      >
        <Heading>IMAGE</Heading>
      </Flex>
      
      <SelectProfileType formStep={formStep} prevStep={prevStep} nextStep={nextStep} />
      <MainInformation formStep={formStep} prevStep={prevStep} nextStep={nextStep} />
      <Address formStep={formStep} prevStep={prevStep} nextStep={nextStep} />
    </Flex>
  );
}