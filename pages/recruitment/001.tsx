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

const Page = () => (
  <Layout titlePrefix="募集要項 001">
    <RecruitmentContainer>
      <RecruitmentSideHeader>募集要項　００１</RecruitmentSideHeader>
      <RecruitmentBody>
        <RecruitmentTopHeader>企画概要</RecruitmentTopHeader>
        <RecruitmentSection>
          <DefHeader>主催</DefHeader>
          <DefContent>
            <p>Hash (Wing Score)</p>
            <p>
              (
              <ExternalLink href="https://twitter.com/hash_monogatari">
                @hash_monogatari
              </ExternalLink>
              )
            </p>
            <p>
              (
              <ExternalLink href="https://twitter.com/hashedhyphen">
                @hashedhyphen
              </ExternalLink>
              )
            </p>
          </DefContent>
        </RecruitmentSection>
        <RecruitmentSection>
          <DefHeader>日程</DefHeader>
          <DefContent>
            <time dateTime="2020-08-29">2020 年 8 月 29 日（土）</time>日中
          </DefContent>
        </RecruitmentSection>
        <RecruitmentSection>
          <DefHeader>会場</DefHeader>
          <DefContent>
            <p>1 都 3 県内某所（参加者にのみ開示）</p>
            <p>※合唱パートのみ午前・午後間で移動があります。</p>
          </DefContent>
        </RecruitmentSection>
        <RecruitmentSection>
          <DefHeader>参加費</DefHeader>
          <DefContent>
            <p>3,000 円</p>
            <ul>
              <ListItem>
                情勢の不確実性を考慮し、イベント当日に集金させていただきます（集金時に混雑が発生しないよう工夫いたします）。
              </ListItem>
              <ListItem>
                金額は参加人数等により変動いたします（やむを得ず予定より増える可能性もございますのでご了承ください）。
              </ListItem>
              <ListItem>
                会場費・打楽器レンタル・楽譜編集に関わる費用等に充てさせていただきます。
              </ListItem>
              <ListItem>
                合唱パートは午前・午後で会場が異なるため、移動の交通費（バスの場合
                420 円）を別途ご負担いただきます。あらかじめご了承ください。
              </ListItem>
            </ul>
          </DefContent>
        </RecruitmentSection>
        <RecruitmentSection>
          <RecruitmentSectionHeader>
            現在の募集ステータス
          </RecruitmentSectionHeader>
          <RecruitmentSectionBody>
            <p>一次募集（～yyyy/mm/p）</p>
            <p>
              ※先着順ではありません。募集期間終了後、参加の可否を運営よりメールでご連絡いたします。
            </p>
          </RecruitmentSectionBody>
        </RecruitmentSection>
        <RecruitmentSection>
          <RecruitmentSectionHeader>募集パート</RecruitmentSectionHeader>
          <RecruitmentSectionBody>
            <p>
              編曲と企画運営の都合上、合唱とその他パートの兼任はできません。
            </p>
            <InstrumentList>
              <Instrument>合唱（SATB）</Instrument>
              <Instrument>Piccolo</Instrument>
              <Instrument>Flute</Instrument>
              <Instrument>Oboe</Instrument>
              <Instrument>Basson</Instrument>
              <Instrument>Clarinet（E♭・B♭・Bass）</Instrument>
              <Instrument>Saxphone（Alto・Tenor・Bari.）</Instrument>
              <Instrument>Trumpet</Instrument>
              <Instrument>Horn</Instrument>
              <Instrument>Trombone（Tenor・Bass）</Instrument>
              <Instrument>Euphonium</Instrument>
              <Instrument>Tuba</Instrument>
              <Instrument>Contrabass</Instrument>
              <Instrument>Percussion（Drums 以外）</Instrument>
            </InstrumentList>
          </RecruitmentSectionBody>
        </RecruitmentSection>
        <Navigation>
          <NavigationButton>
            <Link href="/recruitment/002">
              <a>002 ▷</a>
            </Link>
          </NavigationButton>
        </Navigation>
      </RecruitmentBody>
    </RecruitmentContainer>
  </Layout>
)

export default Page
