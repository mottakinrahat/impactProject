"use client";
import { Box, Button, Stack, Typography } from "@mui/material";

import React from "react";

const Footer = () => {
  return (
    <Box bgcolor="#2D2D2D" color="white" py="20px">
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="top"
        gap={10}
      >
        <Box>Hello</Box>
        <Box>
          <Typography color="white" maxWidth={500} sx={{ fontSize: "30px" }}>
            Would You Like To Try our System?
            <span className="text-[#939393]">
              in a basic configuration and get useful data about business today?
              Let's discuss it!
            </span>
          </Typography>
          <Button
            sx={{
              bgcolor: "#00CE84",
              color: "black",
              borderRadius: "30px",
              marginTop: "10px",
            }}
          >
            Discuss
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Footer;
