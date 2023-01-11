const SubmittedData = ({
  individual,
  country,
  personalData,
  businessData,
  bankDetails,
  address,
}) => {
  return (
    <div className="w-4/5 text-white mt-10 flex flex-col justify-center items-start">
      <h1 className="text-2xl font-bold self-center mb-4">Submitted Data</h1>
      {individual ? (
        <div className="w-full flex flex-col items-start">
          <span className="font-bold">Personal Info</span>
          <div>First Name: {personalData.fName}</div>
          <div>Last Name: {personalData.lName}</div>
          <div>Email: {personalData.email}</div>
          <div>Number: {personalData.number}</div>
        </div>
      ) : (
        <div className="w-full flex flex-col items-start">
          <span className="font-bold">Company Info</span>
          <div>Company Name: {businessData.cName}</div>
          <div>Email: {businessData.email}</div>
          <div>Number: {businessData.number}</div>
        </div>
      )}
      <div className="mt-2 w-full flex items-start">Country: {country}</div>
      {country === "India" && (
        <div className="w-full flex flex-col items-start mt-4">
          <span className="font-bold">Bank Details</span>
          <div>IFSC Code: {bankDetails.forIndia.ifsc}</div>
          <div>Account Number: {bankDetails.forIndia.acno}</div>
        </div>
      )}
      {country === "USA" && (
        <div className="w-full flex flex-col items-start mt-4">
          <span className="font-bold">Bank Details</span>
          <div>Format: {bankDetails.forUSA.format}</div>
          {bankDetails.forUSA.ach !== "" && (
            <div>ACH routing number: {bankDetails.forUSA.ach}</div>
          )}
          {bankDetails.forUSA.acno !== "" && (
            <div>Account number: {bankDetails.forUSA.acno}</div>
          )}
          {bankDetails.forUSA.type !== "" && (
            <div>Account Type: {bankDetails.forUSA.type}</div>
          )}
          {bankDetails.forUSA.swift !== "" && (
            <div>Swift Code: {bankDetails.forUSA.swift}</div>
          )}
        </div>
      )}
      <div className="w-full flex flex-col items-start mt-4">
        <span className="font-bold">Address</span>
        <div>City: {address.city}</div>
        <div>Postal Code: {address.postcode}</div>
        <div>Full Address: {address.fullAdd}</div>
      </div>
    </div>
  );
};

export default SubmittedData;
