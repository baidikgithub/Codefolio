import React, { useState, useEffect } from 'react';
import { Row, Col, Typography, Divider, Form, Input, Button, message } from 'antd';
import { ProfileIntro } from '../components/sections/Profile';
import { ProjectCard } from '../components/ui/ProjectCard';
import { EducationCard } from '../components/ui/Cards';
import { ExperienceCard } from '../components/ui/ExperienceCard';
import { educationData } from '../data/education';
import type { Project } from '../components/ui/ProjectCard';
import { motion } from 'framer-motion';
import { Avatar } from 'antd';
import { LinkedinOutlined, GithubOutlined, MailOutlined, TwitterOutlined, InstagramOutlined, BehanceOutlined, DribbbleOutlined, PhoneOutlined, GitlabOutlined, DiscordOutlined, SendOutlined } from '@ant-design/icons';
import '../styles/components/styles.css';
import { experienceData } from '../data/experience';
import ThreeJSBackground from '../components/ThreeJSBackground';
// import { container, item } from '../components/SkillCard/SkillCard';

const { Title, Paragraph, Text } = Typography;
const { TextArea } = Input;

// Social media links
const socialLinks = [
  {
    name: 'LinkedIn',
    icon: <LinkedinOutlined />,
    url: 'https://linkedin.com/in/baidik-mazumdar',
    color: '#0077b5'
  },
  {
    name: 'GitHub',
    icon: <GithubOutlined />,
    url: 'https://github.com/baidikgithub',
    color: '#333'
  },
  {
    name: 'Email',
    icon: <MailOutlined />,
    url: 'mailto:baidikmazumdar789@gmail.com',
    color: '#ea4335'
  },
  {
    name: 'Twitter',
    icon: <TwitterOutlined />,
    url: 'https://twitter.com/baidikmazumdar',
    color: '#1da1f2'
  },
  {
    name: 'Instagram',
    icon: <InstagramOutlined />,
    url: 'https://instagram.com/baidikmazumdar',
    color: '#e4405f'
  },
  {
    name: 'Behance',
    icon: <BehanceOutlined />,
    url: 'https://www.behance.net/baidikmazumdar',
    color: '#e4405f'
  },
  {
    name: 'Dribbble',
    icon: <DribbbleOutlined />,
    url: 'https://dribbble.com/baidikmazumdar',
    color: '#e4405f'
  },
  {
    name: 'GitLab',
    icon: <GitlabOutlined />,
    url: 'https://gitlab.com/baidikmazumdar',
    color: '#e4405f'
  },
  {
    name: 'Discord',
    icon: <DiscordOutlined />,
    url: 'https://discord.com/baidikmazumdar',
    color: '#e4405f'
  }
  
];

// Projects data
const projects: Project[] = [
  {
    title: 'Space',
    date: 'May 2024',
    image: '', 
    tags: ['Power'],
    description:
      'Designed and implemented a robust software and electronics system for an autonomous space rover using advanced microcontrollers and embedded systems.',
    link: '#',
  },
  {
    title: ' Website',
    date: 'Feb 2024',
    image: '',
    tags: ['NextJS', 'SASS', 'FramerMotion', 'NodeJS', 'MongoDB'],
    description:
      'Collaborated in creating a vibrant event website for Incandescence, showcasing our college\'s spirit and events with animations and a modern UI.',
    link: '#',
  },
  {
    title: ' App',
    date: 'Mar 2025',
    image: '',
    tags: ['ReactNative', 'Expo', 'Appwrite'],
    description:
      'A React Native movie browsing app built with Expo and Appwrite, providing users with a seamless way to explore trending and upcoming films.',
    link: '#',
  },
];
type Skill = {
  name: string;
  icon: string;
};

