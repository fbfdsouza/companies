import React, { useState, useEffect } from "react";
import BackButton from "../../../components/BackButton";
import { useParams } from "react-router-dom";
import { fetchPhoneNumberById } from "../../../api/phoneNumberApi";
const PhoneNumber = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { phoneNumberId } = useParams();
  useEffect(() => {
    (async () => {
      const phoneNumberResult = await fetchPhoneNumberById(phoneNumberId);
      setPhoneNumber(phoneNumberResult.data);
    })();
  }, [phoneNumberId]);

  return (
    <>
      <BackButton>Go Back</BackButton>
      <h1>Phone Number</h1>
      <div>{phoneNumber.id}</div>
      <div>{phoneNumber.type}</div>
    </>
  );
};

export default PhoneNumber