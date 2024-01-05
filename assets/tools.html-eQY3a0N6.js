import{_ as s,r as o,o as l,c as r,a as e,b as n,d as a,e as i}from"./app-IN4dFWf9.js";const c={},u=e("h1",{id:"有关工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#有关工具","aria-hidden":"true"},"#"),n(" 有关工具")],-1),d=e("p",null,"可能能够用到的工具",-1),h=e("h2",{id:"第三方工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#第三方工具","aria-hidden":"true"},"#"),n(" 第三方工具")],-1),p=e("p",null,"包括软件、网站等",-1),_={href:"https://mapshaper.org/",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,".geojson",-1),g=e("code",null,".shp",-1),f={href:"https://threejs.org/editor/",target:"_blank",rel:"noopener noreferrer"},m=i(`<h2 id="外部函数" tabindex="-1"><a class="header-anchor" href="#外部函数" aria-hidden="true">#</a> 外部函数</h2><p>适用于 MicroCity Web 的一些外部函数</p><h3 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法" aria-hidden="true">#</a> 使用方法</h3><p>推荐在线导入函数，这样可以保证使用的是最新版本的函数。也可以选择下载到本地再上传使用。</p><p>在线导入示例</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;正在下载依赖库到虚拟磁盘...&#39;</span><span class="token punctuation">)</span>
os<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.zhhuu.top/ModelResource/libs/文件名.lua&#39;</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;下载完成&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="导入函数" tabindex="-1"><a class="header-anchor" href="#导入函数" aria-hidden="true">#</a> 导入函数</h4><p>如果函数文件名为 <code>abc.lua</code>，则引用函数时使用 <code>require(&quot;abc&quot;)</code> 即可完成导入。</p><h3 id="函数列表" tabindex="-1"><a class="header-anchor" href="#函数列表" aria-hidden="true">#</a> 函数列表</h3><p>基本上都是一些自制的函数。</p><p>由于文件都放在 GitHub Page 上，在线导入可能速度较慢。可以选择下载到本地再上传使用。</p>`,11),k={href:"https://github.com/huuhghhgyg/ModelResource/tree/main/libs",target:"_blank",rel:"noopener noreferrer"},v=e("thead",null,[e("tr",null,[e("th",null,"名称"),e("th",null,"说明"),e("th",null,"链接")])],-1),x=e("td",null,"Histogram",-1),M=e("td",null,"用于绘制直方图",-1),R={href:"https://github.com/huuhghhgyg/ModelResource/blob/main/libs/Histogram.lua",target:"_blank",rel:"noopener noreferrer"},S=e("td",null,"Subplot",-1),y=e("td",null,"绘制多各图的情况下绘制子图",-1),T={href:"https://github.com/huuhghhgyg/ModelResource/blob/main/libs/Subplot.lua",target:"_blank",rel:"noopener noreferrer"},j=e("td",null,"TableString",-1),E=e("td",null,"将table转为字符串",-1),H={href:"https://github.com/huuhghhgyg/ModelResource/blob/main/libs/TableString.lua",target:"_blank",rel:"noopener noreferrer"},N=e("p",null,"🔨 持续更新...",-1);function V(q,w){const t=o("ExternalLinkIcon");return l(),r("div",null,[u,d,h,p,e("ul",null,[e("li",null,[e("a",_,[n("MapShaper"),a(t)]),n(" 地图编辑器。可以编辑"),b,n("文件并导出为"),g,n("文件")]),e("li",null,[e("a",f,[n("Three.js Editor"),a(t)]),n(" Three.js的在线3D对象编辑器。")])]),m,e("p",null,[n("本站提供的代码文件列表见 "),e("a",k,[n("ModelResource/libs"),a(t)]),n("，下方列表都为 ModelResource 仓库中的文件。")]),e("table",null,[v,e("tbody",null,[e("tr",null,[x,M,e("td",null,[e("a",R,[n("ModelResource/libs/Histogram.lua"),a(t)])])]),e("tr",null,[S,y,e("td",null,[e("a",T,[n("ModelResource/libs/Subplot.lua"),a(t)])])]),e("tr",null,[j,E,e("td",null,[e("a",H,[n("ModelResource/libs/TableString.lua"),a(t)])])])])]),N])}const C=s(c,[["render",V],["__file","tools.html.vue"]]);export{C as default};
