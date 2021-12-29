import { Link } from "react-router-dom";
const PhoneNumber = ({ id, type }) => {
  return (
    <tr key={id}>
        <td><Link to={`/numbers/${id}`}>{id}</Link></td>
        <td>{type}</td>
    </tr>
  );
};

export default PhoneNumber;