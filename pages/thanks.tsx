import styled from "styled-components"
import { Button, ThemeProvider } from "@material-ui/core"
import { useRouter } from "next/router"

import Layout from "../components/Layout"
import { theme } from "../lib/theme"
import { ExternalLink } from "../components/ExternalLink"
import { Important } from "../components/Important"

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

const Message = styled.span`
  text-transform: none;
`

function getTwitterIntentUrl(part: string | string[]) {
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
      <Layout titlePrefix="メールをご確認ください">
        <HeaderWrapper>
          <Header>メールをご確認ください</Header>
        </HeaderWrapper>
        <Body>
          <p>お申し込みありがとうございました！</p>
          <p>
            <Important>
              応募完了メールの受信をもって、正式に応募完了となります。
            </Important>
          </p>
          <p>
            応募完了メールが 5
            分以内に届いていない場合、応募が受理されていない可能性があります。
          </p>
          <p>
            応募完了メールが届いていない場合は
            <ExternalLink href="mailto:xxxxparkorche@gmail.com">
              xxxxparkorche[at]gmail.com
            </ExternalLink>
            までご連絡ください。
          </p>
          <p>応募した旨を是非 Twitter にご投稿ください！</p>
          <ButtonWrapper>
            <a href={getTwitterIntentUrl(router.query.part)}>
              <Button variant="contained" color="primary" size="large">
                <Message>Twitter に投稿</Message>
              </Button>
            </a>
          </ButtonWrapper>
        </Body>
      </Layout>
    </ThemeProvider>
  )
}
