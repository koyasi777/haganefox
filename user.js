/*****************************************************************************************
 *
 * Haganefox (鋼フォックス)
 *
 *****************************************************************************************
 *
 * [ Project ]    Haganefox
 * [ Version ]    1.0.1
 * [ Updated ]    2025-07-18
 * [ Repository ] https://github.com/koyasi777/haganefox
 * [ License ]    MIT License
 *
 *****************************************************************************************
 *
 * [ Concept ]
 *
 * Your Firefox, forged into steel.
 *
 * This user.js aims for a practical balance between the robust security and privacy of
 * projects like Arkenfox, and the sharp performance and usability from projects like
 * Betterfox. It is designed to be a strong, resilient, and practical tool for daily
 * Browse by developers and power users.
 *
 * (あなたのFirefoxを、鋼のように堅牢に。
 * このuser.jsは、Arkenfoxのような強力なセキュリティ・プライバシーと、
 * Betterfoxのような鋭いパフォーマンス・利便性の間で、実用的なバランスを
 * 取ることを目的としています。開発者やパワーユーザーの日常的なブラウジングにおける、
 * 強固で、しなやかで、実用的なツールとなるよう設計されています。)
 *
 *****************************************************************************************
 *
 * [ Installation ]
 *
 * 1. Go to `about:support` in your Firefox address bar.
 * 2. Find "Profile Directory" and click "Open Directory".
 * 3. Place this `user.js` file into that directory.
 * 4. Restart Firefox to apply the settings.
 *
 *****************************************************************************************
 *
 * [ References ]
 * arkenfox user.js (v135)
 * https://github.com/arkenfox/user.js
 * 
 * Betterfox (v138)   
 * https://github.com/yokoffing/Betterfox
 *
 ****************************************************************************************/


/* 0000: about:config 警告を無効化 ***/
user_pref("browser.aboutConfig.showWarning", false);



/*** [SECTION 0100]: 起動関連設定 ***/

/* 0102: 起動時のページ設定 [SETUP-CHROME]
 * 0=空白ページ, 1=ホームページ, 2=最後に開いていたページ, 3=前回のセッションを復元
 * [注] セッション復元は履歴消去時にクリアされ、プライベートブラウジングでは使用不可
 * [設定] 一般>起動>前回のセッションを復元 ***/
user_pref("browser.startup.page", 3);

/* 0103: ホーム + 新しいウィンドウのページ設定
 * about:home = Firefoxホーム（デフォルト、0105を参照）、カスタムURL、about:blank など
 * [設定] ホーム>新しいウィンドウとタブ>ホームページと新しいウィンドウ ***/
user_pref("browser.startup.homepage", "about:blank");

/* 0104: 新しいタブのページ設定
 * true = Firefoxホーム（デフォルト、0105を参照）、false = 空白ページ
 * [設定] ホーム>新しいウィンドウとタブ>新しいタブ ***/
user_pref("browser.newtabpage.enabled", false);

/* 0105: Firefoxホーム（アクティビティストリーム）のスポンサーコンテンツを無効化
 * [設定] ホーム>Firefoxホームコンテンツ ***/
user_pref("browser.newtabpage.activity-stream.showSponsored", false); // [FF58+]
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // [FF83+] ショートカット > スポンサー付きショートカットの表示を無効にする

/* 0106: デフォルトのトップサイトをクリア
 * [注] ユーザーが手動で追加することは可能 ***/
user_pref("browser.newtabpage.activity-stream.default.sites", "");



/*** [SECTION 0200]: 位置情報 ***/

/* 0202: OS の位置情報サービスの使用を無効化 ***/
user_pref("geo.provider.ms-windows-location", false); // [WINDOWS]
user_pref("geo.provider.use_corelocation", false); // [MAC]
user_pref("geo.provider.use_geoclue", false); // [FF102+] [LINUX]



/*** [SECTION 0300]: 通信の静穏化（Quieter Firefox） ***/


/** 推奨機能の無効化 ***/

/* 0320: about:addons でのおすすめペインを無効化（Google Analytics使用） ***/
user_pref("extensions.getAddons.showPane", false); // [隠し設定]

/* 0321: about:addons の拡張機能とテーマペインのおすすめを無効化 [FF68+] ***/
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

/* 0322: パーソナライズされた拡張機能のおすすめを無効化 [FF65+]
 * [注] ヘルスレポート（8501）が無効な場合、この設定は効果なし
 * [設定] プライバシーとセキュリティ>Firefoxのデータ収集と利用>おすすめ拡張機能を許可
 * [1] https://support.mozilla.org/kb/personalized-extension-recommendations ***/
user_pref("browser.discovery.enabled", false);

/* 0323: ショッピング体験機能を無効化 [FF116+]
 * [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1840156#c0 ***/
user_pref("browser.shopping.experience2023.enabled", false); // [デフォルト: false]


/** テレメトリ関連 ***/

/* 0335: Firefoxホーム（アクティビティストリーム）のテレメトリを無効化 ***/
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);


/** 実験・スタディ ***/

/* 0340: スタディ機能を無効化
 * [設定] プライバシーとセキュリティ>Firefoxのデータ収集と利用>スタディを実行 ***/
user_pref("app.shield.optoutstudies.enabled", false);

/* 0341: Normandy/Shield を無効化 [FF60+]
 * Shieldはレシピ配信とテストのためのテレメトリシステム
 * [1] https://mozilla.github.io/normandy/ ***/
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");


/** クラッシュレポート ***/

/* 0350: クラッシュレポートを無効化 ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false); // [FF44+]
   // user_pref("browser.crashReports.unsubmittedCheck.enabled", false); // [FF51+] [デフォルト: false]

/* 0351: 未送信クラッシュレポートの自動送信を強制的に無効化 [FF58+]
 * [設定] プライバシーとセキュリティ>クラッシュレポートを送信 ***/
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false); // [デフォルト: false]


/** その他 ***/

/* 0360: キャプティブポータル検出を無効化
 * [1] https://www.eff.org/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false); // [FF52+]

/* 0361: ネットワーク接続チェックを無効化 [FF65+]
 * [1] https://bugzilla.mozilla.org/1460537 ***/
user_pref("network.connectivity-service.enabled", false);



/*** [SECTION 0400]: セーフブラウジング（Safe Browsing）
   セーフブラウジングはプライバシー保護のために多くの対策が施されている。
   必要な場合でも、Googleに送信されるのはURL全体ではなく、そのハッシュの一部のみであり、
   他の実在するハッシュと混ぜて匿名性を保っている。
   Firefoxは識別子の除去などを行っており、SBv4（FF57+）以降ではCookieも使用されない。

   [1] https://feeding.cloud.geek.nz/posts/how-safe-browsing-works-in-firefox/
   [2] https://wiki.mozilla.org/Security/Safe_Browsing
   [3] https://support.mozilla.org/kb/how-does-phishing-and-malware-protection-work
   [4] https://educatedguesswork.org/posts/safe-browsing-privacy/
***/

/* 0401: Safe Browsing (安全閲覧保護) を無効化
 * [警告] この設定を変更すると、マルウェアやフィッシングサイトからの保護が無効になります。
 *        実際に無効化する場合は、リスクを十分に理解した上で自己責任で行ってください。
 * [設定箇所] プライバシーとセキュリティ > セキュリティ > 危険なサイトや欺瞞的なコンテンツをブロック ***/
   // user_pref("browser.safebrowsing.malware.enabled", false);
   // user_pref("browser.safebrowsing.phishing.enabled", false);

/* 0402: ダウンロードに対するSBチェックを無効化（ローカルおよびリモート）
 * この設定は0403, 0404のprefの親設定
 * [設定] プライバシーとセキュリティ > セキュリティ > 危険なダウンロードをブロック ***/
   // user_pref("browser.safebrowsing.downloads.enabled", false);

/* 0403: ダウンロードファイルに対するSafe Browsing（Google）チェックを無効化
 * - Firefoxは一部の実行可能ファイルの安全性を確認するために、Google Safe Browsingに
 *   以下の情報（ファイル名・由来URL・サイズ・ハッシュ値など）を送信することがあります
 * - この情報送信を停止する設定です（= プライバシー保護）
 * - [SETUP-SECURITY] この動作の意味が不明な場合、あるいは安全性を優先したい場合は
 *   この設定を有効にしない方が安全です（falseにせず、Googleチェックを許可する） ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/* 0404: 望ましくないソフトウェアに対するSafe Browsingチェックを無効化（任意）
 * - 「望ましくないソフトウェア」や「一般的でないソフトウェア」のダウンロード時に、
 *   Firefoxが警告を表示する機能を制御します
 * - デフォルトでは有効（true）で、ユーザーの安全のために警告されます
 * - [SETTING] 設定画面：プライバシーとセキュリティ > セキュリティ >
 *   「望ましくないおよび一般的でないソフトウェアについて警告する」
 * - プライバシー重視でGoogleとの連携を減らしたい場合や、警告表示を無効にしたい
 *   上級ユーザー向けのオプションです（基本的にはコメントアウトのままが無難） ***/
// user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
// user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);

/* 0405: Safe Browsing 警告画面での「この警告を無視する」ボタンを無効化
 * - フィッシングやマルウェアサイトなど、SBによる警告画面が表示された際に、
 *   ユーザーが「警告を無視して続行」を選べる機能を無効化します
 * - 管理者がSBブロックを**強制**したい場合に有効です（教育用途・企業用途など）
 * - [TEST] 動作確認用のテストURLあり（Appendix-A-Test-Sites）
 * - [1] https://bugzilla.mozilla.org/1226490
 * - 通常の個人ユーザーには不要であり、コメントアウトのままが一般的です ***/
// user_pref("browser.safebrowsing.allowOverride", false);



/*** [SECTION 0600]: 明示的でない外部通信のブロック（ユーザーがクリック等していない） ***/

/* 0601: リンクのプリフェッチを無効化
 * [1] https://developer.mozilla.org/docs/Web/HTTP/Link_prefetching_FAQ ***/
user_pref("network.prefetch-next", false);

/* 0602: DNS プリフェッチを無効化
 * [1] https://developer.mozilla.org/docs/Web/HTTP/Headers/X-DNS-Prefetch-Control ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);

/* 0603: プレディクター／プリフェッチ機能を無効化 ***/
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false); // [FF48+] [デフォルト: false]

/* 0604: リンクにマウスオーバーしただけでサーバーに接続する動作を無効化
 * [1] https://news.slashdot.org/story/15/08/14/2321202/how-to-quash-firefoxs-silent-requests ***/
user_pref("network.http.speculative-parallel-limit", 0);

/* 0605: ブックマークや履歴をマウスでクリックした時の先行接続を無効化 [FF98+] ***/
user_pref("browser.places.speculativeConnect.enabled", false);

/* 0610: ハイパーリンクオーディティング（クリックトラッキング）を無効化
 * [1] https://www.bleepingcomputer.com/news/software/major-browsers-to-prevent-disabling-of-click-tracking-privacy-risk/ ***/
   // user_pref("browser.send_pings", false); // [デフォルト: false]



/*** [SECTION 0700]: DNS / DoH / プロキシ / SOCKS ***/

/* 0702: SOCKS プロキシ使用時に、DNSルックアップもプロキシ経由で行うよう設定
 * 例: Tor 使用時に、ローカルDNSサーバーにTor接続先を知られないようにするため
 * DNSリクエストはリモートのTorノードが処理する
 * [1] https://trac.torproject.org/projects/tor/wiki/doc/TorifyHOWTO/WebBrowsers ***/
user_pref("network.proxy.socks_remote_dns", true);

/* 0703: UNC（統一名前付け規則）パスの使用を無効化 [FF61+]
 * [SETUP-CHROME] ネットワーク共有上のプロファイルでは拡張機能が壊れる可能性あり
 * [1] https://bugzilla.mozilla.org/1413868 ***/
user_pref("network.file.disable_unc_paths", true); // [隠し設定]

