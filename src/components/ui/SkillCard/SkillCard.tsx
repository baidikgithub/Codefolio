import React from 'react';
import { Card, Typography, Space, Tag } from 'antd';

const { Title } = Typography;

export type Skill = {
  name: string;
};

export type SkillCardProps = {
  category: string;
  skills: Skill[];
};

export const SkillCard: React.FC<SkillCardProps> = ({ category, skills }) => {
  return (
    <Card
      style={{
        backgroundColor: '#0c0c1d',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        color: '#fff',
        borderRadius: 16,
        height: '100%',
      }}
      bodyStyle={{ padding: 20 }}
    >
      <Title level={4} style={{ color: '#fff', marginBottom: 16, textAlign: 'center' }}>
        {category}
      </Title>
      <Space wrap size={[8, 8]} style={{ width: '100%', justifyContent: 'center' }}>
        {skills.map((skill, index) => (
          <Tag
            key={index}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: '#fff',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: 8,
              padding: '4px 12px',
              margin: 2,
            }}
          >
            {skill.name}
          </Tag>
        ))}
      </Space>
    </Card>
  );
}; 