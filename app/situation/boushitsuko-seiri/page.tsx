import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "防湿庫・カメラバッグごと出てきた機材の整理｜収納ごとの区分方法とカビの見分け方";
const DESC =
  "防湿庫やカメラバッグごと機材が出てきた場合の整理方法をご説明します。ボディ・レンズ・アクセサリー・消耗品の4分類による区分手順、カビの見分け方、値段が付きにくい物の扱い、まとめて相談する際の伝達事項、防湿庫・バッグ自体の扱いを掲載しています。";
const PATH = "/situation/boushitsuko-seiri/";
const PAGE_DATE = "2026-09-12";
const PAGE_DATE_LABEL = "2026年9月12日";

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
  datePublished: PAGE_DATE,
  dateModified: PAGE_DATE,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  author: { "@type": "Organization", name: OPERATOR.name },
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function BoushitsukoSeiriPage() {
  const conclusions = [
    "収納ごと出てきた場合は、まず中身をすべて取り出します。防湿庫やバッグの中は仕切られており、外から見えない小物入れに重要なものが入っていることが少なくありません。",
    "区分は、ボディ・レンズ・アクセサリー・消耗品の4つで十分です。価値の判断はこの段階では行いません。区分することで、何を何点所有しているかを把握できます。",
    "防湿庫に保管されていた機材でも、カビがないとは限りません。電源が切れていた期間、扉の閉まり具合、湿気を吸う部材の状態によって中の環境は変わります。1本ずつ、明るい方に向けて内部を確認します。",
    "値段が付きにくい物も、その場で処分せずに分けて保管します。専用のアクセサリーや用途のわからない部品は、専門家が見ると用途が判明することがあります。判断は査定の場に持ち越して差し支えありません。",
    "点数が多い場合のまとめ方と依頼の進め方は、大量売却のページをご参照ください。本ページでは、収納ごと出てきた場合の初期対応までを扱います。",
  ];

  const firstSteps = [
    {
      t: "運び出す前の設置場所と状態の撮影",
      d: "防湿庫の全体、扉を開けた状態の棚、バッグの外観と開いた状態の内部を撮影します。作業前に撮影しておくと、何がどこに入っていたかを後から確認できます。家族に説明する際の資料にもなり、所在をめぐる混乱を防げます。",
    },
    {
      t: "電源の状態の確認",
      d: "防湿庫には、電気で乾燥させる仕組みのものがあります。通電したまま長期間放置されていたのか、途中で電源が切れていたのかで、中の環境は変わります。運び出す前にコンセントの状態を確認し、記録しておきます。移動させる場合は電源を抜いてから動かします。",
    },
    {
      t: "中身をすべて取り出す",
      d: "棚板の下、扉の内側のポケット、引き出し、バッグの仕切り、底板の下などを確認します。仕切りの多い収納ほど、外から見えない場所に小物が入っています。メモリーカード、電池、フィルム、フィルター、小さなアダプターなどは、こうした場所から見つかることがよくあります。いったんすべて取り出し、収納を空にします。",
    },
    {
      t: "記録メディアとフィルムの取り分け",
      d: "メモリーカード、SDカード、フィルム、プリント写真は、機材とは別に扱います。特に未現像の可能性があるフィルムは、開けずにそのまま取り分けます。取り扱いの手順は、フィルム・データのページでご説明しています。",
    },
    {
      t: "電池類の取り外し",
      d: "ボディやストロボに電池が入ったままになっていることがあります。液漏れしている場合は素手で触れず、手袋や紙を使って取り出します。液が付着した機材は、その状態のまま無理に拭かず、事実として申告する材料にします。電池の処分方法は、お住まいの自治体の案内に従ってください。",
    },
    {
      t: "広い場所への配置と分類",
      d: "床やテーブルに新聞紙や布を敷き、出したものを並べます。重ねずに一列に並べると、点数を一目で把握でき、重複や見落としに気づけます。レンズは転がらないよう、寝かせて置きます。",
    },
  ];

  const sortRows = [
    {
      label: "ボディ（カメラ本体）",
      value:
        "フィルムカメラ、デジタルカメラ、ビデオカメラなど、本体にあたるものです。レンズが付いたままなら、この段階で外して別に置きます（外れにくい場合は無理をせず、そのままにします）。1台ずつ、正面と型番が読める部分を撮影しておくと、後の相談に使えます。ボディキャップがあれば装着し、なければマウント面を上向きにしない形で置きます。",
    },
    {
      label: "レンズ",
      value:
        "交換レンズです。前後のキャップがあれば付け、なければ前玉と後玉が何かに触れない向きで置きます。銘板（焦点距離や明るさの表記がある部分）が読める写真を撮っておきます。レンズ同士を重ねたり、立てて並べたりすると転倒や接触の危険があるため、横に寝かせて間隔を空けます。",
    },
    {
      label: "アクセサリー",
      value:
        "ストロボ、三脚、フィルター、フード、ファインダー、マウントアダプター、リモートスイッチ、露出計、ケースやストラップなど、本体でもレンズでもないものです。用途がわからないものも、この分類に入れて保管します。小さな部品は、まとめて一つの箱や袋に入れ、なくさないようにします。",
    },
    {
      label: "消耗品・その他",
      value:
        "電池、乾燥剤、清掃用品、未使用のフィルム、レンズペーパー、テープ類などです。ここには、買取の対象になりにくいものが多く含まれますが、乾燥剤の状態は保管環境を示す手がかりになりますし、未使用のフィルムは種類によって扱いが変わることがあります。まとめて一か所に置き、処分の判断は最後に回します。",
    },
    {
      label: "収納そのもの（防湿庫・バッグ・ケース）",
      value:
        "防湿庫は電気製品にあたるものがあり、大きさも重さもあるため、カメラ機材とは別の扱いになることがあります。カメラバッグやハードケースは、機材と一緒に見てもらえる場合もあれば、対象外の場合もあります。いずれも買取の対象になるかは業者ごとに異なるため、相談時に「防湿庫とバッグもあります」と伝えて確認することをおすすめします。対象外だった場合の処分は、お住まいの自治体の案内に従ってください。",
    },
  ];

  const mouldChecks = [
    {
      t: "防湿庫に保管されていた機材のカビ",
      d: "防湿庫は湿気を抑えるための収納ですが、電源が切れていた期間が長い、扉のパッキンが劣化して閉まりが甘い、湿気を吸う部材が寿命を過ぎている、といった状態では、中の環境が保たれていないことがあります。防湿庫に保管されていたことを理由に問題がないと判断せず、1本ずつ確認します。",
    },
    {
      t: "明るい方に向けた斜めからの確認",
      d: "レンズを窓や照明の方に向け、前玉側から内部を確認します。正面からではなく、少し角度をつけて斜めから見ると、内部の様子がわかりやすくなります。後玉側からも同様に確認します。ボディのファインダーやミラーの部分も、同じ要領で確認します。",
    },
    {
      t: "カビ・くもり・ちりの見え方の違い",
      d: "カビは、糸状や放射状に広がった白っぽい筋のように見えることがあるとされています。くもりは、面全体が白くもやがかかったように見える状態です。ちりは、粒として点々と見えるもので、少量であれば写りへの影響は限られるとされています。見分けがつかない場合は、無理に判断せず「レンズ内に白いものが見える」という事実のまま記録します。",
    },
    {
      t: "ご自身での拭き取りを控える",
      d: "レンズの内部にあるものは、外から拭いても取れません。前玉を強くこすると、表面の処理を傷めることがあります。分解は、さらに状態を悪化させる原因になります。見つけた場合は、そのままの状態で記録することをおすすめします。清掃や修理が必要かどうかは、修理を扱う店に相談する方法があります。",
    },
    {
      t: "カビのある機材とほかの機材の分離",
      d: "カビの生えた機材や革製品を、他の機材と同じ密閉容器に入れて長期間置くことは避けてください。区分の段階で、状態の気になるものは別の袋や箱に分けておきます。保管が長引く場合は、特に分けておくことが重要です。",
    },
    {
      t: "1本ずつの状態の記録",
      d: "「前玉外周に白い筋」「ファインダー内に白いもやがある」「後玉側はきれいに見える」など、見えたままを記載します。良品・美品といった評価語は使用しません。事実を正確に伝えるほうが、後から「聞いていた状態と違う」という食い違いを防げます。故障やカビがある機材の申告方法は、壊れた・ジャンク品のページでご説明しています。",
    },
  ];

  const lowValueItems = [
    {
      t: "その場での処分判断を控える",
      d: "収納ごと出てきた場合は点数が多く、早く片付けたいと考えがちです。しかし、用途のわからない部品や目立たない金具が、専門家が見ると価値のあるアクセサリーであることがあります。「用途不明」の箱を1つ用意し、判断を査定の場に持ち越します。処分は最後でも間に合いますが、処分した後では取り戻せません。",
    },
    {
      t: "消耗品と清掃用品の区分",
      d: "乾燥剤、レンズクリーナー、ブロアー、テープ類などは、買取の対象になりにくいものです。ただし、まとめて一か所に置いておけば、機材と混ざって査定の場に紛れ込むこともなく、処分の判断も一度で済みます。未開封の消耗品については、扱いが業者によって異なることがあるため、相談時にまとめて確認します。",
    },
    {
      t: "故障品・欠品のあるものの扱い",
      d: "動かないボディ、傷んだレンズ、キャップやフードの片方のみといったものも、いったんは保管しておきます。まとめて相談するときに「こういうものもあります」と一度に伝えられれば、対応できるかどうかをその場で確認できます。対応の可否や扱いは業者ごとに異なります。",
    },
    {
      t: "取扱説明書・保証書・元箱の保管",
      d: "防湿庫の下段や押し入れの別の場所から、元箱や書類がまとまって出てくることがあります。機材そのものではありませんが、付属品として扱われることがあるため、片付けの初期に処分してしまわないよう注意します。書類に氏名や住所が書かれている場合は、外して手元に残すか、事前に伝えたうえで扱いを相談します。",
    },
    {
      t: "防湿庫・バッグ自体の扱い",
      d: "収納そのものは、カメラ機材とは別の物です。買取の対象になるか、引き取ってもらえるかは業者ごとに異なります。大型の防湿庫は搬出に人手が必要なこともあるため、相談の段階で大きさと重さ、設置場所（階段の有無など）を伝えておくと、当日の行き違いを避けられます。",
    },
    {
      t: "値段が付かなかったものの扱いの事前決定",
      d: "査定の結果、対象外となるものが出ることがあります。その場で引き取りを依頼するか、持ち帰るかを決めていないと、急いで判断することになります。持ち帰る場合の置き場所と、引き取ってもらう場合の条件を、相談の段階で確認しておきます。",
    },
  ];

  const tellItems = [
    {
      t: "収納ごと出てきたことの事前連絡",
      d: "点数が読めない状態でまとまって出てきたことを、最初に伝えます。一点ずつの相談とは前提が異なるため、業者側も対応方法を調整できます。防湿庫やバッグごとであること、区分の途中であることも、そのまま伝えて差し支えありません。",
    },
    {
      t: "4分類ごとの点数の連絡",
      d: "ボディが何台、レンズが何本、アクセサリーが何点、消耗品は一式という程度で十分です。正確でなくても、おおよその規模が伝われば、出張か宅配か、当日の所要時間の見当をつけられます。",
    },
    {
      t: "状態の気になるものの事前申告",
      d: "カビやくもりが見えるもの、動かないもの、電池の液漏れがあったものは、先に伝えておきます。後から判明するよりも、最初から共有しておくほうが手続きが円滑に進み、査定の場で条件が変わる事態も減ります。",
    },
    {
      t: "収納の有無と大きさの連絡",
      d: "防湿庫やハードケースがある場合は、その旨と、おおよその大きさ・設置場所を伝えます。搬出に関わる情報なので、出張を依頼する場合は特に重要です。対象になるかどうかも、この段階で確認できます。",
    },
    {
      t: "写真の事前送付による相談",
      d: "全体を並べた写真と、気になる箇所の寄りの写真があれば、実物を運ぶ前に複数の業者へ同じ情報で相談できます。対応の可否、出張や宅配の条件、内訳の提示が可能かを事前に確認しておくと、実物のやり取りは絞り込んだ業者とのみで済みます。",
    },
    {
      t: "点数が多い場合の大量売却の進め方",
      d: "区分の結果、点数が多くなった場合は、一括で出すか小分けにするか、リストをどう作るか、出張と宅配をどう使い分けるかといった判断が必要になります。詳しくは大量売却のページでご説明していますので、そちらをご参照ください。買取金額は機種・状態・時期により異なります。",
    },
  ];

  const checklist = [
    "運び出す前に、防湿庫やバッグの全体と中の状態を写真に撮った",
    "防湿庫の電源の状態を確認し、記録してから電源を抜いた",
    "棚板の下・扉の内側・引き出し・バッグの仕切りまで確認し、収納を空にした",
    "出てきたメモリーカード・フィルム・プリント写真を先に取り分けた",
    "未現像の可能性があるフィルムを開けずに取り分けた",
    "電池を取り外し、液漏れしているものは素手で触れずに取り出した",
    "広い場所に重ねずに並べ、レンズは寝かせて置いた",
    "ボディ・レンズ・アクセサリー・消耗品の4つに区分した",
    "ボディとレンズを一点ずつ撮影し、型番や銘板が読める写真を残した",
    "レンズを明るい方に向け、斜めから内部を確認した",
    "カビ・くもり・ちりを見分けようとして無理をせず、見えたままを記録した",
    "見つけたものをご自身で拭いたり分解したりしなかった",
    "状態の気になるものを別の袋や箱に分けた",
    "用途のわからないものを「用途不明」の箱に入れ、処分しなかった",
    "取扱説明書・保証書・元箱を処分せず、氏名や住所の記載を確認した",
    "防湿庫やバッグ自体の大きさ・設置場所を把握した",
    "値段が付かなかったものを持ち帰るか引き取ってもらうかを先に決めた",
    "4分類ごとの点数と、状態の気になるものをまとめて相談の準備をした",
  ];

  const faqs = [
    {
      q: "防湿庫に入っていた機材なら、カビの心配はいりませんか？",
      a: "そうとは限りません。電源が切れていた期間が長い、扉の閉まりが甘い、湿気を吸う部材が寿命を過ぎている、といった状態では、中の環境が保たれていないことがあります。1本ずつ、明るい方に向けて斜めから内部をご確認ください。見つけた場合も、ご自身で拭いたり分解したりせず、見えたままを記録することをおすすめします。",
    },
    {
      q: "何から手を付ければよいかわかりません。最初にすることは何ですか？",
      a: "収納の中身をすべて取り出し、空にすることです。棚板の下、扉の内側、引き出し、バッグの仕切りなど、外から見えない場所に小物が入っています。出す前に全体の写真を撮り、出したものを広い場所に重ねずに並べます。その後、ボディ・レンズ・アクセサリー・消耗品の4つに区分します。価値の判断はこの段階では行いません。",
    },
    {
      q: "用途のわからない小さな部品が大量にあります。捨ててよいですか？",
      a: "その場で処分しないことをおすすめします。目立たない金具や用途のわからないリングが、専門家が見ると価値のあるアクセサリーであることがあります。「用途不明」の箱を1つ用意し、判断を査定の場に持ち越してください。処分は最後でも間に合いますが、処分した後では取り戻せません。",
    },
    {
      q: "防湿庫やカメラバッグ自体も買い取ってもらえますか？",
      a: "対象になるかどうかは業者ごとに異なります。防湿庫は電気製品にあたるものがあり、大きさも重さもあるため、カメラ機材とは別の扱いになることがあります。相談の段階で「防湿庫とバッグもあります」と伝え、大きさ・重さ・設置場所（階段の有無など）もあわせてご確認ください。対象外だった場合の処分方法は、お住まいの自治体の案内に従ってください。",
    },
    {
      q: "点数がかなり多くなりました。この先はどう進めればよいですか？",
      a: "一括で出すか小分けにするか、リストをどう作るか、出張と宅配をどう使い分けるかといった判断に移ります。詳しくは大量売却のページでご説明していますので、そちらをご参照ください。本ページでは、収納ごと出てきた場合の区分と状態確認までを扱っています。",
    },
    {
      q: "中からメモリーカードやフィルムが出てきました。どうすればよいですか？",
      a: "機材とは別に取り分けてください。未現像の可能性があるフィルムは、光に当たると像が失われるため開けないでください。メモリーカードはすべて家族の手元に残します。詳しい手順は、故人のフィルム・メモリーカード・写真データのページでご説明しています。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "防湿庫・カメラバッグごと出てきた機材の整理", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">STORAGE CLEAROUT</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          防湿庫・カメラバッグごと出てきた機材の整理｜収納ごとの区分方法とカビの見分け方
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          押し入れから防湿庫が見つかった場合や、物置に中身の入ったカメラバッグが残されていた場合など、収納ごと機材が出てくると、何が何点あるのかを把握できず、作業が滞りがちです。本ページでは、収納ごと出てきた場合に最初に行うこと、ボディ・レンズ・アクセサリー・消耗品の4分類による区分、カビの見分け方、値段が付きにくい物の扱い、まとめて相談する際の伝達事項を、一般知識としてご説明します。点数が多い場合の進め方は、大量売却のページでご説明しています。
        </p>

        {/* 要点 */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">要点</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 最初にすること */}
        <section className="mt-14">
          <h2 className="section-title mb-2">収納ごと出てきた場合に最初に行うこと</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            区分を始める前に、済ませておくべき作業があります。順番を守ることで、後から探し直す手間と、見落としによる失敗を減らせます。
          </p>
          <div className="space-y-5">
            {firstSteps.map((s, i) => (
              <div key={s.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.t}
                </h3>
                <p className="mt-3 text-[13px] leading-loose text-steel-700">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/koujin-film-data/" className="btn-primary">フィルム・データの扱いを見る</Link>
            <Link href="/situation/ihin/" className="btn-ghost">遺品整理の全体の流れを見る</Link>
          </div>
        </section>

        {/* 4分類 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">4分類による区分</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            細かく分ける必要はありません。ボディ、レンズ、アクセサリー、消耗品の4つに、収納そのものを加えた5つの置き場所を設ければ、全体を把握できます。価値の判断は、この段階では行いません。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {sortRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 防湿庫やバッグ自体が買取の対象になるかは業者ごとに異なります。処分が必要になった場合は、お住まいの自治体の案内に従ってください。
          </p>
        </section>

        {/* カビの見分け */}
        <section className="mt-14">
          <h2 className="section-title mb-2">カビの有無の見分け方</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            収納ごと出てきた機材で、最も注意すべきなのが内部の状態です。専門的な判定は必要ありません。目視で確認し、記録することができれば十分です。
          </p>
          <div className="space-y-5">
            {mouldChecks.map((s, i) => (
              <div key={s.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.t}
                </h3>
                <p className="mt-3 text-[13px] leading-loose text-steel-700">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/broken/" className="btn-primary">カビあり・ジャンクの申告を見る</Link>
            <Link href="/old-lens/" className="btn-ghost">オールドレンズのページを見る</Link>
          </div>
        </section>

        {/* 値段が付きにくい物 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">値段が付きにくい物の扱い</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            まとまって出てきた機材の多くは、目立たない小物や消耗品です。ここでの判断を急ぐと、後から後悔することがあります。
          </p>
          <div className="space-y-4">
            {lowValueItems.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/kachi-mikata/" className="btn-primary">買取価値の見方を見る</Link>
            <Link href="/situation/katami-camera/" className="btn-ghost">残すか手放すかの決め方を見る</Link>
          </div>
        </section>

        {/* 伝えること */}
        <section className="mt-14">
          <h2 className="section-title mb-2">まとめて依頼する際の伝達事項</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            区分が終わったら、相談に進みます。収納ごと出てきた場合は、点数だけでなく、どのような状態で見つかったかを伝えることで、相談が円滑に進みます。
          </p>
          <div className="space-y-4">
            {tellItems.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/tairyou/" className="btn-primary">大量売却の進め方を見る</Link>
            <Link href="/compare/" className="btn-ghost">出張・宅配の条件を比較表で見る</Link>
          </div>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-6">収納ごと出てきた場合のチェックリスト</h2>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <ul className="space-y-3">
              {checklist.map((c) => (
                <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                  <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">防湿庫・バッグごとの整理に関するよくある質問</h2>
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
              <Link href="/situation/ihin-kachi/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">故人のカメラの価値がわからないときの調べ方</span>
                <span className="mt-1 block text-xs text-steel-500">型番・状態・付属品を家族で確認する手順</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/ihin-shucchou/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">遺品のカメラを出張買取で見てもらうには</span>
                <span className="mt-1 block text-xs text-steel-500">予約前に決めること・当日の流れ</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/tairyou/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ・レンズの大量売却</span>
                <span className="mt-1 block text-xs text-steel-500">一括か小分けか・リスト化・出張と宅配の使い分け</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/ihin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">遺品・実家整理で出てきたカメラを売るには</span>
                <span className="mt-1 block text-xs text-steel-500">捨てる前の確認点と出張買取の使い方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/koujin-film-data/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">故人のフィルム・メモリーカード・写真データ</span>
                <span className="mt-1 block text-xs text-steel-500">未現像フィルムとデータの取り出し方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/katami-camera/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">形見のカメラを残すか手放すか</span>
                <span className="mt-1 block text-xs text-steel-500">使う・保管する・手放すの決め方</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・ジャンク・カビありを売る</span>
                <span className="mt-1 block text-xs text-steel-500">動作未確認の申告方法</span>
              </Link>
            </li>
            <li>
              <Link href="/old-lens/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">オールドレンズの買取</span>
                <span className="mt-1 block text-xs text-steel-500">マウント・カビ・くもりの申告方法</span>
              </Link>
            </li>
            <li>
              <Link href="/film/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">フィルムカメラの買取</span>
                <span className="mt-1 block text-xs text-steel-500">一眼レフ・レンジファインダー・二眼レフ・中判</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/uru-mae/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前の準備</span>
                <span className="mt-1 block text-xs text-steel-500">区分・写真・申告の一般的な手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/kachi-mikata/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取価値の見方</span>
                <span className="mt-1 block text-xs text-steel-500">査定の観点と内訳の読み方</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">出張対応・遺品対応・返送料を同じ基準で比較</span>
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-12 text-xs leading-loose text-steel-500">
          ※ 本ページの記載は{PAGE_DATE_LABEL}時点の一般的な情報であり、法的・税務的な助言ではありません。相続の手続きや税の扱いについては、税理士・弁護士・お住まいの自治体などにご確認ください。買取金額は機種・状態・時期により異なります。
        </p>
      </article>
    </>
  );
}
