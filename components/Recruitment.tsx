import styled from "styled-components"

export const RecruitmentContainer = styled.div`
  position: relative;
  width: 100%;
`

export const RecruitmentSideHeader = styled.h2`
  position: fixed;
  top: 0;
  right: 0;
  width: 2.5rem;
  height: 100vh;
  padding-top: 4rem;
  display: flex;
  align-items: center;
  writing-mode: vertical-rl;
  background: linear-gradient(#eee, #fff);
  color: #555;
  font-size: 1.5rem;
`

export const RecruitmentTopHeader = styled.h3`
  padding-bottom: 0.25rem;
  font-size: 20px;
  border-bottom: 1px solid #888;
`

export const RecruitmentBody = styled.div`
  position: relative;
  width: calc(100% - 2.5rem);
  padding: 0.5rem 0.5rem 0 0.5rem;
`
