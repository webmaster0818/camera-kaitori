import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, PUBLISHED_DATE } from "@/lib/site";

const TITLE = "カメラ買取はどこに依頼するべきか｜専門店・総合買取・出張買取・フリマの使い分け";
const DESC =
  "カメラやレンズの売却方法は、カメラ専門店・総合リユース店・出張買取・フリマやオークションの4つに大きく分かれます。それぞれの仕組みと適した方、種類別の依頼先の考え方、比較の基準、一括査定の注意点を判断チャートとともに解説します。";
const PATH = "/guide/erabikata/";

export const metadata: Metadata = {
  title: TITLE,
  description: DESC,
  alternates: { canonical: PATH },
};

const articleLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESC,
  datePublished: PUBLISHED_DATE,
  dateModified: PUBLISHED_DATE,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  author: { "@type": "Organization", name: OPERATOR.name },
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function ErabikataGuidePage() {
  const conclusions = [
    "カメラやレンズの売却方法は、カメラ専門店、総合リユース店、出張買取、フリマ・オークションの4つに大きく分かれます。いずれか一つが最適というわけではなく、売却する品の種類とご自身の状況に応じて使い分けるのが基本です。",
    "種類別の考え方は次のとおりです。フィルムカメラやオールドレンズのように知識によって評価が変わる品は専門知識のある窓口、デジタルの現行機のように相場の変動が速い品は在庫の回転が速い窓口、動かない品やカビのある品はジャンク品の受付を明記している窓口が適しています。",
    "窓口を比べるときは査定額の目安だけでなく、査定料・出張料・送料・返送料・入金のタイミング・キャンセル条件・古物商許可の表示・本人確認の方式を同じ基準で比較します。",
    "複数社への相談は有効ですが、一括査定には連絡が集中する、概算と実際の査定額が異なるといった特徴があります。仕組みを理解したうえで、最終的には規約をご自身で確認することが重要です。",
  ];

  const methods = [
    {
      t: "カメラ専門店（店頭・宅配）",
      how: "カメラとレンズを中心に扱う買取窓口です。機種・レンズのマウント・製造時期・状態といった要素で相場を細かく見分ける専門知識を持ち、動作確認やレンズ内部の点検を前提に査定するのが一般的です。宅配買取に対応している窓口が多く、店舗が近くになくても利用できます。",
      good: "フィルムカメラ・オールドレンズ・限定モデルなど、知識によって評価が大きく変わる品をお持ちの方、付属品や元箱が揃っており、適切な評価を希望する方に適しています。",
      bad: "カメラ以外の品もまとめて処分したい方、当日中の現金化を希望する方には適していません（宅配の場合は到着と査定を待つ必要があります）。",
    },
    {
      t: "総合リユース店（家電・ブランド品なども扱う店）",
      how: "家電・ブランド品・ホビーなど幅広い品目を扱う買取店で、カメラもその一部として受け付ける窓口です。店舗数が多く、他の不用品と一緒に持ち込める手軽さがあります。カメラ専門の査定担当がいるかどうかは店舗によって異なります。",
      good: "引っ越しや整理でカメラ以外の品も一緒に手放したい方、近隣の店舗で手続きを済ませたい方、相場が比較的わかりやすい現行のデジタル機を売却する方に適しています。",
      bad: "希少なフィルムカメラやオールドレンズなど、専門知識がないと価値を見落とされやすい品を売却する方には適していません。",
    },
    {
      t: "出張買取（業者が自宅に来る）",
      how: "業者が自宅などを訪れ、その場で査定して買い取る方法です。大量のカメラやレンズ、重い三脚や大判機材など持ち運びが難しい物、遺品整理で量が多い場合に選ばれることが多い方法です。対応エリアと出張料の有無は業者によって異なります。",
      good: "持ち込みが難しい量や重さの機材をお持ちの方、遺品として残された機材をまとめて査定してほしい方、外出が難しい方に適しています。",
      bad: "1台のみを売却したい方（対応外となる場合があります）、自宅に人を招くことに抵抗がある方には適していません。",
    },
    {
      t: "フリマアプリ・ネットオークション（ご自身で売る）",
      how: "ご自身で出品し、買い手と直接取引する方法です。買取店の利益分がないため、条件によっては手元に残る金額が大きくなる可能性がありますが、撮影・説明文の作成・質問対応・梱包・発送・トラブル対応をすべてご自身で行う必要があります。",
      good: "時間と手間をかけてでもご自身で売却したい方、動作や状態を正確に説明できる方に適しています。",
      bad: "動作確認や状態の説明に不安がある方、売却後に購入者と状態をめぐる行き違いが生じるリスクを避けたい方、早期の現金化を希望する方には適していません。",
    },
  ];

  const byTypeRows = [
    {
      label: "フィルムカメラ・オールドレンズ",
      value:
        "製造時期・生産数・マウント・レンズ構成といった要素で評価が分かれるため、専門知識のある窓口に査定を依頼するのが基本です。動作未確認でも査定対象になる場合がありますが、その判断ができるのも知識のある窓口です。総合リユース店では、古い品として一括で扱われることがあります。",
    },
    {
      label: "デジタル一眼・ミラーレスの現行機・型落ち機",
      value:
        "新型の発売や値下げにより相場の変動が速いカテゴリです。査定から入金までが早く、在庫の回転が速い窓口が適しています。シャッター回数や付属品の有無が評価に影響するため、売却前の準備も重要です。",
    },
    {
      label: "壊れた・ジャンク・カビあり",
      value:
        "「ジャンク品も受け付ける」「カビ・くもりありも査定対象」と明記している窓口を選びます。明記のない窓口では、査定不可や返送となることがあります。部品取りや修理を前提に評価されるため、状態を正確に申告することが重要です。",
    },
    {
      label: "レンズ単体・アクセサリー",
      value:
        "レンズ単体を受け付けるかどうかは窓口によって異なります。三脚・ストロボ・フィルターなどの周辺機器は、本体と一緒であれば受け付けるが単体では対象外という扱いもあるため、事前に確認します。",
    },
    {
      label: "大量・遺品",
      value:
        "台数が多い場合や遺品の場合は、出張買取または大量対応を明記した宅配買取が候補になります。仕分けをしない状態でも査定を受けられるかどうか、相続人の同意が必要かどうかを確認してから依頼します。",
    },
  ];

  const yardsticks = [
    {
      label: "査定料",
      value:
        "査定に費用がかかるかどうかを確認します。無料としている窓口が多い一方、条件付きの場合もあります。「査定料無料」でも、キャンセル時の返送料は別に扱われることがあります。",
    },
    {
      label: "出張料",
      value:
        "出張買取で自宅まで来てもらう費用です。無料、エリアや金額による条件付き、有料に分かれます。買取が成立しなかった場合に出張料がかかるかどうかも確認します。",
    },
    {
      label: "送料（宅配買取の発送）",
      value:
        "業者宛てに送る送料の負担者を確認します。着払い伝票や梱包キットが用意されるか、集荷を依頼できるかも合わせて確認します。",
    },
    {
      label: "返送料（キャンセル時）",
      value:
        "査定額に納得できず返送を依頼する場合の送料です。業者負担、自己負担、条件付きに分かれます。自己負担の場合、返送料が査定額を上回るような品では実質的にキャンセルしづらくなります。",
    },
    {
      label: "入金のタイミング",
      value:
        "承諾から入金までの日数です。店頭は即時、宅配や出張は承諾後の振込が一般的です。本人確認の方式によっては、書類の受け取り完了後の入金となることがあります。",
    },
    {
      label: "キャンセル条件",
      value:
        "査定後のキャンセルの可否、その期限、「連絡がなければ自動承諾」となるかどうかを確認します。宅配買取では規約に定められた条件が基本になります。",
    },
    {
      label: "古物商許可の表示",
      value:
        "中古品を買い取る業者は、古物商の許可を受けるのが原則とされています。公式サイトや店舗に許可番号と公安委員会名が表示されているかどうかは、窓口の信頼性を見る基本的な目安です。",
    },
    {
      label: "本人確認の方式",
      value:
        "買取時には本人確認が求められるのが一般的です。店頭での提示、宅配での書類の写しの同梱、オンラインでの本人確認、本人限定受取郵便など方式は窓口によって異なります。お手元の書類で対応できるかを確認します。",
    },
  ];

  const multi = [
    {
      t: "複数社に聞く意味",
      d: "カメラやレンズの評価は窓口の得意分野と在庫状況で変わるため、1社のみの査定では比較の基準がありません。専門店と総合店、あるいは専門店同士で2〜3社に相談すると、相場の幅とお持ちの品の位置付けを把握できます。宅配買取では、事前見積もり（仮査定）を複数社に依頼し、条件の良い窓口に実際に送付する進め方が一般的です。",
    },
    {
      t: "一括査定サービスの仕組み",
      d: "一括査定サービスは、1回の入力で複数の買取業者に情報が渡り、各社から連絡や概算が届く仕組みです。1社ずつ問い合わせる手間を省ける一方、サービス自体は買取を行わず、業者を紹介する立場であることが一般的です。実際の買取契約は各業者との間で結ぶことになります。",
    },
    {
      t: "一括査定の注意点",
      d: "登録直後に複数の業者から電話やメールが集中することがあります。また、入力情報のみで算出される概算は実機を確認した査定額ではないため、実際の査定で変わるのが通常です。概算の高さのみで選ばず、その業者の送料・返送料・キャンセル条件・古物商許可の表示を確認してから進めるのが基本です。連絡を減らしたい場合は、連絡方法の希望をあらかじめ伝えられるかも確認します。",
    },
    {
      t: "規約の最終確認",
      d: "いずれの窓口を選ぶ場合も、申込前に公式サイトの規約でキャンセル条件と返送料を確認しておくことが、最も有効な対策です。口頭やメールでの説明と規約が異なる場合は、規約の記載を基準に質問してください。",
    },
  ];

  const chartRows = [
    {
      label: "フィルムカメラや古いレンズがある",
      value: "カメラ専門店（宅配または店頭）。動作未確認の場合も申告のうえ相談",
    },
    {
      label: "現行のデジタル機を早く売りたい",
      value: "在庫の回転が速いカメラ専門店の宅配買取、または近隣の総合リユース店の店頭買取",
    },
    {
      label: "カメラ以外の品もまとめて処分したい",
      value: "総合リユース店。希少な品が含まれる場合は、その品のみ専門店に依頼",
    },
    {
      label: "量が多い・重い・持ち出せない",
      value: "出張買取。対応エリア・出張料・不成立時の費用を事前に確認",
    },
    {
      label: "遺品の内容が把握できていない",
      value: "遺品・大量対応を明記した出張買取または宅配買取。相続人の同意を事前に整理",
    },
    {
      label: "動かない・カビがある",
      value: "ジャンク品の受付を明記した窓口。状態を正確に申告",
    },
    {
      label: "手間をかけてもご自身で売却したい",
      value: "フリマ・オークション。状態説明と発送・トラブル対応をご自身で行うことが前提",
    },
    {
      label: "依頼先に迷う",
      value: "専門店と総合店の2〜3社に事前見積もりを依頼し、条件を同じ基準で比較",
    },
  ];

  const faqs = [
    {
      q: "カメラ専門店と総合リユース店では、どちらに持ち込むべきですか？",
      a: "売却する品の種類で使い分けるのが基本です。フィルムカメラ・オールドレンズ・限定モデルなど、知識によって評価が変わる品は専門店、現行のデジタル機や、ほかの不用品と一緒に処分したい場合は総合リユース店が適しています。迷う場合は両方に事前見積もりを依頼し、条件を比較してから決めることをおすすめします。",
    },
    {
      q: "出張買取は1台でも来てもらえますか？",
      a: "業者によって異なります。出張買取は台数や重さがあり持ち運びが難しい場合に適した方法で、1台のみは対象外としている場合や、出張料がかかる場合があります。1台であれば宅配買取や店頭買取のほうが条件が合いやすいことが多いため、まず宅配・店頭を検討し、量が多い場合に出張を選ぶのが一般的です。",
    },
    {
      q: "フリマアプリで売るほうが高く売れますか？",
      a: "一概には言えません。買取店の利益分がないため、条件によっては手元に残る金額が大きくなる可能性はありますが、撮影・説明・発送・トラブル対応をご自身で行う手間と、動作や状態をめぐって購入者との行き違いが生じるリスクがあります。カメラは精密機器のため、状態を正確に説明することに不安がある場合は、買取店の利用をおすすめします。",
    },
    {
      q: "一括査定は利用したほうがよいですか？",
      a: "複数社の概算を一度に集められる点は便利ですが、登録後に連絡が集中することや、概算が実際の査定額と異なることは理解しておく必要があります。概算の高さのみで選ばず、各業者の送料・返送料・キャンセル条件・古物商許可の表示を確認してから、実際に送る窓口を決めてください。",
    },
    {
      q: "業者を比較する際、査定額以外で何を確認すればよいですか？",
      a: "査定料・出張料・送料・返送料・入金のタイミング・キャンセル条件・古物商許可の表示・本人確認の方式の8項目を同じ基準で比較するのが基本です。特に返送料とキャンセル条件は、査定後に減額があったときの自由度を左右します。当サイトの比較表では、これらを公式サイトで確認できた範囲で整理しています。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "カメラ買取の依頼先の選び方", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">HOW TO CHOOSE A BUYER</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          カメラ買取はどこに依頼するべきか｜専門店・総合買取・出張買取・フリマの使い分け
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          カメラやレンズを売却する際、最初に検討が必要なのは依頼先です。依頼先には、カメラ専門店、家電やブランド品も扱う総合リユース店、自宅に来てもらう出張買取、ご自身で出品するフリマやオークションがあり、それぞれ仕組みと得意な品目が異なります。本ページでは、4つの売却方法の仕組みと適した方、フィルム・オールドレンズ・デジタル・ジャンクといった種類別の依頼先の考え方、依頼先を比較する基準、複数社に相談する際の注意点を、判断チャートとともに一般的な知識として整理しています。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">カメラの売却先の種類と使い分けの考え方</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 4つの売り方 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">4つの売却方法の仕組みと適した方</h2>
          <div className="space-y-5">
            {methods.map((m, i) => (
              <div key={m.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {m.t}
                </h3>
                <p className="mt-3 text-[13px] leading-loose text-steel-700">{m.how}</p>
                <dl className="mt-4 grid gap-3 md:grid-cols-2">
                  <div className="border-l-2 border-vermilion pl-3">
                    <dt className="font-display text-xs tracking-widest2 text-vermilion">適している方</dt>
                    <dd className="mt-1 text-[13px] leading-loose text-steel-700">{m.good}</dd>
                  </div>
                  <div className="border-l-2 border-chalk-line pl-3">
                    <dt className="font-display text-xs tracking-widest2 text-steel-500">適していない方</dt>
                    <dd className="mt-1 text-[13px] leading-loose text-steel-700">{m.bad}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 上記は一般的な傾向の整理です。実際の対応品目・条件は窓口ごとに異なるため、公式サイトの記載でご確認ください。
          </p>
        </section>

        {/* 種類別 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">売却する品の種類別の依頼先の選び方</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            依頼先は、売却する品の種類によっておおむね決まります。判断の基準は、フィルムカメラやオールドレンズは<Link href="/film/" className="text-vermilion underline underline-offset-4">専門知識のある窓口</Link>、デジタル現行機は<Link href="/digital/" className="text-vermilion underline underline-offset-4">回転の速い窓口</Link>、動かない物は<Link href="/broken/" className="text-vermilion underline underline-offset-4">ジャンク品の受付を明記した窓口</Link>、という3点です。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {byTypeRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 比較の物差し */}
        <section className="mt-14">
          <h2 className="section-title mb-2">依頼先を比較する8つの基準</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            査定額の目安は品目と時期によって変わるため、依頼先を選ぶ判断材料としては安定しません。一方、次の8項目は公式サイトの規約で確認でき、申込後の手続きの負担と選択の自由度に影響します。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {yardsticks.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 古物商許可・本人確認に関する記述は一般的な整理です。制度の詳細は各都道府県の公安委員会や警察の案内でご確認ください。
          </p>
        </section>

        {/* 複数社に聞く */}
        <section className="mt-14">
          <h2 className="section-title mb-6">複数社への相談の考え方と一括査定の注意点</h2>
          <div className="space-y-4">
            {multi.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 判断チャート */}
        <section className="mt-14">
          <h2 className="section-title mb-2">判断チャート：状況に応じた売却方法の選び方</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            左の状況に近い項目を探し、右の売却方法を検討の出発点としてください。複数に当てはまる場合は、最も価値が高いと考えられる品を基準に選ぶことをおすすめします。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <thead>
                <tr>
                  <th className="w-40 md:w-56">状況</th>
                  <th>検討の出発点となる売却方法</th>
                </tr>
              </thead>
              <tbody>
                {chartRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">買取業者を比較表で見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断で確認する</Link>
          </div>
        </section>

        {/* 売る前に */}
        <section className="mt-14">
          <h2 className="section-title mb-2">依頼先を決めた後の売却前の準備</h2>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <p className="text-[13px] leading-loose text-steel-700">
              いずれの売却方法でも、査定は品の状態と申告の正確さによって決まります。付属品や元箱を揃える、レンズのカビ・くもりや動作の不具合を正確に申告する、デジタル機はメモリーカードを抜いて本体のデータを消去する、といった準備は共通です。準備の手順は<Link href="/guide/uru-mae/" className="text-vermilion underline underline-offset-4">カメラ・レンズを売る前の準備</Link>、査定で確認される項目は<Link href="/guide/kachi-mikata/" className="text-vermilion underline underline-offset-4">フィルムカメラ・オールドレンズの価値の見分け方</Link>で解説しています。また、出張買取や宅配買取で減額・返送などのトラブルが生じた場合の対処は<Link href="/guide/trouble/" className="text-vermilion underline underline-offset-4">カメラ買取のトラブル対処法</Link>にまとめています。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">買取の依頼先の選び方でよくある質問</h2>
          <div className="space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex gap-2 font-display text-base text-steel-900">
                  <span aria-hidden="true" className="text-vermilion">Q.</span>
                  {f.q}
                </h3>
                <p className="mt-3 text-sm leading-loose text-steel-700">{f.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 関連リンク */}
        <section className="mt-14">
          <h2 className="section-title mb-6">関連ページ</h2>
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">査定料・送料・返送料・入金・本人確認を同じ基準で比較</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/trouble/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ買取のトラブル対処法</span>
                <span className="mt-1 block text-xs text-steel-500">出張買取のクーリングオフ・減額・返送トラブルの相談先</span>
              </Link>
            </li>
            <li>
              <Link href="/film/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">フィルムカメラの買取</span>
                <span className="mt-1 block text-xs text-steel-500">専門知識のある窓口での査定が適した品の考え方</span>
              </Link>
            </li>
            <li>
              <Link href="/old-lens/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">オールドレンズの買取</span>
                <span className="mt-1 block text-xs text-steel-500">マウント・カビの申告とレンズ単体を受け付ける窓口</span>
              </Link>
            </li>
            <li>
              <Link href="/digital/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">デジタルカメラの買取</span>
                <span className="mt-1 block text-xs text-steel-500">相場の変動が速い現行機を売却する際の依頼先</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れたカメラ・ジャンク・カビありレンズの売却</span>
                <span className="mt-1 block text-xs text-steel-500">ジャンク品の受付を明記した窓口と申告方法</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/kachi-mikata/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">フィルムカメラ・オールドレンズの価値の見分け方</span>
                <span className="mt-1 block text-xs text-steel-500">査定で確認される項目を把握してから依頼先を選ぶ</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/uru-mae/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ・レンズを売る前の準備</span>
                <span className="mt-1 block text-xs text-steel-500">付属品・清掃・データ削除など共通の準備</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/ihin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">遺品・実家整理で出てきたカメラの売却</span>
                <span className="mt-1 block text-xs text-steel-500">内容が把握できていない場合の依頼先と相続人の同意</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/tairyou/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ・レンズを大量に売るには</span>
                <span className="mt-1 block text-xs text-steel-500">出張買取と大量対応の宅配買取の使い分け</span>
              </Link>
            </li>
            <li>
              <Link href="/shindan/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売り方診断</span>
                <span className="mt-1 block text-xs text-steel-500">質問への回答から検討の出発点となる売却方法を確認</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
