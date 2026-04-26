let body = $response.body;

// 防止重复注入
if (body.includes("x-dim-theme")) {
  $done({ body });
}

let css = `
<style id="x-dim-theme">

/* 全局背景 */
html, body {
  background-color: #15202b !important;
  color: #e6ecf0 !important;
}

/* 主时间线 */
div[role="main"] {
  background-color: #15202b !important;
}

/* 卡片 */
article {
  background-color: #192734 !important;
  border-color: #38444d !important;
}

/* 顶部栏 */
header {
  background-color: #15202b !important;
}

/* 侧边栏 */
aside {
  background-color: #15202b !important;
}

/* hover 效果 */
div[role="button"]:hover,
article:hover {
  background-color: #1c2a33 !important;
}

/* 输入框 */
textarea {
  background-color: #192734 !important;
  color: #fff !important;
}

/* 弹窗 */
div[role="dialog"] {
  background-color: #15202b !important;
}

/* 搜索栏 */
input {
  background-color: #192734 !important;
  color: #fff !important;
}

/* 分割线 */
hr {
  border-color: #38444d !important;
}

/* 链接颜色 */
a {
  color: #1da1f2 !important;
}

/* 修复白块 */
* {
  background-image: none !important;
}

/* 图片不受影响 */
img {
  background-color: transparent !important;
}

</style>
`;

body = body.replace("</head>", css + "</head>");

$done({ body });