type SkillCategory = {
  name: string;
  skills: Skill[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Next Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
      { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
      { name: "ThreeJS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg" },
    ]
  },
  {
    name: "UI/UX Design",
    skills: [
      { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
      { name: "Ant Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg" },
      { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
      { name: "FramerMotion", icon: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" },
      { name: "Framer", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framer/framer-original.svg"},
      { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
      { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
    ]
  },
  {
    name: "Mobile Development",
    skills: [
      { name: "ReactNative", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Expo", icon: "https://avatars.githubusercontent.com/u/12592968?s=200&v=4" },
    ]
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "Golang", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"},
      { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
      { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
      { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
      { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
    ]
  },
  {
    name: "Databases & ORM",
    skills: [
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "GORM", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gorm/gorm-original.svg"},
      { name: "Tableplus", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableplus/tableplus-original.svg"},
    ]
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
      { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
      { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
      { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
      { name: "Windows", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
      { name: "MacOs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
      { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
      { name: "vscode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    ]
  },
  {
    name: "API Development",
    skills: [
      { name: "Postman", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg"},
      { name: "Insomnia", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/insomnia/insomnia-original.svg"},
      { name: "Echoserver", icon:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/echoserver/echoserver-original.svg"},
    ]
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const SinglePage: React.FC = () => {
  const [form] = Form.useForm();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFormSubmit = async (values: any) => {
    try {
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', values);
      message.success('Thank you for your message! I will get back to you soon.');
      form.resetFields();
    } catch (error) {
      message.error('Something went wrong. Please try again.');
    }
  };

  const handleSocialClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div style={{ background: '#0c0c1d', minHeight: '100vh' }}>
      {/* HOME SECTION */}
      <section id="home" style={{ 
        minHeight: '100vh', 
        position: 'relative',
        zIndex: 1,
      }}>
        <ThreeJSBackground>
          <ProfileIntro
            name="Baidik Mazumdar"
            titlePrefix="I am a"
            typingWords={["Web Designer", "Frontend Developer", "Backend Developer", "Visionary"]}
            description="Pursuing Master of Computer Application at Sikkim Manipal Institute of Technology, with a strong passion for both frontend and backend technologies. I am eager to apply my knowledge in modern frameworks, API integration, and database management."
            buttonText="Check CV"
            secondButtonText="Github"
            onSecondButtonClick={() => handleSocialClick('https://github.com/baidikgithub')}
            onButtonClick={() => alert('CV button clicked')}
            imageUrl="src/assets//profile.jpg"
          />
        </ThreeJSBackground>
      </section>


      {/* PROJECTS SECTION */}
      <section id="projects" style={{ 
        background: '#0c0c1d', 
        minHeight: '100vh', 
        padding: isMobile ? '60px 5%' : '80px 10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Title level={isMobile ? 3 : 2} style={{ fontFamily: "EB Garamond, serif", color: "#fff" , fontSize: isMobile ? '20px' : '33px'}}>
            Projects
          </Title>
          <Text
            type="secondary"
            style={{ 
              fontFamily: "EB Garamond, serif", 
              color: "#ccc", 
              display: "block",
              fontSize: isMobile ? '14px' : '21px'
            }}
          >
            Here are some of the projects I've worked on, showcasing my skills and experience.
          </Text>
        </div>
        
        <Row gutter={[24, 24]} justify="center">
          {projects.map((project, index) => (
            <Col xs={24} sm={12} lg={8} key={index}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </section>

  
      {/* EXPERIENCE SECTION */}
      <section id="experience" style={{ 
        background: '#0c0c1d', 
        minHeight: '100vh', 
        padding: isMobile ? '60px 5%' : '80px 10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Title level={isMobile ? 3 : 2} style={{ fontFamily: "EB Garamond, serif", color: "#fff", fontSize: isMobile ? '20px' : '33px' }}>
            Experience
          </Title>
          <Text
            type="secondary"
            style={{ 
              fontFamily: "EB Garamond, serif", 
              color: "#ccc", 
              display: "block",
              fontSize: isMobile ? '14px' : '21px'
            }}
          >
            My professional journey has been a path of continuous learning and growth.
          </Text>
        </div>
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          {experienceData.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </section>

  
      
      {/* SKILLS SECTION */}
      <section id="skills" style={{ 
        background: '#0c0c1d', 
        minHeight: '100vh', 
        padding: isMobile ? '60px 5%' : '80px 10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Title level={isMobile ? 3 : 2} style={{ fontFamily: "EB Garamond, serif", color: "#fff", fontSize: isMobile ? '20px' : '33px' }}>
            Skills
          </Title>
          <Text
            type="secondary"
            style={{ 
              fontFamily: "EB Garamond, serif", 
              color: "#ccc", 
              display: "block",
              fontSize: isMobile ? '14px' : '21px'
            }}
          >
            Here are some of my skills on which I have been working on.
          </Text>
        </div>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              style={{ marginBottom: '60px' }}
            >
              <Title level={isMobile ? 4 : 3} style={{ 
                color: '#fff', 
                fontFamily: 'EB Garamond, serif',
                marginBottom: '30px',
                textAlign: 'center',
                fontSize: isMobile ? '22px' : '28px'
              }}>
                {category.name}
              </Title>
              <motion.div
                className="skills-grid-container"
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  justifyContent: 'center', 
                  gap: isMobile ? '12px' : '20px' 
                }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div key={index} className="skill-pill" variants={item}>
                    <img src={skill.icon} alt={skill.name} className="skill-icon" />
                    <span className="skill-label">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>


      {/* EDUCATION SECTION */}
      <section id="education" style={{ 
        padding: isMobile ? "60px 5%" : "80px 20px", 
        minHeight: "100vh", 
        background: '#0c0c1d',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Title level={isMobile ? 3 : 2} style={{ fontFamily: "EB Garamond, serif", color: "#fff", fontSize: isMobile ? '20px' : '33px' }}>
            Education
          </Title>
          <Text
            type="secondary"
            style={{ 
              fontFamily: "EB Garamond, serif", 
              color: "#ccc", 
              display: "block",
              fontSize: isMobile ? '14px' : '21px'
            }}
          >
            My educational journey has been a path of personal growth and self-exploration.
          </Text>
        </div>

        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          {educationData.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "flex-start",
                marginBottom: 60,
                gap: 24,
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                style={{
                  width: isMobile ? "100%" : "20%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  size={isMobile ? 48 : 64}
                  src={item.logo}
                  style={{
                    backgroundColor: "#fff",
                    padding: 4,
                    border: "2px solid #444",
                    marginBottom: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000',
                    fontSize: isMobile ? '18px' : '24px',
                    fontWeight: 'bold'
                  }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: isMobile ? 12 : 16,
                    fontFamily: "EB Garamond, serif",
                    textAlign: "center",
                  }}
                >
                  {item.duration}
                </Text>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                style={{ width: isMobile ? "100%" : "80%" }}
              >
                <EducationCard {...item} />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" style={{ 
        background: '#0c0c1d', 
        minHeight: '100vh', 
        padding: isMobile ? '60px 5%' : '80px 10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Title level={isMobile ? 3 : 2} style={{ fontFamily: "EB Garamond, serif", color: "#fff", fontSize: isMobile ? '20px' : '33px' }}>
            Get In Touch
          </Title>
          <Text
            type="secondary"
            style={{ 
              fontFamily: "EB Garamond, serif", 
              color: "#ccc", 
              display: "block",
              fontSize: isMobile ? '14px' : '21px'
            }}
          >
            Feel free to reach out for collaborations or just a friendly hello
          </Text>
        </div>

        <Row gutter={[48, 48]} align="middle">
          {/* Contact Form */}
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Form
                form={form}
                layout="vertical"
                onFinish={handleFormSubmit}
                style={{ 
                  background: 'rgba(255, 255, 255, 0.03)',
                  padding: isMobile ? '24px' : '32px',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                <Form.Item
                  name="name"
                  label={<span style={{ color: '#fff', fontFamily: 'EB Garamond, serif' }}>Name</span>}
                  rules={[{ required: true, message: 'Please enter your name!' }]}
                >
                  <Input 
                    size={isMobile ? "middle" : "large"}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#fff',
                      borderRadius: '8px'
                    }}
                    placeholder="Your name"
                  />
                </Form.Item>

                <Form.Item
                  name="email"
                  label={<span style={{ color: '#fff', fontFamily: 'EB Garamond, serif' }}>Email</span>}
                  rules={[
                    { required: true, message: 'Please enter your email!' },
                    { type: 'email', message: 'Please enter a valid email!' }
                  ]}
                >
                  <Input 
                    size={isMobile ? "middle" : "large"}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#fff',
                      borderRadius: '8px'
                    }}
                    placeholder="your.email@example.com"
                  />
                </Form.Item>

                <Form.Item
                  name="subject"
                  label={<span style={{ color: '#fff', fontFamily: 'EB Garamond, serif' }}>Subject</span>}
                  rules={[{ required: true, message: 'Please enter a subject!' }]}
                >
                  <Input 
                    size={isMobile ? "middle" : "large"}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#fff',
                      borderRadius: '8px'
                    }}
                    placeholder="What's this about?"
                  />
                </Form.Item>

                <Form.Item
                  name="message"
                  label={<span style={{ color: '#fff', fontFamily: 'EB Garamond, serif' }}>Message</span>}
                  rules={[{ required: true, message: 'Please enter your message!' }]}
                >
                  <TextArea 
                    rows={isMobile ? 4 : 6}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#fff',
                      borderRadius: '8px',
                      resize: 'none'
                    }}
                    placeholder="Your message here..."
                  />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    size={isMobile ? "middle" : "large"}
                    icon={<SendOutlined />}
                    style={{
                      width: '100%',
                      height: isMobile ? '40px' : '48px',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      border: 'none',
                      borderRadius: '8px',
                      fontFamily: 'EB Garamond, serif',
                      fontWeight: '600',
                      fontSize: isMobile ? '14px' : '18px'
                    }}
                  >
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </motion.div>
          </Col>

          {/* Contact Info & Social Links */}
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ padding: isMobile ? '24px' : '32px' }}
            >
              <div style={{ marginBottom: '40px' }}>
                <Title level={isMobile ? 4 : 3} style={{ color: '#fff', fontFamily: 'EB Garamond, serif', marginBottom: '16px', fontSize: isMobile ? '18px' : '24px' }}>
                  Let's Connect
                </Title>
                <Paragraph style={{ color: '#ccc', fontSize: isMobile ? '14px' : '18px', lineHeight: '1.6' }}>
                  I'm always interested in hearing about new opportunities, interesting projects, or just having a chat about technology and development.
                </Paragraph>
              </div>

              <div style={{ marginBottom: '40px' }}>
                <Title level={isMobile ? 5 : 4} style={{ color: '#fff', fontFamily: 'EB Garamond, serif', marginBottom: '20px', fontSize: isMobile ? '16px' : '20px' }}>
                  Contact Information
                </Title>
                <div style={{ color: '#ccc', fontSize: isMobile ? '14px' : '18px', lineHeight: '2' }}>
                  <div style={{ marginBottom: '12px' }}>
                    <MailOutlined style={{ marginRight: '12px', color: '#ea4335' }} />
                    baidikmazumdar789@gmail.com
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <PhoneOutlined style={{ marginRight: '12px', color: '#ea4335' }} />
                    +91 8134914060
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <span style={{ marginRight: '12px', color: '#1890ff' }}>📍</span>
                    Guwahati, Assam, India
                  </div>
                </div>
              </div>

              <div>
                <Title level={isMobile ? 5 : 4} style={{ color: '#fff', fontFamily: 'EB Garamond, serif', marginBottom: '20px', fontSize: isMobile ? '16px' : '20px' }}>
                  Follow Me
                </Title>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: isMobile ? 'center' : 'flex-start' }}>
                  {socialLinks.map((social, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="text"
                        icon={social.icon}
                        size={isMobile ? "middle" : "large"}
                        onClick={() => handleSocialClick(social.url)}
                        style={{
                          width: isMobile ? '48px' : '56px',
                          height: isMobile ? '48px' : '56px',
                          borderRadius: '50%',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: social.color,
                          fontSize: isMobile ? '16px' : '20px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.3s ease'
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default SinglePage; 