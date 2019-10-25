import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";

/* const sendDebugmessage = (propX, message) => {
  console.log(propX);
  return;
}; */
const Country = props => {
  const dispatch = useDispatch();
  const country = props.country || {};
  const fields = props.fields || {};
  const addToList = () => {
    dispatch({ type: "SELECT_COUNTRY", payload: props.country });

    return;
  };
  const removeFromList = () => {
    dispatch({ type: "SELECT_COUNTRY", payload: props.country });

    return;
  };
  return (
    <React.Fragment>
      <tr onClick={() => props.onClick(props)}>
        {Object.entries(country).map((key, index) => {
          if (fields.includes(key[0])) {
            return (
              <td className="col" key={index}>
                {key[1]}
              </td>
            );
          }
          return;
        })}
      </tr>
    </React.Fragment>
  );
};

export default Country;
