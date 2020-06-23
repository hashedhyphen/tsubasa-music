import styled from "styled-components"

const Outer = styled.div`
  width: 100%;
  padding: 2rem 0;
  text-align: center;
`

const Inner = styled.h1`
  display: inline-block;
  border-left: 5px double #555;
  border-right: 5px double #555;
  text-align: center;
`

const MainTitle = styled.div`
  font-size: 1.5rem;
  letter-spacing: 1rem;
  text-indent: 1rem;
  text-align: center;
`

const SubTitle = styled.div`
  font-size: 1.1rem;
  letter-spacing: 0.25rem;
  text-indent: 0.75rem;
  text-align: center;
  line-height: 2;
`

export function Title() {
  return (
    <Outer>
      <Inner>
        <MainTitle>浪白公園音樂團</MainTitle>
        <SubTitle>樂劇《つばさミュージック》</SubTitle>
      </Inner>
    </Outer>
  )
}
