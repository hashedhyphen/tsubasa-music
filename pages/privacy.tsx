import Link from "next/link"
import Layout from "../components/Layout"

const PrivacyPage = () => (
  <Layout titlePrefix="プライバシーポリシー">
    <h1>プライバシーポリシー</h1>
    <p>
      当サイトでは、サイトの利用状況を解析するため、Google
      社のアクセス解析ツール「Google アナリティクス」を利用しています。
    </p>

    <p>
      この Google アナリティクスはトラフィックデータの収集のために Cookie
      を使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。
    </p>

    <p>
      Google アナリティクスでデータが収集、処理される仕組みについて、ならびに
      Google によるデータ収集を停止する方法については
      <a href="https://policies.google.com/technologies/partner-sites?hl=ja">
        https://policies.google.com/technologies/partner-sites?hl=ja
      </a>
      を参照してください。
    </p>

    <p>
      <Link href="/">
        <a>トップページに戻る</a>
      </Link>
    </p>
  </Layout>
)

export default PrivacyPage
