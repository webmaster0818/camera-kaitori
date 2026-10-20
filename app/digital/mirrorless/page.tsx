import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR } from "@/lib/site";
import { MIRRORLESS_LISTED } from "@/lib/mirrorless";

const TITLE = "ミラーレスカメラ買取前の確認事項｜型番・マウント・付属品・センサー・初期化";
const H1 = "ミラーレスカメラ買取前の確認事項｜型番・マウント・付属品・センサー・初期化の確認手順";
const DESC =
  "ミラーレスカメラを買取に出す前の確認手順を整理しています。型番とマウントの確認方法、ボディ単体かレンズキットかの判断、付属品の準備、センサーをご自身で清掃しない理由、Wi-Fi・Bluetooth・アカウントのリセット、掲載社の公式記載を解説します。";
const PATH = "/digital/mirrorless/";
const PAGE_DATE = "2026-10-15";
const PAGE_DATE_LABEL = "2026年10月15日";

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

export default function MirrorlessPage() {
  const conclusions = [
    "最初に確認するのは、本体の型番とマウント名です。ミラーレスカメラは同じシリーズ名で世代の異なる機種が多く、型番が一文字異なるだけで別の機種となります。マウント名は、手元のレンズがそのボディ用かどうかを整理するための手がかりになります。",
    "ボディ単体で出すか、レンズを付けたキットとして出すかを事前に決めます。レンズにも型番があり、ボディとは別の機材として扱われることがあります。どちらの扱いになるかは業者ごとに異なるため、申込時に確認します。",
    "付属品は、バッテリー・充電器（またはUSBケーブル）・ボディキャップ・ストラップ・元箱・取扱説明書を探します。バッテリーや充電器がない機材を受け付けないと公式に記載している業者もあります。",
    "ミラーレスカメラは、レンズを外すとマウントの奥にイメージセンサーが露出しやすい構造です。センサーをご自身で拭いたり、道具を差し込んだりすることは避け、ゴミや汚れは確認できた状態のまま申告します。",
    "通信機能を使っていた機種は、メモリーカードを抜くだけでなく、Wi-Fi・Bluetoothの接続先、スマートフォンアプリやメーカーのサービスへの登録も整理してから手放します。",
  ];

  const modelChecks = [
    {
      t: "型番は本体の底面など正面以外の場所で確認する",
      d: "ミラーレスカメラの正面や上面には、シリーズ名やロゴが大きく入っていることが多い一方、正式な型番は底面の三脚穴の近く、バッテリー室のふた付近、液晶の裏側などに小さく表示されていることがあります。底面のラベルには製造番号（シリアルナンバー）が並んでいることも多いため、型番とあわせて写真に撮っておきます。",
    },
    {
      t: "本体のメニュー画面で確認できる場合",
      d: "電源が入る状態であれば、設定メニューの中にある機種情報やファームウェアのバージョン表示の画面に、機種名が表示されることがあります。ラベルがすれて読めないときの手がかりになります。メニュー名や表示場所は機種によって異なるため、見つからない場合は取扱説明書を参照します。",
    },
    {
      t: "マウント名は仕様表や取扱説明書で確認する",
      d: "レンズを取り付ける金属の輪（マウント）の名前は、本体に大きく印字されていないこともあります。型番がわかれば、メーカーの製品ページや取扱説明書の仕様欄でマウント名を確認できます。手元に複数のレンズがある場合は、どのレンズがこのボディに付くのかを整理する基準になります。",
    },
    {
      t: "同じシリーズの世代違いに注意する",
      d: "ミラーレスカメラは、末尾の数字や記号のみが異なる後継機が続けて発売されることがあります。外観がよく似ていても別の機種である場合があるため、問い合わせの際はシリーズ名ではなく型番を書き写して伝えます。末尾の記号まで正確に控えることが重要です。",
    },
    {
      t: "元箱・保証書・購入時の書類も照らし合わせる",
      d: "元箱の側面や保証書には、型番に加えて「ボディのみ」か「レンズキット」かといった販売時の構成が書かれていることがあります。購入時の構成がわかると、付属品の範囲を判断しやすくなります。",
    },
  ];

  const kitChecks = [
    {
      t: "レンズの型番を、ボディとは別に控える",
      d: "交換レンズにも型番があり、多くはレンズの鏡筒の側面や、前玉まわりのリングに表示されています。焦点距離（例: 何mmから何mm）と明るさの数値、メーカーの記号を含めて書き写します。キットで購入したレンズでも、業者への申告ではボディとは別の一本として扱われることがあります。",
    },
    {
      t: "ボディ単体・レンズ単体・一式のいずれで出すかを決める",
      d: "撮影をやめる場合はレンズを含めた一式、同じマウントのまま本体のみを買い替える場合はボディ単体というように、手放す理由によって出し方は変わります。ボディ単体・レンズ単体を受け付けるかどうか、キットとしてまとめて査定するかどうかは業者ごとに異なります。迷う場合は、申込時に両方の出し方で相談できるかを確認します。",
    },
    {
      t: "レンズを手元に残す場合のボディキャップの準備",
      d: "レンズを手元に残してボディのみを送る場合、マウントを覆うボディキャップがないとセンサー側がむき出しになります。購入時のボディキャップが見つからなければ、その旨を申込時に伝え、梱包方法を業者に確認します。また、手元に残すレンズには、後ろ側のキャップを忘れずに付けておきます。",
    },
    {
      t: "マウントアダプターや別売アクセサリーは分けて記載する",
      d: "別のマウントのレンズを付けるためのマウントアダプター、外付けのグリップ、予備バッテリー、外付けマイクなど、後から買い足したアクセサリーが付いたままのことがあります。これらは付属品ではなく別の機材として扱われることが多いため、一覧を分けて書き出し、一緒に出すかどうかを決めます。",
    },
  ];

  const accessories = [
    {
      label: "バッテリー",
      value:
        "ミラーレスカメラの多くは、機種ごとの専用バッテリーを使います。本体のバッテリー室に入ったままになっていないかをまず確認し、予備のバッテリーがカメラバッグの中などに別に保管されていないかも探します。バッテリーに膨らみがある場合は、充電を試さず、そのまま業者に状態を伝えて相談します。",
    },
    {
      label: "充電器・USBケーブル",
      value:
        "バッテリーを単体で充電する台座型の充電器が付属する機種のほか、本体にUSBケーブルをつないで充電する構成で、単体の充電器が付属しない機種もあります。元箱や取扱説明書の「付属品」の欄で、購入時の内容を確認できます。ほかの機器の充電器やケーブルで代用して試すことはお控えください。",
    },
    {
      label: "ボディキャップ・レンズキャップ",
      value:
        "ボディのマウントを覆うボディキャップと、レンズの前後のキャップは、センサーとレンズを保護する重要な部品です。レンズを付けたまま保管していた場合、ボディキャップが別の場所にあることが多いため、カメラバッグのポケットや元箱の中を探します。",
    },
    {
      label: "ストラップ",
      value:
        "購入時に付属していた純正ストラップのほか、後から付け替えたストラップが付いていることがあります。いずれがあるかを分けて記載しておくと、申告しやすくなります。",
    },
    {
      label: "元箱・取扱説明書・保証書",
      value:
        "元箱、取扱説明書、保証書、ソフトウェアの案内などは、揃っていれば一緒にまとめます。保証書に名前や住所を記入している場合は、その扱いを申込時に確認します。元箱の有無の扱いは業者ごとに基準が異なるため、あるものは揃え、ないものはないと伝えるのが基本です。",
    },
    {
      label: "レンズフードなど（キットの場合）",
      value:
        "レンズキットとして出す場合は、レンズフードやレンズポーチなど、レンズ側の付属品も確認します。フードはレンズに逆向きに付けた状態で保管されていることがあります。",
    },
  ];

  const usageNotes = [
    {
      t: "シャッター回数は数値と確認方法をあわせて伝える",
      d: "ミラーレスカメラは使用状況の目安としてシャッター回数を聞かれることがあります。確認方法はメーカー・機種によって異なり、本体のメニューで表示できる機種もあれば、そうでない機種もあります。数値がわかった場合は、確認した方法もあわせて伝えます。わからない場合は「不明」と伝えれば問題ありません。一般的な確認方法は、デジタルカメラ買取のページで整理しています。",
    },
    {
      t: "電子シャッターを多用していた場合は、その事実も添える",
      d: "ミラーレスカメラには、機械式のシャッター幕を動かさずに撮影できる電子シャッターを備えた機種があります。電子シャッターでの撮影がシャッター回数の表示に含まれるかどうかは機種によって異なるとされるため、数値のみで使用状況を判断せず、電子シャッターを中心に使っていたなど、記憶している使い方を添えると食い違いを防げます。",
    },
    {
      t: "数値の評価は業者に任せる",
      d: "シャッター回数を査定でどのように扱うかは業者ごとに異なり、当サイトの掲載社データにもその基準の記載はありません。当サイトからは、回数の多い少ないで評価を示すことはしません。事実を伝え、評価は業者に委ねるのが基本です。",
    },
    {
      t: "使用頻度・保管状況を記憶している範囲で伝える",
      d: "購入時期、主な使い方（旅行で年に数回、仕事で毎週など）、防湿庫やドライボックスで保管していたかどうかは、外から見えない情報です。推測で補わず、記憶している範囲で書き出しておくと、問い合わせの内容を整理できます。",
    },
  ];

  const sensorNotes = [
    {
      t: "ミラーレスカメラはセンサーが露出しやすい構造",
      d: "ミラーレスカメラは、一眼レフのようにレンズとセンサーの間に反射ミラーを持たない構造です。そのため、多くの機種でレンズを外すとマウントの奥にイメージセンサー（またはその前面のフィルター）が直接見えます。レンズ交換の回数が多かった機材ほど、ゴミが付いている可能性があります。",
    },
    {
      t: "センサーをご自身で拭かない・道具を差し込まない",
      d: "センサーの表面は傷が付きやすく、清掃には専用の道具と手順が必要とされています。綿棒や布で拭く、指で触れる、ブロアーの先端をマウントの奥まで差し込む、といった行為は避けます。缶入りのエアダスターも、噴射の勢いや液体の噴出によってセンサーを傷めるおそれがあるとされ、一般に避けるよう案内されています。ゴミが気になる場合も、確認できた状態のまま申告するほうが安全です。",
    },
    {
      t: "本体のセンサークリーニング機能の使用は取扱説明書で確認する",
      d: "機種によっては、センサーを振動させてほこりを落とす機能が本体に備わっていることがあります。メニューから実行できる場合でも、使い方や注意点は機種ごとに異なるため、取扱説明書の記載に従います。電池残量が少ない状態で清掃関連の操作をしないよう案内している機種もあります。",
    },
    {
      t: "マウントの接点とマウント面は乾いた布でほこりを払う程度にとどめる",
      d: "マウント部分には、レンズと通信するための金属の接点が並んでいます。接点を強くこすったり、溶剤を付けたりするのは避けます。マウント面やボディの外装は、乾いた柔らかい布でほこりを払う程度にとどめ、傷やすれは写真に撮って申告します。",
    },
    {
      t: "レンズを外している時間を短くする",
      d: "動作確認や写真撮影のためにレンズを外すときは、ほこりの少ない室内で、マウントを下向きにして手早く付け替えます。外したらすぐにボディキャップとレンズの後ろ側のキャップを付けます。発送時もキャップを付けた状態で梱包します。",
    },
  ];

  const resetSteps = [
    {
      t: "メモリーカードを抜き、必要なデータを保存する",
      d: "カードの抜き方、スロットが2つある機種での確認、本体の初期化の考え方は、デジタルカメラ買取のページと、カメラ・レンズを売る前の準備のページで整理しています。ここでは、ミラーレスカメラで特に残りやすい通信関連の設定を中心に扱います。",
    },
    {
      t: "カメラに保存された Wi-Fi の接続先を削除する",
      d: "スマートフォンへの転送やパソコンへの送信のために、自宅や職場の Wi-Fi の接続先を本体に登録していることがあります。機種によっては、ネットワークの名前や接続情報が本体に残ります。通信設定のメニューに、ネットワーク設定のリセットや接続先の削除の項目があるかを確認します。",
    },
    {
      t: "Bluetooth のペアリングを、カメラ側とスマートフォン側の両方で解除する",
      d: "スマートフォンと Bluetooth で常時接続して、撮影した写真に位置情報を付けたり、リモート撮影をしたりする機能を使っていた場合は、カメラ側のペアリング情報を削除し、スマートフォンの Bluetooth 設定からもカメラの登録を削除します。片方のみでは登録が残ることがあります。",
    },
    {
      t: "スマートフォンアプリ・クラウドサービス・製品登録を見直す",
      d: "メーカーのスマートフォンアプリにカメラを登録していた場合はアプリ側から登録を削除し、写真の自動転送やクラウド連携を設定していた場合はその連携も解除します。メーカーの会員サイトに製品登録をしていた場合、登録を削除する必要があるかどうかはメーカーの案内を確認します。",
    },
    {
      t: "著作権情報・撮影者名などを削除してから設定を初期化する",
      d: "写真に書き込む撮影者名や著作権者名、カスタム設定の名前などに、氏名やメールアドレスを入れていることがあります。項目を確認してから、本体の設定を初期状態に戻すリセットを行います。リセットの範囲（通信設定を含むかどうか）は機種によって異なるため、取扱説明書で確認します。",
    },
    {
      t: "リセット後に通信設定と再生画面を再確認する",
      d: "リセットが終わったら、通信設定に接続先が残っていないか、再生画面に写真が表示されないかを確認します。電源が入らない機材など操作できない場合は、その旨を申込時に伝え、業者の対応を確認します。",
    },
  ];

  const firmwareNotes = [
    {
      t: "売却前の更新は必須ではない",
      d: "売る前に最新のファームウェアへ更新しておく必要は、一般的にはないとされます。現在のバージョンは設定メニューで確認できることが多いため、わかる場合に控えておく程度で問題ありません。",
    },
    {
      t: "更新する場合は電池を十分に充電してから行う",
      d: "更新する場合は、途中で電池が切れたり操作を中断したりすると不具合の原因になりうるため、十分に充電したバッテリーで、メーカーの案内どおりの手順で行います。ミラーレス用のレンズにはレンズ側のファームウェアを持つものもあり、更新の方法はメーカーごとに異なります。発送の直前に急いで行うことはお控えください。",
    },
  ];

  const listed = MIRRORLESS_LISTED;

  const checklist = [
    "本体の底面・バッテリー室付近を見て、型番を末尾の記号まで控えた",
    "型番と製造番号の部分を写真に撮った",
    "マウント名を仕様表や取扱説明書で確認した",
    "レンズの型番をボディとは別に書き出した",
    "ボディ単体・レンズ単体・一式のいずれで出すかを決めた",
    "バッテリー・充電器（またはUSBケーブル）・ボディキャップ・ストラップ・元箱・説明書を探した",
    "見つからなかった付属品と、後から買い足したアクセサリーを分けて書き出した",
    "シャッター回数は、数値と確認方法をメモした（不明な場合は「不明」と記録）",
    "センサーやマウントを拭いていない。ゴミや傷は写真に撮った",
    "メモリーカードをすべてのスロットから抜いた",
    "Wi-Fi の接続先と Bluetooth のペアリングを、カメラ側とスマートフォン側で削除した",
    "スマートフォンアプリ・クラウド連携の登録を解除した",
    "撮影者名・著作権情報を確認してから、設定をリセットした",
    "ボディキャップとレンズの後ろ側のキャップを付けて梱包する準備をした",
    "業者の対象品目と、付属品欠品・ボディ単体の扱いを公式サイトで確認した",
  ];

  const faqs = [
    {
      q: "ミラーレスカメラのボディだけでも買取してもらえますか？",
      a: "業者によって扱いが異なります。当サイトの掲載社では、大黒屋が「ボディ単体・レンズ単体でもお買取りしております」と公式サイトに記載しています（2026年10月20日確認）。そのほかの社については、ボディ単体の扱いが当サイトのデータでは確認できないため、申込前に各社の公式サイトで条件をご確認ください。",
    },
    {
      q: "マウント名がわかりません。調べないと申込できませんか？",
      a: "マウント名がわからなくても、本体の型番が正確にわかれば問い合わせはできます。マウント名は、型番をもとにメーカーの製品ページや取扱説明書の仕様欄で確認できます。複数のレンズを一緒に出す場合は、どのレンズがどのボディ用かを整理するために、確認しておくことをおすすめします。",
    },
    {
      q: "センサーにゴミが写ります。清掃してから送ったほうがよいですか？",
      a: "ご自身でセンサーを拭いたり、道具を差し込んだりすることは避けてください。センサーの表面は傷が付きやすく、清掃には専用の道具と手順が必要とされています。本体にセンサーを振動させてほこりを落とす機能がある場合は、取扱説明書の手順に従って使う程度にとどめ、残ったゴミは確認できた状態のまま申告します。",
    },
    {
      q: "充電器が付属していない機種かどうかがわかりません。",
      a: "ミラーレスカメラには、単体の充電器が付属する機種のほか、本体にUSBケーブルをつないで充電する構成の機種もあります。元箱や取扱説明書の付属品の欄で、購入時の構成を確認できます。バッテリーや充電器がない機材の扱いは業者ごとに異なり、カメラ買取アローズは買取不可と記載しています（2026年10月20日確認）。わからない場合は、手元にあるものをそのまま伝えます。",
    },
    {
      q: "シャッター回数が多いと売れませんか？",
      a: "当サイトからは、シャッター回数による評価を示すことはできません。査定での扱いは業者ごとに異なり、当サイトの掲載社データにもその基準の記載はありません。わかった数値と確認方法を、わからない場合は「不明」と伝え、評価は業者に委ねるのが基本です。",
    },
    {
      q: "スマートフォンとのペアリングを解除し忘れたまま送ってしまいました。",
      a: "スマートフォン側の Bluetooth の登録やアプリへの登録は、手元のスマートフォンの操作で削除できることが多いとされます。まずスマートフォン側の登録を削除し、カメラ本体に残った接続先の消去については、申込先の業者に連絡して対応をご相談ください。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "デジタルカメラの買取", path: "/digital/" },
          { name: "ミラーレスカメラ買取前の確認事項", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">MIRRORLESS CAMERA</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          {H1}
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          本ページでは、買い替えで使わなくなったミラーレスカメラや、レンズキットで購入後に使用頻度が減ったミラーレス一眼を、買取に出す前に確認しておくべき事項を整理しています。値段の見込みには触れず、型番とマウントの確認方法、ボディ単体かレンズキットかの判断、付属品の揃え方、シャッター回数などの使用状況の伝え方、センサーとマウントの扱い、通信機能とアカウントのリセット、ファームウェアの考え方、当サイトの掲載社によるミラーレスカメラの記載を、一般的な知識と公式記載の範囲でまとめています。
        </p>

        {/* 結論先出し */}
        <section className="mt-10 border-2 border-vermilion bg-chalk-warm p-6">
          <h2 className="font-display text-lg text-steel-900">ミラーレスカメラの型番・付属品・初期化の確認事項</h2>
          <ul className="mt-4 space-y-3">
            {conclusions.map((c) => (
              <li key={c} className="flex gap-2 text-sm leading-loose text-steel-800">
                <span aria-hidden="true" className="mt-2 inline-block h-2 w-2 shrink-0 bg-vermilion" />
                {c}
              </li>
            ))}
          </ul>
        </section>

        <div className="mt-8 max-w-3xl border-l-4 border-vermilion bg-chalk-card px-5 py-4">
          <p className="text-sm leading-loose text-steel-700">
            デジタルカメラ全般に共通する準備（チェック10項目、キャンセル時の返送料と入金タイミングの比較）は、
            <Link href="/digital/" className="text-vermilion underline underline-offset-4">
              デジタルカメラの買取
            </Link>
            のページにまとめています。本ページでは、ミラーレスカメラで特に確認しておくべき点に絞って解説します。
          </p>
        </div>

        {/* 型番・マウント */}
        <section className="mt-14">
          <h2 className="section-title mb-2">型番とマウントの確認</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            業者へ問い合わせる際、最初に必要になるのが本体の型番です。あわせてマウント名がわかっていると、手元のレンズとの組み合わせを整理しやすくなります。次の順に確認します。
          </p>
          <div className="space-y-5">
            {modelChecks.map((s, i) => (
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
            <Link href="/mount/micro-four-thirds/" className="btn-ghost">マイクロフォーサーズのページを見る</Link>
            <Link href="/old-lens/" className="btn-ghost">交換レンズの扱いを見る</Link>
          </div>
        </section>

        {/* ボディ単体かキットか */}
        <section className="mt-14">
          <h2 className="section-title mb-2">ボディ単体とレンズキットの判断</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            ミラーレスカメラは、ボディとレンズを組み合わせて使う機材です。手放すときも、まとめて出す機材と手元に残す機材を事前に決めておくと、申込の内容が明確になります。
          </p>
          <div className="space-y-4">
            {kitChecks.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ ボディ単体・レンズ単体の扱いについて公式に記載のある掲載社は、後述の掲載社データをご参照ください。
          </p>
        </section>

        {/* 付属品 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">付属品の準備</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            付属品が揃っているかどうかは、受け付けの可否そのものに関わる場合があります。見つかったものはまとめ、見つからなかったものは書き出しておきます。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {accessories.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ バッテリーや充電器がない機材、元箱がない機材の扱いは業者ごとに異なります。後述の掲載社データと、各社の公式サイトでご確認ください。
          </p>
        </section>

        {/* 使用状況 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">シャッター回数と使用状況の伝え方</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            使用状況は、ご自身で評価を決めるための情報ではなく、業者に正確に伝えるための情報です。わかることとわからないことを分けて控えます。
          </p>
          <div className="space-y-4">
            {usageNotes.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* センサー・マウント */}
        <section className="mt-14">
          <h2 className="section-title mb-2">センサーとマウントの扱い</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            ミラーレスカメラで特に注意が必要なのは、センサーとマウントまわりです。清掃してから出したいと考える方もいますが、触れずに確認できた状態のまま伝えるのが基本です。
          </p>
          <div className="space-y-5">
            {sensorNotes.map((s, i) => (
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
            ※ センサーの清掃や修理の可否は状態により異なります。必要な場合は、メーカーのサービス窓口などにご相談ください。
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/broken/lens-kabi/" className="btn-primary">カビ・くもりのあるレンズの扱いを見る</Link>
            <Link href="/broken/" className="btn-ghost">壊れた・ジャンク品の扱いを見る</Link>
          </div>
        </section>

        {/* リセット */}
        <section className="mt-14">
          <h2 className="section-title mb-2">データ・通信設定・アカウントのリセット</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            スマートフォンと連携して使っていたミラーレスカメラには、写真以外にも個人に結び付く情報が残っていることがあります。手放す前に、次の順で整理します。メニュー名は機種によって異なります。
          </p>
          <div className="space-y-5">
            {resetSteps.map((s, i) => (
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
            <Link href="/guide/uru-mae/" className="btn-primary">売る前の準備を見る</Link>
            <Link href="/digital/" className="btn-ghost">デジタルカメラ共通のチェック10項目を見る</Link>
          </div>
        </section>

        {/* ファームウェア */}
        <section className="mt-14">
          <h2 className="section-title mb-2">ファームウェアについて</h2>
          <div className="space-y-4">
            {firmwareNotes.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 掲載社データ */}
        <section className="mt-14">
          <h2 className="section-title mb-2">ミラーレスカメラの扱いについての掲載社の記載</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            当サイトの掲載社のうち、自社でカメラを買い取る10社について、対象品目にミラーレスの記載があるかどうかを、確認日時点の公式記載の範囲で掲載しています。記載が見つからなかった項目は「公式では確認できず」としています。機種別・メーカー別の受付可否は、どの社のデータにも記載がないため、当サイトからは断定できません。一括査定サービス（おいくら・ヒカカク！・みんなの買取）は自社で買い取らないため、この表には含めていません。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <thead>
                <tr>
                  <th>掲載社</th>
                  <th>対象品目の記載（抜粋）</th>
                  <th>ミラーレスの記載</th>
                  <th>買取方法</th>
                  <th>本体・付属品・故障などの記載</th>
                </tr>
              </thead>
              <tbody>
                {listed.map((c) => (
                  <tr key={c.slug}>
                    <th className="w-36 md:w-44">
                      <Link href={`/kaitori/${c.slug}/`} className="underline hover:text-vermilion">
                        {c.name}
                      </Link>
                      <span className="mt-1 block text-[11px] font-normal text-steel-500">{c.checked}確認</span>
                    </th>
                    <td>{c.target}</td>
                    <td>{c.mirrorless}</td>
                    <td>{c.methods}</td>
                    <td>{c.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs leading-loose text-steel-500">
            ※ 公式サイトの記載をもとに整理したもので、確認日以降に条件が変わっている場合があります。「公式では確認できず」は、当サイトの確認時点で公式サイト上に該当する記載を見つけられなかったことを示すもので、受け付けないことを示すものではありません。買取金額は機種・状態・時期により異なります。
          </p>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-6">ミラーレスカメラを手放す前のチェックリスト</h2>
          <ul className="space-y-2 border border-chalk-line bg-chalk-card p-5">
            {checklist.map((c) => (
              <li key={c} className="flex gap-2 text-[13px] leading-loose text-steel-700">
                <span aria-hidden="true" className="text-vermilion">□</span>
                {c}
              </li>
            ))}
          </ul>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">ミラーレスカメラの買取についてよくある質問</h2>
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
              <Link href="/digital/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">デジタルカメラの買取</span>
                <span className="mt-1 block text-xs text-steel-500">デジタルカメラ共通のチェック10項目と掲載社の条件</span>
              </Link>
            </li>
            <li>
              <Link href="/digital/compact/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">古いコンパクトデジタルカメラの売却前の確認手順</span>
                <span className="mt-1 block text-xs text-steel-500">型番・付属品・データ・電池の確認手順</span>
              </Link>
            </li>
            <li>
              <Link href="/old-lens/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">オールドレンズ・交換レンズの買取</span>
                <span className="mt-1 block text-xs text-steel-500">レンズを分けて出す場合の確認事項</span>
              </Link>
            </li>
            <li>
              <Link href="/mount/micro-four-thirds/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">マイクロフォーサーズの買取</span>
                <span className="mt-1 block text-xs text-steel-500">マウント別の確認点</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/lens-kabi/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カビ・くもり・バルサム切れのあるレンズの売却</span>
                <span className="mt-1 block text-xs text-steel-500">症状の見分け方と申告の方法</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/dengen-hairanai/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">電源が入らない・エラーが出るカメラの売却</span>
                <span className="mt-1 block text-xs text-steel-500">動作未確認と故障の切り分けと申告</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れたカメラ・ジャンク・カビありレンズの売却</span>
                <span className="mt-1 block text-xs text-steel-500">動作未確認の場合の申告方法</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/uru-mae/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ・レンズを売る前の準備</span>
                <span className="mt-1 block text-xs text-steel-500">付属品・メモリーカード・データ削除・状態申告の注意点</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/tairyou/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ・レンズを大量に売るには</span>
                <span className="mt-1 block text-xs text-steel-500">機材一式をまとめて手放す場合</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">出張対応・遺品対応・返送料を同じ基準で比較</span>
              </Link>
            </li>
          </ul>
        </section>

        <p className="mt-12 text-xs leading-loose text-steel-500">
          ※ 本ページの記載は{PAGE_DATE_LABEL}時点の一般的な整理です。掲載社の条件は各社の確認日時点の公式記載に基づきます。センサーの清掃・修理・動作の可否は状態により異なるため、当サイトでは判断を示しません。操作手順やメニュー名は機種によって異なるため、取扱説明書やメーカーの案内をご確認ください。買取金額は機種・状態・時期により異なります。
        </p>
      </article>
    </>
  );
}
