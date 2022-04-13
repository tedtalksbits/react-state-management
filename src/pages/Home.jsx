import { Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Home = () => {
  return (
    <Container maxW={"5xl"}>
      <Stack
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        textAlign={"left"}
        align={"left"}
      >
        <Heading>What is state in React?</Heading>
        <Text>
          In modern React, we build our applications with functional components.
          Components are themselves JavaScript functions, independent and
          reusable bits of code.
        </Text>
        <Text>
          The state is an object that holds information about a certain
          component. Plain JavaScript functions don't have the ability to store
          information. The code within them executes and "dissapears" once the
          execution is finished.
        </Text>
      </Stack>
    </Container>
  );
};

export default Home;
