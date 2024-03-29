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
import { ExternalLink } from "../../components/ExternalLink"

const DefHeader = styled.h3`
  display: inline-block;
  width: 4rem;
  vertical-align: top;
  line-height: 1.3;
`

const DefContent = styled.div`
  display: inline-block;
  width: calc(100% - 4rem);
  line-height: 1.3;
`
const RecruitmentSection = styled.div`
  position: relative;
  padding-top: 1rem;
`

const RecruitmentSectionHeader = styled.h3`
  line-height: 1.3;
`

const RecruitmentSectionBody = styled.div`
  padding: 0.25rem 0 0 1.5rem;
  line-height: 1.3;
`

const ListItem = styled.li`
  margin-top: 0.5rem;
  padding-left: 0.5rem;
  border-left: 2px solid #ccc;
`

const InstrumentList = styled.ul`
  padding-top: 0.25rem;
`

const Instrument = styled.li`
  border-bottom: 1px solid #ccc;

  &::before {
    padding: 0 0.25rem;
    content: "▲";
    color: #555;
    font-size: 0.9rem;
  }
`

const PriceHeader = styled.span`
  display: inline-block;
  width: 5rem;
`

const Page = () => (
  <Layout titlePrefix="募集要項 001">
    <RecruitmentContainer>
      <RecruitmentSideHeader>募集要項　００１</RecruitmentSideHeader>
      <RecruitmentBody>
        <RecruitmentTopHeader>企画概要</RecruitmentTopHeader>
        <RecruitmentSection>
          <DefHeader>主宰</DefHeader>
          <DefContent>
            <p>Hash (Wing Score)</p>
            <p>
              (
              <ExternalLink
                href="https://twitter.com/hashedhyphen"
                target="_blank"
                rel="noopener noreferer"
              >
                @hashedhyphen
              </ExternalLink>
              )
            </p>
            <p>
              (
              <ExternalLink
                href="https://twitter.com/hash_monogatari"
                target="_blank"
                rel="noopener noreferer"
              >
                @hash_monogatari
              </ExternalLink>
              )
            </p>
          </DefContent>
        </RecruitmentSection>
        <RecruitmentSection>
          <DefHeader>日程</DefHeader>
          <DefContent>
            <ul>
              <li>
                <time dateTime="2022-03-06">2022-03-06</time>（合唱・吹奏楽）
              </li>
              <li>
                <time dateTime="2022-03-21">2022-03-21</time>（合唱・吹奏楽）
              </li>
            </ul>
          </DefContent>
        </RecruitmentSection>
        <RecruitmentSection>
          <DefHeader>会場</DefHeader>
          <DefContent>
            <p>関東 1 都 3 県内某所</p>
            <p>※参加者にのみ開示</p>
          </DefContent>
        </RecruitmentSection>
        <RecruitmentSection>
          <DefHeader>参加費</DefHeader>
          <DefContent>
            <ul>
              <li>
                <PriceHeader>吹奏楽</PriceHeader>：5,000 円
              </li>
              <li>
                <PriceHeader>合唱</PriceHeader>：3,000 円
              </li>
              <li>
                <PriceHeader>高校生以下</PriceHeader>：3,000 円
              </li>
            </ul>
            <ul>
              <ListItem>
                情勢の不確実性を考慮し、イベント当日に集金させていただきます（集金時に混雑が発生しないよう工夫いたします）。
              </ListItem>
              <ListItem>
                会場費・打楽器レンタル・著作権使用料等に充てさせていただきます。
              </ListItem>
              <ListItem>
                企画終了後に、経費範囲内でカンパ（任意）をお願いする予定です。
              </ListItem>
            </ul>
          </DefContent>
        </RecruitmentSection>
        <RecruitmentSection>
          <RecruitmentSectionHeader>
            現在の募集ステータス
          </RecruitmentSectionHeader>
          <RecruitmentSectionBody>
            <p>二次募集（先着順）</p>
          </RecruitmentSectionBody>
        </RecruitmentSection>
        <RecruitmentSection>
          <RecruitmentSectionHeader>募集パート</RecruitmentSectionHeader>
          <RecruitmentSectionBody>
            <p>残り人数は 1/13 時点です。</p>
            <InstrumentList>
              <Instrument>合唱 Soprano（残 1）</Instrument>
              <Instrument>合唱 Alto（残 4）</Instrument>
              <Instrument>合唱 Tenor（残 2）</Instrument>
              <Instrument>合唱 Bass（残 1）</Instrument>
            </InstrumentList>
            <p>（吹奏楽奏者の募集は終了いたしました）</p>
          </RecruitmentSectionBody>
        </RecruitmentSection>
        <Navigation>
          <NavigationButton>
            <Link href="/requirements/002">
              <a>002 ▷</a>
            </Link>
          </NavigationButton>
        </Navigation>
      </RecruitmentBody>
    </RecruitmentContainer>
  </Layout>
)

export default Page
