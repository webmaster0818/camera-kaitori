import type { Metadata } from "next";
import Link from "next/link";
import CategoryHub from "@/components/CategoryHub";
import JsonLd from "@/components/JsonLd";
import { fmt, formatChecked, getCategory, getCompany } from "@/lib/companies";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "デジカメ買取｜売る前のチェック10項目・相場の調べ方・宅配買取の条件比較【2026年10月更新】";
const DESC =
  "デジカメ（デジタル一眼・ミラーレス・コンデジ）を買取に出す前のチェック10項目、相場の調べ方（型番と買取実績の読み方）、メーカー別・状態別の案内、宅配買取各社の査定料・送料・返送料・入金を公式サイトで確認して整理（2026年10月14日更新）。";
const PATH = "/digital/";
const PAGE_UPDATED = "2026-10-14";

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
  "型番を本体底面などの表示で控えた（「Mark II」「II」などの世代表記まで）",
  "バッテリー・充電器・ストラップ・キャップ・元箱・説明書の有無を確認した",
  "すべてのカードスロットからメモリーカードを抜いた",
  "スマホアプリの登録・Bluetoothのペアリング・クラウド連携を解除した",
  "本体を初期化した（著作権情報・所有者名の設定も削除）",
  "電源が入るか、シャッターが切れるか、液晶が映るかを確認できる範囲で試した",
  "シャッター回数が分かれば数値と確認方法を控えた（分からなければ「不明」と申告）",
  "センサーのゴミ、レンズのカビ・くもりを光で確認し、気になる点を写真に撮った",
  "外観の傷・スレ・ゴムの剥がれを写真に残した",
  "申込先の査定料・送料・キャンセル時の返送料・入金のタイミングを確認した",
];

/** 機種・メーカー・状態別の導線（サイト内の既存ページのみ） */
const ROUTES: { h: string; links: { href: string; label: string }[] }[] = [
  {
    h: "カメラの種類で選ぶ",
    links: [
      { href: "/digital/compact/", label: "コンパクトデジカメ（コンデジ）" },
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
      { href: "/broken/dengen-hairanai/", label: "電源が入らないデジカメ" },
      { href: "/broken/lens-kabi/", label: "カビ・くもりのあるレンズ" },
      { href: "/broken/", label: "壊れた・ジャンク品" },
    ],
  },
  {
    h: "状況・売り先で選ぶ",
    links: [
      { href: "/situation/tairyou/", label: "機材一式・大量に売る" },
      { href: "/situation/ihin/", label: "遺品・実家のカメラ" },
      { href: "/compare/", label: "買取サービスの統一比較表" },
      { href: "/kaitori/oikura/", label: "おいくら（一括査定）の手数料と使い方" },
      { href: "/kaitori/minna-no-kaitori/", label: "みんなの買取（一括査定）の仕組み" },
    ],
  },
];

