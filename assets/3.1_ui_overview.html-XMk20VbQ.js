import{_ as g,r,o as a,c as n,a as d,b as t,d as i,w as s,e as o}from"./app-Q07NRad_.js";const h={},m=o('<h1 id="_3-1-用户界面概览" tabindex="-1"><a class="header-anchor" href="#_3-1-用户界面概览"><span>3.1 用户界面概览</span></a></h1><p>MicroCity Web提供了一个简洁而多功能的用户界面。</p><h2 id="界面分区和功能" tabindex="-1"><a class="header-anchor" href="#界面分区和功能"><span>界面分区和功能</span></a></h2><p>MicroCity Web的用户界面分为四个部分：<strong>按钮面板</strong>，<strong>脚本编辑器</strong>，<strong>场景画布</strong>和<strong>消息栏</strong>，如下图所示：</p><p><img src="https://microcity.gitee.io/doc/img/ui_overview.png" alt="ui"></p>',5),l=o('<h2 id="按钮面板" tabindex="-1"><a class="header-anchor" href="#按钮面板"><span>按钮面板</span></a></h2><p>按钮面板包含一个标志链接（点击以打开新窗口），九个可点击的按钮，其中大多数也可以右键单击。对话框、文档和脚本编辑器可以通过按下<strong>ESC</strong>按钮来关闭。下面是每个按钮的功能表。</p><table><thead><tr><th>Button</th><th>Name</th><th>Shortcut</th><th>左键点击</th><th>右键点击</th></tr></thead><tbody><tr><td><img src="https://microcity.gitee.io/img/play.svg" alt=""></td><td>运行/调试</td><td>F5</td><td>运行脚本</td><td>调试脚本</td></tr><tr><td><img src="https://microcity.gitee.io/img/pause.svg" alt=""></td><td>暂停</td><td>F6</td><td>暂停脚本运行</td><td></td></tr><tr><td><img src="https://microcity.gitee.io/img/stop.svg" alt=""></td><td>停止/终止</td><td>F7</td><td>停止脚本运行</td><td>终止进程</td></tr><tr><td><img src="https://microcity.gitee.io/img/code.svg" alt=""></td><td>显示代码</td><td>F8</td><td>显示/隐藏脚本编辑器</td><td>在全屏模式下显示/隐藏脚本编辑器</td></tr><tr><td><img src="https://microcity.gitee.io/img/new.svg" alt=""></td><td>新建/清除</td><td>Ctrl + B</td><td>创建新脚本</td><td>清除脚本和虚拟磁盘</td></tr><tr><td><img src="https://microcity.gitee.io/img/open.svg" alt=""></td><td>打开/上传</td><td>Ctrl + O</td><td>打开脚本/项目文件</td><td>上传文件到虚拟磁盘</td></tr><tr><td><img src="https://microcity.gitee.io/img/save.svg" alt=""></td><td>保存/下载</td><td>Ctrl + S</td><td>保存脚本/项目文件</td><td>从虚拟磁盘下载文件</td></tr><tr><td><img src="https://microcity.gitee.io/img/publish.svg" alt=""></td><td>发布/嵌入</td><td></td><td>将项目发布到网络</td><td>在URL中嵌入项目</td></tr><tr><td><img src="https://microcity.gitee.io/img/doc.svg" alt=""></td><td>文档</td><td>F1</td><td>显示文档</td><td></td></tr></tbody></table><h2 id="文件管理" tabindex="-1"><a class="header-anchor" href="#文件管理"><span>文件管理</span></a></h2><p>MicroCity Web能将脚本和虚拟磁盘文件打包成一个单独的 .wm 文件，方便携带。你也可以使用<strong>发布/嵌入</strong><img src="https://microcity.gitee.io/img/publish.svg" alt="">来将其发布为一个简短链接或嵌入到 URL 中。下表展示了 MicroCity Web 支持的文件类型。</p><table><thead><tr><th>类型</th><th>格式</th><th>用途</th><th>备注</th></tr></thead><tbody><tr><td>.wm</td><td>MicroCity Web 文件</td><td>打开<img src="https://microcity.gitee.io/img/open.svg" alt="">/保存<img src="https://microcity.gitee.io/img/save.svg" alt="">/发布<img src="https://microcity.gitee.io/img/publish.svg" alt=""></td><td>用于打包脚本和虚拟磁盘文件</td></tr><tr><td>.lua</td><td>Lua 文件</td><td>打开<img src="https://microcity.gitee.io/img/open.svg" alt="">/保存<img src="https://microcity.gitee.io/img/save.svg" alt=""></td><td>仅编辑器中的脚本</td></tr><tr><td>.json</td><td>JavaScript 对象表示法</td><td>scene.addobj/scene.tojson</td><td>Threejs JSON 文件</td></tr><tr><td>.geojson</td><td>地理数据文件</td><td>scene.addobj</td><td>加载到场景的 XY 平面上</td></tr><tr><td>.gltf/.glb</td><td>图形库传输格式</td><td>scene.addobj</td><td>建议使用 GLB 以节省空间</td></tr><tr><td>.jpg 等</td><td>位图图像</td><td>scene.setmat</td><td>作为场景对象的纹理使用</td></tr></tbody></table><p>此外，任何类型文件都可以通过右键点击<strong>打开</strong><img src="https://microcity.gitee.io/img/open.svg" alt="">、直接拖拽或使用<strong>上传</strong>功能上传到虚拟磁盘，以便脚本可以直接访问（示例脚本中的资源位于 &#39;/res&#39; 目录）。虚拟磁盘中的文件也可以通过右键点击<strong>保存</strong><img src="https://microcity.gitee.io/img/save.svg" alt="">或使用<strong>下载</strong>功能下载到本地。你也可以通过右键点击<strong>发布</strong><img src="https://microcity.gitee.io/img/publish.svg" alt="">将任何文件保存为 URL 链接。</p>',7),p={href:"https://github.com/huuhghhgyg/MicroCityNotes/issues/new",target:"_blank",rel:"noopener noreferrer"},_=d("strong",null,"反馈",-1);function u(v,b){const e=r("RouterLink"),c=r("ExternalLinkIcon");return a(),n("div",null,[m,d("p",null,[t("在这里我们简要介绍按钮面板，脚本编辑器，场景画布和消息栏将在后续章节中详细讨论："),i(e,{to:"/docs/web/3.2_editing_scripts.html"},{default:s(()=>[t("3.2 编辑脚本")]),_:1}),t("，"),i(e,{to:"/docs/web/3.3_running_scripts.html"},{default:s(()=>[t("3.3 运行脚本")]),_:1}),t("和"),i(e,{to:"/docs/web/3.4_navigating_scenes.html"},{default:s(()=>[t("3.4 导航场景")]),_:1}),t("。")]),l,d("blockquote",null,[d("p",null,[t("本文使用ChatGPT翻译，如有遗漏请"),d("a",p,[_,i(c)]),t("。")])])])}const f=g(h,[["render",u],["__file","3.1_ui_overview.html.vue"]]);export{f as default};
