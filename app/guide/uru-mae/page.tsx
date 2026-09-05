import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import JsonLd, { faqPageLd } from "@/components/JsonLd";
import { SITE_NAME, SITE_URL, OPERATOR, PUBLISHED_DATE } from "@/lib/site";

const TITLE = "カメラ・レンズを売る前の準備｜付属品・データ削除・状態申告のコツ";
const DESC =
  "カメラ・レンズを売る前の準備を一般知識として整理します。バッテリー・充電器・元箱・キャップ・フードなど付属品の揃え方、デジタルカメラのメモリーカード取り外し・本体内メモリの初期化・Wi-Fi設定やクラウド連携の解除・所有者名や著作権情報の削除、やりすぎないクリーニングの考え方、カビ・くもり・傷・動作不良を隠さず申告するコツ、シャッター回数の確認方法の一般論、宅配で送るときの梱包とバッテリー輸送の注意、出張買取を頼むときの準備、売る前チェックリストを解説します。";
const PATH = "/guide/uru-mae/";

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

export default function UruMaeGuidePage() {
  const conclusions = [
    "売る前の準備は「付属品を揃える」「データと個人情報を消す」「状態を正直に申告する」「安全に梱包する」の4つに集約されます。どれも特別な道具は不要で、1時間もあれば済ませられる内容です。",
    "デジタルカメラは、メモリーカードを抜くだけでは不十分です。本体内メモリの初期化、Wi-Fi・Bluetooth・クラウド連携の解除、所有者名や著作権情報の設定削除まで済ませてから手放すのが基本とされています。",
    "クリーニングはやりすぎないのが原則です。外装のほこりを落とす程度にとどめ、レンズ面や内部は無理に拭かないでください。分解清掃は評価を下げるおそれがあります。",
    "カビ・くもり・傷・動作不良は、隠さず申告した方が結果的にスムーズです。申告と実機の状態が一致していれば、査定後の減額やキャンセルのやり取りを減らせます。",
  ];

  const accessories = [
    {
      label: "バッテリー・充電器",
      value:
        "デジタルカメラは純正バッテリーと充電器が揃っているかどうかが、一般に評価の対象になるとされています。バッテリーは本体に入れた状態か、別に梱包するかを業者の案内に従って決めます。膨らんでいるバッテリーや、極端に劣化しているバッテリーは、輸送や査定で受け付けられない場合があるため、状態を申告してください。社外品のバッテリーは純正と区別して伝えます。",
    },
    {
      label: "ストラップ・アイカップ・ボディキャップ",
      value:
        "純正のストラップ、ファインダーのアイカップ、ボディキャップなどの小物も、揃っていれば一緒に出します。使用済みで汚れたストラップでも、ないよりはある方が付属品として扱われることが多いとされています。ボディキャップは輸送中にマウント部やセンサーを守る役割もあるため、必ず装着して送りましょう。",
    },
    {
      label: "元箱・取扱説明書・保証書",
      value:
        "元箱と取扱説明書が揃っていると、一般に評価にプラスになることがあります。保証書は期限内であれば残り期間が評価されることがあり、期限切れでも購入時期や正規品であることを示す資料として扱われる場合があります。元箱は傷んでいても構いませんが、そのまま送らず、外箱に入れて保護してください。",
    },
    {
      label: "レンズキャップ・リアキャップ・フード・フィルター",
      value:
        "レンズは前キャップと後ろキャップを装着した状態で出すのが基本です。純正フードは付属品として評価されることがあり、特にオールドレンズの専用フードは揃っていると評価の面で有利になりやすいとされています。保護フィルターは付けたままでも外しても構わないのが一般的ですが、フィルターに傷やカビがある場合は外しておく方が、レンズ本体の状態を正確に見てもらえます。",
    },
    {
      label: "ケーブル・ソフトウェア・その他",
      value:
        "USBケーブル、AVケーブル、付属のソフトウェアディスク、ショルダーケースなど、購入時に同梱されていたものは一通り揃えておきます。すべて揃っていなくても売れるのが一般的ですが、「あるものは全部出す」が付属品の基本です。付属品の扱いは業者によって異なるため、不要としている業者もあります。",
    },
  ];

  const dataSteps = [
    {
      t: "メモリーカードを抜く",
      d: "SDカード・CFカード・CFexpressカードなどの記録メディアは、必ず本体から取り出します。カードには撮影した写真や動画がそのまま残っているため、入れたまま手放すと個人情報の流出につながります。カードスロットが複数ある機種は、すべてのスロットを確認してください。カードは業者に渡す必要はなく、手元に残すのが基本です。",
    },
    {
      t: "本体内メモリを初期化する",
      d: "本体に内蔵メモリを持つ機種は、メニューから内蔵メモリのフォーマット（初期化）を行います。カードを抜いた状態でフォーマットを実行すると、内蔵メモリが対象になる機種が一般的です。フォーマットしても専用ソフトで復元できる場合があるとされているため、心配な場合は初期化後に意味のない画像を撮影して再度フォーマットする方法もあります。",
    },
    {
      t: "Wi-Fi・Bluetooth・クラウド連携を解除する",
      d: "スマートフォンとの接続設定、Wi-Fiのパスワード、メーカーのクラウドサービスや画像転送サービスとの連携は、本体側で解除します。あわせてスマートフォン側のアプリからも、そのカメラの登録を削除しておきます。連携が残ったままだと、次の持ち主が操作したときにあなたのアカウントに影響が及ぶおそれがあります。",
    },
    {
      t: "所有者名・著作権情報の設定を削除する",
      d: "多くのデジタルカメラには、撮影した画像に自動で記録される「作成者名」「著作権者名」の設定項目があります。ここに氏名を登録している場合は、空欄に戻しておきます。設定の場所は機種によって異なり、セットアップメニューの中にあることが多いとされています。取扱説明書やメーカーのサポートページで「著作権情報」「作成者名」といった項目を確認してください。",
    },
    {
      t: "設定をすべて初期化する",
      d: "最後に、メニューの「設定リセット」「全設定初期化」に相当する機能で、カメラを工場出荷状態に戻します。これにより、Wi-Fi設定や著作権情報などをまとめて消去できる機種が一般的ですが、機種によっては個別に消す必要がある項目もあります。初期化後に、Wi-Fi設定と著作権情報の欄が空になっていることを念のため確認しておきましょう。",
    },
  ];

  const cleaningRows = [
    {
      label: "外装（ボディ・レンズ鏡筒）",
      value:
        "柔らかい布でほこりや指紋を拭き取る程度にとどめます。溝やダイヤルの隙間はブロアーで吹き飛ばすか、柔らかいブラシで軽く払います。アルコールや洗剤は塗装や貼り革を傷めることがあるため、使わないのが無難です。貼り革が浮いている場合も、自分で接着し直さずそのままにしておきます。",
    },
    {
      label: "レンズ面",
      value:
        "レンズのガラス面は、無理に拭かないのが原則です。ほこりはブロアーで飛ばすだけにとどめ、指紋などが気になる場合も、乾いたティッシュや服で拭くのは避けてください。拭き傷やコーティングの傷みは、査定で見られる項目のひとつです。カビやくもりは自分で取ろうとせず、そのまま申告します。",
    },
    {
      label: "センサー・ミラー・ファインダー内部",
      value:
        "デジタルカメラのセンサーや、一眼レフのミラー・ファインダー内部は、自分で清掃しないでください。センサーに触れると傷や汚れが広がり、評価を大きく下げるおそれがあります。センサーのゴミが気になる場合は、そのまま「センサーにゴミあり」と申告すれば十分です。",
    },
    {
      label: "分解を伴う清掃",
      value:
        "レンズの分解清掃、カメラ内部の清掃、モルトの張り替えなどは、専門知識のない状態で行うと、部品の破損や光軸のずれにつながるとされています。分解した形跡があると、評価で不利になることもあります。売る前提であれば、分解は行わず現状のまま出すのが基本です。",
    },
  ];

  const disclosure = [
    {
      t: "カビ・くもり・バルサム切れ",
      d: "レンズ内部の状態は、暗い場所でライトを当てて確認できる範囲で申告します。「後玉に小さなカビあり」「全体にうっすらくもり」のように、場所と程度を具体的に書くと、業者側が実機確認と照合しやすくなります。見つけられなかった場合は「目視では確認できず」と書けば問題ありません。",
    },
    {
      t: "外観の傷・凹み・塗装剥がれ",
      d: "目立つ傷や凹みは、場所を挙げて申告します。写真を添付できる申込フォームであれば、傷の部分を撮って送ると認識のズレが減ります。使用に伴う細かなスレまで細かく書く必要はありませんが、落下歴がある場合はその旨を伝えておくと安心です。",
    },
    {
      t: "動作不良・動作未確認",
      d: "シャッターが切れない、絞りが動かない、ズームが固い、液晶が映らない、電源が入らない、といった症状は、分かる範囲で具体的に申告します。確認できていない項目は「未確認」と書けば十分です。動作不良品でも受け付けている業者はあり、症状が具体的なほど査定が進めやすいとされています。",
    },
    {
      t: "修理歴・改造歴・社外部品",
      d: "メーカーや修理店での修理歴、部品交換、社外品のパーツへの交換、改造などがある場合は申告します。修理歴があること自体が必ず不利になるわけではなく、むしろ整備済みとして扱われることもあります。伏せていて後から分かる方が、やり取りが長引きがちです。",
    },
  ];

  const shutterRows = [
    {
      label: "確認方法はメーカー・機種で異なる",
      value:
        "シャッター回数（レリーズ回数）の確認方法は統一されておらず、メーカーや機種によって異なります。本体のメニューで表示できる機種、撮影した画像ファイルの情報（Exif）に記録されていて専用ソフトやウェブサービスで読み取れる機種、メーカーのサービス窓口でしか確認できない機種などがあります。取扱説明書やメーカーのサポートページで「レリーズ回数」「シャッターカウント」といった項目を探すのが最初の一歩です。",
    },
    {
      label: "画像ファイルから読み取る場合",
      value:
        "一部のメーカーの機種では、撮影したJPEGやRAWファイルの情報にシャッター回数が記録されており、パソコン用のソフトやウェブ上のサービスで読み取れるとされています。ただし、機種によっては記録されない、または読み取れる値が実際と異なることがあるため、参考値として扱うのが無難です。",
    },
    {
      label: "分からなければ「不明」で構わない",
      value:
        "自分で確認できない場合は、無理に調べずに「不明」と申告して構いません。業者側で確認できる機種であれば、実機査定の際に確認されるのが一般的です。誤った数字を申告するより、不明と伝える方がトラブルになりにくいとされています。",
    },
    {
      label: "フィルムカメラには当てはまらない",
      value:
        "フィルムカメラには、電子的にシャッター回数を記録する仕組みは基本的にありません。フィルムカメラの場合は、シャッターが各速度で切れるか、幕の状態はどうか、といった動作の確認が代わりの指標になります。",
    },
  ];

  const packingRows = [
    {
      label: "本体とレンズは分ける",
      value:
        "一般に、レンズは本体から外し、それぞれにキャップを付けて個別に緩衝材で包むのが基本とされています。レンズを装着したまま送ると、輸送中の衝撃でマウント部に負荷がかかるおそれがあります。ただし、業者によっては「付けたまま送ってよい」「梱包キットの指示に従う」としている場合もあるため、業者の案内が優先です。",
    },
    {
      label: "緩衝材で包み、箱の中で動かないようにする",
      value:
        "本体・レンズ・付属品をそれぞれ気泡緩衝材（プチプチ）や柔らかい布で包み、箱の中で動かないように隙間を丸めた紙や緩衝材で埋めます。本体とレンズが箱の中で直接ぶつからないようにするのがポイントです。ひと回り大きい箱を使い、上下左右に緩衝材の層ができるようにします。",
    },
    {
      label: "元箱がある場合",
      value:
        "元箱に本体を収めたうえで、さらに外箱に入れて送ります。元箱をそのまま配送用の箱として使うと、伝票の貼り付けや輸送中の傷みで元箱の価値が下がるおそれがあります。元箱の中の発泡スチロールや仕切りは、あればそのまま使うと保護に役立ちます。",
    },
    {
      label: "バッテリーの輸送",
      value:
        "リチウムイオンバッテリーは、運送会社によって輸送の条件が定められていることがあります。一般には、カメラ本体に装着した状態で、電源を切って送るのが基本とされています。予備バッテリーを単体で同梱してよいかどうかは運送会社と業者の案内に従ってください。膨張・損傷したバッテリーは受け付けられない場合があります。",
    },
    {
      label: "同梱物のチェック",
      value:
        "申込時に申告した品目と、実際に箱に入れたものが一致しているかを確認します。本人確認書類の写しを同梱する方式の場合は、指定の場所に入れます。送る前に、箱の中身を写真に撮っておくと、万一の紛失や食い違いのときに役立ちます。追跡番号は控えておきましょう。",
    },
  ];

  const visitPrep = [
    {
      t: "売りたいものを一か所にまとめておく",
      d: "出張買取は、査定担当者が自宅で実機を確認します。カメラ本体・レンズ・付属品・元箱を一か所にまとめておくと、査定が短時間で済みます。押し入れの奥にあるものを当日に探し始めると、時間がかかるうえに見落としも増えます。「これも見てもらえるか分からない」というものも、一緒に出しておくと判断してもらえます。",
    },
    {
      t: "型番リストを作っておく",
      d: "台数が多い場合は、メーカー名・機種名・レンズ名・付属品の有無を簡単にリストにしておくと、査定担当者とのやり取りがスムーズです。事前に業者へリストを送ることで、当日の査定の準備をしてもらえることもあります。",
    },
    {
      t: "保証書・購入記録・本人確認書類を用意する",
      d: "保証書や購入時の記録があれば、手元に用意しておきます。出張買取では、古物営業法にもとづいて本人確認が行われるのが一般的なため、運転免許証などの本人確認書類も必要です。使える書類の種類は業者によって異なるため、予約時に確認してください。",
    },
    {
      t: "クーリングオフの説明を確認する",
      d: "業者が自宅を訪れて買い取る出張買取は、特定商取引法上の「訪問購入」にあたるのが一般的で、一定期間内であればクーリングオフができる制度があります。契約時に書面の交付と制度の説明があるかを確認し、書面は保管しておきましょう。制度の詳細は消費者庁や国民生活センターの案内で確認できます。",
    },
  ];

  const checklist = [
    { label: "付属品", value: "バッテリー・充電器・ストラップ・キャップ・フード・フィルター・元箱・取扱説明書・保証書を、あるだけ集めた" },
    { label: "メモリーカード", value: "すべてのスロットからカードを抜き、手元に残した" },
    { label: "本体内メモリ", value: "内蔵メモリをフォーマットした（該当機種のみ）" },
    { label: "通信・連携", value: "Wi-Fi・Bluetooth・クラウド連携を解除し、スマートフォンのアプリからもカメラの登録を削除した" },
    { label: "個人情報の設定", value: "作成者名・著作権情報の設定を空欄に戻し、全設定を初期化した" },
    { label: "クリーニング", value: "外装のほこりを落とした。レンズ面・センサー・内部には触れていない" },
    { label: "状態の確認", value: "レンズのカビ・くもり、外観の傷、動作の可否をライトを当てて確認し、メモした" },
    { label: "状態の申告", value: "確認した内容と、修理歴・改造歴を申込フォームに正直に記入した" },
    { label: "シャッター回数", value: "確認できる機種は確認した。分からなければ「不明」と申告した" },
    { label: "梱包（宅配）", value: "レンズを外してキャップを付け、個別に緩衝材で包み、箱の隙間を埋めた。バッテリーは業者の案内に従った" },
    { label: "同梱物（宅配）", value: "申告した品目と箱の中身が一致している。本人確認書類の写しを指定どおり入れた。中身を写真に撮った" },
    { label: "準備（出張）", value: "売りたいものを一か所にまとめ、型番リストと本人確認書類を用意した" },
    { label: "業者の条件", value: "査定料・送料・返送料・キャンセル条件・入金までの流れを申込前に確認した" },
  ];

  const faqs = [
    {
      q: "付属品が一部足りません。それでも売れますか？",
      a: "付属品がすべて揃っていなくても、本体やレンズ単体で査定を受けられるのが一般的です。揃っている方が評価の面で有利になりやすいとされていますが、見つからないものを探すのに時間をかけるより、あるものだけ揃えて出す方が現実的です。足りないものは申込時に「充電器なし」のように申告しておきましょう。",
    },
    {
      q: "メモリーカードを抜けば、データ削除はそれで十分ですか？",
      a: "カードを抜くだけでは不十分な場合があります。本体に内蔵メモリがある機種はそのフォーマットが必要ですし、Wi-Fi設定・クラウド連携・作成者名や著作権情報の設定はカードとは別に本体に残っています。最後に全設定の初期化を行い、設定項目が空になっていることを確認してから手放すのが基本です。",
    },
    {
      q: "レンズのカビは清掃してから出した方が有利ですか？",
      a: "一般に、自分でレンズを分解して清掃するのはおすすめされていません。分解時の破損や光軸のずれ、分解痕によって、かえって評価が下がるおそれがあります。カビの有無と程度をそのまま申告し、現状のまま査定を受けるのが基本です。清掃はブロアーでほこりを飛ばす程度にとどめてください。",
    },
    {
      q: "シャッター回数が分かりません。申告しないと不利になりますか？",
      a: "シャッター回数の確認方法はメーカーや機種によって異なり、自分では確認できない機種もあります。分からない場合は「不明」と申告して構いません。業者側で確認できる機種であれば、実機査定の際に確認されるのが一般的です。誤った数字を書くより、不明と伝える方がトラブルになりにくいとされています。",
    },
    {
      q: "宅配で送るとき、レンズは本体に付けたままでいいですか？",
      a: "一般には、レンズを本体から外し、それぞれにキャップを付けて個別に緩衝材で包むのが基本とされています。ただし、業者によっては付けたまま送るよう案内している場合や、梱包キットの指示がある場合があります。業者の案内があればそれを優先し、なければ外して個別に包んでください。",
    },
  ];

  return (
    <>
      <JsonLd data={articleLd} />
      <JsonLd data={faqPageLd(faqs)} />
      <Breadcrumbs
        items={[
          { name: "ホーム", path: "/" },
          { name: "売る前の準備", path: PATH },
        ]}
      />
      <article className="mx-auto max-w-site px-4 py-10 md:py-14">
        <p className="kicker mb-3">PRE-SALE PREPARATION</p>
        <h1 className="max-w-4xl font-display text-2xl leading-relaxed text-steel-900 md:text-3xl md:leading-relaxed">
          カメラ・レンズを売る前の準備｜付属品・データ削除・状態申告のコツ
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-loose text-steel-600">
          カメラやレンズを売るとき、準備の有無で査定のスムーズさは大きく変わります。付属品が揃っているか、デジタルカメラの中に個人情報が残っていないか、状態を正確に申告できているか、輸送中に壊れない梱包になっているか。どれも特別な道具は必要ありませんが、飛ばしてしまうと減額や返送、個人情報の流出といった結果につながることがあります。このページでは、付属品の揃え方、データと個人情報の削除、やりすぎないクリーニング、状態申告のコツ、シャッター回数の確認方法の一般論、宅配で送るときの梱包、出張買取を頼むときの準備を、特定の業者に偏らない一般知識として整理し、最後にチェックリストにまとめます。
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

        {/* 付属品 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">付属品を揃える</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            付属品は、本体と同じくらい査定で見られる項目のひとつです。一般に、購入時に同梱されていたものが揃っているほど評価の面で有利になりやすいとされています。すべて揃っていなくても売れますが、まずは以下を探してみてください。
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
            ※ 付属品の扱いは業者によって異なります。付属品が評価に与える考え方は<Link href="/guide/kachi-mikata/" className="text-vermilion underline underline-offset-4">価値の見分け方</Link>でも解説しています。
          </p>
        </section>

        {/* データ削除 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">デジタルカメラのデータ・個人情報を消す</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            デジタルカメラには、写真や動画だけでなく、Wi-Fiのパスワード、スマートフォンとの接続情報、クラウドサービスの認証情報、作成者名や著作権者名といった個人情報が記録されています。「メモリーカードを抜いたから大丈夫」と思いがちですが、本体側にも消すべき情報があります。以下の手順で順に確認してください。設定の名称や場所は機種によって異なるため、取扱説明書やメーカーのサポートページもあわせて参照してください。
          </p>
          <div className="space-y-5">
            {dataSteps.map((s, i) => (
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
            ※ フィルムカメラには電子的なデータは基本的に残りませんが、フィルムが装填されたままになっていないか、裏蓋を開けて確認してください。デジタル機の対応業者は<Link href="/digital/" className="text-vermilion underline underline-offset-4">デジタル一眼・ミラーレスの買取</Link>で整理しています。
          </p>
        </section>

        {/* クリーニング */}
        <section className="mt-14">
          <h2 className="section-title mb-2">クリーニングはやりすぎない</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            きれいにして出したい気持ちは自然ですが、カメラ・レンズの清掃は「やりすぎない」のが原則です。一般に、外装のほこりを落とす程度は問題ありませんが、レンズ面や内部に手を入れると、かえって評価を下げるおそれがあるとされています。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {cleaningRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 状態申告 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">状態申告のコツ</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            申込時の状態申告は、査定の出発点です。一般に、申告内容と実機の状態が一致していれば査定はスムーズに進み、食い違いがあると減額や再確認のやり取りが発生します。不利になりそうなことでも、隠さず具体的に申告した方が結果的に手間が少なくなります。
          </p>
          <div className="space-y-4">
            {disclosure.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 壊れているもの・カビのあるものでも受け付けている業者があります。受付条件は<Link href="/broken/" className="text-vermilion underline underline-offset-4">壊れた・ジャンク・カビありを売る</Link>で整理しています。
          </p>
        </section>

        {/* シャッター回数 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">シャッター回数の確認方法（一般論）</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            デジタルカメラでは、シャッター回数（レリーズ回数）が使用の程度を示す指標のひとつとして見られることがあります。申込フォームで記入を求められることもありますが、確認方法はメーカー・機種によって異なります。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {shutterRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 梱包 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">宅配で送るときの梱包</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            宅配買取では、輸送中の破損がそのまま査定に響きます。基本は「本体とレンズを分けてそれぞれ包む」「箱の中で動かないようにする」「バッテリーは運送会社と業者の条件に従う」の3点です。梱包キットが届く場合は、キットの説明を優先してください。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {packingRows.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ バッテリー内蔵機器の輸送条件は運送会社ごとに定められています。最新の条件は利用する運送会社および業者の案内で確認してください。
          </p>
        </section>

        {/* 出張買取 */}
        <section className="mt-14">
          <h2 className="section-title mb-2">出張買取を頼むときの準備</h2>
          <p className="mb-6 max-w-3xl text-sm leading-loose text-steel-600">
            台数が多い場合や、遺品整理などで自分では価値の判断がつかないものが多い場合は、業者に自宅へ来てもらう出張買取が候補になります。当日の査定をスムーズにするための準備を整理します。
          </p>
          <div className="space-y-4">
            {visitPrep.map((c) => (
              <div key={c.t} className="border-l-2 border-vermilion bg-chalk-card p-5">
                <h3 className="font-display text-base text-steel-900">{c.t}</h3>
                <p className="mt-2 text-[13px] leading-loose text-steel-700">{c.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-steel-500">
            ※ 台数が多いときの進め方は<Link href="/situation/tairyou/" className="text-vermilion underline underline-offset-4">大量のカメラをまとめて売る</Link>、遺品の場合は<Link href="/situation/ihin/" className="text-vermilion underline underline-offset-4">遺品のカメラを売る</Link>で解説しています。
          </p>
        </section>

        {/* チェックリスト */}
        <section className="mt-14">
          <h2 className="section-title mb-2">売る前チェックリスト</h2>
          <p className="mb-5 max-w-3xl text-sm leading-loose text-steel-600">
            ここまでの内容を一覧にまとめました。申込や発送の前に、上から順に確認してください。
          </p>
          <div className="overflow-x-auto border border-chalk-line">
            <table className="spec-table">
              <tbody>
                {checklist.map((r) => (
                  <tr key={r.label}>
                    <th className="w-40 md:w-56">{r.label}</th>
                    <td>{r.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link href="/compare/" className="btn-primary">買取業者の条件を比較表で見る</Link>
            <Link href="/shindan/" className="btn-ghost">売り方診断で確認する</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="section-title mb-6">売る前の準備でよくある質問</h2>
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
              <Link href="/guide/kachi-mikata/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">フィルムカメラ・オールドレンズの価値の見分け方</span>
                <span className="mt-1 block text-xs text-steel-500">売る前に確認する7つのポイント</span>
              </Link>
            </li>
            <li>
              <Link href="/digital/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">デジタル一眼・ミラーレスの買取</span>
                <span className="mt-1 block text-xs text-steel-500">シャッター回数・付属品・データ削除の準備と対応業者</span>
              </Link>
            </li>
            <li>
              <Link href="/film/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">フィルムカメラの買取</span>
                <span className="mt-1 block text-xs text-steel-500">一眼レフ・レンジファインダー・二眼レフ・中判の対応業者</span>
              </Link>
            </li>
            <li>
              <Link href="/old-lens/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">オールドレンズの買取</span>
                <span className="mt-1 block text-xs text-steel-500">カビ・くもりの申告のしかたとレンズ単体の受付業者</span>
              </Link>
            </li>
            <li>
              <Link href="/broken/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">壊れた・ジャンク・カビありを売る</span>
                <span className="mt-1 block text-xs text-steel-500">動作不良品の申告のコツと受付業者</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/ihin/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">遺品のカメラを売る</span>
                <span className="mt-1 block text-xs text-steel-500">故人のカメラ・レンズを整理するときの進め方</span>
              </Link>
            </li>
            <li>
              <Link href="/situation/tairyou/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">大量のカメラをまとめて売る</span>
                <span className="mt-1 block text-xs text-steel-500">台数が多いときの整理と出張・宅配の使い分け</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/erabikata/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">カメラ買取業者の選び方</span>
                <span className="mt-1 block text-xs text-steel-500">査定料・送料・返送料・キャンセル条件の見方</span>
              </Link>
            </li>
            <li>
              <Link href="/guide/trouble/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取トラブルと相談先</span>
                <span className="mt-1 block text-xs text-steel-500">減額・返送・クーリングオフの考え方</span>
              </Link>
            </li>
            <li>
              <Link href="/compare/" className="block border border-chalk-line bg-chalk-card px-4 py-4 hover:border-vermilion">
                <span className="font-display text-steel-900">買取業者の統一比較表</span>
                <span className="mt-1 block text-xs text-steel-500">査定料・送料・返送料・入金を同じ物差しで比較</span>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </>
  );
}
