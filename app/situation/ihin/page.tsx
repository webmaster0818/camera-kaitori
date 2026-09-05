import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, PUBLISHED_DATE } from "@/lib/site";

const TITLE = "遺品・実家整理で出てきたカメラを売るには｜捨てる前の確認点と出張買取の使い方";
const DESC =
  "遺品整理や実家の片付けで出てきたフィルムカメラ・レンズ・撮影機材を、捨てる前にどう扱えばよいかを一般知識として整理。相続人の合意や形見分けとの線引き、故人の写真データ・未現像フィルムの扱い、本体・レンズ・付属品の仕分け手順、持ち込めない量のときの出張買取の使い方、遺品整理業者との違いをまとめました。";
const PATH = "/situation/ihin/";

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

export default function IhinSituationPage() {
  const conclusions = [
    "古いカメラやレンズは「古いから価値がない」とは限りません。フィルムカメラやオールドレンズは、製造年が古くても評価の対象になりうるとされています。まず捨てないことが出発点です。",
    "動作確認ができなくても、「動作未確認」と申告したうえで査定に出すことは一般に可能です。自分で無理に動かそうとして状態を悪くするより、そのままの状態で見てもらう方が安全です。",
    "遺品ならではの確認点があります。相続人全員の合意、形見分けとの線引き、そして故人の写真データや未現像フィルムの扱いです。メモリーカードやフィルムは機材から抜いて手元に残します。",
    "持ち込めない量なら、出張買取という選択肢があります。自宅での買取には一般にクーリングオフの制度が適用される場合があるとされており、詳細はトラブル対処のガイドで整理しています。",
    "処分と買取は別の仕事です。遺品整理業者に一括で依頼する場合でも、カメラ類は買取の専門業者に別途見てもらう選択肢を持っておくと判断の幅が広がります。",
  ];

  const whyKeep = [
    {
      t: "フィルムカメラ・オールドレンズは古さが減点になるとは限らない",
      d: "デジタル機器は新しいほど評価されやすいのに対し、フィルムカメラや旧規格のレンズは、製造年よりも機種・レンズの種類・状態・希少性で見られるのが一般的です。外観が古びていても、内部の状態や写りの特性が評価されるケースがあるとされています。一見して「ガラクタ」に見えるものほど、専門の目で見てもらう価値があります。",
    },
    {
      t: "動作未確認でも申告して出せる",
      d: "遺品の場合、電池が入っていない、巻き上げが固い、シャッターが切れるか分からない、という状態が普通です。無理に電池を入れて通電したり、固い部分を力で動かしたりすると、かえって状態を悪くすることがあります。「動作未確認」「長期間保管されていた」と正直に申告して査定に出すのが一般的な対応です。故障品やジャンクの扱いについては、壊れた・ジャンク品のページでも整理しています。",
    },
    {
      t: "レンズ・アクセサリ単体でも評価対象になる",
      d: "本体が見当たらなくても、レンズ・ファインダー・フード・フィルター・ストロボ・三脚などが単体で査定対象になる場合があります。本体とセットでなければ意味がないと思い込んで処分してしまうのが、遺品整理でよくある失敗の一つです。",
    },
    {
      t: "箱・取扱説明書・保証書・ケースも一緒に残す",
      d: "元箱や革ケース、取扱説明書、当時の保証書や購入記録は、機材そのものではありませんが、付属品として査定の材料になることがあります。押し入れの奥や別の部屋から出てくることも多いため、片付けの初期に捨ててしまわないよう注意が必要です。",
    },
  ];

  const ihinRows = [
    {
      label: "相続人全員の合意",
      value:
        "遺品は一般に相続財産の一部として扱われ、処分や売却には相続人の合意が必要になると考えられています。家族の一人が善意で片付けたつもりでも、後から「勝手に売った」と揉める原因になりえます。誰が窓口になるか、売却に反対する人がいないかを、作業を始める前に確認しておくのが無難です。法的な扱いに不安がある場合は専門家に相談してください。",
    },
    {
      label: "形見分けとの線引き",
      value:
        "故人が長年使っていたカメラは、金銭的な価値とは別に、家族にとっての思い出の品です。「売るもの」「形見として残すもの」「まだ決めないもの」の三つに分け、決めないものは保留の箱に入れておく考え方が現実的です。一度売却すると取り戻せないため、迷うものは急いで判断しない方が後悔が少なくなります。",
    },
    {
      label: "故人の写真データ",
      value:
        "デジタルカメラの本体にはメモリーカードが入ったままになっていることが多く、内蔵メモリに写真が残っている機種もあります。メモリーカードは必ず抜き取り、家族の手元に残します。内蔵メモリのある機種は、可能であれば内容を確認・保存してから初期化するのが一般的な対応です。写真データは故人の記録であると同時に、写っている人のプライバシーにも関わります。",
    },
    {
      label: "未現像フィルム・撮影済みフィルム",
      value:
        "フィルムカメラの中に撮影途中のフィルムが入っていることがあります。裏ぶたを開けると感光して写真が消えてしまうため、開ける前にフィルムカウンターや巻き戻しの状態を確認します。判断がつかない場合は、開けずに写真店やフィルム現像を扱う店舗に相談する方法があります。撮影済みのフィルムやネガ・ポジも、機材とは別に保管します。",
    },
    {
      label: "名前・住所が書かれたもの",
      value:
        "ケースの内側や取扱説明書の裏に、故人の氏名・住所・電話番号が書かれていることがあります。売却前に確認し、消せるものは消し、消せないものは外して手元に残すか、申告のうえで業者に処理を依頼するかを判断します。",
    },
  ];

  const sortSteps = [
    {
      t: "まず全部を一か所に集めて写真を撮る",
      d: "押し入れ、書斎、物置、車のトランクなど、複数の場所から機材が出てくることが珍しくありません。見つけたものを一か所に集め、全体が分かる写真を撮っておきます。この写真は相続人同士で共有する資料になり、後から「あれはどこに行った」という混乱を防ぎます。",
    },
    {
      t: "本体・レンズ・アクセサリ・箱と書類の四つに分ける",
      d: "カメラ本体、レンズ、アクセサリ（フード・フィルター・ストロボ・三脚・バッグなど）、箱と書類（元箱・取扱説明書・保証書・購入記録）に分けます。この段階では価値の判断はしません。分類するだけで、査定を依頼するときに何を何点持っているかを伝えやすくなります。",
    },
    {
      t: "一点ずつ写真を撮り、見えている情報を書き出す",
      d: "本体の正面と上面、レンズの前玉側と銘板、それぞれの型番が読める部分を撮っておきます。メーカー名、型番、レンズなら焦点距離と明るさの表記を、読める範囲でメモします。読み方が分からなくても、写真があれば後で調べたり、業者に写真を送って相談したりできます。",
    },
    {
      t: "「分からないもの」は捨てずに別の箱へ",
      d: "何のための部品か分からないアダプター、用途不明のリング、小さな金属のパーツなどは、専門の人が見ると重要なアクセサリだと分かることがあります。「分からないもの」の箱を作り、判断は査定の場に持ち越します。捨てるのは最後でも間に合いますが、捨てた後で価値が分かっても取り戻せません。",
    },
    {
      t: "状態を触りすぎない",
      d: "レンズのカビやくもりを自分で拭こうとしたり、固くなった部分に油を差したりするのは避けた方が無難です。素人の手入れが状態を悪化させることがあり、査定の場で「手を加えた形跡」として扱われる可能性もあります。ほこりを軽く払う程度にとどめ、あとは現状のまま見てもらいます。",
    },
    {
      t: "メモリーカード・電池・フィルムを抜く",
      d: "メモリーカードは家族の手元に残します。液漏れした電池が入っている場合は、安全のために取り出しておきます（液が付着している場合は素手で触らないようにします）。フィルムは前述のとおり、撮影途中の可能性を確認してから扱います。",
    },
  ];

  const shucchou = [
    {
      t: "持ち込めない量・重さなら出張買取を検討する",
      d: "遺品のカメラは、本体が数台にレンズが十数本、三脚やバッグまで含めると、車がなければ運べない量になることがあります。実家が遠方で片付けの日程が限られている場合も、その場で見てもらえる出張買取は現実的な選択肢です。出張の対応エリア・出張料の有無・対応する品目は業者ごとに異なるため、事前に公式サイトで確認します。",
    },
    {
      t: "訪問購入にはクーリングオフの制度がある",
      d: "業者が自宅を訪問して物品を買い取る「訪問購入」には、一般に特定商取引法に基づくクーリングオフの制度が適用される場合があるとされています。契約書面を受け取ってから一定の期間内であれば、理由を問わず契約を解除できるとされ、その期間中は物品の引き渡しを拒める仕組みも設けられていると理解されています。ただし、適用対象や例外は法律で細かく定められているため、実際の判断は最新の制度と業者の書面を確認してください。トラブル時の考え方はトラブル対処のガイドで整理しています。",
    },
    {
      t: "依頼していない品目の査定を求められたら断ってよい",
      d: "カメラの査定を依頼したのに、貴金属や時計など別の品目を見せるよう求められるケースが問題になることがあると言われています。依頼した品目以外の査定は断って構いません。作業に立ち会う家族を二人以上にする、その場で即決を迫られても「相続人と相談する」と持ち帰る、といった対応をあらかじめ決めておくと安心です。",
    },
    {
      t: "宅配買取を組み合わせる",
      d: "軽量なレンズや小型のカメラだけを先に宅配買取で送り、大きな三脚や重い機材は出張で見てもらう、という組み合わせも考えられます。宅配買取は自宅から送るだけで済む一方、梱包の手間と輸送中の破損リスクがあります。量・重さ・日程に合わせて、一つの方法にこだわらず選びます。",
    },
  ];

  const multiCompany = [
    {
      t: "一社の「一式でこの金額」を鵜呑みにしない",
      d: "遺品の機材はまとめて「一式」として提示されることがあります。内訳が分からないと、どの機材が評価されて、どの機材が評価されていないのかが見えません。可能であれば、点数ごとの内訳を出してもらい、評価が低いものの理由を聞きます。内訳の見方は買取価値の見方のガイドで整理しています。",
    },
    {
      t: "得意分野が違う業者に聞く",
      d: "フィルムカメラやオールドレンズに強い業者と、現行のデジタル機材を中心に扱う業者では、同じ品物でも評価の観点が変わりうると考えられています。故人の機材がフィルム中心なら、フィルムカメラの取り扱いを明記している業者に聞く方が、話が通じやすくなります。",
    },
    {
      t: "写真とリストで先に聞いてから、実物を出す",
      d: "仕分けの段階で撮った写真とメモがあれば、複数の業者に同じ情報を送って、対応の可否や査定の方針を先に聞くことができます。すべての業者に実物を運ぶ必要はなく、対応が丁寧で条件が明確なところに絞ってから実物を見てもらう流れが、家族の負担を減らします。",
    },
  ];

  const seiriDiff = [
    {
      t: "遺品整理業者の仕事は「片付けと処分」",
      d: "遺品整理業者は、家全体の片付け、仕分け、不用品の搬出と処分、清掃などを引き受ける事業者です。買取を併せて行う事業者もありますが、カメラやレンズの専門的な評価が本業ではないのが一般的です。カメラ類も「まとめて引き取り」の中に含まれてしまい、個別に評価されないまま処分されることがありえます。",
    },
    {
      t: "カメラ買取業者の仕事は「評価と買取」",
      d: "カメラ買取業者は、機材の機種・状態・付属品を個別に評価して買い取ることが本業です。家の片付け全体を引き受けるわけではなく、対象となる品目も限られます。片付けの一部としてカメラが出てきたなら、その部分だけを切り出して専門の業者に見てもらう、という考え方が両者の違いを踏まえた使い分けです。",
    },
    {
      t: "「処分費用がかからない」と「価値が評価される」は別",
      d: "遺品整理の見積もりで「カメラは無料で引き取ります」と言われると、処分費用がかからない点で得をしたように感じます。しかし、それは価値が評価されたことを意味しません。無料引き取りと買取を分けて考え、買取の可能性があるものは別に扱うのが、遺品の機材を活かす基本的な考え方です。",
    },
    {
      t: "古物商の許可の確認",
      d: "中古品を買い取る事業者は、一般に古物営業法に基づく許可を受けている必要があるとされています。買取を行う業者の公式サイトや店舗の表示で、古物商許可の番号が確認できるかを見ておきます。遺品整理業者が買取も行う場合も、同じ観点で確認します。",
    },
  ];

  const checklist = [
    "相続人の間で、カメラ類を売却してよいか、誰が窓口になるかを確認した",
    "形見として残すもの・売るもの・保留するものを分け、保留の箱を作った",
    "デジタルカメラのメモリーカードを抜き取り、内蔵メモリの写真を確認・保存した",
    "フィルムカメラの裏ぶたを開ける前に、撮影途中のフィルムが入っていないか確認した",
    "本体・レンズ・アクセサリ・箱と書類の四つに仕分けし、全体と一点ずつの写真を撮った",
    "メーカー名・型番・レンズの表記を読める範囲でメモした",
    "用途が分からないものも捨てずに「分からないもの」の箱に入れた",
    "レンズを拭く・油を差すなどの手入れをせず、現状のまま残した",
    "液漏れした電池を安全に取り出した",
    "氏名・住所などが書かれたケースや書類を確認し、必要なものは外した",
    "出張買取を使う場合、対応エリア・出張料・対象品目・クーリングオフの記載を公式サイトで確認した",
    "訪問時は家族二人以上で立ち会い、依頼した品目以外の査定は断ると決めた",
    "「一式いくら」ではなく点数ごとの内訳を出してもらうよう依頼した",
    "遺品整理業者の「無料引き取り」と、専門業者の買取を分けて考えた",
  ];

  const faqs = [
    {
      q: "何十年も前のフィルムカメラです。古すぎて売れないのではありませんか？",
      a: "フィルムカメラやオールドレンズは、製造年の古さがそのまま減点になるとは限らないとされています。機種・レンズの種類・状態・希少性で見られるのが一般的で、専門の業者に見てもらうまで価値の有無は判断できません。捨てる前に、写真を撮って相談することをおすすめします。",
    },
    {
      q: "動くかどうか分かりません。動作確認をしてから出すべきですか？",
      a: "無理に動かす必要はありません。電池を入れて通電したり、固い部分を力で動かしたりすると、状態を悪くすることがあります。「動作未確認」「長期間保管されていた」と正直に申告して査定に出すのが一般的な対応です。故障品やジャンクの扱いは、壊れた・ジャンク品のページも参考にしてください。",
    },
    {
      q: "カメラの中に写真データやフィルムが残っていたらどうすればよいですか？",
      a: "メモリーカードは必ず抜き取り、家族の手元に残します。内蔵メモリのある機種は、可能であれば内容を保存してから初期化します。フィルムカメラは、撮影途中のフィルムが入っていると裏ぶたを開けた時点で感光してしまうため、開ける前にカウンターや巻き戻しの状態を確認し、判断がつかない場合は写真店などに相談する方法があります。",
    },
    {
      q: "遺品整理業者に「カメラは無料で引き取る」と言われました。任せてよいですか？",
      a: "無料引き取りは処分費用がかからないという意味であり、価値が評価されたことを意味しません。遺品整理業者の本業は片付けと処分で、カメラの専門的な評価は本業ではないのが一般的です。買取の可能性があるものは、カメラ買取の専門業者に別途見てもらう選択肢を持っておくことをおすすめします。",
    },
    {
      q: "出張買取で売った後に、家族から「売ってほしくなかった」と言われました。取り消せますか？",
      a: "自宅で業者に買い取ってもらう訪問購入には、一般に特定商取引法に基づくクーリングオフの制度が適用される場合があるとされています。契約書面を受け取ってから一定の期間内であれば契約を解除できるとされていますが、適用対象や例外は法律で定められているため、業者から受け取った書面と最新の制度を確認し、必要なら消費生活センターなどに相談してください。売却前に相続人の合意を取っておくことが、こうしたトラブルを防ぐ基本です。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "遺品・実家整理で出てきたカメラを売るには", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">INHERITED CAMERAS</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          遺品・実家整理で出てきたカメラを売るには｜捨てる前の確認点と出張買取の使い方
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          遺品整理や実家の片付けで、押し入れからカメラやレンズが出てきた。動くかどうか分からない、何の機材かも分からない、量が多くて運べない。このページでは、まず捨てない方がよい理由、遺品ならではの確認点（相続人の合意・形見分け・故人の写真データや未現像フィルムの扱い）、仕分けの手順、持ち込めない量のときの出張買取の使い方、複数社に聞く考え方、遺品整理業者との違いを、一般知識として整理します。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">先に結論</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* まず捨てない理由 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">まず捨てない方がよい理由</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            遺品整理では「古い」「動くか分からない」「何か分からない」の三つの理由で、機材が処分されてしまいがちです。しかしカメラとレンズは、この三つのどれも、捨てる理由としては十分ではありません。
          </p>
          <div className="space-y-4">
            {whyKeep.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/film/" className="btn-primary">フィルムカメラの買取を見る</Link>
            <Link href="/old-lens/" className="btn-ghost">オールドレンズの買取を見る</Link>
          </div>
        </section>

        {/* 遺品ならではの確認点 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">遺品ならではの確認点</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            自分の機材を売るときと違い、遺品には「誰のものか」「誰が決めるか」「中に何が残っているか」という確認が必要です。作業を始める前に、次の点を確認しておきます。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {ihinRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 相続や遺産分割に関する記述は一般的な考え方の整理であり、法的助言ではありません。個別の事情については弁護士・司法書士などの専門家にご相談ください。
          </p>
        </section>

        {/* 仕分けの手順 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">仕分けの手順</h2>
          <div className="space-y-5">
            {sortSteps.map((s, i) => (
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
            <Link href="/broken/" className="btn-ghost">壊れた・ジャンク品の扱いを見る</Link>
          </div>
        </section>

        {/* 出張買取 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">持ち込めない量なら出張買取という選択肢</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            遺品の機材は量が多く、実家が遠方であることも珍しくありません。店頭に持ち込めない場合の選択肢と、自宅で買取を受けるときに知っておきたい制度を整理します。
          </p>
          <div className="space-y-5">
            {shucchou.map((s, i) => (
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
            ※ クーリングオフの適用対象・期間・例外は法令で定められています。ここでの記述は一般的な整理であり、個別の契約については業者から受け取った書面と最新の制度をご確認ください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/trouble/" className="btn-primary">トラブル時の対処を見る</Link>
            <Link href="/compare/" className="btn-ghost">出張対応を比較表で見る</Link>
          </div>
        </section>

        {/* 複数社に聞く */}
        <section className="mt-14">
          <h2 className="section-title mb-6">複数社に聞く考え方</h2>
          <div className="space-y-4">
            {multiCompany.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/erabikata/" className="btn-primary">業者の選び方を見る</Link>
            <Link href="/guide/kachi-mikata/" className="btn-ghost">買取価値の見方を見る</Link>
          </div>
        </section>

        {/* 遺品整理業者との違い */}
        <section className="mt-14">
          <h2 className="section-title mb-2">遺品整理業者との違い（処分と買取は別）</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            家全体の片付けを遺品整理業者に依頼する場合でも、カメラ類の扱いは分けて考えることができます。両者の役割の違いを整理します。
          </p>
          <div className="space-y-4">
            {seiriDiff.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-6">遺品のカメラを売る前のチェックリスト</h2>
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
          <h2 className="section-title mb-6">遺品のカメラ買取でよくある質問</h2>
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
              <Link href="/situation/tairyou/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ・レンズを大量に売るには</span>
                <span className="mt-1 block text-xs text-steel-500">コレクション・機材一式・まとめ売りの進め方</span>
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
                <span className="mt-1 block text-xs text-steel-500">データ削除と付属品の確認</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・ジャンク・カビありを売る</span>
                <span className="mt-1 block text-xs text-steel-500">動作未確認の申告のコツ</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">出張対応・遺品対応・返送料を同じ物差しで</span>
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
                <span className="mt-1 block text-xs text-steel-500">仕分け・写真・申告の一般的な手順</span>
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
