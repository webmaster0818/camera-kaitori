import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import {
  categoriesOf,
  companies,
  companyFaq,
  ctaFor,
  fmt,
  getCompany,
  serviceTypeOf,
} from "@/lib/companies";
import { CHECKED_LABEL } from "@/lib/site";

export function generateStaticParams() {
  return companies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = getCompany(slug);
  const isPlatform = c.kind === "platform";
  return {
    title: isPlatform
      ? `${c.name}の仕組みまとめ｜利用料・流れ・運営会社【2026年9月公式確認】`
      : `${c.name}のカメラ買取まとめ｜査定料・出張料・送料・入金・ジャンク対応【2026年9月公式確認】`,
    description: isPlatform
      ? `${c.name}（運営: ${c.operator.name}）の仕組み・対象・利用料・流れを公式サイトで一次確認（${CHECKED_LABEL}）。確認できなかった項目は「公式では確認できず」と正直に記載しています。`
      : `${c.name}（運営: ${c.operator.name}）の買取方法・対応エリア・査定料・出張料・送料・返送料・入金タイミング・キャンセル規定・故障品やジャンクの受付・遺品や大量への対応を公式サイトで一次確認（${CHECKED_LABEL}）。確認できなかった項目は「公式では確認できず」と正直に記載しています。`,
    alternates: { canonical: `/kaitori/${c.slug}/` },
  };
}

