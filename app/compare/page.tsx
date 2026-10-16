import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  ctaFor,
  feeSummary,
  fmt,
  kaitoriCompanies,
  kitSummary,
  platformCompanies,
  serviceTypeOf,
} from "@/lib/companies";
import { checkedLabelAll } from "@/lib/companies";

export const metadata: Metadata = {
  title: "カメラ買取サービスの比較表【査定料・出張料・送料・返送料・入金を公式確認】",
  description:
    "カメラを自社で買い取る10社と、おいくら・ヒカカク！・みんなの買取の一括査定/価格比較3サービスを統一フォーマットで比較しています。買取方法・査定料・出張料・送料・返送料・入金・キャンセル規定・故障品の受付・古物商許可を公式サイトで一次確認し、確認日を明記しています。",
  alternates: { canonical: "/compare/" },
};

export default function ComparePage() {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "比較表", path: "/compare/" },
        ]}
      />
      <div className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">COMPARISON TABLE</p>
        <h1 className="font-display text-2xl leading-snug text-steel-900 md:text-4xl">
          カメラ買取サービスの統一比較表
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          掲載サービスの条件を、各社公式サイトの一次確認にもとづき、統一基準で掲載しています。
          <strong className="text-steel-800">確認日: {checkedLabelAll()}</strong>
          。公式サイトで確認できなかった項目は「公式では確認できず」と表示しています。買取価格は状態と時期により変動するため掲載しておらず、条件の比較に限定しています。ご利用前に、各社公式サイトにて最新の条件・詳細な規定をご確認ください。
        </p>

        <h2 className="section-title mt-12 mb-4">買取サービス（宅配・出張）</h2>
        <div className="overflow-x-auto border border-chalk-line">
          <table className="spec-table min-w-[1360px]">
            <thead>
              <tr>
                <th className="min-w-[9rem]">名称</th>
                <th className="min-w-[11rem]">買取方法・対応エリア</th>
                <th className="min-w-[11rem]">対象</th>
                <th className="min-w-[10rem]">査定料・出張料</th>
                <th className="min-w-[10rem]">送料・返送料</th>
                <th className="min-w-[10rem]">入金</th>
                <th className="min-w-[11rem]">キャンセル規定</th>
                <th className="min-w-[11rem]">故障・ジャンク</th>
                <th className="min-w-[10rem]">遺品・大量・法人</th>
                <th className="min-w-[13rem]">運営会社・古物商許可</th>
              </tr>
            </thead>
            <tbody>
              {kaitoriCompanies.map((c) => {
                const cta = ctaFor(c);
                return (
                  <tr key={c.slug}>
                    <td>
                      <Link
                        href={`/kaitori/${c.slug}/`}
                        className="font-display text-base text-vermilion underline underline-offset-4 hover:text-vermilion-deep"
                      >
                        {c.name}
                      </Link>
                      <a
                        href={cta.href}
                        rel={cta.rel}
                        target="_blank"
                        className="mt-2 block text-[11px] text-steel-500 hover:text-vermilion"
                      >
                        公式サイト ↗
                      </a>
                    </td>
                    <td>
                      {fmt(c.methods)}
                      <br />
                      <span className="text-xs text-steel-500">エリア: {fmt(c.area)}</span>
                    </td>
                    <td>{fmt(c.target)}</td>
                    <td>{feeSummary(c)}</td>
                    <td>{kitSummary(c)}</td>
                    <td>{fmt(c.nyukin)}</td>
                    <td>{fmt(c.cancel)}</td>
                    <td>{fmt(c.broken)}</td>
                    <td>{fmt(c.ihin)}</td>
                    <td>
                      {c.operator.name}
                      <br />
                      <span className="text-xs text-steel-500">
                        古物商: {fmt(c.operator.kobutsu)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <h2 className="section-title mt-14 mb-4">一括査定・価格比較サービス</h2>
        <p className="mb-4 max-w-3xl text-sm leading-loose text-steel-600">
          以下は、カメラを直接買い取るサービスではなく、複数の買取店へ一括で査定を依頼したり、買取価格を比較したりするためのサービスです。仕組みが買取業者とは異なるため、別表で掲載しています。
        </p>
        <div className="overflow-x-auto border border-chalk-line">
          <table className="spec-table min-w-[960px]">
            <thead>
              <tr>
                <th className="min-w-[9rem]">名称</th>
                <th className="min-w-[12rem]">サービス形態</th>
                <th className="min-w-[12rem]">対象</th>
                <th className="min-w-[8rem]">利用料</th>
                <th className="min-w-[14rem]">流れ</th>
                <th className="min-w-[13rem]">運営会社</th>
              </tr>
            </thead>
            <tbody>
              {platformCompanies.map((c) => {
                const cta = ctaFor(c);
                return (
                  <tr key={c.slug}>
                    <td>
                      <Link
                        href={`/kaitori/${c.slug}/`}
                        className="font-display text-base text-vermilion underline underline-offset-4 hover:text-vermilion-deep"
                      >
                        {c.name}
                      </Link>
                      <a
                        href={cta.href}
                        rel={cta.rel}
                        target="_blank"
                        className="mt-2 block text-[11px] text-steel-500 hover:text-vermilion"
                      >
                        公式サイト ↗
                      </a>
                    </td>
                    <td>{serviceTypeOf(c)}</td>
                    <td>{fmt(c.target)}</td>
                    <td>{fmt(c.hiyou.satei)}</td>
                    <td>{fmt(c.methods)}</td>
                    <td>
                      {c.operator.name}
                      <br />
                      <span className="text-xs text-steel-500">
                        古物商: {fmt(c.operator.kobutsu)}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-steel-500">
          ※ 表は横にスクロールできます。表中の「公式では確認できず」は、{checkedLabelAll()}時点の当サイトの調査で、公式サイト上に該当する記載を確認できなかったことを示します（サービスが存在しないという意味ではありません）。
        </p>

        <section className="mt-14 grid gap-4 md:grid-cols-2">
          <div className="border border-chalk-line bg-chalk-card p-6">
            <h2 className="font-display text-lg text-steel-900">
              種類・状況別の比較
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link className="text-vermilion underline underline-offset-4" href="/film/">フィルムカメラの買取</Link></li>
              <li><Link className="text-vermilion underline underline-offset-4" href="/old-lens/">オールドレンズの買取</Link></li>
              <li><Link className="text-vermilion underline underline-offset-4" href="/digital/">デジタル一眼・ミラーレスの買取</Link></li>
              <li><Link className="text-vermilion underline underline-offset-4" href="/broken/">壊れたカメラ・ジャンク・カビありレンズの売却</Link></li>
              <li><Link className="text-vermilion underline underline-offset-4" href="/situation/ihin/">遺品・実家整理で出てきたカメラの売却</Link></li>
            </ul>
          </div>
          <div className="flex flex-col justify-center border border-chalk-line bg-steel-800 p-6 text-chalk">
            <h2 className="font-display text-lg">出張買取とクーリングオフ</h2>
            <p className="mt-3 text-[13px] leading-relaxed text-steel-200">
              自宅で査定・買取を行う出張買取は、一般に特定商取引法の「訪問購入」に該当し、クーリングオフ制度の対象とされています。仕組みと相談先は、トラブル対処ガイドでご説明しています。
            </p>
            <Link href="/guide/trouble/" className="btn-primary mt-5 self-start text-sm">
              カメラ買取のトラブル対処法
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
