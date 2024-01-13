import React from "react";
import { Text } from "react-native";
import  PropTypes  from "prop-types";

export default function Saludar(props) {
  const { firstName, lastName } = props;
  return (
    <Text>
      Hi {firstName} {lastName}
    </Text>
  );
}
//Default fields
Saludar.defaultProps = {
  firstName: "Usuario",
  lastName: "",
};

//Warnings and required fields
Saludar.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,

}
