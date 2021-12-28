import React, { useState, useEffect } from "react";
import BackButton from "../../../components/BackButton";
import { useParams } from "react-router-dom";
import { fetchPhoneNumberById } from "../../../api/phoneNumberApi";
export default () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const { phoneNumberId } = useParams();
  useEffect(() => {
    (async () => {
      const phoneNumberResult = await fetchPhoneNumberById(phoneNumberId);
      setPhoneNumber(phoneNumberResult.data);
    })();
  }, []);

  return (
    <>
      <BackButton>Go Back</BackButton>
      <h1>Phone Number</h1>
      <div>{phoneNumber.id}</div>
      <div>{phoneNumber.type}</div>
    </>
  );
};