/* 0704: GIO（GNOME I/O）によるプロキシバイパスの可能性を無効化
 * GIO/GVfs は obex, network, archive など複数のプロトコルをサポート
 * [SECURITY] Gvfs/GIOの protocol handler (trash, obex, archive, dav など) による外部通信を抑止
 * [NOTE] Firefox 87–117ではsftpのみ許可、現行では全て無効がデフォルト（再有効化を防ぐ目的で明示）
 * [1] https://bugzilla.mozilla.org/1433507
 * [2] https://en.wikipedia.org/wiki/GVfs
 * [3] https://en.wikipedia.org/wiki/GIO_(software) ***/
user_pref("network.gio.supported-protocols", ""); // [隠し設定] [デフォルト: ""]

/* 0705: システムリクエストでプロキシ失敗時の直接接続（フォールバック）を無効化 [FF91+]
 * [警告] デフォルト値（true）は悪意のある拡張機能に対するセキュリティ機能
 * [SETUP-CHROME] プロキシを使用しており、拡張機能を信頼できる場合のみ変更を検討
 * [1] https://blog.mozilla.org/security/2021/10/25/securing-the-proxy-api-for-firefox-add-ons/ ***/
   // user_pref("network.proxy.failover_direct", false);

/* 0706: システムリクエスト失敗時のプロキシバイパスを無効化 [FF95+]
 * 対象: RemoteSettings、UpdateService、Telemetry など [1]
 * [警告] false にすると一部のセキュリティ機能のフォールバックが動作しなくなる可能性あり
 * [SETUP-CHROME] プロキシを使用しており、セキュリティへの影響を理解している場合のみ使用
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1732792,1733994,1733481 ***/
   // user_pref("network.proxy.allow_bypass", false);

/* 0710: DNS over HTTPS (DoH) を有効化 [FF60+]
 * 0 = デフォルト（OSやネットワーク設定に応じて自動）
 * 2 = 強化モード（TRR = Trusted Recursive Resolver を優先）
 * 3 = 最大モード（TRR のみを使用、通常のDNSは使わない）
 * 5 = 無効（ロールアウト対象外）
 * "doh-rollout.home-region" により展開地域が異なる：米国（2019年）、カナダ（2021年）、ロシア/ウクライナ（2022年） [3]
 * [設定] プライバシーとセキュリティ > DNS over HTTPS
 * [1] https://hacks.mozilla.org/2018/05/a-cartoon-intro-to-dns-over-https/
 * [2] https://wiki.mozilla.org/Security/DOH-resolver-policy
 * [3] https://support.mozilla.org/kb/firefox-dns-over-https
 * [4] https://www.eff.org/deeplinks/2020/12/dns-doh-and-odoh-oh-my-year-review-2020 ***/
   // user_pref("network.trr.mode", 3);

/* 0712: DoH プロバイダの設定
 * 「プロバイダを選択 > カスタム」で指定されるURI
 * [注] カスタムを使う場合は network.trr.uri も同じにすること
 * [設定] プライバシーとセキュリティ > DNS over HTTPS > カスタムプロバイダ ***/
   // user_pref("network.trr.uri", "https://example.dns");
   // user_pref("network.trr.custom_uri", "https://example.dns");



/*** [SECTION 0800]: ロケーションバー / 検索バー / サジェスト / 履歴 / フォーム ***/

/* 0801: ロケーションバーによる推測的な接続（speculative connections）を無効化 [FF56+]
 * [1] https://bugzilla.mozilla.org/1348275 ***/
user_pref("browser.urlbar.speculativeConnect.enabled", false);

/* 0802: ロケーションバーのコンテキストサジェストを無効化
 * [注] UI制御は `.enabled` 設定による
 * [設定] 検索 > アドレスバー > サジェスト元
 * [1] https://blog.mozilla.org/data/2021/09/15/data-and-firefox-suggest/ ***/
user_pref("browser.urlbar.quicksuggest.enabled", false); // [FF92+]
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); // [FF95+]
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // [FF92+]

/* 0803: ロケーションバーでのライブ検索サジェストを無効化
 * [注] ロケーションバーでライブ検索を機能させるには両方 true にする必要がある
 * [SETUP-CHROME] プライバシー重視の検索エンジンを信頼して使っている場合は、これらを有効化可
 * [設定] 検索 > 検索サジェストを表示 | アドレスバーに検索候補を表示 ***/
// user_pref("browser.search.suggest.enabled", false);
// user_pref("browser.urlbar.suggest.searches", false);

/* 0805: ロケーションバーでのトレンド検索サジェストを無効化 [FF118+]
 * [設定] 検索 > 検索サジェスト > トレンド検索サジェストを表示（FF119） ***/
user_pref("browser.urlbar.trending.featureGate", false);

/* 0806: URLバーの各種機能別サジェストを無効化 ***/
user_pref("browser.urlbar.addons.featureGate", false);         // 拡張機能 [FF115+]
user_pref("browser.urlbar.fakespot.featureGate", false)       // Fakespot [FF130+] [デフォルト: false]
user_pref("browser.urlbar.mdn.featureGate", false);            // MDN [FF117+] [隠し設定]
user_pref("browser.urlbar.pocket.featureGate", false);         // Pocket [FF116+] [デフォルト: false]
user_pref("browser.urlbar.weather.featureGate", false);        // 天気情報 [FF108+] [デフォルト: false]
user_pref("browser.urlbar.yelp.featureGate", false);           // Yelp [FF124+]

/* 0807: クリップボードの内容を基にしたサジェストを無効化 [FF118+] ***/
   // user_pref("browser.urlbar.clipboard.featureGate", false);

/* 0808: 最近の検索履歴によるサジェストを無効化 [FF120+]
 * [注] 最近の検索履歴は履歴クリア（2811+）で削除される
 * [1] https://support.mozilla.org/kb/search-suggestions-firefox ***/
   // user_pref("browser.urlbar.recentsearches.featureGate", false);

/* 0810: 検索およびフォーム履歴を無効化
 * [注] フォームデータは終了時にクリアされる設定（2811+）も適用可能
 * [SETUP-WEB] フォームのオートコンプリートは第三者に読み取られるリスクあり [1][2]
 * [設定] プライバシーとセキュリティ > 履歴 > 検索とフォームの履歴を記憶する
 * [NOTE] これにより、フォームの入力内容が保存されなくなります。
 * [1] https://blog.mindedsecurity.com/2011/10/autocompleteagain.html
 * [2] https://bugzilla.mozilla.org/381681 ***/
user_pref("browser.formfill.enable", false);

/* 0815: アドレスバーでの「Tabで検索」機能を無効化 [FF85+]
 * または、オプションで検索エンジンごとに個別に除外設定が可能
 * [設定] 検索 > アドレスバー > 使用時の提案 > 検索エンジン ***/
   // user_pref("browser.urlbar.suggest.engines", false);

/* 0820: 訪問済みリンクの色を無効化
 * [SETUP-HARDEN] 高速な履歴スニッフィング攻撃は2010年に対策済 [1][2]、
 * 高度なリドロータイミング攻撃はFF77+で対策 [3]、RFP（4501）使用で更に対策可能
 * ただし、ソーシャルエンジニアリングや高度なターゲット攻撃は依然として有効な場合あり
 * [1] https://developer.mozilla.org/docs/Web/CSS/Privacy_and_the_:visited_selector
 * [2] https://dbaron.org/mozilla/visited-privacy
 * [3] https://bugzilla.mozilla.org/1632765
 * [4] https://earthlng.github.io/testpages/visited_links.html
 * [5] https://lcamtuf.blogspot.com/2016/08/css-mix-blend-mode-is-bad-for-keeping.html ***/
   // user_pref("layout.css.visited_links_enabled", false);

/* 0830: プライベートウィンドウ専用のデフォルト検索エンジンを有効化 + UI設定を表示
 * [設定] 検索 > デフォルト検索エンジン > プライベートウィンドウ専用の検索エンジンを選択 ***/
user_pref("browser.search.separatePrivateDefault", true);         // [FF70+]
user_pref("browser.search.separatePrivateDefault.ui.enabled", true); // [FF71+]



/*** [SECTION 0900]: パスワード関連設定
   [1] https://support.mozilla.org/kb/use-primary-password-protect-stored-logins-and-pas
***/

/* 0903: ユーザー名とパスワードの自動入力を無効化
 * クロスサイトのフォームで漏洩したり、スプーフィングされる可能性あり
 * [注] 入力フィールドをクリックすれば、保存されたユーザー名とパスワードは利用可能
 * [設定] プライバシーとセキュリティ > ログインとパスワード > 自動入力
 * [1] https://freedom-to-tinker.com/2017/12/27/no-boundaries-for-user-identities-web-trackers-exploit-browser-login-managers/
 * [2] https://homes.esat.kuleuven.be/~asenol/leaky-forms/ ***/
user_pref("signon.autofillForms", false);

/* 0904: パスワードマネージャによる「フォームのない」ログイン情報取得を無効化 [FF51+] ***/
user_pref("signon.formlessCapture.enabled", false);

/* 0905: サブリソースによる HTTP 認証ダイアログの制限（または無効化） [FF41+]
 * 認証情報のフィッシング対策を強化
 * 0 = サブリソースからの HTTP 認証ダイアログを一切許可しない
 * 1 = クロスオリジンサブリソースからのダイアログのみ許可しない（推奨）
 * 2 = サブリソースによるダイアログをすべて許可（デフォルト） ***/
user_pref("network.auth.subresource-http-auth-allow", 1);

/* 0906: Microsoftサイトでの自動認証（Windows SSO）を無効化 [FF91+] [WINDOWS 10+]
 * [設定] プライバシーとセキュリティ > ログインとパスワード > Windows シングルサインオンを許可
 * [1] https://support.mozilla.org/kb/windows-sso ***/
   // user_pref("network.http.windows-sso.enabled", false); // [デフォルト: false]

/* 0907: Microsoftサイトでの自動認証（macOS Entra SSO）を無効化 [FF131+] [MAC]
 * macOSでは企業管理デバイスのみSSOが機能 ***/
   // user_pref("network.http.microsoft-entra-sso.enabled", false); // [デフォルト: false]



/*** [SECTION 1000]: ディスク書き込みの回避 ***/
/* 1001: ディスクキャッシュを無効化
 * [注] 終了時にキャッシュをクリアする設定（2811+）もあり
 * [SETUP-CHROME] パフォーマンス向上のためディスクキャッシュを使いたいならこの設定は無効に
 * [NOTE] セッション中のパフォーマンス向上のため、ディスクキャッシュを有効化します。
 * [NOTE] プライバシー保護のため、終了時にキャッシュを削除します（→ see 2811）
 ***/
user_pref("browser.cache.disk.enable", true); // 明示的に有効化

/* 1003: 追加セッションデータの保存を無効化 [SETUP-CHROME]
 * フォームの内容・Cookie・POSTデータなどの保存対象サイトを制御
 * 0 = すべてのサイトで保存, 1 = 暗号化されていないサイトのみ, 2 = 一切保存しない ***/
user_pref("browser.sessionstore.privacy_level", 2);

/* 1005: 再起動後の自動起動およびセッション復元を無効化 [FF62+] [WINDOWS]
 * [1] https://bugzilla.mozilla.org/603903 ***/
// user_pref("toolkit.winRegisterApplicationRestart", false);

/* 1006: ショートカットにファビコン（favicon）を保存しない [WINDOWS]
 * URLショートカットにはランダムな名前の .ico ファイルが保存される（profile/shortcutCache 内）
 * ショートカットを削除しても .ico ファイルは残る。false に設定すると汎用Firefoxアイコンになる ***/
// user_pref("browser.shell.shortcutFavicons", false);



/*** [SECTION 1200]: HTTPS関連設定（SSL/TLS / OCSP / 証明書 / HPKP）
   サーバー側フィンガープリントに利用される可能性がある暗号設定などに関する対策
   [NOTE] これらは重要なセキュリティ強化設定です。すべて有効にします。
   [テスト] https://www.ssllabs.com/ssltest/viewMyClient.html
   [テスト] https://browserleaks.com/ssl
   [テスト] https://ja3er.com/
   [1] https://www.securityartwork.es/2017/02/02/tls-client-fingerprinting-with-bro/
***/

