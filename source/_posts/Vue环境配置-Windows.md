---
title: Vue环境配置(Windows)
date: 2024-09-21 16:06:29
category: Vue
tags:
  - Vue
  - 笔记
  - 前端框架
series: Vue2
---

> **🚥Vue2 系列文章导航🚥**
>
> {% series Vue2 %}
>

## 一、node.js安装配置

vue的使用需要以node.js为前提，如果您的电脑上已经安装了node.js，可直接跳过这一步。

我们可以在终端（win+r，然后输入cmd打开终端）中输入`node -v`来查询电脑上是否已经安装node.js以及版本号。如下图显示，我的电脑上目前已经安装了node.js，且版本号为20.12.0。

![1](https://bu.dusays.com/2024/11/29/674917ef2d41a.png)

node.js的下载地址为：[Node.js — 在任何地方运行 JavaScript](https://nodejs.org/zh-cn)

下载完成后打开刚刚下载的文件：

![2](https://bu.dusays.com/2024/11/29/674917f39f09d.png)

选择安装路径：

![3](https://bu.dusays.com/2024/11/29/674917f8761bf.png)

选择我们需要的安装模式（注意此处要手动修改）：

![4](https://bu.dusays.com/2024/11/29/674917fcec117.png)

手动勾选此处的自动安装必要工具项（用于安装一些额外的开发工具和依赖）：

![5](https://bu.dusays.com/2024/11/29/674918013259a.png)

选择安装：

![6](https://bu.dusays.com/2024/11/29/674918052c679.png)

安装完成：

![7](https://bu.dusays.com/2024/11/29/67491809d89c0.png)

然后我们可以使用前面提到的的方式，在终端中输入`node -v`来检查node.js是否成功安装。

## 二、NPM方法安装Vue

由于 npm 安装速度慢，因此我们在下载时选择使用淘宝镜像及其命令 cnpm。

首先在电脑上**全局安装cnpm**。

打开电脑终端，输入指令`npm install -g cnpm --registry=https://registry.npmmirror.com`。下载完成后输入`cnpm -v`进行检查。

![8](https://bu.dusays.com/2024/11/29/6749180e7f1e0.png)

> **注**：cnpm是由淘宝NPM镜像提供的一个npm的镜像服务客户端，用于在中国大陆地区加速npm包的安装，因为直接使用npm在国内有时候会比较慢。cnpm和npm命令的用法几乎完全相同，所以我们可以无缝切换使用。

然后我们就可以输入`cnpm init vue@latest`来创建一个vue项目。它使用了Vue团队推荐的最新项目模板，提供了一种无需全局安装Vue CLI的方式来创建Vue项目，更加简单快捷。当然，你可以先选择好该项目的路径。

![9](https://bu.dusays.com/2024/11/29/674918129987d.png)

初次创建时，会询问我们是否下载对应的依赖项，我们输入y后回车即可。

其余设置无特殊要求，输入项目名称后，一路回车，保持默认即可。

然后我们依次输入他为我们提供的三条指令：

`cd vue-project`     进入我们的vue项目目录，这里的vue-project为项目名称。

`cnpm install`      安装项目所需的依赖项，使用cnpm下载速度更快。

`npm run dev`      启动项目的开发服务器

![10](https://bu.dusays.com/2024/11/29/674918180c479.png)

上图显示项目启动成功，运行在`http:// localhost:5173`。我们将网址复制，在浏览器中打开。

![11](https://bu.dusays.com/2024/11/29/6749181c9f385.png)

现在，你就成功创建了一个你自己的Vue项目模板， 你可以按照自己的想法对各个模块进行修改。