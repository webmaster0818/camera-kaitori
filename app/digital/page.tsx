import type { Metadata } from "next";
import Link from "next/link";
import CategoryHub from "@/components/CategoryHub";
import JsonLd from "@/components/JsonLd";
import { fmt, formatChecked, getCategory, getCompany } from "@/lib/companies";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";
import { MIRRORLESS_LISTED } from "@/lib/mirrorless";

const TITLE = "ミラーレス買取・デジタルカメラ買取｜掲載10社の対応・付属品で変わる条件・メーカー別の確認点【2026年10月更新】";
const DESC =
  "ミラーレスカメラ・デジタルカメラの買取先を、掲載10社の公式記載で比較。ミラーレスを対象品目に明記する社、バッテリー・充電器なしは買取不可などの付属品条件、製造番号ラベルの扱い、メーカー別の確認点、相場の調べ方、返送料・入金を整理（2026年10月18日更新）。";
const PATH = "/digital/";
const PAGE_UPDATED = "2026-10-18";

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
  dateModified: PAGE_UPDATED,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  author: { "@type": "Organization", name: OPERATOR.name },
  publisher: { "@type": "Organization", name: SITE_NAME },
};

/** 売る前のチェック（一般知識。金額は扱わない） */
const CHECKLIST = [
  "型番を本体底面などの表示で控えた（「Mark II」「II」などの世代表記を含む）",
  "バッテリー・充電器・ストラップ・キャップ・元箱・説明書の有無を確認した",
  "すべてのカードスロットからメモリーカードを抜いた",
  "スマホアプリの登録・Bluetoothのペアリング・クラウド連携を解除した",
  "本体を初期化した（著作権情報・所有者名の設定も削除）",
  "電源が入るか、シャッターが切れるか、液晶が映るかを確認できる範囲で試した",
  "シャッター回数がわかる場合は数値と確認方法を控えた（不明な場合は「不明」と申告）",
  "センサーのゴミ、レンズのカビ・くもりを光で確認し、気になる点を写真に撮った",
  "外観の傷・スレ・ゴムの剥がれを写真に残した",
  "申込先の査定料・送料・キャンセル時の返送料・入金のタイミングを確認した",
];

/** 付属品・状態で受付や査定が変わる点（各社公式記載の要約。確認日は companies.json の confirmed_date） */
const CONDITION_ROWS: { slug: string; point: string; text: string }[] = [
  { slug: "arrows", point: "付属品", text: "「重度の付属品欠品（バッテリー、充電器がない商品）」は買取不可。箱なしは可。ジャンク品・加工品も買取不可（ジャンク品は一部買い取るケースがあると買取基準に記載）" },
  { slug: "naniwa", point: "付属品・状態", text: "「状態が悪いものや欠品しているものに関しては買取の対象となりにくい場合がございます」" },
  { slug: "camera-takakuureru", point: "付属品・故障", text: "「購入時の箱や付属品は残っていることが望ましいですが、なくてもお買取できます」。「一部機能が使えないといった軽度の故障でしたら、買取価格がつく可能性があります」" },
  { slug: "uriel", point: "付属品・カビ", text: "「付属品がないカメラ」を「ご相談ください」の対象として掲載。メーカー別ページで「カビ・ホコリ・曇りの有無」を査定ポイントとして記載" },
  { slug: "janpara", point: "動作", text: "「基本的に通常正常動作品のみ買取対象となります」（店頭はバルク品や欠品のあるものも可と記載）" },
  { slug: "camera-kaitoriyasan", point: "故障", text: "「壊れていても買取OK」「他店で断られてしまった壊れているカメラであっても、査定いたします」" },
  { slug: "kitamura", point: "製造番号", text: "製造番号（シリアルナンバー）が「消えてしまった、または、判別できないという場合は買い取ることが出来かねます」" },
  { slug: "daikokuya", point: "製造番号・単体", text: "製造番号が消えている・判別できないカメラは買取不可。「ボディ単体・レンズ単体でもお買取りしております」" },
];

