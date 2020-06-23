import styled from "styled-components"

const ArtLink = styled.a`
  display: block;
  width: 100%;
`

const Frame = styled.figure`
  width: 100%;
  box-shadow: 0 0 5px #aaa;
`

const Art = styled.img`
  display: block;
  width: 100%;
`

const Caption = styled.figcaption`
  width: 100%;
  padding: 1rem 0;
  width: 100%;
  text-align: center;
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
  text-indent: 0.1rem;
  line-height: 1.5;
  background-color: #fff;
  color: #444;
`

const Underline = styled.p`
  text-decoration: underline #aaa;
`

export function ConceptArt() {
  return (
    <ArtLink href="https://www.pixiv.net/artworks/80290146">
      <Frame>
        <Art src="/img/concept_art.png" />
        <Caption>
          <p>コンセプトアート（絵：もちさとさん）</p>
          <Underline>pixiv: 紡ごう、私の〈物語〉を———</Underline>
        </Caption>
      </Frame>
    </ArtLink>
  )
}
