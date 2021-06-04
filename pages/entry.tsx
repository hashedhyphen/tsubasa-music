import { useState } from "react"

import Layout from "../components/Layout"
import {
  RecruitmentContainer,
  RecruitmentSideHeader,
  RecruitmentBody,
} from "../components/Recruitment"

/*
content-type: application/x-www-form-urlencoded
entry.817046770: Hash
entry.1399057616: @hashedhyphen
entry.1272048879: 27
entry.330848135: 2
entry.2120967444: B♭Clarinet
その他
entry.1432922972: 〈唱物語〉
entry.1009972677: Bass（合唱）
entry.1346686968: はい
emailAddress: me@hashedhyphen.com
entry.1346686968_sentinel:
fvv: 1
draftResponse: [null,null,"-2070866045266500232"]
pageHistory: 0
fbzx: -2070866045266500232

method="POST"
action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSdx1dhIIVEX0DE7eeOQd_PexrjM-cWNHvhahSO7i7iS9iGh2Q/formResponse"
*/

const Page = () => {
  const [emailAddress, setEmailAddress] = useState("api-test-x@example.com")

  return (
    <Layout titlePrefix="参加申込フォーム">
      <RecruitmentContainer>
        <RecruitmentSideHeader>参加申込フォーム</RecruitmentSideHeader>
        <RecruitmentBody>
          <form
            method="POST"
            action="https://docs.google.com/forms/u/2/d/e/1FAIpQLSdx1dhIIVEX0DE7eeOQd_PexrjM-cWNHvhahSO7i7iS9iGh2Q/formResponse"
            onSubmit={() => window.open("/loading", "_blank", "rel=opener")}
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
            ></textarea>
            <textarea
              readOnly
              name="entry.1432922972"
              value="〈唱物語〉"
            ></textarea>
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
        </RecruitmentBody>
      </RecruitmentContainer>
    </Layout>
  )
}

export default Page
