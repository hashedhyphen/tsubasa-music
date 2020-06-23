import styled from "styled-components"

import Layout from "../components/Layout"
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
  width: 2rem;
  font-size: 1.5rem;
  writing-mode: vertical-rl;

  &::before {
    content: "――";
  }
`

const SectionBody = styled.div`
  width: calc(100% - 2rem);
  padding-right: 0.5rem;
`

const Spacer = styled.div`
  width: 100%;
  height: 2rem;
`

const Biography = styled.article`
  width: 100%;
`

const Header = styled.header`
  width: 100%;
  height: 5rem;
`

const IconLink = styled.a`
  display: inline-block;
  width: 5rem;
  height: 100%;
`

const Icon = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid #777;
  border-radius: 50%;
`

const Name = styled.div`
  display: inline-block;
  width: calc(100% - 5rem);
  height: 100%;
  padding-left: 0.5rem;
  vertical-align: top;
`

const HandleName = styled.p`
  display: flex;
  align-items: center;
  font-size: 3rem;
  height: 3rem;
`

const Role = styled.p`
  display: flex;
  align-items: center;
  height: 2rem;
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
        <Biography>
          <Header>
            <IconLink href="https://twitter.com/hash_monogatari">
              <Icon src="https://pbs.twimg.com/profile_images/1144978186159054849/WkgpEl9D_400x400.png" />
            </IconLink>
            <Name>
              <HandleName>Hash</HandleName>
              <Role>主宰・吹奏楽編曲・指揮</Role>
            </Name>
          </Header>
          <p>
            羽川さんの平穏を願う同人サークル "Wing Score"
            として、西尾維新作品オンリーイベント「イシンノセカイ」やコミックマーケットにサークル参加。
          </p>
          <p>
            また、サブカル系の吹奏楽イベント・演奏会において演奏活動を行う傍ら、編曲活動も行う。
          </p>
          <p>
            昨年の第五回副次的文化系合唱祭では「合唱団〈唱物語〉」の合唱メンバーとして参加し、連作短々編「こよみセットリスト」を執筆。
          </p>
          <p>推しは羽川翼さん。</p>
        </Biography>
        <Biography>
          <Header>
            <IconLink href="https://mobile.twitter.com/ujiro1000">
              <Icon src="https://pbs.twimg.com/profile_images/1245552642928992256/qcvdLrvt_400x400.jpg" />
            </IconLink>
            <Name>
              <HandleName>U. Jiro.</HandleName>
              <Role>合唱編曲・指揮</Role>
            </Name>
          </Header>
          <p>
            大阪拠点のサブカル混声合唱団 "anixsing"（アニシング）主宰指揮者。
          </p>
          <p>
            その他にも様々なサブカル合唱の編曲・指揮活動を精力的に手掛け、昨年の第五回副次的文化系合唱祭では「合唱団〈唱物語〉」において「混声合唱メドレー〈唱物語〉」の編曲・指揮を務め、好評を博す。
          </p>
          <p>推しは阿良々木月火ちゃん。</p>
        </Biography>
      </SectionBody>
    </Section>
    <Section>
      <SectionHeader>企画趣旨</SectionHeader>
      <p>
        「羽川さんの音楽とともに、羽川さんの平穏を願う無形の合同誌を作りたい」
      </p>
      <p>本企画の本質はすべてここに集約されます。</p>
      <p>
        吹奏楽といった器楽のみならず、合唱と朗読による〈言葉〉と〈物語〉、そしてコンセプトアートも合わせた、さながら〈物語〉フェスのような、その日その場限りの無形な合同誌。
      </p>
      <p>羽川さんの音楽と、羽川さんの物語による、羽川さんのための《樂劇》</p>
    </Section>
  </Layout>
)

export default IndexPage
