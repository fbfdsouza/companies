import { Link } from "react-router-dom";
export default ({ id, name, vatin }) => {
  return (
    <tr key={id}>
      <td>
        <Link to={`companies/${id}`}>{name}</Link>
      </td>
      <td>{vatin}</td>
    </tr>
  );
};
