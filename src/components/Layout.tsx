<<<<<<< HEAD
import React from "react";
=======
import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
>>>>>>> 75c132a (First commit)
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import StyledLayout, { StyledContent } from "./StyledLayout";

interface LayoutProps {
  children: React.ReactNode;
<<<<<<< HEAD
  title: string;
=======
  title?: string;
>>>>>>> 75c132a (First commit)
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <StyledLayout>
<<<<<<< HEAD
      <title>{title}</title>
=======
      <title>{title ? `${title} - Bit Academy` : `Bit Academy`}</title>
>>>>>>> 75c132a (First commit)
      <Header />
      <StyledContent>{children}</StyledContent>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
