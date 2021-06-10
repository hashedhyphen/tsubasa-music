import styled from "styled-components"
import { Button, ThemeProvider } from "@material-ui/core"
import { useRouter } from "next/router"

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

function getTwitterIntentUrl(part: string) {
  const usp = new URLSearchParams()
  usp.set(
    "text",
    `
#浪白公園音樂團 楽劇《つばさミュージック》に ${part} で応募しました！
https://music.羽川翼.com/
    `.trim()
  )
  return `https://twitter.com/intent/tweet?${usp}`
}

export default function () {
  const router = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <Layout titlePrefix="奏者申込完了">
        <HeaderWrapper>
          <Header>奏者申込完了</Header>
        </HeaderWrapper>
        <Body>
          <p>お申し込みありがとうございました。</p>
          <p>
            奏者申込完了のメールが届いていない場合は
            <ExternalLink href="mailto:xxxxparkorche@gmail.com">
              xxxxparkorche[at]gmail.com
            </ExternalLink>
            までご連絡ください。
          </p>
          <ButtonWrapper>
            <a href={getTwitterIntentUrl(router.query.part)}>
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
