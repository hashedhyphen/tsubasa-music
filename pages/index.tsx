import styled from "styled-components"

import Layout from "../components/Layout"
import { BiographyList } from "../components/BiographyList"
import { ConceptArt } from "../components/ConceptArt"
import { ExternalLink } from "../components/ExternalLink"
import { RepertoireList } from "../components/RepertoireList"
import { SplashScreen } from "../components/SplashScreen"
import { Title } from "../components/Title"

const Section = styled.section`
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: row-reverse;
`

const SectionHeader = styled.h2`
  display: flex;
  align-items: center;
  padding-top: 1.5rem;
  width: 2rem;
  font-size: 1.5rem;
  writing-mode: vertical-rl;
  background-color: #eee;
  color: #555;
`

const SectionBody = styled.div`
  width: calc(100% - 2rem);
  padding-right: 0.5rem;
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
`

const IndexPage = () => (
  <Layout>
    <SplashScreen />

    <Punchline>
      青春は<Punct>、</Punct>君の
      <ruby>
        朝<RubyText>あした</RubyText>
      </ruby>
      に目を覚ます<Punct>。</Punct>
    </Punchline>

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
      <SectionHeader>お知らせ</SectionHeader>
      <SectionBody>
        <Paragraphs>
          <p>
            当初、企画開催日を 2020-08-29
            とさせていただいておりましたが、諸般の事情につき、現在日程を無期限延期させていただいております。
          </p>
          <p>
            奏者募集の再開については
            <ExternalLink href="https://twitter.com/XXXXParkOrche">
              Twitter
            </ExternalLink>
            でお知らせいたします。
          </p>
        </Paragraphs>
      </SectionBody>
    </Section>
  </Layout>
)

export default IndexPage
