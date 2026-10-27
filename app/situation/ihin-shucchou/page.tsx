import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";
import { fmt, formatChecked, getCompany } from "@/lib/companies";

const TITLE = "遺品のカメラを出張買取で査定してもらう方法｜予約前に家族で決めること・当日の流れ・持ち帰って検討できること";
const DESC =
  "実家や故人の家に残るカメラやレンズを運び出せない方向けに、出張買取の準備を整理しています。予約前に家族で決めること、予約時に伝えること、当日の流れ、本人確認書類、訪問購入のクーリングオフ、出張対応を公式に記載している掲載社の条件を解説します。";
const PATH = "/situation/ihin-shucchou/";
const PAGE_DATE = "2026-09-23";
const PAGE_DATE_LABEL = "2026年9月23日";

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

/** カメラの出張買取を公式に記載している掲載社（data/companies.json の methods / service_type による） */
const SHUCCHOU_SLUGS = [
  "uriel",
  "camera-kaitoriyasan",
  "kitamura",
  "naniwa",
  "daikokuya",
  "camera-takakuureru",
];

export default function IhinShucchouPage() {
  const shucchouCompanies = SHUCCHOU_SLUGS.map((s) => getCompany(s));
  const fujiya = getCompany("fujiya");
  const rakuuru = getCompany("rakuuru");
  const janpara = getCompany("janpara");
  const arrows = getCompany("arrows");
  const uriel = getCompany("uriel");
  const takakuureru = getCompany("camera-takakuureru");
  const daikokuya = getCompany("daikokuya");
  const kitamura = getCompany("kitamura");

  const conclusions = [
    "出張買取は、運び出せない量や重さの機材を、家から動かさずに査定してもらえる方法です。ただし、訪問を受けたからといって売却する義務はありません。査定を受けることと売却を決めることは別の段階です。",
    "予約の前に、家族の間で次の3点を決めておくと、当日も落ち着いて対応できます。窓口となる担当者、査定してもらう機材（残すものは事前に分けておきます）、当日の立会人です。",
    "予約のときは、機材のおおよその点数と種類、保管の状態、家の場所と搬出の条件、立ち会う人を伝えます。あわせて出張料・キャンセル時の扱い・支払方法・クーリングオフの説明の有無を聞いておくと、当日も落ち着いて対応できます。",
    "当日は一点ずつの内訳を提示してもらい、その場で決められないものは持ち帰って検討して問題ありません。家族と相談してから返事をすることは、失礼にはあたりません。",
    "自宅での買取（訪問購入）には、特定商取引法にもとづくクーリングオフの制度があります。制度の細部や個別の契約については、業者から受け取る書面と、消費生活センターなど公的な窓口の案内で確認します。",
  ];

  const familyDecisions = [
    {
      t: "窓口となる担当者を一人決める",
      d: "業者とのやり取りは、一人に集約すると混乱を防げます。複数の家族がそれぞれ別の業者に連絡すると、同じ日に二社が訪問する、伝えた内容が食い違うといった事態が起こりやすくなります。窓口役は、実家に通いやすい方や平日に電話を受けられる方など、実務上の都合で選べば問題ありません。決めた窓口役の名前を家族全員に共有しておきます。",
    },
    {
      t: "手放すことを家族で共有しておく",
      d: "故人の持ち物を手放すことについて、家族や親族の間で認識が揃っていないと、後に行き違いが生じる原因となります。電話やメッセージで構いませんので、出張買取で査定を依頼する予定であること、査定日、残したいものがあれば事前に知らせてほしいことを伝えておきます。権利関係や手続きで判断に迷う場合は、税理士・弁護士・お住まいの自治体などにご確認ください。",
    },
    {
      t: "残すもの・手放すもの・保留を先に分ける",
      d: "査定員の到着後に残すかどうかを迷うと、その場の雰囲気に判断が左右されやすくなります。形見として残すものは、事前に別の部屋や箱に移し、査定の場に出さないのが確実です。迷うものは保留の箱にまとめ、当日は査定のみとすることを家族で決めておく方法もあります。残すか手放すかそのものの考え方は、形見のカメラのページで整理しています。",
    },
    {
      t: "立ち会う人を決める",
      d: "当日は、売り主になる人が立ち会うのが基本です。売り主以外の家族が同席するかどうかも決めておきます。二人以上で立ち会うと、説明の聞き漏らしを防げ、判断に迷う際に相談もできます。遠方の家族が来られない場合は、電話やビデオ通話でつなぐ準備をしておく方法があります（後述）。",
    },
    {
      t: "当日は決めなくてもよいことを事前に共有する",
      d: "見積もりを確認してから家族で相談することを事前に決めておくと、当日の心理的な負担が軽減されます。予約の時点で、今回は査定のみとし、売却は家族と相談してから決める旨を伝えておいても問題ありません。査定のみで終わる可能性を事前に伝えておけば、業者もその前提で対応できます。",
    },
  ];

  const reserveItems = [
    {
      label: "機材のおおよその内容",
      value:
        "カメラ本体が何台、レンズが何本、三脚やバッグ、防湿庫などの周辺機材があるかを、おおよそで構いませんのでお伝えください。フィルムカメラとデジタルカメラのいずれが中心かも伝えます。機種名がわからなくても問題はありません。型番は本体の底面や銘板、レンズの鏡筒やキャップ付近に刻印されていることが多いため、読み取れたもののみメモしておきます。",
    },
    {
      label: "保管の状態",
      value:
        "押し入れや物置に長く保管されていた、防湿庫に入っていた、革ケースにカビのようなものが見える、電池が入ったままだった、など、見てわかる範囲の事実を伝えます。状態を良く見せる必要はありません。事実のまま伝えておくと、当日の説明と見積もりの行き違いを防げます。",
    },
    {
      label: "訪問先の住所と搬出の条件",
      value:
        "訪問先が売り主の住まいではなく実家や故人の家である場合は、その旨を明確に伝えます。駐車スペースの有無、エレベーターのない階段、機材が置かれている部屋の階数なども、わかる範囲で伝えておくと当日の段取りが円滑になります。対応エリアは業者によって異なり、エリア内でも対応できない地域がある旨を記載している業者もあります。",
    },
    {
      label: "立ち会う人と売り主",
      value:
        "当日誰が立ち会い、誰が売り主になるかを伝えます。本人確認書類の住所と訪問先の住所が異なる場合に、どのような書類が必要になるかは、業者ごとの確認事項です。予約の時点で聞いておけば、当日に書類が不足して手続きが進まない事態を避けられます。",
    },
    {
      label: "希望日時と所要時間",
      value:
        "点数が多いと査定に時間がかかります。所要時間の目安を予約時に確認し、片付けの日程や家族の予定と重ならないように組みます。実家に泊まりがけで片付けに行く場合は、初日ではなく二日目以降に設定すると、仕分けの時間を確保しやすくなります。",
    },
    {
      label: "予約時に聞いておくこと",
      value:
        "出張料・査定料の有無、査定のみで断った場合の費用の有無、支払いが現金か振込か、クーリングオフに関する説明の内容の4点は、当日ではなく予約の段階で確認しておくことをおすすめします。答えはメモしておき、当日の説明と食い違いがないかを確認する材料にします。",
    },
  ];

  const beforeDay = [
    {
      t: "本人確認書類を用意する",
      d: "買取には、売り主の本人確認が必要です。古物の取引では本人確認が求められるため、書類がないと手続きができません。使用できる書類の種類、現住所の記載の要否、補助書類の要否は業者によって異なります。下の一覧に、公式に記載されている範囲を掲載しています。訪問先が実家で、書類の住所が別の場所になる場合の扱いは、予約時に確認しておきます。",
    },
    {
      t: "機材の中に残っているものを取り出す",
      d: "カメラにフィルムやメモリーカード、電池が入ったままになっていることがあります。撮影途中のフィルムがあるかもしれないため、フィルムカメラの裏ぶたは不用意に開けないでください。メモリーカードには故人の写真が残っている場合があります。取り出し方と扱いは、故人のフィルム・データのページで詳しく整理しています。電池は抜いて別に保管し、液漏れしている電池は素手で触らず、自治体の案内に従って処分します。",
    },
    {
      t: "査定してもらうものを一か所に集める",
      d: "家の各所に置かれた機材を、当日に査定員に探してもらうことは現実的ではありません。査定してもらうものを一つの部屋、できればテーブルのある場所に集めます。残すものと保留のものは、別の部屋に移すか、明確にわかる目印を付けて分けておきます。箱や付属品、説明書、購入時の書類などが見つかれば、本体と一緒に置いておきます。",
    },
    {
      t: "写真とリストを残しておく",
      d: "当日までに、査定してもらうものをスマートフォンで撮影し、簡単なリストを作成しておくことをおすすめします。査定を受けたもの、売却したもの、手元に残したものを後から家族に説明する材料になります。点数が多い場合のリストの作り方は、大量売却のページで整理しています。",
    },
    {
      t: "無理に動作させたり清掃したりしない",
      d: "動作を確かめようとして電池を入れたり、固くなった巻き上げを力で回したりすると、状態を悪くすることがあります。レンズのくもりを強く拭くこともお控えください。外装のほこりを乾いた柔らかい布で軽く払う程度にとどめ、動作は「わからない」と伝えれば問題ありません。壊れている機材の扱いは、壊れた・ジャンクのページで整理しています。",
    },
  ];

  const dayFlow = [
    {
      t: "到着と身元の確認",
      d: "査定員が到着したら、業者名と担当者の名前を確認します。予約した業者と同じかどうかを確かめることは、失礼なことではありません。訪問購入では、依頼を受けていない業者が飛び込みで買取を勧誘することは、法律で禁止されているとされています。予約していない業者が訪問した場合、応じる必要はありません。",
    },
    {
      t: "説明を受ける",
      d: "査定の前に、業者から手続きの流れや書面について説明があるのが一般的です。聞き逃したことは、その場で確認して問題ありません。クーリングオフの説明があったかどうかは、後から家族に伝えられるよう、メモしておくことをおすすめします。",
    },
    {
      t: "査定",
      d: "査定員が機材を一点ずつ確認します。外観、レンズの中、動作の確認などを行うのが一般的です。点数が多いと時間がかかります。査定の間、常に横で見ている必要はありませんが、同じ部屋にいて、気になった点をその都度確認できるようにしておくことをおすすめします。査定の対象にしてほしくないもの（残すもの）が紛れていないかも、この段階で確認します。",
    },
    {
      t: "内訳の提示を依頼する",
      d: "見積もりは、できれば一点ずつ、または品目ごとの内訳で示してもらいます。一式の金額のみでは、どの品が評価され、どの品に値段が付かなかったのかがわかりません。内訳があれば、一部のみを売却して残りは手元に残すという判断もできます。内訳の見方は、大量売却のページでも整理しています。",
    },
    {
      t: "売却するかどうかの判断（当日に決めなくても問題ありません）",
      d: "内訳を確認し、売却するものとしないものを決めます。この段階で決められない場合は、家族と相談してから連絡する旨を伝えて、いったん終えて問題ありません。一部のみを売却する、今回は売却しない、という選択もできます。業者によっては、1点ごとに売却するかどうかを判断できる旨や、断った場合にキャンセル料がかからない旨を公式に記載しています（下の一覧を参照）。",
    },
    {
      t: "書類の記入と支払い",
      d: "売ると決めたら、本人確認と書類の手続きを行い、支払いを受けます。その場で現金を受け取る方式と、後日口座に振り込まれる方式があり、業者や金額によって異なります。受け取った書面は、クーリングオフの起算や後の確認に関わるため、捨てずに保管しておきます。",
    },
    {
      t: "搬出と後片付け",
      d: "売ったものは業者が持ち帰ります。売らなかったものが元の場所に戻っているか、残すものが紛れて持ち出されていないかを、最後に一度確認します。事前に撮っておいた写真やリストと照らし合わせると、確認が早く済みます。",
    },
  ];

  const noNeedToDecide = [
    {
      t: "査定を受けても売却する義務はない",
      d: "出張で訪問を受けると、断りにくく感じることがあります。しかし、査定を受けることと売却することは別です。査定のみで終わることも、想定どおりの結果の一つです。",
    },
    {
      t: "すべてを一度に売却する必要はない",
      d: "一部のみを売却して残りは手元に残す、あるいは別の業者にも査定を依頼する、という進め方ができます。内訳が出ていれば、どれを手放すかを一点ずつ選べます。",
    },
    {
      t: "保留にしていたものをその場で決める必要はない",
      d: "当日の雰囲気から、保留の箱のものまで査定に出したくなることがあります。保留のものは今回は出さないと事前に家族で決めておけば、その取り決めに従って対応できます。",
    },
    {
      t: "他の業者の見積もりと比較してから決めてよい",
      d: "複数の業者に査定を依頼してから決めることは一般的です。その場合は、いずれの業者にも同じ機材を同じ状態で見せ、同じ情報を伝えると比較しやすくなります。複数社への相談の考え方は、遺品・実家整理のページで整理しています。",
    },
    {
      t: "家族の了解を得てから決めてよい",
      d: "窓口役が一人で決めずに、写真と内訳を家族に共有してから返事をする進め方は合理的です。後に行き違いが生じるよりも、1〜2日返事を待ってもらうほうが、家族と業者の双方にとって負担が小さくなります。",
    },
  ];

  const remoteFamily = [
    {
      t: "現地に行ける家族と行けない家族の役割分担",
      d: "実家の近くに住む家族が立ち会い、遠方の家族は判断に加わるという分担が現実的です。現地の家族は仕分けと当日の立ち会い、遠方の家族は業者の条件の下調べや家族内の連絡の取りまとめというように、役割を分けておきます。",
    },
    {
      t: "写真とリストで機材の内容を共有する",
      d: "遠方の家族は、実物を見ずに判断することになります。仕分けの前に、機材を並べて全体を撮った写真と、一点ずつの写真、簡単なリストを共有しておくと、残したいものがあるかどうかを事前に聞き取れます。共有した写真とリストは、当日の照合にもそのまま使えます。",
    },
    {
      t: "当日は電話やビデオ通話でつなぐ",
      d: "内訳が出た段階で、遠方の家族と電話やビデオ通話でつなぎ、相談してから決めるという方法があります。その場合は、査定員に「家族と相談する時間をください」と先に伝えておきます。連絡がつかなかった場合に備えて、決められないものは今回は売却しないことを原則にしておくことをおすすめします。",
    },
    {
      t: "現地に誰も行けない場合の選択肢",
      d: "家族の誰も立ち会えない場合、出張買取は難しくなることがあります。売り主の立ち会いや本人確認の扱いは業者ごとに異なるため、事前に相談が必要です。片付けの日程を待つ、いったん機材を手元に送ってもらい宅配買取を検討する、といった方法もあります。機材を送る場合は、レンズを一本ずつ緩衝材で包むなど輸送の注意が必要です。",
    },
    {
      t: "結果を家族に報告する",
      d: "当日が終わったら、何を売り、何を手元に残し、何がどこに残っているかを、写真やリストと一緒に家族に報告します。受け取った書面の写しや写真も共有しておけば、後から確認が必要になったときに困りません。",
    },
  ];

  const checklist = [
    "業者とのやり取りを担当する窓口役を一人決め、家族に共有した",
    "出張買取で査定を依頼する予定と日程を、家族・親族に伝えた",
    "形見として残すものを、査定の場とは別の部屋や箱に移した",
    "迷うものを保留の箱にまとめ、当日は出さないと家族で決めた",
    "当日の立会人と売り主を決めた",
    "予約時に、機材のおおよその点数・種類・保管状態・訪問先の住所と搬出の条件を伝えた",
    "予約時に、出張料・査定料・断った場合の費用・支払方法・クーリングオフの説明を確認した",
    "本人確認書類を用意し、訪問先と住所が異なる場合の扱いを確認した",
    "フィルム・メモリーカード・電池を取り出した（撮影途中のフィルムに注意）",
    "査定してもらうものを一か所に集め、写真とリストを残した",
    "遠方の家族と、当日電話やビデオ通話でつなぐ段取りをした",
    "当日は内訳を見せてもらい、決めきれないものは持ち帰ると決めた",
    "受け取った書面を保管し、結果を家族に報告した",
  ];

  const faqs = [
    {
      q: "出張買取で訪問を受けた場合、必ず売却しなければなりませんか？",
      a: "売却する義務はありません。査定を受けることと売却を決めることは別の段階です。内訳を確認し、一部のみを売却する、今回は売却しない、家族と相談してから返事をする、という選択ができます。断った場合の費用の有無は業者によって記載が異なるため、予約時に確認しておくことをおすすめします。本ページの一覧には、公式に記載されている範囲を掲載しています。",
    },
    {
      q: "実家に残された機材を、別の場所に住む家族が売ることはできますか？",
      a: "売り主の本人確認書類の住所と訪問先の住所が異なる場合の扱いは、業者ごとの確認事項です。予約の時点で、訪問先が実家であること、売り主が誰で、どこに住んでいるかを伝え、必要な書類を確認してください。また、故人の持ち物を手放すことについては、事前に家族や親族の間で認識を揃えておくことが重要です。権利関係で迷う場合は、税理士・弁護士・お住まいの自治体などにご確認ください。",
    },
    {
      q: "機種名も価値もわかりません。それでも出張査定を依頼してよいですか？",
      a: "問題ありません。機種名がわからなくても、台数・本数と保管の状態を伝えれば予約できます。型番は本体の底面や銘板、レンズの鏡筒に刻印されていることが多いため、読み取れたもののみメモしておけば問題ありません。動作についても「わからない」と伝えればよく、無理に電池を入れて確かめる必要はありません。",
    },
    {
      q: "訪問購入のクーリングオフとは何ですか？",
      a: "自宅などで物品を買い取られる取引（訪問購入）について、特定商取引法にクーリングオフの制度が設けられています。一定の期間内であれば契約を解除できる仕組みです。適用の対象や期間、例外は法令で定められており、業者から交付される書面にも記載されます。掲載社の中には、公式サイトでクーリングオフの期間や対象外となる場合を明記している社もあります。個別の契約で迷う場合は、お住まいの地域の消費生活センターにご相談ください。",
    },
    {
      q: "家族が遠方にいて、当日立ち会えません。どうすればよいですか？",
      a: "写真とリストで事前に機材の内容を共有し、残したいものがないかを確認しておきます。当日は、内訳が提示された段階で電話やビデオ通話でつなぎ、相談してから決める方法があります。連絡がつかなかった場合に備えて、決められないものは今回は売却しないことを原則にしておくと、後の行き違いを防げます。",
    },
    {
      q: "査定の場で、残す予定だったものも売却したくなりました。",
      a: "その場の判断を否定する必要はありませんが、残す予定だったものは、いったん手元に残して家族と相談してから決めることをおすすめします。保留のものは今回は出さないと事前に決めていた場合は、その取り決めに従うのが適切です。後日、同じ業者や別の業者に査定を依頼することもできます。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "遺品のカメラの出張買取", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">HOME VISIT APPRAISAL</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          遺品のカメラを出張買取で査定してもらう方法｜予約前に家族で決めること・当日の流れ・持ち帰って検討できること
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          実家や故人の家に残されたカメラやレンズ、三脚や防湿庫は、量や重さ、距離の問題から店舗への持ち込みが難しい場合があります。その際の選択肢の一つが、自宅で査定を受けられる出張買取です。本ページでは、予約の前に家族で決めておくこと、予約時に伝えること、当日までの準備、当日の一般的な流れ、その場で決めなくてよいこと、訪問購入のクーリングオフ、家族が遠方にいる場合の段取りを、一般的な知識として整理しています。あわせて、出張対応を公式サイトに記載している掲載社の条件を、確認日とともに掲載しています。手続きを急ぐ必要はありません。
        </p>
        <p className="mt-3 text-xs text-steel-500">最終更新: {PAGE_DATE_LABEL}</p>

        {/* 結論先出し */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">遺品のカメラを出張買取に出す前に家族で決めること</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* 家族で決めること */}
        <section className="mt-14">
          <h2 className="section-title mb-2">予約前に家族で決めておくこと</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            出張買取は、家の中に業者を迎えて、その場で話が進む方法です。準備をせずに当日を迎えると、判断を急かされていると感じやすくなります。予約の前に、家族の間で次の点を決めておくと、当日も落ち着いて対応できます。遺品整理全体の流れは、遺品・実家整理のページで整理しています。
          </p>
          <div className="space-y-5">
            {familyDecisions.map((s, i) => (
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
            ※ 手続きや権利関係、税の扱いについて、本ページでは判断を示しません。税理士・弁護士・お住まいの自治体などにご確認ください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/katami-camera/" className="btn-primary">残すか手放すかの決め方を見る</Link>
            <Link href="/situation/ihin/" className="btn-ghost">遺品・実家整理の全体の流れを見る</Link>
          </div>
        </section>

        {/* 予約時に伝えること */}
        <section className="mt-14">
          <h2 className="section-title mb-2">予約時に伝えること・確認すること</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            予約の段階で伝える情報が具体的であるほど、当日の段取りが整い、説明と見積もりの行き違いも防げます。不明な点は「わからない」と伝えれば問題ありません。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {reserveItems.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 電話で聞いた内容は、日時と担当者名を添えてメモしておくと、当日の説明と照らし合わせやすくなります。
          </p>
        </section>

        {/* 掲載社の出張対応 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">出張対応を公式に記載している掲載社</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            当サイトの掲載社のうち、カメラの出張買取を公式サイトに記載している社について、出張エリア・出張料・査定料・キャンセル・支払方法・本人確認書類・クーリングオフの記載を、公式の表現のまま掲載しています。記載が見当たらない項目は「公式では確認できず」としています。いずれも各社の確認日時点の情報です。申し込みの前に、必ず各社の最新の案内をご確認ください。
          </p>
          <div className="space-y-6">
            {shucchouCompanies.map((c) => (
              <div key={c.slug} className="border border-chalk-line bg-chalk-card">
                <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-chalk-line px-5 py-4">
                  <h3 className="font-display text-base text-steel-900">
                    <Link href={`/kaitori/${c.slug}/`} className="hover:text-vermilion">
                      {c.name}
                    </Link>
                  </h3>
                  <span className="text-xs text-steel-500">{formatChecked(c.confirmed_date)}確認</span>
                </div>
                <div className="overflow-x-auto">
                  <table className="spec-table">
                    <tbody>
                      <tr>
                        <th className="w-32 md:w-48">買取方法</th>
                        <td>{fmt(c.methods)}</td>
                      </tr>
                      <tr>
                        <th className="w-32 md:w-48">対応エリア</th>
                        <td>{fmt(c.area)}</td>
                      </tr>
                      <tr>
                        <th className="w-32 md:w-48">出張料</th>
                        <td>{fmt(c.hiyou.shucchou)}</td>
                      </tr>
                      <tr>
                        <th className="w-32 md:w-48">査定料</th>
                        <td>{fmt(c.hiyou.satei)}</td>
                      </tr>
                      <tr>
                        <th className="w-32 md:w-48">キャンセル</th>
                        <td>{fmt(c.cancel)}</td>
                      </tr>
                      <tr>
                        <th className="w-32 md:w-48">支払方法</th>
                        <td>{fmt(c.nyukin)}</td>
                      </tr>
                      <tr>
                        <th className="w-32 md:w-48">本人確認書類</th>
                        <td>{fmt(c.honnin)}</td>
                      </tr>
                      <tr>
                        <th className="w-32 md:w-48">クーリングオフの記載</th>
                        <td>{fmt(c.cooling_off)}</td>
                      </tr>
                      <tr>
                        <th className="w-32 md:w-48">遺品・大量の記載</th>
                        <td>{fmt(c.ihin)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 space-y-2 text-xs leading-relaxed text-steel-500">
            <p>
              ※ 「買取方法」「対応エリア」「支払方法」は、公式記載のまま引用しているため、出張以外（宅配・店頭）の記載を含む場合があります。
            </p>
            <p>
              ※ {fujiya.name}は、法人・プロユース向けページに「出張引取」の記載がありますが（出張料は「{fmt(fujiya.hiyou.shucchou)}」、{formatChecked(fujiya.confirmed_date)}確認）、個人向けの出張買取の記載ではないため一覧に含めていません。
            </p>
            <p>
              ※ {rakuuru.name}は「{fmt(rakuuru.hiyou.shucchou)}」、{janpara.name}は「{fmt(janpara.hiyou.shucchou)}」（いずれも{formatChecked(rakuuru.confirmed_date)}確認）、{arrows.name}は「{fmt(arrows.hiyou.shucchou)}」（{formatChecked(arrows.confirmed_date)}確認）のため、一覧に含めていません。
            </p>
            <p>
              ※ 一括査定・比較サービスは、出張・宅配・店頭の対応が紹介先の買取店によって異なるため、ここでは扱っていません。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">掲載社を比較表で見る</Link>
            <Link href="/broken/" className="btn-ghost">故障品の受付を明記する社を見る</Link>
          </div>
        </section>

        {/* 当日までの準備 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">当日までの準備</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            機材の清掃や動作確認を行う必要はありません。重要なのは、書類を揃えること、機材の中に残っているものを取り出すこと、査定してもらうものと残すものを明確に分けることの3点です。一般的な売却前の準備は、カメラ・レンズを売る前の準備のページで整理しています。
          </p>
          <div className="space-y-5">
            {beforeDay.map((s, i) => (
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
            ※ {kitamura.name}は、出張買取について「出張買取は18歳未満の依頼を受け付けない」と記載しています（{formatChecked(kitamura.confirmed_date)}確認）。売り主の年齢や書類の条件は、各社の案内でご確認ください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/koujin-film-data/" className="btn-primary">故人のフィルム・データの扱いを見る</Link>
            <Link href="/guide/uru-mae/" className="btn-ghost">カメラ・レンズを売る前の準備を見る</Link>
          </div>
        </section>

        {/* 当日の流れ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">当日の一般的な流れ</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            細かな手順は業者によって異なりますが、出張買取の当日はおおむね次のように進みます。流れを把握しておくと、各段階での確認事項がわかります。
          </p>
          <div className="space-y-5">
            {dayFlow.map((s, i) => (
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
            ※ {daikokuya.name}は、出張買取の流れとして「{fmt(daikokuya.cooling_off)}」と記載しています（{formatChecked(daikokuya.confirmed_date)}確認）。{uriel.name}は「お客様への押し買いや突然の電話営業、訪問営業はいたしません」と公式に記載しています（{formatChecked(uriel.confirmed_date)}確認）。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/tairyou/" className="btn-primary">点数が多い場合の内訳の見方を見る</Link>
            <Link href="/situation/boushitsuko-seiri/" className="btn-ghost">防湿庫ごと出てきた場合を見る</Link>
          </div>
        </section>

        {/* その場で決めなくてよいこと */}
        <section className="mt-14">
          <h2 className="section-title mb-2">その場で決めなくてよいこと・持ち帰って検討できること</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            自宅まで訪問を受けたことから、その場ですべてを決めなければならないと感じる方は少なくありません。しかし、次の事項は当日に決める必要はありません。
          </p>
          <div className="space-y-4">
            {noNeedToDecide.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ {takakuureru.name}は「査定完了から7日間が買取査定の有効期限です」と記載しています（{formatChecked(takakuureru.confirmed_date)}確認）。見積もりの有効期間は業者によって扱いが異なるため、持ち帰って検討する場合は、返事の期限をその場で確認しておきます。
          </p>
        </section>

        {/* クーリングオフ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">訪問購入のクーリングオフ（一般知識）</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-700">
            <p>
              業者が自宅などを訪れて物品を買い取る取引は、特定商取引法で「訪問購入」として扱われ、クーリングオフの制度が設けられています。クーリングオフは、一定の期間内であれば契約を解除できる仕組みです。売却後に家族と話し合い、手元に残したいという結論になった場合にも関係する制度です。
            </p>
            <p>
              制度の対象となる品目や期間、例外の扱いは法令で定められており、業者は契約の内容やクーリングオフについて記載した書面を交付することになっています。当日受け取った書面は、内容を確認したうえで、家族にもわかる場所に保管しておきます。書面の日付が期間の起算に関わるため、受け取った日をメモしておくことをおすすめします。
            </p>
            <p>
              掲載社の中には、公式サイトでクーリングオフについて具体的に記載している社があります。{uriel.name}は「{fmt(uriel.cooling_off)}」と記載しています（{formatChecked(uriel.confirmed_date)}確認）。{takakuureru.name}は「{fmt(takakuureru.cooling_off)}」と記載しています（{formatChecked(takakuureru.confirmed_date)}確認）。記載の有無や表現は社によって異なり、記載が見当たらないことが制度の適用を左右するわけではありません。
            </p>
            <p>
              クーリングオフを利用するかどうか、ご自身の取引が対象になるかどうかで迷う場合は、業者から受け取った書面を手元に置いて、お住まいの地域の消費生活センター（消費者ホットライン「188」）に相談する方法があります。本ページでは、個別の契約について判断を示すことはできません。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/trouble/" className="btn-primary">カメラ買取のトラブル対処法を見る</Link>
          </div>
        </section>

        {/* 遠方の家族 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">家族が遠方にいる場合の段取り</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            遺品整理では、実家が遠方にある、家族が各地に住んでいるといった状況が少なくありません。全員が揃うのを待つことが難しい場合でも、情報の共有方法を工夫すれば、離れた家族も判断に加わることができます。
          </p>
          <div className="space-y-5">
            {remoteFamily.map((s, i) => (
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
            <Link href="/situation/tairyou/" className="btn-primary">出張と宅配の使い分けを見る</Link>
            <Link href="/guide/uru-mae/" className="btn-ghost">梱包を含む売る前の準備を見る</Link>
          </div>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-6">出張買取の前後で確認するチェックリスト</h2>
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
          <h2 className="section-title mb-6">遺品のカメラの出張買取についてよくある質問</h2>
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
                <span className="mt-1 block text-xs text-steel-500">捨てる前の確認点と仕分けの手順</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/katami-camera/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">形見のカメラを残すか手放すか</span>
                <span className="mt-1 block text-xs text-steel-500">使う・保管する・手放すの決め方</span>
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
                <span className="mt-1 block text-xs text-steel-500">収納ごとの仕分けとカビの見分け方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/tairyou/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ・レンズを大量に売るには</span>
                <span className="mt-1 block text-xs text-steel-500">リスト化・内訳・出張と宅配の使い分け</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/trouble/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ買取のトラブル対処法</span>
                <span className="mt-1 block text-xs text-steel-500">トラブル時の相談先と対応の進め方</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
