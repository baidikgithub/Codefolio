import { Button, Col, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const { Title, Paragraph, Text } = Typography;

type ProfileIntroProps = {
  name: string;
  titlePrefix: string;
  typingWords: string[]; // Accept array of words instead of single string
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  imageUrl: string;
  imageAlt?: string;
};

export const ProfileIntro: React.FC<ProfileIntroProps> = ({
  name,
  titlePrefix,
  typingWords,
  description,
  buttonText,
  onButtonClick,
  imageUrl,
  imageAlt = "Profile Image"
}) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = typingWords[wordIndex % typingWords.length];
    const typingSpeed = isDeleting ? 50 : 120;

    const timer = setTimeout(() => {
      setDisplayText(currentWord.substring(0, charIndex));

      if (!isDeleting && charIndex < currentWord.length) {
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(prev => prev - 1);
      } else {
        setIsDeleting(prev => !prev);
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
        } else {
          setWordIndex(prev => (prev + 1) % typingWords.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, typingWords, wordIndex]);

  return (
    <div
      style={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '0 5%',
        
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        style={{ width: '100%' }}
        wrap={false}
      >
        {/* Left: Text Content */}
        <Col xs={24} md={12}>
          <Title level={2} style={{marginBottom: 9, fontFamily: 'Poppins, sans-serif',}}>Hi, I am</Title>
          <Title level={1} style={{ fontWeight: 'bold', margin: 0, fontFamily: 'Poppins, sans-serif', }}>{name}</Title>
          <Title level={3} style={{marginTop: 8, fontFamily: 'Poppins, sans-serif', }}>
            {titlePrefix}{' '}
            <Text strong style={{ color: '#1890ff', fontFamily: 'Poppins, sans-serif'}}>{displayText}</Text>
            <span style={{ color: '#1890ff', fontFamily: 'Poppins, sans-serif' }}>|</span>
          </Title>
          <Paragraph style={{ maxWidth: 600, fontFamily: 'Poppins, sans-serif', fontSize: 16}}>
            {description}
          </Paragraph>
          <Button
            type="default"
            shape="round"
            size="large"
            style={{
              fontFamily: 'Poppins, sans-serif',
              borderColor: 'cyan',
              background: 'transparent',
              borderWidth: 2,
              boxShadow: '0 0 5px magenta'
            }}
            onClick={onButtonClick}
          >
            {buttonText}
          </Button>
        </Col>

        {/* Right: Image */}
        <Col xs={24} md={12} style={{ textAlign: 'right' }}>
          <div
            style={{
              borderRadius: '50%',
              overflow: 'hidden',
              border: '5px solid #FFD700',
              boxShadow: '0 0 30px #FFD700',
              width: 300,
              height: 300,
              marginLeft: 'auto',
              marginRight: '100px',
            }}
          >
            <img
              src={imageUrl}
              alt={imageAlt}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};
