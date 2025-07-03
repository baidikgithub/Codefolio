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
        backgroundColor: '#1e293b',
        border: '1px solid #334155',
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
              backgroundColor: '#0f172a',
              color: '#fff',
              border: '1px solid #475569',
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