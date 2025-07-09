import React, { useState, useEffect } from 'react';
import { Card, Typography, Tag, Space, Button } from 'antd';

const { Title, Text, Paragraph } = Typography;

export type Project = {
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

export type ProjectCardProps = {
  project: Project;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
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
      hoverable
      style={{
        backgroundColor: '#111827',
        color: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 0 15px rgba(0,0,0,0.5)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
      bodyStyle={{ 
        padding: isMobile ? 16 : 20,
        display: 'flex',
        flexDirection: 'column',
        flex: 1
      }}
      cover={
        <img
          alt={project.title}
          src={project.image}
          style={{
            height: isMobile ? 150 : 200,
            objectFit: 'cover',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />
      }
    >
      <Space wrap style={{ marginBottom: 12 }}>
        {project.tags.map((tag, index) => (
          <Tag 
            key={index} 
            color="purple" 
            style={{ 
              fontWeight: 500,
              fontSize: isMobile ? '10px' : '12px',
              padding: isMobile ? '2px 6px' : '4px 8px'
            }}
          >
            {tag}
          </Tag>
        ))}
      </Space>

      <Title 
        level={isMobile ? 5 : 4} 
        style={{ 
          color: '#fff', 
          marginBottom: 4,
          fontSize: isMobile ? '16px' : '18px'
        }}
      >
        {project.title}
      </Title>
      <Text style={{ 
        color: '#ccc', 
        fontSize: isMobile ? 11 : 13 
      }}>
        {project.date}
      </Text>
      <Paragraph style={{ 
        color: '#ddd', 
        marginTop: 8,
        fontSize: isMobile ? '12px' : '14px',
        lineHeight: isMobile ? '1.4' : '1.6'
      }}>
        {project.description.length > (isMobile ? 80 : 120)
          ? project.description.substring(0, isMobile ? 80 : 120) + '...'
          : project.description}
      </Paragraph>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        marginTop: 'auto',
        paddingTop: 12 
      }}>
        <Button 
          type="primary" 
          href={project.link} 
          target="_blank" 
          size={isMobile ? "small" : "middle"}
          style={{ 
            fontSize: isMobile ? '12px' : '14px',
            height: isMobile ? '28px' : '32px'
          }}
        >
          View Project
        </Button>
        <Button 
          type="default" 
          href={project.link} 
          target="_blank" 
          size={isMobile ? "small" : "middle"}
          style={{ 
            fontSize: isMobile ? '12px' : '14px',
            height: isMobile ? '28px' : '32px'
          }}
        >
          Code
        </Button>
      </div>
    </Card>
  );
};
