import React, { useState } from "react";
import styled from "styled-components";

// components
import { SEO } from "../seo";
import { Carets } from "./carets";

// react font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

// react tooltip
import ReactTooltip from "react-tooltip";
// copy to clipboard
import { CopyToClipboard } from "react-copy-to-clipboard";

// Todo: remove default exports everywhere, extract bracket left and right to own containers

const Container = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  a {
    color: white;
    text-decoration: none;
  }
`;
const ContainerBracketLeft = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
  @media (max-width: 48rem) {
    margin-right: 0.5rem;
  }
`;
const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 18rem;
  @media (max-width: 48rem) {
    width: 15rem;
  }
`;
const LinkHeader = styled.span`
  font-size: 20pt;
  font-weight: bold;
  @media (max-width: 48rem) {
    font-size: 14pt;
  }
`;
const LinkSize = styled.span`
  font-size: 13pt;
  @media (max-width: 48rem) {
    font-size: 10.5pt;
  }
`;
const LinkContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 0.4rem;
`;
const LinkContainerNoLinkOutlinePointer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 0.4rem;
  outline: none;
  cursor: pointer;
`;
const Item = styled.div`
  flex: 0 0 auto;
`;
const ItemAnchor = styled.a`
  flex: 0 0 auto;
`;
const ItemSomeMargin = styled.div`
  flex: 0 0 auto;
  margin-left: 0.5rem;
  @media (max-width: 48rem) {
    margin-left: 0.4rem;
  }
`;
const ItemBracketRight = styled.div`
  flex: 0 0 auto;
  margin-left: 1rem;
  @media (max-width: 48rem) {
    margin-left: 0;
  }
`;
const Brackets = styled.span`
  font-size: 7rem;
  @media (max-width: 48rem) {
    font-size: 6rem;
  }
`;
const ToolTip = styled(ReactTooltip)`
  font-size: 10pt;
  max-width: 12rem;
`;
const IconSize = styled(FontAwesomeIcon)`
  width: 1.063rem;
  height: 1.063rem;
`;

export function Contact() {
  const [copiedToClipBoard, setCopiedToClipBoard] = useState(false);

  return (
    <Container>
      <SEO title="Contact" />

      {/* left bracket */}
      <Item>
        <ContainerBracketLeft>
          <Item>
            <Brackets>{"("}</Brackets>
          </Item>

          <ItemAnchor
            href="#Prev"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Carets direction={"left"} />
          </ItemAnchor>
        </ContainerBracketLeft>
      </Item>
      <Item>
        <VerticalContainer>
          <LinkHeader>Contact</LinkHeader>

          <CopyToClipboard
            text="hello@muguku.co.ke"
            // change tooltip text if copy successful
            onCopy={(result) => setCopiedToClipBoard(result)}
          >
            <LinkContainerNoLinkOutlinePointer
              data-for="getContent"
              data-tip
              onMouseLeave={() => {
                setCopiedToClipBoard(false);
              }}
              role="button"
              tabIndex="0"
            >
              <Item>
                <IconSize icon={faEnvelope} />
              </Item>
              <ItemSomeMargin>
                <LinkSize>hello@muguku.co.ke</LinkSize>
              </ItemSomeMargin>
            </LinkContainerNoLinkOutlinePointer>
          </CopyToClipboard>
          <LinkContainer>
            <Item>
              <a
                href="https://www.linkedin.com/in/machariamuguku/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconSize icon={faLinkedinIn} />
              </a>
            </Item>
            <ItemSomeMargin>
              <a
                href="https://www.linkedin.com/in/machariamuguku/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkSize>linkedin.com/in/machariamuguku</LinkSize>
              </a>
            </ItemSomeMargin>
          </LinkContainer>
        </VerticalContainer>
      </Item>
      {/* right bracket */}
      <ItemBracketRight>
        <Container>
          <ItemAnchor
            href="#Next"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <Carets direction={"right"} />
          </ItemAnchor>
          <Item>
            <Brackets>{")"}</Brackets>
          </Item>
        </Container>
      </ItemBracketRight>
      {/* the universal react tooltip. Style tooltip here */}
      <ToolTip
        place="bottom"
        type="light"
        textColor="black"
        backgroundColor={"white"}
        id="getContent"
        getContent={() =>
          copiedToClipBoard
            ? "Yay! My email address has been copied to your clipboard✅"
            : "Click here to copy my email address to your clipboard 😀"
        }
      />
    </Container>
  );
}
