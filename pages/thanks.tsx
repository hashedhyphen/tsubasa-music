import styled from "styled-components"

import Link from "next/link"
import Layout from "../components/Layout"
import { Navigation, NavigationButton } from "../components/Navigation"

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

export default function () {
  return (
    <Layout titlePrefix="参加申込完了">
      <HeaderWrapper>
        <Header>参加申込完了</Header>
      </HeaderWrapper>
      <Body>
        <p>お申し込みありがとうございました。</p>
        <p>
          参加申込完了のメールが届いていない場合は、@hashedhyphen
          までご連絡ください。
        </p>
        <p>
          是非{" "}
          <a href="https://twitter.com/intent/tweet?text=%23%E6%B5%AA%E7%99%BD%E5%85%AC%E5%9C%92%E9%9F%B3%E6%A8%82%E5%9C%98%20%E6%A5%BD%E5%8A%87%E3%80%8A%E3%81%A4%E3%81%B0%E3%81%95%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%83%83%E3%82%AF%E3%80%8B%E3%81%AB%E5%BF%9C%E5%8B%9F%E3%81%97%E3%81%BE%E3%81%97%E3%81%9F%EF%BC%81%0Ahttps%3A%2F%2Fmusic.%E7%BE%BD%E5%B7%9D%E7%BF%BC.com%2F">
            Twitterへご投稿
          </a>{" "}
          ください！
        </p>

        <Navigation>
          <NavigationButton>
            <Link href="/">
              <a>トップページに戻る</a>
            </Link>
          </NavigationButton>
        </Navigation>
      </Body>
    </Layout>
  )
}
