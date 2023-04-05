import { Divider, IconButton, Stack } from "@mui/material";
import { GoogleLogo, TwitterLogo, GithubLogo } from "phosphor-react";
import React from "react";

export default function AuthSocial() {
  const handleGoogleLogin = async () => {};
  const handleGithubLogin = async () => {};
  const handleTwitterLogin = async () => {};
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disable",
          "&::before, ::after": { borderTopStyle: "dashed" },
        }}>
        OR
      </Divider>
      <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton onClick={handleGoogleLogin}>
          <GoogleLogo color="#DF3E30" />
        </IconButton>

        <IconButton color="inherit" onClick={handleGithubLogin}>
          <GithubLogo />
        </IconButton>

        <IconButton onClick={handleTwitterLogin}>
          <TwitterLogo color="#1C9CEA" />
        </IconButton>
      </Stack>
    </div>
  );
}
