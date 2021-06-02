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
import { Important } from "../../components/Important"

const List = styled.ol`
  padding-left: 2rem;
  list-style: decimal;
`

const ListItem = styled.li`
  padding-top: 1rem;
  line-height: 1.5;
`

const Page = () => (
  <Layout titlePrefix="募集要項 002">
    <RecruitmentContainer>
      <RecruitmentSideHeader>募集要項　００２</RecruitmentSideHeader>
      <RecruitmentBody>
        <RecruitmentTopHeader>応募資格</RecruitmentTopHeader>
        <List>
          <ListItem>
            本企画の趣旨は奏者交流と楽曲の良さを味わう「同人イベント」であり、楽曲や録音のクオリティを求める「収録会」ではないという趣旨をご理解いただける方
          </ListItem>
          <ListItem>
            上記の趣旨をご理解され、活動及び運営の円滑な進行にご協力いただける方
          </ListItem>
          <ListItem>
            譜読み、練習をご自身で行えること。また、演奏する楽器をご自身で準備できる方（打楽器はマレット等）
          </ListItem>
          <ListItem>
            <p>参加初日時点で満 15 歳以上の方（中学生不可）</p>
            <p>※18 歳未満の方は保護者の同意書をご提出いただきます。</p>
          </ListItem>
          <ListItem>
            個人による演奏の録画、録音、演奏風景の撮影等を許可なく行わないこと。
          </ListItem>
          <ListItem>
            譜面に関する本企画以外での使用、第三者への配布、SNS
            への掲載等を一切行わないこと。
          </ListItem>
          <ListItem>本企画に関する内部情報を一切漏洩しないこと。</ListItem>
          <ListItem>
            規定の参加費を運営側が求める方法でイベント当日に支払い可能であること。
          </ListItem>
          <ListItem>
            <p>
              保健当局からのクラスター調査に協力できるよう（当日関係者に新型コロナウイルス感染症の陽性者が確認された場合に限る）
              <Important>
                氏名・電話番号を参加初日以前にご提供いただける方
              </Important>
            </p>
            <p>
              （情報はイベント当日に収集し、主宰の責任において 1
              ヶ月管理した後に破棄します）
            </p>
          </ListItem>
        </List>

        <Navigation>
          <NavigationButton>
            <Link href="/recruitment/001">
              <a>◁ 001</a>
            </Link>
          </NavigationButton>
          <NavigationButton>
            <Link href="/recruitment/003">
              <a>003 ▷</a>
            </Link>
          </NavigationButton>
        </Navigation>
      </RecruitmentBody>
    </RecruitmentContainer>
  </Layout>
)

export default Page
