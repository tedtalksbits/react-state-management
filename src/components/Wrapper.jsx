import { Container } from "@chakra-ui/react";
import React from "react";

const Wrapper = ({ children }) => {
  return (
    <Container maxW={"5xl"} minHeight={"100vh"}>
      {children}
    </Container>
  );
};

export default Wrapper;
