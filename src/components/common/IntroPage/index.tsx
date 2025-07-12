// pages/portfolio.tsx or app/portfolio/page.tsx
"use client";

import React from "react";
import { Typography } from "antd";
import { motion } from "framer-motion";

const { Text } = Typography;

const words = ["Baidik", "Mazumdar", "Portfolio"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const skipVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: {
      delay: 2,
      duration: 0.5
    }
  },
};

const PortfolioPage: React.FC = () => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#0c0c1d",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ display: "flex", gap: "12px" }}
      >
        {words.map((word, index) => (
          <motion.div key={index} variants={wordVariants}>
            <Text style={{ color: "#1890ff", fontSize: 48, fontWeight: 700 }}>
              {word}
            </Text>
          </motion.div>
        ))}
      </motion.div>

      {/* Skip indicator */}
      <motion.div
        variants={skipVariants}
        initial="hidden"
        animate="visible"
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
      </motion.div>
    </div>
  );
};

export default PortfolioPage;
