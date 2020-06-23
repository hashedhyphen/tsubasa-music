import styled from "styled-components"

import Layout from "../components/Layout"
import { BiographyList } from "../components/BiographyList"
import { ConceptArt } from "../components/ConceptArt"
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
  height: 3rem;
`

const Gist = styled.div`
  & > p {
    line-height: 1.5;
    padding-bottom: 1rem;
  }
  & > p:last-child {
    padding-bottom: 0;
  }
`

const IndexPage = () => (
  <Layout>
    <SplashScreen />
    <Title />
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
        <Gist>
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
        </Gist>
      </SectionBody>
    </Section>
  </Layout>
)

export default IndexPage
