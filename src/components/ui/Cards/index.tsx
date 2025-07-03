import { Card, Typography, Space, Avatar } from "antd";
import React, { type FC } from "react";

const { Title, Text, Paragraph } = Typography;

export interface EducationCardProps {
  logo?: React.ReactNode;
  institution: string;
  degree: string;
  duration: string;
  grade?: string;
  description?: string;
}

export const EducationCard: FC<EducationCardProps> = ({
  logo,
  institution,
  degree,
  duration,
  grade,
  description,
}) => {
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
      bodyStyle={{ padding: 24 }}
      bordered={false}
    >
      <Space align="start" size="middle">
        {logo && (
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
        )}
        <div>
          <Title level={4} style={{ color: "#fff", marginBottom: 4 }}>
            {institution}
          </Title>
          <Text type="secondary" style={{ fontSize: 14, color: "#aaa" }}>
            {degree}
          </Text>
          <br />
          <Text style={{ color: "#888", fontSize: 13 }}>{duration}</Text>
        </div>
      </Space>

      {grade && (
        <Text style={{ display: "block", marginTop: 16, fontSize: 14 }}>
          <b>Grade</b>: {grade}
        </Text>
      )}

      {description && (
        <Paragraph style={{ color: "#ccc", marginTop: 12, fontSize: 14 }}>
          {description}
        </Paragraph>
      )}
    </Card>
  );
};
