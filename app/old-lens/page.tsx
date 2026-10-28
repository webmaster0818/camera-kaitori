import type { Metadata } from "next";
import Link from "next/link";
import CategoryHub from "@/components/CategoryHub";
import ConditionTable from "@/components/ConditionTable";
import JsonLd from "@/components/JsonLd";
import { getCategory, getCompany, mounts } from "@/lib/companies";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "オールドレンズの買取｜レンズ単体・カビありの受付条件と掲載7社の公式記載比較【2026年10月更新】";
const DESC =
  "オールドレンズをレンズ単体・カビやくもりのある状態で売れるかを、掲載7社の公式記載（買取方法・故障やカビの扱い・キャンセル時の返送料）で比較しています。マウントと刻印の確認方法、相場の調べ方もまとめています（2026年10月28日更新）。";
const PATH = "/old-lens/";
const PAGE_UPDATED = "2026-10-28";

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

export default function OldLensPage() {
  const cat = getCategory("old-lens");
  const rows = cat.companySlugs.map((slug) => getCompany(slug));
  return (
    <>
    <JsonLd data={articleLd} />
    <CategoryHub
      cat={cat}
      kicker="OLD LENS"
      h1="オールドレンズの買取｜レンズ単体・カビありの受付条件と売る前の確認事項"
      updated={PAGE_UPDATED}
      intro="オールドレンズは、デジタルカメラにマウントアダプターを介して装着する楽しみ方が広がり、古いレンズにも評価の対象となるものがあります。ただし、評価はマウントの種類、焦点距離と明るさ、カビ・くもり・バルサム切れの有無によって大きく異なります。本ページでは、オールドレンズの売却前に確認したい一般的な判断ポイントと、レンズ単体を対象と公式サイトに記載している掲載サービスの条件をご説明します。買取価格は状態と時期により変動するため、当サイトでは金額を掲載しておりません。"
      points={[
        {
          t: "マウント（取り付け規格）の特定",
          d: "M42スクリューマウント、ライカのLマウント・Mマウント、ニコンFマウント、キヤノンFDマウント、ミノルタMDマウント、ペンタックスKマウントなど、レンズはメーカーと時代によって取り付け規格が異なります。マウント部の形状や刻印、レンズ名から規格を特定し、お申し込みの際に正確にお伝えいただけるようご準備ください。",
        },
        {
          t: "レンズ名・焦点距離・開放F値の確認",
          d: "レンズの前面や鏡筒に「50mm F1.4」のように焦点距離と開放F値、製造番号が刻印されているのが一般的です。同じ焦点距離でも明るさや設計の世代で評価が変わるため、刻印をそのまま書き写して申告することをおすすめします。",
        },
        {
          t: "ライトによるカビ・くもり・バルサム切れの確認",
          d: "レンズを明るい方向にかざし、斜めからライトを当てると、カビの糸状の模様やくもり、レンズ接合面の剥離（バルサム切れ）が見えることがあります。これらは査定の一般的な確認項目で、程度によって評価が分かれます。見つけた場合も、ご自身で分解清掃はせず、そのまま申告してください。",
        },
        {
          t: "絞り羽根とヘリコイドの動作確認",
          d: "絞りリングを回して羽根が滑らかに動くか、油が滲んでいないか、ピントリング（ヘリコイド）が固着していないかも一般的な確認項目です。動かない場合も無理に回さず、状態として申告してください。",
        },
      ]}
      cautions={[
        {
          t: "レンズ単体での受付可否の確認",
          d: "ボディとセットではなく、レンズ単体で売却する場合は、業者によって受付の可否や条件が異なります。掲載サービスはいずれもレンズを対象品目に含めていますが、お申し込み前に、各社公式サイトの対象一覧でご確認ください。",
        },
        {
          t: "キャップ・フード・フィルター・ケース",
          d: "前後のキャップ、フード、保護フィルター、革ケースは揃っていると評価が変わることがある付属品です。特に純正フードや専用ケースは別の場所に保管されていることが多いため、事前に確認してから申し込むと、手続きを一度で済ませられます。",
        },
        {
          t: "レンズ単体での個別梱包",
          d: "レンズは前後のキャップを付け、1本ずつ緩衝材で包んで箱の中で動かないように詰めるのが基本です。ボディに付けたまま送るかどうかは業者の案内に従ってください。",
        },
      ]}
      faqs={[
        {
          q: "ボディがなく、オールドレンズだけでも売れますか？",
          a: "レンズ単体での受付を公式サイトに明記している業者があります。大黒屋は「ボディ単体・レンズ単体でもお買取りしております」と記載しています（2026年10月23日確認）。他の掲載サービスもレンズを対象品目に含めていますが、オールドレンズの扱いは各社で異なるため、申込前に対象一覧をご確認ください。",
        },
        {
          q: "カビのあるレンズでも売れますか？",
          a: "カビ・くもりの扱いは業者によって異なります。大黒屋は「カビやくもりのあるオールドレンズもお買取りの対象です」と公式サイトに記載しています（2026年10月23日確認）。ウリエルはメーカー別ページで「カビ・ホコリ・曇りの有無」を査定ポイントの一つとして記載し、カメラ買取アローズはジャンク品を原則買取不可（例外として「一部、ジャンク品として買い取ることができるケース」ありと記載）としています（いずれも2026年10月20日確認）。状態により値段が付かない場合があることはウリエル・カメラ買取アローズとも記載しているため、状態を申告のうえご相談ください。",
        },
        {
          q: "マウントがわからない場合はどうすればよいですか？",
          a: "レンズ名・焦点距離・開放F値の刻印と、マウント部の写真を用意しておくと、業者側で判別できるのが一般的です。価値の見分け方ガイドで主なマウントの特徴を整理しています。",
        },
        {
          q: "オールドレンズの買取相場はどう調べればよいですか？",
          a: "刻印どおりのレンズ名・焦点距離・開放F値・マウントで検索し、買取実績や買取価格表を確認します。実績の金額はその個体の状態と買取日の時点のもので、価格表の上限額は状態が良く付属品がそろった個体が前提であることが一般的です。お持ちのレンズと状態・付属品・時期が近い例を目安にし、同じ情報で2〜3社に見積もりを依頼すると比較しやすくなります。",
        },
        {
          q: "オールドレンズを大量に売りたい場合はどうすればよいですか？",
          a: "本数が多い場合は、レンズ名・焦点距離・F値・状態を一覧にしてからご相談いただくと、査定内訳を確認しやすくなります。運び出しが難しい場合は、出張買取という選択肢もあります。進め方は、カメラ・レンズを大量に売る場合のページで整理しています。",
        },
      ]}
      guides={[
        { href: "/guide/kachi-mikata/", label: "フィルムカメラ・オールドレンズの価値の見分け方", desc: "マウント・明るさ・状態の見方" },
        { href: "/guide/uru-mae/", label: "カメラ・レンズを売る前の準備", desc: "付属品・状態申告・梱包の要点" },
        { href: "/situation/tairyou/", label: "カメラ・レンズを大量に売る場合の進め方", desc: "リスト化と出張・宅配の使い分け" },
        { href: "/guide/erabikata/", label: "専門店・総合買取・出張買取・フリマの使い分け", desc: "売り方の仕組みと買取先の選び方" },
        { href: "/mount/m42/", label: "M42マウントのレンズ買取", desc: "ねじ込み式スクリューマウントの見分け方" },
        { href: "/mount/leica-m/", label: "ライカMマウントのレンズ買取", desc: "距離計連動バヨネットの確認項目" },
        { href: "/mount/micro-four-thirds/", label: "マイクロフォーサーズのレンズ買取", desc: "フォーサーズとの違いと電子接点" },
        { href: "/mount/f-mount/", label: "ニコンFマウントのレンズ買取", desc: "一眼レフ用バヨネットの仕様の幅" },
        { href: "/broken/lens-kabi/", label: "カビ・くもりのあるレンズの売却", desc: "カビの確認方法と申告・梱包の注意" },
      ]}
    >
      <div className="mt-6 max-w-3xl border-l-4 border-vermilion bg-chalk-card px-5 py-4">
        <p className="text-sm leading-loose text-steel-800">
          オールドレンズは、ボディがなくてもレンズ単体で買取に出せます。大黒屋は「カビやくもりのあるオールドレンズもお買取りの対象です」「ボディ単体・レンズ単体でもお買取りしております」と公式サイトに記載しています（2026年10月23日確認）。一方で、カメラ買取アローズはジャンク品を原則買取不可としており（一部は事前の問い合わせで買い取るケースありと記載、2026年10月20日確認）、カビ・故障品の扱いは業者によって異なります。
        </p>
        <p className="mt-2 text-sm leading-loose text-steel-800">
          レンズ1本から送れる宅配買取は、本ページの掲載7社のうち6社が公式サイトに記載しています。ウリエルは公式のご利用ガイドに「現在は出張買取のみの対応になります。」とあり、宅配には対応していません（2026年10月27日確認）。
        </p>
        <p className="mt-2 text-sm leading-loose text-steel-800">
          <strong className="text-steel-900">どこで売れるか：</strong>宅配はカメラの買取屋さん・カメラ買取アローズ・カメラのキタムラ・フジヤカメラ・カメラのナニワ・大黒屋の6社、店頭はカメラのキタムラ（約600店舗・2025年8月時点の公式表記）・カメラの買取屋さん（会社概要に25店舗）・カメラのナニワ・大黒屋・フジヤカメラ本店・ウリエル川崎店（電話予約）で受け付けています。カメラ買取アローズは店頭買取の記載がありません（各社公式サイト、2026年10月23〜28日確認）。
        </p>
        <p className="mt-2 text-sm leading-loose text-steel-800">
          <strong className="text-steel-900">査定の注意：</strong>カメラのキタムラと大黒屋は、製造番号（シリアルナンバー）が元々あるのに消えている・判別できないものは買い取れないと記載しています。フジヤカメラは「故障している」品を「お売りいただけないアイテム」に挙げています（2026年10月23〜26日確認）。
        </p>
        <p className="mt-2 text-sm leading-loose text-steel-800">
          <strong className="text-steel-900">相場の傾向：</strong>カメラのナニワはよくある質問で、レンズのカビや故障症状は買取金額に大きく影響するとしつつ、部品取りや修理用として需要がある場合もあると記載しています（2026年10月26日確認）。買取価格は個体の状態と時期で変わるため、当サイトでは金額を載せていません（調べ方は下の「オールドレンズの買取相場の調べ方」）。オークションの落札相場は個人間の取引額で、業者の買取額とは異なります。
        </p>
        <p className="mt-2 text-sm leading-loose text-steel-800">
          売る前に、刻印でマウント・レンズ名（焦点距離と開放F値）を確かめ、カビ・くもり・絞りの動きを把握したうえで、下表の受付条件とキャンセル時の返送料を2〜3社で比べるのが基本です。
        </p>
      </div>

      <section className="mt-12">
        <h2 className="section-title mb-2">オールドレンズの受付条件とキャンセル時の返送料（公式記載）</h2>
        <p className="mb-5 text-sm leading-loose text-steel-600">
          本カテゴリの掲載7社について、買取方法、故障品・カビ・付属品欠品の扱い、査定後にキャンセルした場合の返送料を、各社公式サイトの記載から要約しました。「公式では確認できず」は、該当する記載を公式サイト上で確認できなかった項目です。
        </p>
        <ConditionTable rows={rows} brokenLabel="故障・カビ・付属品の扱い" />
      </section>

      <section className="mt-12">
        <h2 className="section-title mb-5">マウント別の確認ページ</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {mounts.map((m) => (
            <Link key={m.slug} href={m.path} className="block border border-chalk-line bg-chalk-card p-5 hover:border-vermilion">
              <span className="font-display text-base text-steel-900">{m.short}</span>
              <span className="mt-2 block text-[13px] leading-loose text-steel-700">{m.lead}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="section-title mb-5">オールドレンズの買取相場の調べ方</h2>
        <div className="space-y-4 text-[13px] leading-loose text-steel-700">
          <p>
            <strong className="text-steel-900">1. 刻印のとおりにレンズを特定する</strong>
            同じ焦点距離でも、開放F値、マウント、製造時期による設計の違いで別のレンズとして扱われます。前面や鏡筒の刻印を書き写し、マウントも含めて調べます。
          </p>
          <p>
            <strong className="text-steel-900">2. 買取実績は状態と日付を確認して読む</strong>
            買取業者の中には買取実績や買取価格表を公開しているところがあります。実績の金額はその個体の状態と買取日の時点のものなので、カビ・くもりの有無や付属品が近い例を目安にします。
          </p>
          <p>
            <strong className="text-steel-900">3. 「上限」の表記と中古販売価格を区別する</strong>
            価格表の上限額は、状態が良く付属品がそろった個体を前提にしていることが一般的です。中古販売価格は整備や保証の費用を含むため、買取額とは一致しません。
          </p>
          <p>
            <strong className="text-steel-900">4. 同じ情報で2〜3社に見積もりを依頼する</strong>
            レンズ名・マウント・状態・付属品・写真を同じ内容でそろえて依頼すると、見積もりの差を比較しやすくなります。カビの見分け方は
            <Link href="/broken/lens-kabi/" className="text-vermilion underline underline-offset-4">カビ・くもりのあるレンズの売却</Link>
            で説明しています。
          </p>
        </div>
      </section>
    </CategoryHub>
    </>
  );
}
