---
layout: page
title: 機密|完整|可用性
subtitle: Confidentiality ✓<br>Integrity ✓<br>Availability ✓
bigimg: /img/conf.jpg
googlefonts: ["Roboto Condensed"]
---

大多數傳統即時通訊系統（IMS）是基於中心化身份驗證和授權機制去確保信息安全的，可惜任何中央化的系統都無可避免地需要承擔[數據洩露](https://en.wikipedia.org/wiki/Data_breach)的風險。（[詳述](../fallible_providers)）對比起來，西蒂姆（Citium）是由眾多節點網絡鋪墊出來的去中心化系統，在它的基礎上面搭建的IMS就不再需要承擔這種風險。舉例，假設兩個用戶試圖在西蒂姆（Citium）通訊。發件人是 Alice，預期收件人是 Bob。第三者是無法確認得知自己是否已經正確地解密得到 Alice 給 Bob 的訊息的，因為西蒂姆（Citium）用了以下的安全機制：1、[**PGP加密**](https://zh.wikipedia.org/zh-tw/PGP)；2、__無差別網樹多點傳送（IMTM）__**門限加密系統**；3、**秘鑰/信息疑義**。PGP太流行了，不需要再解釋了。但是「密鑰/消息疑義」比較少人認識，而「IMTM門限加密系統」是西蒂姆（Citium）獨有的，所以我們會花更多的時間來解釋它們的信息安全優勢。

Most of the conventional instant messenger systems (IMS) are built on a centralized authentication and authorization regime. Unfortunately, any centralized system is inherently susceptible to [data breach](https://en.wikipedia.org/wiki/Data_breach). ([More info here.](../fallible_providers)) In contract, IMS built on top of Citium, paved by a network of decentralized nodes, is not at risk. For example, suppose that two users are trying to communicate with each other on Citium. Sender is Alice and the intended recipient is Bob. No third party can know for sure if he or she has been correctly deciphering a message from Alice to Bob because Citium utilizes the following security mechanisms: 1. [**Pretty Good Privacy (PGP) Encryption**](https://en.wikipedia.org/wiki/Pretty_Good_Privacy); 2. **indiscriminate mesh-tree multicast (IMTM) threshold cryptosystem**; and 3. **Key/Message Equivocation**. PGP is too popular to need further explanation. But since the IMTM threshold cryptosystem is unique to Citium and key/message equivocation is less known, we are going to spend more time explaining their InfoSec advantages.

![Cipher](/img/flow.svg "Citium Off-the-Record Messaging Instant Messenger System"){: .center-block :}



**Figure 1.1:** Alice holds the two public keys given by Bob, i.e. K<sub>A</sub> & K<sub>B</sub>, because Alice and Bob have performed [out-of-band authentication](../authentication). Note that both of their devices manage their own cryptographic keys. In fact, all keys in Citium are generated or derived on-device. Private keys are never sent to anyone else, not even to the service nodes. Both public keys are used in the Hybrid Encryption module, which combines the deniability of a public-key cryptosystem, the efficiency of a symmetric-key cryptosystem, and the additional protection of threshold cryptosystem.

**Figure 1.2:** Citium Instant Messenger (CIM) <i class='fa fa-envelope-square' style='color:blue'></i> is an Off-the-Record Messaging (OTR) system. CIM  user Alice posts* a message to another Citium user Bob. Here, Alice's message is converted into a plaintext (M). M and Random Session Key (K<sub>R</sub>) are going to be processed through the Hybrid Encryption module as follows:

Plaintext (M) is first encrypted by the [XXTEA](https://en.wikipedia.org/wiki/XXTEA) and [Blowfish](https://en.wikipedia.org/wiki/Blowfish_(cipher)) algorithms with the Random Session Key (K<sub>R</sub>) resulting in a ciphertext (β). Slice β into n ciphertexts; and suppose n = 3, we have β<sub>1</sub>, β<sub>2</sub> and β<sub>3</sub>.

{: style="color: grey; font-size: 170%;"}
BLOWFISH<sup>K</sup><sub>R</sub>(XXTEA<sup>K</sup><sub>R</sub>(M)) ⇒ β<sub>n=3</sub>
⇒ β<sub>1</sub>, β<sub>2</sub>, β<sub>3</sub>

In order to create the θ, one β is randomly picked among the β<sub>n</sub>. Suppose β<sub>1</sub> is randomly picked from β<sub>n</sub>. K<sub>R</sub> is encrypted by [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) algorithm with K<sub>A</sub>, resulting which in turn combined with β<sub>1</sub> to be encrypted by [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) algorithm with K<sub>B</sub> resulting in a ciphertext (θ):

{: style="color: grey; font-size: 170%;"}
ECDSA<sup>K</sup><sub>B</sub>(β<sub>1</sub> + ECDSA<sup>K</sup><sub>A</sub>(K<sub>R</sub>))⇒ θ

Finally, the cipertexts of β<sub>2</sub>, β<sub>3</sub>, and θ (i.e. β<sub>n-1</sub>& θ) are ready for IMTM. Note that β<sub>1</sub> is not needed here because it has already been encapsulated in θ.

{: .box-success}
__*__  We use the word "post" instead of "send" because it makes more sense in the communication network of Citium, which combines the beauty of both cryptography and steganography. But what is steganography? Imagine the word "post" in the sense of Alice posting many anonymous and randomly placed classified ads on multiple newspapers around the world so everyone can see but only the intended recipient Bob knows how to locate them all and make sense of the underlying message. This practice, called steganography, is the flip side of cryptography. In cryptography, everyone involved knows a message has been sent. What's not known — except to the decoder — is the content of the message. Steganography hides the fact that a message was even sent, usually by hiding it in plain sight.(In the movie "A Beautiful Mind," the main character, played by Russell Crowe, becomes convinced that the Communists are hiding messages inside news stories and loses his mind trying to decipher them.)

**Figure 1.3:** Most instant messenger systems are designed that messages are directly pushed onto the client apps of the intended recipients. However, in Citium Instant Messenger system, push notifications are limited to a generic text reminder (i.e. "You have a new message.")(G) being sent to the intended recipients. The intended recipients are required to fetch in the messages on their own, which will be explained later in the data flow cycle. For now, Alice sends two pieces of information to Bob's service node IMSP Bolivia in case Bob is not currently online. One is the generic text reminder (i.e. "You have a new message.")(G), and the other is the ciphertext (θ) that encapsulates the Random Session Key (K<sub>R</sub>) and one of the randomly chosen sliced ciphertext (β<sub>1</sub>).

**Figure 1.4:** The cipertexts of β<sub>2</sub>, β<sub>3</sub>(i.e. β<sub>n-1</sub>) are sent to the Citium network by indiscriminate mesh-tree multicast (IMTM) which distributes indiscriminately to as many Citium nodes (i.e. service nodes and user nodes) as possible by mesh-tree multicasting, effectively preempting [link analysis](https://en.wikipedia.org/wiki/Link_analysis) and eliminating data breach due to failure at any single point.

**Figure 1.5:** If plaintext (M) is larger than 1024 bytes, anything beyond that are separated into a single slice (i.e. the excess ciphertext (β<sub>E</sub>) uploaded onto the service node of Alice (i.e. IMSP Australia). IMSP Australia will keep the β<sub>E</sub> for 24 hours before permanently deleting it. This does not only prevent running out of disk space but also further maximizes the deniability nature of Citium.

**Figure 1.6:** Service node of the intended recipient Bob (i.e. IMSP Bolivia) pushes the generic notification ("You have a new message.") (G) and the ciphertext (θ) that encapsulates the Random Session Key (K<sub>R</sub>) and one of the randomly chosen sliced ciphertext (β<sub>1</sub>) to Bob's node.

**Figure 1.7:** At this point, Bob is fully aware of the fact that someone has tried to post a message onto the Citium network with him as the intended recipient. Bob pings the whole Citium network with IMTM to fetch in the cipertexts of β<sub>2</sub>, β<sub>3</sub>, (i.e. β<sub>n-1</sub>).

**Figure 1.8:** Now, the cipertexts of β<sub>2</sub>, β<sub>3</sub>, and θ are ready for the Hybrid Decryption module.

**Figure 1.9:** Bob's Private Key A (K<sub>A</sub><sup>-1</sup>) is the corresponding private key to Bob's Public Key A ((K<sub>A</sub>). Bob's Private Key B (K<sub>B</sub><sup>-1</sup>) is the corresponding private key to Bob's Public Key B ((K<sub>B</sub>). They are both ready for the Hybrid Decryption module.

**Figure 1.10:** The Excess Ciphertext (β<sub>E</sub>) is fetched in from the Service Node of sender Alice (i.e. IMSP Australia) and is ready for the Hybrid Decryption module.

**Figure 1.11:** Before the deciphering process happens in the Hybrid Decryption module, all the ciphertext slices have to be in place. Assuming all of them from figure 1.8-10 are already in place, we'll see θ being deciphered first by ESDSA algorithm resulting in β<sub>1</sub> and K<sub>R</sub>.

{: style="color: grey; font-size: 170%;"}
ECDSA<sup>K</sup><sub>A</sub><sup>-1</sup>(ECDSA<sup>K</sup><sub>B</sub><sup>-1</sup>(θ)) ⇒ β<sub>1</sub>, K<sub>R</sub>

Combining β<sub>1</sub> with the rest of its siblings (i.e. β<sub>2</sub>, β<sub>3</sub>) that were sliced at Alice's side, Bob can now decrypt everything back to the plaintext as follows:

{: style="color: grey; font-size: 170%;"}
XXTEA<sup>K</sup><sub>R</sub><sup>-1</sup>(BLOWFISH<sup>K</sup><sub>R</sub><sup>-1</sup>(β<sub>1</sub> + β<sub>2</sub> + β<sub>3</sub>)) ⇒ M

Finally, the correct plaintext (M) is revealed and delivered to Bob.

### IMTM門限加密系統<br>IMTM Threshold Cryptosystem

**IMTM門限加密系統** 意味著 __一個消息的密文是被加密算法劃分成多個碎片__，這些碎片又通過網狀樹多點傳送、不加選擇地分佈到盡可能多的節點上，有效地抑止關聯鏈結分析的可能，和去除任何因為單點攻擊成功而導致的數據洩露。

**Indiscriminate mesh-tree multicast (IMTM) threshold cryptosystem** means that __a ciphertext is cryptographically split into multiple slices__, which in turn are distributed indiscriminately to as many nodes as possible by mesh-tree multicasting, effectively preempting [link analysis](https://en.wikipedia.org/wiki/Link_analysis) and eliminating data breach due to failure at any single point.

為了使預期收件人（Bob）解密來自發件人（Alice）的消息，Bob必須獲取指定的私鑰來解密消息。 Bob必須通過 __無差別網樹多點傳送__（IMTM）來盡可能多的節點作請求，直到收集齊全所有密文碎片為止。__只有接訊者（Bob）才能將所有密文碎片重新統一併起來才能生成有效的源文本，成功解鎖Alice留給她的加密的信息__。

In order for the intended recipient (Bob) to correctly decrypt the message from the sender (Alice), Bob has to obtain all slices of the ciphertext and to decrypt it with the right key. Bob has to make request to as many nodes as he can through **indiscriminate mesh-tree multicast** (IMTM) until he collects all the slices. _Only the intended recipient (Bob) can correctly reunite and decrypt all slices of the ciphertext_.

{: .box-warning}
{: style="color: grey; font-size: 100%;"}
__加密分析學上無法破解__：除非某駭客能夠劫持擁有相關密文碎片的每個節點，然後使用只是理論上存在的量子計算機解密所有密文碎片，否則密文碎片在傳輸期間不會對消息的機密性造成任何威脅。
<br><br>
__Cryptanalytically Unbreakable__: Unless some hackers can hijack every node that holds the pertaining sliced ciphertexts and decipher them all with a quantum computer that only exists in theory, nothing during transit of the pertaining sliced ciphertexts can threaten the confidentiality of the message.

### 秘鑰/信息疑義<br>Key/Message Equivocation

西蒂姆（Citium）密碼系統中，敵方黑客或密碼分析師可能會攔截到一個密碼文本（C）。如下圖所示，有一個關鍵的概念叫做密鑰疑義和消息疑義：

In the Citium cryptosystem, an enemy hacker or a cryptanalyst might be able to intercept a ciphertext (C). There is a critical concept called key equivocation and message equivocation as shown in the diagram below:

![Cipher](/img/equivocation.svg "Key/Message Equivocation"){: .center-block :}

密鑰和消息疑義則是衡量一個密碼系統在只對密鑰和消息進行密碼文本攻擊下對密鑰和消息的強度。密鑰疑義和消息疑義是指在已知明文攻擊下的密鑰和明文攻擊下的密鑰強度。收到的密文越長，密碼分析員發現秘鑰或明文的概率就越大。密碼分析員成功破譯文本的機率一般會隨著密文文本長度的增加而增加。在西蒂姆（Citium）中，碎片化的密文是最大限度地減小了單個密文的大小，從而最大限度加強了加密強度。

The key and message equivocation are a measure for the strength of a cipher system under a ciphertext only attack for the key and message respectively. Key Equivocation and Message Equivocation refer to key strength under known plaintext attacks and key strength under plaintext attacks. The longer the received ciphertext, the greater the probability that the cryptanalyst will discover the secret key or plaintext. The probability of a cryptanalyst successfully deciphering a ciphertext generally increases with the length of the ciphertext. In Citium, the sliced ciphertexts minimize the size of the individual ciphertext so that the strength of the cipher is maximized.

## 完整性 | Integrity ✓

在信息安全中，數據完整性是指在整個生命週期內保持並確保數據的準確性和完整性。信息安全完整性是指數據不能以未經授權或未被發現的方式進行修改，其定義則不要與數據庫中的參考完整性混淆。在西蒂姆（Citium）上傳播的密文碎片是被 [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm) 算法加密了的。該加密不僅「計算不可解」[computationally intractable](https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability)，而且在很多開源項目（例如[Bitcoin](https://en.wikipedia.org/wiki/Bitcoin)）中已經使用了將近二十年。成功的駭客攻擊（無需私鑰對它進行解密）將使任何可能的攻擊者都獲得巨大的利潤。這種現象似乎從未發生過，這是非常好的經驗證據說明它的安全性。

In information security, data integrity means maintaining and assuring the accuracy and completeness of data over its entire lifecycle. InfoSec integrity means that data cannot be modified in an unauthorized or undetected manner, and its definition is not to be confused with referential integrity in databases. A ciphertext slice cannot be changed during transit on Citium because it is __encrypted by [ECDSA (Elliptic Curve Digital Signature Algorithm)](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm)__. It is not only [computationally intractable](https://en.wikipedia.org/wiki/Computational_complexity_theory#Intractability) but also has enjoyed almost two decades of usage in open-source projects, such as [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin). A successful hack (deciphering it without a private key) would allow any would-be attacker to make a tremendous amount of profit. The fact that this appears to have never happened is a very good empirical evidence for its security.

## 可用性 ✓<br>Availability ✓

No [single point of failure (SPOF)](https://en.wikipedia.org/wiki/Single_point_of_failure) can impact the spread of cybertext slices and collection of them through **indiscriminate mesh-tree multicast** (IMTM).

{: .box-note}
{: style="color: grey; font-size: 100%;"}
__完全去中心化__：大多數現代在線應用程序服務提供商在使用某種形式的中心化方法（例如，託管于數據中心的服務器）來構建其用戶管理系統。這意味著監視。因為無論服務提供者斷言他們如何有效地保護用戶信息（例如電子郵件，IP，用戶名和密碼）免受惡意管理或駭客攻擊，從理論上講，他們都擁有修改或刪除信息的權力。因此，去中心化是絕對必要的，因為這樣才可以排除任何不幸事故發生，即使只是理論上可能會發生的事故。
<br><br>
__Fully Decentralization__: The majority of the contemporary online application service providers are using some forms of centralized methods (e.g. servers hosted in a datacenter) to structure their user management systems. It means monitoring. Because no matter how vigorously the service providers assert that they are effectively guarding the user information (e.g. email, IPs, username & password) against maladministration or hack, theoretically, they hold the power to modify or delete the information. Therefore, decentralization is absolutely necessary to achieve the level of confidence that one can rule out even theoretical mishaps from happening.

### 下一章 / NEXT CHAPTER
[**不可靠的中心化**](../fallible_providers)<br>
[**Fallibility**](../fallible_providers)
{: .myButton}
