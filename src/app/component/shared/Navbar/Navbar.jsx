"use client";
import { Button, Stack, Typography } from "@mui/material";
import { Nunito } from "next/font/google";
import Lottie from "lottie-react";
import DotMenu from "../../../../assets/dotmenu.json";
import Link from "next/link";
import React from "react";
const nunito = Nunito({ subsets: ["latin"] });
const Navbar = () => {
  return (
    <Stack
      py={2}
      px={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      bgcolor="#EEECEC"
      className={nunito.className}
    >
      <Button size="small" sx={{ bgcolor: "white", color: "black" }}>
        Menu
      </Button>

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        gap={2}
      >
        <Typography
          component={Link}
          href="/baby-accessories"
          fontSize={{ xs: "12px", md: "14px" }}
        >
          Platform
        </Typography>
        <Typography
          component={Link}
          href="/baby-accessories"
          fontSize={{ xs: "12px", md: "14px" }}
        >
          About Company
        </Typography>
        <Typography
          component={Link}
          href="/baby-accessories"
          fontSize={{ xs: "12px", md: "14px" }}
        >
          Services
        </Typography>
        <Typography
          component={Link}
          href="/baby-accessories"
          fontSize={{ xs: "12px", md: "14px" }}
        >
          Career
        </Typography>
        <Typography
          component={Link}
          href="/baby-accessories"
          fontSize={{ xs: "12px", md: "14px" }}
        >
          Contact
        </Typography>
      </Stack>
      <Stack>
        <Typography sx={{ textTransform: "uppercase" }} fontWeight={600}>
          Impact
        </Typography>
      </Stack>
      <Stack
        direction="row"
        gap={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Typography
          component={Link}
          href="/flash-sale"
          fontSize={{ xs: "12px", md: "14px" }}
        >
          213-514-9749
        </Typography>
        <Typography
          component={Link}
          href="/dashboard/all-products"
          fontSize={{ xs: "12px", md: "14px" }}
        >
          info@impact.com
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        gap={2}
      >
        <Typography>23:12</Typography>
        <Button
          className="flex gap-2"
          size="small"
          sx={{ bgcolor: "black", color: "white" }}
        >
          Contact us{" "}
          <Lottie loop={true} className="h-6 w-6" animationData={DotMenu} />
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
