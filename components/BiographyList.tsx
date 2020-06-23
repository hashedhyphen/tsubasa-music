import styled from "styled-components"
import { ExternalLink } from "./ExternalLink"

const Wrapper = styled.div`
  width: 100%;
`

const Biography = styled.article`
  width: 100%;

  &:first-child {
    padding-bottom: 2rem;
  }
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
  font-size: 2.5rem;
  height: 2.5rem;
`

const Role = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 2.5rem;
`

const Body = styled.div`
  line-height: 1.5;

  & > p {
    padding-top: 0.5rem;
  }
`

export function BiographyList() {
  return (
    <Wrapper>
      <Biography>
        <Header>
          <IconLink href="https://twitter.com/hash_monogatari">
            <Icon src="https://pbs.twimg.com/profile_images/1144978186159054849/WkgpEl9D_400x400.png" />
          </IconLink>
          <Name>
            <HandleName>Hash</HandleName>
            <Role>
              <p>主宰・吹奏楽編曲・指揮</p>
              <p>朗読脚本</p>
            </Role>
          </Name>
        </Header>
        <Body>
          <p>
            羽川さんの平穏を願う同人サークル "Wing Score"
            として、西尾維新作品オンリーイベント「イシンノセカイ」やコミックマーケットにサークル参加。
          </p>
          <p>
            また、サブカル系の吹奏楽イベント・演奏会において演奏活動を行う傍ら、編曲活動も行う。
          </p>
          <p>
            昨年の第五回副次的文化系合唱祭では「
            <ExternalLink href="https://twitter.com/fkjUtaumono">
              合唱団〈唱物語〉
            </ExternalLink>
            」の合唱メンバーとして参加し、連作短々編「
            <ExternalLink href="https://www.pixiv.net/novel/series/1164022">
              こよみセットリスト
            </ExternalLink>
            」を執筆。
          </p>
          <p>推しは羽川翼さん。</p>
        </Body>
      </Biography>
      <Biography>
        <Header>
          <IconLink href="https://twitter.com/ujiro1000">
            <Icon src="https://pbs.twimg.com/profile_images/1245552642928992256/qcvdLrvt_400x400.jpg" />
          </IconLink>
          <Name>
            <HandleName>U. Jiro.</HandleName>
            <Role>合唱編曲・指揮</Role>
          </Name>
        </Header>
        <Body>
          <p>
            大阪拠点のサブカル混声合唱団 "
            <ExternalLink href="https://anising.web.fc2.com/">
              anixsing
            </ExternalLink>
            "（アニシング）主宰指揮者。
          </p>
          <p>
            その他にも様々なサブカル合唱の編曲・指揮活動を精力的に手掛け、昨年の第五回副次的文化系合唱祭では「
            <ExternalLink href="https://twitter.com/fkjUtaumono">
              合唱団〈唱物語〉
            </ExternalLink>
            」において「混声合唱メドレー〈唱物語〉」の編曲・指揮を務め、好評を博す。
          </p>
          <p>推しは阿良々木月火ちゃん。</p>
        </Body>
      </Biography>
    </Wrapper>
  )
}
