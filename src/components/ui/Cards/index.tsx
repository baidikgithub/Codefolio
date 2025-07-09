import { Card, Typography, Space, Avatar } from "antd";
import React, { type FC, useState, useEffect } from "react";

const { Title, Text, Paragraph } = Typography;

export interface EducationCardProps {
  logo?: React.ReactNode;
  institution: string;
  degree: string;
  // duration: string;
  grade?: string;
  description?: string;
}

export const EducationCard: FC<EducationCardProps> = ({
  logo,
  institution,
  degree,
  // duration,
  grade,
  description,
}) => {
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
    <Card
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.03)",
        border: "1px solid #1f1f2e",
        color: "#fff",
        fontFamily: "Poppins, sans-serif",
        borderRadius: 12,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.4)",
      }}
      bodyStyle={{ padding: isMobile ? 16 : 24 }}
      bordered={false}
    >
      <Space align="start" size="middle" direction={isMobile ? "vertical" : "horizontal"}>
        {/* {logo && (
          <Avatar
            shape="circle"
            size={48}
            src={logo}
            alt="Institution Logo"
            style={{
              backgroundColor: "#fff",
              padding: 4,
              border: "1px solid #333",
            }}
          />
        )} */}
        <div style={{ width: '100%' }}>
          <Title 
            level={isMobile ? 5 : 4} 
            style={{ 
              color: "#fff", 
              marginBottom: 4,
              fontSize: isMobile ? '16px' : '18px'
            }}
          >
            {institution}
          </Title>
          <Text 
            type="secondary" 
            style={{ 
              fontSize: isMobile ? 12 : 14, 
              color: "#aaa",
              display: 'block',
              marginBottom: isMobile ? 8 : 0
            }}
          >
            {degree}
          </Text>
          <br />
          {/* <Text style={{ color: "#888", fontSize: 13 }}>{duration}</Text> */}
        </div>
      </Space>

      {grade && (
        <Text style={{ 
          display: "block", 
          marginTop: isMobile ? 12 : 16, 
          fontSize: isMobile ? 12 : 14 
        }}>
          <b>Grade/Percentage</b>: {grade}
        </Text>
      )}

      {description && (
        <Paragraph style={{ 
          color: "#ccc", 
          marginTop: isMobile ? 8 : 12, 
          fontSize: isMobile ? 12 : 14,
          lineHeight: isMobile ? '1.4' : '1.6'
        }}>
          {description}
        </Paragraph>
      )}
    </Card>
  );
};
