import { Link } from "react-router-dom";
export default ({ id, type }) => {
  return (
    <tr key={id}>
        <td><Link to={`/numbers/${id}`}>{id}</Link></td>
        <td>{type}</td>
    </tr>
  );
};
