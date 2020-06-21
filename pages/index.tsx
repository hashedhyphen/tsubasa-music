import styled from "styled-components"

import Layout from "../components/Layout"

const Section = styled.section`
  position: relative;
  width: 100%;
`

const SectionHeader = styled.h2`
  width: 100%;
  text-align: center;
`

const Jumbotron = styled.h1`
  width: 100%;
  background-color: #222;
  color: #ddd;
  font-size: 2rem;
  writing-mode: vertical-rl;
`

const ConceptArt = styled.img`
  display: block;
  width: 100%;
`

const Repertoire = styled.li`
  background-color: #fff;
`

const IndexPage = () => (
  <Layout>
    <Jumbotron>
      浪白公園音樂團
      <br />
      樂劇《つばさミュージック》
    </Jumbotron>
    <Section>
      <SectionHeader>コンセプトアート（絵：もちさとさん）</SectionHeader>
      <ConceptArt src="/img/concept_art.png" />
    </Section>
    <Section>
      <SectionHeader>曲目</SectionHeader>
      <ul>
        <Repertoire>
          <p>吹奏樂</p>
          <p>sugar sweet nightmare</p>
          <p>編曲・指揮: Hash</p>
        </Repertoire>
        <Repertoire>
          <p>合唱</p>
          <p>perfect slumbers</p>
          <p>編曲・指揮: U. Jiro.</p>
        </Repertoire>
        <Repertoire>
          <p>吹奏樂・合唱</p>
          <p>chocolate insomnia</p>
          <p>編曲・指揮: Hash</p>
        </Repertoire>
      </ul>
    </Section>
    <Section>
      <SectionHeader>主宰</SectionHeader>
      <p>Hash（同人サークル "Wing Score"）</p>
    </Section>
    <Section>
      <SectionHeader>編曲者・指揮者 紹介</SectionHeader>
      <ul>
        <li>
          <p>Hash (@hash_monogatari)</p>
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
        </li>
        <li>
          <p>U. Jiro. (@ujiro1000)</p>
          <p>
            大阪拠点のサブカル混声合唱団 "anixsing"（アニシング）主宰指揮者。
          </p>
          <p>
            その他にも様々なサブカル合唱の編曲・指揮活動を精力的に手掛け、昨年の第五回副次的文化系合唱祭では「合唱団〈唱物語〉」において「混声合唱メドレー〈唱物語〉」の編曲・指揮を務め、好評を博す。
          </p>
          <p>推しは阿良々木月火ちゃん。</p>
        </li>
      </ul>
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
