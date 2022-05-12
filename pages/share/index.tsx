import Image from "next/image";

import React from "react";

import { TwitterLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";

import * as Styles from "./styles";

const share = (): JSX.Element => {
  return (
    <Styles.Container>
      <Image
        src="/assets/trophy.png"
        width={100}
        height={100}
        alt="a yellow trophy with black cross around to simulate sines"
      />

      <Styles.ContentWrapper>
        <Styles.Title>Congratulations!</Styles.Title>

        <Styles.Text>You&apos;re great!</Styles.Text>
        <Styles.Text>We hope you enjoy it</Styles.Text>

        <Styles.Text>Want to learn more?</Styles.Text>
        <Styles.Text>Visit us at SlangApp.com</Styles.Text>
      </Styles.ContentWrapper>

      <Styles.ContentWrapper>
        <Styles.SocialMediaLinksWrapper>
          <a href="https://google.com" className="icon" tabIndex={1}>
            <TwitterLogo className="twitter" />
          </a>

          <a href="https://google.com" className="icon" tabIndex={2}>
            <InstagramLogo className="instagram" />
          </a>

          <a href="https://google.com" className="icon" tabIndex={3}>
            <LinkedinLogo className="linkedin" />
          </a>
        </Styles.SocialMediaLinksWrapper>

        <Styles.Title>Share with friends</Styles.Title>

        <Styles.Text>
          Share how good you are with friends and let them test their English
          level
        </Styles.Text>
      </Styles.ContentWrapper>
    </Styles.Container>
  );
};

export default share;