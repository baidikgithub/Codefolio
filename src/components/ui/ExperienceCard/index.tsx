import React, { useState, useEffect } from 'react';
import { Card, Typography, Tag, Space } from 'antd';
import { motion } from 'framer-motion';

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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.03)',
          color: '#fff',
          borderRadius: 16,
          border: '1px solid rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          marginBottom: 24,
        }}
        bodyStyle={{ padding: isMobile ? 16 : 24 }}
      >
        <div style={{ marginBottom: 16 }}>
          <Title 
            level={isMobile ? 5 : 4} 
            style={{ 
              color: '#fff', 
              marginBottom: 4, 
              fontFamily: 'EB Garamond, serif',
              fontSize: isMobile ? '17px' : '20px'
            }}
          >
            {experience.title}
          </Title>
          <Text 
          style={{ 
            color: '#1890ff', 
            fontSize: isMobile ? 15 : 18, 
            fontWeight: 600, 
            fontFamily: 'Poppins, sans-serif' 
          }}>
            {experience.company}
          </Text>
        </div>

        <div style={{ marginBottom: 16 }}>
          <Space 
            size="large" 
            direction={isMobile ? "vertical" : "horizontal"}
            style={{ width: '100%' }}
          >
            <Text style={{ 
              color: '#ccc', 
              fontSize: isMobile ? 12 : 14,
              display: 'block'
            }}>
              📅 {experience.duration}
            </Text>
            <Text style={{ 
              color: '#ccc', 
              fontSize: isMobile ? 12 : 14,
              display: 'block'
            }}>
              📍 {experience.location}
            </Text>
          </Space>
        </div>

        <Paragraph style={{ 
          color: '#ddd', 
          fontSize: isMobile ? 13 : 21, 
          lineHeight: 1.6, 
          marginBottom: 16 
        }}>
          {experience.description}
        </Paragraph>

        <Space wrap>
          {experience.technologies.map((tech, index) => (
            <Tag 
              key={index} 
              color="purple" 
              style={{ 
                fontWeight: 500, 
                fontSize: isMobile ? 10 : 12,
                padding: isMobile ? '2px 6px' : '4px 8px'
              }}
            >
              {tech}
            </Tag>
          ))}
        </Space>
      </Card>
    </motion.div>
  );
}; 