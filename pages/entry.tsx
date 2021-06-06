import styled from "styled-components"
import React, { useState } from "react"
import Link from "next/Link"
import { useRouter } from "next/router"
import {
  Button,
  Checkbox,
  FormControlLabel,
  MenuItem,
  TextField,
  ThemeProvider,
} from "@material-ui/core"

import Layout from "../components/Layout"
import {
  RecruitmentContainer,
  RecruitmentSideHeader,
  RecruitmentBody,
} from "../components/Recruitment"
import { theme } from "../lib/theme"

const LinkWrapper = styled.span`
  padding: 0 0.2rem;

  & > a {
    text-decoration: underline;
  }
`

const FormItemWrapper = styled.div`
  padding-bottom: 1rem;
  width: calc(100% - 2rem);

  & > div {
    width: 100%;
  }
`

const ButtonWrapper = styled.div`
  width: 100%;
  text-align: center;
`

const CheckboxWrapper = styled.div`
  width: 100%;

  // monkey patch
  & input {
    position: absolute;
    visibility: hidden;
  }
`

const GFORM_URI_PATH =
  "https://docs.google.com/forms/u/2/d/e/1FAIpQLSdx1dhIIVEX0DE7eeOQd_PexrjM-cWNHvhahSO7i7iS9iGh2Q/formResponse"

const DUMMY_IFRAME_NAME = "dummy"

const PART_NAMES = [
  "Soprano（合唱）",
  "Alto（合唱）",
  "Tenor（合唱）",
  "Bass（合唱）",
  "Piccolo",
  "Flute",
  "Oboe",
  "Basson",
  "B♭ Clarinet",
  "Bass Clarinet",
  "Alto Saxophone",
  "Tenor Saxophone",
  "Baritone Saxophone",
  "Horn",
  "Trumpet",
  "Trombone",
  "Euphonium",
  "Tuba",
  "Percussion（Drums 以外）",
  "Electric Bass",
]

const Page = () => {
  const router = useRouter()

  const [handleName, setHandleName] = useState("")
  const [emailAddress, setEmailAddress] = useState("")
  const [secondaryContact, setSecondaryContact] = useState("")
  const [age, setAge] = useState("")
  const [part, setPart] = useState("")
  const [experience, setExperience] = useState("")
  const [otherSkills, setOtherSkills] = useState("")
  const [performance, setPerformance] = useState("")
  const [agreed, setAgreed] = useState(false)

  function canSubmit() {
    return (
      handleName !== "" &&
      emailAddress !== "" &&
      age !== "" &&
      part !== "" &&
      experience !== "" &&
      agreed
    )
  }

  return (
    <ThemeProvider theme={theme}>
      <Layout titlePrefix="参加申込フォーム">
        <RecruitmentContainer>
          <RecruitmentSideHeader>参加申込フォーム</RecruitmentSideHeader>
          <RecruitmentBody>
            <p>
              事前に
              <LinkWrapper>
                <Link href="requirements/001">参加要項</Link>
              </LinkWrapper>
              をよくお読みください。
            </p>
            <form
              method="POST"
              action={GFORM_URI_PATH}
              target={DUMMY_IFRAME_NAME}
              onSubmit={(_evt) => router.push("/thanks")}
            >
              <FormItemWrapper>
                <TextField
                  required
                  id="handle-name"
                  name="entry.817046770"
                  label="ハンドルネーム"
                  value={handleName}
                  onChange={(evt) => setHandleName(evt.currentTarget.value)}
                />
              </FormItemWrapper>
              <FormItemWrapper>
                <TextField
                  required
                  id="email-address"
                  name="emailAddress"
                  label="メールアドレス"
                  value={emailAddress}
                  onChange={(evt) => setEmailAddress(evt.currentTarget.value)}
                />
              </FormItemWrapper>
              <FormItemWrapper>
                <TextField
                  id="secondary-contact"
                  name="entry.1399057616"
                  label="第二連絡先（Twitter ID etc.）"
                  value={secondaryContact}
                  onChange={(evt) =>
                    setSecondaryContact(evt.currentTarget.value)
                  }
                />
              </FormItemWrapper>
              <FormItemWrapper>
                <TextField
                  required
                  id="age"
                  name="entry.1272048879"
                  label="参加初日時点の年齢"
                  value={age}
                  onChange={(evt) => setAge(evt.currentTarget.value)}
                />
              </FormItemWrapper>
              <FormItemWrapper>
                <TextField
                  select
                  required
                  id="part"
                  name="entry.1009972677"
                  label="参加希望パート"
                  value={part}
                  onChange={(evt) => setPart(evt.target.value)}
                >
                  {PART_NAMES.map((partName) => (
                    <MenuItem key={partName} value={partName}>
                      {partName}
                    </MenuItem>
                  ))}
                </TextField>
              </FormItemWrapper>
              <FormItemWrapper>
                <TextField
                  required
                  id="experience"
                  name="entry.330848135"
                  label="参加希望パートの経験年数"
                  value={experience}
                  onChange={(evt) => setExperience(evt.currentTarget.value)}
                />
              </FormItemWrapper>
              <FormItemWrapper>
                <TextField
                  multiline
                  id="other-parts"
                  name="entry.2120967444"
                  label="その他持参 or 演奏可能な楽器・パート"
                  value={otherSkills}
                  onChange={(evt) => setOtherSkills(evt.currentTarget.value)}
                />
              </FormItemWrapper>
              <FormItemWrapper>
                <TextField
                  multiline
                  id="performance"
                  name="entry.1432922972"
                  label="過去に参加した演奏イベント・演奏会等"
                  value={performance}
                  onChange={(evt) => setPerformance(evt.currentTarget.value)}
                />
              </FormItemWrapper>
              <FormItemWrapper>
                <CheckboxWrapper>
                  <FormControlLabel
                    control={
                      <Checkbox
                        color="primary"
                        checked={agreed}
                        onChange={(_evt) => setAgreed(!agreed)}
                      />
                    }
                    label="参加要項を読み、同意します。"
                  />
                </CheckboxWrapper>
                <input
                  type="hidden"
                  name="entry.1346686968"
                  value={agreed ? "はい" : "いいえ"}
                />
              </FormItemWrapper>
              <FormItemWrapper>
                <ButtonWrapper>
                  <Button
                    type="submit"
                    variant="outlined"
                    disabled={!canSubmit()}
                  >
                    送信
                  </Button>
                </ButtonWrapper>
              </FormItemWrapper>
            </form>
            <iframe name={DUMMY_IFRAME_NAME} />
          </RecruitmentBody>
        </RecruitmentContainer>
      </Layout>
    </ThemeProvider>
  )
}

export default Page
