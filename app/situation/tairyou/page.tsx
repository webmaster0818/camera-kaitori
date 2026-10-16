import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, PUBLISHED_DATE } from "@/lib/site";

const TITLE = "カメラ・レンズの大量売却｜コレクション・機材一式・まとめ売りの進め方";
const DESC =
  "コレクション整理、撮影機材一式の入れ替え、法人・スタジオの機材処分など、カメラやレンズを大量に売る際の進め方をご説明します。一括か小分けかの考え方、リスト化、出張と宅配の使い分け、査定内訳の重要性、法人の書類、輸送の注意点を掲載しています。";
const PATH = "/situation/tairyou/";

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

export default function TairyouSituationPage() {
  const conclusions = [
    "大量売却では、一式でまとめて出すか、小分けにして個別に出すかによって、手間と透明性のバランスが変わります。どちらが正しいというものではなく、点数・機材の性質・作業にあてられる時間をもとに判断します。",
    "何を何点所有しているかを先にリスト化することが、大量売却で最も効果的な準備です。メーカー・型番・状態・付属品を表にし、写真を添えれば、複数の業者に同じ条件で相談できます。",
    "出張買取と宅配買取は、重量・点数・持ち出しの可否で使い分けます。重い機材や点数が多い場合は出張、軽量で梱包できる範囲であれば宅配とするのが基本的な考え方です。",
    "「一式でいくら」の提示を受けた場合は、点数ごとの内訳の提示を依頼することが基本です。内訳がないと、評価されたものと評価されなかったものを区別できません。",
    "法人・スタジオの場合は、請求書や領収書、資産の除却に関わる書類、記録メディアの消去について、あらかじめ社内の要件を確認しておくと、手続きが円滑に進みます。",
  ];

  const patterns = [
    {
      label: "趣味のコレクション整理",
      value:
        "長年集めたフィルムカメラやオールドレンズを、生活の変化や保管場所の都合で手放すケースです。一点ずつに思い入れがあり、機種や状態をご自身でよく把握していることが多いのが特徴です。個別の評価を希望される一方で、点数が多いと一点ずつの対応に時間がかかります。希少性の高いものとそうでないものをご自身で分けてから相談すると、手続きが円滑に進みます。",
    },
    {
      label: "撮影機材一式の入れ替え",
      value:
        "デジタル一眼やミラーレスのシステムを、別のメーカーや新しい規格に移行するために、本体・レンズ・ストロボ・アクセサリをまとめて手放すケースです。現行機や型落ち機が中心で、相場の動きが比較的速いカテゴリになります。売却と購入の時期が近いため、査定から入金までの期間や、次の機材の購入計画との兼ね合いも考慮する必要があります。",
    },
    {
      label: "法人・スタジオの機材処分",
      value:
        "撮影スタジオ・制作会社・学校・イベント業者などが、事業の縮小や機材の更新に伴って処分するケースです。個人の売却と違い、資産として計上されている機材の除却や、売却代金の会計処理、記録メディアに残った業務データの消去など、社内の手続きが関わります。点数が多く重量物も含まれるため、出張買取での対応可否を先に確認するのが一般的です。",
    },
  ];

  const bulkOrSplit = [
    {
      t: "一括査定の利点",
      d: "すべてを一度に出せば、やり取りは1回で済み、梱包や発送、立ち会いの手間も一回にまとまります。点数が多いほど、この手軽さの価値は大きくなります。業者側にとってもまとまった仕入れとなるため、対応の優先度が上がることがあるとされています。一方で、一式としての提示を受けると、個々の機材がどう評価されたかが見えにくくなる面があります。",
    },
    {
      t: "個別査定の利点",
      d: "一点ずつ、あるいは種類ごとに小分けにして出せば、それぞれの評価が明確になり、納得できないものだけを引き揚げる判断もしやすくなります。フィルム機材とデジタル機材を、得意分野の異なる業者に分けて相談することも可能です。反面、やり取りの回数と手間は増え、時間がかかります。",
    },
    {
      t: "一括と個別の組み合わせ",
      d: "実際には、どちらか一方に決める必要はありません。評価が高いと見込まれるものを把握している場合は、その数点だけを個別に出し、残りをまとめて出す方法があります。逆に、まず全体をまとめて査定に出し、内訳を見てから納得できないものだけを引き揚げて別の業者に相談する方法もあります。引き揚げる場合の返送料やキャンセル条件は、申込前に確認しておきます。",
    },
    {
      t: "いずれの方法でも内訳が必要",
      d: "まとめて出す場合でも、点数ごとの内訳を出してもらえるかどうかで透明性は大きく変わります。一括査定の手軽さを活かしつつ内訳を確認することが、手間と透明性の両方を確保する現実的な方法と考えられます。",
    },
  ];

  const listSteps = [
    {
      t: "一覧表の作成（メーカー・型番・種別・状態・付属品）",
      d: "表計算ソフトでも紙のノートでも差し支えありません。一行に一点、列にメーカー、型番、種別（本体・レンズ・ストロボ・三脚・アクセサリなど）、状態（動作確認済み・未確認・不具合あり）、付属品（元箱・取扱説明書・キャップ・フード・ケースなど）を記載します。番号を付けておくと、業者とのやり取りで「何番の機材」と特定できるようになります。",
    },
    {
      t: "状態は事実のみを記載する",
      d: "「美品」「良品」といった評価語ではなく、「ファインダー内にちり」「前玉にくもりあり」「シャッター音は正常」「バッテリー膨らみなし」といった事実を記載します。評価は業者が行うものであり、事実を正確に伝えるほうが、後から「聞いていた状態と違う」という食い違いを防げます。",
    },
    {
      t: "一点ずつの写真撮影",
      d: "本体は正面・上面・背面と型番の刻印、レンズは前玉・後玉・銘板と鏡筒の全体を撮ります。不具合や傷がある部分は、その箇所を寄せて撮ります。写真は表の番号と対応付けてフォルダにまとめておくと、業者に送る際に円滑です。",
    },
    {
      t: "希少性が高いと見込まれるものの仮分類",
      d: "限定モデル、生産数の少ないレンズ、元箱や書類が揃っているものなどは、リストに印を付けておきます。専門的な評価は業者に委ねるとしても、ご自身で仮分類しておくと、個別に出すか一式に含めるかの判断がしやすくなります。",
    },
    {
      t: "リストと写真の事前送付による相談",
      d: "実物を運ぶ前に、リストと写真を複数の業者に送り、対応の可否、出張や宅配の条件、内訳の提示が可能かを確認します。この段階で条件が明確でない業者を除外できるため、実物のやり取りは絞り込んだ業者とのみ行えば済みます。",
    },
  ];

  const methodRows = [
    {
      label: "出張買取が向く場合",
      value:
        "三脚・照明・大型の望遠レンズ・中判や大判の機材など、重量物や大型品が含まれる場合、点数が多く梱包だけで丸一日かかるような場合、自宅やスタジオから持ち出すことが物理的に難しい場合に適しています。その場で内訳を聞きながら、納得できないものを引き揚げられる点も利点です。対応エリア・出張料・最低点数の条件は業者ごとに異なります。",
    },
    {
      label: "宅配買取が向く場合",
      value:
        "レンズや小型の本体など、ご自身で梱包できる範囲に収まる場合、出張の対応エリア外にお住まいの場合、立ち会いの日程を確保しにくい場合に適しています。梱包キットの有無、送料、査定結果に納得できなかった場合の返送料、輸送中の破損の扱いを申込前に確認します。",
    },
    {
      label: "店頭持ち込みが向く場合",
      value:
        "点数が少なく、ご自身で運べる範囲の場合に適しています。その場で内訳を聞き、納得できなければ持ち帰れる点が利点です。大量の場合は、まず数点のみを持ち込んで業者の対応を確認し、残りを出張や宅配で出す方法もあります。",
    },
    {
      label: "組み合わせる場合",
      value:
        "重量物は出張、軽量なレンズは宅配といった組み合わせも、現実的な選択肢です。ただし、業者によっては一つの申込にまとめないと対応が変わることもあるため、複数の方法を使う場合は事前に業者に相談します。",
    },
  ];

  const breakdown = [
    {
      t: "一式の合計金額のみでは判断できない理由",
      d: "点数が多いほど、業者側は合計金額で提示しやすくなります。しかし、合計だけでは、どの機材が評価されて、どの機材が評価されなかったのかがわかりません。評価されなかったものは、別の業者に出せば扱いが変わる可能性がありますし、ご自身で使い続ける、譲るといった選択肢もあります。",
    },
    {
      t: "申込前の内訳提示の可否の確認",
      d: "業者によって、点数ごとの内訳を標準で提示するところ、依頼すれば提示するところ、一式での提示を基本とするところがあります。リストを送って相談する段階で「番号ごとの内訳をお願いできますか」と確認しておくと、後のトラブルを防げます。",
    },
    {
      t: "内訳の読み方",
      d: "内訳が提示されたら、ご自身のリストと照合します。評価が低い、または評価対象外とされたものについては、理由を聞きます。「動作未確認のため」「付属品不足のため」「需要が限られるため」など、理由が具体的であれば納得しやすく、次の判断につながります。内訳の見方は、買取価値の見方のガイドでもご説明しています。",
    },
    {
      t: "引き揚げるときの条件",
      d: "内訳を見て一部を引き揚げる場合、出張なら立ち会いの場で伝えられますが、宅配の場合は返送料やキャンセル条件が関わります。一部だけ引き揚げられるのか、全部まとめてでなければ受け付けないのかは業者の規約によるため、申込前に確認します。",
    },
  ];

  const houjin = [
    {
      t: "請求書・領収書などの取引書類",
      d: "法人が機材を売却する場合、売却代金の受け取りに関わる書類（買取明細書・領収書・請求書に相当するもの）が社内の経理処理で必要になるのが一般的です。業者が法人宛の書類を発行できるか、宛名や日付の指定に対応できるかを、申込前に確認しておきます。",
    },
    {
      t: "資産の除却に関わる書類",
      d: "固定資産として計上されている機材を手放す場合、除却や売却の記録として、機材の一覧と売却の事実を示す書類が求められることがあります。点数ごとの内訳が出ていれば、そのまま資産台帳との照合に使えるため、法人の場合は特に内訳の提示を依頼することをおすすめします。会計処理の詳細は、社内の担当者や税理士にご確認ください。",
    },
    {
      t: "記録メディアと業務データの消去",
      d: "デジタルカメラの本体やレコーダーには、メモリーカードや内蔵メモリに業務の撮影データが残っていることがあります。顧客の写真や未公開の素材が含まれる可能性があるため、メモリーカードはすべて取り出し、内蔵メモリは初期化してから出すのが一般的です。社内の情報管理の規程がある場合はそれに従い、業者側の消去対応の有無も確認します。",
    },
    {
      t: "担当者と決裁の確認",
      d: "法人の売却では、誰が業者との窓口になり、誰が最終的に売却を決裁するかを明確にしておきます。査定の内訳を持ち帰って社内で判断する時間が必要な場合は、その旨を業者に事前に伝えておくと、その場での即決を求められずに済みます。本人確認についても、法人の場合に必要な書類が個人と異なることがあるため、業者の案内で確認します。",
    },
  ];

  const transport = [
    {
      t: "レンズの個別梱包",
      d: "レンズ同士がぶつかると、鏡筒の傷やマウントの変形、内部のずれにつながります。一本ずつ緩衝材で包み、前後のキャップを付けた状態で箱に入れます。キャップがない場合は、前玉と後玉を保護する緩衝材を当てます。箱の中で動かないように、隙間を埋めるのが基本です。",
    },
    {
      t: "本体とレンズの分離梱包",
      d: "本体にレンズを付けたまま送ると、輸送中の衝撃でマウント部分に負担がかかります。レンズを外し、本体側にボディキャップ、レンズ側にリアキャップを付けて、それぞれ個別に包みます。バッテリーは本体から取り外し、端子を保護して別に包みます。",
    },
    {
      t: "重量物の別梱包",
      d: "三脚や大型の望遠レンズ、照明機材などの重量物は、軽量なレンズと同じ箱に入れないようにします。重いものが動くと、軽いものを破損させるおそれがあります。一箱の重さが持ち上げられる範囲に収まるように分け、箱の強度も重さに見合ったものを選びます。宅配便には重量やサイズの上限があるため、上限を超える場合は出張買取を検討します。",
    },
    {
      t: "リストの同梱と箱ごとの内容の記録",
      d: "複数の箱に分けて送る場合、どの箱に何番の機材が入っているかを記録し、リストの写しを同梱します。到着後に業者が確認しやすくなり、輸送中の紛失や破損があった場合に、どの箱で何が起きたかを特定できます。発送前に、梱包した状態と箱の外観の写真も撮っておきます。",
    },
    {
      t: "リチウム電池の輸送制限",
      d: "カメラ用のリチウムイオン電池には、輸送上の制限があるとされています。本体に装着した状態と単体とで扱いが異なることがあり、配送業者や買取業者の指定に従う必要があります。膨らんだ電池は輸送を受け付けないことが一般的なため、無理に送らず、業者に相談します。",
    },
  ];

  const checklist = [
    "売却のパターン（コレクション整理・機材入替・法人処分）を把握し、目的と期限を決めた",
    "一式で出すか小分けにするか、あるいは組み合わせるかの方針を決めた",
    "メーカー・型番・種別・状態・付属品を表にし、番号を振った",
    "状態は評価語ではなく事実で記載した",
    "一点ずつ写真を撮り、番号と対応付けて保存した",
    "希少性が高いと見込まれるものに印を付け、個別に出すか判断した",
    "リストと写真を複数の業者に送り、対応可否・条件・内訳提示の可否を確認した",
    "重量・点数・持ち出しの可否から、出張・宅配・店頭の使い分けを決めた",
    "出張の対応エリア・出張料・最低点数、宅配の送料・返送料・破損時の扱いを確認した",
    "点数ごとの内訳を出してもらうよう依頼した",
    "一部引き揚げの可否とその条件を申込前に確認した",
    "法人の場合、取引書類・資産除却の書類・データ消去・決裁の流れを社内で確認した",
    "メモリーカードをすべて取り出し、内蔵メモリを初期化した",
    "レンズは一本ずつ、本体はレンズを外して個別に梱包し、重量物は箱を分けた",
    "箱ごとの内容を記録し、リストの写しを同梱し、梱包状態の写真を撮った",
  ];

  const faqs = [
    {
      q: "点数が多いのですが、まとめて出すのと一点ずつ出すのとどちらがよいですか？",
      a: "どちらが正しいというものではありません。まとめて出せば手間は1回で済み、一点ずつ出せば個々の評価が明確になります。現実的には、評価の高そうな数点を個別に出して残りをまとめる、あるいは全体をまとめて出して内訳を見てから一部を引き揚げる、といった組み合わせが選択肢になります。いずれの場合も、点数ごとの内訳を出してもらうことが判断の前提です。",
    },
    {
      q: "リストを作るのが大変です。写真だけではだめですか？",
      a: "写真のみでも相談は可能ですが、点数が多い場合は、番号を付けた表があると業者とのやり取りが大幅に円滑になります。「何番の機材」と特定できることで、内訳の照合や引き揚げの指定が正確になります。表はメーカー・型番・種別・状態・付属品の5列で十分で、状態は事実のみを記載します。",
    },
    {
      q: "「一式でいくら」と言われました。内訳を聞いてもよいのですか？",
      a: "確認して差し支えありません。内訳がないと、どの機材が評価され、どの機材が評価されなかったのかがわからず、判断材料になりません。内訳の提示が可能かどうかは業者によって異なるため、できれば申込前の相談段階で「番号ごとの内訳をお願いできますか」と確認しておくと、後のトラブルを防げます。",
    },
    {
      q: "法人で機材を処分します。個人と何が違いますか？",
      a: "売却代金に関わる取引書類（買取明細書・領収書など）の宛名や発行、固定資産の除却に関わる記録、記録メディアに残った業務データの消去、社内の決裁の流れが関わる点が主な違いです。点数ごとの内訳は資産台帳との照合にも使えるため、法人の場合は特に依頼することをおすすめします。会計処理の詳細は、社内の担当者や税理士にご確認ください。",
    },
    {
      q: "重い機材や大きな三脚があります。宅配で送れますか？",
      a: "宅配便には重量やサイズの上限があるため、上限を超える場合は出張買取を検討します。送れる範囲であっても、重量物は軽量なレンズと箱を分け、一箱の重さを持ち上げられる範囲に収めます。レンズは一本ずつ、本体はレンズを外して個別に包み、箱の中で動かないように隙間を埋めるのが基本です。リチウム電池には輸送上の制限があるとされているため、配送業者や買取業者の指定に従ってください。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "カメラ・レンズの大量売却", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">BULK SALE</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          カメラ・レンズの大量売却｜コレクション・機材一式・まとめ売りの進め方
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          長年集めたコレクションの整理、撮影システムの一括入れ替え、スタジオの機材処分など、カメラやレンズを大量に売る際は、一点を売る場合とは異なる準備が必要です。本ページでは、大量売却の3つのパターン、一括で出すか小分けにするかの考え方、リスト化の方法、出張と宅配の使い分け、査定内訳の確認の重要性、法人の場合の書類、輸送の注意点を、一般知識としてご説明します。
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

        {/* 3つのパターン */}
        <section className="mt-14">
          <h2 className="section-title mb-2">大量売却の3つのパターン</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            同じ大量売却でも、目的と機材の性質によって進め方が変わります。どのパターンに近いかを把握しておくと、業者への相談も的確になります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {patterns.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 防湿庫やカメラバッグごと、収納ごとまとまって出てきた場合は、まず区分と状態確認から始めます。手順は、収納ごと整理のページでご説明しています。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/boushitsuko-seiri/" className="btn-primary">防湿庫・バッグごとの区分手順を見る</Link>
            <Link href="/situation/koujin-film-data/" className="btn-ghost">フィルム・データの扱いを見る</Link>
          </div>
        </section>

        {/* 一括か小分けか */}
        <section className="mt-14">
          <h2 className="section-title mb-2">一括と小分けの選択</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            大量売却で最初に検討するのが、すべてをまとめて出すか、種類や価値ごとに分けて出すかです。いずれにも利点と手間があり、一概にどちらが正しいとは言えません。判断の観点を以下に掲載します。
          </p>
          <div className="space-y-4">
            {bulkOrSplit.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* リスト化 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">リスト化の方法</h2>
          <div className="space-y-5">
            {listSteps.map((s, i) => (
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
            <Link href="/guide/uru-mae/" className="btn-primary">売る前の準備ガイドを見る</Link>
            <Link href="/guide/erabikata/" className="btn-ghost">業者の選び方を見る</Link>
          </div>
        </section>

        {/* 出張と宅配 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">出張と宅配の使い分け</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            大量の機材をどの方法で査定に出すかは、重量・点数・持ち出しの可否によって決まります。方法ごとに適した場合を以下に掲載します。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {methodRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 出張の対応エリア・出張料・最低点数、宅配の送料・返送料・梱包キットの有無は業者ごとに異なります。申込前に各社の公式サイトでご確認ください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">出張・宅配の条件を比較表で見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断で確認する</Link>
          </div>
        </section>

        {/* 内訳 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">査定内訳の確認の重要性（一式提示の見方）</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            大量売却で最も差が生じるのが、内訳を確認するかどうかです。合計金額のみで決めるのではなく、点数ごとの評価を見て判断します。
          </p>
          <div className="space-y-4">
            {breakdown.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/kachi-mikata/" className="btn-primary">買取価値の見方を見る</Link>
            <Link href="/guide/trouble/" className="btn-ghost">トラブル時の対処を見る</Link>
          </div>
        </section>

        {/* 法人 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">法人・スタジオの場合の書類と手続き</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            法人が機材を売却する場合、個人の売却にはない社内手続きが関わります。あらかじめ確認しておくべき項目を以下に掲載します。
          </p>
          <div className="space-y-5">
            {houjin.map((s, i) => (
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
          <p className="mt-3 text-xs text-steel-500">
            ※ 会計・税務に関する記述は一般的な情報であり、個別の処理については社内の担当者や税理士などの専門家にご確認ください。
          </p>
        </section>

        {/* 輸送 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">輸送の注意（重量物・レンズの個別梱包）</h2>
          <div className="space-y-5">
            {transport.map((s, i) => (
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
          <p className="mt-3 text-xs text-steel-500">
            ※ 電池の輸送制限や宅配便の重量・サイズ上限は配送業者ごとに定められています。発送前に配送業者と買取業者の案内をご確認ください。
          </p>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-6">大量売却前のチェックリスト</h2>
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
          <h2 className="section-title mb-6">大量売却に関するよくある質問</h2>
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
              <Link href="/situation/ihin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">遺品・実家整理で出てきたカメラを売るには</span>
                <span className="mt-1 block text-xs text-steel-500">捨てる前の確認点と出張買取の使い方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/boushitsuko-seiri/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">防湿庫・カメラバッグごと出てきた機材の整理</span>
                <span className="mt-1 block text-xs text-steel-500">収納ごとの区分方法とカビの見分け方</span>
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
                <span className="mt-1 block text-xs text-steel-500">使う・保管する・手放すの決め方と手入れ</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">出張対応・大量対応・返送料を同じ基準で比較</span>
              </Link>
            </li>
            <li>
              <Link href="/film/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">フィルムカメラの買取</span>
                <span className="mt-1 block text-xs text-steel-500">一眼レフ・レンジファインダー・二眼レフ・中判</span>
              </Link>
            </li>
            <li>
              <Link href="/old-lens/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">オールドレンズの買取</span>
                <span className="mt-1 block text-xs text-steel-500">マウント・カビ・くもりの申告のしかた</span>
              </Link>
            </li>
            <li>
              <Link href="/digital/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">デジタル一眼・ミラーレスの買取</span>
                <span className="mt-1 block text-xs text-steel-500">機材入れ替え時の準備と宅配の条件</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・ジャンク・カビありを売る</span>
                <span className="mt-1 block text-xs text-steel-500">一式に含まれる故障品の申告方法</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/kachi-mikata/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取価値の見方</span>
                <span className="mt-1 block text-xs text-steel-500">査定の観点と内訳の読み方</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/uru-mae/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前の準備</span>
                <span className="mt-1 block text-xs text-steel-500">リスト・写真・申告の一般的な手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/erabikata/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">業者の選び方</span>
                <span className="mt-1 block text-xs text-steel-500">公式サイトで確認する条件</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/trouble/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">トラブル時の対処</span>
                <span className="mt-1 block text-xs text-steel-500">クーリングオフ・相談先の一般知識</span>
              </Link>
            </li>
            <li>
              <Link href="/shindan/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売り方診断</span>
                <span className="mt-1 block text-xs text-steel-500">状況に合うカテゴリをルールベースで判定</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
