import styled from "styled-components"

import Link from "next/link"
import Layout from "../../components/Layout"
import {
  RecruitmentContainer,
  RecruitmentSideHeader,
  RecruitmentTopHeader,
  RecruitmentBody,
} from "../../components/Recruitment"
import { Navigation, NavigationButton } from "../../components/Navigation"

const List = styled.ol`
  padding-left: 2rem;
  list-style: decimal;
`

const ListItem = styled.li`
  padding-top: 1rem;
  line-height: 1.5;
`

const Page = () => (
  <Layout titlePrefix="注意事項">
    <RecruitmentContainer>
      <RecruitmentSideHeader>募集要項　００４</RecruitmentSideHeader>
      <RecruitmentBody>
        <RecruitmentTopHeader>注意事項</RecruitmentTopHeader>
        <List>
          <ListItem>
            応募フォーム以外からの応募は受け付けておりません。
          </ListItem>
          <ListItem>運営からの連絡をもって参加確定となります。</ListItem>
          <ListItem>
            <p>
              利用施設の人数制限などを踏まえ、参加人数の上限を設けているパートがあります。
            </p>
            <p>
              応募者多数の場合ご参加いただけない場合がございます。予めご了承ください。
            </p>
          </ListItem>
          <ListItem>
            募集パートの選択肢に存在しないパートの募集はございません。
          </ListItem>
          <ListItem>
            <p>
              応募結果については「xxxxparkorche&lt;アット&gt;gmail.com」からご連絡いたします。
            </p>
            <p>
              迷惑メール対策やアドレス指定受信をされている場合は、受信できるよう設定をお願いいたします。
            </p>
          </ListItem>
          <ListItem>
            <p>
              入力していただいた個人情報は、不正アクセス、紛失、漏洩等が発生しないよう厳重に管理し、
              本企画の奏者募集、活動、ならびに保健当局からのクラスター調査以外で使用することはありません。
            </p>
            <p>
              また、行政機関や司法機関から法的要請があった場合を除き、第三者には提供いたしません。
            </p>
          </ListItem>
        </List>

        <Navigation>
          <NavigationButton>
            <Link href="/requirements/003">
              <a>◁ 003</a>
            </Link>
          </NavigationButton>
          <NavigationButton>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdx1dhIIVEX0DE7eeOQd_PexrjM-cWNHvhahSO7i7iS9iGh2Q/viewform?usp=sf_link">
              応募フォームへ ▷
            </Link>
          </NavigationButton>
        </Navigation>
      </RecruitmentBody>
    </RecruitmentContainer>
  </Layout>
)

export default Page
