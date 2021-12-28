import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PhoneNumber from "../../../components/PhoneNumber/PhoneNumber";
import BackButton from "../../../components/BackButton";
import { fetchPhoneNumbersByCompanyId } from "../../../api/phoneNumberApi";
import { fetchCompanyById } from "../../../api/companyApi";
export default () => {
  const [phoneNumbers, setPhoneNumbers] = useState([]);
  const [company, setCompany] = useState("");
  const { companyId } = useParams();
  useEffect(() => {
    (async () => {
      const numbersResult = await fetchPhoneNumbersByCompanyId(companyId);
      const companyResult = await fetchCompanyById(companyId);
      setCompany(companyResult.data.name);
      setPhoneNumbers(numbersResult.data);
    })();
  }, []);

  const renderPhoneList = (phoneNumberList = []) => {
    return phoneNumberList.map((phone) => (
      <PhoneNumber key={phone.id} {...phone} />
    ));
  };
  return (
    <>
      <BackButton>Go Back</BackButton>
      <h1>{company}</h1>
      <table>
        <thead>
          <tr>
            <td>Number</td>
            <td>Type</td>
          </tr>
        </thead>
        <tbody>
          {renderPhoneList(phoneNumbers)}
        </tbody>
      </table>
    </>
  );
};
