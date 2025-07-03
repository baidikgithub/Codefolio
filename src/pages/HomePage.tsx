import React from 'react';
import { Row, Col, Typography, Divider } from 'antd';
import { ProfileIntro } from '../components/sections/Profile';
import { ProjectCard } from '../components/ui/ProjectCard';
import { EducationCard } from '../components/ui/Cards';
import { educationData } from '../data/education';
import type { Project } from '../components/ui/ProjectCard';
import { motion } from 'framer-motion';
import { Avatar } from 'antd';
import manipalLogo from '../assets/images/Manipal_University_logo.png';
import '../styles/components/styles.css';
// import { container, item } from '../components/SkillCard/SkillCard';

const { Title, Paragraph, Text } = Typography;

// Projects data
const projects: Project[] = [
  {
    title: 'Space Rover',
    date: 'May 2024',
    image: '', 
    tags: ['Power Electronics', 'Arduino', 'Autonomous Navigation', 'Jetson Nano'],
    description:
      'Designed and implemented a robust software and electronics system for an autonomous space rover using advanced microcontrollers and embedded systems.',
  },
  {
    title: 'Incandescence–2024 Website',
    date: 'Feb 2024',
    image: '',
    tags: ['NextJS', 'SASS', 'FramerMotion', 'NodeJS', 'MongoDB'],
    description:
      'Collaborated in creating a vibrant event website for Incandescence, showcasing our college\'s spirit and events with animations and a modern UI.',
  },
  {
    title: 'MovieZone App',
    date: 'Mar 2025',
    image: '',
    tags: ['ReactNative', 'Expo', 'Appwrite'],
    description:
      'A React Native movie browsing app built with Expo and Appwrite, providing users with a seamless way to explore trending and upcoming films.',
  },
];
type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "ReactNative", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "Vite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vite/vite-original.svg" },
  { name: "ThreeJS", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg" },
  { name: "Material UI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" },
  { name: "Ant Design", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/antdesign/antdesign-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" },
  { name: "Expo", icon: "https://avatars.githubusercontent.com/u/12592968?s=200&v=4" },
  { name: "FramerMotion", icon: "https://seeklogo.com/images/F/framer-motion-logo-DA1E33CAA1-seeklogo.com.png" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: "Express Js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "GitLab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg" },
  { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Windows", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg" },
  { name: "MacOs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" },
  { name: "Ubuntu", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg" },
  { name: "vscode", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

// Skills data


const SinglePage: React.FC = () => {
  return (
    <div style={{ background: '#0c0c1d', minHeight: '100vh' }}>
      {/* HOME SECTION */}
      <section id="home" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center',
        background: '#0c0c1d',
        position: 'relative',
        zIndex: 1,
      }}>
        <ProfileIntro
          name="Baidik Mazumdar"
          titlePrefix="I am a"
          typingWords={["Web Designer", "Frontend Developer", "Backend Developer", "Visionary"]}
          description="Pursuing Master of Computer Application at Sikkim Manipal Institute of Technology, with a strong passion for both frontend and backend technologies. I am eager to apply my knowledge in modern frameworks, API integration, and database management."
          buttonText="Check CV"
          onButtonClick={() => alert('CV button clicked')}
          imageUrl="/assets/profile.jpg"
        />
      </section>

      <Divider style={{ margin: 0, borderColor: '#333', backgroundColor: '#0c0c1d' }} />

      {/* ABOUT SECTION */}
      <section id="about" style={{ 
        minHeight: '100vh', 
        padding: '80px 10%', 
        background: '#0c0c1d',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ width: '100%' }}>
          <Title level={2} style={{ 
            color: '#fff', 
            textAlign: 'center', 
            marginBottom: 40,
            fontFamily: 'Poppins, sans-serif'
          }}>
            About Me
          </Title>
          <Row gutter={[32, 32]} align="middle">
            <Col xs={24} md={12}>
              <div style={{ textAlign: 'center' }}>
                <Avatar
                  size={200}
                  src="/assets/profile.jpg"
                  style={{ marginBottom: 20 }}
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ color: '#fff' }}>
                <Paragraph style={{ fontSize: '18px', lineHeight: '1.6', color: '#fff' }}>
                  I'm a passionate developer currently pursuing my Master of Computer Application at 
                  Sikkim Manipal Institute of Technology. My journey in technology has been driven by 
                  curiosity and a desire to create meaningful solutions.
                </Paragraph>
                <Paragraph style={{ fontSize: '18px', lineHeight: '1.6', color: '#fff' }}>
                  With expertise spanning both frontend and backend development, I enjoy working with 
                  modern frameworks, building responsive user interfaces, and architecting robust backend systems. 
                  My experience includes working with React, Node.js, Python, and various databases.
                </Paragraph>
                <Paragraph style={{ fontSize: '18px', lineHeight: '1.6', color: '#fff' }}>
                  When I'm not coding, I love exploring new technologies, contributing to open-source projects, 
                  and sharing knowledge with the developer community. I believe in continuous learning and 
                  staying updated with the latest trends in technology.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      <Divider style={{ margin: 0, borderColor: '#333', backgroundColor: '#0c0c1d' }} />

      {/* PROJECTS SECTION */}
      <section id="projects" style={{ 
        background: '#0c0c1d', 
        minHeight: '100vh', 
        padding: '80px 10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <Title level={2} style={{ 
          color: '#fff', 
          textAlign: 'center', 
          marginBottom: 40,
          fontFamily: 'Poppins, sans-serif'
        }}>
          My Projects
        </Title>
        <Row gutter={[24, 24]} justify="center">
          {projects.map((project, index) => (
            <Col xs={24} md={12} lg={8} key={index}>
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </section>

      <Divider style={{ margin: 0, borderColor: '#333', backgroundColor: '#0c0c1d' }} />

      {/* EXPERIENCE SECTION */}
      <section id="experience" style={{ 
        padding: "80px 20px", 
        minHeight: "100vh", 
        background: '#0c0c1d',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Title level={2} style={{ fontFamily: "Poppins, sans-serif", color: "#fff" }}>
            Education
          </Title>
          <Text
            type="secondary"
            style={{ fontFamily: "Poppins, sans-serif", color: "#ccc", display: "block" }}
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
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                style={{
                  width: "20%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar
                  size={64}
                  src={manipalLogo}
                  style={{
                    backgroundColor: "#fff",
                    padding: 4,
                    border: "2px solid #444",
                    marginBottom: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#000',
                    fontSize: '24px',
                    fontWeight: 'bold'
                  }}
                />
                <Text
                  style={{
                    color: "#fff",
                    fontSize: 12,
                    fontFamily: "Poppins, sans-serif",
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
                style={{ width: "80%" }}
              >
                <EducationCard {...item} />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <Divider style={{ margin: 0, borderColor: '#333', backgroundColor: '#0c0c1d' }} />

      {/* SKILLS SECTION */}
      <section id="skills" style={{ 
        background: '#0c0c1d', 
        minHeight: '100vh', 
        padding: '80px 10%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <Title level={2} style={{ fontFamily: "Poppins, sans-serif", color: "#fff" }}>
            Skills
          </Title>
          <Text
            type="secondary"
            style={{ fontFamily: "Poppins, sans-serif", color: "#ccc", display: "block" }}
          >
            Here are some of my skills on which I have been working on.
          </Text>
        </div>
        <motion.div
      className="skills-grid-container"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {skills.map((skill, index) => (
        <motion.div key={index} className="skill-pill" variants={item}>
          <img src={skill.icon} alt={skill.name} className="skill-icon" />
          <span className="skill-label">{skill.name}</span>
        </motion.div>
      ))}
    </motion.div>
      </section>
    </div>
  );
};

export default SinglePage; 