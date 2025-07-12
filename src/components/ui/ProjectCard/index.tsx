import React, { useState, useEffect } from 'react';
import { Card, Typography, Tag, Space, Button, Modal } from 'antd';

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCardClick = () => {
    setIsModalVisible(true);
  };

  const handleModalClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Card
        hoverable
        onClick={handleCardClick}
        style={{
          backgroundColor: '#111827',
          color: '#fff',
          borderRadius: 16,
          overflow: 'hidden',
          boxShadow: '0 0 15px rgba(0,0,0,0.5)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          cursor: 'pointer',
          transition: 'transform 0.2s ease, box-shadow 0.2s ease',
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
      </Card>

      <Modal
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={isMobile ? '90%' : 600}
        centered
        styles={{
          body: {
            backgroundColor: '#111827',
            color: '#fff',
            borderRadius: 16,
            padding: isMobile ? 20 : 24,
          },
          mask: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
          },
          content: {
            backgroundColor: '#111827',
            borderRadius: 16,
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <img
            alt={project.title}
            src={project.image}
            style={{
              width: '100%',
              height: isMobile ? 200 : 250,
              objectFit: 'cover',
              borderRadius: 12,
              marginBottom: 20,
            }}
          />
          
          <Space wrap style={{ marginBottom: 16, justifyContent: 'center' }}>
            {project.tags.map((tag, index) => (
              <Tag 
                key={index} 
                color="purple" 
                style={{ 
                  fontWeight: 500,
                  fontSize: isMobile ? '12px' : '14px',
                  padding: isMobile ? '4px 8px' : '6px 12px'
                }}
              >
                {tag}
              </Tag>
            ))}
          </Space>

          <Title 
            level={isMobile ? 4 : 3} 
            style={{ 
              color: '#fff', 
              marginBottom: 8,
              fontSize: isMobile ? '20px' : '24px'
            }}
          >
            {project.title}
          </Title>
          
          <Text style={{ 
            color: '#ccc', 
            fontSize: isMobile ? 13 : 15,
            display: 'block',
            marginBottom: 16
          }}>
            {project.date}
          </Text>
          
          <Paragraph style={{ 
            color: '#ddd', 
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: isMobile ? '1.5' : '1.6',
            marginBottom: 24,
            textAlign: 'left'
          }}>
            {project.description}
          </Paragraph>

          <div style={{ 
            display: 'flex', 
            gap: 12,
            justifyContent: 'center',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <Button 
              type="primary" 
              href={project.link} 
              target="_blank" 
              size={isMobile ? "middle" : "large"}
              style={{ 
                fontSize: isMobile ? '14px' : '16px',
                height: isMobile ? '40px' : '48px',
                minWidth: isMobile ? '120px' : '140px'
              }}
            >
              View Project
            </Button>
            <Button 
              type="primary" 
              href={project.link} 
              target="_blank" 
              size={isMobile ? "middle" : "large"}
              style={{ 
                fontSize: isMobile ? '14px' : '16px',
                height: isMobile ? '40px' : '48px',
                minWidth: isMobile ? '120px' : '140px',
                // borderColor: 'rgba(255, 255, 255, 0.3)',
                color: '#fff'
              }}
            >
              Code
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
