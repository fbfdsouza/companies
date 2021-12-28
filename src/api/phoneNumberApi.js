import axios from "axios";
export const fetchPhoneNumbers = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/numbers`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPhoneNumberById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/numbers/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchPhoneNumbersByCompanyId = async (id) => {
  try {
    const response = await axios.get(
      `http://localhost:3000/numbers?company_id=${id}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
