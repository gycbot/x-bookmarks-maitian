window.SITE_DATA = {
  "meta": {
    "title": "9 条 X 收藏：能用的判断与核实的夸大",
    "subtitle": "公开帖数据 + 公开仓库核对 + 麦田信息架构演示",
    "observedAt": "2026-11-17",
    "timezone": "Asia/Shanghai",
    "total": 9,
    "analyzed": 9,
    "integrated": 1,
    "pending": 5,
    "unreadArticles": 4,
    "sourceNote": "分析结论来自已完成的 t3034u 工作；数字为公开帖与公开 API 观测值，可能随后续变化。"
  },
  "items": [
    {
      "rank": 1,
      "id": "2122266042491642027",
      "author": {
        "handle": "czzzzzzJ_",
        "name": "麦当mdldm",
        "followers": 9507
      },
      "url": "https://x.com/czzzzzzJ_/status/2122266042491642027",
      "title": "被问爆的 AI 自媒体工作台，我直接开源了：一个人管 7 个平台的发布 + 监控系统｜麦田",
      "createdAt": "2026-11-16T09:50:28Z",
      "metrics": {
        "bookmarks": 2028,
        "impressions": 135525,
        "likes": 982,
        "reposts": 121,
        "quotes": 45,
        "replies": 71
      },
      "decision": "已接入（只读工作台）",
      "status": {
        "analyzed": true,
        "integrated": true,
        "pending": [
          "长文全文：X 文章页只返回空壳（WebFetch/curl 均无正文），未读全文，分析基于两个公开仓库 README、publish skill 与仓库源码"
        ]
      },
      "claims": [
        "一套工作台管 B站/抖音/小红书/视频号/YouTube/X/Instagram 七个平台：分发计划、到点填写、自动取链接。",
        "每天采集各期各平台播放与互动、各平台粉丝，长期留存；大屏 + 飞书卡片。",
        "国内四家只填写不发布，最后一下由人点；不存平台密码，用自己登录的浏览器。",
        "可选接自有站点看注册/收入；可选飞书多维表格与 cloudflared 隧道。"
      ],
      "methods": [
        "三层分工：发布 skill（AI 看片写各平台文案）→ Chrome 发布助手（适配器填写）→ 麦田（调度/防重/取链接/采数据/通知）。",
        "发布工程标准化：一期一目录（成片.mp4、三比例封面、发布素材.md、publish.json），便于校验、防重与归档。",
        "状态机与幂等：planned→filled→awaiting_user→scheduled→published，已到位平台不再跑；X/YouTube/IG 回读文案与定时后自动提交，国内四家停下等人。",
        "平台风险实战规则：同一视频每平台只传一次；成片必须 faststart；视频号定时会被改，需 sync 比对；小红书只读页面、低频、不调接口。",
        "数据闭环：utm_campaign=<主题>-<序号> 把站点注册/收入归因到某一期；第 1/3/7 天复盘卡与周报。",
        "Web 口令：所有页面与接口无 key 一律 401；登录态与 config.json、data/ 不进 git。"
      ],
      "license": [
        "仓库 MIT（LICENSE 首行 MIT License, Copyright 2026 麦当 mdldm；GitHub API license.spdx_id=MIT）。发布助手为 Apache-2.0，不授予 mdldm/麦当名称与 Logo 商标权。"
      ],
      "exaggerations": [
        "标题「一个人管 7 个平台的发布 + 监控系统」属实于能力范围，但国内四家仍需人工点发布，不是全自动。",
        "「开源」属实；但默认安装路径是 macOS-only（README 徽章），Windows 为社区脚本且开机自启未适配，Linux 无官方安装脚本。",
        "星数：截至 2026-11-17 公开 API 为 580 stars / 207 forks（仓库 11-14 才创建），不是「被问爆」量级；热度说法属作者叙事，不作事实引用。"
      ],
      "borrowable": [
        "五段式信息架构可直接借：灵感/选题 → 内容 → 排期 → 复盘 → 风格；本项目工作台按此落地为 6 个页签。",
        "「数字必须能回溯到文件」：每张卡片显示 source 路径与计算口径（本项目已实现）。",
        "只读优先的接入路径：先接回执/存活/队列/规程，不碰账号与发布，风险最低。",
        "发布工程目录规范与 faststart、防重、平台风控规则可写进我们现有 SOP 的发布检查项（不接管发布）。"
      ],
      "risks": [
        "依赖 macOS + Node ≥22.5 + Google Chrome + CDP 9333；Linux 直接跑官方安装脚本不成立。",
        "发布助手会驱动已登录浏览器与 chrome.debugger，触碰账号安全；本任务明确禁止接入。",
        "飞书机器人、cloudflared 隧道、自有站点接口都会扩大暴露面；默认全关。",
        "仓库很新（3 天），适配器依赖各平台页面结构，平台改版即失效。"
      ],
      "doNot": [
        "不接真实发布、不装 Chrome 插件、不启 CDP、不读登录态/cookies。",
        "不复制其代码进生产站点；只参考架构与流程。",
        "不把演示数据当运营数据。"
      ],
      "evidence": [
        {
          "url": "https://github.com/CzzzzzzJ/mdldm-maitian",
          "label": "github.com/CzzzzzzJ/mdldm-maitian"
        },
        {
          "url": "https://github.com/CzzzzzzJ/mdldm-maitian-publisher",
          "label": "github.com/CzzzzzzJ/mdldm-maitian-publisher"
        }
      ],
      "publicCheck": [
        "仓库 MIT；发布助手 Apache-2.0；v0.3.0；截至 2026-11-17 公开 API 580 stars / 207 forks（不以「被问爆」作事实引用）"
      ],
      "article": {
        "url": "https://x.com/i/article/2121892496200343552",
        "state": "长文未读全文"
      },
      "extraLinks": []
    },
    {
      "rank": 2,
      "id": "2119105285851656535",
      "author": {
        "handle": "vartekxx",
        "name": "vartekx",
        "followers": 2077
      },
      "url": "https://x.com/vartekxx/status/2119105285851656535",
      "title": "GrokBot Token Usage: how to never hit your limit again in 10 step",
      "createdAt": "2026-11-07T16:30:45Z",
      "metrics": {
        "bookmarks": 1953,
        "impressions": 527715,
        "likes": 594,
        "reposts": 67,
        "quotes": 14,
        "replies": 173
      },
      "decision": "KEEP-LITE（只取写法，不取配置）",
      "status": {
        "analyzed": true,
        "integrated": false,
        "pending": [
          "长文全文：X 文章页空壳，10 条设置与提示词未读到，不能逐条复述"
        ]
      },
      "claims": [
        "GrokBot 额度 4 天就用满 100%，且不会重置。",
        "作者称 Elon Musk 说这「贵到不可持续」。",
        "问题不是用得多，而是用法错；10 个设置 + 可复制提示词能让额度撑一周。"
      ],
      "methods": [
        "钩子结构：具体剩余天数 + 归零 + 权威引语 + 「不是用太多，是用错」纠错句。",
        "把「额度消耗」拆成可诊断项：空转的 routines、每次回复重读 6 周聊天、4 个 Bot 回答同一问题。",
        "用「100% → 30%」的单点对比做证据锚，配合截图（本批 raw 仅文本，图未读）。"
      ],
      "license": [
        "文章与提示词无开源许可；引用需注明原作者与原帖链接，不整段搬运。"
      ],
      "exaggerations": [
        "「Elon Musk called it unsustainably expensive」未能在公开材料核实，属作者引语，不能当事实。",
        "「10 steps 永不撞限」是标题夸张；省额度取决于实际用量，无普适保证。",
        "100%→30% 为作者自述单例，无测量方法、无对照。"
      ],
      "borrowable": [
        "「先拆消耗源，再谈优化」的诊断顺序，可套到我们自己的 token/额度复盘。",
        "三段式排比（空转/重读/重复回答）适合做口播里的机制解释，不堆形容词。",
        "钩子公式可进标题库：具体天数 + 归零 + 纠错句。"
      ],
      "risks": [
        "文中要求「把这个 setup 发给你的 Bot」——属于未审提示词注入，不能照做。",
        "平台额度政策可能变化，引用需标日期。"
      ],
      "doNot": [
        "不把作者自述的省额度比例当我们的实测。",
        "不装来路不明的 Bot 配置或提示词包。",
        "不引用未经核实的名人引语。"
      ],
      "evidence": [
        {
          "url": "https://x.com/vartekxx/status/2119105285851656535",
          "label": "x.com/vartekxx/status/2119105285851656535"
        }
      ],
      "publicCheck": [
        "文章与提示词无开源许可；名人引语与「10 steps 永不撞限」均未核实，不作事实"
      ],
      "article": {
        "url": "https://x.com/i/article/2119081101457051649",
        "state": "长文未读全文"
      },
      "extraLinks": []
    },
    {
      "rank": 3,
      "id": "2120257070809129342",
      "author": {
        "handle": "vartekxx",
        "name": "vartekx",
        "followers": 2077
      },
      "url": "https://x.com/vartekxx/status/2120257070809129342",
      "title": "this paper cut my GrokBot token usage from 100% to 30%",
      "createdAt": "2026-11-10T20:47:32Z",
      "metrics": {
        "bookmarks": 377,
        "impressions": 34134,
        "likes": 180,
        "reposts": 11,
        "quotes": 2,
        "replies": 27
      },
      "decision": "KEEP-LITE（钩子样本）",
      "status": {
        "analyzed": true,
        "integrated": false,
        "pending": [
          "引用长文全文同上，未读到"
        ]
      },
      "claims": [
        "一篇 paper 把额度从 100% 降到 30%。",
        "额度不是被工作吃掉的，是被工作周边吃掉的：空转例程、回复前重读 6 周聊天、4 个 Bot 回答同一问题。",
        "GrokBot 只给一个百分比，没有明细、没有预警。"
      ],
      "methods": [
        "同题二次分发：引用自己的长文，用更短的冲突句再收一次收藏（377 收藏 / 3.4 万曝光，藏曝比约 1.1%，高于原帖 0.37%）。",
        "「不是 A，是 B」纠错结构 + 三条具体消耗源 + 「它不给你看明细」制造信息差。",
        "结尾双重 CTA：先 save，再读文章。"
      ],
      "license": [
        "无开源许可；仅作写法样本。"
      ],
      "exaggerations": [
        "「paper」未给出处、未见论文链接，无法核实。",
        "100%→30% 与「meter barely moves」是营销化描述，不是测量结论。"
      ],
      "borrowable": [
        "同题二次分发：长文发完，用一条短帖把「最反直觉的一句」再打一次，是我们可复用的分发动作。",
        "藏曝比可以作为「钩子有效性」的粗指标（注意样本小）。"
      ],
      "risks": [
        "把未核实的论文当证据会伤可信度。",
        "重复同题易被判 spam；频率要控制。"
      ],
      "doNot": [
        "不引用不存在的论文",
        "不把「发 setup 给 Bot」当操作建议"
      ],
      "evidence": [
        {
          "url": "https://x.com/vartekxx/status/2120257070809129342",
          "label": "x.com/vartekxx/status/2120257070809129342"
        }
      ],
      "publicCheck": [
        "无开源许可；所称 paper 无出处；100%→30% 为作者自述单例，无测量方法"
      ],
      "article": {
        "url": "https://x.com/i/article/2119081101457051649",
        "state": "引用长文未读全文"
      },
      "extraLinks": []
    },
    {
      "rank": 4,
      "id": "2120179714002145775",
      "author": {
        "handle": "Antonio_RodriIA",
        "name": "Antonio Rodríguez",
        "followers": 228291
      },
      "url": "https://x.com/Antonio_RodriIA/status/2120179714002145775",
      "title": "hyperframes / reverse-any-video + 12 个 3D/视频 skill 清单",
      "createdAt": "2026-11-10T15:40:09Z",
      "metrics": {
        "bookmarks": 99,
        "impressions": 9030,
        "likes": 91,
        "reposts": 16,
        "quotes": 0,
        "replies": 2
      },
      "decision": "HOLD（工具清单参考，不安装）",
      "status": {
        "analyzed": true,
        "integrated": false,
        "pending": [
          "reverse-any-video 的实际额度/定价未逐项核对（README 标注 HyperFrames Pro）",
          "「10,000+ 音乐 / 75,000+ 图片」库存数字未核实"
        ]
      },
      "claims": [
        "视频剪辑师要完了；Claude Opus 5.5 学会「偷」任何视频。",
        "hyperframes 发布 /reverse-any-video，附 10,000+ 音乐、SFX、75,000+ 图片与 TTS，免费。",
        "给出 VIDEO / MOTION / BLENDER / 3D WEB 四组共 12 个仓库的技能栈。",
        "更新方式：npx hyperframes skills update。"
      ],
      "methods": [
        "把分散的 GitHub skill 按生产环节分组（视频/动效/Blender/3D Web），一屏可读。",
        "每条给 repo 链接 + 一句用途，降低选择成本。",
        "用 3D 渲染卡片做视频画面，工具清单本身就是内容素材。"
      ],
      "license": [
        "清单内仓库许可不一：hyperframes Apache-2.0；OpenMontage AGPL-3.0；Remotion 为 source-available 商业许可；GSAP 插件许可需单独确认。不能整包混用。"
      ],
      "exaggerations": [
        "「Claude Opus 5.5」无法在公开模型列表核实，属作者命名/夸大。",
        "「reverse-any-video 免费」不准确：README 将其列为 Core Skills，但标注 HyperFrames Pro；引擎 Apache-2.0 免费，Pro 能力不是。",
        "「10,000+ 音乐 / 75,000+ 图片」未给出来源，不能当事实。",
        "「视频剪辑师要完了」是情绪句，不是结论。"
      ],
      "borrowable": [
        "四层分类法（成片/动效/3D/网页 3D）可直接用于我们的工具盘点，避免把 Remotion、GSAP、Blender 混成一类。",
        "「一屏清单 + 一句用途 + 直达链接」是收藏型内容模板。",
        "reverse-any-video 的「逐帧对照原片重建为可编辑工程」值得关注，但要走 Pro，暂不接。"
      ],
      "risks": [
        "AGPL-3.0（OpenMontage）与商业产线混用有传染风险；只可阅读，不复制代码。",
        "技能包会执行本机命令，来源需可信。",
        "作者的 22.8 万粉与大曝光会放大未核实说法。"
      ],
      "doNot": [
        "不安装 hyperframes/GSAP/Blender MCP 到生产机。",
        "不把 Pro 功能写成免费。",
        "不复制 AGPL 代码进我们的仓库。"
      ],
      "evidence": [
        {
          "url": "https://github.com/heygen-com/hyperframes",
          "label": "github.com/heygen-com/hyperframes"
        },
        {
          "url": "https://raw.githubusercontent.com/heygen-com/hyperframes/main/README.md",
          "label": "raw.githubusercontent.com/heygen-com/hyperframes/main/README.md"
        },
        {
          "url": "https://api.github.com/repos/OpenMontageInc/OpenMontage",
          "label": "api.github.com/repos/OpenMontageInc/OpenMontage"
        }
      ],
      "publicCheck": [
        "hyperframes Apache-2.0，85,411 stars；OpenMontage AGPL-3.0，81,115 stars；/reverse-any-video 标注 HyperFrames Pro（2026-11-17 查询）"
      ],
      "article": null,
      "extraLinks": []
    },
    {
      "rank": 5,
      "id": "2119805836403081569",
      "author": {
        "handle": "shenghouxuyao",
        "name": "诺诺",
        "followers": 6052
      },
      "url": "https://x.com/shenghouxuyao/status/2119805836403081569",
      "title": "dsh-media-desk：DeepSeek Harness 上的开源自媒体工作台",
      "createdAt": "2026-11-09T14:54:30Z",
      "metrics": {
        "bookmarks": 466,
        "impressions": 22802,
        "likes": 395,
        "reposts": 49,
        "quotes": 2,
        "replies": 12
      },
      "decision": "KEEP（信息架构参考）",
      "status": {
        "analyzed": true,
        "integrated": false,
        "pending": []
      },
      "claims": [
        "DSH 上有人做了一套完整自媒体工作台，开源。",
        "五个模块：灵感中心、内容制作、排期管理、数据复盘、个人风格。",
        "支持抖音/小红书/B站/公众号/X/YouTube，发布仍需自己操作。",
        "模型 API 和部分数据服务可能产生费用。"
      ],
      "methods": [
        "五模块闭环：灵感 → 成稿（标题/口播/封面/配图/六格分镜）→ 日历排期 → 数据复盘 → 风格卡。",
        "复盘把建议直接写成写作规则，规则还能导出成 DSH Skill——「数据→规则→skill」的固化路径。",
        "导入自己的历史作品提炼风格卡，而不是空泛选模板。",
        "内容与配置全在本机 本机用户配置目录，无云端账号。"
      ],
      "license": [
        "MIT（GitHub API license.spdx_id=MIT，README 徽章 MIT）。"
      ],
      "exaggerations": [
        "「最爽」「最牛逼」为推广语。",
        "「完整工作台」但明确不能发布；导入账号需第三方 Monid 付费服务，小红书/抖音读不到播放量。",
        "星数：公开 API 为 1,452 stars（2026-11-17），不是网传量级；帖子本身没有报数。"
      ],
      "borrowable": [
        "五模块 IA 与我们工作台页签一一对应；「复盘→规则→skill」可作为收藏学习的沉淀动作。",
        "风格卡=用自己历史稿提炼，避免 AI 腔；可作为 de-ai-zh 的输入。",
        "本机存储、无账号系统的边界值得照搬。"
      ],
      "risks": [
        "要求 DSH 0.2.1-rc.5+ 实验性插件索引；我们生产线不能随便开实验功能。",
        "导入账号会把主页链接发给 Monid 及数据服务商，涉及第三方与平台条款。",
        "生图 Key 存本机 settings.json（600）；仍然是密钥面。"
      ],
      "doNot": [
        "不装进生产 DSH、不启用实验索引。",
        "不接 Monid、不导入真实账号。",
        "不把它当「能自动发布」。"
      ],
      "evidence": [
        {
          "url": "https://github.com/woniuniuniu/dsh-media-desk",
          "label": "github.com/woniuniuniu/dsh-media-desk"
        }
      ],
      "publicCheck": [
        "MIT；1,452 stars / 171 forks（2026-11-17 公开 API 查询）"
      ],
      "article": null,
      "extraLinks": []
    },
    {
      "rank": 6,
      "id": "2120306511444427084",
      "author": {
        "handle": "khyssabc",
        "name": "王多鱼",
        "followers": 20076
      },
      "url": "https://x.com/khyssabc/status/2120306511444427084",
      "title": "last30days skill：近 30 天跨平台热点研究",
      "createdAt": "2026-11-11T00:04:00Z",
      "metrics": {
        "bookmarks": 33,
        "impressions": 2972,
        "likes": 27,
        "reposts": 1,
        "quotes": 0,
        "replies": 2
      },
      "decision": "KEEP-LITE（方法可用，不安装）",
      "status": {
        "analyzed": true,
        "integrated": false,
        "pending": []
      },
      "claims": [
        "该 AI 搜索技能窜上 GitHub Trending 榜首，猛揽 40000 Star。",
        "抓 Reddit/X/YouTube/HN 最近 30 天热点，按真实互动加权排序。",
        "搜索前解析人名/公司名到对应账号与社区；跨平台同题自动聚合。",
        "输出 HTML 简报，可直接进 Notion 或邮件。"
      ],
      "methods": [
        "先澄清问题（人名/公司→账号/社区），再决定去哪挖，减少无效检索。",
        "跨平台同题合并，避免三份重复内容。",
        "输出带原始链接的 HTML 简报，结论可回溯。",
        "热榜（当下快照）与主题研究（指定时间窗）分开。"
      ],
      "license": [
        "MIT（LICENSE 文件为 MIT，含上游 Matt Van Horn 版权；GitHub API 显示 NOASSERTION 是因为 LICENSE 为自定义双版权文本，不是无许可）。"
      ],
      "exaggerations": [
        "「40000 Star」不实：GitHub API 2026-11-17 为 2,134 stars / 212 forks。",
        "「GitHub Trending 榜首」未能核实。",
        "「绝非随便排排」是自述；README 明确公开搜索缺可靠互动数据和精确日期，不能当完整样本。"
      ],
      "borrowable": [
        "研究流程的「解析对象→选平台→聚合→带源输出」四步，可直接用于我们的选题侦察。",
        "报告必须写明「拿到多少、来自哪里、哪些平台不可用」——与我们「数字必须可追溯」一致。",
        "热榜快照与时间窗研究分开，避免混用口径。"
      ],
      "risks": [
        "依赖平台登录态/爬虫（README 致谢 MediaCrawler、xiaohongshu-mcp），有平台条款与封号风险。",
        "跨平台排序权重不透明，容易把「热」当「真」。",
        "自动安装/运行脚本会扩大权限面。"
      ],
      "doNot": [
        "不在生产机安装或跑爬虫。",
        "不引用 40000 Star 之类未核实数字。",
        "不自动登录平台账号。"
      ],
      "evidence": [
        {
          "url": "https://github.com/Jesseovo/last30days-skill-cn",
          "label": "github.com/Jesseovo/last30days-skill-cn"
        },
        {
          "url": "https://raw.githubusercontent.com/Jesseovo/last30days-skill-cn/main/LICENSE",
          "label": "raw.githubusercontent.com/Jesseovo/last30days-skill-cn/main/LICENSE"
        }
      ],
      "publicCheck": [
        "MIT（双版权自定义文本，API 显示 NOASSERTION 不等于无许可）；2,134 stars / 212 forks；「40000 Star」不实"
      ],
      "article": null,
      "extraLinks": []
    },
    {
      "rank": 7,
      "id": "2120163162582601942",
      "author": {
        "handle": "ai_xiaomu",
        "name": "黄小木",
        "followers": 57618
      },
      "url": "https://x.com/ai_xiaomu/status/2120163162582601942",
      "title": "近期流量密码：教程 + 保姆级提示词 + 搞钱元素 = 爆文",
      "createdAt": "2026-11-10T14:34:23Z",
      "metrics": {
        "bookmarks": 24,
        "impressions": 6022,
        "likes": 26,
        "reposts": 2,
        "quotes": 0,
        "replies": 3
      },
      "decision": "KEEP-LITE（选题公式，需合规改写）",
      "status": {
        "analyzed": true,
        "integrated": false,
        "pending": []
      },
      "claims": [
        "写教程、给保姆级提示词、再加搞钱元素，就是爆文。",
        "引用帖《将你的 Personal Agent 打造成自动化赚钱系统》（仅标题，正文 404/空壳）。"
      ],
      "methods": [
        "教程型内容的三件套：可跟做步骤 + 可复制提示词 + 结果承诺（搞钱）。",
        "用「近期流量密码」做元评论，借他人爆文再收一次互动。",
        "短帖 + 引用，低成本蹭同题流量。"
      ],
      "license": [
        "无开源内容；引用他人长文需标注原作者与原帖。"
      ],
      "exaggerations": [
        "「就是爆文」把相关当因果；没有样本量与对照。",
        "「搞钱」类承诺易触平台合规与虚假宣传红线。"
      ],
      "borrowable": [
        "教程结构可保留：步骤 → 提示词 → 验收标准。",
        "把「搞钱」替换成可验证结果（省了多少时间、产出什么），更符合我们站规。",
        "元评论（总结爆文套路）本身是低成本选题。"
      ],
      "risks": [
        "收益承诺违规；平台对「搞钱/副业」内容审核趋严。",
        "同质化教程会加重 AI 味，需过 de-ai-zh。"
      ],
      "doNot": [
        "不写收益保证、不写「人人可复制月入 X」。",
        "不引用未读正文的他人文章当依据。"
      ],
      "evidence": [
        {
          "url": "https://x.com/ai_xiaomu/status/2120163162582601942",
          "label": "x.com/ai_xiaomu/status/2120163162582601942"
        },
        {
          "url": "https://x.com/i/article/2119969084666417152",
          "label": "x.com/i/article/2119969084666417152"
        }
      ],
      "publicCheck": [
        "无开源内容；引用长文正文为空壳，仅标题可见，未读全文"
      ],
      "article": {
        "url": "https://x.com/i/article/2119969084666417152",
        "state": "仅标题可见"
      },
      "extraLinks": [
        {
          "url": "https://x.com/i/article/2119969084666417152",
          "label": "引用长文（仅标题可见，正文未读）"
        }
      ]
    },
    {
      "rank": 8,
      "id": "2119785596273168892",
      "author": {
        "handle": "yanchuanlab",
        "name": "言川",
        "followers": 3101
      },
      "url": "https://x.com/yanchuanlab/status/2119785596273168892",
      "title": "AI 视频 Bot（2D/3D）：从想法到成片一手实战全流程（附完整提示词）",
      "createdAt": "2026-11-09T13:34:04Z",
      "metrics": {
        "bookmarks": 3045,
        "impressions": 302598,
        "likes": 1599,
        "reposts": 210,
        "quotes": 32,
        "replies": 60
      },
      "decision": "KEEP（选题与结构；全文待补）",
      "status": {
        "analyzed": true,
        "integrated": false,
        "pending": [
          "长文全文：X 文章页空壳，完整提示词与流程步骤未读到",
          "需父会话补全文后再做逐步骤差异表（≤3 点）"
        ]
      },
      "claims": [
        "AI 视频 Bot 可从想法直接走到成片，覆盖 2D/3D。",
        "提供完整提示词与全流程。"
      ],
      "methods": [
        "「从想法到成片」端到端实战，是典型高收藏教程结构（藏/赞约 1.9，远高于普通帖）。",
        "标题含交付物（完整提示词）+ 范围（2D/3D）+ 路径（全流程）。",
        "本地 LOG（2026-11-10 17:00）曾记录：原作者粉少却突然爆（当时 2296 粉 / 14.9 万曝光 / 1580 藏），属「粉少突爆」样本。"
      ],
      "license": [
        "文章未标许可；不可整段搬运提示词，引用需注明作者与链接。"
      ],
      "exaggerations": [
        "「一手实战」无法验证是否真实项目。",
        "曝光与收藏为平台公开数据，但「粉少突爆」不等于方法可复制。"
      ],
      "borrowable": [
        "教程选题公式：范围（2D/3D）+ 交付物（完整提示词）+ 路径（全流程）。",
        "高藏赞比说明用户是「存下来照着做」，不是「看完就赞」；我们的教程也应给可执行清单。",
        "可做中文解读/对照实验，但需先拿全文，避免复述标题。"
      ],
      "risks": [
        "未读全文就复述步骤会编造；必须等全文或只做标题层分析。",
        "提示词可能绑定特定模型/额度，迁移未必成立。"
      ],
      "doNot": [
        "不在缺口未补时写「已读全文」。",
        "不整段搬运提示词与课程导流。"
      ],
      "evidence": [
        {
          "url": "https://x.com/yanchuanlab/status/2119785596273168892",
          "label": "x.com/yanchuanlab/status/2119785596273168892"
        }
      ],
      "publicCheck": [
        "文章未标许可；全文未读到，不逐步骤复述提示词"
      ],
      "article": {
        "url": "https://x.com/i/article/2119775212799705089",
        "state": "长文未读全文"
      },
      "extraLinks": []
    },
    {
      "rank": 9,
      "id": "2120000799300567436",
      "author": {
        "handle": "ZhouTalks",
        "name": "周周聊搞钱",
        "followers": 14228
      },
      "url": "https://x.com/ZhouTalks/status/2120000799300567436",
      "title": "X 原生切片上线：二创切片「官方发钱」",
      "createdAt": "2026-11-10T03:49:12Z",
      "metrics": {
        "bookmarks": 24,
        "impressions": 5216,
        "likes": 28,
        "reposts": 3,
        "quotes": 1,
        "replies": 13
      },
      "decision": "HOLD（可做切片，但不做矩阵号）",
      "status": {
        "analyzed": true,
        "integrated": false,
        "pending": []
      },
      "claims": [
        "X 原生剪辑工具上线：站内截取高光，自动带原帖回链。",
        "官方给所有切片手合法发钱，可与原作者平分流量收益。",
        "不用本地导素材、不用复杂剪辑；看网感与手速。",
        "「今晚就开始批量建号切视频」。"
      ],
      "methods": [
        "把平台规则变化翻译成「普通人机会」的解读框架：旧痛点（搬运怕版权）→ 新规则（原生切片+回链）→ 收益想象 → 实操入口。",
        "用对比句制造情绪：「地下黑户」vs「合法发钱」。",
        "评论区一楼放实操与避坑，导流私域。"
      ],
      "license": [
        "官方公告为平台公开信息；引用应链到 @XCreators 原帖，不使用其视频/截图商业素材。"
      ],
      "exaggerations": [
        "官方原帖（@XCreators 2119892170224074832）只说：原作者与切片者都可凭切片观看量通过 Original Content Rewards 获得收入；未承诺「所有切片手」「平分」。资格、地区、订阅与奖励规则未在帖中展开。",
        "「自动带原帖回链」属实（官方：every clip credits your original video and links back to it）。",
        "「批量建号」有平台规则与风控风险，不是官方建议。"
      ],
      "borrowable": [
        "切片是合法增长动作：只切高光、加自己的解说、保留原帖回链。",
        "选题角度「平台规则改写→普通人机会」可持续复用，但必须回到官方原文。",
        "评论区放清单的做法可学，但我们不放私域导流。"
      ],
      "risks": [
        "收入取决于 Original Content Rewards 资格与平台条款，不能承诺。",
        "批量建号/矩阵搬运易触发风控与版权投诉。",
        "「搞钱」标题与收益暗示有合规风险。"
      ],
      "doNot": [
        "不批量建号、不做纯搬运。",
        "不写「人人可领钱/平分收益」。",
        "不引导站外交易或付费社群。"
      ],
      "evidence": [
        {
          "url": "https://x.com/XCreators/status/2119892170224074832",
          "label": "x.com/XCreators/status/2119892170224074832"
        },
        {
          "url": "https://x.com/ZhouTalks/status/2120000799300567436",
          "label": "x.com/ZhouTalks/status/2120000799300567436"
        }
      ],
      "publicCheck": [
        "官方帖只说原作者与切片者都可凭切片观看量通过 Original Content Rewards 获得收入，未承诺「所有切片手」「平分」"
      ],
      "article": null,
      "extraLinks": [
        {
          "url": "https://x.com/XCreators/status/2119892170224074832",
          "label": "官方公告 @XCreators"
        }
      ]
    }
  ],
  "maitian": {
    "label": "信息架构演示 · 演示数据",
    "notice": "本区是麦田工作台的可查看演示，不连接私有队列、回执、账号后台或任何实时产线数据。",
    "modules": [
      {
        "key": "灵感 / 收藏",
        "desc": "收藏池与选题判断",
        "demo": "9 条本批收藏"
      },
      {
        "key": "内容",
        "desc": "标题 / 口播 / 封面 / 分镜",
        "demo": "示例：一期一目录"
      },
      {
        "key": "排期",
        "desc": "平台日历 / 防重 / 人工确认",
        "demo": "示例：7 平台"
      },
      {
        "key": "复盘",
        "desc": "平台健康 / 1·3·7 天卡",
        "demo": "示例：数据→规则→skill"
      },
      {
        "key": "规程",
        "desc": "站规 / 平台笔记 / 口径",
        "demo": "示例：只读引用"
      }
    ],
    "platforms": [
      {
        "name": "B站",
        "mode": "人工点发布",
        "group": "国内"
      },
      {
        "name": "抖音",
        "mode": "人工点发布",
        "group": "国内"
      },
      {
        "name": "小红书",
        "mode": "人工点发布 · 只读低频",
        "group": "国内"
      },
      {
        "name": "视频号",
        "mode": "人工点发布 · 定时需比对",
        "group": "国内"
      },
      {
        "name": "YouTube",
        "mode": "可回读文案 / 定时后自动提交",
        "group": "海外"
      },
      {
        "name": "X",
        "mode": "可回读文案 / 定时后自动提交",
        "group": "海外"
      },
      {
        "name": "Instagram",
        "mode": "可回读文案 / 定时后自动提交",
        "group": "海外"
      }
    ],
    "states": [
      "planned",
      "filled",
      "awaiting_user",
      "scheduled",
      "published"
    ],
    "sampleRows": [
      {
        "id": "SAMPLE-01",
        "title": "示例 · 科技成本拆解",
        "platform": "B站 / 小红书 / 抖音",
        "state": "published",
        "note": "仅示意，非真实排期"
      },
      {
        "id": "SAMPLE-02",
        "title": "示例 · 财经数据复盘",
        "platform": "B站 / 抖音",
        "state": "awaiting_user",
        "note": "国内平台停在人工确认"
      },
      {
        "id": "SAMPLE-03",
        "title": "示例 · 游戏高热拉片",
        "platform": "YouTube / X",
        "state": "scheduled",
        "note": "海外平台可回读定时"
      },
      {
        "id": "SAMPLE-04",
        "title": "示例 · 综艺现象拆解",
        "platform": "视频号",
        "state": "filled",
        "note": "示例：定时可能被平台改动"
      }
    ],
    "flow": [
      {
        "step": "发布 skill",
        "desc": "AI 看片，写各平台文案"
      },
      {
        "step": "Chrome 发布助手",
        "desc": "适配器填写，不存平台密码"
      },
      {
        "step": "麦田",
        "desc": "调度 / 防重 / 取链接 / 采数据 / 通知"
      }
    ],
    "chart": [
      {
        "rank": 8,
        "title": "AI 视频 Bot（2D/3D）：从想法到成片一手实战全流程（附完整提示词）",
        "author": "yanchuanlab",
        "bookmarks": 3045,
        "impressions": 302598
      },
      {
        "rank": 1,
        "title": "被问爆的 AI 自媒体工作台，我直接开源了：一个人管 7 个平台的发布 + 监控系统｜麦田",
        "author": "czzzzzzJ_",
        "bookmarks": 2028,
        "impressions": 135525
      },
      {
        "rank": 2,
        "title": "GrokBot Token Usage: how to never hit your limit again in 10 step",
        "author": "vartekxx",
        "bookmarks": 1953,
        "impressions": 527715
      },
      {
        "rank": 5,
        "title": "dsh-media-desk：DeepSeek Harness 上的开源自媒体工作台",
        "author": "shenghouxuyao",
        "bookmarks": 466,
        "impressions": 22802
      },
      {
        "rank": 3,
        "title": "this paper cut my GrokBot token usage from 100% to 30%",
        "author": "vartekxx",
        "bookmarks": 377,
        "impressions": 34134
      },
      {
        "rank": 4,
        "title": "hyperframes / reverse-any-video + 12 个 3D/视频 skill 清单",
        "author": "Antonio_RodriIA",
        "bookmarks": 99,
        "impressions": 9030
      },
      {
        "rank": 6,
        "title": "last30days skill：近 30 天跨平台热点研究",
        "author": "khyssabc",
        "bookmarks": 33,
        "impressions": 2972
      },
      {
        "rank": 7,
        "title": "近期流量密码：教程 + 保姆级提示词 + 搞钱元素 = 爆文",
        "author": "ai_xiaomu",
        "bookmarks": 24,
        "impressions": 6022
      },
      {
        "rank": 9,
        "title": "X 原生切片上线：二创切片「官方发钱」",
        "author": "ZhouTalks",
        "bookmarks": 24,
        "impressions": 5216
      }
    ],
    "chartNote": "公开帖收藏数，非我们账号的运营数据。"
  }
};
