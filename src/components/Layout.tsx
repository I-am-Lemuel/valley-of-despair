import React, { useEffect, useState } from 'react'
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import StyledLayout, { StyledContent } from "./StyledLayout";

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

const Layout = ({ title, children }: LayoutProps) => {

    

    return (
            <StyledLayout>
                <title>{ title ? `${ title } - Bit Academy` : `Bit Academy` }</title>
                <Header/>
                <StyledContent>
                    { children }
                </StyledContent>
                <Footer/>
            </StyledLayout>
    )
}

export default Layout;