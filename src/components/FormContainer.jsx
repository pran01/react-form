import StateLoader from "./StateLoader";
import PersonalForm from "./PersonalForm";
import BusinessForm from "./BusinessForm";
import { useState } from "react";
import ModeSelector from "./ModeSelector";
import BankDetailForm from "./BankDetailForm";
import AddressForm from "./AddressForm";
import SubmittedData from "./SubmittedData";

const FormContainer = (props) => {
  const [individual, setIndividual] = useState(true);
  const [stage, setStage] = useState(1);
  const [country, setCountry] = useState("India");
  const [address, setAddress] = useState({
    country: country,
    city: "",
    postcode: "",
    fullAdd: "",
  });
  const [personalData, setPersonalData] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
  });
  const [businessData, setBusinessData] = useState({
    cName: "",
    email: "",
    number: "",
  });
  const [bankDetails, setBankDetails] = useState({
    forIndia: { currency: "INR", ifsc: "", acno: "" },
    forUSA: {
      currency: "USD",
      format: "Local",
      ach: "",
      acno: "",
      type: "checking",
      swift: "",
    },
  });
  return (
    <div
      className="w-[90%] sm:w-2/5 h-4/5 md:h-[95%] bg-sky-900/90 rounded-md 
    flex flex-col items-center shadow-lg overflow-y-auto">
      {stage <= 3 && <StateLoader stage={stage} />}
      {stage === 1 && <ModeSelector setIndividual={setIndividual} />}
      {stage === 1 &&
        (individual ? (
          <PersonalForm
            stage={stage}
            setStage={setStage}
            personalData={personalData}
            setPersonalData={setPersonalData}
          />
        ) : (
          <BusinessForm
            stage={stage}
            setStage={setStage}
            businessData={businessData}
            setBusinessData={setBusinessData}
          />
        ))}
      {stage === 2 && (
        <BankDetailForm
          country={country}
          setCountry={setCountry}
          stage={stage}
          setStage={setStage}
          bankDetails={bankDetails}
          setBankDetails={setBankDetails}
        />
      )}
      {stage === 3 && (
        <AddressForm
          country={country}
          stage={stage}
          setStage={setStage}
          address={address}
          setAddress={setAddress}
        />
      )}
      {stage === 4 && (
        <SubmittedData
          individual={individual}
          country={country}
          personalData={personalData}
          businessData={businessData}
          bankDetails={bankDetails}
          address={address}
        />
      )}
    </div>
  );
};

export default FormContainer;
