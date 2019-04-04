import * as React from "react";
import styled from "styled-components";

interface TextInputProps {
  title: string;
  type?: string;
  value: string;
  multiline?: boolean;
  handleChange(arg0: string): void;
}

function TextInput(props: TextInputProps) {
  const { title } = props;
  const inputProps = { ...props, type: props.type ? props.type : "text" };
  const multiline = props.multiline ? props.multiline : false;

  return (
    <>
      <StyledLabel htmlFor={title}>{title}</StyledLabel>
      {multiline ? textarea(inputProps) : input(inputProps)}
    </>
  );
}

function input(props: TextInputProps) {
  const { title, type, value, handleChange } = props;

  return (
    <input
      id={title}
      type={type}
      value={value}
      autoComplete="off"
      onChange={e => handleChange(e.target.value)}
      style={styles}
    />
  );
}

function textarea(props: TextInputProps) {
  const { title, value, handleChange } = props;

  return (
    <textarea
      id={title}
      value={value}
      onChange={e => handleChange(e.target.value)}
      style={{ ...styles, resize: "none", height: 100 }}
    />
  );
}

const styles = {
  background: "rgba(255, 255, 255, 0.2)",
  border: 0,
  borderBottom: "2px dashed #4a4a4a",
  marginBottom: 32,
  padding: 8,
};

const StyledLabel = styled.label`
  text-transform: uppercase;
`;

export default TextInput;
