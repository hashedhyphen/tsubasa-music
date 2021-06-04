import { useEffect } from "react"
import styled from "styled-components"

import Layout from "../components/Layout"

const HeaderWrapper = styled.div`
  padding: 2rem 1rem;
`

const Header = styled.h1`
  display: inline-block;
  padding-bottom: 0.25rem;
  font-size: 20px;
  border-bottom: 1px solid #888;
`

export default function () {
  useEffect(() => {
    window.opener.location = "/thanks"
    window.close()
  })
  return (
    <Layout titlePrefix="参加申込受付中">
      <HeaderWrapper>
        <Header>参加申込受付中</Header>
      </HeaderWrapper>
    </Layout>
  )
}
