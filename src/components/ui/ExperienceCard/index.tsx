import React, { useState, useEffect } from 'react';
import { Card, Typography, Tag, Space, Divider } from 'antd';
import { motion } from 'framer-motion';
import { CalendarOutlined, EnvironmentOutlined, BuildOutlined } from '@ant-design/icons';

const { Title, Text, Paragraph } = Typography;

export type Experience = {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  technologies: string[];
};

export type ExperienceCardProps = {
  experience: Experience;
};

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <Card
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          color: '#fff',
          borderRadius: 20,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(15px)',
          marginBottom: 32,
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
        }}
        bodyStyle={{ padding: isMobile ? 20 : 32 }}
        hoverable
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-5px)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
        }}
      >
        {/* Header Section */}
        <div style={{ marginBottom: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
            <div style={{ flex: 1 }}>
              <Title 
                level={isMobile ? 4 : 3} 
                style={{ 
                  color: '#fff', 
                  marginBottom: 8, 
                  fontFamily: 'EB Garamond, serif',
                  fontSize: isMobile ? '18px' : '24px',
                  fontWeight: 600
                }}
              >
                {experience.title}
              </Title>
              <Text 
                style={{ 
                  color: '#1890ff', 
                  fontSize: isMobile ? 16 : 18, 
                  fontWeight: 600, 
                  fontFamily: 'Poppins, sans-serif',
                  display: 'block',
                  marginBottom: 12
                }}
              >
                {experience.company}
              </Text>
            </div>
            <div style={{ 
              backgroundColor: 'rgba(24, 144, 255, 0.1)', 
              padding: '8px 16px', 
              borderRadius: 20,
              border: '1px solid rgba(24, 144, 255, 0.3)'
            }}>
              <Text style={{ 
                color: '#1890ff', 
                fontSize: isMobile ? 12 : 14,
                fontWeight: 500,
                fontFamily: 'Poppins, sans-serif'
              }}>
                {experience.duration}
              </Text>
            </div>
          </div>

          {/* Location and Duration Info */}
          <Space 
            size="large" 
            direction={isMobile ? "vertical" : "horizontal"}
            style={{ width: '100%', marginBottom: 16 }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <CalendarOutlined style={{ color: '#1890ff', fontSize: isMobile ? 14 : 16 }} />
              <Text style={{ 
                color: '#ccc', 
                fontSize: isMobile ? 13 : 15,
                fontFamily: 'Poppins, sans-serif'
              }}>
                {experience.duration}
              </Text>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <EnvironmentOutlined style={{ color: '#1890ff', fontSize: isMobile ? 14 : 16 }} />
              <Text style={{ 
                color: '#ccc', 
                fontSize: isMobile ? 13 : 15,
                fontFamily: 'Poppins, sans-serif'
              }}>
                {experience.location}
              </Text>
            </div>
          </Space>
        </div>

        <Divider style={{ 
          borderColor: 'rgba(255, 255, 255, 0.1)', 
          margin: '16px 0' 
        }} />

        {/* Description */}
        <Paragraph style={{ 
          color: '#ddd', 
          fontSize: isMobile ? 14 : 16, 
          lineHeight: 1.7, 
          marginBottom: 24,
          fontFamily: 'Poppins, sans-serif',
          textAlign: 'justify'
        }}>
          {experience.description}
        </Paragraph>

        {/* Technologies Section */}
        <div style={{ marginTop: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <BuildOutlined style={{ color: '#1890ff', fontSize: isMobile ? 14 : 16 }} />
            <Text style={{ 
              color: '#fff', 
              fontSize: isMobile ? 13 : 15,
              fontWeight: 600,
              fontFamily: 'Poppins, sans-serif'
            }}>
              Technologies Used
            </Text>
          </div>
          <Space wrap style={{ width: '100%' }}>
            {experience.technologies.map((tech, index) => (
              <Tag 
                key={index} 
                color="blue" 
                style={{ 
                  fontWeight: 500, 
                  fontSize: isMobile ? 11 : 13,
                  padding: isMobile ? '4px 10px' : '6px 12px',
                  borderRadius: 20,
                  border: '1px solid rgba(24, 144, 255, 0.3)',
                  backgroundColor: 'rgba(24, 144, 255, 0.1)',
                  color: '#1890ff',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                {tech}
              </Tag>
            ))}
          </Space>
        </div>
      </Card>
    </motion.div>
  );
}; 