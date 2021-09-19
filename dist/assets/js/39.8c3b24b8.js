(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{574:function(t,s,a){"use strict";a.r(s);var e=a(11),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"博客"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#博客"}},[t._v("#")]),t._v(" 博客")]),t._v(" "),a("p",[t._v("博客会在"),a("RouterLink",{attrs:{to:"/"}},[t._v("首页")]),t._v("显示。所有博客都需要放在 "),a("code",[t._v("posts/")]),t._v(" 文件夹下，文件名格式为 "),a("code",[t._v("${年}-${月}-${日}-${随便什么名字}.md")]),t._v("，如 "),a("code",[t._v("2020-03-31-a-brief-history-of-time")]),t._v("，然后该博客会被渲染在网站的 "),a("code",[t._v("/post/2020/03/31/a-brief-history-of-time/")]),t._v(" 路径下。")],1),t._v(" "),a("p",[t._v("然后需要配置它的 "),a("code",[t._v("front-matter")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" A Brief History of Time  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 博客标题（必须）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("subtitle")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" From the Big Bang to Black Holes  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 博客副标题（可选）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2020-03-31")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 博客日期，会显示在文章头部（可选）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("author")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Stephen Hawking  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 博客作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("header_style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" image  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否在博客中显示封面图：`image`（显示） / `text`（不显示）（可选，默认为 `text`）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("header_img")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" /img/test.jpg  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 博客封面图（必须，即使上一项选了 `text`，图片也需要在首页显示）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("header_mask")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" rgba(40"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("57")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("101")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" .4)  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 封面图遮罩（可选）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("catalog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否启用右侧目录：false / true（可选，默认为 false）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("tags")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 博客标签")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" space\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" physics\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("code",[t._v("title")]),t._v(" 会作为一级标题在博客中显示，所以"),a("strong",[t._v("不需要在博客正文中写一级标题")]),t._v("。")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("code",[t._v("front-matter")]),t._v(" 中有 "),a("code",[t._v("tags")]),t._v(" 项的博客会在"),a("RouterLink",{attrs:{to:"/tags/"}},[t._v("标签页")]),t._v("显示。")],1)]),t._v(" "),a("h2",{attrs:{id:"文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文档"}},[t._v("#")]),t._v(" 文档")]),t._v(" "),a("p",[t._v("同时本主题也保留了 VuePress 的文档功能，基本的使用方法及侧边栏配置方法请参考"),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress 文档")]),t._v("。")]),t._v(" "),a("p",[t._v("文档的 "),a("code",[t._v("front-matter")]),t._v(" 格式为：")]),t._v(" "),a("div",{staticClass:"language-yaml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yaml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("title")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" A Brief History of Time  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文档标题（必须）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token datetime number"}},[t._v("2020-03-31")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文档日期，会显示在文章头部（可选）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("author")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Stephen Hawking  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文档作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("同样，"),a("code",[t._v("title")]),t._v(" 会作为一级标题在文档中显示，所以也"),a("strong",[t._v("不需要在文档正文中写一级标题")]),t._v("。")])]),t._v(" "),a("h2",{attrs:{id:"markdown-语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#markdown-语法"}},[t._v("#")]),t._v(" Markdown 语法")]),t._v(" "),a("p",[t._v("请参考：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://www.markdownguide.org/basic-syntax/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Markdown 原生语法")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/markdown.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("VuePress 的 Markdown 拓展语法")])]),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/docs/advanced/features/"}},[t._v("本主题的 Markdown 拓展语法")])],1)]),t._v(" "),a("p",[t._v("这里展示一下本主题默认支持的"),a("a",{attrs:{href:"https://v1.vuepress.vuejs.org/zh/guide/markdown.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E5%AE%B9%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[t._v("容器")]),t._v("用法：")]),t._v(" "),a("div",{staticClass:"custom-block info"},[a("p",{staticClass:"custom-block-title"},[t._v("信息")]),t._v(" "),a("p",[t._v("This is an info message.")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("This is a tip message.")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("This is a warning message.")])]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("警告")]),t._v(" "),a("p",[t._v("This is a dangerous warning message.")])]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("Show me the code.")]),t._v(" "),a("div",{staticClass:"language-cpp extra-class"},[a("pre",{pre:!0,attrs:{class:"language-cpp"}},[a("code",[t._v("cout "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello World!"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"\\n"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);