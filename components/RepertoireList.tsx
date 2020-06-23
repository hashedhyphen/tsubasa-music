import styled from "styled-components"

const Repertoire = styled.li`
  padding-bottom: 1rem;

  &:last-child {
    padding-bottom: 0;
  }
`

const SongTitle = styled.p`
  padding-bottom: 0.3rem;
  font-size: 1.3rem;
`

const SongMeta = styled.p`
  padding-left: 1rem;
`

export function RepertoireList() {
  return (
    <ul>
      <Repertoire>
        <SongTitle>sugar sweet nightmare</SongTitle>
        <SongMeta>吹奏樂（編曲・指揮：Hash）</SongMeta>
      </Repertoire>
      <Repertoire>
        <SongTitle>perfect slumbers</SongTitle>
        <SongMeta>合唱（編曲・指揮：U. Jiro.）</SongMeta>
      </Repertoire>
      <Repertoire>
        <SongTitle>chocolate insomnia</SongTitle>
        <SongMeta>吹奏樂・合唱（編曲・指揮：Hash）</SongMeta>
      </Repertoire>
    </ul>
  )
}
