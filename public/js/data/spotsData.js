export const SPOTS_BY_CITY = {
  tokyo: [
    {
      id: "tokyo-yoyogi",
      name: "代々木公園＆明治神宮参道",
      area: "原宿・代々木",
      access: "JR原宿駅 徒歩3分",
      category: "outdoor",
      env: "outdoor",
      rainProof: false,
      idealConditions: ["sunny", "cloudy"],
      idealTempRange: [10, 26],
      bestTime: "09:30〜15:30",
      duration: "1.5〜2.5時間",
      budget: "無料",
      description: "都心とは思えない広大な森と芝生広場が広がる定番スポット。木漏れ日の中のウォーキングやベンチでのコーヒータイムが心地よい空間です。",
      tips: {
        sunny: "爽やかな晴天で木漏れ日が最高に気持ちいいコンディション。テイクアウトコーヒー片手に森林浴がおすすめです。",
        cloudy: "直射日光が和らぎ、長い距離を歩いても疲れにくい気候。写真撮影も柔らかな光で綺麗に撮れます。",
        rainy: "足元がぬかるみやすいため、雨の日は無理せず近隣の『根津美術館』やカフェへの切り替えがおすすめです。",
        snowy: "空気が澄んで静かな参道歩きが楽しめますが、滑りにくい靴と十分な防寒対策を忘れずに。",
        windy: "高い木々が風を和らげてくれますが、落ち葉が舞いやすいため羽織物があると安心です。"
      },
      backupSpotId: "tokyo-nezu"
    },
    {
      id: "tokyo-mori",
      name: "森美術館 & 東京シティビュー",
      area: "六本木",
      access: "日比谷線六本木駅 直結",
      category: "culture",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "windy", "cloudy", "sunny", "snowy"],
      idealTempRange: [-5, 35],
      bestTime: "11:00〜21:00",
      duration: "2〜3時間",
      budget: "¥2,000〜¥2,500",
      description: "駅直結で雨に濡れずにアクセスできる現代アート美術館と屋内展望回廊。都心のパノラマとアートを天候に左右されず堪能できます。",
      tips: {
        sunny: "クリアな視界で東京タワーや富士山方面まで遠望できる絶好の展望日和です。",
        rainy: "雨に濡れず駅直結で移動でき、雨雲に包まれた幻想的な東京の景色とアートをゆっくり楽しめます。",
        windy: "屋外スカイデッキは強風時クローズになる場合がありますが、屋内展望フロアは完全に快適です。",
        snowy: "暖房の効いた静かな空間で、冬景色を見下ろしながらアートに浸れます。",
        default: "夕方前から訪れると、日中の街並みから夕暮れ・夜景への移ろいを一度に味わえます。"
      }
    },
    {
      id: "tokyo-kiyosumi",
      name: "清澄白河 ロースタリーカフェ巡り",
      area: "清澄白河",
      access: "半蔵門線 清澄白河駅 徒歩5分",
      category: "cafe",
      env: "semi",
      rainProof: true,
      idealConditions: ["cloudy", "rainy", "sunny"],
      idealTempRange: [5, 28],
      bestTime: "10:00〜17:00",
      duration: "2時間",
      budget: "¥800〜¥1,800",
      description: "自家焙煎のスペシャルティコーヒー店が集まる街。倉庫をリノベーションした開放的な店内で、香ばしい香りを楽しめます。",
      tips: {
        rainy: "雨の日のカフェ巡りは格別。大きな窓から雨粒を眺めつつ、温かいドリップコーヒーでほっと一息。",
        sunny: "コーヒーをテイクアウトして近くの清澄庭園や隅田川沿いを散歩するプランが人気です。",
        cloudy: "街歩きに最適な気温・光量。2〜3軒ハシゴして豆の違いを比べるのも楽しいです。",
        default: "午後14時前後は混雑しやすいため、午前中のゆったりした時間帯が狙い目です。"
      },
      backupSpotId: "tokyo-mot"
    },
    {
      id: "tokyo-mot",
      name: "東京都現代美術館 (MOT)",
      area: "清澄白河・木場",
      access: "清澄白河駅 徒歩9分",
      category: "culture",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "cloudy", "snowy", "windy"],
      idealTempRange: [-5, 35],
      bestTime: "10:00〜18:00",
      duration: "2〜3時間",
      budget: "¥1,200〜¥2,000",
      description: "広大な吹き抜け空間と充実したミュージアムショップ・カフェを備えた現代美術の殿堂。雨の日や寒い日でも半日たっぷり過ごせます。",
      tips: {
        rainy: "天井の高い開放的な館内は雨の日でも圧迫感ゼロ。アートブックのライブラリーも充実しています。",
        snowy: "寒い日でも館内は快適。館内レストランでのランチと組み合わせれば1日ゆっくり楽しめます。",
        default: "企画展だけでなく常設のMOTコレクションや美術図書室も必見です。"
      }
    },
    {
      id: "tokyo-shibuya-sky",
      name: "SHIBUYA SKY（渋谷スカイ）",
      area: "渋谷",
      access: "渋谷駅 直結（スクランブルスクエア）",
      category: "view",
      env: "outdoor",
      rainProof: false,
      idealConditions: ["sunny"],
      idealTempRange: [8, 28],
      bestTime: "15:30〜19:30",
      duration: "1〜1.5時間",
      budget: "¥2,200〜¥2,500",
      description: "地上229mの屋上展望空間。視界を遮るもののない360度のパノラマビューで、晴れた日の開放感は都内随一です。",
      tips: {
        sunny: "最高の一言。夕暮れ時のマジックアワーを狙えば、富士山シルエットと渋谷の夜景を同時に望めます。",
        cloudy: "雲の表情がダイナミックに見えますが、風が少し冷たいことがあるので上着を持参しましょう。",
        rainy: "悪天候時は屋上が閉鎖され屋内回廊（46階）のみになるため、雨の日は『森美術館』などがおすすめです。",
        windy: "強風時は屋上クローズや荷物制限（帽子不可など）がかかるため、事前確認をおすすめします。"
      },
      backupSpotId: "tokyo-mori"
    },
    {
      id: "tokyo-marunouchi",
      name: "丸の内仲通り & KITTE・丸ビル回廊",
      area: "東京・丸の内",
      access: "JR東京駅 丸の内南口 徒歩2分",
      category: "shopping",
      env: "semi",
      rainProof: true,
      idealConditions: ["sunny", "cloudy", "rainy", "windy"],
      idealTempRange: [0, 30],
      bestTime: "11:00〜21:00",
      duration: "2〜3時間",
      budget: "¥1,500〜",
      description: "美しい石畳と街路樹が続く丸の内エリア。地下通路網が発達しているため、晴れても雨でもストレスなく名店や雑貨店を巡れます。",
      tips: {
        sunny: "仲通りのオープンテラスでランチやコーヒーを楽しむのが最高に気持ちよい天気です。",
        rainy: "東京駅と直結する地下通路「丸の内地下道」を使えば、傘をほとんどささずに主要ビルを行き来できます。",
        windy: "ビル風がある場合は地下プロムナードやKITTE館内アトリウムを中心に巡ると快適です。",
        default: "KITTEの6階屋上庭園からは東京駅舎の赤レンガを見下ろせます（雨天時は屋内から鑑賞可）。"
      }
    },
    {
      id: "tokyo-nezu",
      name: "根津美術館 & 庭園カフェ",
      area: "南青山・表参道",
      access: "表参道駅 徒歩8分",
      category: "culture",
      env: "semi",
      rainProof: true,
      idealConditions: ["rainy", "cloudy", "sunny"],
      idealTempRange: [5, 28],
      bestTime: "10:00〜16:30",
      duration: "1.5〜2時間",
      budget: "¥1,300〜¥1,500",
      description: "隈研吾氏設計の竹林アプローチが印象的な美術館。館内の日本・東洋古美術鑑賞と、緑豊かな日本庭園の散策が楽しめます。",
      tips: {
        rainy: "雨に濡れた竹林と日本庭園はしっとりと美しく、庭園内カフェから眺める雨景色が格別です。",
        sunny: "美術鑑賞後に池の周りをゆっくり散策すると、青山の喧騒を忘れる静けさを味わえます。",
        default: "庭園内の「NEZUCAFE」はガラス張りで開放的。午前中の早めの時間が比較的スムーズです。"
      }
    },
    {
      id: "tokyo-sumida-aq",
      name: "すみだ水族館（東京ソラマチ内）",
      area: "押上・スカイツリー",
      access: "押上駅 直結",
      category: "shopping",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "snowy", "windy"],
      idealTempRange: [-5, 35],
      bestTime: "10:00〜20:00",
      duration: "1.5〜2.5時間",
      budget: "¥2,500",
      description: "完全屋内型の都市型水族館。クラゲの水槽やペンギンの屋内開放プールを眺めながら、ソラマチでのショッピングや食事も一緒に楽しめます。",
      tips: {
        rainy: "駅直結で濡れずにアクセス可能。幻想的なクラゲエリアやゆったり座れる椅子が多く、雨の日の定番です。",
        snowy: "外が寒くても館内は一年中快適な温度。ソラマチ館内のグルメと合わせて半日楽しめます。",
        default: "夕方以降は照明が落ち着き、大人向けのムーディーな雰囲気になります。"
      }
    }
  ],

  yokohama: [
    {
      id: "yoko-rinko",
      name: "臨港パーク & 赤レンガ海辺プロムナード",
      area: "みなとみらい",
      access: "みなとみらい駅 徒歩6分",
      category: "outdoor",
      env: "outdoor",
      rainProof: false,
      idealConditions: ["sunny", "cloudy"],
      idealTempRange: [11, 27],
      bestTime: "10:00〜17:30",
      duration: "1.5時間",
      budget: "無料",
      description: "横浜港を一望できる開放的な芝生と海沿いの遊歩道。潮風を感じながら、ベイブリッジや大さん橋を行き交う船を眺められます。",
      tips: {
        sunny: "青い海と空のコントラストが最高！海沿いのベンチで軽食を楽しむのも素敵です。",
        windy: "海沿いは体感風速が強くなりやすいため、強風の日は『赤レンガ倉庫館内』や『ハンマーヘッド』へ避難がおすすめです。",
        rainy: "遮蔽物が少ないため雨の日は不向き。屋根付き直結のランドマークプラザへ切り替えましょう。",
        default: "夕方からマジックアワーにかけての観覧車ライトアップが特におすすめです。"
      },
      backupSpotId: "yoko-redbrick"
    },
    {
      id: "yoko-redbrick",
      name: "横浜赤レンガ倉庫 & MARINE & WALK",
      area: "新港地区",
      access: "馬車道駅 徒歩6分",
      category: "shopping",
      env: "semi",
      rainProof: true,
      idealConditions: ["cloudy", "rainy", "sunny", "windy"],
      idealTempRange: [2, 30],
      bestTime: "11:00〜20:00",
      duration: "2〜3時間",
      budget: "¥1,500〜¥3,000",
      description: "歴史的建造物を活かしたショッピング＆グルメスポット。1号館・2号館の屋内ショップやカフェが充実しており天候を問わず楽しめます。",
      tips: {
        rainy: "館内の雑貨ショップや温かいレストランでゆっくり食事を楽しめます。軒下の回廊も移動しやすいです。",
        sunny: "海側の広場やテラス席でのランチ・スイーツが気持ちよい陽気です。",
        windy: "赤レンガ倉庫の館内は厚いレンガ造りで静か。風の強い日は屋内エリアを中心に巡りましょう。"
      }
    },
    {
      id: "yoko-cupnoodle",
      name: "カップヌードルミュージアム 横浜",
      area: "みなとみらい",
      access: "みなとみらい駅 徒歩8分",
      category: "culture",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "snowy", "windy", "cloudy"],
      idealTempRange: [-5, 35],
      bestTime: "10:00〜17:00",
      duration: "1.5〜2時間",
      budget: "¥500〜¥1,000",
      description: "オリジナルカップヌードルづくりが体験できる人気屋内施設。展示もユニークで、雨の日や寒い日でもアクティブに楽しめます。",
      tips: {
        rainy: "完全屋内なので雨の日でも大人気。マイカップヌードルファクトリーは早めの時間帯が安心です。",
        default: "館内4階のフードコート「NOODLES BAZAAR」で世界の麺料理を少しずつ味わうのも楽しいです。"
      }
    },
    {
      id: "yoko-landmark",
      name: "横浜ランドマークタワー（スカイガーデン & プラザ）",
      area: "みなとみらい",
      access: "桜木町駅 徒歩5分（動く歩道直結）",
      category: "view",
      env: "indoor",
      rainProof: true,
      idealConditions: ["sunny", "rainy", "windy", "snowy"],
      idealTempRange: [-5, 35],
      bestTime: "10:00〜21:00",
      duration: "1.5〜2.5時間",
      budget: "¥1,000（展望フロア）",
      description: "桜木町駅から屋根付きの動く歩道で直結。69階の屋内展望フロアは強風や雨でも安定して営業し、下層階のショッピングも充実しています。",
      tips: {
        sunny: "視界がクリアなら東京湾越しにスカイツリーや富士山まで見渡せます。",
        rainy: "桜木町駅から濡れずにアクセス可能。雲海のような雨の横浜港を見下ろすのも乙な体験です。",
        windy: "完全屋内展望フロアのため、海風が強い日でも快適に景色を楽しめます。"
      }
    },
    {
      id: "yoko-chinatown",
      name: "横浜中華街（食べ歩き＆老舗茶館）",
      area: "元町・中華街",
      access: "元町・中華街駅 徒歩1分",
      category: "cafe",
      env: "semi",
      rainProof: true,
      idealConditions: ["cloudy", "rainy", "snowy", "sunny"],
      idealTempRange: [0, 28],
      bestTime: "11:30〜20:00",
      duration: "2〜3時間",
      budget: "¥1,500〜¥3,500",
      description: "熱々の点心や中国茶が楽しめる日本最大級の中華街。雨や寒さの日は、ゆったり座れる中国茶カフェや本格飲茶コースがぴったりです。",
      tips: {
        rainy: "大通りから一歩入った老舗の中国茶館で、温かいジャスミン茶や飲茶を楽しむのが雨の日の王道です。",
        snowy: "湯気立つ小籠包や肉まんで体の芯から温まれます。",
        sunny: "関帝廟や山下公園への散歩とセットにすると一日中飽きません。"
      }
    },
    {
      id: "yoko-yma",
      name: "横浜美術館 / みなとみらいカフェ回遊",
      area: "みなとみらい",
      access: "みなとみらい駅 直結",
      category: "culture",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "cloudy", "snowy"],
      idealTempRange: [-5, 35],
      bestTime: "10:00〜18:00",
      duration: "2時間",
      budget: "¥1,000〜¥2,000",
      description: "重厚な石造りのグランドギャラリーが美しい美術館。隣接するMARK IS みなとみらいと合わせ、雨に濡れずに文化と買い物を楽しめます。",
      tips: {
        rainy: "みなとみらい駅直結ルートで濡れずに移動可能。静かな展示室で落ち着いた時間を過ごせます。",
        default: "鑑賞後はMARK IS内のカフェや屋上庭園「みんなの庭」（晴天時）でのんびりするのがおすすめです。"
      }
    },
    {
      id: "yoko-sankeien",
      name: "三溪園（日本庭園と古建築）",
      area: "本牧",
      access: "横浜駅・桜木町駅からバス約25分",
      category: "outdoor",
      env: "outdoor",
      rainProof: false,
      idealConditions: ["sunny", "cloudy"],
      idealTempRange: [9, 26],
      bestTime: "09:00〜16:00",
      duration: "2時間",
      budget: "¥900",
      description: "京都や鎌倉などから移築された歴史的建造物と四季折々の自然が調和する名園。紅葉や梅、桜など季節の景色をゆったり歩けます。",
      tips: {
        sunny: "池に映り込む三重塔と青空は必見。園内のお茶屋で一服するのも風流です。",
        cloudy: "柔らかな光が和建築に映え、落ち着いて庭園散策ができます。",
        rainy: "広い屋外園路を歩くため、雨天時は『横浜中華街』や『ランドマーク』のほうが快適です。"
      },
      backupSpotId: "yoko-chinatown"
    }
  ],

  kyoto: [
    {
      id: "kyoto-arashiyama",
      name: "嵐山 竹林の小径 & 渡月橋",
      area: "嵐山",
      access: "JR嵯峨嵐山駅 徒歩10分",
      category: "outdoor",
      env: "outdoor",
      rainProof: false,
      idealConditions: ["sunny", "cloudy"],
      idealTempRange: [8, 27],
      bestTime: "07:30〜15:30",
      duration: "2〜3時間",
      budget: "無料（周辺拝観料別途）",
      description: "青々とした竹林が空へと伸びる幻想的な小径と、桂川に架かる渡月橋。朝早い時間帯ほど静かで澄んだ空気を味わえます。",
      tips: {
        sunny: "竹の葉の間から差し込む朝の光が神々しいほど。川沿いのベンチやカフェも気持ちいいです。",
        cloudy: "しっとりした空気が竹林の緑をより深く見せてくれます。歩きやすい気温です。",
        rainy: "雨の竹林は趣がありますが足元が滑りやすく混雑も重なるため、屋根のある『錦市場』や町家カフェも検討を。"
      },
      backupSpotId: "kyoto-nishiki"
    },
    {
      id: "kyoto-kyocera",
      name: "京都市京セラ美術館",
      area: "岡崎",
      access: "東西線 東山駅 徒歩8分",
      category: "culture",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "snowy", "windy", "cloudy"],
      idealTempRange: [-5, 35],
      bestTime: "10:00〜18:00",
      duration: "2時間",
      budget: "¥1,500〜¥2,200",
      description: "昭和の帝冠様式建築を現代的に再生した美しい美術館。ガラス張りのエントランスや開放的な展示室で雨の日でも優雅に過ごせます。",
      tips: {
        rainy: "広い屋内空間と洗練されたカフェが魅力。雨音を忘れさせてくれる静謐な空間です。",
        sunny: "館内の日本庭園を眺められるスポットも人気。岡崎エリアの散策拠点にぴったりです。"
      }
    },
    {
      id: "kyoto-nishiki",
      name: "錦市場商店街（アーケード食べ歩き）",
      area: "四条・河原町",
      access: "阪急 烏丸駅 徒歩3分",
      category: "cafe",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "snowy", "windy", "cloudy", "sunny"],
      idealTempRange: [-5, 32],
      bestTime: "10:00〜16:30",
      duration: "1.5時間",
      budget: "¥1,500〜¥3,000",
      description: "「京の台所」として親しまれる全蓋式アーケード街。屋根があるため強い雨や風の日でも傘をたたんで京グルメや和雑貨を楽しめます。",
      tips: {
        rainy: "完全アーケードなので雨天時の強みは抜群！温かい出汁巻き玉子や湯葉料理が身に染みます。",
        snowy: "寒い日でも熱々の練り物や抹茶スイーツで暖を取りながら楽しめます。"
      }
    },
    {
      id: "kyoto-machiya-cafe",
      name: "烏丸・中京区 京町家カフェ＆喫茶店巡り",
      area: "烏丸御池・三条",
      access: "地下鉄 烏丸御池駅 徒歩5分",
      category: "cafe",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "cloudy", "snowy"],
      idealTempRange: [-5, 30],
      bestTime: "11:00〜18:00",
      duration: "1.5〜2時間",
      budget: "¥1,000〜¥2,000",
      description: "坪庭を望む築100年以上の京町家カフェや、昭和レトロな純喫茶が点在するエリア。香り高い深煎り珈琲や宇治抹茶スイーツをゆっくり味わえます。",
      tips: {
        rainy: "坪庭に落ちる雨粒を眺めながらいただく抹茶や珈琲は、雨の京都ならではの贅沢な時間です。",
        snowy: "畳や木の温もりを感じる店内で、温かいぜんざいや甘酒を楽しめます。"
      }
    },
    {
      id: "kyoto-philosopher",
      name: "哲学の道 & 銀閣寺エリア散策",
      area: "左京区",
      access: "市バス 銀閣寺道 徒歩5分",
      category: "outdoor",
      env: "outdoor",
      rainProof: false,
      idealConditions: ["sunny", "cloudy"],
      idealTempRange: [9, 25],
      bestTime: "09:00〜16:00",
      duration: "2時間",
      budget: "¥500（銀閣寺拝観）",
      description: "疎水沿いに約2km続く静かな小道。季節の木々や水面のきらめきを楽しみながら、お気に入りの小店や甘味処に立ち寄れます。",
      tips: {
        sunny: "疎水に差し込む木漏れ日と穏やかな風のなか、自分のペースで歩くのに最適です。",
        rainy: "屋外の舗装されていない区間もあるため、雨天時は『京セラ美術館』など岡崎の屋内施設をおすすめします。"
      },
      backupSpotId: "kyoto-kyocera"
    },
    {
      id: "kyoto-manga",
      name: "京都国際マンガミュージアム",
      area: "烏丸御池",
      access: "烏丸御池駅 徒歩2分",
      category: "culture",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "snowy", "windy"],
      idealTempRange: [-5, 35],
      bestTime: "10:30〜17:30",
      duration: "2〜4時間",
      budget: "¥1,200",
      description: "元小学校のレトロな校舎に約5万冊のマンガが自由に読める「マンガの壁」を備える文化施設。雨の日でも何時間でも没頭できます。",
      tips: {
        rainy: "雨の日に腰を据えて読書に耽るならここが最強。館内の喫茶室もレトロで居心地抜群です。",
        sunny: "晴れた日は前の人工芝グラウンドにマンガを持ち出して寝転びながら読めます。"
      }
    },
    {
      id: "kyoto-station",
      name: "京都駅ビル 空中径路 & 大階段",
      area: "京都駅",
      access: "JR京都駅 直結",
      category: "view",
      env: "semi",
      rainProof: true,
      idealConditions: ["sunny", "cloudy", "rainy", "windy"],
      idealTempRange: [-2, 32],
      bestTime: "16:00〜21:00",
      duration: "1〜2時間",
      budget: "無料",
      description: "駅直結の未来的な巨大吹き抜け空間。地上45mのガラス張り「空中径路」からは京都タワーや東山の夜景が雨に濡れずに一望できます。",
      tips: {
        rainy: "駅直結・ガラス屋根完備のため、雨天の夜景鑑賞やイルミネーション観賞にとても便利です。",
        sunny: "大階段のグラフィカルイルミネーションと夕焼けの組み合わせが綺麗です。"
      }
    }
  ],

  osaka: [
    {
      id: "osaka-nakanoshima",
      name: "中之島公園 & バラ園・リバーサイド散歩",
      area: "中之島",
      access: "淀屋橋駅・北浜駅 徒歩3分",
      category: "outdoor",
      env: "outdoor",
      rainProof: false,
      idealConditions: ["sunny", "cloudy"],
      idealTempRange: [10, 27],
      bestTime: "10:00〜17:00",
      duration: "1.5時間",
      budget: "無料",
      description: "堂島川と土佐堀川に挟まれた水都大阪のオアシス。歴史ある中央公会堂や水辺のテラスカフェが並び、開放感たっぷりです。",
      tips: {
        sunny: "北浜のリバーサイドカフェのテラス席が最高！川面に反射する光が心地よいです。",
        rainy: "すぐ隣の『大阪中之島美術館』や『こども本の森 中之島』の屋内へ避難するのがおすすめです。"
      },
      backupSpotId: "osaka-nakanoshima-museum"
    },
    {
      id: "osaka-nakanoshima-museum",
      name: "大阪中之島美術館",
      area: "中之島",
      access: "渡辺橋駅 徒歩5分",
      category: "culture",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "snowy", "windy", "cloudy"],
      idealTempRange: [-5, 35],
      bestTime: "10:00〜17:00",
      duration: "2時間",
      budget: "¥1,600〜¥2,000",
      description: "洗練された黒いキューブ型の外観が目を引く現代・近代美術館。広い吹き抜けとデザインショップ、レストランが雨の日を豊かにしてくれます。",
      tips: {
        rainy: "屋内の広々としたパッサージュ空間が美しく、雨の日でも気分が晴れやかになります。",
        default: "ミュージアムショップのデザイン雑貨や館内カフェのスイーツも充実しています。"
      }
    },
    {
      id: "osaka-kaiyukan",
      name: "海遊館 & 天保山マーケットプレース",
      area: "大阪港",
      access: "大阪メトロ 大阪港駅 徒歩5分",
      category: "culture",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "snowy", "windy", "cloudy"],
      idealTempRange: [-5, 35],
      bestTime: "10:00〜19:00",
      duration: "2.5〜3.5時間",
      budget: "¥2,700",
      description: "ジンベエザメが悠々と泳ぐ世界最大級の水族館。完全に屋内のらせんスロープを降りながら海洋世界を巡れるため、荒天時でも快適です。",
      tips: {
        rainy: "天気が崩れた日の大阪観光の大定番。隣接のマーケットプレースで食事や買い物もまとめて楽しめます。",
        windy: "海辺は風が強い日がありますが、海遊館の館内に入れば完全に快適です。"
      }
    },
    {
      id: "osaka-umeda-sky",
      name: "梅田スカイビル 空中庭園展望台",
      area: "梅田",
      access: "JR大阪駅 徒歩7分",
      category: "view",
      env: "semi",
      rainProof: false,
      idealConditions: ["sunny", "cloudy"],
      idealTempRange: [8, 28],
      bestTime: "16:30〜21:00",
      duration: "1〜1.5時間",
      budget: "¥2,000",
      description: "地上173mの屋上回廊から大阪の街と淀川、遠く明石海峡方面まで一望できる名所。地下には昭和レトロなグルメ街「滝見小路」もあります。",
      tips: {
        sunny: "夕焼けの空と街灯りが灯り始める時間帯は圧倒的な美しさです。",
        rainy: "屋上スカイウォークは傘禁止・悪天候時制限がかかるため、39階の屋内展望エリアや地下「滝見小路」を中心に楽しみましょう。"
      },
      backupSpotId: "osaka-grandfront"
    },
    {
      id: "osaka-grandfront",
      name: "グランフロント大阪 & 地下街（ホワイティ）",
      area: "梅田",
      access: "JR大阪駅 直結",
      category: "shopping",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "windy", "snowy", "sunny"],
      idealTempRange: [-5, 35],
      bestTime: "11:00〜21:00",
      duration: "2〜4時間",
      budget: "¥1,500〜",
      description: "巨大な「うめきた地下街・駅直結ネットワーク」により、悪天候でも傘いらずで最先端ショップやカフェ・グルメビルをハシゴできます。",
      tips: {
        rainy: "大阪駅直結の利便性は日本屈指。雨の日は地下街とグランフロント・ルクアを巡るのが最も快適です。",
        sunny: "北館の屋上庭園や新しくなった「うめきた公園」の芝生で日光浴もおすすめです。"
      }
    },
    {
      id: "osaka-kuromon",
      name: "なんば・黒門市場・千日前道具屋筋（屋根付）",
      area: "難波・日本橋",
      access: "日本橋駅 徒歩2分",
      category: "cafe",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "cloudy", "snowy", "windy"],
      idealTempRange: [-2, 30],
      bestTime: "10:30〜18:00",
      duration: "2時間",
      budget: "¥1,500〜¥3,500",
      description: "全蓋アーケードが網の目のように続くミナミのグルメ＆ショッピングエリア。たこ焼き、串カツ、海鮮など大阪の食文化を濡れずに堪能できます。",
      tips: {
        rainy: "なんばウォーク地下街から黒門・千日前までほぼ屋根の下を移動でき、雨の日でも活気に満ちています。"
      }
    }
  ],

  sapporo: [
    {
      id: "sap-odori",
      name: "大通公園 & さっぽろテレビ塔",
      area: "大通",
      access: "地下鉄 大通駅 直結",
      category: "outdoor",
      env: "semi",
      rainProof: false,
      idealConditions: ["sunny", "cloudy"],
      idealTempRange: [2, 26],
      bestTime: "10:00〜19:00",
      duration: "1〜1.5時間",
      budget: "無料（展望台 ¥1,000）",
      description: "札幌の中心を東西に貫く都市公園。晴れた日はテレビ塔展望台からの眺めと公園の散策が爽快です。",
      tips: {
        sunny: "澄んだ北海道の空気と青い空のもと、公園の散策がとても気持ちよい日です。",
        snowy: "雪化粧した公園はフォトジェニックですが、足元が冷えやすいため地上は短時間にしてテレビ塔屋内や地下街と組み合わせましょう。"
      },
      backupSpotId: "sap-chikaho"
    },
    {
      id: "sap-chikaho",
      name: "チ・カ・ホ（札幌駅前通地下歩行空間）& 赤れんがテラス",
      area: "札幌駅〜大通",
      access: "JR札幌駅・大通駅 直結",
      category: "shopping",
      env: "indoor",
      rainProof: true,
      idealConditions: ["snowy", "rainy", "windy", "cloudy"],
      idealTempRange: [-15, 30],
      bestTime: "10:00〜21:00",
      duration: "2〜3時間",
      budget: "¥1,000〜¥3,000",
      description: "札幌駅と大通・すすきのを結ぶ快適な地下空間と駅直結商業施設。吹雪や雨の日でもコートを脱いで快適に歩けます。",
      tips: {
        snowy: "雪・寒波の日に札幌市民が頼りにする快適ルート。赤れんがテラスの開放的なアトリウムカフェも絶好です。",
        rainy: "外に出ることなく人気スープカレー店やスイーツ店、大丸・ステラプレイスを巡れます。"
      }
    },
    {
      id: "sap-beer",
      name: "サッポロビール博物館 & サッポロファクトリー",
      area: "苗穂・サッポロガーデンパーク",
      access: "バスセンター前駅 徒歩10分 / バス直通",
      category: "culture",
      env: "indoor",
      rainProof: true,
      idealConditions: ["snowy", "rainy", "windy", "cloudy", "sunny"],
      idealTempRange: [-15, 30],
      bestTime: "11:00〜19:00",
      duration: "2時間",
      budget: "見学無料（試飲 ¥800〜）",
      description: "明治時代の重厚な赤レンガ建物内で北海道のビール造りの歴史を学び、出来たてのクラシックや開拓使麦酒を味わえる屋内スポット。",
      tips: {
        snowy: "雪が舞う赤レンガの外観を撮ったあとは、暖かい館内でテイスティングとジンギスカンを楽しめます。",
        rainy: "近くの『サッポロファクトリー』の巨大ガラスアトリウムも全天候型でおすすめです。"
      }
    },
    {
      id: "sap-moiwa",
      name: "藻岩山ロープウェイ & 展望台",
      area: "藻岩山",
      access: "市電 ロープウェイ入口 徒歩1分（シャトルバス有）",
      category: "view",
      env: "semi",
      rainProof: false,
      idealConditions: ["sunny"],
      idealTempRange: [0, 25],
      bestTime: "16:00〜20:30",
      duration: "1.5〜2時間",
      budget: "¥2,100",
      description: "「日本新三大夜景」に選ばれる札幌の絶景パノラマ。街の碁盤の目が光の海となって広がります。",
      tips: {
        sunny: "空気が澄んでいるため、夜景の輝きがひときわ鮮やか。山頂は街中より5℃ほど低いため暖かい上着を。",
        windy: "強風時はロープウェイが運休になる場合があるため、運行情報を確認してください。",
        snowy: "視界が悪い吹雪時は景色が見えにくいため、駅直結の『JRタワー展望室T38』のほうが確実です。"
      },
      backupSpotId: "sap-t38"
    },
    {
      id: "sap-t38",
      name: "JRタワー展望室 タワー・スリーエイト (T38)",
      area: "札幌駅",
      access: "JR札幌駅 直結",
      category: "view",
      env: "indoor",
      rainProof: true,
      idealConditions: ["snowy", "rainy", "windy", "sunny", "cloudy"],
      idealTempRange: [-15, 35],
      bestTime: "15:00〜22:00",
      duration: "1時間",
      budget: "¥740",
      description: "札幌駅直結・地上160mの完全屋内展望室。おしゃれなカフェバーを併設し、天候を問わず360度の札幌パノラマを楽しめます。",
      tips: {
        snowy: "雪の降る札幌の街並みを、暖房の効いたソファー席から温かいドリンク片手に見下ろすのは極上の体験です。",
        windy: "強風や吹雪で藻岩山に行けない日の代替夜景スポットとしても完璧です。"
      }
    },
    {
      id: "sap-ramen",
      name: "すすきの スープカレー & 味噌ラーメン名店巡り",
      area: "すすきの・狸小路",
      access: "すすきの駅 直結 / 狸小路アーケード",
      category: "cafe",
      env: "indoor",
      rainProof: true,
      idealConditions: ["snowy", "rainy", "windy", "cloudy"],
      idealTempRange: [-15, 22],
      bestTime: "11:30〜22:00",
      duration: "1.5時間",
      budget: "¥1,000〜¥2,000",
      description: "全蓋アーケード「狸小路商店街」周辺には、スパイスの効いたスープカレーや濃厚味噌ラーメン、夜パフェ（シメパフェ）の名店が集結しています。",
      tips: {
        snowy: "寒さが厳しい日ほど、熱々のスパイススープや生姜の効いた味噌ラーメンが最高のご馳走になります。",
        rainy: "狸小路1〜7丁目は屋根付きなので、傘をささずにお店探しができます。"
      }
    }
  ],

  fukuoka: [
    {
      id: "fuk-ohori",
      name: "大濠公園 & 福岡市美術館",
      area: "大濠公園",
      access: "地下鉄 大濠公園駅 徒歩7分",
      category: "outdoor",
      env: "semi",
      rainProof: false,
      idealConditions: ["sunny", "cloudy"],
      idealTempRange: [10, 28],
      bestTime: "09:00〜17:00",
      duration: "2時間",
      budget: "無料（美術館 ¥200〜）",
      description: "大きな池を囲む約2kmの周回園路と水辺カフェ、そして同じ敷地内にある福岡市美術館。自然散策とアートをシームレスに楽しめます。",
      tips: {
        sunny: "水辺のカフェのテラスで焼きたてパンとコーヒーを味わいながら、湖畔を散歩するのが至福です。",
        rainy: "雨が降ったらすぐ敷地内の『福岡市美術館』に避難してゆっくりアート鑑賞に切り替えられます。"
      },
      backupSpotId: "fuk-art-museum"
    },
    {
      id: "fuk-art-museum",
      name: "福岡アジア美術館 & リバレイン",
      area: "中洲川端",
      access: "地下鉄 中洲川端駅 直結",
      category: "culture",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "windy", "cloudy", "snowy"],
      idealTempRange: [-5, 35],
      bestTime: "10:00〜18:00",
      duration: "1.5〜2時間",
      budget: "¥200〜¥1,200",
      description: "駅直結のビル7・8階に位置し、アジア近現代アートを体系的に鑑賞できる世界的にも珍しい美術館。アートカフェも併設しています。",
      tips: {
        rainy: "中洲川端駅から傘いらずで入場可能。カフェスペースの蔵書量も豊富で、雨の日の隠れ家に最適です。"
      }
    },
    {
      id: "fuk-canal",
      name: "キャナルシティ博多 & 川端通商店街",
      area: "博多・中洲",
      access: "櫛田神社前駅 徒歩3分",
      category: "shopping",
      env: "semi",
      rainProof: true,
      idealConditions: ["rainy", "cloudy", "sunny", "windy"],
      idealTempRange: [0, 32],
      bestTime: "10:00〜21:00",
      duration: "2〜3時間",
      budget: "¥1,500〜",
      description: "巨大な吹き抜け運河を中心にショップ・映画館・ラーメンスタジアムが集まる複合施設。屋根付きエリアが多く悪天候にも強いです。",
      tips: {
        rainy: "ラーメンスタジアムで熱々の博多豚骨ラーメンを食べ比べたり、劇場・映画館で過ごしたりと万能です。"
      }
    },
    {
      id: "fuk-itoshima",
      name: "糸島・二見ヶ浦 海辺カフェドライブ",
      area: "糸島",
      access: "筑前前原駅からバス・車20分",
      category: "cafe",
      env: "outdoor",
      rainProof: false,
      idealConditions: ["sunny"],
      idealTempRange: [12, 29],
      bestTime: "11:00〜18:00",
      duration: "3〜4時間",
      budget: "¥1,500〜¥3,000",
      description: "真っ白な鳥居と夫婦岩が海に浮かぶ絶景スポット。沿道にはオーシャンビューのカフェやベーカリーが点在しています。",
      tips: {
        sunny: "エメラルド色の海とサンセットが映える晴天の日こそ行くべきスポットです！",
        windy: "玄界灘からの海風がかなり強く吹くため、強風の日は天神地下街など市内中心部が快適です。",
        rainy: "景観の良さが半減するため、雨の日は『福岡タワー』や『天神地下街』に変更するのが賢明です。"
      },
      backupSpotId: "fuk-tenjin-ug"
    },
    {
      id: "fuk-tenjin-ug",
      name: "天神地下街（てんちか）& ロースタリーカフェ",
      area: "天神",
      access: "地下鉄 天神駅 直結",
      category: "shopping",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "windy", "snowy", "cloudy"],
      idealTempRange: [-5, 35],
      bestTime: "10:00〜20:00",
      duration: "1.5〜3時間",
      budget: "¥1,000〜¥3,000",
      description: "19世紀ヨーロッパの石畳を模した雰囲気のある地下街。百貨店や駅ビルとすべて直結しているため、天候ストレスが一切ありません。",
      tips: {
        rainy: "天神での雨の日の待ち合わせ・買い物・カフェタイムに最適。焼きたてチーズタルトやベーカリーも人気です。"
      }
    },
    {
      id: "fuk-tower",
      name: "福岡タワー 展望室（シーサイドももち）",
      area: "百道浜",
      access: "西新駅 徒歩15分 / 博多駅からバス25分",
      category: "view",
      env: "indoor",
      rainProof: true,
      idealConditions: ["sunny", "cloudy", "rainy"],
      idealTempRange: [0, 35],
      bestTime: "16:30〜21:00",
      duration: "1時間",
      budget: "¥800",
      description: "海浜タワーとしては日本一の高さを誇る地上123mの屋内展望室。博多湾と福岡市街の360度パノラマを楽しめます。",
      tips: {
        sunny: "能古島や志賀島まで見渡せる抜群の視界。日没時間帯のオーシャンサンセットは感動的です。",
        rainy: "ガラス張りの屋内展望カフェで、海面を叩く雨と夜景を眺めるのも落ち着きます。"
      }
    }
  ],

  naha: [
    {
      id: "naha-senaga",
      name: "瀬長島ウミカジテラス",
      area: "瀬長島",
      access: "赤嶺駅からバス15分 / 那覇空港から車15分",
      category: "cafe",
      env: "outdoor",
      rainProof: false,
      idealConditions: ["sunny", "cloudy"],
      idealTempRange: [18, 32],
      bestTime: "11:00〜18:30",
      duration: "2時間",
      budget: "¥1,500〜¥3,000",
      description: "傾斜地に白い建物が段々に並ぶ地中海風リゾートモール。エメラルドグリーンの海と那覇空港に着陸する飛行機を間近に望めます。",
      tips: {
        sunny: "青い海と白い建物のコントラストが南国気分を最高潮にしてくれます。夕暮れのテラス席が特におすすめ！",
        windy: "海に突き出た島のため強風時は海風がかなり強め。屋根のある『牧志公設市場』や博物館が安心です。",
        rainy: "屋外階段での移動が多いため、雨天時は『沖縄県立博物館・美術館』へ切り替えるのが快適です。"
      },
      backupSpotId: "naha-museum"
    },
    {
      id: "naha-museum",
      name: "沖縄県立博物館・美術館（おきみゅー）",
      area: "おもろまち",
      access: "ゆいレール おもろまち駅 徒歩10分",
      category: "culture",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "windy", "cloudy", "sunny"],
      idealTempRange: [0, 36],
      bestTime: "09:00〜18:00",
      duration: "2〜3時間",
      budget: "¥530〜¥1,200",
      description: "琉球石灰岩のグスク（城）をモチーフにした重厚な館内で、沖縄の歴史・自然・民俗から現代アートまで深く学べる大型文化施設。",
      tips: {
        rainy: "沖縄の急なスコールや雨天時に最も頼りになる屋内スポット。展示の充実度が非常に高いです。",
        sunny: "真夏や紫外線が強い日の涼しい避暑・休憩スポットとしても優秀です。"
      }
    },
    {
      id: "naha-makishi",
      name: "平和通り商店街 & 第一牧志公設市場",
      area: "国際通り周辺",
      access: "ゆいレール 牧志駅 徒歩7分",
      category: "shopping",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "windy", "cloudy", "sunny"],
      idealTempRange: [5, 35],
      bestTime: "10:00〜19:00",
      duration: "1.5〜2.5時間",
      budget: "¥1,500〜¥3,500",
      description: "国際通りから枝分かれする屋根付きアーケード街と、リニューアルした公設市場。沖縄そばやカラフルな魚介、やちむん巡りを濡れずに満喫できます。",
      tips: {
        rainy: "アーケードが張り巡らされているため、強い雨が降っても傘なしでディープな沖縄散歩ができます。"
      }
    },
    {
      id: "naha-shuri",
      name: "首里城公園 & 金城町石畳道",
      area: "首里",
      access: "ゆいレール 首里駅 徒歩15分",
      category: "outdoor",
      env: "outdoor",
      rainProof: false,
      idealConditions: ["sunny", "cloudy"],
      idealTempRange: [15, 29],
      bestTime: "09:00〜16:30",
      duration: "2時間",
      budget: "無料（有料区域 ¥400）",
      description: "琉球王国の歴史を物語る世界遺産エリアと、赤瓦の街並みが残る情緒豊かな石畳道。高台からは那覇市街が一望できます。",
      tips: {
        sunny: "守礼門の朱色と青空が映えます。こまめに水分補給しながら散策しましょう。",
        cloudy: "日差しが弱まるくもりの日は、アップダウンのある石畳道も歩きやすく快適です。",
        rainy: "石畳が濡れると非常に滑りやすいため、雨の日は足元に十分注意するか『牧志公設市場』周辺が安全です。"
      },
      backupSpotId: "naha-makishi"
    },
    {
      id: "naha-dmm",
      name: "DMMかりゆし水族館（イーアス沖縄豊崎）",
      area: "豊崎",
      access: "那覇空港からバス約20分",
      category: "culture",
      env: "indoor",
      rainProof: true,
      idealConditions: ["rainy", "windy", "cloudy"],
      idealTempRange: [5, 36],
      bestTime: "10:00〜20:00",
      duration: "2時間",
      budget: "¥2,800",
      description: "最新の映像表現と沖縄の亜熱帯自然が融合した完全屋内型エンタメ水族館。大型ショッピングモール併設で一日中快適に過ごせます。",
      tips: {
        rainy: "南部の海が荒れている雨の日に最適。亜熱帯の森エリアやクラゲの空間は屋内とは思えない没入感です。"
      }
    },
    {
      id: "naha-tsuboya",
      name: "壺屋やちむん通り & 隠れ家カフェ",
      area: "壺屋",
      access: "ゆいレール 牧志駅 徒歩9分",
      category: "cafe",
      env: "semi",
      rainProof: true,
      idealConditions: ["cloudy", "sunny", "rainy"],
      idealTempRange: [14, 30],
      bestTime: "10:30〜17:30",
      duration: "1.5時間",
      budget: "¥1,000〜¥3,000",
      description: "琉球焼物（やちむん）の工房やショップ、石垣に囲まれた古民家カフェが連なる風情ある通り。お気に入りの器に出会えます。",
      tips: {
        cloudy: "穏やかな街並みと器めぐりにぴったりの気温。古民家カフェでのぶくぶく茶体験も素敵です。",
        rainy: "すぐ横のアーケード「太平通り」から抜ければ最小限の濡れでギャラリー巡りができます。"
      }
    }
  ]
};
