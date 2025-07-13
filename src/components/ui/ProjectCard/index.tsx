import React, { useState, useEffect } from 'react';
import { Card, Typography, Tag, Space, Button, Modal, Divider } from 'antd';
import { motion } from 'framer-motion';
import { GithubOutlined, CalendarOutlined, BuildOutlined, LinkOutlined } from '@ant-design/icons';

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

  const handleViewProject = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.link, '_blank');
  };

  const handleViewCode = (e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(project.link, '_blank');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
      >
        <Card
          hoverable
          onClick={handleCardClick}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            color: '#fff',
            borderRadius: 20,
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(15px)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
          }}
          bodyStyle={{ 
            padding: isMobile ? 20 : 24,
            display: 'flex',
            flexDirection: 'column',
            flex: 1
          }}
          cover={
            <div style={{ position: 'relative', overflow: 'hidden' }}>
              <img
                alt={project.title}
                src={project.image}
                style={{
                  height: isMobile ? 180 : 220,
                  width: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              />
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, rgba(24, 144, 255, 0.8), rgba(138, 43, 226, 0.8))',
                opacity: 0,
                transition: 'opacity 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '0';
                }}
              >
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: 600 }}>
                  View Details
                </Text>
              </div>
            </div>
          }
        >
          {/* Project Tags */}
          <Space wrap style={{ marginBottom: 16 }}>
            {project.tags.map((tag, index) => (
              <Tag 
                key={index} 
                color="blue" 
                style={{ 
                  fontWeight: 500,
                  fontSize: isMobile ? 10 : 12,
                  padding: isMobile ? '4px 8px' : '6px 10px',
                  borderRadius: 15,
                  border: '1px solid rgba(24, 144, 255, 0.3)',
                  backgroundColor: 'rgba(24, 144, 255, 0.1)',
                  color: '#1890ff',
                  fontFamily: 'Poppins, sans-serif'
                }}
              >
                {tag}
              </Tag>
            ))}
          </Space>

          {/* Project Title */}
          <Title 
            level={isMobile ? 5 : 4} 
            style={{ 
              color: '#fff', 
              marginBottom: 8,
              fontSize: isMobile ? '18px' : '20px',
              fontFamily: 'EB Garamond, serif',
              fontWeight: 600
            }}
          >
            {project.title}
          </Title>

          {/* Project Date */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
            <CalendarOutlined style={{ color: '#1890ff', fontSize: isMobile ? 12 : 14 }} />
            <Text style={{ 
              color: '#ccc', 
              fontSize: isMobile ? 12 : 14,
              fontFamily: 'Poppins, sans-serif'
            }}>
              {project.date}
            </Text>
          </div>

          {/* Project Description */}
          <Paragraph style={{ 
            color: '#ddd', 
            marginTop: 8,
            fontSize: isMobile ? '13px' : '14px',
            lineHeight: 1.6,
            flex: 1,
            fontFamily: 'Poppins, sans-serif',
            textAlign: 'justify'
          }}>
            {project.description.length > (isMobile ? 100 : 120)
              ? project.description.substring(0, isMobile ? 100 : 120) + '...'
              : project.description}
          </Paragraph>

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: 8, 
            marginTop: 16,
            justifyContent: 'space-between'
          }}>
            <Button 
              type="primary" 
              size={isMobile ? "small" : "middle"}
              icon={<LinkOutlined />}
              onClick={handleViewProject}
              style={{ 
                fontSize: isMobile ? '11px' : '12px',
                height: isMobile ? '32px' : '36px',
                borderRadius: 18,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500
              }}
            >
              Live Demo
            </Button>
            <Button 
              type="default" 
              size={isMobile ? "small" : "middle"}
              icon={<GithubOutlined />}
              onClick={handleViewCode}
              style={{ 
                fontSize: isMobile ? '11px' : '12px',
                height: isMobile ? '32px' : '36px',
                borderRadius: 18,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: '#fff'
              }}
            >
              Code
            </Button>
          </div>
        </Card>
      </motion.div>

      {/* Enhanced Modal */}
      <Modal
        open={isModalVisible}
        onCancel={handleModalClose}
        footer={null}
        width={isMobile ? '95%' : 700}
        centered
        styles={{
          body: {
            backgroundColor: 'rgba(12, 12, 29, 0.95)',
            color: '#fff',
            borderRadius: 20,
            padding: isMobile ? 24 : 32,
            backdropFilter: 'blur(20px)',
          },
          mask: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(5px)',
          },
          content: {
            backgroundColor: 'rgba(12, 12, 29, 0.95)',
            borderRadius: 20,
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(20px)',
          },
          header: {
            backgroundColor: 'rgba(12, 12, 29, 0.95)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            borderRadius: '20px 20px 0 0',
          }
        }}
        closeIcon={
          <div style={{
            color: '#fff',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '50%',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}>
            ✕
          </div>
        }
      >
        <div style={{ textAlign: 'center' }}>
          {/* Project Image */}
          <div style={{ position: 'relative', marginBottom: 24 }}>
            <img
              alt={project.title}
              src={project.image}
              style={{
                width: '100%',
                height: isMobile ? 200 : 280,
                objectFit: 'cover',
                borderRadius: 16,
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              }}
            />
          </div>
          
          {/* Project Tags */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12, justifyContent: 'center' }}>
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
            <Space wrap style={{ justifyContent: 'center' }}>
              {project.tags.map((tag, index) => (
                <Tag 
                  key={index} 
                  color="blue" 
                  style={{ 
                    fontWeight: 500,
                    fontSize: isMobile ? '12px' : '13px',
                    padding: isMobile ? '6px 12px' : '8px 16px',
                    borderRadius: 20,
                    border: '1px solid rgba(24, 144, 255, 0.3)',
                    backgroundColor: 'rgba(24, 144, 255, 0.1)',
                    color: '#1890ff',
                    fontFamily: 'Poppins, sans-serif'
                  }}
                >
                  {tag}
                </Tag>
              ))}
            </Space>
          </div>

          <Divider style={{ 
            borderColor: 'rgba(255, 255, 255, 0.1)', 
            margin: '20px 0' 
          }} />

          {/* Project Title */}
          <Title 
            level={isMobile ? 3 : 2} 
            style={{ 
              color: '#fff', 
              marginBottom: 12,
              fontSize: isMobile ? '22px' : '28px',
              fontFamily: 'EB Garamond, serif',
              fontWeight: 600
            }}
          >
            {project.title}
          </Title>
          
          {/* Project Date */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20, justifyContent: 'center' }}>
            <CalendarOutlined style={{ color: '#1890ff', fontSize: isMobile ? 14 : 16 }} />
            <Text style={{ 
              color: '#ccc', 
              fontSize: isMobile ? 14 : 16,
              fontFamily: 'Poppins, sans-serif'
            }}>
              {project.date}
            </Text>
          </div>
          
          {/* Project Description */}
          <Paragraph style={{ 
            color: '#ddd', 
            fontSize: isMobile ? '15px' : '16px',
            lineHeight: 1.7,
            marginBottom: 32,
            textAlign: 'left',
            fontFamily: 'Poppins, sans-serif'
          }}>
            {project.description}
          </Paragraph>

          {/* Action Buttons */}
          <div style={{ 
            display: 'flex', 
            gap: 16,
            justifyContent: 'center',
            flexDirection: isMobile ? 'column' : 'row'
          }}>
            <Button 
              type="primary" 
              size={isMobile ? "large" : "large"}
                             icon={<LinkOutlined />}
              onClick={handleViewProject}
              style={{ 
                fontSize: isMobile ? '14px' : '16px',
                height: isMobile ? '44px' : '48px',
                minWidth: isMobile ? '140px' : '160px',
                borderRadius: 24,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500
              }}
            >
              View Live Demo
            </Button>
            <Button 
              type="default" 
              size={isMobile ? "large" : "large"}
              icon={<GithubOutlined />}
              onClick={handleViewCode}
              style={{ 
                fontSize: isMobile ? '14px' : '16px',
                height: isMobile ? '44px' : '48px',
                minWidth: isMobile ? '140px' : '160px',
                borderRadius: 24,
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 500,
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: '#fff',
                backgroundColor: 'rgba(255, 255, 255, 0.05)'
              }}
            >
              View Code
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