/* 1201: 安全なネゴシエーションを要求する
 * RFC 5746 に未対応のサーバーへの接続をブロック（MiTM攻撃の可能性あり）
 * サーバー側で再ネゴシエーションを無効化していれば安全だが、クライアント側では判別不可能
 * true に設定することでブラウザは「危険な再ネゴシエーションが発生しない」ことを保証できる
 * [SETUP-WEB] 特定サイトでエラーになる場合、例外設定を検討（エラー名: SSL_ERROR_UNSAFE_NEGOTIATION）
 * [STATS] 2024年5月現在、SSL Labs によると上位サイトの99.7%以上が安全な再ネゴシエーション対応済み [4]
 * [1] https://wiki.mozilla.org/Security:Renegotiation
 * [2] https://datatracker.ietf.org/doc/html/rfc5746
 * [3] https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2009-3555
 * [4] https://www.ssllabs.com/ssl-pulse/ ***/
user_pref("security.ssl.require_safe_negotiation", true);

/* 1206: TLS 1.3 の 0-RTT（往復ゼロ回）データを無効化 [FF51+]
 * PSK（事前共有鍵）のみによる暗号化で前方秘匿性がない。再送信攻撃に対して脆弱
 * [1] https://github.com/tlswg/tls13-spec/issues/1001
 * [2] https://www.rfc-editor.org/rfc/rfc9001.html#name-replay-attacks-with-0-rtt
 * [3] https://blog.cloudflare.com/tls-1-3-overview-and-q-and-a/ ***/
user_pref("security.tls.enable_0rtt_data", false);

/** OCSP（オンライン証明書ステータスプロトコル）
 * [1] https://scotthelme.co.uk/revocation-is-broken/
 * [2] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
 ***/

/* 1211: OCSPフェッチ（証明書の有効性確認）を強制する
 * 0=無効, 1=有効（デフォルト）, 2=EV証明書のみ
 * OCSP（Staplingでない）は、訪問したサイト情報を認証局（CA）に漏らす可能性がある
 * → セキュリティ（確認）とプライバシー（CAへの情報漏洩）のトレードオフ
 * [注] この設定はOCSPフェッチのみ制御。OCSPステープリングには影響しない
 * [設定] プライバシーとセキュリティ > セキュリティ > 証明書 > OCSPレスポンダーに問い合わせる
 * [1] https://en.wikipedia.org/wiki/Ocsp ***/
user_pref("security.OCSP.enabled", 1); // [デフォルト: 1]

/* 1212: OCSPフェッチ失敗時に接続を強制終了（ハードフェイル）にする
 * [SETUP-WEB] エラー例: SEC_ERROR_OCSP_SERVER_ERROR / SEC_ERROR_OCSP_UNAUTHORIZED_REQUEST
 * CAに到達できず検証できない場合、通常は接続継続（ソフトフェイル）
 * → true にすると、代わりに接続を中断（ハードフェイル）
 * 理由: フェッチ失敗時に継続しても証明書の有効性を確認できず、
 * 攻撃中（例: OCSPサーバーの悪意あるブロック）である可能性すらある
 * [1] https://blog.mozilla.org/security/2013/07/29/ocsp-stapling-in-firefox/
 * [2] https://www.imperialviolet.org/2014/04/19/revchecking.html
 * [3] https://letsencrypt.org/2024/12/05/ending-ocsp/ ***/
user_pref("security.OCSP.require", true);

/** CERTS / HPKP（HTTP公開鍵ピンニング） ***/

/* 1223: 厳格なPKP（公開鍵ピンニング）を有効化
 * 0=無効, 1=ユーザーの中間者（例: ウイルス対策）を許容（デフォルト）, 2=厳格
 * [SETUP-WEB] エラー例: MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE ***/
user_pref("security.cert_pinning.enforcement_level", 2);

/* 1224: CRLite を有効化 [FF73+]
 * 0 = 無効
 * 1 = CRLite を照会するがテレメトリ収集のみ
 * 2 = 「失効」および「未失効」の結果を強制適用
 * 3 = 「未失効」のみ強制適用、「失効」はOCSPに委任（デフォルト）
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1429800,1670985,1753071
 * [2] https://blog.mozilla.org/security/tag/crlite/ ***/
user_pref("security.remote_settings.crlite_filters.enabled", true); // [デフォルト: true FF137+]
user_pref("security.pki.crlite_mode", 2);

/** MIXED CONTENT（混在コンテンツ） ***/

/* 1241: HTTPSページ上の安全でない「受動的」コンテンツ（例: 画像）の表示をブロック ***/
user_pref("security.mixed_content.block_display_content", true); // 補強的対策（1244を参照）

/* 1244: すべてのウィンドウでHTTPS-Onlyモードを有効化
 * トップレベルがHTTPSであれば、サブリソースも自動的にHTTPSにアップグレード（失敗時は沈黙）
 * [設定] 錠前アイコン > HTTPS-Only モードを有効化（例外追加もここ）
 * [設定] プライバシーとセキュリティ > HTTPS-Onlyモード
 * [テスト] http://example.com [アップグレードされる]
 * [テスト] http://httpforever.com/ | http://http.rip [アップグレード不可] ***/
user_pref("dom.security.https_only_mode", true); // [FF76+]
   // user_pref("dom.security.https_only_mode_pbm", true); // [FF80+] プライベートモードでも有効化

/* 1245: ローカルリソースに対してもHTTPS-Onlyモードを有効化 [FF77+] ***/
   // user_pref("dom.security.https_only_mode.upgrade_local", true);

/* 1246: HTTPバックグラウンドリクエストを無効化 [FF82+]
 * アップグレード試行中にサーバー応答が3秒以内に来ない場合、
 * FirefoxはパスなしのトップレベルHTTPリクエストを送信してHTTPS対応可否を確認する。
 * これはタイムアウト（最大90秒）を回避する目的だが、プライバシー上の懸念がある。
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1642387,1660945 ***/
user_pref("dom.security.https_only_mode_send_http_background_request", false);

/** UI（ユーザーインターフェース） ***/
/* 1270: 安全でないネゴシエーションに対して錠前アイコンで警告を表示（1201がfalseの場合）
 * [バグ] サブリソースに対しては警告が表示されないことがある
 * [1] https://wiki.mozilla.org/Security:Renegotiation
 * [2] https://bugzilla.mozilla.org/1353705 ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);

/* 1272: セキュリティ警告ページで「詳細情報」を表示
 * 例外追加が可能な場合のみ有効。HSTS関連の不一致では表示されない。
 * [テスト] https://expired.badssl.com/ ***/
user_pref("browser.xul.error_pages.expert_bad_cert", true);



/*** [SECTION 1600]: リファラ（Referer）設定
   full URI: https://example.com:8888/foo/bar.html?id=1234
   scheme+host+port+path: https://example.com:8888/foo/bar.html
   scheme+host+port: https://example.com:8888
   [1] https://feeding.cloud.geek.nz/posts/tweaking-referrer-for-privacy-in-firefox/
***/

/* 1602: クロスオリジンへのリファラ情報の送信量を制御 [FF52+]
 * 0 = 完全なURI（デフォルト）, 1 = スキーム＋ホスト＋ポート＋パス, 2 = スキーム＋ホスト＋ポート ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);



/*** [SECTION 1700]: コンテナ（Container Tabs） ***/

/* 1701: コンテナタブ機能とそのUIを有効化 [FF50+]
 * [設定] 一般 > タブ > コンテナタブを有効にする
 * https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers ***/
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);

/* 1702: 「+ タブ」ボタンの左クリックでコンテナメニューを表示する [FF74+]
 * [注] 長押しまたは右クリックでは常に表示される
 * [設定] 一般 > タブ > コンテナタブ > 設定 > 新しいタブにコンテナを選択 ***/
   // user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);

/* 1703: 外部リンクをサイトごとに決めたコンテナで開くようにする [FF123+]
 * [SETUP-WEB] コンテナ拡張の設定に依存
 * true = Firefoxはコンテナを選ばず、拡張が制御可能
 * false = Firefoxが（非）コンテナを選択（デフォルト） ***/
   // user_pref("browser.link.force_default_user_context_id_for_external_opens", true);



/*** [SECTION 2000]: プラグイン / メディア / WebRTC ***/

/* 2002: WebRTC通信を必ずプロキシ経由に制限 [FF70+] ***/
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);

/* 2003: ICE候補の生成に使うネットワークインタフェースを1つに限定 [FF42+]
 * システム全体のプロキシを使用している場合、プロキシのインタフェースが使われる
 * [1] https://developer.mozilla.org/docs/Web/API/RTCIceCandidate
 * [2] https://wiki.mozilla.org/Media/WebRTC/Privacy ***/
user_pref("media.peerconnection.ice.default_address_only", true);

/* 2004: ICE候補からプライベートIPを除外 [FF51+]
 * [SETUP-HARDEN] 信頼された場面でもデバイスアクセス許可後にプライベートIPを守れるが、
 * 多くのビデオ会議サービスで接続不具合の原因となる
 * [NOTE] ビデオ会議などで問題を起こすため無効化。 ***/
   // user_pref("media.peerconnection.ice.no_host", true);

/* 2020: GMP（Gecko Media Plugins）を無効化
 * [1] https://wiki.mozilla.org/GeckoMediaPlugins ***/
   // user_pref("media.gmp-provider.enabled", false);



/*** [SECTION 2400]: DOM（ドキュメントオブジェクトモデル） ***/

/* 2402: スクリプトによるウィンドウの移動・リサイズを禁止 ***/
user_pref("dom.disable_window_move_resize", true);



/*** [SECTION 2600]: その他（MISC） ***/

/* 2603: プライベートでないウィンドウから外部アプリで開かれた一時ファイルを削除する
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=302433,1738574 ***/
user_pref("browser.download.start_downloads_in_tmp_dir", true); // [FF102+]
user_pref("browser.helperApps.deleteTempFileOnExit", true);

/* 2606: リモートページによるUITourバックエンド使用を無効化（ガイドツアー機能） ***/
user_pref("browser.uitour.enabled", false);
   // user_pref("browser.uitour.url", ""); // 防御強化のため（defense-in-depth）

/* 2608: リモートデバッグを明示的に無効化
 * [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/16222 ***/
user_pref("devtools.debugger.remote-enabled", false); // [デフォルト: false]

/* 2615: ウェブサイトによるFirefoxのキーボードショートカット上書きを禁止 [FF58+]
 * 0 または 1=許可, 2=ブロック
 * [設定] Ctrl+I > 権限 > ショートカットの上書きを許可するサイトを追加 ***/
   // user_pref("permissions.default.shortcuts", 2);

/* 2616: 特定のMozillaドメインに対する特別な権限を削除 [FF35+]
 * [1] resource://app/defaults/permissions ***/
user_pref("permissions.manager.defaultsUrl", "");

/* 2619: 国際化ドメイン（IDN）をPunycodeで表示し、なりすまし（spoofing）を防止
 * [SETUP-WEB] ラテン文字以外の正当なドメインにも影響するため非ラテン系言語利用者には不便かも
 * [SECURITY] フィッシング対策として強力：xn-- 表記で怪しいドメインを可視化
 * [テスト] https://www.xn--80ak6aa92e.com/ （偽apple.com）
 * [1] https://wiki.mozilla.org/IDN_Display_Algorithm
 * [2] https://en.wikipedia.org/wiki/IDN_homograph_attack
 * [3] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=punycode+firefox
 * [4] https://www.xudongz.com/blog/2017/idn-phishing/ ***/
user_pref("network.IDN_show_punycode", true);

