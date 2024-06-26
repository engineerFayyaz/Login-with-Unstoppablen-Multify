import React from "react";
import {
  Box,
  chakra,
  Container,
  Stack,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";

import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";

// Define SocialButtonProps interface
interface SocialButtonProps {
  children: ReactNode;
  label: string;
  href: string;
}

// SocialButton component
const SocialButton = ({ children, label, href }: SocialButtonProps) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
      shadow="md"
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

// SmallCentered component
export default function SmallCentered() {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        position="fixed"
        bottom="5rem"
        left="0.3rem"
        as={Stack}
        maxW={"6xl"}
        py={4}
        mt ={100}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction="row" spacing={6}>
          <SocialButton
            label="Twitter"
            href="https://twitter.com/codesinc_pak"
          >
            <FaTwitter />
          </SocialButton>
          <SocialButton label="Discord" href="#">
            <FaDiscord />
          </SocialButton>
          <SocialButton
            label="Github"
            href="#"
          >
            <FaGithub />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
