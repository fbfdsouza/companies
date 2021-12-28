import React, { useEffect, useState } from "react";
import Company from "../../../components/Company";
import { fetchCompanies } from "../../../api/companyApi";

export default () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await fetchCompanies();
      setCompanies(result.data);
    })();
  }, []);

  const renderCompanies = (companyArray = []) => {
    return companyArray.map((company) => <Company {...company} />);
  };

  return (
    <>
      <h1>Companies</h1>
      <table>
        <thead>
          <tr>
            <td>Company Name</td>
            <td>Vatin</td>
          </tr>
        </thead>
        <tbody>
          {renderCompanies(companies)}
        </tbody>
      </table>
    </>
  );
};
