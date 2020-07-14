getExtSetting:function(){
	var extLang = {
		'en':{
			"APP_NAME":"Citium",
			"APP_INIT_DEVICE":"<i class='fa fa-spinner fa-pulse'></i>&nbsp;&nbsp;Initializing device now…",
			"BTN_CREATE_PRIKEY":"New ID",
			"BTN_CONFIRM":"Confirm",
			"BTN_CONFIRM_ON":"Switch On",
			"BTN_CANCEL":"Cancel",
			"BTN_CLOSE":"Close",
			"BTN_CONFIRM_LOGIN":"Login",
			"BTN_CANCEL_QIUT":"Fully Exit App",
			"PANEL_ADDFRIEND_TITLE":"Invite a Friend to your Contact List",
			"INPUT_MY_NICKNAME":"Your Nickname",
			"INPUT_LEAVEMSG_TIP":"Fill in your Nickname so that your friends may know who you are on their Contact List.",
			"INPUT_ADDF_NICKNAME":"Set Contact's Nickname",
			"DEFAULT_FRIEND_NICKNAME":"Nickname not set",
			"DEFAULT_MY_LEAVEMSG":"Anonymous",
			"SETTING_FRI_AVATAR":"Set Avatar for Contact",
			"DEFAULT_NICKNAME":"UNNAMED",
			"PANEL_ADDFRIEND_HELP_TILTE":"Tips",
			"PANEL_COPYTOCB_PUBKEY":"Click to generate a Friend Invitation Code (FIC). Send it to your friend so that he or she can become your Contact on your Contact List. Note that you can only generate up to twenty (20) FICs per day.",
			"PANEL_AUTH_NICKNAME_TIP":"Determine what your friend see you Nickname as from his or her own Contact List.",
			"PANEL_LOGIN_WITH_PRIKEY_FILE":"Login With 2nd-Factor Password",
			"PANEL_LOGIN_FORGET_PASSWD_TIP":"If you lose the password, you have to clean the application data in settings, then restart from scratch.",
			"INPUT_PASSWORD_PH":"Input Password",
			"ERROR_NOT_CONNECT_WITH_SERVER":"Cannot connect to Server",
			"NICKNAME":"Nickname",
			"PANEL_OPT_SYSTEM_SETTING":"CLICK HERE to Personalize",
			"DO_CLEAR_BUFFER_NOW":"Cleaning Cache……",
			"CLEAR_BUFFER_FINISH":"Cache cleaned",
			"PANEL_NEW_VPNADDRESS": "Add New VPN Service Address",
			"PANEL_NEW_BOOKMARK_TILTE":"Add Favorite",
			"INPUT_PUB_PUB_KEY":"Input URL",
			"REMOVE_BOOKMARK_TIP_H":"Confirm to remove <",
			"REMOVE_BOOKMARK_TIP_T":"> from bookmarks?",
			"PANEL_OPT_COMPLEX_SETTING":"General Settings",
			"PANEL_OPT_BOOKMARK":"Bookmarks",
			"PANEL_OPT_ADDRESSBOOK": "Instant Messenger",
			"PANEL_OPT_MY_BOOKMARK":"My favorites",
			"PANEL_OPT_BGRUNNGING_NOTIFY":"Running in background<br><span style='font-size:10px;'>receiving message all the time</span>",
			"PANEL_OPT_AUDIO_NOTIFY":"Sound Notification",
			"PANEL_OPT_VIBRATE_NOTIFY":"Vibration Notification",
			"PANEL_OPT_EXPORT_PRIKEY_NOTIFY":"Switch ID",
			"PANEL_OPT_CLEAR_BUFFER_NOTIFY":"Clean Cache",
			"PANEL_OPT_QUIT_APP":"Log Out",
			"PANEL_OPT_WELCOME":"Click&nbsp;&nbsp;<i class='fa fa-user-plus' style='color: #1B9AF7;'></i>&nbsp;&nbsp;button to add contact",
			"QUIT_WARNING_TIP":"Confirm to Fully Exit this App?",
			"PANEL_LOADINGBAR_LOADINGNOW":"Updating data……",
			"PANEL_LOADINGBAR_LOADFAILED":"Request data failed, please try later...",
			"PANEL_CHAT_FRIEND_SETTING_TITLE":"Contact Infomation",
			"PANEL_REMOVEFRIEND_TIP":"Confirm to remove this Contact?",
			"PANEL_REMOVEFRIEND_TITEL":"<i class='fa fa-exclamation-triangle' style='color:#FF6600'></i>&nbsp;&nbsp;Remove Contact",
			"PANEL_ERASE_CHATRECORD_TIP":"Confirm deleting all chat history with him/her.",
			"PANEL_ERASE_CHATRECORD_TITEL":"Clear Chat History",
			"PANEL_ERASE_CHATRECORD_BTN":"Clear History",
			"PANEL_REMOVE_FRIEND_BTN":"Delete Contact",
			"PANEL_FRIEND_SETTING_BTN":"Edit Contact",
			"PANEL_CHAT_SENDPIC_BTN":"Photo",
			"PANEL_CHAT_SENDVIDEO_BTN":"Video",
			"PANEL_CHAT_SENDFILE_BTN":"Files",
			"PANEL_CHAT_WAIT_AUTH":"Not Verified",
			"PANEL_CHAT_PRESS_TALK_BTN":"Hold to Talk",
			"PANEL_CHAT_UNPRESS_TALK_BTN":"Release to Send",
			"PANEL_CHAT_FILE_SEND":"Size of file to send requires between 10k~200M.",
			"PANEL_HELP_TITLE":"Help",
			"PANEL_PERSONAL_TITLE":"Personal Info",
			"PANEL_PERSONAL_I_AVATAR":"Avatar",
			"PANEL_PERSONAL_D_KEY_PROOF":"Authentication",
			"PANEL_PERSONAL_D_KEY_PROOF_YES":"Confirmed",
			"PANEL_PERSONAL_D_KEY_PROOF_NO":"Unconfirmed",
			"PANEL_PERSONAL_I_QRCODE_CARD":"QR code",
			"PANEL_PERSONAL_I_SHARE":"Invite Your Friend",
			"PANEL_PERSONAL_I_NOTSET":"None",
			"PANEL_PERSONAL_I_UNKNOW":"Unknown",
			"PANEL_PERSONAL_D_AVATAR_TITLE":"Set Avatar",
			"PANEL_PERSONAL_D_NICENAME_TITLE":"Set Your Default Nickname",
			"PANEL_PERSONAL_D_COPY_PUBKEY_TITLE":"Message copied to clipboard",
			"PANEL_PERSONAL_D_COPY_PUBKEY_CONTENT": "Friend Invitation Code (FIC) is copied to your clipboard. You may send it to your friend. FIC is valid for 24 hours. <span style = 'font-size:14px;color:#e97c12;'>(Note: FIC can only be used once for one of your friends to add you.)</span>",
			"ASK_INVITE_INFO_NOW":"Generating authentication info for invitation...",
			"SETTING_PUSH_SERVICE_DOMAIN":"Input push server domain name",
			"REGISTER_NEW_ACCOUNT":"Connecting to server...",
			"REGISTER_FAILED":"Connection to server failed...",
			"TEMPAUTH_FAILED":"Server is temporarily unreachable...",
			"DATABASE_ERROR":"Data Operation Failed!",
			"TEMPAUTH_LIMITED":"Authentication signature generated up to limit today. Apply for certified user to increase the limit or connect to service provider administrator.",
			"TEMPAUTH_INFO_MSG":". This is a Friend Invitation Code (FIC). it is valid for 24 hours. ",
			"ASKFOR_INVITE_TIP":"Verifying and submitting request...",
			"ASKFOR_INVITE_SAMEKEY_ERROR":"Your clipboard contains a Friend Inivation Code (FIC) that you have generated earlier! Since system prevents new FIC from overwriting existing one, you must manually copy some random text to your clipboard before inviting new friend again.",
			"ASKFOR_INVITE_HOSTURL_ERROR":"Server host address is incorrect.",
			"ASKFOR_INVITE_SIGNATURE_ERROR":"Error in Generating Cert Signing Code (CSC).",
			"PANEL_SAVERECV_FILE_TITEL":"Save to file",
			"PANEL_SAVERECV_FILE_CONTENT":"File will be saved under the folder named pangomail. Are you sure to save now?",
			"PANEL_SAVERECV_FILE_NOW":"<div style='overflow: auto;text-align: center;'><i class='fa fa-spinner fa-pulse'></i><p>Saving the file...</p></div>",
			"PANEL_SAVERECV_FILE_OK":"<div style='overflow: auto;text-align: center;'>File is saved successfully!</div>",
			"PANEL_SAVERECV_FILE_FAILED":"<div style='overflow: auto;text-align: center;'>File is corrupted cannot be saved!</div>",
			"PANEL_PERSONAL_D_NICENAME_TITLE_TIP":"Set up your ID first so that your friend can find you.",
			"TEMPAUTH_INFO_MSG_HEAD":"Hi, I'm ",
			"AUTH_SAYHELLO":" is saying hello to you.",
			"NOT_SUPPORT_VOICEMSG":"Recording is not supported is this particular version of software.",
			"BTN_KEY_PROOF":"AUTHORIZE",
			"KEY_PROOF_TITLE":"Public Key authentication",
			"KEY_PROOF_CONTENT":"Public Key authentication is optional. But finishing it can ease the usage of this app.",
			"ASK_KP_INVITE_INFO_NOW":"Public key authentication is being generated ...",
			"ERROR_CREATE_KEY_PROOF_AUTH":"Create authentication failed.",
			"CREATE_NEW_INVITE":"Create a Friend Invitation Code (FIC)",
			"PANEL_VPNSERVICE":"LubeVPN",
			"PANEL_VPNSERVICE_START_TIP":"Configuring LubeVPN...",
			"PANEL_VPN_ERROR_1":"Local 1080 port is occupied. Shut off other app that might be using it.",
			"PANEL_VPN_ERROR_2":"Cannot find the needed LubeVPN configuration info. Please contact LIVE HELP for assistance.",
			"PANEL_VPN_ERROR_3":"Authentication is invalid. Ask your Referrer (Inviter) for more info or assistance.",
			"PANEL_VPN_ERROR_4":"Service information is unfounded. Try reconfigure LubeVPN service.",
			"PANEL_VPN_ERROR_5":"Fail to read the configuration file!",
			"PANEL_VPN_ERROR_A":"LubeVPN startup failed, please switch off the LubeVPN first, and then switch it back on after 1 minute.",
			"PANEL_PROXY_TITLE":"Setup LubeVPN CERT",
			"PANEL_PROXY_SETTING":"SETUP / LIVE HELP",
			"PROXY_PUBKEY":"My Public Key",
			"PROXY_CERITFICATE":"LubeVPN CERT",
			"PROXY_PUBKEY_NO":"<span style='color:#1B9AF7;'>CLICK HERE to create My CERT</span>",
			"PROXY_CERITFICATE_NO":"<span style='font-size:13px;color:#1B9AF7;'>Get FREE Trial</span>",
			"PROXY_LOADING":"Loading the configuration...",
			"PROXY_CERITFICATE_EXPIRED": "<span style='font-size:13px;color:#ec0a0a;'>expired</span>",
			"PROXY_CERITFICATE_VALIDITY":"Valid Till:",
			"PROXY_CREATENEW_TIP":"Creating CERT for LubeVPN service...",
			"PANEL_CREATENEW_ERROR":"Error in creating CERT. Restart APP to try again.",
			"PANEL_CREATENEW_OK_TITLE":"LubeVPN CERT is created successfully.",
			"PANEL_CREATENEW_OK_CONTENT":"1. Details of the FREE CERT is automatically copied to your device’s clipboard. Paste and send the details via the Citium Instant Messenger (CIM) dialogue box between you and your referrer and wait for him/her to sign it. 2. Once he/she signs it, you will receive an interactive message button in the dialogue box. 3. You press the button to import the signed FREE CERT to your device. 4. Turn on the LubeVPN toggle switch to request authorization to VPN service. Toggle switch turns to green if the authorization succeeds. ",
			"PANEL_CREATENEW_WARNING":"CERT exists already. CAUTION: Are you sure you want to irreversibly creating a new one?",
			"PROXY_ASKAUTH_MSG":"How to get a free trial of LubeVPN?",
			"PROXY_ASKAUTH_TIP":"There are three steps to activate the LubeVPN FREE CERT. They are as follows: 1. Find a friend (e.g. Alice) who holds a valid (i.e. unexpired) LubeVPN CERT. Add Alice as your new Contact in your Citium Instant Messenger (CIM) via out-of-band authentication. 2. In Settings page, create a FREE CERT of your own, which details will be automatically copied to your device’s clipboard. Paste and send the details via the dialogue box between you and Alice and wait for her to sign it. Once Alice signs it, you will receive an interactive message button in the dialogue box. You press the button to import the signed FREE CERT to your device. 3. Turn on the LubeVPN toggle switch to request authorization to VPN service. Toggle switch turns to green if the authorization succeeds.",
			"PROXY_ASKAUTH_TITLE":"How to get a 5-DAY FREE TRIAL of LubeVPN?",
			"PROXY_ASKAUTH_CONTENT_TIP_01":"Click Request Trial to send the information to your referrer, and let the referrer sign the trial certificate for you.",
			"PROXY_ASKAUTH_CONTENT_TIP_02":"In case you are not connected to any referrer or simply just like to start subscribing to LubeVPN, you can pay for a MEMBER CERT to start accessing LubeVPN service right away. Contact our in-app LIVE HELP for signing your CERT and arrange payment. ",
			"PROXY_ASKAUTH_CONTENT_TIP_03":"Fill in your designated service merchant ID. Then press the Apply button. (Ask your Referrer (Inviter) if you don't know the ID.)",
			"PROXY_AUTHREPLY_CONTENT_TIP":"Copy and paste the authentication message, a Cert Signing Code (CSC) sent from your Referrer (Inviter), into the input field.",
			"PROXY_AUTHREPLY_VERIFY_TIP":"Verifying the authentication message (Cert Signing Code (CSC)). Hang on...",
			"PROXY_VERIFY_ERROR_TIP":"Fail to verify the Cert Signing Code (CSC).",
			"APP_NEWVERSION_TITLE":"Version Update",
			"APP_NEED_NEWVERSION_TIP":"This feature need an version upgrade in order to function properly. Upgrade now!",
			"APP_DOWNLOAD_NEWVERSION":"Click to download the latest version.",
			"PROXY_ADVANCED_SETTING":"Advance Configuration",
			"PROXY_TRAFFIC_LESS":"Save Traffic by Ad Block",
			"PROXY_LOCALVIDEO_LESS":"Local Buffer",
			"PROXY_GAME_LESS": "System Wide VPN",
			"PROXY_SAVE_SETTING_TIP":"settings will take effect after next.",
			"PROXY_SAVE_SETTING":"Save Settings",
			"PANEL_HOME_AD":"AD",
			"PANEL_HOME_AD_NOMORE":"All data are loaded.",
			"PANEL_WV_LOAD_FAILED":"Fail to load data.",
			"PANEL_WV_LOAD_NEWSITE":"Loading new site.",
			"PANEL_WV_LOAD_FRIST":"This page utilize decentralized technology to serve its content to circumvent censorship. First-time opening this page might need [s] seconds to load or if you are too impatient to wait, try fully exit the Citium app and re-open it again. It might help loading it up faster!",
			"PANEL_WV_ERRORSITE":"Unable to load the page! You might want to fully exit the Citium app and re-open it again. This page may probably load up by then.",
			"PH_WEL_NEWUSER": "New User",
			"PH_WEL_TITLE":"Based on BitTorrent & SDTP theory, <br>create a completely decentralized <br>privacy-conscious and uncensorable <br> communication tool.",
			"PH_WEL_CONTENT":"<h2>Only Crypto Algorithm can Truly Protect</h2><h4>Privacy Data & Secure Communication</h4><p>Don't Trust Non-Decentralized APPs! They Only Wish Well!</p>",
			"APP_SYSERRO_TITLE":"Unexpected Error",
			"APP_SYSERRO_CONTENT":"Unexpected error occurs. Perhaps you might want to re-install APP to try again.",
			"VPN_ASK_BUTTON": "Apply for LubeVPN CERT",
			"VPN_REPLY_BUTTON": "<i class='fa fa-id-card-o'></i>&nbsp;Check FREE CERT",
			"VPN_ASK_TIP": "Signing of valid FREE CERT",
			"VPN_ASK_CONTENT": "Your friend issued a request for an FREE CERT. Note: Any signer (referrer) can sign an unlimited number of FREE CERT but the “validity” of FREE CERT is constrained by the CERT holding status of the signer. If the signer only holds a valid FREE CERT at the time validation, LubeVPN will only validate two (2) of the FREE CERTs that he/she signs on a first-come, first-served basis. LubeVPN will not validate latecomers. In other words, LubeVPN will deny further validation requests after validating the first and second requests until the signer of the FREE CERTs renews his/her own FREE CERT to MEMBER CERT. By then, LubeVPN will resume accepting a limited number of the late-coming requests for validating FREE CERTs that he/she signs. (For more info, please visit www.LubeVPN.com.) The takeaway is that do not sign excessively to avoid causing unnecessary trouble to your latercoming friends.",
			"VPN_REPLY_CHECK": "Verifying FREE CERT ...",
			"VPN_REPLY_CONTENT_01": "FREE CERT is done importing. Now you can start to use LubeVPN Service.",
			"VPN_REPLY_CONTENT_02": "LubeVPN CERT already exists; delete existing one before install new one.",
			"VPN_REPLY_INPORT": "Importing FREE CERT ...",
			"VPN_REPLY_CHECK_OK": "FREE CERT sucessfully signed. Ready to import now?",
			"ADDFRIEND_CHECK":"Verifying Friend Invitation Code (FIC)...",
			"FRIEND_OPCODE_CHECK_ERROR":"You must generate a Friend Invitation Code before invitation. Send this uniquely generated FIC to one (1) friend only.<br><br>FIC is a plain text code so that you can send it to your friend via any instant messenger, such as WhatsApp or LINE. FYI: this process is cryptographically considered an out-of-band authentication (OOBA).",
			"BTN_CREATE_FOPCODE":"Generate Invitation Code",
			"S_CHAT_LOADCONTENT":"Now loading messages...",
			"PANEL_OPT_HISTORY_RECORD":"CIM Message will Self-Distruct In...",
			"PANEL_OPT_HR_01":"3 Days",
			"PANEL_OPT_HR_02":"1 Week",
			"PANEL_OPT_HR_03":"1 Month",
			"PANEL_OPT_HR_SETTING_T":"Message Lifespan in CIM",
			"PANEL_OPT_HR_SETTING_C":"Choose the maximum lifespan of every message in CIM. Message will self-destruct at expiration.",
			"PANEL_P_SHARE_TITLE":"Share App and LubeVPN with your Friends",
			"PANEL_P_SHARE_CONTENT":"The installer of Citium App has been copied to your clipboard. Paste it to your friend so that they can start enjoy its showcase dApp, such as LubeVPN!",
			"PANEL_WEBVIEW_REGISTER_TITLE":"website register",
			"PANEL_WEBVIEW_REGISTER_CONTENT":"The current site initiated a registration request from you. It needs your authorization. Are you sure?",
			"BGACTION_HELP_SAPN":"Simulated Network Startup Reminder",
			"PROXY_HELP_SAPN":"FREE CERT Setup Guide",
			"PROXY_HELP_CONTENT":"<div style='font-size:16px;margin-bottom:10px;'>LubeVPN service is based on the latest decentralized technology to manage users, decorrelating users and the service and eliminating the need for phone, email, account ID and passwords. Users authentication, validation and service authorization are only based on a public key certificate system. Your self-generated digital certificate (CERT), is an electronic document used to prove the ownership of your Public Key.</div><div style='margin: 10px auto;'><span>Application procedure of LubeVPN is very different from others, please carefully follow these instructions: </span><ul style='margin:10px auto;'><li>Find a friend (e.g. Alice) who holds a valid (i.e. unexpired) LubeVPN CERT. Add Alice as your new Contact in your Citium Instant Messenger (CIM) via out-of-band authentication.</li><li>Click the link above to create a FREE CERT of your own, which details will be automatically copied to your device’s clipboard. Paste and send the details via the dialogue box between you and Alice and wait for her to sign it. Once Alice signs it, you will receive an interactive message button in the dialogue box. You press the button to import the signed FREE CERT to your device.</li><li>Turn on the LubeVPN toggle switch to request authorization to VPN service. Toggle switch turns to green if the authorization succeeds.</li></ul></div><div style='margin: 10px auto;'><span>FREE CERT signed by your Citium Contact (most likely be your referrer) lasts for five (5) days only. Further usage can be obtained through talking to our LIVE HELP: </span><br><ul style='margin:10px auto;'><li>Click the question mark sign on the top right corner of this page</li><li>Choose the MEMBER CERT renewal period at the bottom of the FAQ section</li><li>Click the dialogue bubble sign on the top right corn of the page to talk to our LIVE CHAT for get further instruction</li></ul>From then on, you can enjoy ultimate anonymity while surfing the web because no one knows who holds which LubeVPN CERT (public key) except the holder. This essentially guarantees the privacy of each user to the greatest extent.</div>",
			"HLS_CACHE_TITLE":"Video Cache",
			"HLS_CACHE_DEL_TIP_WARNING":"Do you You want to delete the video buffer?",
			"SWITCH_VPN_ON":"Switching on a simulated network service...",
			"SWITCH_VPN_ERROR":"Fail to switch on simulated network service!",
			"SWITCH_ONVPN_CONTENT":"This application is built on an open-source, fully decentralized, permissionless blockchain: Citium. In order for you to receive messages timely from other Citium Contact, we highly suggest you “Switch On” the simulated network service to keep this app running in the background. LubeVPN toggle switch will appear in color orange in the General Settings page (gear symbol button in the main menu) if you click “Switch On”.<br><br><span style='font-size: 13px;'>You can always disable this startup reminder in the “General Settings” > “Personalized Settings” section.</span>"
		},
		"zh":{
			"APP_NAME": "西蒂姆",
			"APP_INIT_DEVICE": "<i class='fa fa-spinner fa-pulse'></i>&nbsp;&nbsp;恢復原廠預設值…",
			"BTN_CREATE_PRIKEY": "創建通行證書",
			"BTN_CONFIRM": "繼續",
			"BTN_CONFIRM_ON":"開啓",
			"BTN_CANCEL": "取消",
			"BTN_CLOSE": "關閉",
			"BTN_CONFIRM_LOGIN": "登入",
			"BTN_CANCEL_QIUT": "完全退出App",
			"PANEL_ADDFRIEND_TITLE": "新增聯絡人",
			"INPUT_MY_NICKNAME": "告訴好友你的暱稱",
			"INPUT_LEAVEMSG_TIP": "請填寫你的暱稱，以便好友能清晰的識別",
			"INPUT_ADDF_NICKNAME": "聯系人暱稱",
			"DEFAULT_FRIEND_NICKNAME": "尚未設置暱稱",
			"DEFAULT_MY_LEAVEMSG": "匿名",
			"SETTING_FRI_AVATAR": "設置聯絡人頭像",
			"DEFAULT_NICKNAME": "未命名",
			"PANEL_ADDFRIEND_HELP_TILTE": "溫馨提醒",
			"PANEL_COPYTOCB_PUBKEY": "取得聯絡人授權訊息只能授權一個好友，每日最多可取得20份授權邀請",
			"PANEL_AUTH_NICKNAME_TIP": "建立你喜歡的暱稱並可以對每個不同用戶進行你想對方認識的暱稱",
			"PANEL_LOGIN_WITH_PRIKEY_FILE": "密碼登入",
			"PANEL_LOGIN_FORGET_PASSWD_TIP": "若密碼遺失，請進入設備系統設定，清理《西蒂姆》所有數據",
			"INPUT_PASSWORD_PH": "密碼",
			"ERROR_NOT_CONNECT_WITH_SERVER": "失去網路連線",
			"NICKNAME": "暱稱",
			"PANEL_OPT_SYSTEM_SETTING": "點擊這裡個性化設定",
			"DO_CLEAR_BUFFER_NOW": "正在清理瀏覽資料……",
			"CLEAR_BUFFER_FINISH": "已清除資料",
			"PANEL_NEW_VPNADDRESS": "新增VPN服务地址",
			"PANEL_NEW_BOOKMARK_TILTE": "新增APP",
			"INPUT_PUB_PUB_KEY": "輸入網址",
			"REMOVE_BOOKMARK_TIP_H": "移除書籤<",
			"REMOVE_BOOKMARK_TIP_T": ">嗎？",
			"PANEL_OPT_COMPLEX_SETTING": "設定",
			"PANEL_OPT_BOOKMARK": "書籤",
			"PANEL_OPT_ADDRESSBOOK": "通訊錄",
			"PANEL_OPT_MY_BOOKMARK": "我的最愛",
			"PANEL_OPT_BGRUNNGING_NOTIFY": "後台運行<br><span style='font-size:10px;'>同意網站後台更新時仍可接收訊息</span>",
			"PANEL_OPT_AUDIO_NOTIFY": "鈴聲",
			"PANEL_OPT_VIBRATE_NOTIFY": "震動",
			"PANEL_OPT_EXPORT_PRIKEY_NOTIFY": "切換帳號",
			"PANEL_OPT_CLEAR_BUFFER_NOTIFY": "清理瀏覽紀錄",
			"PANEL_OPT_QUIT_APP": "關閉功能",
			"PANEL_OPT_WELCOME": "點擊右上&nbsp;<i class='fa fa-user-plus' style='color: #1B9AF7;'></i>&nbsp;按鈕添加好友",
			"QUIT_WARNING_TIP": "確定完全退出App？",
			"PANEL_LOADINGBAR_LOADINGNOW": "正在下載數據……",
			"PANEL_LOADINGBAR_LOADFAILED": "下載失敗請再試一次",
			"PANEL_CHAT_FRIEND_SETTING_TITLE": "好友資訊",
			"PANEL_REMOVEFRIEND_TIP": "確定刪除好友嗎？",
			"PANEL_REMOVEFRIEND_TITEL": "<i class='fa fa-exclamation-triangle' style='color:#FF6600'></i>&nbsp;&nbsp;刪除好友",
			"PANEL_ERASE_CHATRECORD_TIP": "確定刪除所有聊天訊息嗎？",
			"PANEL_ERASE_CHATRECORD_TITEL": "刪除訊息",
			"PANEL_ERASE_CHATRECORD_BTN": "清理紀錄",
			"PANEL_REMOVE_FRIEND_BTN": "刪除好友",
			"PANEL_FRIEND_SETTING_BTN": "好友設定",
			"PANEL_CHAT_SENDPIC_BTN": "傳送照片",
			"PANEL_CHAT_SENDVIDEO_BTN": "傳送影片",
			"PANEL_CHAT_SENDFILE_BTN": "檔案傳輸",
			"PANEL_CHAT_WAIT_AUTH": "聯絡人尚未授權",
			"PANEL_CHAT_PRESS_TALK_BTN": "按住麥克風說話",
			"PANEL_CHAT_UNPRESS_TALK_BTN": "鬆開麥克風結束",
			"PANEL_CHAT_FILE_SEND": "檔案大小需再10K~200M之間。",
			"PANEL_HELP_TITLE": "幫助",
			"PANEL_PERSONAL_TITLE": "個人資訊",
			"PANEL_PERSONAL_I_AVATAR": "大頭貼",
			"PANEL_PERSONAL_D_KEY_PROOF": "身份認證",
			"PANEL_PERSONAL_D_KEY_PROOF_YES": "成功",
			"PANEL_PERSONAL_D_KEY_PROOF_NO": "未認證",
			"PANEL_PERSONAL_I_QRCODE_CARD": "行動條碼",
			"PANEL_PERSONAL_I_SHARE": "邀請好友",
			"PANEL_PERSONAL_I_NOTSET": "無",
			"PANEL_PERSONAL_I_UNKNOW": "未知",
			"PANEL_PERSONAL_D_AVATAR_TITLE": "設定個人圖片",
			"PANEL_PERSONAL_D_NICENAME_TITLE": "設定個人ID",
			"PANEL_PERSONAL_D_COPY_PUBKEY_TITLE": "訊息已複製",
			"PANEL_PERSONAL_D_COPY_PUBKEY_CONTENT": "聯絡碼已複製可以發送給聯絡人，該授權在24小時內有效<span style = 'font-size:14px;color:#e97c12;'>(注意：它只能授權給一個聯絡人)</span>",
			"ASK_INVITE_INFO_NOW": "正在生成邀請訊息。生成授權資訊中……",
			"SETTING_PUSH_SERVICE_DOMAIN":"設置推送商域名地址",
			"SETTING_EMAIL_SERVICE_URL": "輸入廠商的名稱，未填寫為默認選擇。",
			"REGISTER_NEW_ACCOUNT": "與伺服器聯繫中……",
			"REGISTER_FAILED": "與伺服器聯繫失敗！",
			"TEMPAUTH_FAILED": "目前該時段無法聯系伺服器",
			"DATABASE_ERROR": "數據下載失敗！",
			"TEMPAUTH_LIMITED": "授權通行證書數量已超過當日限制。提升該限制請諮詢推送服務提供商。授權認證資料已超過當日限制，解除限制請洽詢在線客服。",
			"TEMPAUTH_INFO_MSG": "。請復制整段信息，添加爲好友。",
			"ASKFOR_INVITE_TIP": "授權申請中……",
			"ASKFOR_INVITE_SAMEKEY_ERROR": "剪貼板上含有一個你較早前生成過的好友邀請碼。因為系統防止新碼覆蓋舊碼，所以你必須先去手動複製一些隨機的內容上剪貼板，然後才能再度邀請好友。",
			"ASKFOR_INVITE_HOSTURL_ERROR": "伺服器地址錯誤。",
			"ASKFOR_INVITE_SIGNATURE_ERROR": "創建失敗。",
			"PANEL_SAVERECV_FILE_TITEL": "下載檔案",
			"PANEL_SAVERECV_FILE_CONTENT": "檔案將下載在pangomail目錄，確定下載？",
			"PANEL_SAVERECV_FILE_NOW": "<div style='overflow: auto;text-align: center;'><i class='fa fa-spinner fa-pulse'></i><p>正在下載中……</p></div>",
			"PANEL_SAVERECV_FILE_OK": "<div style='overflow: auto;text-align: center;'>檔案下載成功！</div>",
			"PANEL_SAVERECV_FILE_FAILED": "<div style='overflow: auto;text-align: center;'>檔案損壞下載失敗！</div>",
			"PANEL_PERSONAL_D_NICENAME_TITLE_TIP": "需先設定ID，以利對方搜尋",
			"TEMPAUTH_INFO_MSG_HEAD": "你好，我是",
			"AUTH_SAYHELLO": "向你揮手。",
			"NOT_SUPPORT_VOICEMSG": "該版本不支持語音功能",
			"BTN_KEY_PROOF": "認證",
			"KEY_PROOF_TITLE": "西蒂姆公鑰認證",
			"KEY_PROOF_CONTENT": "公鑰認證不是必選的項目。經認證後的公鑰能減少使用過程中的一些繁雜步驟。",
			"ASK_KP_INVITE_INFO_NOW": "公鑰認證生成中……",
			"ERROR_CREATE_KEY_PROOF_AUTH": "創建認證失敗",
			"CREATE_NEW_INVITE": "創建好友邀請碼",
			"PANEL_VPNSERVICE": "順道VPN",
			"PANEL_VPNSERVICE_START_TIP": "順道VPN 配置進行中……",
			"PANEL_VPN_ERROR_1": "本地端口(1080)被佔用，請先關閉其他應用。",
			"PANEL_VPN_ERROR_2": "沒有找到所需的 順道VPN 配置，請尋求在線客服協助。",
			"PANEL_VPN_ERROR_3": "授權已失效，請聯繫服務人員處理。",
			"PANEL_VPN_ERROR_4": "尚無服務訊息，請先設定 順道VPN 服務。",
			"PANEL_VPN_ERROR_5": "檔案讀取失敗！",
			"PANEL_VPN_ERROR_A": "網路背景啟動失敗，請先關閉該服務，1分鐘後再測試。",
			"PANEL_PROXY_TITLE": "設立 順道VPN 通行證書",
			"PANEL_PROXY_SETTING": "服務設立 / 在線客服",
			"PROXY_PUBKEY": "我的公鑰",
			"PROXY_CERITFICATE": "顺道VPN通行證書",
			"PROXY_PUBKEY_NO": "<span style='color:#1B9AF7;'>點擊創建我的通行證書</span>",
			"PROXY_CERITFICATE_NO": "<span style='font-size:13px;color:#1B9AF7;'>點擊獲取順道VPN通行證書</span>",
			"PROXY_LOADING": "正在下載中…",
			"PROXY_CERITFICATE_EXPIRED": "<span style='font-size:13px;color:#ec0a0a;'>已失效</span>",
			"PROXY_CERITFICATE_VALIDITY": "有效期限至：",
			"PROXY_CREATENEW_TIP": "正在創建通行證書…",
			"PANEL_CREATENEW_ERROR": "創建通行證書異常錯誤，請重新啓動應用後再試",
			"PANEL_CREATENEW_OK_TITLE": "通行證書創建成功",
			"PANEL_CREATENEW_OK_CONTENT": "1、通行證書詳情已經被自動複製到本設備的剪贴板。請在 Citium 即時聊天通訊工具中，將其黏貼、發送到你與推薦人的對話框中，然後等待你的推薦人簽署它；2、你的推薦人完成簽署它後，你會在對話框中收到一個互動信息按鈕；3、你按下該按鈕即可完成導入該已簽署的《免費通行證書》到本設備內；4、撥亮順道VPN的切換鍵請求服務授權。如果授權成功，切換鍵轉成綠色。",
			"PANEL_CREATENEW_WARNING": "通行證書已存在，確認創建新的通行證書嗎？該操作不可逆轉，請慎重！",
			"PROXY_ASKAUTH_MSG": "如何可以免費試用 順道VPN？",
			"PROXY_ASKAUTH_TIP": "獲得免費試用 順道VPN 的機會，請按下述三步：1、找一名持有有效的（即，未逾期的）順道VPN《通行證書》的好友，例如 Alice。通過頻外密鑰驗證（即，本應用以外的其他訊息交互辦法）添加她成爲 Citium 即時聊天應用（CIM）中的聯絡人。2、在 順道VPN 設置頁面，創建一張屬於你自己的《免費通行證書》，其詳情將會被自動複製到設備的剪贴板。在你與 Alice 的聊天對話框中黏貼、發送該詳情給她，然後等待她簽署它。Alice 完成簽署它後，你會在對話框中收到一個互動信息按鈕，你按下該按鈕即可完成導入該已簽署的《免費通行證書》到設備內。3、撥亮順道VPN的切換鍵請求服務授權。如果授權成功，切換鍵轉成綠色。",
			"PROXY_ASKAUTH_TITLE": "如何獲得五天免費試用順道VPN？",
			"PROXY_ASKAUTH_CONTENT_TIP_01": "點擊申請試用將信息發送給您的推薦人，讓推薦人幫您簽署試用通行證書。",
			"PROXY_ASKAUTH_CONTENT_TIP_02": "或，更簡單地，付費獲取《會員通信證書》，然後馬上享用順道VPN。詳情參閱網址 www.LubeVPN.com 或馬上聯絡我們在線客服。",
			"PROXY_ASKAUTH_CONTENT_TIP_03": "或者填寫您的指定廠商代碼(如若不知道，請向您的推薦人詢問)，再點擊申請按鈕。",
			"PROXY_AUTHREPLY_CONTENT_TIP": "將授權訊息複製到文字框。",
			"PROXY_AUTHREPLY_VERIFY_TIP": "授權訊息驗證中，請稍後…",
			"PROXY_VERIFY_ERROR_TIP": "驗證失敗！",
			"APP_NEWVERSION_TITLE": "更新版本",
			"APP_NEED_NEWVERSION_TIP": "當前功能需要升級當前版本才能支持，請先下載安裝至最新版本。<ul style='font-size: 12px;margin-top: 10px;padding-inline-start: 20px;'><li>開始支持PC軟體（Linux, Mac 和 Win）</li><li>視頻支持後臺緩衝，可離線播放</li><li>修改了一些Bug</li><ul></ul></ul>",
			"APP_DOWNLOAD_NEWVERSION": "點擊下載新版本",
			"PROXY_ADVANCED_SETTING": "進階設定",
			"PROXY_TRAFFIC_LESS": "阻廣告省流量",
			"PROXY_LOCALVIDEO_LESS":"本地緩衝",
			"PROXY_GAME_LESS": "全網模式",
			"PROXY_SAVE_SETTING_TIP": "保存設定後，改變將在下一次激活服務時生效",
			"PROXY_SAVE_SETTING": "保存設定",
			"PANEL_HOME_AD": "廣告",
			"PANEL_HOME_AD_NOMORE": "所有數據已下載完成",
			"PANEL_WV_LOAD_FAILED": "載點數據安裝失敗",
			"PANEL_WV_LOAD_NEWSITE": "加載新的載點",
			"PANEL_WV_LOAD_FRIST": "正在搜尋並加入節點<br>首次加載預計[s]秒。<br>若依舊失敗，退出本應用App，再次進入即可。",
			"PANEL_WV_ERRORSITE": "站點加載失敗！<br>請嘗試退出本應用App，然後再次進入本頁面。",
			"PH_WEL_NEWUSER": "創建新身份",
			"PH_WEL_TITLE": "基於BitTorrent與SDTP理論，完全去中心化、隱私保護及互聯通訊應用。",
			"PH_WEL_CONTENT": "<h2>惟有數學能保護隱私數據和通訊安全</h4><p>任何中心機構信誓旦旦地承諾，不過是隨口一說罷了。</p>",
			"APP_SYSERRO_TITLE": "異常錯誤",
			"APP_SYSERRO_CONTENT": "異常錯誤發生，請重新安裝。",
			"VPN_ASK_BUTTON": "申請 順道VPN 通行證書",
			"VPN_REPLY_BUTTON": "<i class='fa fa-id-card-o'></i>&nbsp;請查看網路授權書",
			"VPN_ASK_TIP": "籤發有效《免費通行證書》的認證上限",
			"VPN_ASK_CONTENT": "您的好友向請求籤發順道《VPN免費通行證書》。注意：任何一名簽署者雖然可以簽署無限量張《免費通行證書》但是《免費通行證書》的「有效性」卻是受到了該簽署者的通行證書持有狀態限制的。如果簽署者個人只持有已授權的《免費通行證書》，按先到先得的原則，顺道VPN 只會認證其中兩（2）張他簽署的《免費通行證書》。顺道VPN將不會再受理晚來的認證請求。換句話說，順道VPN在認證完畢頭兩（2）張來訪請求認證的《免費通行證書》後就開始拒絕晚來的認證請求，直到簽署者自己持有的《免費通行證書》被「續時」。屆時，顺道VPN將恢復受理晚來的、有限張數的、他簽署的《免費通行證書》的認證請求，詳情參閱 www.LubeVPN.com。總而言之，請不要過度籤署，造成後來好友的、不必要的麻煩。",
			"VPN_REPLY_CHECK": "正在檢驗證書……",
			"VPN_REPLY_CONTENT_01": "通行證書導入完成，現在你可以使用 順道VPN 功能了。",
			"VPN_REPLY_CONTENT_02": "通行證書已存在，如需替換新的 順道VPN 通行證書，請先清除原有的通行證書。",
			"VPN_REPLY_INPORT": "正在導入通行證書……",
			"VPN_REPLY_CHECK_OK": "順道VPN 證書驗證成功，是否需要導入通行證書？",
			"ADDFRIEND_CHECK":"正在檢查好友聯絡碼……",
			"FRIEND_OPCODE_CHECK_ERROR":"加入好友請先復制發送給你的聯絡碼。<br><br>創建你的聯絡碼，然後透過LINE，WhatsApp或其他簡訊方式發送給你需要添加的好友。",
			"BTN_CREATE_FOPCODE":"創建聯絡碼",
			"S_CHAT_LOADCONTENT":"正在裝載簡訊…",
			"PANEL_OPT_HISTORY_RECORD":"簡訊自我毀滅週期為……",
			"PANEL_OPT_HR_01":"3天",
			"PANEL_OPT_HR_02":"1周",
			"PANEL_OPT_HR_03":"1個月",
			"PANEL_OPT_HR_SETTING_T":"設定簡訊時效",
			"PANEL_OPT_HR_SETTING_C":"選擇一個簡訊歷史的保存的最長時限。每條簡訊都將會在到期時間自我毀滅。",
			"PANEL_P_SHARE_TITLE":"分享應用程式",
			"PANEL_P_SHARE_CONTENT":"本應用程式的下載地址已復制，將訊息貼給你的朋友，開啓隱私保護的通訊。",
			"PANEL_WEBVIEW_REGISTER_TITLE":"站點注冊",
			"PANEL_WEBVIEW_REGISTER_CONTENT":"當前站點向您發起注冊請求，它需要您一次匿名身份證明，確定嗎？",
			"BGACTION_HELP_SAPN":"開啟App提醒開啟模擬網絡",
			"PROXY_HELP_SAPN":"免費通行證書設立說明",
			"PROXY_HELP_CONTENT":"<div style='font-size:16px;margin-bottom:10px;'>顺道VPN 服務基於最新的去中心化加密網絡數碼證書技術來將用戶和服務關聯，省去了電話、郵箱、賬號ID和密碼。用戶的認證、驗證和服務授權僅基於一套公鑰證書系統就可以了。你自我創建的數碼證書（“通行證書”）是用來認證你的公鑰的所有權。</div><div style='margin: 10px auto;'><span>順道VPN 的免費試用的申請流程與其他網站有很大的不同，請仔細閱讀以下說明：</span><ul style='margin:10px auto;'><li>找到一位持有有效（即未過期）順道VPN 通行證書的朋友（例如Alice）。</li><li>點擊上面的鏈接，創建一個《免費通行證書》，其詳情會自動復制到您的設備剪貼板。通過您和Alice之間的對話框粘貼並發送詳細信息，然後等待她簽署。在Alice簽署後，你便會在對話框中收到一個互動消息按鈕。</li><li>打開 順道VPN 切換開關，請求授權訪問 VPN 服務。</li></ul></div></div><div style='margin: 10px auto;'><span>由你的Citium聯系人（很可能是您的推薦人）簽署的《免費通行證書》有效期持續只有五（5）天。更多的續時方法可以通過與我們的在線克服人員交談獲得：</span><br><ul style='margin: 10px auto;'><li>點擊頁面右上角的問號符號</li><li>選擇常見問題集最下方的《會員通行證書》續時週期</li><li>點擊頁面右上角的對話氣泡標誌，與我們的在線客服對話，以獲得進一步的指導</li></ul>從那時起，您可以在瀏覽網頁時享受到終極的匿名性，因為除了通行證書持有者之外，沒有外人知道誰持有該證書的了，包括 順道VPN 從上至下任何一位工作人員都不知道。這在很大程度上保障了每個用戶的隱私。</div>",
			"HLS_CACHE_TITLE":"視頻緩衝",
			"HLS_CACHE_DEL_TIP_WARNING":"是否要刪除已經下載的視頻緩衝？",
			"SWITCH_VPN_ON":"正在開啓模擬網路服務",
			"SWITCH_VPN_ERROR":"開啓模擬網路服務失敗！",
			"SWITCH_ONVPN_CONTENT":"本應用基於P2P網路構架，爲了保證通訊及時性和更好的私密性，建議打開模擬網路服務。點擊開啟鍵後，【設定】（菜單最右齒輪狀按鍵進入）的VPN切換鍵將開啟並呈現橙色。<br><br><span style='font-size: 13px;'>你可以在【設定】>【個性化設定】禁用本彈出提示框。</span>"
		}
	};
	return {
		'lang':extLang,
		'proxyurl':"18vZURyFpU9ufRGdzgnETEu4VbY7bYj5t1",
		'vpnurl':"",
		'peers':"",
		'domain':"www.unicorn001.tk"
	};
},