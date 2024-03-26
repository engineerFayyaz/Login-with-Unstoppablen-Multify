import UAuth from "@uauth/js";
import React, { useEffect, useState } from "react";
import { Avatar, Button } from "@chakra-ui/react";

const uauth = new UAuth({
  clientID: "1458e201-d57a-4b62-856e-a134be2cf02e",
  redirectUri: "https://login-with-unstoppablen-multify.vercel.app/callback",
});

function ConnectUNS() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [user, setUser] = useState();

  useEffect(() => {
    setLoading(true);
    uauth
      .user()
      .then(setUser)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  //Login/out Functions
  const handleLogin = () => {
    setLoading(true);
    uauth
      .loginWithPopup()
      .then(() => uauth.user().then(setUser))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const handleLogout = () => {
    setLoading(true);
    uauth
      .logout()
      .then(() => setUser(undefined))
      .catch(setError)
      .finally(() => setLoading(false));
  };

  const getEllipsisTxt = (str, n = 6) => {
    if (str) {
      return `${str.slice(0, n)}...${str.slice(str.length - n)}`;
    }
    return "";
  };

  console.log(loading);

  if (user) {
    return (
      <Button
        colorScheme="teal"
        variant="outline"
        w="4xs"
        display="flex"
        alignItems="center"
        justifyContent="center"
        fontSize={{ base: "md", md: "lg" }}
        cursor="pointer"
        onClick={handleLogout}
      >
        <Avatar
          size="sm"
          name="unstoppable domains"
          src="https://codes-inc.com/img/home-header-logo.png"
          // src="https://crypto.jobs/storage/company-logos/yC2CISvH6kg2kZkNnzbACeuxOHmlYZj9rzsDbeVx.png"
          mr={2}
        />
        {user.sub}
      </Button>
    );
  }

  return (
    <Button
      colorScheme="teal"
      variant="outline"
      w="4xs"
      display="flex"
      alignItems="center"
      justifyContent="center"
      fontSize={{ base: "md", md: "lg" }}
      cursor="pointer"
      onClick={handleLogin}
    >
      Login UNS Domains
    </Button>
  );
}
export default ConnectUNS;
