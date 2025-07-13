import React, { type ReactNode, useEffect, useState } from "react";
import { Col, Layout, Row, Button, Drawer } from "antd";
import AppFooter from "./Footer";
import { Header } from "antd/es/layout/layout";
import ScrollReveal from "scrollreveal";
import { Link } from "react-scroll";
import { MenuOutlined } from "@ant-design/icons";
// import Image from "../../assets/logos/portfolio_logo.png";

const { Content, Footer } = Layout;

type MainWrapperProps = {
  children: ReactNode;
};

const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const navLinks = [
    { to: "home", label: "HOME" },
    { to: "projects", label: "PROJECTS" },
    { to: "experience", label: "EXPERIENCE" },
    { to: "skills", label: "SKILLS" },
    { to: "education", label: "EDUCATION" },
    { to: "contact", label: "CONTACT" },
  ];

  const handleNavClick = (to: string) => {
    setMobileMenuOpen(false);
  };

  const NavLinks = () => (
    <div style={{ 
      display: "flex", 
      gap: isMobile ? "0" : "20px", 
      fontWeight: 500,
      flexDirection: isMobile ? "column" : "row",
      alignItems: isMobile ? "flex-start" : "center"
    }}>
      {navLinks.map((link) => (
        <Link 
          key={link.to}
          to={link.to} 
          smooth 
          duration={500} 
          offset={-80} 
          style={{ 
            cursor: "pointer", 
            position: "relative",
            color: "#fff",
            textDecoration: "none",
            transition: "color 0.3s ease",
            padding: isMobile ? "16px 0" : "0",
            fontSize: isMobile ? "18px" : "14px",
            borderBottom: isMobile ? "1px solid rgba(255,255,255,0.1)" : "none",
            width: isMobile ? "100%" : "auto"
          }}
          className="nav-link"
          onClick={() => handleNavClick(link.to)}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );

  return (
    <Layout style={{ background: "#0c0c1d", minHeight: "100vh" }}>
      <Header
        style={{
          background: "#0c0c1d",
          backdropFilter: "blur(10px)",
          paddingInline: isMobile ? "20px" : "40px",
          fontFamily: "Poppins, sans-serif",
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          width: "100%",
          height: isMobile ? "60px" : "64px",
          display: "flex",
          alignItems: "center",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Row align="middle" justify="space-between" style={{ width: "100%" }}>
          <Col>
            {/* Logo can be added here */}
          </Col>
          <Col>
            {isMobile ? (
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setMobileMenuOpen(true)}
                style={{
                  color: "#fff",
                  fontSize: "20px",
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              />
            ) : (
              <NavLinks />
            )}
          </Col>
        </Row>
      </Header>

      {/* Mobile Drawer */}
      <Drawer
        title="Navigation"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={280}
        styles={{
          body: {
            background: "#0c0c1d",
            color: "#fff"
          },
          header: {
            background: "#0c0c1d",
            color: "#fff",
            borderBottom: "1px solid rgba(255,255,255,0.1)"
          }
        }}
      >
        <NavLinks />
      </Drawer>

      <div style={{ 
        display: isMobile ? "none" : "block",
        position: "absolute",
        left: "20px",
        top: "20px",
        zIndex: 999
      }}>
        <img src="/assets/logos/portfolio_logo.png" alt="Logo" width={150} height={150} />
      </div>

      <Layout style={{ paddingTop: isMobile ? "60px" : "64px", background: "#0c0c1d" }}>
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
