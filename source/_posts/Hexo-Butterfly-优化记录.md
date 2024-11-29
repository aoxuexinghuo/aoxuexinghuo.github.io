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

在对应页面加入`- <script async src="https://npm.elemecdn.com/tzy-blog/lib/js/other/sakura.js"></script>`，建议放在head标签里。

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

好汀。