/* 2620: Firefox内蔵PDFビューア（PDF.js）を強制使用 + スクリプトを無効化
 * → 「Firefoxで表示する」オプションを制御。外部アプリ利用との排他動作。
 * [理由] PDF.jsは軽量・オープンソース・安全（最後の脆弱性は2015年）
 *   - ブラウザ内で完結し、OSや他アプリと共有しない＝状態分離が保たれる
 *   - ディスク書き込みやアプリ間のデータ共有を避けられる
 * [注] ページ側が独自JSでPDFビューを強制することは可能
 * [SETUP-CHROME] ワークフローや安全性の理由で他のPDFリーダーを使いたければ無効化可能
 * [設定] 一般 > ファイルとアプリケーション > PDFの扱い
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=pdf.js+firefox ***/
user_pref("pdfjs.disabled", false);         // [デフォルト: false]
user_pref("pdfjs.enableScripting", false);  // [FF86+]

/* 2624: 新しいタブボタンの中クリックでクリップボード内容から検索・URL開くのを無効化 [FF115+] */
user_pref("browser.tabs.searchclipboardfor.middleclick", false); // [デフォルト: false（Linux以外）]

/* 2630: DLP（情報漏洩防止）エージェントによるコンテンツ分析を無効化
 * DLPは企業によるローカルアプリ監視（データ持ち出し防止）プロセス。
 * 0=すべてブロック, 1=警告表示（ユーザー判断）, 2=すべて許可
 * [1] https://github.com/chromium/content_analysis_sdk */
user_pref("browser.contentanalysis.enabled", false);       // [FF121+] [デフォルト: false]
user_pref("browser.contentanalysis.default_result", 0);    // [FF127+] [デフォルト: 0]


/** DOWNLOADS（ダウンロード） **/

/* 2651: 毎回保存場所を尋ねる（セキュリティ目的でユーザー操作を要求）
 * [SETUP-CHROME] Androidでは画像保存等ができなくなるケースあり
 * [設定] 一般 > ダウンロード > 保存場所を毎回確認する ***/
user_pref("browser.download.useDownloadDir", false);

/* 2652: 毎回のダウンロードでパネルが自動で開くのを無効化 [FF96+] ***/
user_pref("browser.download.alwaysOpenPanel", false);

/* 2653: ダウンロードしたファイルをシステムの「最近使ったファイル」一覧に追加しない ***/
user_pref("browser.download.manager.addToRecentDocs", false);

/* 2654: 新しいMIMEタイプのファイル処理時に常に確認を求める（セキュリティ強化） [FF101+]
 * [設定] 一般 > ファイルとアプリケーション > その他のファイルの扱い方法 ***/
user_pref("browser.download.always_ask_before_handling_new_types", true); // [FF101+]


/** EXTENSIONS（拡張機能） **/

/* 2660: 拡張機能の許可ディレクトリを制限
 * 1=プロファイル, 2=ユーザー, 4=アプリケーション, 8=システム, 16=一時, 31=すべて
 * 例: 5 = プロファイル + アプリケーション
 * [SETUP-CHROME] 許可外の場所にある拡張が読み込めなくなる
 * [1] https://archive.is/DYjAM ***/
user_pref("extensions.enabledScopes", 5); // [隠し設定]
   // user_pref("extensions.autoDisableScopes", 15); // [デフォルト: 15]

/* 2661: サードパーティ拡張のインストール時の確認ダイアログをバイパス不可に [FF82+]
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1659530,1681331 ***/
user_pref("extensions.postDownloadThirdPartyPrompt", false);

/* 2662: 特定のMozillaドメインに対する拡張制限を解除（4503も必要） [FF60+]
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1384330,1406795,1415644,1453988 ***/
   // user_pref("extensions.webextensions.restrictedDomains", "");



/*** [SECTION 2700]: ETP（強化型トラッキング防止） ***/

/* 2701: ETP（強化型トラッキング防止）を「厳格モード」で有効化 [FF86+]
 * 厳格モードは Total Cookie Protection（TCP）を有効にする
 * [注] サイト例外を追加すると、そのサイトにおけるETP全体が無効化され、
 *      クロスサイト状態トラッキングのリスクが増す
 *      例：SiteA と SiteB の両方で PartyC（第三者）が共有される可能性あり
 * [1] https://blog.mozilla.org/security/2021/02/23/total-cookie-protection/
 * [設定] サイト例外を追加: アドレスバー > ETP シールド
 * [設定] 例外を管理: オプション > プライバシーとセキュリティ > 強化型トラッキング防止 > 例外を管理 ***/
user_pref("browser.contentblocking.category", "strict");

/* 2702: ETP の Web 互換機能（SmartBlock等）を無効化 [FF93+]
 * [SETUP-HARDEN] スキップリスト、ヒューリスティック（SmartBlock）、自動許可機能を含む
 * リダイレクト・opener のヒューリスティックは最大30日間許可される
 * [1] https://blog.mozilla.org/security/2021/07/13/smartblock-v2/
 * [2] https://hg.mozilla.org/mozilla-central/rev/e5483fd469ab#l4.12
 * [3] https://developer.mozilla.org/docs/Web/Privacy/State_Partitioning#storage_access_heuristics ***/
   // user_pref("privacy.antitracking.enableWebcompat", false);



/*** [SECTION 2800]: 終了時のデータ削除（サニタイズ） ***/

// [IMPORTANT] 日常用途の利便性において重要な部分です

/* 2810: Firefox 終了時に項目を自動削除（サニタイズ）を有効化
 * [注] FF129+では、"サイト設定"（2811+）や"サイトデータ"（2820+）、"履歴"（2830）での削除は、
 *       cookieおよびサイトデータの例外（2815）には影響しなくなる
 * [設定] プライバシーとセキュリティ > 履歴 > Firefox終了時に履歴を消去 > 設定 ***/
// user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.sanitize.sanitizeOnShutdown", false); // 起動時に前回のセッションを復元したいのでfalseに（履歴を保持）

/* 2811: 終了時に削除する項目（2810 が true の場合）を設定・強制 [SETUP-CHROME] [FF128+] ***/
user_pref("privacy.clearOnShutdown_v2.cache", true);                        // キャッシュ
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true); // 履歴・フォームデータ・DL履歴
   // user_pref("privacy.clearOnShutdown_v2.siteSettings", false);         // サイト設定 [デフォルト: false]

/* 2812: 上記の項目を分割して個別設定 [FF136+] ***/
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true); // 閲覧履歴・DL履歴
user_pref("privacy.clearOnShutdown_v2.downloads", true);                   // ダウンロード履歴
user_pref("privacy.clearOnShutdown_v2.formdata", true);                    // フォーム入力データ

/* 2813: セッション復元データを終了時に削除（2810 が true の場合） [FF34+]
 * [注] 0102で復元機能を無効にしている、または2811+ですでに履歴を削除していれば不要
 * [注] trueにするとクラッシュからの自動復元も行われなくなる（5008参照） ***/
   // user_pref("privacy.clearOnShutdown.openWindows", true);

/* 2815: Cookie と サイトデータを終了時に削除（2810 が true の場合） [SETUP-CHROME] [FF128+]
 * [注] クロスドメインログインが必要な場合は、関連する両ドメインに例外を追加
 * 例：YouTube（https://www.youtube.com） + Google認証（https://accounts.google.com）
 * [警告] サイトに「許可」例外を設定すると、Cookieのパーティショニングも無効化される点に注意
 * [設定] 例外追加: Ctrl+I > 権限 > Cookie > 許可
 * [設定] 例外管理: オプション > プライバシーとセキュリティ > 権限 > 設定
 * [NOTE] これを `false` にすることで、ログイン状態が維持されます。 ***/
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", false);

/* 2820: 手動「データを消去」で削除する項目 [SETUP-CHROME] [FF128+]
 * Firefoxは直前の選択を記憶する。この設定で毎回リセット可能
 * [設定] プライバシーとセキュリティ > Cookieとサイトデータ > データを消去 ***/
user_pref("privacy.clearSiteData.cache", true);                             // キャッシュ
user_pref("privacy.clearSiteData.cookiesAndStorage", false);               // Cookieとサイトデータ → falseのままが推奨
user_pref("privacy.clearSiteData.historyFormDataAndDownloads", true);      // 履歴・フォーム・DL
   // user_pref("privacy.clearSiteData.siteSettings", false);              // サイト設定

/* 2821: 上記の項目を個別に設定 [FF136+] ***/
user_pref("privacy.clearSiteData.browsingHistoryAndDownloads", true);
user_pref("privacy.clearSiteData.formdata", true);

/* 2830: 手動「履歴を消去」で削除する項目 [SETUP-CHROME] [FF128+]
 * Firefoxは直前の選択を記憶する。この設定で毎回リセット可能
 * [設定] プライバシーとセキュリティ > 履歴 > 履歴を消去 ***/
user_pref("privacy.clearHistory.cache", true);                              // キャッシュ [デフォルト: true]
user_pref("privacy.clearHistory.cookiesAndStorage", false);                // Cookie等 → falseのまま推奨
user_pref("privacy.clearHistory.historyFormDataAndDownloads", true);       // 閲覧履歴など [デフォルト: true]
   // user_pref("privacy.clearHistory.siteSettings", false);              // サイト設定 [デフォルト: false]

/* 2831: 上記をさらに細分化して設定 [FF136+] ***/
user_pref("privacy.clearHistory.browsingHistoryAndDownloads", true);
user_pref("privacy.clearHistory.formdata", true);

/* 2840: 「データを消去」「履歴を消去」で使う期間を指定（起動時に毎回リセット）
 * 0=すべて, 1=直近1時間, 2=直近2時間, 3=直近4時間, 4=本日分
 * [注] 値 5（直近5分）と 6（直近24時間）はUIに表示されず、動作保証されない可能性あり ***/
user_pref("privacy.sanitize.timeSpan", 0); // すべて削除



/*** [SECTION 4000]: FPP（指紋保護機能）
   RFP（抵抗指紋機能。設定4501）がFPPより優先される

   Firefox 118以降では、FPPはプライベートウィンドウでデフォルトで有効（設定4001）
   Firefox 119以降では、ETP（設定2701）によってFPPの制御が行われる。
   将来的には、互換性のためにサイト単位でFPPの保護を緩和するため、
   FPPがリモートサービスを使用するようになる予定（設定4004）。

   https://searchfox.org/mozilla-central/source/toolkit/components/resistfingerprinting/RFPTargetsDefault.inc

   【注意】RFPTargetsと個別の上書き設定（granular overrides）は実験的な機能であり、
   予期しない挙動を示す可能性がある
   例：フレームレートはオリジンごとではなくプロセス単位でしか制御できない

   バグ1826408 - フォントをシステムフォント（kBaseFonts + kLangPackFonts）に制限（Windows、Mac、一部のLinux）
      https://searchfox.org/mozilla-central/search?path=StandardFonts*.inc
   バグ1858181 - eTLD+1（トップレベル+1ドメイン）・セッション・ウィンドウモードごとに
      キャンバスを微妙にランダマイズ（FF120+）
***/

/* 4001: プライベートブラウジングモードでFPPを有効にする [FF114+]
 * 【注意】FF119以降では、すべてのモードにおけるFPP（7016）は
 *         ETPの「厳格モード」（設定2701）によって有効になる
 */
user_pref("privacy.fingerprintingProtection.pbmode", true); // [デフォルト: true]

/* 4002: グローバルなFPPの上書き設定を指定する [FF114+]
 * RFPTargets（※RFP用ではなくFPP専用）を使用
 * 例1: "+AllTargets,-CSSPrefersColorScheme,-JSDateTimeUTC"
 *   → すべてのターゲットを適用。ただし prefers-color-scheme と タイムゾーン変更は除外
 * 例2: "-AllTargets,+CanvasRandomization,+JSDateTimeUTC"
 *   → すべて無効だが、キャンバスのランダム化とタイムゾーン変更のみ有効にする
 * 【注意】arkenfoxではサポートされていない。RFPかFPPのデフォルト設定のみ使用すること
 * [1] https://searchfox.org/mozilla-central/source/toolkit/components/resistfingerprinting/RFPTargets.inc
 */
   // user_pref("privacy.fingerprintingProtection.overrides", "");