export default function DigitalPage() {
  const cat = getCategory("digital");
  const oikura = getCompany("oikura");
  const rows = cat.companySlugs.map((slug) => getCompany(slug));
  return (
    <>
    <JsonLd data={articleLd} />
    <CategoryHub
      cat={cat}
      kicker="DIGITAL CAMERA"
      h1="デジカメ買取の前に｜売る前のチェック・相場の調べ方・業者の条件比較"
      updated={PAGE_UPDATED}
      intro="デジタル一眼レフ・ミラーレスは、新機種の登場で相場が動きやすいカテゴリです。売ると決めたら、付属品を揃え、メモリーカードを抜いてデータを消去し、状態を正確に申告したうえで、送料・返送料・入金の条件を比べるのが基本の流れになります。このページでは、デジタルカメラを売る前に押さえておきたい一般的な判断ポイントと、掲載サービスの公式確認済み条件をまとめます。買取価格は日々変動するため、当サイトでは金額を掲載しません。"
      points={[
        {
          t: "型番・付属品（バッテリー・充電器）を揃える",
          d: "本体底面のラベルで正確な型番を確認し、バッテリー・充電器・ストラップ・キャップ・元箱を揃えます。業者によってはバッテリーや充電器がない機材を「重度の付属品欠品」として買取不可とする場合があるため（カメラ買取アローズが公式サイトに明記・2026年9月5日確認）、付属品の有無は申込前に必ず確認してください。",
        },
        {
          t: "メモリーカードを抜き、本体内のデータを消去する",
          d: "メモリーカードは必ず抜いて手元に残します。本体内メモリを持つ機種は初期化し、Wi-Fi・Bluetooth接続やクラウド連携、著作権情報・所有者名の設定を削除しておきましょう。メニュー名は機種によって異なります。手順は売る前の準備ガイドに整理しています。",
        },
        {
          t: "シャッター回数と外観・センサーの状態を把握する",
          d: "シャッター回数は査定の確認項目になることがあり、確認方法はメーカー・機種によって異なります。外観の傷、液晶の状態、センサーのゴミやカビも一般的な確認項目です。自分で確認できる範囲で把握し、正直に申告しましょう。",
        },
        {
          t: "宅配・出張・店頭のどれが合うかを決める",
          d: "現行機や型落ち機は宅配買取で全国から送れるサービスが中心です。レンズや機材一式で重量がある場合は出張買取、近くに店舗があれば店頭という選択肢もあります。各方式の使い分けは専門店・総合・出張の使い分けガイドで整理しています。",
        },
        {
          t: "シャッター回数は「確認できた方法」とセットで伝える",
          d: "シャッター回数の確かめ方は一通りではありません。一般的には、本体メニューに表示できる機種、撮影した画像のファイル情報（Exif）に記録される機種、メーカーのサービス窓口で確認する機種などがあるとされます。確認できた場合は数値と確認方法を、確認できなかった場合は「不明」と申告すれば足ります。出所のはっきりしない外部ツールを本体に接続して調べるのは避け、分からない部分は査定側の確認に任せるのが無難です。",
        },
        {
          t: "センサーのゴミとカビを見分けて申告する",
          d: "レンズを付けて絞りを大きく絞り込み、白い壁や空など均一な面を撮ると、センサー上のゴミは黒い点やにじみとして写ることが多いとされます。ゴミは清掃で落ちる場合がありますが、カビや長期保管による曇りは別の問題として扱われます。ブロアーより踏み込んだ清掃（センサーに触れる清掃）は傷のリスクがあるため、自分では行わず、気づいた点を写真付きで申告するほうが後の食い違いを防げます。",
        },
        {
          t: "ボディとレンズを分けるか、一式で出すかを先に決める",
          d: "同じマウントを使い続けて本体だけ買い替えるならボディ単体、撮影をやめる・別マウントへ移るならレンズやアクセサリーも含めた一式、というように「手元に何を残すか」から決めると迷いが減ります。単体での受付は業者の記載を確認してください。掲載サービスでは、大黒屋が「ボディ単体・レンズ単体でもお買取りしております」と公式サイトに記載しています（2026年9月11日確認）。",
        },
      ]}
      cautions={[
        {
          t: "査定後のキャンセルと返送料",
          d: "宅配買取では、査定額に納得できなかった場合のキャンセル可否と返送料の負担が業者によって異なります。カメラ買取アローズは査定額報告後48時間以内のキャンセル無料・返送料は利用者負担、カメラの買取屋さんは「キャンセル料や手数料は一切かかりません」と公式サイトに記載しています（2026年9月5日確認）。",
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
          d: "本体の初期化だけでは、スマートフォン側に残った登録は消えません。メーカーのスマホアプリに登録したカメラの削除、スマートフォンのBluetooth設定からのペアリング解除、クラウドへの自動転送サービスやメーカー会員サイトの製品登録の解除まで行っておくと安心です。本体の初期化はこれらの解除を済ませてから最後に行うと、手順の抜けが起きにくくなります。",
        },
        {
          t: "メモリーカードの抜き忘れを「スロットごと」に確認する",
          d: "カードスロットが2つある機種では、片方だけ抜いてもう片方を残してしまう例がよくあります。発送前にすべてのスロットの蓋を開けて空であることを目で確かめ、あわせてバッテリー室、縦位置グリップ、カメラバッグのポケットに予備カードが入っていないかも確認しましょう。梱包直前に本体とカードを別々に写真へ残しておくと、後で所在を確かめる手がかりになります。",
        },
        {
          t: "ファームウェア更新は必須ではない",
          d: "売る前に最新ファームウェアへ更新しておく必要は、一般的にはないとされます。更新する場合は、途中で電池が切れると不具合の原因になりうるため、満充電のバッテリーで行ってください。すでに更新済みか分からなければ、無理に操作せずそのまま出して構いません。",
        },
      ]}
      faqs={[
        {
          q: "バッテリーや充電器がなくても売れますか？",
          a: "業者によって異なります。カメラ買取アローズは「重度付属品欠品（バッテリー、充電器がない商品）」を買取不可と公式サイトに明記しています（2026年9月5日確認）。他の掲載サービスについては個別の記載を確認できなかったため、申込前に各社へ確認してください。",
        },
        {
          q: "データを消さずに送ってしまったらどうなりますか？",
          a: "送る前にメモリーカードを抜き、本体内メモリを初期化するのが基本です。万一送ってしまった場合は、すぐに業者へ連絡してカードの返送やデータの取り扱いを相談してください。データ消去の扱いを公式サイトに明記しているかどうかは業者により異なります。",
        },
        {
          q: "入金はいつ頃になりますか？",
          a: "掲載サービスの公式記載では、カメラの買取屋さんは宅配で「24時間以内に銀行振込」、カメラ買取アローズは査定承諾後「24時間以内にお客様の口座に入金」、ウリエルは出張買取でその場で現金とされています（2026年9月5日確認）。詳細は各社の一次確認ページをご覧ください。",
        },
        {
          q: "シャッター回数が分からなくても売れますか？",
          a: "シャッター回数は査定の確認項目の一つで、分からないことをそのまま伝えて相談するのが一般的です。確認方法はメーカー・機種によって異なり、本体だけでは分からない機種もあります。分からない場合は「不明」と申告し、査定側の確認に任せてください。",
        },
        {
          q: "ボディだけ、レンズだけでも売れますか？",
          a: "業者によって扱いが異なります。大黒屋は「ボディ単体・レンズ単体でもお買取りしております」と公式サイトに記載しています（2026年9月11日確認）。レンズキットで購入した機材の査定の扱いも業者ごとに異なるため、申込時に確認してください。",
        },
        {
          q: "スマホアプリに登録したままカメラを送ってしまいました。",
          a: "スマートフォン側のアプリ登録やBluetoothのペアリングは、一般的にスマートフォン側の操作だけで削除できることが多いとされます。まず手元のスマートフォンで登録を削除し、クラウドサービスや会員サイトの連携も解除してください。本体側の設定が気になる場合は、送った業者へ連絡して初期化の扱いを相談しましょう。",
        },
      ]}
      guides={[
        { href: "/guide/uru-mae/", label: "売る前の準備", desc: "付属品・メモリーカード・データ削除・申告のコツ" },
        { href: "/guide/erabikata/", label: "専門店・総合・出張の使い分け", desc: "売り方の仕組みから整理" },
        { href: "/guide/trouble/", label: "買取トラブル対処", desc: "減額・返送トラブルの相談先" },
        { href: "/guide/kachi-mikata/", label: "フィルム機・オールドレンズの価値の見分け方", desc: "古い機材を売る前に確認する7つのポイント" },
      ]}
    >
      <div className="mt-6 max-w-3xl border-l-4 border-vermilion bg-chalk-card px-5 py-4">
        <p className="kicker mb-2">先に結論</p>
        <p className="text-sm leading-loose text-steel-800">
          デジカメ（デジタル一眼レフ・ミラーレス・コンパクトデジカメ）は、型落ちや古い機種でも買取の対象になる場合があります。買取額は型番・状態・付属品・売る時期で決まるため、当サイトでは金額を載せず、相場の調べ方と業者ごとの条件を整理しています。
        </p>
        <p className="mt-2 text-sm leading-loose text-steel-800">
          売る前に「型番と付属品（特にバッテリー・充電器）をそろえる」「メモリーカードを抜いて本体を初期化する」「傷・カビ・動作を把握して申告する」の3つを済ませ、査定料・送料・キャンセル時の返送料・入金のタイミングを2〜3社で比べるのが基本です。
        </p>
      </div>

      <section className="mt-12">
        <h2 className="section-title mb-5">デジカメを売る前のチェック10項目</h2>
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
          各項目の理由と具体的な手順は、下の「売る前に押さえる判断ポイント」と<Link href="/guide/uru-mae/" className="text-vermilion underline underline-offset-4">売る前の準備ガイド</Link>で説明しています。
        </p>
      </section>

      <section className="mt-12">
        <h2 className="section-title mb-5">デジカメの買取相場の調べ方</h2>
        <div className="space-y-4 text-[13px] leading-loose text-steel-700">
          <p>
            <strong className="text-steel-900">1. 型番を正確にそろえる。</strong>
            同じシリーズでも「II」「Mark II」などの世代や、ボディ単体かレンズキットかで別の商品として扱われます。本体の表示で型番を確認してから調べます。
          </p>
          <p>
            <strong className="text-steel-900">2. 買取実績・買取価格表を「状態」と「日付」付きで読む。</strong>
            買取業者や一括査定サービスの中には、過去の買取実績を公開しているところがあります。たとえば一括査定のおいくらは、加盟店の買取実績を「カメラ・光学機器」カテゴリで公開しており、{formatChecked(PAGE_UPDATED)}時点で8,920件が掲載されていました（同ページは「おいくらを通じて買い取りが成立した商品でないものも含まれます」と注記）。実績の金額は、その個体の状態ランクと買取日の時点のものなので、自分の機材と状態・付属品・時期が近い例を探して目安にします。
          </p>
          <p>
            <strong className="text-steel-900">3. 「上限」「最大」表記は条件付きで受け取る。</strong>
            買取価格表の上限額は、状態が良く付属品がそろった個体を前提にしていることが一般的です。中古販売価格は整備や保証の費用を含むため、買取額とは一致しません。
          </p>
          <p>
            <strong className="text-steel-900">4. 最後は同じ情報で2〜3社に見積もりを取る。</strong>
            型番・状態・付属品・写真を同じ内容でそろえて依頼すると、見積もりの差が比べやすくなります。一括査定を使う場合の手数料や仕組みは、
            <Link href="/kaitori/oikura/" className="text-vermilion underline underline-offset-4">おいくら</Link>・
            <Link href="/kaitori/minna-no-kaitori/" className="text-vermilion underline underline-offset-4">みんなの買取</Link>
            の各ページで公式記載を確認しています。なお、おいくらの公式Q&Aは「古すぎたり、故障している電化製品など、再販ができないと買取業者が判断した商品は見積りがでないこともあります」としています（{formatChecked(oikura.page_updated ?? PAGE_UPDATED)}確認）。
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-title mb-2">キャンセル時の返送料と入金タイミング（公式確認）</h2>
        <p className="mb-5 text-sm leading-loose text-steel-600">
          宅配買取で査定額に納得できなかったとき、送り返してもらう費用を誰が負担するかは業者で分かれます。下表は各社公式サイトの記載をそのまま要約したものです（確認日は各社の欄に記載）。
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
        <p className="mt-2 text-xs text-steel-500">※ 横にスクロールできます。条件は変更される場合があるため、申込前に各社公式サイトで最新の内容を確認してください。</p>
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
