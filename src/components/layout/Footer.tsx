"use client";

import React, { useState, useEffect } from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <Footer style={{ 
      textAlign: "center",
      background: "#0c0c1d",
      color: "#fff",
      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
      fontFamily: "Poppins, sans-serif",
      padding: isMobile ? "16px" : "24px",
      fontSize: isMobile ? "12px" : "14px"
    }}>
       ©{new Date().getFullYear()} Created by Baidik Mazumdar
    </Footer>
  );
};

export default AppFooter;