export default async function KaitoriPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const c = getCompany(slug);
  const cta = ctaFor(c);
  const cats = categoriesOf(c);
  const isPlatform = c.kind === "platform";
  const faqs = isPlatform
    ? [
        {
          q: `${c.name}の利用に費用はかかりますか？`,
          a: fmt(c.hiyou.satei) === "公式では確認できず"
            ? `利用料については公式サイトで確認できませんでした（${c.confirmed_date}時点）。利用前に公式サイトでご確認ください。`
            : `公式サイトの記載では「${c.hiyou.satei}」です（${c.confirmed_date}確認）。`,
        },
        {
          q: `${c.name}はカメラを直接買い取るサービスですか？`,
          a: `いいえ。${c.name}は${serviceTypeOf(c)}です。実際の買取契約は、紹介先や比較先の各買取店との間で行うのが一般的です。買取条件は各店で異なるため、契約前に各店の規定をご確認ください。`,
        },
        {
          q: `${c.name}で扱える品目は？`,
          a: `公式サイトの記載では「${fmt(c.target)}」です（${c.confirmed_date}確認）。`,
        },
      ]
    : companyFaq(c);

  const quickRows: { label: string; value: string }[] = isPlatform
    ? [
        { label: "サービス形態", value: serviceTypeOf(c) },
        { label: "対象", value: fmt(c.target) },
        { label: "利用料", value: fmt(c.hiyou.satei) },
        { label: "流れ", value: fmt(c.methods) },
        { label: "対応エリア", value: fmt(c.area) },
        { label: "本人確認", value: fmt(c.honnin) },
      ]
    : [
        { label: "買取方法", value: fmt(c.methods) },
        { label: "対応エリア", value: fmt(c.area) },
        { label: "対象", value: fmt(c.target) },
        { label: "査定料", value: fmt(c.hiyou.satei) },
        { label: "出張料", value: fmt(c.hiyou.shucchou) },
        { label: "送料（宅配）", value: fmt(c.hiyou.souryou) },
        { label: "梱包キット", value: fmt(c.hiyou.kit) },
        { label: "返送料", value: fmt(c.hiyou.hensou) },
        { label: "査定日数", value: fmt(c.satei_days) },
        { label: "入金", value: fmt(c.nyukin) },
        { label: "キャンセル", value: fmt(c.cancel) },
        { label: "本人確認", value: fmt(c.honnin) },
        { label: "故障・ジャンク", value: fmt(c.broken) },
        { label: "遺品・大量・法人", value: fmt(c.ihin) },
        { label: "クーリングオフの記載", value: fmt(c.cooling_off) },
      ];

  const h1 = isPlatform
    ? `${c.name}の仕組みまとめ｜利用料・流れ・運営会社【2026年9月公式確認】`
    : `${c.name}のカメラ買取まとめ｜査定料・出張料・送料・入金・ジャンク対応【2026年9月公式確認】`;

  return (
    <>
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "比較表", path: "/compare/" },
          { name: c.name, path: `/kaitori/${c.slug}/` },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">{isPlatform ? "SERVICE FACT SHEET" : "COMPANY FACT SHEET"}</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          {h1}
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          {c.name}のサービス条件を、公式サイトの記載に基づいて一次確認しました（確認日: {CHECKED_LABEL}）。
          サービス形態: {serviceTypeOf(c)}。対象: {fmt(c.target)}。買取価格は状態と時期で変動するため当ページには掲載せず、条件のみを整理しています。
        </p>

        <section className="mt-10">
          <h2 className="section-title mb-5">実務のポイント即答表</h2>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {quickRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-32 md:w-44">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {c.note && (
            <p className="mt-3 text-xs leading-relaxed text-steel-500">
              補足: {c.note}
            </p>
          )}
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a href={cta.href} rel={cta.rel} target="_blank" className="btn-primary">
              {c.name}の公式サイトを見る
            </a>
            <Link href="/compare/" className="btn-ghost">
              比較表で他社と並べる
            </Link>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">公式サイトが掲げる特徴</h2>
          <ul className="grid gap-3 md:grid-cols-2">
            {c.features.map((f) => (
              <li
                key={f}
                className="border-l-2 border-vermilion bg-chalk-card px-4 py-3 text-sm leading-relaxed text-steel-800"
              >
                {f}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-steel-500">
            ※ いずれも{c.name}公式サイトの記載に基づきます（{CHECKED_LABEL}確認）。当サイト独自の評価ではありません。
          </p>
        </section>

        {!isPlatform && (
          <section className="mt-14 border border-chalk-line bg-chalk-warm p-6">
            <h2 className="font-display text-lg text-steel-900">申し込む前に自分で確認すること</h2>
            <p className="mt-3 text-sm leading-loose text-steel-700">
              付属品を揃え、デジタル機はメモリーカードを抜いて初期化し、カビ・くもり・動作不良は隠さず申告するのが、どの業者に出す場合でも共通の前提です。出張買取を頼む場合は、訪問購入としてのクーリングオフ制度の説明があるかも確認しておきましょう。
            </p>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Link href="/guide/uru-mae/" className="btn-ghost text-sm">売る前の準備</Link>
              <Link href="/guide/kachi-mikata/" className="btn-ghost text-sm">価値の見分け方</Link>
              <Link href="/guide/trouble/" className="btn-ghost text-sm">トラブル対処とクーリングオフ</Link>
            </div>
          </section>
        )}

        <section className="mt-14">
          <h2 className="section-title mb-5">運営会社情報</h2>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                <tr>
                  <th className="w-32 md:w-40">運営会社</th>
                  <td>{c.operator.name}</td>
                </tr>
                <tr>
                  <th>所在地</th>
                  <td>{c.operator.address}</td>
                </tr>
                <tr>
                  <th>古物商許可</th>
                  <td>{fmt(c.operator.kobutsu)}</td>
                </tr>
                <tr>
                  <th>確認元</th>
                  <td>
                    <a
                      href={c.operator.source}
                      rel="nofollow noopener"
                      target="_blank"
                      className="text-vermilion underline underline-offset-4 hover:text-vermilion-deep"
                    >
                      {c.operator.source}
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">{c.name}のよくある疑問</h2>
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

        <section className="mt-14 border border-steel-200 bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">この情報の検証について</h2>
          <ul className="mt-4 space-y-2 text-[13px] leading-loose text-steel-700">
            <li>・本ページの条件は、{c.name}公式サイト（{c.official_url}）および運営会社ページを{CHECKED_LABEL}に確認して作成しています。</li>
            <li>・公式サイトで確認できなかった項目は「公式では確認できず」と表示し、推測で補完していません。</li>
            <li>・口コミ・体験談の創作、架空の買取金額・実績の掲載は行いません。買取価格は変動するため当サイトでは掲載していません。</li>
            <li>・条件は変更される場合があります。申込前に必ず公式サイト・利用規約で最新の内容をご確認ください。</li>
          </ul>
          <p className="mt-4 text-xs text-steel-500">
            詳細は<Link href="/content-policy/" className="text-vermilion underline underline-offset-4">コンテンツ制作ポリシー</Link>をご覧ください。
          </p>
        </section>

        <section className="mt-14">
          <h2 className="section-title mb-5">あわせて読む</h2>
          <ul className="grid gap-3 text-sm md:grid-cols-2">
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">掲載サービスの統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">同じ物差しで条件を並べる</span>
              </Link>
            </li>
            {cats.map((cat) => (
              <li key={cat.slug}>
                <Link href={cat.path} className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                  <span className="font-display text-steel-900">{cat.name}</span>
                  <span className="mt-1 block text-xs text-steel-500">カテゴリ別の判断ポイントとサービス比較</span>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/situation/ihin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">遺品・実家整理のカメラを売る</span>
                <span className="mt-1 block text-xs text-steel-500">捨てる前の確認点と出張買取の使い方</span>
              </Link>
            </li>
            <li>
              <Link href="/shindan/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売り方診断（4問）</span>
                <span className="mt-1 block text-xs text-steel-500">種類と状況からルールベースで判定</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
