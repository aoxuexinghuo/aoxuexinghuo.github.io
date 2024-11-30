---
title: Hexo+Butterfly 优化记录
date: 2024-11-27 21:31:22
category: Hexo
tags:
  - Hexo
  - Butterfly
description: 记录对博客的修改，目前看起来还是很塑料。
swiper_index: 2
---

## 1.Twikoo评论系统

参考文章：[Twikoo | 一个简洁、安全、免费的静态网站评论系统](https://twikoo.js.org/)

~~云函数使用Vercel部署，目前评论系统需要科学上网才能使用。~~

目前已能正常使用，感谢牢饭的域名。

昵称栏输入QQ号后可自动读取头像、昵称、QQ邮箱。

## 2.hexo-butterfly-charts插件

参考文章：[使用Charts插件给Butterfly增加统计图表 | Guo Le's Blog](https://blog.guole.fun/posts/18158/#)

## 3.安知鱼波浪

参考文章：[butterfly文章顶部添加波浪效果 | 安知鱼 (anheyu.com)](https://blog.anheyu.com/posts/98c4.html)

## 4.渐变色版权美化

参考文章：[（二创）Copyright-beautify | Akilarの糖果屋](https://akilar.top/posts/8322f8e6/)
友链部分字体似乎被同步修改为蓝色，很丑...

## 5.友链样式功能升级

参考文章：[Friend Link Card Beautify | Akilarの糖果屋](https://akilar.top/posts/57291286/)

就喜欢这种大开大合的删减！

注意部分模式需要额外添加缩略图，即添加一条名为`siteshot`的配置项。

## 6.导航栏魔改

（1）菜单居中

参考文章：[博客魔改教程总结(五) | Fomalhaut🥝](https://www.fomal.cc/posts/eec9786.html)

（2）颜色修改

custom.css 文件插入如下内容，渐变色导航栏。

```css
/* 导航栏 */
#page-header.nav-fixed #nav {
    /*background: rgba(135,206,250, 0.75);*/
    background: linear-gradient(
            -45deg,
            #e8d8b9,
            #a3e9eb,
            #00BFFF
    );
    backdrop-filter: var(--backdrop-filter);
}

[data-theme="dark"] #page-header.nav-fixed #nav {
    background: rgba(0, 0, 0, 0.7) !important;
}

```

## 7.加载动画

参考文章：[Heo同款loading动画 | 安知鱼 (anheyu.com)](https://blog.anheyu.com/posts/52d8.html)

豪坎！

## 8.电子钟

参考文章：[给butterfly添加侧边栏电子钟 | 安知鱼 (anheyu.com)](https://blog.anheyu.com/posts/fc18.html)

emm，你这个天气好像不太对。

## 9.首页轮播

参考文章：[Swiper Bar | Akilarの糖果屋](https://akilar.top/posts/8e1264d1/)

哎，差点意思。

## 10.hexo-magnet 插件

参考文章：[教程：hexo-magnet 插件 1.0 | 小冰博客 (zfe.space)](https://zfe.space/post/hexo-magnet.html)

挺可爱的。

## 11.主题色修改

Butterfly的主题色配置似乎存在bug，直接跑到 var.style 文件狠狠修改变量，简单粗暴。

## 12.樱花飘落特效

在对应页面加入`<script async src="https://npm.elemecdn.com/tzy-blog/lib/js/other/sakura.js"></script>`。

或者在主题配置文件中全局引入：

```yml
inject:
  head:
  bottom:
    - <script async src="https://npm.elemecdn.com/tzy-blog/lib/js/other/sakura.js"></script>
```

挺好看的，就是看久了有点烦，全局引入还是算了。

想到了那句歌：

> さくら さくら 会いたいよ
>
> いやだ 君に今すぐ会いたいよ

好汀！

## 13.字体修改

参考文章：[分类: 魔改教程 | Fomalhaut🥝](https://www.fomal.cc/posts/eec9786.html)

修改字体为霞鹜文楷，楷体真的满足了我对文字的一切美好幻想。

## 14.markdown渲染器升级

参考文章：[【Hexo】选择更高级的Markdown渲染器_hexo-renderer-marked-CSDN博客](https://blog.csdn.net/qq_42951560/article/details/123596899)

卸载自带的渲染器：`npm un hexo-renderer-marked --save`

下载新的：`npm i hexo-renderer-markdown-it --save`

在Hexo配置文件中加入以下内容：

```yml
markdown:
  preset: "default"          # 使用 Markdown-it 的默认预设，可以改为 'commonmark' 或 'zero'
  render:
    html: true               # 允许在 Markdown 中直接使用 HTML 标签
    xhtmlOut: false          # 禁用 XHTML 输出格式
    langPrefix: "language-"  # 为代码块的语言添加前缀（如 "language-js"）
    breaks: true             # 将 Markdown 中的换行符转换为 <br> 标签
    linkify: false           # 自动将类似 URL 的文本转换为可点击链接
    typographer: false       # 启用排版优化（例如，将普通引号转成智能引号）
    quotes: "“”‘’"           # 定义引号的样式，使用中文引号样式
  enable_rules:              # 启用的 Markdown-it 渲染规则（留空表示默认规则）
  disable_rules:             # 禁用的 Markdown-it 渲染规则（留空表示没有禁用任何规则）
  plugins:                   # 配置要启用的 markdown-it 插件列表
    - markdown-it-abbr       # 支持缩写 (abbr) 语法
    - markdown-it-cjk-breaks # 支持中文、日文、韩文换行
    - markdown-it-deflist    # 支持定义列表 (definition list) 语法
    - markdown-it-emoji      # 支持 Emoji 表情
    - markdown-it-footnote   # 支持脚注
    - markdown-it-ins        # 支持插入内容 <ins>
    - markdown-it-mark       # 支持标记内容 <mark>
    - markdown-it-sub        # 支持下标 <sub>
    - markdown-it-sup        # 支持上标 <sup>
    - markdown-it-checkbox   # 支持复选框语法
    - markdown-it-imsize     # 支持自定义图片尺寸
    - markdown-it-expandable # 支持可折叠内容
    - markdown-it-mathjax3        # 支持数学公式 (MathJax3)
    - name: markdown-it-container # 支持自定义容器 block，用于设置各种自定义内容块
      options: success            # 定义 "success" 类型的容器（例如，用于成功提示）
    - name: markdown-it-container
      options: tips               # 定义 "tips" 类型的容器（例如，用于小提示）
    - name: markdown-it-container
      options: warning            # 定义 "warning" 类型的容器（例如，用于警告提示）
    - name: markdown-it-container
      options: danger             # 定义 "danger" 类型的容器（例如，用于危险提示）
  anchors:
    level: 2                            # 设置锚点的级别，表示从第 2 级标题开始生成锚点（如 `<h2>` 标签）。通常，标题的级别从 1 开始，`level: 2` 表示为所有 2 级及以上标题生成锚点。
    collisionSuffix: ""                 # 如果多个标题的锚点链接相同（例如标题文本相同），此选项控制如何避免冲突。默认为空，表示不添加任何后缀（你可以设置为数字后缀如 `-1`, `-2` 等）。
    permalink: false                    # 是否为每个标题生成永久链接。设置为 `false` 表示不生成锚点链接。如果设置为 `true`，则每个标题将拥有一个对应的可点击的锚点。
    permalinkClass: "header-anchor"     # 为每个标题的锚点链接添加 CSS 类。这里设置为 `header-anchor`，你可以使用该类来定制锚点的样式。
    permalinkSide: "left"               # 设置锚点链接显示的位置。`left` 表示链接显示在标题的左边，`right` 则显示在右边。
    permalinkSymbol: "¶"               # 设置锚点链接的符号，这里使用 `¶` 符号表示，通常用于表示段落的标记。你可以根据需要更换为其他符号。
    case: 0                             # 控制锚点文本的大小写。`0` 表示不修改大小写，`1` 表示转换为小写，`2` 表示转换为大写。
    separator: "-"                      # 设置锚点生成时，标题中的空格或特殊字符如何替换，默认为 `-`，即空格会被替换成破折号（例如 `My Title` 会变成 `my-title`）。
```

额外下载四个markdown-it没有的插件：

```bash
npm i markdown-it-checkbox
npm i markdown-it-imsize
npm i markdown-it-expandable
npm i markdown-it-mathjax3
```

在主题配置文件中对Math部分进行相关配置，选择启用mathjax，并自行选择其他个性化调整。