/** ミラーレスの主なメーカーとマウント（一般的な名称。詳細はサイト内の各ページ） */
const MAKER_MOUNTS: { maker: string; mount: string; href: string; label: string }[] = [
  { maker: "キヤノン", mount: "RFマウント（EOS R系）・EF-Mマウント（EOS M系）", href: "/maker/canon/", label: "キヤノンのカメラ買取" },
  { maker: "ニコン", mount: "Zマウント（Z系）", href: "/maker/nikon/", label: "ニコンのカメラ買取" },
  { maker: "ソニー", mount: "Eマウント（α・NEX系）", href: "/maker/sony/", label: "ソニーのカメラ買取" },
  { maker: "富士フイルム", mount: "Xマウント（X系）・Gマウント（GFX系）", href: "/maker/fujifilm/", label: "富士フイルムのカメラ買取" },
  { maker: "OM SYSTEM・オリンパス・パナソニック", mount: "マイクロフォーサーズ（OM-D・PEN・LUMIX G系など）", href: "/mount/micro-four-thirds/", label: "マイクロフォーサーズのレンズ買取" },
];

/** 機種・メーカー・状態別の導線（サイト内の既存ページのみ） */
const ROUTES: { h: string; links: { href: string; label: string }[] }[] = [
  {
    h: "カメラの種類で選ぶ",
    links: [
      { href: "/digital/mirrorless/", label: "ミラーレスカメラ（型番・マウント・初期化）" },
      { href: "/digital/compact/", label: "コンパクトデジタルカメラ" },
      { href: "/film/", label: "フィルムカメラ" },
      { href: "/old-lens/", label: "オールドレンズ・交換レンズ" },
    ],
  },
  {
    h: "メーカーで選ぶ",
    links: [
      { href: "/maker/canon/", label: "キヤノン（EF・RF）" },
      { href: "/maker/nikon/", label: "ニコン（F・Z）" },
      { href: "/maker/sony/", label: "ソニー（E・A）" },
      { href: "/maker/fujifilm/", label: "富士フイルム（X・GFX）" },
      { href: "/mount/micro-four-thirds/", label: "マイクロフォーサーズ（OM・パナソニック等）" },
    ],
  },
  {
    h: "状態で選ぶ",
    links: [
      { href: "/broken/dengen-hairanai/", label: "電源が入らない・エラーが出るカメラ" },
      { href: "/broken/lens-kabi/", label: "カビ・くもりのあるレンズ" },
      { href: "/broken/", label: "壊れた・ジャンク品" },
    ],
  },
  {
    h: "状況・売却先で選ぶ",
    links: [
      { href: "/situation/tairyou/", label: "カメラ・レンズの大量売却" },
      { href: "/situation/ihin/", label: "遺品・実家整理で出てきたカメラ" },
      { href: "/compare/", label: "買取サービスの統一比較表" },
      { href: "/kaitori/oikura/", label: "おいくら（一括査定）の手数料と使い方" },
      { href: "/kaitori/minna-no-kaitori/", label: "みんなの買取（一括査定）の仕組み" },
    ],
  },
];

