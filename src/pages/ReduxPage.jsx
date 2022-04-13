import React from "react";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Code,
  Heading,
  HStack,
  Stack,
} from "@chakra-ui/react";
import { MinusCircle, PlusCircle } from "phosphor-react";
import { PAGESINFO } from "../constants/pagesInfo";
import { useSelector, useDispatch } from "react-redux";
import { addOne, subOne } from "../store/actions/count.actions";

const ReduxPage = () => {
  const { reduxPage } = PAGESINFO;
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <Stack>
      <Alert
        status="warning"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
      >
        <AlertIcon />
        <AlertTitle mr={2}>{reduxPage.title}</AlertTitle>
        <AlertDescription>{reduxPage.desc}</AlertDescription>
      </Alert>

      <Box bg={"pink.100"} p={4}>
        <Heading userSelect={"none"}>count: {count}</Heading>
        <HStack>
          <PlusCircle size={32} onClick={() => dispatch(addOne())} />
          <MinusCircle size={32} onClick={() => dispatch(subOne())} />
        </HStack>
      </Box>
      <Code
        bg={"blackAlpha.200"}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14,
          whiteSpace: "pre-wrap",
        }}
      >
        {reduxPage.code}
      </Code>
    </Stack>
  );
};

export default ReduxPage;
