import React, { type ReactNode, useEffect } from "react";
import { Col, Layout, Row } from "antd";
import AppFooter from "./Footer";
import { Header } from "antd/es/layout/layout";
import ScrollReveal from "scrollreveal";
import { Link } from "react-scroll";

const { Content, Footer } = Layout;

type MainWrapperProps = {
  children: ReactNode;
};

const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  useEffect(() => {
    const sr = ScrollReveal();
    sr.reveal(".reveal", {
      duration: 800,
      delay: 400,
      reset: true,
      easing: "linear",
      scale: 1,
      distance: "20px",
      origin: "bottom",
    });
  }, []);

  return (
    <Layout style={{ background: "#0c0c1d", minHeight: "100vh" }}>
      <Header
        style={{
          background: "rgba(12, 12, 29, 0.95)",
          backdropFilter: "blur(15px)",
          paddingInline: "40px",
          fontFamily: "Poppins, sans-serif",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
          position: "fixed",
          zIndex: 1000,
          width: "100%",
          borderBottom: "1px solid #333",
        }}
      >
        <Row align="middle" justify="space-between" style={{ width: "100%" }}>
          <Col>{/* Logo Here */}</Col>
          <Col>
            <div style={{ display: "flex", gap: "20px", fontWeight: 500 }}>
              <Link 
                to="home" 
                smooth 
                duration={500} 
                offset={-80} 
                style={{ 
                  cursor: "pointer", 
                  color: "#fff",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                className="nav-link"
              >
                HOME
              </Link>
              <Link 
                to="about" 
                smooth 
                duration={500} 
                offset={-80} 
                style={{ 
                  cursor: "pointer", 
                  color: "#fff",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                className="nav-link"
              >
                ABOUT ME
              </Link>
              <Link 
                to="projects" 
                smooth 
                duration={500} 
                offset={-80} 
                style={{ 
                  cursor: "pointer", 
                  color: "#fff",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                className="nav-link"
              >
                PROJECTS
              </Link>
              <Link 
                to="experience" 
                smooth 
                duration={500} 
                offset={-80} 
                style={{ 
                  cursor: "pointer", 
                  color: "#fff",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                className="nav-link"
              >
                EXPERIENCE
              </Link>
              <Link 
                to="skills" 
                smooth 
                duration={500} 
                offset={-80} 
                style={{ 
                  cursor: "pointer", 
                  color: "#fff",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                className="nav-link"
              >
                SKILLS
              </Link>
            </div>
          </Col>
        </Row>
      </Header>

      <Layout style={{ paddingTop: "64px", background: "#0c0c1d" }}>
        <Content style={{ margin: 0, padding: 0, background: "#0c0c1d" }}>
          <div className="reveal" style={{ background: "#0c0c1d" }}>{children}</div>
        </Content>
        <Footer style={{ padding: 0, margin: 0, background: "#0c0c1d" }}>
          <AppFooter />
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainWrapper;
