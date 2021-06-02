import styled from "styled-components"

export const RecruitmentContainer = styled.div`
  position: relative;
  width: 100%;
`

export const RecruitmentSideHeader = styled.h2`
  position: fixed;
  top: 0;
  left: 0;
  width: 2rem;
  height: 100vh;
  padding-top: 0.6rem;
  display: flex;
  align-items: center;
  writing-mode: vertical-rl;
  background: linear-gradient(#eee, #fff);
  color: #555;
  font-size: 1.2rem;
`

export const RecruitmentTopHeader = styled.h3`
  padding-bottom: 0.25rem;
  font-size: 20px;
  border-bottom: 1px solid #888;
`

export const RecruitmentBody = styled.div`
  position: relative;
  top: 0;
  left: 2rem;
  width: calc(100% - 2rem);
  padding: 0.5rem 0.5rem 0 0.5rem;
`
