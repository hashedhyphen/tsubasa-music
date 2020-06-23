import styled from "styled-components"

import React, { ReactNode } from "react"
import Link from "next/link"
import Head from "next/head"

const Container = styled.div`
  min-height: 100vh;
  background-color: #fafafa;
  font-family: "Noto Serif JP", serif;
  font-weight: 400;
`

const Main = styled.div`
  width: 100%;
  min-height: calc(100vh - 7rem);
`

const Footer = styled.footer`
  position: relative;
  margin-top: 2rem;
  height: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #444;
  color: #eee;
  text-align: center;
  font-size: 0.9rem;
  line-height: 2;
`

type Props = {
  children?: ReactNode
  titlePrefix?: string
}

const Layout = ({ children, titlePrefix }: Props) => (
  <Container>
    <Head>
      <title>{buildTitle(titlePrefix)}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="robots" content="noindex" />

      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@400&amp;display=swap"
      />
      <link rel="stylesheet" href="/css/destyle.css" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root { font-size: 16px; }
            * { box-sizing: border-box; }
          `,
        }}
      ></style>

      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=UA-170071458-1"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'UA-170071458-1');
          `,
        }}
      ></script>
    </Head>

    <Main>{children}</Main>

    <Footer>
      <p>&copy; 2020 浪白公園音樂團</p>
      <Link href="/privacy">
        <a>プライバシーポリシー</a>
      </Link>
    </Footer>
  </Container>
)

function buildTitle(prefix?: string): string {
  const suffix = "浪白公園音樂團 樂劇《つばさミュージック》"
  return prefix ? `${prefix} | ${suffix}` : suffix
}

export default Layout
