let body = $response.body;

// ✅ 只处理 HTML
if (!$response.headers['Content-Type'] || !$response.headers['Content-Type'].includes('text/html')) {
  $done({});
} else {

  // 防重复注入
  if (body.includes("x-dim-theme")) {
    $done({ body });
  }

  let css = `
  <style id="x-dim-theme">
  html, body {
    background-color: #15202b !important;
    color: #e6ecf0 !important;
  }
  div[role="main"] {
    background-color: #15202b !important;
  }
  article {
    background-color: #192734 !important;
    border-color: #38444d !important;
  }
  header, aside {
    background-color: #15202b !important;
  }
  div[role="button"]:hover,
  article:hover {
    background-color: #1c2a33 !important;
  }
  textarea, input {
    background-color: #192734 !important;
    color: #fff !important;
  }
  div[role="dialog"] {
    background-color: #15202b !important;
  }
  hr {
    border-color: #38444d !important;
  }
  a {
    color: #1da1f2 !important;
  }
  img {
    background-color: transparent !important;
  }
  </style>
  `;

  body = body.replace("</head>", css + "</head>");

  $done({ body });
}
