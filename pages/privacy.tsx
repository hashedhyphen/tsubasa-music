import styled from "styled-components"

import Link from "next/link"
import Layout from "../components/Layout"
import { ExternalLink } from "../components/ExternalLink"
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

const PrivacyPage = () => (
  <Layout titlePrefix="プライバシーポリシー">
    <HeaderWrapper>
      <Header>プライバシーポリシー</Header>
    </HeaderWrapper>
    <Body>
      <p>
        当サイトでは、サイトの利用状況を解析するため、Google
        社のアクセス解析ツール「Google アナリティクス」を利用しています。
      </p>

      <p>
        この Google アナリティクスはトラフィックデータの収集のために Cookie
        を使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
      </p>

      <p>
        Google アナリティクスでデータが収集、処理される仕組みについて、ならびに
        Google によるデータ収集を停止する方法については
        <ExternalLink href="https://policies.google.com/technologies/partner-sites?hl=ja">
          https://policies.google.com/technologies/partner-sites?hl=ja
        </ExternalLink>
        を参照してください。
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

export default PrivacyPage
