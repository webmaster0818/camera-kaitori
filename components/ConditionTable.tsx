import Link from "next/link";
import { Company, fmt, formatChecked } from "@/lib/companies";

/** カテゴリハブ用：買取方法・故障/カビの扱い・キャンセル時の返送料を公式記載の要約で並べる表 */
export default function ConditionTable({ rows, brokenLabel }: { rows: Company[]; brokenLabel: string }) {
  return (
    <>
      <div className="overflow-x-auto border border-chalk-line">
        <table className="spec-table">
          <thead>
            <tr>
              <th className="w-32 md:w-40">業者</th>
              <th>買取方法</th>
              <th>{brokenLabel}</th>
              <th>キャンセル時の返送料</th>
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
                <td className="text-[13px]">{fmt(c.methods)}</td>
                <td className="text-[13px]">{fmt(c.broken)}</td>
                <td className="text-[13px]">{fmt(c.hiyou.hensou)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-steel-500">
        ※ 横にスクロールできます。各社公式サイトの記載を要約したもので、確認日は各社の欄に記載しています。条件は変更される場合があるため、申込前に各社公式サイトで最新の内容をご確認ください。
      </p>
    </>
  );
}
