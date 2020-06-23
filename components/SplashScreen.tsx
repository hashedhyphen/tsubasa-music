import styled from "styled-components"

import React from "react"

const Splash = styled.div<{ display: string; opacity: number }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: ${(props) => props.display};
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: #fafafa;
  opacity: ${(props) => props.opacity};
  transition: opacity 2s;
`

const Punchline = styled.div<{ opacity: number }>`
  background-color: #fafafa;
  color: #444;
  writing-mode: vertical-rl;
  font-size: 1.5rem;
  line-height: 2;
  letter-spacing: 1.5rem;
  opacity: ${(props) => props.opacity};
  transition: opacity 2s;
`

const BeforePunct = styled.span`
  letter-spacing: 0.6rem;
`

const RubyText = styled.rt`
  position: relative;
  top: -0.7rem;
  font-size: 0.7rem;
  letter-spacing: normal;
`

type State = {
  showingPunchline: boolean
  hidingSplashScreen: boolean
  removingSplashScreen: boolean
}

export class SplashScreen extends React.Component<{}, State> {
  state = {
    showingPunchline: false,
    hidingSplashScreen: false,
    removingSplashScreen: false,
  }

  showPunchline() {
    this.setState({ showingPunchline: true })
    window.setTimeout(() => this.hideSplashScreen(), 3000)
  }

  hideSplashScreen() {
    this.setState({ hidingSplashScreen: true })
    window.setTimeout(() => this.removeSplashScreen(), 2000)
  }

  removeSplashScreen() {
    this.setState({ removingSplashScreen: true })
  }

  punchlineOpacity(): number {
    return this.state.showingPunchline ? 1 : 0
  }

  splashScreenOpacity(): number {
    return this.state.hidingSplashScreen ? 0 : 1
  }

  splashScreenDisplay(): string {
    return this.state.removingSplashScreen ? "none" : "flex"
  }

  onReadyStateChange(evt: Event) {
    if (evt.target instanceof HTMLDocument) {
      if (evt.target.readyState === "complete") {
        this.showPunchline()
      }
    }
  }

  componentDidMount() {
    if (document.readyState === "complete") {
      this.showPunchline()
      return
    }

    document.addEventListener("readystatechange", (evt) =>
      this.onReadyStateChange(evt)
    )
  }

  render() {
    return (
      <Splash
        opacity={this.splashScreenOpacity()}
        display={this.splashScreenDisplay()}
      >
        <Punchline opacity={this.punchlineOpacity()}>
          青春<BeforePunct>は</BeforePunct>、
          <br />
          君の
          <ruby>
            朝<RubyText>あした</RubyText>
          </ruby>
          に<br />
          目を覚ま<BeforePunct>す</BeforePunct>。
        </Punchline>
      </Splash>
    )
  }
}
