import styled from "styled-components"
import { Button, ThemeProvider } from "@material-ui/core"
import Link from "next/link"

import Layout from "../components/Layout"
import { BiographyList } from "../components/BiographyList"
import { ConceptArt } from "../components/ConceptArt"
import { RepertoireList } from "../components/RepertoireList"
import { ScheduleList } from "../components/ScheduleList"
import { SplashScreen } from "../components/SplashScreen"
import { Title } from "../components/Title"
import { theme } from "../lib/theme"

const EntryShortcut = styled.div`
  position: fixed;
  right: 0.5rem;
  bottom: 1rem;
`

const Section = styled.section`
  width: 100%;
  padding: 0 1rem;
  display: flex;
`

const SectionHeader = styled.h2`
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  width: 2rem;
  font-size: 1.5rem;
  writing-mode: vertical-rl;
  background-color: #eee;
  color: #555;
`

const SectionBody = styled.div`
  width: calc(100% - 2rem);
  padding-left: 0.8rem;
`

const Spacer = styled.div`
  width: 100%;
  height: 4rem;
`

const Punchline = styled.div`
  width: 100%;
  padding-top: 2rem;
  text-align: center;
  letter-spacing: 0.2rem;
`

const Punct = styled.span`
  letter-spacing: normal;
`

const RubyText = styled.rt`
  position: relative;
  top: 0.2rem;
  font-size: 0.7rem;
  letter-spacing: normal;
`

const Paragraphs = styled.div`
  & > p {
    line-height: 1.5;
    padding-bottom: 1rem;
  }
  & > p:last-child {
    padding-bottom: 0;
  }
`

const Description = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 2rem;

  & > p {
    line-height: 1.5;
    letter-spacing: 0.7rem;
  }
`

const Notice = styled.p`
  width: 100%;
  text-align: center;
  padding-bottom: 2rem;
  font-size: 0.8rem;
  line-height: 1.5;
`

const TwitterWrapper = styled.div`
  height: 30rem;
  overflow: scroll;
`

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SplashScreen />

      <Punchline>
        青春は<Punct>、</Punct>君の
        <ruby>
          朝<RubyText>あした</RubyText>
        </ruby>
        に目を覚ます<Punct>。</Punct>
      </Punchline>

      <EntryShortcut>
        <Link href="/requirements/001">
          <Button variant="contained" color="primary" size="large">
            奏者申込フォームへ
          </Button>
        </Link>
      </EntryShortcut>

      <Title />

      <Description>
        <p>朗讀✕合唱✕吹奏樂</p>
        <p>一日限リ無形同人作品</p>
      </Description>

      <Notice>
        〈物語〉シリーズ公式とは無関係の
        <br />
        ファンによる非公式演奏企画です
      </Notice>

      <ConceptArt />

      <Spacer />

      <Section>
        <SectionHeader>曲目</SectionHeader>
        <SectionBody>
          <RepertoireList />
        </SectionBody>
      </Section>

      <Spacer />

      <Section>
        <SectionHeader>日程</SectionHeader>
        <SectionBody>
          <ScheduleList />
        </SectionBody>
      </Section>

      <Spacer />

      <Section>
        <SectionHeader>主宰・編曲者・指揮者紹介</SectionHeader>
        <SectionBody>
          <BiographyList />
        </SectionBody>
      </Section>

      <Spacer />

      <Section>
        <SectionHeader>企画趣旨</SectionHeader>
        <SectionBody>
          <Paragraphs>
            <p>
              「羽川さんの音楽とともに、羽川さんの平穏を願う無形の合同誌を作りたい」
            </p>
            <p>本企画の本質はすべてここに集約されます。</p>
            <p>
              吹奏楽といった器楽のみならず、合唱と朗読による〈言葉〉と〈物語〉、そしてコンセプトアートも合わせた、さながら〈物語〉フェスのような、その日その場限りの無形な合同誌。
            </p>
            <p>
              羽川さんの音楽と、羽川さんの物語による、羽川さんのための《樂劇》。
            </p>
          </Paragraphs>
        </SectionBody>
      </Section>

      <Spacer />

      <Section>
        <SectionHeader>Twitter</SectionHeader>
        <SectionBody>
          <TwitterWrapper>
            <a
              className="twitter-timeline"
              href="https://twitter.com/XXXXParkOrche?ref_src=twsrc%5Etfw"
            >
              Tweets by XXXXParkOrche
            </a>
            <script
              async
              src="https://platform.twitter.com/widgets.js"
              charSet="utf-8"
            ></script>
          </TwitterWrapper>
        </SectionBody>
      </Section>
    </Layout>
  </ThemeProvider>
)

export default IndexPage
