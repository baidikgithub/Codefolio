import React from 'react';
import { Card, Typography, Tag, Space } from 'antd';

const { Title, Text, Paragraph } = Typography;

export type Project = {
  title: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
};

export type ProjectCardProps = {
  project: Project;
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card
      hoverable
      style={{
        backgroundColor: '#111827',
        color: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 0 15px rgba(0,0,0,0.5)',
      }}
      bodyStyle={{ padding: 20 }}
      cover={
        <img
          alt={project.title}
          src={project.image}
          style={{
            height: 200,
            objectFit: 'cover',
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
        />
      }
    >
      <Space wrap style={{ marginBottom: 12 }}>
        {project.tags.map((tag, index) => (
          <Tag key={index} color="purple" style={{ fontWeight: 500 }}>
            {tag}
          </Tag>
        ))}
      </Space>

      <Title level={4} style={{ color: '#fff', marginBottom: 4 }}>
        {project.title}
      </Title>
      <Text style={{ color: '#ccc', fontSize: 13 }}>{project.date}</Text>
      <Paragraph style={{ color: '#ddd', marginTop: 8 }}>
        {project.description.length > 120
          ? project.description.substring(0, 120) + '...'
          : project.description}
      </Paragraph>
    </Card>
  );
};