/* 4003: ドメイン単位のFPP細粒度上書き設定
 * JSON形式の例：
 *   "[{\"firstPartyDomain\": \"netflix.com\", \"overrides\": \"-CanvasRandomization,-FrameRate,\"}]"
 * → netflix.com に対してキャンバスのランダム化とフレームレート制御を無効化
 * 【注意】arkenfoxではサポートされていない。RFPまたはFPPのデフォルト設定を使用すること
 */
   // user_pref("privacy.fingerprintingProtection.granularOverrides", "");

/* 4004: リモートFPP上書きを無効化する [FF127+]
 * → 将来的にFPPが外部サーバーの指示で特定サイトに対して緩和されることを防ぐ
 */
user_pref("privacy.fingerprintingProtection.remoteOverrides.enabled", false);



/*** [SECTION 4500]: 任意機能：RFP（resistFingerprinting＝指紋取得への抵抗機能）
   RFPはFPP（設定4000）より優先される

   Firefox 128以降、ArkenfoxではFPPがデフォルト（ETPの「厳格モード」により自動有効化）。
   多くのユーザーにとって、これで十分な指紋保護となる。
   RFPを使用したい場合は、RFP（設定4501）を上書き指定に追加する。
   必要に応じて letterboxing（画面サイズ偽装、設定4504）、
   spoof_english（言語偽装、設定4506）、webgl制限（設定4520）なども併用可能。

   RFPは「全適用型」の保護：一部の機能だけを選んで適用することはできない。

   【警告】RFPによって保護されている指標を拡張機能で変更しないこと。
            正常に動作しないか、保護が破れる可能性がある。

   各リリースにおける主なRFP機能の追加履歴：

   418986  - window.screenとCSSメディアクエリの情報制限（FF41）
   1360039 - navigator.hardwareConcurrencyを「2」に偽装（FF55）
 FF56
   1333651 - User AgentとNavigator APIの偽装
      JS：Windows 10、OS X 10.15、Android 10、Linuxのいずれかに偽装
      HTTPヘッダ：FF136まではWindows 10またはAndroid 10.15に偽装、それ以降はJSに一致
   1369319 - デバイスセンサーAPI無効化
   1369357 - サイトごとのズーム機能を無効化
   1337161 - Gamepad APIでゲームパッドを隠す
   1372072 - Network Information APIを"unknown"に偽装（dom.netinfo.enabled=true時）
   1333641 - Web Speech APIの指紋取得を軽減
 FF57
   1369309 - メディア統計の偽装
   1382499 - Touch APIでの画面座標による指紋取得を軽減
   1217290 & 1409677 - WebGLの一部指紋保護を有効化
   1354633 - MediaError.messageの内容をホワイトリストに限定
 FF58+
   1372073 - MediaDevices APIでの指紋取得を偽装・遮断（FF59）
      偽装：デバイス一覧は「Internal Camera」と「Internal Microphone」のみ
      遮断：ondevicechange イベントを抑制
   1039069 - 言語設定が "en*" でない場合に警告（FF59）
   1222285 & 1433592 - キーボードイベントの偽装とモディファイア抑制（FF59）
      偽装はドキュメントの言語設定に基づき en-US のみ対応
      抑制される修飾キー：SHIFT、ALT（左右）
      ※Chromeは影響を受けない
   1337157 - WebGLのdebug renderer infoを無効化（FF60）
   1459089 - HTTP Accept-LanguageヘッダーでOSロケールを非送信（Androidのみ）（FF62）
   1479239 - prefers-reduced-motion を "no-preference" に偽装（FF63）
   1363508 & 1826051 - Pointer Eventsの偽装・遮断（FF64, FF132）
   1492766 - pointerEvent.pointeridを偽装（FF65）
   1485266 - CSSおよびCanvasにおけるシステム色の露出を無効化（FF67）
   1494034 - prefers-color-scheme を "light" に偽装（FF67）
   1564422 - AudioContext.outputLatency を偽装（FF70）
   1595823 - AudioContext.sampleRate を 44100 に偽装（FF72）
   1607316 - pointer を coarse、hover を none に偽装（Android）（FF74）
   1621433 - Canvasをランダマイズ（以前は全白のCanvas）（FF78）
   1506364 - prefers-contrast を "no-preference" に偽装（FF80）
   1653987 - フォント可視性をFirefox同梱フォントと「基本フォント」に限定（Win/Mac/一部Linux）（FF80）
   1461454 - MediaCapabilities における smooth=true、powerEfficient=false を偽装（FF82）
   1531915 - JavaScriptのsin/cos/tanにfdlibm（数学ライブラリ）を使用（FF93, ESR91.1）
   1756280 - navigator.pdfViewerEnabled を常にtrueに、プラグイン情報をハードコード（FF100〜115）
   1692609 - JSのタイミング精度を16.67msに制限（以前はFF55+で100ms）（FF102）
   1422237 - color-gamut を "srgb" に偽装（FF110）
   1794628 - inverted-colors を "none" に偽装（FF114）
   1787790 - システムフォントを標準化（FF128）
   1835987 - タイムゾーンを Atlantic/Reykjavik に偽装（以前はUTC）（FF128）
   1834307 - 常にスムーススクロールを使用（FF132）
   1918202 - スクリーンサイズとプラットフォームに基づいて画面の向きを偽装（FF132）
      以前は常に landscape-primary／角度0 を返していた（FF50+）
   1390465 - WebVTT（字幕）で全ての字幕をロード（FF133）
   1873382 - devicePixelRatio と CSSメディアクエリを一致させる（FF133）
      以前は FF41+ で devicePixelRatio=1 にハードコードされ、
      FF127+ では 2、CSSメディアクエリはズームレベルを devicePixelRatio=1 として偽装
***/

/* 4501: RFP（指紋取得防止機能）を有効化
 * 【注意】pbmode（プライベートブラウジング用）は true で、
 *          通常モードのRFPがfalseのときに適用される
 * 【設定ヒント - WEB】RFPを有効にすると、いくつかのサイト（主にCanvas関連）が正常に動作しない場合がある。
 * その場合は、URLバー経由でCanvasの例外設定を追加可能。
 * またRFP有効時には以下の副作用がある：
 *  - タイムゾーンがGMTに固定
 *  - サイトがlight（明）テーマを優先表示する傾向あり
 *  [NOTE] RFPは強力ですが、ウェブサイトの表示崩れやタイムゾーンの固定など、利便性への影響が大きいため、ここでは有効にしません
 */
   // user_pref("privacy.resistFingerprinting", true); // [FF41+]
   // user_pref("privacy.resistFingerprinting.pbmode", true); // [FF114+]


/* RFP関連のサブセット強化設定（RFP本体をOFFにしても有効） */

/* 4502: RFP時の新規ウィンドウ最大サイズを設定 [FF55+]
 * 【設定ヒント - CHROME】ウィンドウサイズは100単位で切り捨てられる：
 *   幅は200単位、高さは100単位で調整される
 * [1] https://bugzilla.mozilla.org/1330882
 */
user_pref("privacy.window.maxInnerWidth", 1600);  // ウィンドウ幅の最大値を固定
user_pref("privacy.window.maxInnerHeight", 900);  // ウィンドウ高さの最大値を固定

/* 4503: mozAddonManager Web API を無効化 [FF57+]
 * 【注意】AMO（Mozilla Add-ons）上でアドオンを動作させるには、2662の設定も必要
 * [1] https://bugzilla.mozilla.org/buglist.cgi?bug_id=1384330,1406795,1415644,1453988
 */
user_pref("privacy.resistFingerprinting.block_mozAddonManager", true);  // AMOサイトでの指紋収集遮断

/* 4504: letterboxing（画面サイズ偽装によるトラッキング防止）を有効化 [FF67+]
 * ウィンドウの内側サイズをステップ単位でマージンを付けて調整
 * 「dimensions」設定を使うと、指定サイズのみが適用される
 * フォーマット例: "800x600, 1000x1000"
 * 【設定ヒント - WEB】この機能はRFP（4501）と独立。RFP未使用でも使用可能。
 *   ただしRFP使用中でマージンが気になる場合は無効化も選択可能。
 * 【警告】「dimensions」設定はテスト用途のみであり、実運用では非推奨（指紋取得の元になる）
 * [1] https://bugzilla.mozilla.org/1407366
 * [2] https://hg.mozilla.org/mozilla-central/rev/7211cb4f58ff#l5.13
 */
   // user_pref("privacy.resistFingerprinting.letterboxing", true);
   // user_pref("privacy.resistFingerprinting.letterboxing.dimensions", "");

/* 4505: ドメイン単位でRFPを無効化 [FF91+]
 * 【注意】有効な例: "arkenfox.github.io", "*github.io"
 *         無効な例: "https://arkenfox.github.io", "github.io", "*arkenfox.github.io"
 */
   // user_pref("privacy.resistFingerprinting.exemptedDomains", "*.example.invalid");

/* 4506: RFPによる英語表示要求プロンプトを無効化 [FF59+]
 * 0 = プロンプト表示, 1 = 無効, 2 = 有効
 * 【注意】2から変更すると、言語設定（intl.accept_languages）はリセットされない
 * 【設定ヒント - WEB】有効時、ページ表示言語を "en-US, en"、ロケールを "en-US" に設定
 * 【関連設定】設定 > 一般 > 言語 > 表示言語の選択 > 英語を要求...
 */
user_pref("privacy.spoof_english", 1); // RFPの英語強制表示を無効（利便性維持）

/* 4510: システム色の使用を無効化（OSテーマによる指紋情報を防ぐ）
 * 【関連設定】設定 > 一般 > フォントと配色 > 配色 > システムの配色を使用
 */
user_pref("browser.display.use_system_colors", false);  // [デフォルト: false（Windows以外）]

/* 4511: システムアクセントカラーの使用を無効化（Windows特有の装飾指紋防止） */
user_pref("widget.non-native-theme.use-theme-accent", false); // [デフォルト: false（Windows）]

/* 4512: 新しいウィンドウを新しいタブで開くよう強制
 * ウィンドウサイズからの指紋取得やポップアップ誘導を防止
 * 1 = 最後に使ったウィンドウ／タブ, 2 = 新しいウィンドウ, 3 = 新しいタブ
 * ウィンドウサイズを操作した悪質なリンクや画面解像度のリークを防止
 * 右クリックからの新しいウィンドウでの開き方は影響を受けない
 * 【関連設定】設定 > 一般 > タブ > 新しいウィンドウでなくタブでリンクを開く
 * [1] https://gitlab.torproject.org/tpo/applications/tor-browser/-/issues/9881
 */
user_pref("browser.link.open_newwindow", 3);           // 新規ウィンドウをタブで開く [デフォルト: 3]

/* 4513: ウィンドウを開くすべてのメソッドで4512の動作を強制適用
 * [1] https://searchfox.org/mozilla-central/source/dom/tests/browser/browser_test_new_window_from_content.js
 */
user_pref("browser.link.open_newwindow.restriction", 0); // 常にタブで開くよう強制

/* 4520: WebGL（Webグラフィックスライブラリ）を無効化 */
   // user_pref("webgl.disabled", true);



/*** [SECTION 5000]: 任意設定 - OPSEC（運用セキュリティ）
   ディスク回避、アプリケーションデータの分離、情報漏洩防止などを目的とした設定群
***/

/* 5001: Firefoxをプライベートブラウジング（PB）モードで起動
 * 【注意】このモードではすべてのウィンドウがプライベート扱いとなり、PBアイコンは表示されない
 * 【誤解注意】PBモードの「プライベート」は「永続的なディスク状態」が保存されないことを指す
 *   - 例：履歴、キャッシュ、検索語、Cookie、localStorage、IndexedDB などが保持されない
 *   - 通常モードでも同様のことは実現可能
 * 【限界】PBモードでは一部の設定制御が制限されたり、Firefoxの終了が必要なケースもある
 * 【推奨】PBは一時的なセッション用途で使い、使用後は全PBウィンドウを閉じることで状態を破棄する
 * 【設定】設定 > プライバシーとセキュリティ > 履歴 > 常にプライベートブラウジングモードを使用
 * [1] https://wiki.mozilla.org/Private_Browsing
 * [2] https://support.mozilla.org/kb/common-myths-about-private-browsing
 */
   // user_pref("browser.privatebrowsing.autostart", true);

