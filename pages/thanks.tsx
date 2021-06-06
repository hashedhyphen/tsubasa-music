import styled from "styled-components"
import { Button, ThemeProvider } from "@material-ui/core"

import Layout from "../components/Layout"
import { theme } from "../lib/theme"
import { ExternalLink } from "../components/ExternalLink"

const HeaderWrapper = styled.div`
  padding: 2rem 1rem;
`

const Header = styled.h1`
  display: inline-block;
  padding-bottom: 0.25rem;
  font-size: 20px;
  border-bottom: 1px solid #888;
`

const Body = styled.div`
  padding: 0 1rem;
  line-height: 1.5;

  & > p {
    padding-bottom: 1rem;
  }
  & > p:last-child {
    padding-bottom: 0;
  }
`

const ButtonWrapper = styled.div`
  padding-top: 1rem;
  width: 100%;
  text-align: center;
`

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <Layout titlePrefix="参加申込完了">
        <HeaderWrapper>
          <Header>参加申込完了</Header>
        </HeaderWrapper>
        <Body>
          <p>お申し込みありがとうございました。</p>
          <p>
            参加申込完了のメールが届いていない場合は
            <ExternalLink href="https://twitter.com/hashedhyphen">
              @hashedhyphen
            </ExternalLink>
            までご連絡ください。
          </p>
          <ButtonWrapper>
            <a href="https://twitter.com/intent/tweet?text=%23%E6%B5%AA%E7%99%BD%E5%85%AC%E5%9C%92%E9%9F%B3%E6%A8%82%E5%9C%98%20%E6%A5%BD%E5%8A%87%E3%80%8A%E3%81%A4%E3%81%B0%E3%81%95%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%83%83%E3%82%AF%E3%80%8B%E3%81%AB%E5%BF%9C%E5%8B%9F%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%EF%BC%81%0Ahttps%3A%2F%2Fmusic.%E7%BE%BD%E5%B7%9D%E7%BF%BC.com%2F">
              <Button variant="contained" color="primary">
                Twitter で共有
              </Button>
            </a>
          </ButtonWrapper>
        </Body>
      </Layout>
    </ThemeProvider>
  )
}
