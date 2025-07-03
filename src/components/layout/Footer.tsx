"use client";

import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter: React.FC = () => {
  return (
    <Footer style={{ 
      textAlign: "center",
      background: "rgba(12, 12, 29, 0.95)",
      backdropFilter: "blur(15px)",
      color: "#fff",
      borderTop: "1px solid #333",
      fontFamily: "Poppins, sans-serif"
    }}>
       ©{new Date().getFullYear()} Created by Baidik Mazumdar
    </Footer>
  );
};

export default AppFooter;
