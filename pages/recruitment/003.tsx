import styled from "styled-components"

import Link from "next/link"
import Layout from "../../components/Layout"
import {
  RecruitmentContainer,
  RecruitmentSideHeader,
  RecruitmentTopHeader,
  RecruitmentBody,
} from "../../components/Recruitment"
import { Navigation, NavigationButton } from "../../components/Navigation"
import { Important } from "../../components/Important"

const LeadPara = styled.p`
  padding-top: 1rem;
`

const Section = styled.section`
  padding-top: 1rem;
  line-height: 1.5;
`

const SectionHeader = styled.h4`
  &::before {
    padding-right: 0.25rem;
    content: "▲";
    color: #555;
    font-size: 0.9rem;
  }
`

const MainList = styled.ol`
  padding: 0.5rem 0 0 2rem;
  list-style: decimal;
`

const SubList = styled.ul`
  padding-left: 0.8rem;
`

const SubListItem = styled.li`
  padding-top: 1rem;
`

const SubListItemHeader = styled.p``

const ExternalLink = styled.a`
  line-height: 1;
  font-size: 0.9rem;
  text-decoration: underline #aaa;
`

const Page = () => (
  <Layout titlePrefix="募集要項 003">
    <RecruitmentContainer>
      <RecruitmentSideHeader>募集要項　００３</RecruitmentSideHeader>
      <RecruitmentBody>
        <RecruitmentTopHeader>続・応募資格</RecruitmentTopHeader>

        <LeadPara>
          皆様に安心してご参加いただけるよう、また使用施設の利用基準を遵守するため、本企画では新型コロナウイルス感染症への様々な対策を講じます。
        </LeadPara>
        <LeadPara>
          そのため、参加者の皆様にはこれらの対策を遵守していただきます。
        </LeadPara>
        <LeadPara>
          以下の対策案は、事前に使用施設と一度打ち合わせをさせていただいた内容であり、また日々刻々と変わる状況を踏まえて、当日まで定期的に使用施設に対策案の見直しを行います。
        </LeadPara>

        <Section>
          <SectionHeader>マスクの着用について</SectionHeader>

          <MainList>
            <li>
              施設内において、参加者全員はマスクを着用します。ただし次項の例外を除きます。
            </li>
            <li>管楽器奏者は合奏時のみマスクを外しても良いこととします。</li>
            <li>参加者のマスクは運営側での人数分確保に努めます。</li>
          </MainList>

          <SubList>
            <SubListItem>
              <SubListItemHeader>補足 1.</SubListItemHeader>
              <p>
                合唱演奏はマスクを着用した状態で行います。ただし、可能な限りブレスや演奏を妨げないマスクの着用を目指します。
              </p>
              <p>参考：合唱演奏用マスクについて</p>
              <ul>
                <li>
                  <ExternalLink
                    target="blank"
                    href="https://twitter.com/TokyoKonsei/status/1270308778592722944"
                  >
                    https://twitter.com/TokyoKonsei/status/1270308778592722944
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    target="blank"
                    href="https://twitter.com/Toma_Shuichi/status/1270167235806388224"
                  >
                    https://twitter.com/Toma_Shuichi/status/1270167235806388224
                  </ExternalLink>
                </li>
              </ul>
            </SubListItem>
          </SubList>
        </Section>

        <Section>
          <SectionHeader>健康確認について</SectionHeader>

          <MainList>
            <li>会場毎に運営側で非接触式体温計を 1 台用意します。</li>
            <li>
              参加者の入場時に参加者の体温を測定し、37.5℃以上かつ参加者の平熱より
              1℃以上高かった場合は、当日の参加をお断りします。
            </li>
            <li>
              加えて検温時に健康状態を口頭確認し、体調不良が認められた場合には、当日の参加をお断りします。
            </li>
            <li>
              当日から 14 日以内について、海外の感染流行国（補足 1.
              で定義）へ渡航歴がないこと、新型コロナウイルス感染症陽性者と濃厚接触がないことを検温時に口頭確認します。
            </li>
            <li>
              上記の各確認項目について問題がないことを、参加者は出発前に確認します。
            </li>
          </MainList>

          <SubList>
            <SubListItem>
              <SubListItemHeader>補足 1.</SubListItemHeader>
              <p>
                感染流行国とは、外務省がレベル 1
                以上の感染症危険情報を発出している国とします。
              </p>
              <p>
                <ExternalLink
                  target="blank"
                  href="https://www.anzen.mofa.go.jp/masters/kansen_risk.html"
                >
                  https://www.anzen.mofa.go.jp/masters/kansen_risk.html
                </ExternalLink>
              </p>
            </SubListItem>
            <SubListItem>
              <SubListItemHeader>補足 2.</SubListItemHeader>
              <p>
                体温計が 1
                台のため、検温を待機する人の密度が大きくならないよう、集合時刻の分散を検討します。
              </p>
            </SubListItem>
            <SubListItem>
              <SubListItemHeader>補足 3.</SubListItemHeader>
              <p>
                参加者が遅刻する場合を想定し、検温を行う待機場所を事前に周知します。
              </p>
            </SubListItem>
          </SubList>
        </Section>

        <Section>
          <SectionHeader>クラスター調査への協力について</SectionHeader>

          <MainList>
            <li>
              <Important>
                参加者の氏名と電話番号を、当日の会場においてオンラインな方法で収集します。
              </Important>
            </li>
            <li>
              収集した個人情報は主宰の責任において 1
              ヶ月保管した後に破棄します。
            </li>
          </MainList>

          <SubList>
            <SubListItem>
              <SubListItemHeader>補足 1.</SubListItemHeader>
              <p>
                氏名と電話番号を収集するのは、使用施設のガイドラインに準拠しています。
              </p>
            </SubListItem>
            <SubListItem>
              <SubListItemHeader>補足 2.</SubListItemHeader>
              <p>
                情報を「当日の会場において」収集するのは、保管する個人情報を必要最小限にするためです。
              </p>
            </SubListItem>
            <SubListItem>
              <SubListItemHeader>補足 3.</SubListItemHeader>
              <p>
                情報を「オンラインな方法で」収集するのは、収集時の不要な接触を避けるためです。
              </p>
            </SubListItem>
          </SubList>
        </Section>

        <Section>
          <SectionHeader>消毒について</SectionHeader>

          <MainList>
            <li>施設入場時や休憩時などの手指消毒を原則とします。</li>
          </MainList>

          <SubList>
            <SubListItem>
              <SubListItemHeader>補足 1.</SubListItemHeader>
              <p>
                スワブを使用した際などは特別な注意を払い、休憩時などに手指消毒することを推奨します。
              </p>
            </SubListItem>
            <SubListItem>
              <SubListItemHeader>補足 2.</SubListItemHeader>
              <p>
                床面の清掃・消毒については、土足による利用、かつ床に落ちた飛沫が再び空気中に舞うことは考えにくいといった側面を踏まえつつ、使用施設の意向に従います。
              </p>
              <p>
                <ExternalLink href="https://news.goo.ne.jp/article/toyokeizai/business/toyokeizai-347664.html">
                  https://news.goo.ne.jp/article/toyokeizai/business/toyokeizai-347664.html
                </ExternalLink>
              </p>
            </SubListItem>
          </SubList>
        </Section>

        <Section>
          <SectionHeader>舞台設営について</SectionHeader>

          <MainList>
            <li> 可能な限り最小の人数で行います。</li>
            <li>設営作業後に手指消毒を行います。</li>
          </MainList>

          <SubList>
            <SubListItem>
              <SubListItemHeader>補足 1.</SubListItemHeader>
              <p>
                ここでの「舞台設営」とは、ひな壇の組み立て、打楽器・アンプの配置、椅子・譜面台の配置を想定しています。
              </p>
            </SubListItem>
            <SubListItem>
              <SubListItemHeader>補足 2.</SubListItemHeader>
              <p>
                設営作業後に手指消毒を行うため、手袋の着用は特に強制しません
              </p>
            </SubListItem>
          </SubList>
        </Section>

        <Section>
          <SectionHeader>参加者間の距離について</SectionHeader>

          <MainList>
            <li>舞台配置において参加者間の距離は 1m 以上を確保します。</li>
            <li>
              客席において参加者間には前後 1 列・横 1 席以上の距離を確保します。
            </li>
            <li>
              その他、施設内のベンチは左右に 1
              席以上空けて向かい合わず使用します。
            </li>
          </MainList>

          <SubList>
            <SubListItem>
              <SubListItemHeader>補足 1.</SubListItemHeader>
              <p>
                参加者間の距離「1m」は使用施設を含む様々な公共施設のガイドラインを参考にしています。
              </p>
            </SubListItem>
            <SubListItem>
              <SubListItemHeader>補足 2.</SubListItemHeader>
              <p>
                ベンチを左右に 1
                席以上空ける、向かい合わずに使用することは、様々な公共施設や商業施設で行われている対策を参考にしています。
              </p>
            </SubListItem>
          </SubList>
        </Section>

        <Section>
          <SectionHeader>管楽器の取り扱いについて</SectionHeader>

          <MainList>
            <li>管楽器の水滴処理における飛沫の拡散に十分注意します。</li>
          </MainList>

          <SubList>
            <SubListItem>
              <SubListItemHeader>補足 1.</SubListItemHeader>
              <p>
                「消毒について 補足
                1.」で述べたように、床面の消毒については特に考えていないため、いわゆる「バケツ」の使用を強制することは考えていません。
              </p>
            </SubListItem>
            <SubListItem>
              <SubListItemHeader>補足 2.</SubListItemHeader>
              <p>
                息を吹き込みながら行う水滴処理は可能な限り避けるよう参加者に周知します。必要不可欠な場合は開口部を布で覆うなど、可能な限り飛沫の拡散防止に努めるよう参加者に周知します。
              </p>
            </SubListItem>
          </SubList>
        </Section>

        <Section>
          <SectionHeader>昼食について</SectionHeader>

          <MainList>
            <li>
              施設内での飲食が禁止されている場合は、施設外で昼食を取ります。
            </li>
            <li>
              施設内での飲食が可能な場合は、席を 1
              つ以上空ける、向かい合わないなどに注意します。
            </li>
          </MainList>
        </Section>

        <Navigation>
          <NavigationButton>
            <Link href="/recruitment/002">
              <a>◁ 002</a>
            </Link>
          </NavigationButton>
          <NavigationButton>
            <Link href="/recruitment/004">
              <a>004 ▷</a>
            </Link>
          </NavigationButton>
        </Navigation>
      </RecruitmentBody>
    </RecruitmentContainer>
  </Layout>
)

export default Page
