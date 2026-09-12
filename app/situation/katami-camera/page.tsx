import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";

const TITLE = "形見のカメラを残すか手放すか｜使う・保管する・手放すの決め方と手入れの基本";
const DESC =
  "故人が使っていたカメラを、使うか・保管するか・手放すか。三つの選択肢をどう考えて決めればよいかを一般知識として整理。急いで決めなくてよい理由、保管し続ける場合に必要な手入れ（カビ・電池の液漏れ・防湿）、また使いたい場合に確認すること、手放すと決めたときの進め方をまとめました。";
const PATH = "/situation/katami-camera/";
const PAGE_DATE = "2026-09-12";
const PAGE_DATE_LABEL = "2026年9月12日";

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
  datePublished: PAGE_DATE,
  dateModified: PAGE_DATE,
  mainEntityOfPage: `${SITE_URL}${PATH}`,
  author: { "@type": "Organization", name: OPERATOR.name },
  publisher: { "@type": "Organization", name: SITE_NAME },
};

export default function KatamiCameraPage() {
  const conclusions = [
    "急いで決める必要はありません。カメラやレンズは、適切に保管されていれば数か月から数年の単位で状態が急変するものではありません。気持ちの整理がつくまで「まだ決めない」という選択をしてかまいません。",
    "選択肢は「使う」「保管する」「手放す」の三つです。どれが正しいというものではなく、住まいの環境、機材の状態、家族の気持ち、手入れに使える時間で決まります。全部を同じ扱いにする必要もありません。",
    "保管を選んだ場合は、置いておくだけでは済みません。湿気によるカビ、電池の液漏れ、ゴム部品の劣化は、しまい込んだまま放置したときに進みます。年に数回、箱から出して状態を見る習慣が要になります。",
    "また使いたい場合は、無理に動かす前に状態を確かめます。古い機材は、通電や巻き上げの一度の操作で状態を悪くすることがあります。自信がないときは修理やメンテナンスを扱う店に相談する方法があります。",
    "手放すと決めた場合も、全部を一度に出す必要はありません。残すものと手放すものを分け、手放すものだけを査定に出す進め方ができます。買取金額は機種・状態・時期により異なるため、複数の業者に同じ情報で相談します。",
  ];

  const threeChoices = [
    {
      label: "使う（自分や家族が引き継いで撮る）",
      value:
        "故人が使っていたカメラを、自分や子どもが実際に使い続ける選択です。思い出の品を「飾る」のではなく「働かせる」形で残せる点が、この選択の意味です。一方で、フィルムカメラならフィルムの購入と現像、デジタルカメラならバッテリーやメモリーカードの入手、いずれも消耗品と維持の手間がかかります。整備が必要な状態であれば、修理の費用や期間も関わります。使う頻度が年に数回でも、それで気持ちが収まるなら十分な理由になります。",
    },
    {
      label: "保管する（使わないが手元に残す）",
      value:
        "使う予定はないが、形見として手元に置いておく選択です。もっとも選ばれやすい一方で、置き場所と手入れの負担が長く続く点は見落とされがちです。押し入れや物置にしまい込んだまま数年が経つと、カビや電池の液漏れで状態が落ちることがあります。保管を選ぶなら、置き場所と点検の頻度をあわせて決めておくと、後から後悔しにくくなります。",
    },
    {
      label: "手放す（買取や譲渡で次の人に渡す）",
      value:
        "使う人がいない、置き場所がない、状態を保つ自信がない。そうした理由で次の人に渡す選択です。手放すことは、故人の持ち物を粗末にすることとは違います。使える機材が使われる場所に移ることを、前向きにとらえる家族もいます。ただし一度手放すと取り戻せないため、迷いがあるうちは決めない方が無難です。",
    },
    {
      label: "まだ決めない（保留にする）",
      value:
        "三つのどれにも決めきれないときは、「保留」という四つ目の置き場所を作ります。保留の箱を用意し、決めたものと分けておくだけで、判断が先送りであることが自分にも家族にも見えるようになります。保留のものにも最低限の保管（湿気を避ける・電池を抜く）だけは施しておきます。",
    },
  ];

  const decideSteps = [
    {
      t: "期限を自分で決めない、または長めに取る",
      d: "家の片付けに期限がある場合を除き、カメラの扱いに自分で締め切りを作る必要はありません。四十九日までに、一周忌までに、と急ぐ理由は機材の側にはありません。片付けの都合でいったん運び出す必要があるなら、「決めるのは後」と決めて、箱に入れて持ち帰るだけでも構いません。",
    },
    {
      t: "誰が決めるのかを先に確認する",
      d: "故人の持ち物をどうするかは、家族や親族の間で認識がそろっていないと後で行き違いになります。誰が窓口になるか、手放すことに反対する人がいないかを、作業を始める前に一声かけて確認しておきます。手続きや権利関係で判断に迷う場合は、税理士・弁護士・お住まいの自治体などにご確認ください。",
    },
    {
      t: "「思い入れの強さ」で先に仕分ける",
      d: "金銭的な価値ではなく、気持ちの面から先に分けます。故人が最後まで使っていた一台、家族写真を撮ってくれた一台、旅行に必ず持って行った一台。こうした機材は、価値の話をする前に「残す」側に置いてかまいません。感情で決めることは、誤った決め方ではありません。",
    },
    {
      t: "残りを「使えるか」で分ける",
      d: "思い入れで残すものを取り分けたら、残りを「自分または家族が使う可能性があるか」で分けます。使う可能性があるなら状態の確認へ、ないなら保管か手放すかの判断へ進みます。ここで初めて、機材としての実用性が判断材料になります。",
    },
    {
      t: "保管の負担を見積もる",
      d: "保管を選ぶ場合、置き場所、湿気の対策、年に数回の点検が続きます。台数が増えるほど負担も増えます。「全部残す」と決める前に、実際にどこへ置き、誰が点検するのかを具体的に考えておくと、現実的な線引きができます。",
    },
    {
      t: "決まらないものは保留の箱へ",
      d: "この段階でも決まらないものは、無理に決めません。保留の箱に入れ、半年後や一年後にもう一度見ると、そのときの気持ちで判断がつくことがあります。保留は先延ばしではなく、正当な選択肢の一つです。",
    },
  ];

  const careItems = [
    {
      t: "湿気を避ける（カビは保管中に進む）",
      d: "レンズやファインダーのカビは、湿度の高い場所に長く置かれることで進みやすいとされています。押し入れの奥、床に直置きした段ボール、窓のない物置などは、湿気がこもりやすい場所です。風通しのよい室内に置く、除湿剤を併用する、専用の防湿庫を使うなど、住まいの状況に合わせた方法があります。一般には湿度40〜50パーセント程度を目安とする考え方が知られていますが、厳密な管理をしなくても、極端に湿った場所を避けるだけで違いが出ます。",
    },
    {
      t: "電池は抜いて保管する",
      d: "カメラに電池を入れたまま長期間放置すると、液漏れを起こすことがあります。液漏れは電池室の端子を腐食させ、機材そのものの状態を落とします。使う予定がないなら、乾電池もリチウムイオン電池も本体から抜いて、別に保管します。すでに液漏れしている電池がある場合は、素手で触らず、手袋や紙を使って取り出し、お住まいの自治体の案内に従って処分してください。",
    },
    {
      t: "レンズはキャップを付け、立てずに置く",
      d: "前後のキャップを付けておくと、ほこりの付着とレンズ面の傷を減らせます。棚に立てて並べると転倒や落下の危険があるため、横に寝かせるか、仕切りのあるケースに入れます。重ねて積むと下のものに荷重がかかるため、避けた方が無難です。",
    },
    {
      t: "革ケース・ストラップ・ゴム部品は別に見る",
      d: "革のケースやストラップは、機材本体より先に劣化することがあります。カビが生えた革を機材と一緒に密閉すると、湿気とカビの発生源を抱え込むことになります。革製品は別にして風通しよく保管する方法があります。ゴムのグリップや蛇腹は、経年でべたついたりひび割れたりすることがあり、これは保管の良し悪しだけで完全には防げません。",
    },
    {
      t: "年に数回、箱から出して状態を見る",
      d: "保管でもっとも効くのは、定期的に出して見ることです。年に二回から四回、箱から出して、レンズを明るい方に向けて中を覗く、電池室を開けて見る、外装に白い粉のようなものが出ていないか確認する。これだけで、カビや液漏れの初期に気づけます。異常を見つけたら、自分で拭いたり分解したりせず、修理やメンテナンスを扱う店に相談する方法があります。",
    },
    {
      t: "自分で手入れをしすぎない",
      d: "レンズのくもりを強くこすったり、固くなった部分に油を差したりするのは避けた方が無難です。素人の手入れが状態を悪化させることがあります。外装のほこりを乾いた柔らかい布で軽く払う程度にとどめ、内部に関わることは専門の店に任せます。",
    },
  ];

  const useChecks = [
    {
      t: "いきなり電池を入れて通電しない",
      d: "長期間動かしていない機材は、電池を入れた瞬間に内部に負担がかかることがあります。まず電池室に液漏れや腐食の跡がないかを確認し、端子がきれいであることを見てから判断します。腐食がある場合は、自分で通電を試さず、修理を扱う店に相談する方法があります。",
    },
    {
      t: "フィルムカメラは裏ぶたを開ける前に確認する",
      d: "フィルムカメラの中に撮影途中のフィルムが残っていることがあります。裏ぶたを開けると感光して写真が消えてしまうため、フィルムカウンターや巻き戻しクランクの状態を先に確認します。判断がつかない場合は開けずに写真店などに相談する方法があります。故人が撮ったフィルムやメモリーカードの扱いは、フィルム・データのページで詳しく整理しています。",
    },
    {
      t: "巻き上げやシャッターを力で動かさない",
      d: "固くなっている部分を力で動かすと、内部の部品を傷めることがあります。軽く動くところまでで止め、抵抗を感じたらそれ以上は動かしません。「動かない」ことより「無理に動かして壊れた」ことの方が、後の選択肢を狭めます。",
    },
    {
      t: "消耗品と規格が今も手に入るかを調べる",
      d: "古い機材では、専用の電池、フィルムの種類、メモリーカードの規格、充電器などが、現在は入手しにくい場合があります。使い続けるつもりなら、何が必要で、それが手に入るかを先に確認しておくと、動く状態にしてから使えないと気づく事態を避けられます。",
    },
    {
      t: "整備に出すかどうかを決める",
      d: "長く使われていなかった機材は、動いているように見えても内部の状態が落ちていることがあります。実際に使い続けるなら、修理やオーバーホールを扱う店に点検を依頼する選択肢があります。費用と期間は状態や機種により異なるため、見積もりを取ってから判断します。",
    },
    {
      t: "デジタル機は先にデータを確認する",
      d: "デジタルカメラを引き継いで使う場合も、本体やメモリーカードに故人の写真が残っていることがあります。初期化する前に内容を確認し、必要なものを別の場所に保存してから使い始めます。写真は故人の記録であると同時に、写っている人のプライバシーにも関わります。",
    },
  ];

  const letGoSteps = [
    {
      t: "残すものを先に取り分けてから考える",
      d: "手放すと決めた場合も、全部を出す必要はありません。形見として残す一台、思い出のある一本を先に取り分け、残りだけを査定の対象にします。後から「あれも残しておけばよかった」と思っても取り戻せないため、迷うものは残す側に置いておきます。",
    },
    {
      t: "中に残っているものを抜く",
      d: "メモリーカード、フィルム、電池は、手放す前に必ず抜きます。ケースの内側や取扱説明書に故人の氏名や住所が書かれていることもあるため、確認して外します。データやフィルムの扱いは、故人のフィルム・データのページで手順を整理しています。",
    },
    {
      t: "状態は事実のまま伝える",
      d: "「長期間保管されていた」「動作未確認」「レンズ内にくもりがある」など、見えている事実をそのまま申告します。良く見せる必要も、悪く言う必要もありません。事実を正確に伝える方が、後から「聞いていた状態と違う」という食い違いを防げます。故障やカビがある機材の扱いは、壊れた・ジャンク品のページで整理しています。",
    },
    {
      t: "写真とメモを用意して複数の業者に相談する",
      d: "本体の正面と型番が読める部分、レンズの銘板などを撮っておくと、実物を運ぶ前に複数の業者へ同じ情報で相談できます。買取金額は機種・状態・時期により異なるため、一社の提示だけで決めず、対応の丁寧さや条件の明確さもあわせて見ます。",
    },
    {
      t: "その場での即決を求められても持ち帰ってよい",
      d: "家族の形見を扱う判断です。その場で決められないと感じたら、「家族と相談します」と伝えて持ち帰って構いません。自宅で買取を受ける訪問購入には、一般に特定商取引法に基づくクーリングオフの制度が適用される場合があるとされています。詳しくはトラブル対処のガイドで整理しています。",
    },
    {
      t: "台数が多い場合はまとめ方を考える",
      d: "防湿庫ごと、バッグごと出てきたような場合は、仕分けから始めます。収納ごと出てきたときの手順は防湿庫・バッグごと整理のページに、点数が多い場合の進め方は大量売却のページにまとめています。",
    },
  ];

  const checklist = [
    "急いで決めなくてよいことを確認し、期限があるなら片付けの都合だけを期限にした",
    "家族や親族の間で、誰が窓口になるか、手放すことに反対する人がいないかを確認した",
    "思い入れの強い機材を先に取り分け、価値の話と切り離した",
    "残り分を「使う可能性があるか」で分けた",
    "保管を選ぶものについて、置き場所と点検の頻度を決めた",
    "決まらないものを保留の箱に入れ、湿気対策と電池抜きだけは行った",
    "保管するすべての機材から電池を抜いた",
    "レンズに前後のキャップを付け、立てずに置いた",
    "革ケースやストラップを機材と分けて保管した",
    "年に数回、箱から出して状態を確認する時期を決めた",
    "使う予定の機材について、通電前に電池室の腐食を確認した",
    "フィルムカメラの裏ぶたを開ける前に、撮影途中のフィルムの有無を確認した",
    "消耗品や規格が今も入手できるかを調べた",
    "手放すものから、メモリーカード・フィルム・電池・氏名の記載を取り除いた",
    "写真とメモを用意し、複数の業者に同じ情報で相談した",
  ];

  const faqs = [
    {
      q: "形見のカメラは、いつまでに決めなければいけませんか？",
      a: "機材の側に期限はありません。適切に保管されていれば、数か月から数年の単位で状態が急変するものではないため、気持ちの整理がつくまで決めなくてかまいません。家の片付けの都合で運び出す必要がある場合も、「決めるのは後」と決めて、電池を抜いて湿気の少ない場所に置いておけば十分です。決めきれないものは保留の箱に入れる方法があります。",
    },
    {
      q: "使う予定はありませんが、手放すのは気が進みません。残しても大丈夫ですか？",
      a: "残して構いません。ただし、しまい込んだまま放置すると、湿気によるカビや電池の液漏れが進むことがあります。電池を抜く、湿気の少ない場所に置く、年に数回は箱から出して状態を見る。この三つを決めておけば、保管という選択が現実的なものになります。",
    },
    {
      q: "故人のカメラをまた使いたいのですが、いきなり動かしてよいですか？",
      a: "いきなり電池を入れて通電するのは避けた方が無難です。まず電池室に液漏れや腐食の跡がないかを確認します。フィルムカメラは、裏ぶたを開ける前に撮影途中のフィルムが入っていないかを確かめます。巻き上げやシャッターが固い場合は力で動かさず、修理やメンテナンスを扱う店に相談する方法があります。",
    },
    {
      q: "手放すことは、故人の持ち物を粗末にすることになりませんか？",
      a: "その受け止め方は人それぞれで、どちらが正しいというものではありません。使える機材が使われる場所に移ることを前向きにとらえる家族もいれば、手元に置きたいと考える家族もいます。迷いがあるうちは決めない方が無難ですが、置き場所や手入れの負担から手放すという判断も、十分に理由のある選択です。",
    },
    {
      q: "相続の手続きとの関係が分かりません。売ってよいのでしょうか？",
      a: "このページでは相続や税の扱いについて判断を示すことはできません。手続きや権利関係、税の扱いについては、税理士・弁護士・お住まいの自治体などにご確認ください。実務上は、作業を始める前に家族や親族の間で認識をそろえておくことが、後の行き違いを防ぐ基本になります。",
    },
    {
      q: "何台もあって決めきれません。どこから手を付ければよいですか？",
      a: "思い入れの強い数台を先に「残す」側に取り分け、そこから考えると進みやすくなります。残りを「使う可能性があるか」で分け、使わないものについて保管の負担を見積もります。防湿庫やバッグごとまとまって出てきた場合は、収納ごとの仕分け手順をまとめたページも参考にしてください。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "形見のカメラを残すか手放すか", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">KEEPSAKE CAMERA</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          形見のカメラを残すか手放すか｜使う・保管する・手放すの決め方と手入れの基本
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          故人が使っていたカメラを前にして、どうすればよいか決められない。使うあてはないけれど手放すのも気が進まない。そうした迷いは、誰にでもあるものです。このページでは、使う・保管する・手放すという三つの選択肢と、決めきれないときの四つ目の置き場所を整理し、保管し続ける場合に必要な手入れ、また使いたい場合に確認すること、手放すと決めたときの進め方を、一般知識としてまとめます。急いで決める必要はありません。
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

        {/* 三つの選択肢 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">使う・保管する・手放す、そして保留</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            形見のカメラの行き先は、大きく三つに分かれます。そして、どれにも決めきれないときのための四つ目があります。それぞれに、良い点と続いていく負担があります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {threeChoices.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 一台ごとに違う選択をして構いません。全部を同じ扱いにする必要はありません。
          </p>
        </section>

        {/* 決め方の順序 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">決め方の順序</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            価値を調べることから始めると、気持ちの整理が後回しになりがちです。先に気持ちの面で分け、そのあとで実用性を見る順序の方が、後悔の少ない判断になりやすいと考えられます。
          </p>
          <div className="space-y-5">
            {decideSteps.map((s, i) => (
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
            ※ 相続の手続きや税の扱いについては、このページでは判断を示しません。税理士・弁護士・お住まいの自治体などにご確認ください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/ihin/" className="btn-primary">遺品・実家整理の全体の流れを見る</Link>
            <Link href="/situation/koujin-film-data/" className="btn-ghost">フィルム・データの扱いを見る</Link>
          </div>
        </section>

        {/* 保管する場合の手入れ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">保管し続ける場合に必要な手入れ</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            保管は「置いておくだけ」ではありません。カビ、電池の液漏れ、ゴムや革の劣化は、しまい込んだまま放置したときに進みます。難しい管理は必要ありませんが、次の点だけは決めておくと状態を保ちやすくなります。
          </p>
          <div className="space-y-5">
            {careItems.map((s, i) => (
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
            ※ 液漏れした電池や劣化した電池の処分方法は、お住まいの自治体の案内に従ってください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/boushitsuko-seiri/" className="btn-primary">防湿庫・バッグごと出てきた場合を見る</Link>
            <Link href="/old-lens/" className="btn-ghost">オールドレンズのカビ・くもりを見る</Link>
          </div>
        </section>

        {/* また使う場合 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">また使いたい場合に確認すること</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            引き継いで使うと決めたときに、最初の一手で状態を落とさないための確認点です。動かすことより、動かす前に見ることの方が大切です。
          </p>
          <div className="space-y-4">
            {useChecks.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/film/" className="btn-primary">フィルムカメラのページを見る</Link>
            <Link href="/digital/" className="btn-ghost">デジタル一眼・ミラーレスのページを見る</Link>
          </div>
        </section>

        {/* 手放す場合 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">手放すと決めた場合の進め方</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            手放すと決めても、全部を一度に出す必要はありません。残すものを先に取り分け、中に残っているものを抜き、事実のまま伝える。この順序で進めます。買取金額は機種・状態・時期により異なります。
          </p>
          <div className="space-y-4">
            {letGoSteps.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/uru-mae/" className="btn-primary">売る前の準備ガイドを見る</Link>
            <Link href="/situation/tairyou/" className="btn-ghost">点数が多い場合の進め方を見る</Link>
          </div>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-6">形見のカメラをどうするか決める前のチェックリスト</h2>
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
          <h2 className="section-title mb-6">形見のカメラについてよくある質問</h2>
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
              <Link href="/situation/koujin-film-data/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">故人のフィルム・メモリーカード・写真データ</span>
                <span className="mt-1 block text-xs text-steel-500">未現像フィルムとデータの取り出し方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/boushitsuko-seiri/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">防湿庫・カメラバッグごと出てきた機材の整理</span>
                <span className="mt-1 block text-xs text-steel-500">収納ごとの仕分けとカビの見分け</span>
              </Link>
            </li>
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
              <Link href="/broken/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・ジャンク・カビありを売る</span>
                <span className="mt-1 block text-xs text-steel-500">動作未確認の申告のコツ</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/uru-mae/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">売る前の準備</span>
                <span className="mt-1 block text-xs text-steel-500">仕分け・写真・申告の一般的な手順</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/trouble/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">トラブル時の対処</span>
                <span className="mt-1 block text-xs text-steel-500">クーリングオフ・相談先の一般知識</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">出張対応・遺品対応・返送料を同じ物差しで</span>
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-12 text-xs leading-loose text-steel-500">
          ※ 本ページの記載は{PAGE_DATE_LABEL}時点の一般的な整理であり、法的・税務的な助言ではありません。相続の手続きや税の扱いについては、税理士・弁護士・お住まいの自治体などにご確認ください。買取金額は機種・状態・時期により異なります。
        </p>
      </article>
    </>
  );
}
