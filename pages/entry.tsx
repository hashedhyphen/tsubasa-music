import React, { FormEvent, useState } from "react"
import { useRouter } from "next/router"

import Layout from "../components/Layout"
import {
  RecruitmentContainer,
  RecruitmentSideHeader,
  RecruitmentBody,
} from "../components/Recruitment"

const GFORM_URI_PATH =
  "https://docs.google.com/forms/u/2/d/e/1FAIpQLSdx1dhIIVEX0DE7eeOQd_PexrjM-cWNHvhahSO7i7iS9iGh2Q/formResponse"

const DUMMY_IFRAME_NAME = "dummy"

const Page = () => {
  const [emailAddress, setEmailAddress] = useState("api-test-x@example.com")

  const router = useRouter()
  const handleSubmit = (_e: FormEvent) => {
    router.push("/thanks")
  }

  return (
    <Layout titlePrefix="参加申込フォーム">
      <RecruitmentContainer>
        <RecruitmentSideHeader>参加申込フォーム</RecruitmentSideHeader>
        <RecruitmentBody>
          <form
            method="POST"
            action={GFORM_URI_PATH}
            onSubmit={handleSubmit}
            target={DUMMY_IFRAME_NAME}
          >
            <input readOnly type="text" name="entry.817046770" value="Hash" />
            <input
              readOnly
              type="text"
              name="entry.1399057616"
              value="@hashedhyphen"
            />
            <input readOnly type="text" name="entry.1272048879" value="27" />
            <input readOnly type="text" name="entry.330848135" value="2" />
            <textarea
              readOnly
              name="entry.2120967444"
              value="B♭Clarinet その他"
            />
            <textarea readOnly name="entry.1432922972" value="〈唱物語〉" />
            <select name="entry.1009972677" value="Bass（合唱）">
              <option value="Bass（合唱）">Bass（合唱）</option>
            </select>
            <input readOnly type="text" name="entry.1346686968" value="はい" />
            <input
              type="text"
              name="emailAddress"
              value={emailAddress}
              onChange={(evt) => setEmailAddress(evt.currentTarget.value)}
            />
            <button type="submit">送信</button>
          </form>
          <iframe name={DUMMY_IFRAME_NAME} />
        </RecruitmentBody>
      </RecruitmentContainer>
    </Layout>
  )
}

export default Page
