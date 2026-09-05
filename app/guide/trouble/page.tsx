import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, PUBLISHED_DATE } from "@/lib/site";

const TITLE = "カメラ買取のトラブル対処法｜出張買取のクーリングオフ・減額・返送トラブルの相談先";
const DESC =
  "カメラ・レンズの買取で起こりやすいトラブル（査定後の減額、契約後の返品不可、出張買取での強引な勧誘、口頭と書面の査定額の違い、返送料の負担）と、その対処法を一般知識として解説します。出張買取は特定商取引法の「訪問購入」に該当し、原則として契約書面の受領日から8日間のクーリングオフ制度があること、その期間中は物品の引き渡しを拒めること、宅配買取・店頭買取は一般に対象外となることを整理し、契約前に確認する書面事項、消費者ホットライン188・国民生活センター・消費生活センター・警察相談専用電話#9110といった相談先、証拠の残し方、遺品を売るときの注意、チェックリストをまとめました。";
const PATH = "/guide/trouble/";

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

export default function TroubleGuidePage() {
  const conclusions = [
    "カメラ買取のトラブルは「査定後の減額」「契約後に返してもらえない」「出張買取での強引な勧誘」「口頭の査定額と書面の違い」「返送料の負担」の5つの型にほぼ収まります。型を知っておくと、起きたときに慌てず対処できます。",
    "業者が自宅に来て買い取る出張買取は、一般に特定商取引法の「訪問購入」に該当し、原則として契約書面を受け取った日から8日間はクーリングオフができる制度があるとされています。また、その期間中は業者に物品の引き渡しを拒むことができ、業者はそのことを告げる義務があるとされています。",
    "自分から申し込んで送る宅配買取や、自分で店舗に持ち込む店頭買取は、一般に訪問購入にはあたらないとされ、クーリングオフの対象外となるのが一般的です。この場合は業者の規約に定められたキャンセル条件が基本になります。",
    "困ったときは消費者ホットライン188に電話すると最寄りの消費生活センターにつながります。盗難品が関わるおそれがある場合は警察相談専用電話#9110も相談先になります。写真・書面・メールを残しておくと相談が速く進みます。",
  ];

  const patterns = [
    {
      t: "査定後の減額",
      d: "宅配買取で事前見積もり（仮査定）を受けたあと、実機を見た査定で金額が下がる型です。傷・カビ・くもり・動作不良・付属品不足など申告と実際の状態が違えば減額されるのが通常ですが、理由が示されない減額や、根拠のあいまいな減額に応じる必要はありません。理由の説明を求め、納得できなければキャンセルして返送を依頼するのが基本の対処です。",
    },
    {
      t: "契約後の返品不可・返してもらえない",
      d: "「承諾したつもりはないのに買取が成立したことになっている」「返送を頼んだのに戻ってこない」という型です。宅配買取では「連絡がなければ自動承諾」となる期限が規約に定められていることがあり、期限を過ぎると返品できないのが一般的です。査定結果の連絡を見逃さないこと、承諾の意思表示がどの時点で成立するのかを規約で確認しておくことが予防策になります。",
    },
    {
      t: "出張買取での強引な勧誘",
      d: "「査定だけ」のつもりで呼んだのに、その場で契約を迫られる、帰ってもらえない、頼んでいない品（貴金属など）の査定を求められる、という型です。訪問購入では、消費者が求めていない品について勧誘することは制限されているとされています。契約する意思がないことをはっきり伝え、それでも居座る場合は警察への相談も選択肢です。契約してしまった場合も、後述のクーリングオフ制度が使える可能性があります。",
    },
    {
      t: "査定額の口頭と書面の違い",
      d: "電話や訪問時に口頭で伝えられた金額と、契約書面や振込額が違う型です。口頭の説明は記録に残りにくく、あとから「そんな話はしていない」となりがちです。金額・内訳・条件は必ず書面（またはメール）で受け取り、口頭で言われた内容と一致しているかをその場で確認します。一致しない場合は署名せず、持ち帰って検討する姿勢が大切です。",
    },
    {
      t: "返送料の負担",
      d: "宅配買取をキャンセルしたら返送料が自己負担で、査定額より返送料の方が高くつく、という型です。返送料の負担は業者によって異なり、業者負担・自己負担・条件付きと分かれます。申込前に規約で確認しておかないと、実質的にキャンセルできない状況になります。",
    },
  ];

  const coolingRows = [
    {
      label: "出張買取と「訪問購入」",
      value:
        "業者が消費者の自宅などを訪れ、その場で物品を買い取る取引は、一般に特定商取引法の「訪問購入」に該当するとされています。カメラやレンズの出張買取もこれにあたるのが通常です。訪問購入では、業者に対して契約内容を記した書面の交付や、勧誘に関する一定のルールが定められているとされています。",
    },
    {
      label: "クーリングオフの期間",
      value:
        "訪問購入では、消費者が契約書面を受け取った日から起算して原則8日間、書面または電磁的記録によって無条件で契約を解除できる制度があるとされています。業者が事実と違うことを告げたり、威迫したりしてクーリングオフを妨げた場合は、期間が延びる扱いになることがあるとされています。",
    },
    {
      label: "引き渡しの拒否",
      value:
        "クーリングオフの期間中は、消費者は買い取られた物品の引き渡しを拒むことができるとされています。あわせて、業者は物品の引き渡しを受けるときに、消費者が引き渡しを拒めることを告げる義務があるとされています。「今日持ち帰らないと契約できない」と言われても、期間中は渡さない選択ができるのが制度の趣旨です。",
    },
    {
      label: "対象外となる場合",
      value:
        "消費者が自分から業者に来訪を求めた場合や、一部の物品については訪問購入の規定が適用されない場合があるとされています。ただし、どのような場合に対象外となるかは個別の事情によるため、自己判断せず消費生活センターに確認してください。",
    },
    {
      label: "宅配買取・店頭買取の扱い",
      value:
        "自分から申し込んで品を送る宅配買取や、自分で店舗に持ち込む店頭買取は、一般に訪問購入にはあたらないとされ、クーリングオフの対象外となるのが一般的です。この場合のキャンセルは業者の規約に定められた条件に従うことになるため、「クーリングオフできるから大丈夫」と考えず、申込前に規約を確認してください。",
    },
    {
      label: "クーリングオフの伝え方",
      value:
        "はがきなどの書面で通知するのが一般的で、業者名・契約日・品名・契約金額・解除する旨・自分の氏名と住所・通知日を書き、両面をコピーして控えを残し、特定記録郵便や簡易書留などの記録が残る方法で送るとされています。電子メールなどで通知できる場合もあるとされていますが、送信記録を必ず保存してください。",
    },
  ];

  const documentChecks = [
    {
      t: "業者の名称・住所・電話番号・古物商許可番号",
      d: "契約書面や公式サイトに、事業者の名称、所在地、連絡先が明記されているかを確認します。中古品を買い取る事業者は古物商の許可を受けるのが原則とされているため、許可番号と公安委員会名の表示も確認します。表示がない、または問い合わせても答えないという場合は、契約を見合わせる判断材料になります。",
    },
    {
      t: "品名・数量・買取金額の内訳",
      d: "「カメラ一式」のようなまとめ書きではなく、機種名・レンズ名・付属品ごとの内訳と金額が書かれているかを見ます。内訳がないと、あとから「その品は含まれていない」「金額の根拠が分からない」となったときに確認できません。",
    },
    {
      t: "契約日・書面の受領日",
      d: "出張買取ではクーリングオフの起算日が契約書面の受領日とされているため、日付が正しく記載されているかを確認します。日付が空欄、または実際と違う書面には署名しないでください。",
    },
    {
      t: "クーリングオフと引き渡し拒否に関する記載",
      d: "訪問購入の契約書面には、クーリングオフができること、期間中は物品の引き渡しを拒めることが記載されるのが一般的とされています。記載がない書面は、それ自体が制度上の要件を満たしていない可能性があるため、消費生活センターに相談してください。",
    },
    {
      t: "キャンセル条件・返送料・入金日",
      d: "宅配買取では、査定後にキャンセルできる期限、自動承諾の有無、返送料の負担、承諾から入金までの日数を規約で確認します。メールや申込画面のスクリーンショットを保存しておくと、あとで「規約が変わった」と言われたときに照合できます。",
    },
  ];

  const contacts = [
    {
      t: "消費者ホットライン「188（いやや）」",
      d: "全国共通の電話番号で、最寄りの消費生活センターや消費生活相談窓口につながります。「減額に納得できないのに返送してもらえない」「出張買取で強引に契約させられた」「業者と連絡が取れない」といった買取トラブル全般を相談できます。相談時は、契約書面・申込画面・やり取りの記録・品の写真を手元に用意しておくと話が速く進みます。",
    },
    {
      t: "国民生活センター",
      d: "消費生活に関する情報提供や相談を行う機関です。ウェブサイトでは訪問購入や買取サービスをめぐるトラブルの事例と注意喚起が公開されており、自分のケースに近い事例と対処の考え方を確認できます。個別の相談は188を通じて地域の窓口へつなぐのが基本です。",
    },
    {
      t: "最寄りの消費生活センター",
      d: "各自治体が設置している相談窓口で、188からつながる先でもあります。直接の電話や来所での相談を受け付けている場合があり、業者との間に入って助言やあっせんを行うことがあります。クーリングオフの通知書の書き方についても相談できます。",
    },
    {
      t: "警察相談専用電話「#9110」",
      d: "盗難が関わるおそれのある場合の相談先です。例えば、売った覚えのないカメラが買い取られていた、遺品の中に盗難品が混じっている疑いがある、出張買取の訪問者が居座って帰らない、といった場合に相談します。緊急の危険がある場合は110番です。買取の金銭的な条件をめぐる相談は、まず188の方が適しています。",
    },
  ];

  const evidenceRows = [
    {
      label: "写真・動画",
      value:
        "送る前・渡す前の品の状態を、全体・傷やカビの箇所・シリアル番号・付属品がわかるように撮影しておきます。梱包の様子や、出張買取なら業者に渡す直前の状態も残しておくと、「最初から壊れていた」と言われたときの反証になります。",
    },
    {
      label: "書面",
      value:
        "契約書・査定書・領収書・本人確認書類の控え・返送時の伝票など、受け取った書面はすべて保管します。出張買取では契約書面の受領日がクーリングオフの起算日とされているため、その日付がわかる状態で保管することが特に重要です。",
    },
    {
      label: "メール・メッセージ・申込画面",
      value:
        "事前見積もりのメール、査定結果の通知、キャンセルや返送依頼のやり取り、申込時の画面と規約はスクリーンショットで保存します。電話でのやり取りは、日時・相手の名前・話した内容をその場でメモに残しておきます。",
    },
    {
      label: "配送の記録",
      value:
        "宅配買取では発送時の追跡番号を控え、到着が確認できるまで保管します。返送を依頼した場合も、返送の追跡番号を業者から受け取っておきます。紛失や「届いていない」というトラブルのときに必要になります。",
    },
  ];

  const ihinPoints = [
    {
      t: "相続人全員の同意を先に整理する",
      d: "遺品のカメラやレンズは、一般に相続財産の一部にあたるとされています。相続人が複数いる場合、ひとりの判断で売却すると、あとから他の相続人との間でトラブルになることがあります。売る前に、誰が相続人で、売却に同意しているかを確認し、できれば書面やメッセージで残しておきます。",
    },
    {
      t: "本人確認は売る人のもの",
      d: "買取時の本人確認は、実際に売る人（依頼者）の身分証明書で行うのが一般的です。故人名義の身分証明書では手続きできないため、依頼者自身の書類を用意します。業者によっては、遺品であることを申告する欄や、追加の確認を求める場合があります。",
    },
    {
      t: "何があるか分からないまま渡さない",
      d: "遺品整理では価値の判断がつかないまま「まとめていくら」で引き取られることがあります。出張買取でも、品名と内訳のない契約書面には署名せず、少なくとも機種名の一覧を作ってから依頼します。判断に迷う品は、いったん手元に残して専門店に個別に見てもらう選択もあります。",
    },
    {
      t: "遺品整理業者と買取業者の違いを意識する",
      d: "遺品整理を請け負う業者が買取を兼ねる場合、整理料金と買取額が相殺される形になることがあります。整理と買取のそれぞれの内訳が書面で示されているかを確認し、不明瞭なら分けて依頼することも検討します。",
    },
  ];

  const checklist = [
    "業者の名称・住所・電話番号・古物商許可番号が公式サイトや書面で確認できる",
    "出張買取の場合、契約書面にクーリングオフと引き渡し拒否に関する記載があり、日付が正しい",
    "宅配買取の場合、キャンセル期限・自動承諾の有無・返送料の負担を規約で確認した",
    "口頭で伝えられた査定額と書面（メール）の金額・内訳が一致している",
    "品の状態・シリアル番号・付属品を渡す前に撮影した",
    "申込画面・規約・査定結果のメールをスクリーンショットで保存した",
    "宅配買取では発送の追跡番号を控えた",
    "遺品の場合、相続人の同意を確認し、品の一覧を作った",
    "頼んでいない品の査定を求められたら断る、と決めている",
    "困ったときの相談先（188・#9110）を控えている",
  ];

  const faqs = [
    {
      q: "出張買取で契約したあと、やっぱりやめたいと思いました。取り消せますか？",
      a: "業者が自宅に来て買い取る出張買取は、一般に特定商取引法の「訪問購入」に該当するとされ、契約書面を受け取った日から原則8日間はクーリングオフができる制度があるとされています。書面（はがきなど）で通知し、控えと送付記録を残してください。すでに品を渡してしまった場合の扱いや、対象外となる場合の判断は個別の事情によるため、消費者ホットライン188または最寄りの消費生活センターに相談してください。",
    },
    {
      q: "宅配買取で減額されました。クーリングオフできますか？",
      a: "自分から申し込んで品を送る宅配買取は、一般に訪問購入にはあたらないとされ、クーリングオフの対象外となるのが一般的です。この場合は業者の規約に定められたキャンセル条件に従います。減額の理由を確認し、納得できなければ期限内にキャンセルして返送を依頼してください。返送料の負担は業者によって異なるため、規約の記載を確認します。規約どおりに対応してもらえない場合は188に相談できます。",
    },
    {
      q: "出張買取の業者が「今日持ち帰らないと契約できない」と言います。渡さないといけませんか？",
      a: "訪問購入では、クーリングオフの期間中は消費者が物品の引き渡しを拒むことができるとされ、業者にはそのことを告げる義務があるとされています。渡さない選択は制度上認められているのが一般的です。その場で契約を迫られて不安な場合は、契約自体を見合わせ、帰ってもらってから消費生活センターに相談してください。居座って帰らない場合は警察への相談も選択肢です。",
    },
    {
      q: "口頭で聞いた査定額と振込額が違いました。どうすればいいですか？",
      a: "まず業者に書面やメールで差額の理由を確認し、回答も書面で受け取ってください。口頭の説明だけでは証拠が残らないため、電話の場合は日時と内容をメモに残します。契約書面や査定結果のメールに記載された金額と振込額が違うのであれば、その書面を根拠に是正を求め、応じない場合は188に相談してください。",
    },
    {
      q: "遺品のカメラを売ったら、他の親族から「勝手に売った」と言われました。",
      a: "遺品は一般に相続財産の一部とされ、相続人が複数いる場合はひとりの判断で処分すると親族間のトラブルになることがあります。すでに売却した場合は、契約書面と買取額の内訳を親族に開示し、話し合うのが基本です。話し合いで解決しない場合は、法的な相談窓口に相談してください。今後売る場合は、事前に相続人全員の同意を書面やメッセージで残しておくことをおすすめします。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "カメラ買取のトラブル対処法", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">TROUBLESHOOTING AND COOLING-OFF</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          カメラ買取のトラブル対処法｜出張買取のクーリングオフ・減額・返送トラブルの相談先
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          カメラやレンズの買取は、宅配・出張・店頭のどの方法でも、ほとんどは問題なく終わります。ただ、査定後の減額や返送料、出張買取での強引な勧誘といったトラブルは一定の型があり、型を知っているかどうかで対処の速さが変わります。このページでは、よくあるトラブルの型と対処法、出張買取に関係するクーリングオフ制度の考え方、契約前に確認する書面事項、相談先、証拠の残し方、遺品を売るときの注意を、一般知識として整理します。法制度に関する記述は一般的な整理であり、個別のケースは相談窓口で確認してください。
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

        {/* トラブルの型 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">よくあるトラブルの5つの型と対処法</h2>
          <div className="space-y-5">
            {patterns.map((p, i) => (
              <div key={p.t} className="border border-chalk-line bg-chalk-card p-5">
                <h3 className="flex items-baseline gap-3 font-display text-base text-steel-900">
                  <span className="font-display text-sm tracking-widest2 text-vermilion">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {p.t}
                </h3>
                <p className="mt-3 text-[13px] leading-loose text-steel-700">{p.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 減額・キャンセル・返送料の具体的な条件は業者によって異なります。申込前に規約を確認し、疑問点は問い合わせて書面で回答をもらってください。
          </p>
        </section>

        {/* クーリングオフ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">出張買取とクーリングオフ制度の考え方</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            買取に関係するクーリングオフ制度は、特定商取引法のうち「訪問購入」に対するものです。出張買取・宅配買取・店頭買取のどれにあたるかで扱いが変わるため、まずここを押さえておきます。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {coolingRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 法制度に関する記述は一般的な整理です。適用の有無や期間の数え方は個別の事情によるため、消費者庁や国民生活センターの案内、または最寄りの消費生活センターで確認してください。
          </p>
        </section>

        {/* 契約前に確認する書面事項 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">契約前に確認する書面事項</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            トラブルの多くは、書面を確認せずに署名や承諾をしたことから始まります。出張買取では契約書面、宅配買取では規約と申込画面、店頭買取では買取伝票が確認の対象です。
          </p>
          <div className="space-y-4">
            {documentChecks.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 相談先 */}
        <section className="mt-14">
          <h2 className="section-title mb-6">トラブルになったときの相談先</h2>
          <div className="space-y-5">
            {contacts.map((s, i) => (
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
            ※ 相談先の受付時間や対応範囲は各機関の案内で確認してください。緊急の危険がある場合は110番へ連絡してください。
          </p>
        </section>

        {/* 証拠の残し方 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">証拠の残し方（写真・書面・メール）</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            相談窓口に行っても、記録がなければ「言った・言わない」で止まってしまいます。売る前の段階から、次の4つを習慣にしておくと、万一のときに自分を守れます。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {evidenceRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 遺品の場合 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">遺品のカメラを売るときの注意</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            遺品整理でのカメラ買取は、業者とのトラブルに加えて親族間のトラブルが起こりやすい場面です。詳しくは<Link href="/situation/ihin/" className="text-vermilion underline underline-offset-4">遺品のカメラを売るページ</Link>で扱っていますが、ここでは対処法の観点から4点を挙げます。
          </p>
          <div className="space-y-4">
            {ihinPoints.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-2">トラブルを防ぐチェックリスト</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            売る前・契約前に、次の項目を順に確認してください。ひとつでも確認できない項目があれば、その場で契約せず持ち帰って調べるのが安全です。
          </p>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <ul className="space-y-3">
              {checklist.map((c) => (
                <li key={c} className="flex gap-3 text-[13px] leading-loose text-steel-700">
                  <span aria-hidden="true" className="mt-2 inline-block h-3 w-3 shrink-0 border border-vermilion" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">返送料・キャンセル条件を比較表で見る</Link>
            <Link href="/guide/erabikata/" className="btn-ghost">売り方の使い分けを確認する</Link>
          </div>
        </section>

        {/* 予防としての業者選び */}
        <section className="mt-14">
          <h2 className="section-title mb-2">いちばんの予防策は、申込前の窓口選び</h2>
          <div className="border border-chalk-line bg-chalk-card p-5">
            <p className="text-[13px] leading-loose text-steel-700">
              ここまでの対処法はすべて「起きてから」の話ですが、トラブルの大半は申込前に防げます。古物商許可の表示があるか、返送料とキャンセル条件が規約に明記されているか、出張買取なら契約書面にクーリングオフの記載があるか。これらを同じ物差しで比べてから申し込むことが、最も確実な予防策です。窓口の使い分けは<Link href="/guide/erabikata/" className="text-vermilion underline underline-offset-4">売り方の選び方ガイド</Link>、各社の条件は<Link href="/compare/" className="text-vermilion underline underline-offset-4">統一比較表</Link>、売る前の準備は<Link href="/guide/uru-mae/" className="text-vermilion underline underline-offset-4">売る前の準備ガイド</Link>で整理しています。
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">買取トラブルでよくある質問</h2>
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
              <Link href="/guide/erabikata/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ買取はどこがいい？売り方の使い分け</span>
                <span className="mt-1 block text-xs text-steel-500">専門店・総合買取・出張買取・フリマの選び方</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">返送料・キャンセル・入金・本人確認を同じ物差しで比較</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/ihin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">遺品のカメラを売る</span>
                <span className="mt-1 block text-xs text-steel-500">相続人の同意と出張買取の注意点</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/tairyou/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">大量のカメラ・レンズをまとめて売る</span>
                <span className="mt-1 block text-xs text-steel-500">出張買取を使うときに確認したい書面事項</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/uru-mae/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前の準備</span>
                <span className="mt-1 block text-xs text-steel-500">状態の記録・付属品・データ削除で減額を防ぐ</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/kachi-mikata/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ・レンズの価値の見方</span>
                <span className="mt-1 block text-xs text-steel-500">減額の理由が妥当かを判断する目安</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・ジャンク・カビありを売る</span>
                <span className="mt-1 block text-xs text-steel-500">状態を正確に申告して減額トラブルを避ける</span>
              </Link>
            </li>
            <li>
              <Link href="/film/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">フィルムカメラの買取</span>
                <span className="mt-1 block text-xs text-steel-500">動作未確認の品を売るときの申告と窓口</span>
              </Link>
            </li>
            <li>
              <Link href="/old-lens/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">オールドレンズの買取</span>
                <span className="mt-1 block text-xs text-steel-500">カビ・くもりの申告で減額の行き違いを防ぐ</span>
              </Link>
            </li>
            <li>
              <Link href="/digital/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">デジタル一眼・ミラーレスの買取</span>
                <span className="mt-1 block text-xs text-steel-500">宅配買取のキャンセル条件と返送料の見方</span>
              </Link>
            </li>
            <li>
              <Link href="/shindan/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売り方診断</span>
                <span className="mt-1 block text-xs text-steel-500">自分の状況に合う売り方を確認する</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