export default function DigitalPage() {
  const mlYes = MIRRORLESS_LISTED.filter((m) => m.mirrorless === "あり");
  const cat = getCategory("digital");
  const oikura = getCompany("oikura");
  const rows = cat.companySlugs.map((slug) => getCompany(slug));
  return (
    <>
    <JsonLd data={articleLd} />
    <CategoryHub
      cat={cat}
      kicker="DIGITAL CAMERA"
      h1="ミラーレス買取・デジタルカメラ（デジカメ）買取｜掲載社の対応・付属品の条件・相場の調べ方"
      updated={PAGE_UPDATED}
      intro="デジタル一眼レフ・ミラーレスカメラは、新機種の登場により相場が変動しやすいカテゴリです。売却を決めた場合は、付属品を揃え、メモリーカードを抜いてデータを消去し、状態を正確に申告したうえで、送料・返送料・入金の条件を比較するのが基本的な流れです。本ページでは、デジタルカメラの売却前に確認しておくべき一般的な判断材料と、掲載サービスについて公式サイトで確認した条件をまとめています。買取価格は日々変動するため、当サイトでは金額を掲載しておりません。"
      points={[
        {
          t: "型番・付属品（バッテリー・充電器）を揃える",
          d: "本体底面のラベルで正確な型番を確認し、バッテリー・充電器・ストラップ・キャップ・元箱を揃えます。業者によってはバッテリーや充電器がない機材を「重度の付属品欠品」として買取不可とする場合があるため（カメラ買取アローズが公式サイトに明記・2026年10月20日確認）、付属品の有無は申込前に必ず確認してください。",
        },
        {
          t: "メモリーカードを抜き、本体内のデータを消去する",
          d: "メモリーカードは必ず抜いて手元に残します。本体内メモリを持つ機種は初期化し、Wi-Fi・Bluetooth接続やクラウド連携、著作権情報・所有者名の設定を削除してください。メニュー名は機種によって異なります。手順は、売る前の準備のページで整理しています。",
        },
        {
          t: "シャッター回数と外観・センサーの状態を把握する",
          d: "シャッター回数は査定の確認項目になることがあり、確認方法はメーカー・機種によって異なります。外観の傷、液晶の状態、センサーのゴミやカビも一般的な確認項目です。確認できる範囲で把握し、正確に申告してください。",
        },
        {
          t: "宅配・出張・店頭のいずれを利用するかを決める",
          d: "現行機や型落ち機は、全国から発送できる宅配買取のサービスが中心です。レンズや機材一式で重量がある場合は出張買取、近くに店舗があれば店頭という選択肢もあります。各方式の使い分けは、買取の依頼先の選び方のページで整理しています。",
        },
        {
          t: "シャッター回数は確認方法とあわせて伝える",
          d: "シャッター回数の確かめ方は一通りではありません。一般的には、本体メニューに表示できる機種、撮影した画像のファイル情報（Exif）に記録される機種、メーカーのサービス窓口で確認する機種などがあるとされます。確認できた場合は数値と確認方法を、確認できなかった場合は「不明」と申告すれば問題ありません。出所が明確でない外部ツールを本体に接続して調べることは避け、不明な部分は査定側の確認に任せるのが適切です。",
        },
        {
          t: "センサーのゴミとカビを見分けて申告する",
          d: "レンズを付けて絞りを大きく絞り込み、白い壁や空など均一な面を撮ると、センサー上のゴミは黒い点やにじみとして写ることが多いとされます。ゴミは清掃で落ちる場合がありますが、カビや長期保管による曇りは別の問題として扱われます。ブロアーより踏み込んだ清掃（センサーに触れる清掃）は傷のリスクがあるため、ご自身では行わず、気づいた点を写真付きで申告するほうが後の食い違いを防げます。",
        },
        {
          t: "ボディとレンズを分けるか、一式で出すかを先に決める",
          d: "同じマウントを使い続けて本体のみを買い替える場合はボディ単体、撮影をやめる場合や別のマウントへ移行する場合はレンズやアクセサリーを含めた一式というように、手元に残す機材から考えると判断しやすくなります。単体での受付は業者の記載を確認してください。掲載サービスでは、大黒屋が「ボディ単体・レンズ単体でもお買取りしております」と公式サイトに記載しています（2026年10月23日確認）。",
        },
      ]}
      cautions={[
        {
          t: "査定後のキャンセルと返送料",
          d: "宅配買取では、査定額に納得できなかった場合のキャンセル可否と返送料の負担が業者によって異なります。カメラ買取アローズは査定額報告後48時間以内のキャンセル無料・返送料は利用者負担、カメラの買取屋さんは宅配買取の送料・手数料を無料（着払い）とする一方、査定額に納得できず返送する場合の返送費用は「お客様負担」と注記しています（2026年10月21日確認）。",
        },
        {
          t: "レンズキットの扱い",
          d: "レンズキットで購入した機材は、ボディとレンズを別々に査定するか、キットとして査定するかが業者により異なります。申込時にどちらの扱いになるかを確認しておくと、査定内訳の理解がしやすくなります。",
        },
        {
          t: "バッテリーの輸送",
          d: "リチウムイオンバッテリーは輸送上の取り扱いに注意が必要とされています。本体に装着した状態で送るか、別梱包にするかは業者や配送会社の案内に従ってください。",
        },
        {
          t: "スマホアプリ・アカウント側の連携も解除する",
          d: "本体の初期化だけでは、スマートフォン側に残った登録は消えません。メーカーのスマホアプリに登録したカメラの削除、スマートフォンのBluetooth設定からのペアリング解除、クラウドへの自動転送サービスやメーカー会員サイトの製品登録の解除まで行っておくと安心です。本体の初期化は、これらの解除を済ませてから最後に行うと、手順の漏れを防げます。",
        },
        {
          t: "メモリーカードの抜き忘れをスロットごとに確認する",
          d: "カードスロットが2つある機種では、片方のみを抜いてもう片方を残してしまう例が多く見られます。発送前にすべてのスロットの蓋を開けて空であることを目で確かめ、あわせてバッテリー室、縦位置グリップ、カメラバッグのポケットに予備カードが入っていないかもご確認ください。梱包直前に本体とカードを別々に写真へ残しておくと、後で所在を確かめる手がかりになります。",
        },
        {
          t: "ファームウェア更新は必須ではない",
          d: "売る前に最新ファームウェアへ更新しておく必要は、一般的にはないとされます。更新する場合は、途中で電池が切れると不具合の原因になりうるため、満充電のバッテリーで行ってください。更新済みかどうかがわからない場合は、無理に操作せず、そのまま買取に出して問題ありません。",
        },
      ]}
      faqs={[
        {
          q: "ミラーレスカメラはどこで買取してもらえますか？",
          a: `当サイト掲載の買取${MIRRORLESS_LISTED.length}社のうち、${mlYes.map((m) => m.name).join("・")}の${mlYes.length}社が、公式サイトの対象品目に「ミラーレス」を明記しています（2026年9月確認）。宅配・店頭・出張のどれを選べるかは社ごとに異なるため、本ページの「ミラーレス買取：掲載${MIRRORLESS_LISTED.length}社の対応と買取方法」の表で確認してください。`,
        },
        {
          q: "製造番号のシールがはがれたミラーレスカメラは売れますか？",
          a: "買取を断られる場合があります。カメラのキタムラ（2026年10月19日確認）と大黒屋（2026年10月23日確認）は、製造番号（シリアルナンバー）が消えてしまった・判別できないカメラは買い取れないと公式サイトに記載しています。他の掲載社は記載を確認できていないため、申込前に問い合わせてください。",
        },
        {
          q: "バッテリーや充電器がなくても売れますか？",
          a: "業者によって異なります。カメラ買取アローズは「重度付属品欠品（バッテリー、充電器がない商品）」を買取不可と公式サイトに明記しています（2026年10月20日確認）。他の掲載サービスについては個別の記載を確認できなかったため、申込前に各社へ確認してください。",
        },
        {
          q: "データを消さずに送ってしまったらどうなりますか？",
          a: "送る前にメモリーカードを抜き、本体内メモリを初期化するのが基本です。万一送ってしまった場合は、すぐに業者へ連絡してカードの返送やデータの取り扱いを相談してください。データ消去の扱いを公式サイトに明記しているかどうかは業者により異なります。",
        },
        {
          q: "入金はいつ頃になりますか？",
          a: "掲載サービスの公式記載では、カメラの買取屋さんは宅配で「24時間以内に銀行振込」、カメラ買取アローズは査定承諾後「24時間以内にお客様の口座に入金」、ウリエルは出張買取でその場で現金とされています（2026年10月20日確認）。詳細は各社の一次確認ページをご覧ください。",
        },
        {
          q: "シャッター回数がわからなくても売れますか？",
          a: "シャッター回数は査定の確認項目の一つで、不明であることをそのまま伝えて相談するのが一般的です。確認方法はメーカー・機種によって異なり、本体のみでは確認できない機種もあります。確認できない場合は「不明」と申告し、査定側の確認に任せてください。",
        },
        {
          q: "ボディだけ、レンズだけでも売れますか？",
          a: "業者によって扱いが異なります。大黒屋は「ボディ単体・レンズ単体でもお買取りしております」と公式サイトに記載しています（2026年10月23日確認）。レンズキットで購入した機材の査定の扱いも業者ごとに異なるため、申込時に確認してください。",
        },
        {
          q: "スマホアプリに登録したままカメラを送ってしまいました。",
          a: "スマートフォン側のアプリ登録やBluetoothのペアリングは、一般的にスマートフォン側の操作だけで削除できることが多いとされます。まず手元のスマートフォンで登録を削除し、クラウドサービスや会員サイトの連携も解除してください。本体側の設定が気になる場合は、送付先の業者へ連絡し、初期化の扱いをご相談ください。",
        },
      ]}
      guides={[
        { href: "/guide/uru-mae/", label: "カメラ・レンズを売る前の準備", desc: "付属品・メモリーカード・データ削除・状態申告の注意点" },
        { href: "/guide/erabikata/", label: "カメラ買取の依頼先の選び方", desc: "専門店・総合買取・出張買取・フリマの使い分け" },
        { href: "/guide/trouble/", label: "カメラ買取のトラブル対処法", desc: "減額・返送トラブルの相談先" },
        { href: "/guide/kachi-mikata/", label: "フィルムカメラ・オールドレンズの価値の見分け方", desc: "古い機材の売却前に確認する7項目" },
      ]}
    >
      <div className="mt-6 max-w-3xl border-l-4 border-vermilion bg-chalk-card px-5 py-4">
        <p className="kicker mb-2">要点</p>
        <p className="text-sm leading-loose text-steel-800">
          ミラーレスカメラの買取は、当サイト掲載の買取{MIRRORLESS_LISTED.length}社のうち{mlYes.length}社（{mlYes.map((m) => m.name).join("・")}）が、公式サイトの対象品目に「ミラーレス」を明記しています。残る{MIRRORLESS_LISTED.length - mlYes.length}社も「デジタルカメラ」「ボディ」などの表記で受け付けており、ミラーレスを受け付けないという記載ではありません（各社公式・2026年9月確認）。
        </p>
        <p className="mt-2 text-sm leading-loose text-steel-800">
          デジタルカメラ（デジタル一眼レフ・ミラーレスカメラ・コンパクトデジタルカメラ）は、型落ちや古い機種でも買取の対象となる場合があります。買取額は型番・状態・付属品・売却の時期によって決まるため、当サイトでは金額を掲載せず、相場の調べ方と業者ごとの条件を整理しています。
        </p>
        <p className="mt-2 text-sm leading-loose text-steel-800">
          売却前に、型番と付属品（特にバッテリー・充電器）を揃える、メモリーカードを抜いて本体を初期化する、傷・カビ・動作を把握して申告する、の3点を済ませたうえで、査定料・送料・キャンセル時の返送料・入金のタイミングを2〜3社で比較するのが基本です。
        </p>
      </div>


      <section className="mt-12">
        <h2 className="section-title mb-2">ミラーレス買取：掲載{MIRRORLESS_LISTED.length}社の対応と買取方法（公式記載）</h2>
        <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
          自社でカメラを買い取る掲載{MIRRORLESS_LISTED.length}社について、公式サイトの対象品目に「ミラーレス」の記載があるかと、選べる買取方法をまとめました。「公式では確認できず」は記載が見つからなかったという意味で、受け付けないという意味ではありません。各社の付属品・故障・製造番号の記載まで含めた全文は
          <Link href="/digital/mirrorless/" className="text-vermilion underline underline-offset-4">ミラーレスカメラ買取前の確認事項</Link>
          にあります。
        </p>
        <div className="overflow-x-auto border border-chalk-line">
          <table className="spec-table">
            <thead>
              <tr>
                <th className="w-32 md:w-44">業者</th>
                <th>ミラーレスの記載</th>
                <th>買取方法</th>
              </tr>
            </thead>
            <tbody>
              {MIRRORLESS_LISTED.map((m) => (
                <tr key={m.slug}>
                  <th>
                    <Link href={`/kaitori/${m.slug}/`} className="underline underline-offset-4 hover:text-vermilion">
                      {m.name}
                    </Link>
                    <span className="mt-1 block text-[11px] font-normal text-steel-500">{m.checked}確認</span>
                  </th>
                  <td className="text-[13px]">{m.mirrorless}</td>
                  <td className="text-[13px]">{m.methods}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-steel-500">※ 横にスクロールできます。機種別・メーカー別の受付可否は、どの社の公式記載にもないため、当サイトからは断定できません。買取金額は掲載していません。</p>
      </section>

      <section className="mt-12">
        <h2 className="section-title mb-2">付属品・状態で受付や査定が変わる点（各社の公式記載）</h2>
        <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
          ミラーレスカメラ・デジタルカメラでは、バッテリーや充電器の欠品、動作、製造番号の判読で、受付の可否が分かれます。掲載社の公式サイトに明記されている条件だけを抜き出しました。
        </p>
        <div className="overflow-x-auto border border-chalk-line">
          <table className="spec-table">
            <thead>
              <tr>
                <th className="w-32 md:w-44">業者</th>
                <th className="w-24">項目</th>
                <th>公式の記載（要約・引用）</th>
              </tr>
            </thead>
            <tbody>
              {CONDITION_ROWS.map((r) => {
                const c = getCompany(r.slug);
                return (
                  <tr key={r.slug}>
                    <th>
                      <Link href={`/kaitori/${c.slug}/`} className="underline underline-offset-4 hover:text-vermilion">
                        {c.name}
                      </Link>
                      <span className="mt-1 block text-[11px] font-normal text-steel-500">{formatChecked(c.confirmed_date)}確認</span>
                    </th>
                    <td className="text-[13px]">{r.point}</td>
                    <td className="text-[13px]">{r.text}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-title mb-5">ミラーレスカメラを高く売るために押さえる条件と各社の公式記載</h2>
        <ol className="space-y-3 text-[13px] leading-loose text-steel-700">
          <li className="border border-chalk-line bg-chalk-card px-4 py-3">
            <strong className="text-steel-900">1. バッテリーと充電器（またはUSBケーブル）をそろえる。</strong>
            カメラ買取アローズはバッテリー・充電器のない商品を買取不可、カメラのナニワは欠品のあるものは「買取の対象となりにくい」と記載しています（上表）。元箱については、カメラ買取アローズが「箱なし」可、カメラ高く売れるドットコムが「なくてもお買取できます」と記載しており、そろえる優先順位は充電まわりが先です。
          </li>
          <li className="border border-chalk-line bg-chalk-card px-4 py-3">
            <strong className="text-steel-900">2. 製造番号のラベルをはがさない・消さない。</strong>
            カメラのキタムラと大黒屋は、製造番号が消えた・判別できないカメラを買い取れないと記載しています。底面のラベルは、型番の確認用に写真に撮っておきます。
          </li>
          <li className="border border-chalk-line bg-chalk-card px-4 py-3">
            <strong className="text-steel-900">3. 動作品か故障品かで申込先を分ける。</strong>
            じゃんぱらは「基本的に通常正常動作品のみ」、カメラ買取アローズはジャンク品を原則買取不可とする一方、カメラの買取屋さんは「壊れていても買取OK」、カメラ高く売れるドットコムは軽度の故障なら「買取価格がつく可能性があります」としています。故障品は
            <Link href="/broken/" className="text-vermilion underline underline-offset-4">壊れたカメラの売却</Link>
            を参照してください。
          </li>
          <li className="border border-chalk-line bg-chalk-card px-4 py-3">
            <strong className="text-steel-900">4. 相場は型番と状態が近い実績で確かめ、同じ情報で2〜3社に聞く。</strong>
            調べ方は下の「デジタルカメラの買取相場の調べ方」で、一括査定の仕組みは
            <Link href="/kaitori/oikura/" className="text-vermilion underline underline-offset-4">おいくら</Link>・
            <Link href="/kaitori/minna-no-kaitori/" className="text-vermilion underline underline-offset-4">みんなの買取</Link>
            のページで整理しています。
          </li>
        </ol>
        <p className="mt-3 text-xs text-steel-500">※ 各社の記載は確認日時点のものです（上表の確認日を参照）。当サイトは金額の目安を掲載していません。</p>
      </section>

      <section className="mt-12">
        <h2 className="section-title mb-2">メーカー別：ミラーレスのマウントと確認ページ</h2>
        <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
          ミラーレスカメラはメーカーごとにマウントが分かれ、同じメーカーでも複数のマウントがあります。型番とあわせてマウント名を伝えると、レンズを一緒に出すときに組み合わせを説明しやすくなります。
        </p>
        <div className="overflow-x-auto border border-chalk-line">
          <table className="spec-table">
            <thead>
              <tr>
                <th className="w-40">メーカー</th>
                <th>主なミラーレス用マウント</th>
                <th className="w-48">詳しいページ</th>
              </tr>
            </thead>
            <tbody>
              {MAKER_MOUNTS.map((m) => (
                <tr key={m.href}>
                  <th>{m.maker}</th>
                  <td className="text-[13px]">{m.mount}</td>
                  <td className="text-[13px]">
                    <Link href={m.href} className="text-vermilion underline underline-offset-4">{m.label}</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-title mb-5">デジタルカメラを売る前のチェック10項目</h2>
        <ol className="grid gap-2 md:grid-cols-2">
          {CHECKLIST.map((item, i) => (
            <li key={item} className="flex gap-3 border border-chalk-line bg-chalk-card px-4 py-3 text-[13px] leading-relaxed text-steel-800">
              <span aria-hidden="true" className="font-display text-sm text-vermilion">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
        <p className="mt-3 text-xs text-steel-500">
          各項目の理由と具体的な手順は、本ページの判断材料の項目と<Link href="/guide/uru-mae/" className="text-vermilion underline underline-offset-4">カメラ・レンズを売る前の準備</Link>で説明しています。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="section-title mb-5">デジタルカメラの買取相場の調べ方</h2>
        <div className="space-y-4 text-[13px] leading-loose text-steel-700">
          <p>
            <strong className="text-steel-900">1. 型番を正確に確認する</strong>
            同じシリーズでも「II」「Mark II」などの世代や、ボディ単体かレンズキットかで別の商品として扱われます。本体の表示で型番を確認してから調べます。
          </p>
          <p>
            <strong className="text-steel-900">2. 買取実績・買取価格表は状態と日付を確認して読む</strong>
            買取業者や一括査定サービスの中には、過去の買取実績を公開しているところがあります。たとえば一括査定のおいくらは、加盟店の買取実績を「カメラ・光学機器」カテゴリで公開しており、{formatChecked(PAGE_UPDATED)}時点で8,920件が掲載されていました（同ページは「おいくらを通じて買い取りが成立した商品でないものも含まれます」と注記）。実績の金額は、その個体の状態ランクと買取日の時点のものなので、お持ちの機材と状態・付属品・時期が近い例を探して目安にします。
          </p>
          <p>
            <strong className="text-steel-900">3. 「上限」「最大」の表記は前提条件を確認する</strong>
            買取価格表の上限額は、状態が良く付属品がそろった個体を前提にしていることが一般的です。中古販売価格は整備や保証の費用を含むため、買取額とは一致しません。
          </p>
          <p>
            <strong className="text-steel-900">4. 同じ情報で2〜3社に見積もりを依頼する</strong>
            型番・状態・付属品・写真を同じ内容で揃えて依頼すると、見積もりの差を比較しやすくなります。一括査定を使う場合の手数料や仕組みは、
            <Link href="/kaitori/oikura/" className="text-vermilion underline underline-offset-4">おいくら</Link>・
            <Link href="/kaitori/minna-no-kaitori/" className="text-vermilion underline underline-offset-4">みんなの買取</Link>
            の各ページで公式記載を確認しています。なお、おいくらの公式Q&Aは「古すぎたり、故障している電化製品など、再販ができないと買取業者が判断した商品は見積りがでないこともあります」としています（{formatChecked(oikura.page_updated ?? PAGE_UPDATED)}確認）。
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-title mb-2">キャンセル時の返送料と入金タイミング（公式確認）</h2>
        <p className="mb-5 text-sm leading-loose text-steel-600">
          宅配買取で査定額に納得できなかった場合の返送費用の負担は、業者によって異なります。下表は、各社公式サイトの記載を要約したものです（確認日は各社の欄に記載）。
        </p>
        <div className="overflow-x-auto border border-chalk-line">
          <table className="spec-table">
            <thead>
              <tr>
                <th className="w-32 md:w-40">業者</th>
                <th>キャンセル時の返送料</th>
                <th>入金</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((c) => (
                <tr key={c.slug}>
                  <th>
                    <Link href={`/kaitori/${c.slug}/`} className="underline underline-offset-4 hover:text-vermilion">
                      {c.name}
                    </Link>
                    <span className="mt-1 block text-[11px] font-normal text-steel-500">{formatChecked(c.confirmed_date)}確認</span>
                  </th>
                  <td className="text-[13px]">{fmt(c.hiyou.hensou)}</td>
                  <td className="text-[13px]">{fmt(c.nyukin)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-2 text-xs text-steel-500">※ 横にスクロールできます。条件は変更される場合があるため、申込前に各社公式サイトで最新の内容をご確認ください。</p>
      </section>

      <section className="mt-12">
        <h2 className="section-title mb-5">機種・メーカー・状態別に探す</h2>
        <div className="grid gap-5 md:grid-cols-2">
          {ROUTES.map((g) => (
            <div key={g.h} className="border border-chalk-line bg-chalk-card p-5">
              <h3 className="font-display text-base text-steel-900">{g.h}</h3>
              <ul className="mt-3 space-y-2 text-[13px]">
                {g.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-vermilion underline underline-offset-4 hover:text-vermilion-deep">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </CategoryHub>
    </>
  );
}