/* 5002: メモリキャッシュを無効化
 * capacity: -1=自動決定（デフォルト）、0=無効、n=KiB単位のメモリ容量
 */
   // user_pref("browser.cache.memory.enable", false);
   // user_pref("browser.cache.memory.capacity", 0);

/* 5003: パスワードの保存を無効化
 * 【注意】既に保存されたパスワードはこの設定では削除されない
 * 【設定】設定 > プライバシーとセキュリティ > ログインとパスワード > 保存を求める
 *  [NOTE] 拡張機能などで別途パスワード管理を行う方向けの設定。
 */
user_pref("signon.rememberSignons", false);

/* 5004: パーミッションマネージャーのディスク書き込みを無効化 [FF41+] [再起動必要]
 * 【注意】この設定により、許可の変更はセッション内に限定され、保存されない
 * [1] https://bugzilla.mozilla.org/967812
 */
   // user_pref("permissions.memory_only", true);

/* 5005: 中間証明書のキャッシュを無効化 [FF41+] [再起動必要]
 * 【注意】この設定はログイン情報や証明書データベースに影響し、すべてセッション限定となる
 *   保存されたパスワードや認証情報は使用できなくなる。戻すにはprefリセット＋再起動が必要
 */
   // user_pref("security.nocertdb", true);

/* 5006: 履歴やブックマークでのfavicon保存を無効化
 * 【注意】favicons.sqlite に保存されるが、履歴やブックマークの情報以上の漏洩はしない
 * 【補足】アイコンはFirefox終了時に自動でクリーンアップされる
 */
   // user_pref("browser.chrome.site_icons", false);

/* 5007: セッション復元の「閉じたタブを元に戻す」機能を無効化 */
   // user_pref("browser.sessionstore.max_tabs_undo", 0);

/* 5008: クラッシュ後のセッション復元を無効化
 * [テスト] about:crashparent
 * 【目的】Firefoxのクラッシュ検知時に、前回のタブを自動復元させない
 * 【理由】他人の操作時や公共端末などで、予期せぬ閲覧内容の露呈を防止
 * 【備考】通常のプライバシーレベルでは有効化が実用的。デフォルトはtrueだが、trueを明示。
 *        セキュリティ・匿名性重視なら false
 */
user_pref("browser.sessionstore.resume_from_crash", true);

/* 5009: ダウンロードダイアログでの「アプリケーションで開く」を無効化 [FF50+]
 * アプリケーション間のデータ漏洩を防止
 * [1] https://bugzilla.mozilla.org/1281959
 */
   // user_pref("browser.download.forbid_open_with", true);

/* 5010: ロケーションバーのサジェスト機能を無効化
 * 【設定】設定 > 検索 > アドレスバー使用時に提案する内容
 */
   // user_pref("browser.urlbar.suggest.history", false);
   // user_pref("browser.urlbar.suggest.bookmark", false);
   // user_pref("browser.urlbar.suggest.openpage", false);
   // user_pref("browser.urlbar.suggest.topsites", false); // [FF78+]

/* 5011: ロケーションバーのドロップダウン表示を無効化
 * この設定値はドロップダウンに表示される最大件数を制御する
 */
   // user_pref("browser.urlbar.maxRichResults", 0);

/* 5012: ロケーションバーのオートフィルを無効化
 * [1] https://support.mozilla.org/kb/address-bar-autocomplete-firefox#w_url-autocomplete
 */
   // user_pref("browser.urlbar.autoFill", false);

/* 5013: 閲覧履歴とダウンロード履歴の保存を無効化
 * 【補足】Arkenfoxではさらにexit時の履歴削除設定（2811+）も併用
 * 【設定】設定 > プライバシーとセキュリティ > 履歴 > 閲覧とダウンロード履歴を記憶する
 */
   // user_pref("places.history.enabled", false);

/* 5014: Windowsのジャンプリスト機能を無効化 [Windowsのみ] */
   // user_pref("browser.taskbar.lists.enabled", false);
   // user_pref("browser.taskbar.lists.frequent.enabled", false);
   // user_pref("browser.taskbar.lists.recent.enabled", false);
   // user_pref("browser.taskbar.lists.tasks.enabled", false);

/* 5016: デスクトップへのダウンロードを避ける設定
 * 0=デスクトップ, 1=ダウンロードフォルダ（デフォルト）, 2=カスタムパス
 * 【設定】設定 > 一般 > ダウンロード > ファイルの保存先
 */
   // user_pref("browser.download.folderList", 2);

/* 5017: フォームのオートフィルを無効化
 * 地域設定と条件によりUIが有効になる
 * 保存データはJSONであり、セキュリティ的に信頼性が低い
 * 【設定】設定 > プライバシーとセキュリティ > フォームとオートフィル > 住所を自動入力
 * [1] https://wiki.mozilla.org/Firefox/Features/Form_Autofill
 */
   // user_pref("extensions.formautofill.addresses.enabled", false);
   // user_pref("extensions.formautofill.creditCards.enabled", false);

/* 5018: ポップアップ発生を許可するイベントを制限 */
   // user_pref("dom.popup_allowed_events", "click dblclick mousedown pointerdown");

/* 5019: ページサムネイルの収集を無効化 */
   // user_pref("browser.pagethumbnails.capturing_disabled", true);

/* 5020: Windowsネイティブ通知を無効化し、Firefox独自通知を使用 [FF111+] [Windows] */
   // user_pref("alerts.useSystemBackend.windows.notificationserver.enabled", false);

/* 5021: ロケーションバーからの検索を無効化
 * タイポしたURLなどを勝手に検索エンジンに送信させない（例: "secretplace,com" 等）
 * 【注意】検索ボタンやキーワード検索など明示的な検索操作は影響を受けない
 */
   // user_pref("keyword.enabled", false);



/*** [SECTION 5500]: 任意設定 - HARDENING（防御強化）
   ※ 非推奨。これらの設定を上書きすると、動作不良やパフォーマンス低下を引き起こす可能性がある。
      また、これらの機能は多くが指紋取得可能であり、現実的な脅威モデルに合わないことが多い。
***/

/* 5501: MathML（数学マークアップ言語）を無効化 [FF51+]
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=mathml
 */
// user_pref("mathml.disabled", true); // バグ1173199

/* 5502: SVG（Scalable Vector Graphics）のHTML内表示を無効化 [FF53+]
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=firefox+svg
 */
// user_pref("svg.disabled", true); // バグ1216893

/* 5503: Graphite（フォントレンダリング機能）を無効化
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=firefox+graphite
 * [2] https://en.wikipedia.org/wiki/Graphite_(SIL)
 */
// user_pref("gfx.font_rendering.graphite.enabled", false);

/* 5504: asm.js を無効化 [FF22+]
 * JavaScriptのサブセットで高速なバイナリライクなコードを提供する機能
 * [1] http://asmjs.org/
 * [2] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=asm.js
 * [3] https://rh0dev.github.io/blog/2017/the-return-of-the-jit/
 */
// user_pref("javascript.options.asmjs", false);

/* 5505: JSエクスプロイト対策として JIT/Ion コンパイルを無効化 [再起動必要]
 * 【注意】IonとJITを両方無効化しても、信頼されたプリンシパル（trustedprincipals）が有効だと
 * 拡張機能側ではIonが使用可能になる（バグ1599226）
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=firefox+jit
 * [2] https://microsoftedge.github.io/edgevr/posts/Super-Duper-Secure-Mode/
 */
// user_pref("javascript.options.ion", false);
// user_pref("javascript.options.baselinejit", false);
// user_pref("javascript.options.jit_trustedprincipals", true); // [FF75+] [HIDDEN PREF]

/* 5506: WebAssembly（WASM）を無効化 [FF52+]
 * WASMはネイティブに近い低レベルアクセスを持ち、ブルートフォースや既知の脆弱性再現を可能にする
 * 【統計】全ウェブサイトのうち約0.2%がWASM使用。その半分は暗号採掘・マルウェア用途
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=wasm
 * [2] https://spectrum.ieee.org/tech-talk/telecom/security/more-worries-over-the-security-of-web-assembly
 * [3] https://www.zdnet.com/article/half-of-the-websites-using-webassembly-use-it-for-malicious-purposes
 */
// user_pref("javascript.options.wasm", false);

/* 5507: SVG OpenType フォントのレンダリングを無効化 */
// user_pref("gfx.font_rendering.opentype_svg.enabled", false);

/* 5508: DRMコンテンツ（EME: 暗号化メディア拡張）を無効化
 * 任意でUIの設定表示を隠すことも可能（プロンプト表示も抑制）
 * 【設定】設定 > 一般 > DRMコンテンツ > DRM制御コンテンツの再生を許可
 * [テスト] https://bitmovin.com/demos/drm
 * [1] https://www.eff.org/deeplinks/2017/10/drms-dead-canary-how-we-just-lost-web-what-we-learned-it-and-what-we-need-do-next
 */
// user_pref("media.eme.enabled", false);
// user_pref("browser.eme.ui.enabled", false);

/* 5509: VPN使用時のIPv6を無効化
 * この設定はFirefox内のみで、OS/ネットワークレベルでの無効化が理想
 * 【注意】PHPの "localhost" はIPv6優先。 "php -S 127.0.0.1:PORT" を使用すべき
 * 【設定ヒント - WEB】VPN環境で PR_CONNECT_RESET_ERROR などのエラーが出る場合に有効
 * [テスト] https://ipleak.org/
 * [1] https://www.internetsociety.org/tag/ipv6-security/
 */
// user_pref("network.dns.disableIPv6", true);

/* 5510: クロスオリジンReferer送信制御
 * 0=常に送信（デフォルト）、1=ベースドメイン一致時のみ、2=ホスト一致時のみ
 * 【注意】古いモデム/ルーターや一部のWebサービス（例：銀行、Vimeo、iCloud、Instagram）で動作不良を起こす可能性あり
 */
// user_pref("network.http.referer.XOriginPolicy", 2);

/* 5511: DoH（DNS-over-HTTPS）のブートストラップアドレスを設定 [FF89+]
 * FirefoxはDoHサーバーの最初の解決にシステムDNSを使用する
 * ブートストラップアドレスを正しく設定すれば、システムDNSを回避できる
 * ただし、指定したIPが network.trr.uri のホストと一致しない場合、DoHは機能しない
 */
// user_pref("network.trr.bootstrapAddr", "10.0.0.1"); // [HIDDEN PREF]



/*** [SECTION 6000]: 触らないこと（DON'T TOUCH）
   これらはArkenfoxの動作やFirefoxのセキュリティ整合性を保つための重要な設定です。
***/

/* 6001: Firefoxのブロックリスト（Blocklist）を強制有効化
 * 【理由】失効済み証明書の更新（例：OneCRL）を含む重要なセキュリティ保護機構
 * [1] https://blog.mozilla.org/security/2015/03/03/revoking-intermediate-certificates-introducing-onecrl/
 */
user_pref("extensions.blocklist.enabled", true); // [デフォルト: true]

/* 6002: Referer（リファラ）の偽装を禁止
 * 【理由】Refererの偽装はCSRF（クロスサイトリクエストフォージェリ）対策を回避する可能性がある
 */
user_pref("network.http.referer.spoofSource", false); // [デフォルト: false]

/* 6004: 一部の確認ダイアログ（インストール・保存など）にセキュリティ遅延を強制
 * 【理由】レースコンディションによる誤操作の防止、クリックジャック防止
 * [1] https://www.squarefree.com/2004/07/01/race-conditions-in-security-dialogs/
 */
user_pref("security.dialog_enable_delay", 1000); // [デフォルト: 1000]

