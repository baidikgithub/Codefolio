import { Button, Col, Row, Typography } from 'antd';
import React, { useEffect, useState } from 'react';

const { Title, Paragraph, Text } = Typography;

type ProfileIntroProps = {
  name: string;
  titlePrefix: string;
  typingWords: string[]; // Accept array of words instead of single string
  description: string;
  buttonText: string;
  secondButtonText: string;
  onButtonClick: () => void;
  imageUrl: string;
  imageAlt?: string;
  onSecondButtonClick: () => void;
};

export const ProfileIntro: React.FC<ProfileIntroProps> = ({
  name,
  titlePrefix,
  typingWords,
  description,
  buttonText,
  secondButtonText,
  onButtonClick,
  imageUrl,
  imageAlt = "Profile Image",
  onSecondButtonClick
}) => {
  const [displayText, setDisplayText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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
        padding: isMobile ? '20px 5%' : '0 5%',
      }}
    >
      <Row
        justify="space-between"
        align="middle"
        style={{ width: '100%' }}
        gutter={isMobile ? [0, 40] : [0, 0]}
      >
        {/* Left: Text Content */}
        <Col xs={24} md={12} order={isMobile ? 2 : 1}>
          <Title 
            level={isMobile ? 3 : 2} 
            style={{ 
              marginBottom: 9, 
              fontFamily: 'Poppins, sans-serif',
              textAlign: isMobile ? 'center' : 'left'
            }}
          >
            Hi, I am
          </Title>
          <Title 
            level={isMobile ? 2 : 1} 
            style={{ 
              fontWeight: 'bold', 
              margin: 0, 
              fontFamily: 'EB Garamond, serif',
              textAlign: isMobile ? 'center' : 'left',
              fontSize: isMobile ? '28px' : '48px'
            }}
          >
            {name}
          </Title>
          <Title 
            level={isMobile ? 4 : 3} 
            style={{ 
              marginTop: 8, 
              fontFamily: 'EB Garamond, serif',
              textAlign: isMobile ? 'center' : 'left',
              fontSize: isMobile ? '16px' : '24px'
            }}
          >
            {titlePrefix}{' '}
            <Text strong style={{ color: '#1890ff', fontFamily: 'EB Garamond, serif', fontSize: isMobile ? 14 : 21 }}>{displayText}</Text>
            <span style={{ color: '#1890ff', fontFamily: 'EB Garamond, serif', fontSize: isMobile ? 14 : 21 }}>|</span>
          </Title>
          <Paragraph 
            style={{ 
              maxWidth: 600, 
              fontFamily: 'EB Garamond, serif', 
              fontSize: isMobile ? 14 : 21,
              textAlign: isMobile ? 'center' : 'left',
              margin: isMobile ? '20px auto' : '20px 0'
            }}
          >
            {description}
          </Paragraph>
          <div style={{ 
            display: 'flex', 
            gap: '12px', 
            justifyContent: isMobile ? 'center' : 'flex-start',
            flexWrap: 'wrap'
          }}>
            <Button
              type="default"
              shape="round"
              size={isMobile ? "middle" : "large"}
              style={{
                fontFamily: 'EB Garamond, serif',
                borderColor: 'cyan',
                borderWidth: 2,
                boxShadow: '0 0 5px magenta',
                fontSize: isMobile ? '12px' : '14px'
              }}
              onClick={onButtonClick}
            >
              {buttonText}
            </Button>

            <Button
              type="default"
              shape="round"
              size={isMobile ? "middle" : "large"}
              style={{
                fontFamily: 'EB Garamond, serif',
                borderColor: 'orange',
                borderWidth: 2,
                boxShadow: '0 0 5px orange',
                fontSize: isMobile ? '12px' : '14px'
              }}
              onClick={onSecondButtonClick}
            >
              {secondButtonText}
            </Button>
          </div>
        </Col>

        {/* Right: Image */}
        <Col xs={24} md={12} order={isMobile ? 1 : 2} style={{ textAlign: isMobile ? 'center' : 'right' }}>
          <div
            style={{
              borderRadius: '50%',
              overflow: 'hidden',
              border: '5px solid #FFD700',
              boxShadow: '0 0 30px #FFD700',
              width: isMobile ? 200 : 300,
              height: isMobile ? 200 : 300,
              margin: isMobile ? '0 auto' : '0 0 0 auto',
              marginRight: isMobile ? 'auto' : '100px',
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
