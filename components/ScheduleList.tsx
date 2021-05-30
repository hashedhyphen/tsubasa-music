import styled from "styled-components"

const Schedule = styled.li`
  padding-bottom: 1rem;

  &:last-child {
    padding-bottom: 0;
  }
`

const Date = styled.p`
  padding-bottom: 0.3rem;
  font-size: 1.7rem;
`

const Note = styled.p`
  color: #666;
`

export function ScheduleList() {
  return (
    <ul>
      <Schedule>
        <Date>2022-02-19（土）</Date>
        <Note>合唱レコーディング（関東圏内）</Note>
      </Schedule>
      <Schedule>
        <Date>2022-03-06（日）</Date>
        <Note>吹奏楽レコーディング（関東圏内）</Note>
      </Schedule>
      <Schedule>
        <Date>2022-03-21（祝）</Date>
        <Note>演奏会本番（関東圏内）</Note>
      </Schedule>
    </ul>
  )
}
