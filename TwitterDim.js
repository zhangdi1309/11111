let body = $response.body;

// 只处理HTML（防子资源报错）
if (!$response.headers['Content-Type'] || !$response.headers['Content-Type'].includes('text/html')) {
  $done({});
} else {

  if (body.includes("x-dim-theme")) {
    $done({ body });
  }

  let css = `
  <style id="x-dim-theme">
  html, body { background:#15202b !important; color:#e6ecf0 !important; }
  div[role="main"], header, aside { background:#15202b !important; }
  article { background:#192734 !important; border-color:#38444d !important; }
  div[role="button"]:hover, article:hover { background:#1c2a33 !important; }
  textarea, input { background:#192734 !important; color:#fff !important; }
  div[role="dialog"] { background:#15202b !important; }
  hr { border-color:#38444d !important; }
  a { color:#1da1f2 !important; }
  img { background:transparent !important; }
  </style>
  `;

  body = body.replace("</head>", css + "</head>");
  $done({ body });
}
