import { Container } from "@chakra-ui/react";
import React from "react";

const Wrapper = ({ children }) => {
  return (
    <Container maxW={"5xl"} minHeight={"100vh"} my={20}>
      {children}
    </Container>
  );
};

export default Wrapper;