/* 6008: First Party Isolation（FPI）を無効に強制 [FF51+]
 * 【警告】FPIはFirefox 85以降ではネットワークパーティショニングやTotal Cookie Protection（TCP, 設定2701）に置き換えられた
 *         FPIを有効にするとこれらが無効になる。現在FPIはTor Browser専用設定でメンテナンスされている
 */
user_pref("privacy.firstparty.isolate", false); //  [デフォルト: false]

/* 6009: SmartBlock用Shim（互換性レイヤー）を有効に強制 [FF81+]
 * 【理由】互換性問題を回避するための代替ライブラリ（shims）を読み込む
 * [1] https://blog.mozilla.org/security/2021/03/23/introducing-smartblock/
 */
user_pref("extensions.webcompat.enable_shims", true); // [HIDDEN PREF] [デフォルト: true]

/* 6010: TLS 1.0 / 1.1 の使用を禁止（古いプロトコルへのダウングレードを防止し、安全なTLSのみ許容）
 * 【テスト】https://tls-v1-1.badssl.com:1010/
 */
user_pref("security.tls.version.enable-deprecated", false); // [デフォルト: false]

/* 6011: Web Compatibility Reporter を無効に強制 [FF56+]
 * Web Compatibility Reporter は「サイトの問題を報告」ボタンを表示し、Mozillaにデータを送信する
 * 【理由】カスタム構成での動作報告はMozillaの調査リソースを浪費する可能性があるため
 */
user_pref("extensions.webcompat-reporter.enabled", false); // [デフォルト: false]

/* 6012: Quarantined Domains（隔離ドメイン機能）を有効に強制 [FF115+]
 * 【理由】Mozillaが危険と判断したドメインに対し、機能制限を適用するセキュリティ保護機構
 * [WHY] https://support.mozilla.org/kb/quarantined-domains
 */
user_pref("extensions.quarantinedDomains.enabled", true); // [デフォルト: true]

/* 6050: prefsCleaner：Arkenfox FF128以降で削除された以前の設定項目をリセット
 * 【目的】古い設定ファイルに残った不要な設定を初期化するためのブロック
 */
// user_pref("privacy.clearOnShutdown.cache", "");
// user_pref("privacy.clearOnShutdown.cookies", "");
// user_pref("privacy.clearOnShutdown.downloads", "");
// user_pref("privacy.clearOnShutdown.formdata", "");
// user_pref("privacy.clearOnShutdown.history", "");
// user_pref("privacy.clearOnShutdown.offlineApps", "");
// user_pref("privacy.clearOnShutdown.sessions", "");
// user_pref("privacy.cpd.cache", "");
// user_pref("privacy.cpd.cookies", "");
// user_pref("privacy.cpd.formdata", "");
// user_pref("privacy.cpd.history", "");
// user_pref("privacy.cpd.offlineApps", "");
// user_pref("privacy.cpd.sessions", "");



/*** [SECTION 7000]: DON'T BOTHER（気にしなくていい設定）
   これらは変更しても実質的な効果が乏しく、指紋取得回避にも影響が小さい。
   破損や互換性問題のリスクもあるため、基本的にはいじる必要なし。
***/

/* 7001: APIの無効化
 * 位置情報API、フルスクリーンAPIなど
 * 【理由】APIの有効・無効状態も指紋情報となりうるため。ただし、いずれもユーザー操作が前提
 */
// user_pref("geo.enabled", false);
// user_pref("full-screen-api.enabled", false);

/* 7002: 権限のデフォルト値を設定
 * 位置情報、カメラ、マイク、通知、VR（仮想現実）
 * 0=常に確認（デフォルト）、1=許可、2=ブロック
 * 【理由】Permissions APIで読み取れるため指紋になりうる
 * 【補足】頻繁に使う・邪魔なサイトには個別に許可／拒否を設定すべき
 * 【設定場所】Ctrl+I → 権限／または 設定 > プライバシーとセキュリティ > 権限 > 設定
 */
// user_pref("permissions.default.geo", 0);
// user_pref("permissions.default.camera", 0);
// user_pref("permissions.default.microphone", 0);
// user_pref("permissions.default.desktop-notification", 0);
// user_pref("permissions.default.xr", 0); // 仮想現実

/* 7003: 非モダンな暗号スイートを無効化
 * 【理由】受動的指紋取得対策。ただしダウングレード攻撃の脅威はほぼ皆無
 * [1] https://browserleaks.com/ssl
 */
// user_pref("security.ssl3.ecdhe_ecdsa_aes_128_sha", false);
// user_pref("security.ssl3.ecdhe_ecdsa_aes_256_sha", false);
// user_pref("security.ssl3.ecdhe_rsa_aes_128_sha", false);
// user_pref("security.ssl3.ecdhe_rsa_aes_256_sha", false);
// user_pref("security.ssl3.rsa_aes_128_gcm_sha256", false); // PFSなし
// user_pref("security.ssl3.rsa_aes_256_gcm_sha384", false); // PFSなし
// user_pref("security.ssl3.rsa_aes_128_sha", false); // PFSなし
// user_pref("security.ssl3.rsa_aes_256_sha", false); // PFSなし

/* 7004: TLSのバージョン制御
 * 【理由】セキュリティと受動的指紋回避のため
 * 【補足】ArkenfoxではデフォルトのTLS 1.2（min=3）で十分なセキュリティと互換性を確保できるため、変更不要。
 *         TLS 1.3のみ許可しても指紋的には逆に目立ちやすく、メリットよりデメリットが大きい。
 */
// user_pref("security.tls.version.min", 3); // [デフォルト: 3]
// user_pref("security.tls.version.max", 4);

/* 7005: SSLセッションIDを無効化 [FF36+]
 * 【理由】指紋対策およびパフォーマンス改善（隔離もされている）
 */
// user_pref("security.ssl.disable_session_identifiers", true);

/* 7007: Refererポリシー関連の調整（クロスオリジン以外はあまり意味がない） */
// user_pref("network.http.sendRefererHeader", 2);
// user_pref("network.http.referer.trimmingPolicy", 0);

/* 7008: デフォルトのReferer Policy設定 [FF59+]
 * 0=no-referer, 1=same-origin, 2=strict-origin-when-cross-origin, 3=no-referrer-when-downgrade
 * 【理由】デフォルト値で十分。サイトが独自にポリシーを指定可能
 */
// user_pref("network.http.referer.defaultPolicy", 2); // [デフォルト: 2]
// user_pref("network.http.referer.defaultPolicy.pbmode", 2); // [デフォルト: 2]

/* 7010: HTTP Alt-Svc（代替サービス）を無効化 [FF37+]
 * 【理由】既にネットワークパーティショニング（FF85+）で隔離済み
 */
// user_pref("network.http.altsvc.enabled", false);

/* 7011: サイトによる右クリックメニューの制御を無効化
 * 【理由】Shift＋右クリックで回避可能
 */
// user_pref("dom.event.contextmenu.enabled", false);

/* 7012: アイコンフォント（Webフォント）とローカルフォントのフォールバック描画を無効化
 * 【理由】フォント偽装対策＋RFP互換
 * [1] https://bugzilla.mozilla.org/789788
 * [2] https://gitlab.torproject.org/legacy/trac/-/issues/8455
 */
// user_pref("gfx.downloadable_fonts.enabled", false); // [FF41+]
// user_pref("gfx.downloadable_fonts.fallback_delay", -1);

/* 7013: Clipboard APIを無効化
 * 【理由】指紋リスクあり。ペーストは明示的なユーザー操作時のみ可能
 */
// user_pref("dom.event.clipboardevents.enabled", false);

/* 7014: システムアドオンのアップデートを無効化
 * 【理由】セキュリティリスク。システムアドオンにはプレファレンスで対応する
 */
// user_pref("extensions.systemAddon.update.enabled", false); // [FF62+]
// user_pref("extensions.systemAddon.update.url", ""); // [FF44+]

/* 7015: DNT（Do Not Track）ヘッダーを有効化
 * 【理由】ETP Strict（2701）で実効的に強制されるため補完的意味合い
 */
// user_pref("privacy.donottrackheader.enabled", true);

/* 7016: ETP関連の設定群（FPP含む）
 * 【注意】RFP（4501）有効時にはFPPは無視される
 * 【理由】ArkenfoxではStrictモード（2701）のみサポートし、実行時に自動で適用される
 */
// ETP Strictモード
user_pref("network.cookie.cookieBehavior", 5); // [デフォルト: 5（ETP Strict）]
user_pref("network.cookie.cookieBehavior.optInPartitioning", true); // [ETP FF132+]
// Refererポリシー強化
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault", true);
user_pref("network.http.referer.disallowCrossSiteRelaxingDefault.top_navigation", true); // [FF100+]
// バウンストラッキング防止
user_pref("privacy.bounceTrackingProtection.mode", 1); // [FF131+] [ETP FF133+]
// 指紋取得防止（RFPは無効なのでFPPを有効化）
// RFPほどの互換性問題はなく、Canvas, Audio, WebGLなど主要APIに制限がかかる
// ETP「厳格」だけでは防げない識別系の補完として推奨されます
user_pref("privacy.fingerprintingProtection", true); // [FF114+] [ETP FF119+]
// OCSPキャッシュの分離（明示）
user_pref("privacy.partition.network_state.ocsp_cache", true); // [デフォルト: true]
// トラッキングクエリ除去
user_pref("privacy.query_stripping.enabled", true); // [FF101+]
// トラッキング保護群
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.socialtracking.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true); // [デフォルト: true]
user_pref("privacy.trackingprotection.fingerprinting.enabled", true); // [デフォルト: true]

/* 7017: Service Workerを無効化
 * 【理由】TCP（2701）で既に隔離されており、2710で制御可能
 */
// user_pref("dom.serviceWorkers.enabled", false);

/* 7018: Web通知を無効化 [FF22+]
 * 【理由】7002でプロンプト設定済み。重複制御
 * [1] https://blog.mozilla.org/en/products/firefox/block-notification-requests/
 */
// user_pref("dom.webnotifications.enabled", false);

/* 7019: プッシュ通知を無効化 [FF44+]
 * 【理由】WebサイトによるPushにはユーザー同意が必須。CRLite（1224）にもAPIが必要
 * 【補足】すべての購読を削除したい場合は "dom.push.userAgentID" をリセット
 * [1] https://support.mozilla.org/kb/push-notifications-firefox
 */
// user_pref("dom.push.enabled", false);

/* 7020: WebRTC（リアルタイム通信）を無効化
 * 【理由】mDNSホスト名による秘匿、プライベートIPは明示的なアクセス許可後にのみ露出
 * [テスト] https://browserleaks.com/webrtc
 * [1] https://groups.google.com/g/discuss-webrtc/c/6stQXi72BEU/m/2FwZd24UAQAJ
 * [2] https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-mdns-ice-candidates#section-3.1.1
 */
// user_pref("media.peerconnection.enabled", false);

/* 7021: GPC（Global Privacy Control）を有効化（通常ウィンドウのみ）
 * 【理由】ETP Strictや閉じる際のデータ消去（2800番台）で十分カバーされる
 */
// user_pref("privacy.globalprivacycontrol.enabled", true);



/*** [SECTION 8000]: DON'T BOTHER - FINGERPRINTING
   【理由】これらの設定は指紋対策としては効果が不十分であり、
            むしろ副作用の方が大きい。RFPと併用することで競合が生じるため非推奨。
   【警告】RFP（4501）が有効な環境では、これらの設定は使用しないこと
***/

/* 8001: prefsCleaner - 指紋取得対策として無意味な項目をリセット */
   // user_pref("browser.display.use_document_fonts", "");
   // user_pref("browser.zoom.siteSpecific", "");
   // user_pref("device.sensors.enabled", "");
   // user_pref("dom.enable_performance", "");
   // user_pref("dom.enable_resource_timing", "");
   // user_pref("dom.gamepad.enabled", "");
   // user_pref("dom.maxHardwareConcurrency", "");
   // user_pref("dom.w3c_touch_events.enabled", "");
   // user_pref("dom.webaudio.enabled", "");
   // user_pref("font.system.whitelist", "");
   // user_pref("general.appname.override", "");
   // user_pref("general.appversion.override", "");
   // user_pref("general.buildID.override", "");
   // user_pref("general.oscpu.override", "");
   // user_pref("general.platform.override", "");
   // user_pref("general.useragent.override", "");
   // user_pref("media.navigator.enabled", "");
   // user_pref("media.ondevicechange.enabled", "");
   // user_pref("media.video_stats.enabled", "");
   // user_pref("media.webspeech.synth.enabled", "");
   // user_pref("ui.use_standins_for_native_colors", "");
   // user_pref("webgl.enable-debug-renderer-info", "");


