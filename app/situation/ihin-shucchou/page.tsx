import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";
import { fmt, formatChecked, getCompany } from "@/lib/companies";

const TITLE = "遺品のカメラを出張買取で見てもらうには｜予約前に家族で決めること・当日の流れ・持ち帰って考えてよいこと";
const DESC =
  "実家や故人の家にカメラやレンズが残っていて運び出せない家族向けに、出張買取で見てもらうときの準備を一般知識として整理。予約の前に家族で決めておくこと、予約時に伝えること、当日の一般的な流れ、本人確認書類、その場で決めなくてよいこと、訪問購入のクーリングオフ、家族が遠方にいる場合の段取りと、出張対応を公式に記載している掲載社の条件をまとめました。";
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
    "出張買取は、運び出せない量や重さの機材を、家から動かさずに見てもらえる方法です。ただし「来てもらったら売らなければならない」ものではありません。見てもらうことと、売ると決めることは別の段階です。",
    "予約の電話をかける前に、家族の中で三つだけ決めておくと当日が落ち着きます。誰が窓口になるか、何を見てもらうか（残すものを先に取り分けておく）、当日誰が立ち会うか、です。",
    "予約のときは、機材のおおよその点数と種類、保管の状態、家の場所と搬出の条件、立ち会う人を伝えます。あわせて出張料・キャンセル時の扱い・支払方法・クーリングオフの説明の有無を聞いておくと、当日に慌てずに済みます。",
    "当日は、一点ずつの内訳を見せてもらい、その場で決めきれないものは持ち帰って考えてかまいません。家族に相談してから、という返事は失礼にあたりません。",
    "自宅での買取（訪問購入）には、特定商取引法にもとづくクーリングオフの制度があります。制度の細部や個別の契約については、業者から受け取る書面と、消費生活センターなど公的な窓口の案内で確認します。",
  ];

  const familyDecisions = [
    {
      t: "窓口になる人を一人決める",
      d: "業者とのやり取りは、一人に集めた方が混乱しません。複数の家族がそれぞれ別の業者に電話をかけると、同じ日に二社が来てしまう、伝えた内容が食い違う、といったことが起こりがちです。窓口役は、実家に通いやすい人、平日に電話を受けられる人など、実務のしやすさで選べば十分です。決めた窓口役の名前を家族全員に共有しておきます。",
    },
    {
      t: "手放すことを家族で共有しておく",
      d: "故人の持ち物を手放すことについて、家族や親族の間で考えがそろっていないと、後で「知らなかった」「あれは残してほしかった」という行き違いになります。電話一本、メッセージ一通でかまわないので、出張買取で見てもらう予定であること、見てもらう日、残したいものがあれば事前に知らせてほしいことを伝えておきます。権利関係や手続きで判断に迷う場合は、税理士・弁護士・お住まいの自治体などにご確認ください。",
    },
    {
      t: "残すもの・手放すもの・保留を先に分ける",
      d: "査定員が来てから「これは残す」「これはどうしよう」と迷うと、判断が場の空気に流されやすくなります。形見として残すものは、あらかじめ別の部屋や箱に移し、査定の場に出さないのが確実です。迷うものは「保留」の箱にまとめ、当日は見てもらうだけにする、と家族で決めておく方法もあります。残すか手放すかそのものの考え方は、形見のカメラのページで整理しています。",
    },
    {
      t: "立ち会う人を決める",
      d: "当日は、売り主になる人が立ち会うのが基本です。売り主以外の家族が同席するかどうかも決めておきます。二人以上で立ち会うと、説明の聞き漏らしが減り、決めきれないときに相談もできます。遠方の家族が来られない場合は、電話やビデオ通話でつなげるように準備しておく方法があります（後述）。",
    },
    {
      t: "「当日は決めなくてもよい」と先に決めておく",
      d: "見積もりを聞いてから家族で相談する、と最初から決めておくと、当日の心理的な負担がぐっと軽くなります。予約の時点で「今回は見てもらうだけで、決めるのは家族と相談してから」と伝えておいてもかまいません。査定だけで終わる可能性をあらかじめ伝えておけば、業者の側もその前提で動けます。",
    },
  ];

  const reserveItems = [
    {
      label: "機材のおおよその内容",
      value:
        "カメラ本体が何台、レンズが何本、三脚やバッグ、防湿庫などの周辺機材があるか、ざっくりで構いません。フィルムカメラが中心か、デジタルカメラが中心かも伝えます。機種名が分からなくても問題はありません。型番は本体の底面や銘板、レンズの鏡筒やキャップ付近に刻印されていることが多いので、読み取れたものだけメモしておきます。",
    },
    {
      label: "保管の状態",
      value:
        "押し入れや物置に長くしまわれていた、防湿庫に入っていた、革ケースにカビのようなものが見える、電池が入ったままだった、など、見て分かる範囲の事実を伝えます。状態を良く見せようとする必要はありません。事実のまま伝えておくと、当日の説明と見積もりの行き違いが減ります。",
    },
    {
      label: "訪問先の住所と搬出の条件",
      value:
        "訪問先が売り主の住まいではなく実家や故人の家である場合は、そのことをはっきり伝えます。駐車スペースの有無、エレベーターのない階段、機材が置かれている部屋の階数なども、分かれば伝えておくと当日の段取りがスムーズです。対応エリアは業者によって異なり、エリア内でも対応できない地域がある旨を記載している業者もあります。",
    },
    {
      label: "立ち会う人と売り主",
      value:
        "当日誰が立ち会い、誰が売り主になるかを伝えます。本人確認書類の住所と訪問先の住所が異なる場合に、どのような書類が必要になるかは、業者ごとの確認事項です。予約の時点で聞いておけば、当日に書類が足りず手続きが進まない、ということを避けられます。",
    },
    {
      label: "希望日時と所要時間",
      value:
        "点数が多いと査定に時間がかかります。どのくらいの時間を見ておけばよいかを予約時に尋ね、片付けの日程や家族の予定と重ならないように組みます。実家に泊まりがけで片付けに行く場合は、初日ではなく二日目以降に設定すると、仕分けの時間を確保しやすくなります。",
    },
    {
      label: "予約時に聞いておくこと",
      value:
        "出張料・査定料がかかるか、査定だけで断った場合に費用がかかるか、支払いは現金か振込か、クーリングオフについてどのような説明があるか。この四点は、当日ではなく予約の段階で聞いておくと安心です。答えはメモしておき、当日の説明と食い違いがないかを確認する材料にします。",
    },
  ];

  const beforeDay = [
    {
      t: "本人確認書類を用意する",
      d: "買取には、売り主の本人確認が必要です。古物の取引では本人確認が求められるため、書類がないと手続きができません。使える書類の種類、現住所の記載が必要かどうか、補助書類が要るかどうかは業者によって異なります。下の一覧に、公式に記載されている範囲を載せています。訪問先が実家で、書類の住所が別の場所になる場合の扱いは、予約時に確認しておきます。",
    },
    {
      t: "中に残っているものを抜いておく",
      d: "カメラにフィルムやメモリーカード、電池が入ったままになっていることがあります。撮影途中のフィルムがあるかもしれないため、フィルムカメラの裏ぶたは不用意に開けないでください。メモリーカードには故人の写真が残っている場合があります。取り出し方と扱いは、故人のフィルム・データのページで詳しく整理しています。電池は抜いて別に保管し、液漏れしている電池は素手で触らず、自治体の案内に従って処分します。",
    },
    {
      t: "見てもらうものを一か所に集める",
      d: "家のあちこちに散らばった機材を、当日査定員に探してもらうのは現実的ではありません。見てもらうものを一つの部屋、できればテーブルのある場所に集めます。残すものと保留のものは、別の部屋に移すか、はっきり分かる目印を付けて分けておきます。箱や付属品、説明書、購入時の書類などが見つかれば、本体と一緒に置いておきます。",
    },
    {
      t: "写真とリストを残しておく",
      d: "当日までに、見てもらうものを一度スマートフォンで撮影し、簡単なリストを作っておくことをおすすめします。何を見てもらい、何を売り、何を手元に残したのかを後から家族に説明する材料になります。点数が多い場合のリストの作り方は、大量売却のページで整理しています。",
    },
    {
      t: "無理に動かしたり、きれいにしたりしない",
      d: "動作を確かめようとして電池を入れたり、固くなった巻き上げを力で回したりすると、状態を悪くすることがあります。レンズのくもりを強く拭くのも避けた方が無難です。外装のほこりを乾いた柔らかい布で軽く払う程度にとどめ、動くかどうかは「分からない」と伝えれば十分です。壊れている機材の扱いは、壊れた・ジャンクのページで整理しています。",
    },
  ];

  const dayFlow = [
    {
      t: "到着と身元の確認",
      d: "査定員が到着したら、業者名と担当者の名前を確認します。予約した業者と同じかどうかを確かめることは、失礼なことではありません。訪問購入では、依頼を受けていない業者が飛び込みで買取を勧誘することは、法律で禁止されているとされています。予約していない業者が訪ねてきた場合は、応じる必要はありません。",
    },
    {
      t: "説明を受ける",
      d: "査定の前に、業者から手続きの流れや書面について説明があるのが一般的です。聞き逃したことはその場で聞き返してかまいません。クーリングオフの説明があったかどうかは、後から家族に伝えられるよう、メモしておくと安心です。",
    },
    {
      t: "査定",
      d: "査定員が機材を一点ずつ確認します。外観、レンズの中、動作の確認などを行うのが一般的です。点数が多いと時間がかかります。査定の間ずっと横で見ている必要はありませんが、同じ部屋にいて、気になったことはその都度尋ねられるようにしておくとよいでしょう。査定の対象にしてほしくないもの（残すもの）が紛れていないかも、この段階で確認します。",
    },
    {
      t: "内訳を見せてもらう",
      d: "見積もりは、できれば一点ずつ、または品目ごとの内訳で示してもらいます。「一式でいくら」だけでは、どれが評価され、どれに値段が付かなかったのかが分かりません。内訳があれば、一部だけ売って残りは手元に残す、という判断もできます。内訳の見方は、大量売却のページでも整理しています。",
    },
    {
      t: "売るかどうかを決める（決めなくてもよい）",
      d: "内訳を見て、売るもの・売らないものを決めます。この段階で決めきれなければ、「家族と相談してから連絡します」と伝えて、いったん終えてかまいません。一部だけ売る、今回は売らない、という選択もできます。業者によっては、1点ごとに売却するかどうかを判断できる旨や、断った場合にキャンセル料がかからない旨を公式に記載しています（下の一覧を参照）。",
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
      t: "査定を受けたからといって、売る必要はない",
      d: "出張で来てもらうと、「わざわざ来てもらったのだから」と感じて断りにくくなることがあります。けれども、見てもらうことと売ることは別です。査定だけで終わっても、それは予定どおりの一つの結果です。",
    },
    {
      t: "全部を一度に売る必要はない",
      d: "一部だけ売り、残りは手元に残す、あるいは別の業者にも見てもらう、という進め方ができます。内訳が出ていれば、どれを手放すかを一点ずつ選べます。",
    },
    {
      t: "保留にしていたものを、その場で決める必要はない",
      d: "当日の雰囲気で、保留の箱のものまで出してしまいたくなることがあります。事前に「保留のものは今回は出さない」と家族で決めておけば、その約束に従うだけで済みます。",
    },
    {
      t: "他の業者の見積もりと比べてから決めてよい",
      d: "複数の業者に見てもらってから決めるのは、ごく一般的なことです。その場合は、どの業者にも同じ機材を同じ状態で見せ、同じ情報を伝えると比べやすくなります。複数社に聞く考え方は、遺品・実家整理のページで整理しています。",
    },
    {
      t: "家族の了解を得てから決めてよい",
      d: "窓口役が一人で決めずに、写真と内訳を家族に共有してから返事をする、という進め方は十分に理にかなっています。後で行き違いになるよりも、一日二日返事を待ってもらう方が、家族にとっても業者にとっても負担が小さいはずです。",
    },
  ];

  const remoteFamily = [
    {
      t: "現地に行ける人と、行けない人の役割を分ける",
      d: "実家の近くに住む家族が立ち会い、遠方の家族は判断に加わる、という分担が現実的です。現地の人は仕分けと当日の立ち会い、遠方の人は業者の条件の下調べや、家族内の連絡のとりまとめ、というように、できることを分けておきます。",
    },
    {
      t: "写真とリストで「何があるか」を共有する",
      d: "遠方の家族は、実物を見ずに判断することになります。仕分けの前に、機材を並べて全体を撮った写真と、一点ずつの写真、簡単なリストを共有しておくと、残したいものがあるかどうかを事前に聞き取れます。共有した写真とリストは、当日の照合にもそのまま使えます。",
    },
    {
      t: "当日は電話やビデオ通話でつなぐ",
      d: "内訳が出た段階で、遠方の家族と電話やビデオ通話でつなぎ、相談してから決めるという方法があります。その場合は、査定員に「家族と相談する時間をください」と先に伝えておきます。つなげなかった場合に備えて、「決めきれなければ今回は売らない」を原則にしておくと安心です。",
    },
    {
      t: "現地に誰も行けないときの選択肢",
      d: "家族の誰も立ち会えない場合、出張買取は難しくなることがあります。売り主の立ち会いや本人確認の扱いは業者ごとに異なるため、事前に相談が必要です。片付けの日程を待つ、いったん機材を手元に送ってもらって宅配買取を検討する、といった別の道もあります。機材を送る場合は、レンズを一本ずつ緩衝材で包むなど輸送の注意が必要です。",
    },
    {
      t: "結果を家族に報告する",
      d: "当日が終わったら、何を売り、何を手元に残し、何がどこに残っているかを、写真やリストと一緒に家族に報告します。受け取った書面の写しや写真も共有しておけば、後から確認が必要になったときに困りません。",
    },
  ];

  const checklist = [
    "業者とのやり取りを担当する窓口役を一人決め、家族に共有した",
    "出張買取で見てもらう予定と日程を、家族・親族に伝えた",
    "形見として残すものを、査定の場とは別の部屋や箱に移した",
    "迷うものを保留の箱にまとめ、当日は出さないと家族で決めた",
    "当日立ち会う人と売り主を決めた",
    "予約時に、機材のおおよその点数・種類・保管状態・訪問先の住所と搬出の条件を伝えた",
    "予約時に、出張料・査定料・断った場合の費用・支払方法・クーリングオフの説明を確認した",
    "本人確認書類を用意し、訪問先と住所が異なる場合の扱いを確認した",
    "フィルム・メモリーカード・電池を取り出した（撮影途中のフィルムに注意）",
    "見てもらうものを一か所に集め、写真とリストを残した",
    "遠方の家族と、当日電話やビデオ通話でつなぐ段取りをした",
    "当日は内訳を見せてもらい、決めきれないものは持ち帰ると決めた",
    "受け取った書面を保管し、結果を家族に報告した",
  ];

  const faqs = [
    {
      q: "出張買取で来てもらったら、必ず売らなければいけませんか？",
      a: "売る必要はありません。見てもらうことと売ると決めることは別の段階です。内訳を見て、一部だけ売る、今回は売らない、家族と相談してから返事をする、という選択ができます。断った場合に費用がかかるかどうかは業者によって記載が異なるため、予約時に確認しておくと安心です。このページの一覧には、公式に記載されている範囲を載せています。",
    },
    {
      q: "実家に残された機材を、別の場所に住む家族が売ることはできますか？",
      a: "売り主の本人確認書類の住所と訪問先の住所が異なる場合の扱いは、業者ごとの確認事項です。予約の時点で、訪問先が実家であること、売り主が誰で、どこに住んでいるかを伝え、必要な書類を確認してください。また、故人の持ち物を手放すことについては、事前に家族や親族の間で認識をそろえておくことが大切です。権利関係で迷う場合は、税理士・弁護士・お住まいの自治体などにご確認ください。",
    },
    {
      q: "機種名も価値も分かりません。それでも出張で見てもらってよいですか？",
      a: "問題ありません。機種名が分からなくても、何台・何本あるか、どのような状態で保管されていたかを伝えれば予約できます。型番は本体の底面や銘板、レンズの鏡筒に刻印されていることが多いので、読み取れたものだけメモしておけば十分です。動くかどうかも「分からない」と伝えればよく、無理に電池を入れて確かめる必要はありません。",
    },
    {
      q: "訪問購入のクーリングオフとは何ですか？",
      a: "自宅などで物品を買い取られる取引（訪問購入）について、特定商取引法にクーリングオフの制度が設けられています。一定の期間内であれば契約を解除できる仕組みです。適用の対象や期間、例外は法令で定められており、業者から交付される書面にも記載されます。掲載社の中には、公式サイトでクーリングオフの期間や対象外となる場合を明記している社もあります。個別の契約で迷う場合は、お住まいの地域の消費生活センターにご相談ください。",
    },
    {
      q: "家族が遠方にいて、当日立ち会えません。どうすればよいですか？",
      a: "写真とリストで事前に「何があるか」を共有し、残したいものがないかを聞き取っておきます。当日は、内訳が出た段階で電話やビデオ通話でつなぎ、相談してから決める方法があります。つなげなかった場合に備えて、決めきれないものは今回は売らないのを原則にしておくと、後の行き違いを防げます。",
    },
    {
      q: "査定の場で気が変わって、残すつもりだったものまで売りたくなりました。",
      a: "その場の判断を否定する必要はありませんが、残すつもりだったものは、いったん手元に残して家族と相談してから決めても遅くはありません。事前に「保留のものは今回は出さない」と決めていたなら、その約束に従うのが無難です。後から同じ業者や別の業者に見てもらうこともできます。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "遺品のカメラを出張買取で見てもらうには", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">HOME VISIT APPRAISAL</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          遺品のカメラを出張買取で見てもらうには｜予約前に家族で決めること・当日の流れ・持ち帰って考えてよいこと
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          実家や故人の家に、カメラやレンズ、三脚や防湿庫が残っている。量が多く、重く、遠方でもあり、店に持ち込むのは難しい。そうしたときの選択肢の一つが、家まで来て見てもらう出張買取です。このページでは、予約の前に家族で決めておくこと、予約時に伝えること、当日までの準備、当日の一般的な流れ、その場で決めなくてよいこと、訪問購入のクーリングオフ、家族が遠方にいる場合の段取りを、一般知識として整理します。あわせて、出張対応を公式サイトに記載している掲載社の条件を、確認日とともに載せています。急いで進める必要はありません。
        </p>
        <p className="mt-3 text-xs text-steel-500">最終更新: {PAGE_DATE_LABEL}</p>

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

        {/* 家族で決めること */}
        <section className="mt-14">
          <h2 className="section-title mb-2">予約の前に、家族で決めておくこと</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            出張買取は、家の中に業者を迎えて、その場で話が進む方法です。準備なく当日を迎えると、判断を急かされているように感じやすくなります。予約の電話をかける前に、家族の間で次の点を決めておくと、当日を落ち着いて過ごせます。遺品整理全体の流れは、遺品・実家整理のページで整理しています。
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
            ※ 手続きや権利関係、税の扱いについては、このページでは判断を示しません。税理士・弁護士・お住まいの自治体などにご確認ください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/katami-camera/" className="btn-primary">残すか手放すかの決め方を見る</Link>
            <Link href="/situation/ihin/" className="btn-ghost">遺品・実家整理の全体の流れを見る</Link>
          </div>
        </section>

        {/* 予約時に伝えること */}
        <section className="mt-14">
          <h2 className="section-title mb-2">予約のときに伝えること・聞いておくこと</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            予約の段階で伝える情報が具体的なほど、当日の段取りが整い、説明と見積もりの行き違いも減ります。分からないことは「分からない」と伝えれば十分です。
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
            当サイトの掲載社のうち、カメラの出張買取を公式サイトに記載している社について、出張エリア・出張料・査定料・キャンセル・支払方法・本人確認書類・クーリングオフの記載を、公式の表現のまま並べています。記載が見当たらない項目は「公式では確認できず」としています。いずれも各社の確認日時点の情報です。申し込みの前に、必ず各社の最新の案内で確認してください。
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
          <h2 className="section-title mb-2">当日までにしておくこと</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            準備といっても、機材をきれいにしたり動作を確かめたりする必要はありません。大切なのは、書類を揃えること、中に残っているものを抜くこと、見てもらうものと残すものをはっきり分けることの三つです。一般的な売る前の準備は、売る前の準備ガイドで整理しています。
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
            ※ {kitamura.name}は、出張買取について「出張買取は18歳未満の依頼を受け付けない」と記載しています（{formatChecked(kitamura.confirmed_date)}確認）。売り主の年齢や書類の条件は、各社の案内で確認してください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/koujin-film-data/" className="btn-primary">故人のフィルム・データの扱いを見る</Link>
            <Link href="/guide/uru-mae/" className="btn-ghost">売る前の準備ガイドを見る</Link>
          </div>
        </section>

        {/* 当日の流れ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">当日の一般的な流れ</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            細かな手順は業者によって異なりますが、出張買取の当日はおおむね次のように進みます。流れを知っておくだけで、どこで何を確認すればよいかが見えてきます。
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
            ※ {daikokuya.name}は、出張買取の流れとして「{fmt(daikokuya.cooling_off)}」と記載しています（{formatChecked(daikokuya.confirmed_date)}確認）。{uriel.name}は「依頼を受けていない突然の訪問や執拗な電話勧誘は行っていない」と公式に記載しています（{formatChecked(uriel.confirmed_date)}確認）。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/situation/tairyou/" className="btn-primary">点数が多い場合の内訳の見方を見る</Link>
            <Link href="/situation/boushitsuko-seiri/" className="btn-ghost">防湿庫ごと出てきた場合を見る</Link>
          </div>
        </section>

        {/* その場で決めなくてよいこと */}
        <section className="mt-14">
          <h2 className="section-title mb-2">その場で決めなくてよいこと・持ち帰って考えてよいこと</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            家まで来てもらったという気持ちから、その場で全部を決めなければと感じる方は少なくありません。けれども、次のことはその日に決める必要はありません。
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
            ※ {takakuureru.name}は「査定完了から7日間が買取査定の有効期限です」と記載しています（{formatChecked(takakuureru.confirmed_date)}確認）。見積もりの有効期間は業者によって扱いが異なるため、持ち帰って考える場合は、いつまでに返事をすればよいかをその場で確認しておきます。
          </p>
        </section>

        {/* クーリングオフ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">訪問購入のクーリングオフ（一般知識）</h2>
          <div className="max-w-3xl space-y-4 text-sm leading-loose text-steel-700">
            <p>
              業者が自宅などを訪れて物品を買い取る取引は、特定商取引法で「訪問購入」として扱われ、クーリングオフの制度が設けられています。クーリングオフは、一定の期間内であれば契約を解除できる仕組みです。売った後に家族と話し合い、やはり手元に残したいという結論になった場合にも関わってくる制度です。
            </p>
            <p>
              制度の対象となる品目や期間、例外の扱いは法令で定められており、業者は契約の内容やクーリングオフについて記載した書面を交付することになっています。当日受け取った書面は、内容を確認したうえで、家族にも分かる場所に保管しておきます。書面の日付が期間の起算に関わるため、受け取った日をメモしておくと安心です。
            </p>
            <p>
              掲載社の中には、公式サイトでクーリングオフについて具体的に記載している社があります。{uriel.name}は「{fmt(uriel.cooling_off)}」と記載しています（{formatChecked(uriel.confirmed_date)}確認）。{takakuureru.name}は「{fmt(takakuureru.cooling_off)}」と記載しています（{formatChecked(takakuureru.confirmed_date)}確認）。記載の有無や表現は社によって異なり、記載が見当たらないことが制度の適用を左右するわけではありません。
            </p>
            <p>
              クーリングオフを使うかどうか、自分の取引が対象になるかどうかで迷う場合は、業者から受け取った書面を手元に置いて、お住まいの地域の消費生活センター（消費者ホットライン「188」）に相談する方法があります。このページでは、個別の契約について判断を示すことはできません。
            </p>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/guide/trouble/" className="btn-primary">トラブル時の対処を見る</Link>
          </div>
        </section>

        {/* 遠方の家族 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">家族が遠方にいる場合の段取り</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            実家が遠い、家族が各地に住んでいる、というのは遺品整理ではよくあることです。全員が揃うのを待つのが難しい場合でも、共有の仕方を工夫すれば、離れた家族も判断に加わることができます。
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
                <span className="mt-1 block text-xs text-steel-500">収納ごとの仕分けとカビの見分け</span>
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
                <span className="font-display text-steel-900">買取トラブルの対処</span>
                <span className="mt-1 block text-xs text-steel-500">困ったときの確認先と進め方</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
