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
        <Date>2022-03-06（日）</Date>
        <Note>合唱・吹奏楽練習（関東圏内）</Note>
      </Schedule>
      <Schedule>
        <Date>2022-03-21（祝）</Date>
        <Note>関係者限定演奏会（関東圏内）</Note>
      </Schedule>
    </ul>
  )
}
