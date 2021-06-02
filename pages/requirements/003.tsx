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

const LeadPara = styled.p`
  padding-top: 1rem;
`

const Section = styled.section`
  padding-top: 1rem;
  line-height: 1.5;
`

const SectionHeader = styled.h4`
  &::before {
    padding-right: 0.25rem;
    content: "▲";
    color: #555;
    font-size: 0.9rem;
  }
`

const MainList = styled.ol`
  padding: 0.5rem 0 0 2rem;
  list-style: decimal;
`

const Page = () => (
  <Layout titlePrefix="募集要項 003">
    <RecruitmentContainer>
      <RecruitmentSideHeader>募集要項　００３</RecruitmentSideHeader>
      <RecruitmentBody>
        <RecruitmentTopHeader>続・応募資格</RecruitmentTopHeader>

        <LeadPara>
          皆様に安心してご参加いただけるよう、また使用施設の利用基準を遵守するため、本企画では新型コロナウイルス感染症への様々な対策を講じます。
        </LeadPara>
        <LeadPara>
          ただし、具体的な対策については、使用施設ならびにイベント当日の情勢に応じて変わり得ます。
        </LeadPara>
        <LeadPara>
          そのため、本企画では「新型コロナウイルス感染症への基本方針」を定めます。
        </LeadPara>
        <LeadPara>
          参加申込される際には、以下の「新型コロナウイルス感染症への基本方針」にご同意ください。
        </LeadPara>

        <Section>
          <SectionHeader>新型コロナウイルス感染症への基本方針</SectionHeader>
          <MainList>
            <li>使用施設の利用基準を遵守する</li>
            <li>
              全日本合唱連盟の「合唱活動における新型コロナウイルス感染症拡大防止のガイドライン」を遵守する
            </li>
            <li>
              全日本吹奏楽連盟の「吹奏楽の活動及び演奏会等における新型コロナウイルス感染拡大予防ガイドライン」を遵守する
            </li>
            <li>
              具体的な対策について、イベント当日まで使用施設と継続的に連携・確認する
            </li>
          </MainList>
        </Section>

        <Navigation>
          <NavigationButton>
            <Link href="/recruitment/002">
              <a>◁ 002</a>
            </Link>
          </NavigationButton>
          <NavigationButton>
            <Link href="/recruitment/004">
              <a>004 ▷</a>
            </Link>
          </NavigationButton>
        </Navigation>
      </RecruitmentBody>
    </RecruitmentContainer>
  </Layout>
)

export default Page
