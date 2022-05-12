import React, { useState, useEffect } from "react";

import { Logo } from "components/ui/logo";
import { Container, Mobile, Nav, NavItem, Wrapper } from "./style";
import { ChevronIconSvg, LinesIconSvg, ShapeIconSvg } from "./assets";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    const main = document.querySelector("main") as HTMLElement;
    main.style.transition = "0.6s linear";
    if (mobileMenuOpen) main.style.filter = "blur(3px)";
    else main.style.filter = "initial";

    return () => {
      main.style.transition = "initial";
      main.style.filter = "initial";
    };
  }, [mobileMenuOpen]);

  return (
    <Container>
      <Wrapper>
        <Logo />
        <Mobile
          onClick={toggleMobileMenu}
          className={mobileMenuOpen ? "open" : undefined}
        >
          <ShapeIconSvg />
          {mobileMenuOpen ? <ChevronIconSvg /> : <LinesIconSvg />}
        </Mobile>
        <Nav
          className={mobileMenuOpen ? "open" : undefined}
          onClick={() => setMobileMenuOpen(false)}
        >
          <NavItem href="#servicii">Servicii</NavItem>
          <NavItem href="#contact">Contact</NavItem>
          <NavItem href="#">Întrebări</NavItem>
        </Nav>
      </Wrapper>
    </Container>
  );
};
