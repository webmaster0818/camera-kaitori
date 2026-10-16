import Link from "next/link";
import { companies, categories } from "@/lib/companies";
import { SITE_NAME, SITE_TAGLINE, OPERATOR } from "@/lib/site";

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <p className="mb-3 font-display text-sm tracking-widest text-chalk">{title}</p>
      <ul className="space-y-2 text-[13px]">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-steel-300 transition-colors hover:text-chalk"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="mt-20 bg-steel-900 text-steel-200">
      <div className="mx-auto max-w-site px-4 py-14">
        <div className="mb-10 flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-4 w-4 bg-vermilion" />
          <p className="font-display text-lg tracking-widest text-chalk">{SITE_NAME}</p>
          <p className="ml-3 hidden text-xs text-steel-400 sm:block">{SITE_TAGLINE}</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          <FooterCol
            title="カテゴリ別の買取情報"
            links={[
              ...categories.map((c) => ({ href: c.path, label: c.name })),
              { href: "/compare/", label: "掲載サービスの比較表" },
              { href: "/shindan/", label: "売り方診断（4問）" },
            ]}
          />
          <FooterCol
            title="業者別の公式確認情報"
            links={companies.map((c) => ({
              href: `/kaitori/${c.slug}/`,
              label: c.name,
            }))}
          />
          <FooterCol
            title="状況別の売却ガイド"
            links={[
              { href: "/guide/kachi-mikata/", label: "フィルムカメラ・オールドレンズの価値の見分け方" },
              { href: "/guide/uru-mae/", label: "カメラ・レンズを売る前の準備" },
              { href: "/guide/erabikata/", label: "専門店・総合・出張の使い分け" },
              { href: "/guide/trouble/", label: "カメラ買取のトラブル対処法とクーリングオフ" },
              { href: "/situation/ihin/", label: "遺品・実家整理で出てきたカメラの売却" },
              { href: "/situation/tairyou/", label: "カメラ・レンズを大量に売る方法" },
            ]}
          />
          <FooterCol
            title="当サイトについて"
            links={[
              { href: "/about/", label: "運営者情報" },
              { href: "/content-policy/", label: "コンテンツ制作ポリシー" },
              { href: "/terms/", label: "利用規約" },
              { href: "/privacy/", label: "プライバシーポリシー" },
            ]}
          />
          <div>
            <p className="mb-3 font-display text-sm tracking-widest text-chalk">運営</p>
            <p className="text-[13px] leading-relaxed text-steel-300">
              {OPERATOR.name}
              <br />
              {OPERATOR.address}
            </p>
            <p className="mt-4 text-xs leading-relaxed text-steel-400">
              掲載するサービス情報は、各社の公式サイトで一次確認した内容に限定し、確認日を記載しています。口コミ・体験談の創作は行いません。
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-steel-700 pt-6 text-xs text-steel-400">
          <p>
            本サイトはプロモーション（PR）を含みます。掲載内容は、確認日時点の各社公式サイトの記載にもとづいています。買取価格や条件は変動するため、ご利用前に各社公式サイトにて最新情報をご確認ください。
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} {OPERATOR.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
