import axios from "axios";

export const fetchCompanies = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/companies`);
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCompanyById = async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/companies/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