/*** [SECTION 8500]: TELEMETRY（テレメトリ収集の無効化）
   Arkenfoxは、Firefoxのテレメトリ（統計情報収集）をプライバシーやセキュリティの懸念とは見なしていない。
   ただし、多くのユーザーがこれを無効化したいと望んでいるため、初期設定で無効にしている。

   ■ オプトアウトの立場
   - ブラウザエンジンは非常に大規模かつ複雑で、維持に莫大なコストがかかるため、テレメトリは本質的に必要
   - オプトインでは代表性に欠け、収集データが偏るため意味がない

   ■ ユーザー選択
   - 新しいプロファイル初回起動時に、データ収集ポリシーが表示され、オプトアウト可能
   - いつでも「設定 > プライバシーとセキュリティ > データ収集と利用」から無効化可能

   ■ データ内容
   - 個人識別情報（PII）は収集されない
   - about:telemetry で確認可能
   - Prio [1][2][3], Glean [4], Oblivious HTTP [5][6] を利用

   [1] https://crypto.stanford.edu/prio/
   [2] https://hacks.mozilla.org/2018/10/testing-privacy-preserving-telemetry-with-prio/
   [3] https://blog.mozilla.org/security/2019/06/06/next-steps-in-privacy-preserving-telemetry-with-prio/
   [4] https://firefox-source-docs.mozilla.org/toolkit/components/glean/index.html
   [5] https://firefox-source-docs.mozilla.org/toolkit/components/glean/user/ohttp.html
   [6] https://blog.mozilla.org/en/tag/oblivious-http/
***/

/* 8500: データ送信を完全に無効化 [FF41+]
 * 【効果】収集ポリシーの表示すら行われず、一切のデータ送信が行われなくなる
 * [1] https://bugzilla.mozilla.org/1195552
 */
user_pref("datareporting.policy.dataSubmissionEnabled", false);

/* 8501: ヘルスレポート（Firefox Health Report）を無効化
 * 【設定】設定 > プライバシーとセキュリティ > データ収集と利用 > 技術情報を送信
 */
user_pref("datareporting.healthreport.uploadEnabled", false);

/* 8502: Telemetry（統計情報収集）を無効化
 * 「unified」が false の場合、「enabled」がテレメトリ全体を制御
 * 「unified」が true の場合、「enabled」は拡張データの記録のみを制御
 * 【注意】"toolkit.telemetry.enabled" はビルド種別によりロックされている可能性あり（true/false）
 * [1] https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/internals/preferences.html
 * [2] https://medium.com/georg-fritzsche/data-preference-changes-in-firefox-58-2d5df9c428b5
 */
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false); // [注意: 実際の効果はビルドに依存]
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false); // [FF55+]
user_pref("toolkit.telemetry.updatePing.enabled", false); // [FF56+]
user_pref("toolkit.telemetry.bhrPing.enabled", false); // [FF57+] 背景ハングレポート
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false); // [FF57+]

/* 8503: Telemetry Coverage（データ網羅率）測定機能を無効化
 * [1] https://blog.mozilla.org/data/2018/08/20/effectively-measuring-search-in-firefox/
 */
user_pref("toolkit.telemetry.coverage.opt-out", true); // [HIDDEN PREF]
user_pref("toolkit.coverage.opt-out", true); // [FF64+] [HIDDEN PREF]
user_pref("toolkit.coverage.endpoint.base", "");



/*** [SECTION 9000]: NON-PROJECT RELATED（Arkenfoxとは無関係な快適設定） ***/

/* 9001: Firefox起動時のウェルカム画面を無効化
 * 【効果】アップグレード後の紹介ページなどをスキップ
 */
user_pref("browser.startup.homepage_override.mstone", "ignore"); // [HIDDEN PREF]

/* 9002: アドオンや機能のおすすめ通知を無効化 [FF67+]
 * 【設定】設定 > 一般 > ブラウジング > 閲覧中にアドオンや機能をおすすめ
 */
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);

/* 9004: 検索語の表示を無効化 [FF110+]
 * 【効果】アドレスバーに検索語ではなくURLを表示する
 * 【設定】設定 > 検索 > アドレスバーを検索とナビゲーションに使用 > URLの代わりに検索語を表示
 */
user_pref("browser.urlbar.showSearchTerms.enabled", false);



/*** [SECTION 9999]: DEPRECATED / RENAMED（廃止または名称変更済みの設定） ***/

/* ESR128.x では以下の設定が引き続き有効
 * ※ 通常のリリース版ではすでに削除・無効化されている可能性あり
 */

/*
// FF132
// 2617: WebChannelのホワイトリストを削除
// [-] https://bugzilla.mozilla.org/1275612
// user_pref("webchannel.allowObject.urlWhitelist", "");
*/



/* [SECTION 10000]: CUSTOM ADDITIONS - PRAGMATIC OVERRIDES
 * 本セクションは、オリジナルの arkenfox user.js には含まれていないが、
 * 実用性・QoL・セキュリティ強化の観点から意図的に追加した設定である。
 * バージョンアップ時の整合性維持のため、他セクションとは明示的に分離する。
 */


/* [Betterfoxからの導入] --- Start --- */

// userChrome.css と userContent.css を有効にする (UIの高度なカスタマイズに必須)
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Pocket機能を完全に無効化
user_pref("extensions.pocket.enabled", false);

// フルスクリーン移行時のアニメーションと警告を無効化し、表示を高速化
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);

/* [Network Performance] 高速化と低レイテンシのためのチューニング
 * 【目的】FirefoxのHTTPスタック/SSL/DNS挙動を最適化し、ページ読み込みの体感速度を向上
 * 【出典】Betterfox, `about:networking`, mozilla dev docs
 *   [NOTE] 高速回線・モダンなハードウェア環境を想定。リソース使用量は増加する。 */
// 同時HTTP接続数の上限を引き上げ（マルチタブ環境向け）
user_pref("network.http.max-connections", 1800);  // デフォルト: 900
// 1サーバーへの持続的接続数の上限を引き上げ（Keep-Alive強化）
user_pref("network.http.max-persistent-connections-per-server", 10); // デフォルト: 6
// 高優先リクエスト（urgent-start）用に追加接続スロットを確保
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5); // デフォルト: 3
// HTTPリクエストの発行ペーシング（レート制限）を無効化し応答性を向上
user_pref("network.http.pacing.requests.enabled", false);
// DNSキャッシュの保持時間を延長（再問い合わせ最小化）
user_pref("network.dnsCacheExpiration", 3600);
// SSLセッショントークンのキャッシュ容量を拡大（再接続高速化）
user_pref("network.ssl_tokens_cache_capacity", 10240);

/* [Performance/GFX] 描画およびメディア関連キャッシュの最適化
 * 【目的】GPU描画・フォント処理・メディア再生・画像デコードの最適化により
 *  UXとパフォーマンスの両立を図る。RAM/VRAMが潤沢な環境向け。
 * 【出典】Betterfox, Skia/Canvas docs, media stack tuning
 *   [NOTE] RAM/VRAMを潤沢に利用しUX向上を図る。低スペック環境では注意。 */
user_pref("gfx.canvas.accelerated.cache-size", 512);         // GPU canvas キャッシュ上限（MB）
user_pref("gfx.content.skia-font-cache-size", 20);           // Skia フォント描画キャッシュ（MB）
user_pref("media.memory_cache_max_size", 65536);             // メディア用RAMキャッシュ上限（KB）
user_pref("media.cache_readahead_limit", 7200);              // 先読み最大量（KB）
user_pref("media.cache_resume_threshold", 3600);             // バッファ再開時の読み込み閾値（KB）
user_pref("image.mem.decode_bytes_at_a_time", 32768);        // 画像デコード単位（バイト）

/* [UI/UX] ユーザー操作性とインターフェース体験向上
 * 【目的】右クリック機能、フォーム挙動、検索UI、貼り付け、PDF等の表示動作を微調整し
 *  開発者・上級ユーザー向けの細やかなUXを構築する */
user_pref("browser.preferences.moreFromMozilla", false);         // 設定画面に「More from Mozilla」を表示しない
user_pref("browser.download.open_pdf_attachments_inline", true); // PDF を別ビューアでなく Firefox 内で表示
user_pref("browser.bookmarks.openInTabClosesMenu", false);       // ブックマーク開いてもメニューを閉じない
user_pref("editor.truncate_user_pastes", false);                 // テキスト貼り付け時のフォーマット保持
user_pref("browser.menu.showViewImageInfo", true);               // 画像の情報を表示メニューを復活
user_pref("findbar.highlightAll", true);                         // 検索一致箇所をすべて強調表示
user_pref("layout.word_select.eat_space_to_next_word", false);   // ダブルクリック選択時に空白含めない

/* [Privacy/Security] パスワードおよびテレメトリ関連
 * 【目的】プライベートブラウジング中の認証情報保持を回避し、Mozillaへの
 *  自動統計送信（テレメトリ）も無効化して、プライバシー水準を強化 */
// プライベートモードでのパスワード保存無効化。
// 但し、（5003）signon.rememberSignons=false のため、
// プライベートモードでの保存も既に無効だが、一応明記。
user_pref("signon.privateBrowsingCapture.enabled", false);
// 使用状況テレメトリのアップロード禁止。
// 但し、（8500）datareporting.policy.dataSubmissionEnabled=false のため、
// 個別テレメトリも既に無効。一応明記。
user_pref("datareporting.usage.uploadEnabled", false);

/* [Privacy] BeaconDBを位置情報プロバイダとして使用
 * 【目的】Mozilla Location Services (MLS) の代替として、BeaconDB (https://beacondb.net) を使用
 * - オープンかつプライバシー重視のネットワークジオロケーションサービス
 * - FirefoxやGeoclue等のMLS互換APIクライアントと互換性あり
 * 【出典】https://beacondb.net / HN: https://news.ycombinator.com/item?id=40895672
 *  以下の設定は、SECTION 0200 と 7001 の設定と競合します。
 *  ネットワーク位置情報を有効にしたい場合は、この設定を有効にし、
 *  さらに `user_pref("geo.enabled", true);` を追加する必要があります。
 */
// user_pref("geo.provider.network.url", "https://api.beacondb.net/v1/geolocate");

/* [Betterfoxからの導入] --- End --- */


/* [その他オリジナル設定項目]  */

/* [Security] HTTP接続での自動パスワード補完を無効化
 * - 将来的に autofillForms を true にした場合でも、HTTP 上では補完されないようにする
 * - 中間者攻撃やフィッシング対策として有効 ***/
user_pref("signon.autofillForms.http", false);

/* [Security] Fission: サイトアイソレーションを有効化
 * 【目的】オリジン単位でのプロセス分離により、メモリ隔離・クラッシュ耐性・セキュリティ向上を実現
 *  クロスサイト攻撃やプロセス間メモリリークを防止する現代的なセキュリティ機能です。
 * 【補足】Firefox 94+ 以降はデフォルトで true。明示することで構成意図を明確化。
 */
user_pref("fission.autostart", true);

/* [Privacy] DoH確認時のテレメトリ送信を無効化
 * - FirefoxはDoH接続前に確認リクエストを送信し、その結果をMozillaに送る（ネットワーク確認テレメトリ）
 * - プライバシー重視構成ではこの送信をブロックしても実害はない
 * - DoHの機能そのものには影響しないため、安全に無効化可能 ***/
user_pref("network.trr.confirmation_telemetry_enabled", false);
