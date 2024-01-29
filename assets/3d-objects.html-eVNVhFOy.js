import{_ as c,a as l,b as u,c as i}from"./polygon_sizes-bVJYQmiT.js";import{_ as r,r as o,o as d,c as k,a as n,b as a,d as s,w as h,e as t}from"./app-SyrhPviJ.js";const b={},g=t(`<h1 id="_3d-对象" tabindex="-1"><a class="header-anchor" href="#_3d-对象" aria-hidden="true">#</a> 3D 对象</h1><p>本节将介绍 MicroCity Web 中的三维场景对象及其控制函数。</p><h2 id="添加对象" tabindex="-1"><a class="header-anchor" href="#添加对象" aria-hidden="true">#</a> 添加对象</h2><p>向场景中添加对象，函数形式如下</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token punctuation">[</span>类型<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>key1 <span class="token operator">=</span> value1<span class="token punctuation">,</span> key2 <span class="token operator">=</span> value2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="对象可选属性列表" tabindex="-1"><a class="header-anchor" href="#对象可选属性列表" aria-hidden="true">#</a> 对象可选属性列表</h2><p>添加到场景中的对象通常支持设置以下属性中的某些属性</p>`,7),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"对象属性"),n("th",null,"含义")])],-1),m=n("td",{style:{"text-align":"center"}},[n("code",null,"color")],-1),y=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"opacity")]),n("td",null,"透明度")],-1),v=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"hcolor")]),n("td",null,"选中时的颜色")],-1),f=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"size")]),n("td",null,"对象的大小，默认值为1")],-1),_=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"length")]),n("td",null,[a("对象的长度，常用于 "),n("a",{href:"#box"},"box(立方体)")])],-1),j=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"width")]),n("td",null,[a("对象的宽度，常用于 "),n("a",{href:"#box"},"box(立方体)")])],-1),w=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"height")]),n("td",null,[a("对象的高度，常用于 "),n("a",{href:"#box"},"box(立方体)")])],-1),z=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"radius")]),n("td",null,"对象圆角大小")],-1),q=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"segments")]),n("td",null,[a("份数，通常用于设置 "),n("a",{href:"#sphere"},"sphere(球体)"),a(" 绘制的精度")])],-1),E=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"selectable")]),n("td",null,"是否可被选中")],-1),A=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"name")]),n("td",null,"对象名称")],-1),R=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"text")]),n("td",null,"对象文本值")],-1),B=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"font")]),n("td",null,"文本字体")],-1),C=n("tr",null,[n("td",{style:{"text-align":"center"}},[n("code",null,"vertices")]),n("td",null,"构成对应对象的点集合")],-1),M=t(`<p>支持添加到场景中的类型如下</p><h2 id="对象类型" tabindex="-1"><a class="header-anchor" href="#对象类型" aria-hidden="true">#</a> 对象类型</h2><h3 id="对象类型列表" tabindex="-1"><a class="header-anchor" href="#对象类型列表" aria-hidden="true">#</a> 对象类型列表</h3><ul><li><code>label</code>：<a href="#label">文本标签</a></li><li><code>points</code>：<a href="#points">点集合</a></li><li><code>polyline</code>：<a href="#polyline">线段集合</a></li><li><code>box</code>：<a href="#box">立方体</a></li><li><code>sphere</code>：<a href="#sphere">球体</a></li><li><code>polygon</code>：<a href="#polygon">多边形</a></li><li><code>light</code>：<a href="#light">光源</a></li><li><code>mesh</code>：<a href="#mesh">点构成的面</a></li></ul><div class="hint-container note"><p class="hint-container-title">注释</p><p>为了简洁起见，下方示例的对象可选属性中只展示对应对象的关键属性。其他通用的属性可以参考 <a href="#%E5%AF%B9%E8%B1%A1%E5%8F%AF%E9%80%89%E5%B1%9E%E6%80%A7%E5%88%97%E8%A1%A8">对象可选属性列表</a> 自行添加。</p></div><h3 id="label" tabindex="-1"><a class="header-anchor" href="#label" aria-hidden="true">#</a> label</h3><p><code>label</code> 是文本标签。可以在 <code>text</code> 属性中设置label的文本。</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&#39;label&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>text <span class="token operator">=</span> <span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="points" tabindex="-1"><a class="header-anchor" href="#points" aria-hidden="true">#</a> points</h3><p><code>points</code> 是点集合。可以只创建单个点，也可以创建多个点。每个点都有三个维度的坐标以确定其在三维空间中的位置。点的个数通过 <code>vertices</code> 属性确定。</p><p>下面是一个创建 <code>points</code> 点集对象的示例</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 在坐标为(5,5,5)的位置创建一个点</span>
scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;points&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>vertices <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">-- 第一个点的坐标为(0,0,0)，第二个点的坐标为(5,5,5)</span>
scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;points&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>vertices <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">,</span> size <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="polyline" tabindex="-1"><a class="header-anchor" href="#polyline" aria-hidden="true">#</a> polyline</h3><p><code>polyline</code> 是线段集合。当在vertices属性中输入多个点的坐标时，将会依次根据点坐标连线，得到线段集合。</p><p>因此，虽然下面两个例子中使用了相同的点坐标，但是由于点坐标输入顺序不同，得到的结果也不同。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;polyline&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>vertices <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;polyline&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>vertices <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">,</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div style="text-align:center;"><p><img src="`+c+`" alt="polyline点顺序对比图"></p><p>polyline点顺序对比图</p></div><blockquote><p><code>polyline</code> 没有 <code>size</code> 属性</p></blockquote><h3 id="box" tabindex="-1"><a class="header-anchor" href="#box" aria-hidden="true">#</a> box</h3><p><code>box</code> 是长方体。主要通过 <code>length</code>、<code>width</code> 和 <code>height</code> 属性修改其形状。</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>length <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> height <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><code>box</code> 对象的重要可选属性</p><table><thead><tr><th style="text-align:center;">属性</th><th>含义</th></tr></thead><tbody><tr><td style="text-align:center;"><code>length</code></td><td>立方体的长度</td></tr><tr><td style="text-align:center;"><code>width</code></td><td>立方体的宽度</td></tr><tr><td style="text-align:center;"><code>height</code></td><td>立方体的高度</td></tr></tbody></table><p>基于以上三个属性，我们可以修改默认示例代码中旋转的<code>box</code>的形状。</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">--添加了length, width, height三个属性（不添加默认都为1）</span>
<span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>length <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">,</span> width <span class="token operator">=</span> <span class="token number">4</span><span class="token punctuation">,</span> height <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">local</span> x <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">local</span> y <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">local</span> z <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">do</span>
	x <span class="token operator">=</span> x <span class="token operator">+</span> <span class="token number">0.1</span>
	y <span class="token operator">=</span> y <span class="token operator">+</span> <span class="token number">0.1</span>
	obj<span class="token punctuation">:</span><span class="token function">setrot</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div style="text-align:center;"><p><img src="`+l+`" alt="不同长宽高设置的box"></p><p>不同长宽高设置的box</p></div><h3 id="sphere" tabindex="-1"><a class="header-anchor" href="#sphere" aria-hidden="true">#</a> sphere</h3><p><code>sphere</code> 是球体。可以通过 <code>radius</code> 属性修改其大小，还可以通过设置 <code>segment</code> 属性设置其模型质量。具体可以参考内置示例中地球的例子。</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&#39;sphere&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>radius<span class="token operator">=</span><span class="token number">15</span><span class="token punctuation">,</span> segments<span class="token operator">=</span><span class="token number">360</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><p><code>sphere</code> 对象的可选属性</p><table><thead><tr><th style="text-align:center;">属性</th><th>含义</th></tr></thead><tbody><tr><td style="text-align:center;"><code>radius</code></td><td>球体的圆角大小。可以用于控制球体的大小。</td></tr><tr><td style="text-align:center;"><code>segments</code></td><td>球体的渲染面数。设置值越高球体的模型越精细。</td></tr></tbody></table><div style="text-align:center;"><p><img src="`+u+`" alt="不同segment对于相同sphere的影响"></p><p>不同segment对于相同sphere的影响</p></div><h3 id="polygon" tabindex="-1"><a class="header-anchor" href="#polygon" aria-hidden="true">#</a> polygon</h3><p><code>polygon</code> 是多边形。主要通过 <code>vertices</code> 属性对其进行设置。</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;polygon&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>vertices <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><blockquote><p>由于此处举例的多边形为正方形，因此看上去与上面介绍的 <code>box</code> 没什么差别。但是当形状设置为其他类型的多边形时（如三角形、五边形等），多边形的意义就能被体现出来了。</p></blockquote><table><thead><tr><th style="text-align:center;">属性</th><th style="text-align:left;">含义</th><th style="text-align:left;">说明</th></tr></thead><tbody><tr><td style="text-align:center;"><code>vertices</code></td><td style="text-align:left;">多边形的顶点</td><td style="text-align:left;">可以在 <code>vertices</code> 属性中依次设置每个点的三维坐标。第三维的坐标不会产生影响，但是起到占位作用。</td></tr><tr><td style="text-align:center;"><code>size</code></td><td style="text-align:left;">体积</td><td style="text-align:left;">由于第三维的坐标不影响，且多边形的顶点确定后面积就已经确定，因此 <code>size</code> 属性通过控制每个点的第三维坐标值来控制体积。</td></tr></tbody></table><div style="text-align:center;"><p><img src="`+i+`" alt="不同size对于相同polygon体积的影响"></p><p>不同size对于相同polygon体积的影响</p></div><h3 id="外部模型" tabindex="-1"><a class="header-anchor" href="#外部模型" aria-hidden="true">#</a> 外部模型</h3><p>引用外部文件。但是目前对于MicroCityWeb来说，暂时只能引用网站中内置的文件。</p><p>例如内置示例中引用网站内部文件在视图中生成一辆厢式货车：</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&#39;/res/2axle.glb&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>还可以通过引用文件的网址引用外部模型：</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&#39;https://huuhghhgyg.github.io/ModelResource/models/F16-lite.glb&#39;</span><span class="token punctuation">)</span>
</code></pre></div>`,44),F={class:"hint-container tip"},V=n("p",{class:"hint-container-title"},"提示",-1),L={href:"https://github.com/huuhghhgyg/ModelResource",target:"_blank",rel:"noopener noreferrer"},N={href:"https://github.com/huuhghhgyg/ModelResource",target:"_blank",rel:"noopener noreferrer"},W={class:"hint-container info"},D=n("p",{class:"hint-container-title"},"相关信息",-1),G={href:"http://3dviewer.net/",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,".glb",-1),P=t(`<h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> light</h3><p>设置光源的方向，可选参数 <code>vertices</code> 为一个三维向量，表示光的照射方向。由于MicroCity Web的场景中已经设置了很强的光源，因此此处不过多做介绍。</p><h3 id="mesh" tabindex="-1"><a class="header-anchor" href="#mesh" aria-hidden="true">#</a> mesh</h3><p>多个点构成的面，多见于引用的外部模型中。由于应用较少此处不做介绍。</p><h2 id="对象控制函数" tabindex="-1"><a class="header-anchor" href="#对象控制函数" aria-hidden="true">#</a> 对象控制函数</h2><p>下面假定要操作的三维对象为 <code>obj</code></p><h3 id="getpos" tabindex="-1"><a class="header-anchor" href="#getpos" aria-hidden="true">#</a> getpos()</h3><p>获取 <code>obj</code> 对象的位置坐标 (x, y, z)</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token operator">=</span> obj<span class="token punctuation">:</span><span class="token function">getpos</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="setpos" tabindex="-1"><a class="header-anchor" href="#setpos" aria-hidden="true">#</a> setpos()</h3><p>设置 <code>obj</code> 对象的位置坐标为 (x, y, z)</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code>obj<span class="token punctuation">:</span><span class="token function">setpos</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span>
</code></pre></div><h3 id="getrot" tabindex="-1"><a class="header-anchor" href="#getrot" aria-hidden="true">#</a> getrot()</h3><p>获取 <code>obj</code> 对象在 x, y, z 方向上的旋转弧度值 (rx, ry, rz)</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> rx<span class="token punctuation">,</span> ry<span class="token punctuation">,</span> rz <span class="token operator">=</span> obj<span class="token punctuation">:</span><span class="token function">getrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="setrot" tabindex="-1"><a class="header-anchor" href="#setrot" aria-hidden="true">#</a> setrot()</h3><p>设置 <code>obj</code> 对象在 x, y, z 方向上的旋转弧度值为 (rx, ry, rz)</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code>obj<span class="token punctuation">:</span><span class="token function">setrot</span><span class="token punctuation">(</span>rx<span class="token punctuation">,</span> ry<span class="token punctuation">,</span> rz<span class="token punctuation">)</span>
</code></pre></div><h3 id="getscale" tabindex="-1"><a class="header-anchor" href="#getscale" aria-hidden="true">#</a> getscale()</h3><p>获取 <code>obj</code> 对象在 x, y, z 方向上的缩放比例 sx, sy, sz</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> rx<span class="token punctuation">,</span> ry<span class="token punctuation">,</span> rz <span class="token operator">=</span> obj<span class="token punctuation">:</span><span class="token function">getrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="setscale" tabindex="-1"><a class="header-anchor" href="#setscale" aria-hidden="true">#</a> setscale()</h3><p>设置 <code>obj</code> 对象在 x, y, z 方向上的缩放比例 sx, sy, sz</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> rx<span class="token punctuation">,</span> ry<span class="token punctuation">,</span> rz <span class="token operator">=</span> obj<span class="token punctuation">:</span><span class="token function">getrot</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="getchildren" tabindex="-1"><a class="header-anchor" href="#getchildren" aria-hidden="true">#</a> getchildren()</h3><p>获取 <code>obj</code> 对象的子对象表</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> children <span class="token operator">=</span> obj<span class="token punctuation">:</span><span class="token function">getchildren</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="getchildren-1" tabindex="-1"><a class="header-anchor" href="#getchildren-1" aria-hidden="true">#</a> getchildren()</h3><p>设置 <code>obj</code> 对象的子对象表</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code>obj<span class="token punctuation">:</span><span class="token function">setchildren</span><span class="token punctuation">(</span>children_table<span class="token punctuation">)</span>
</code></pre></div><h3 id="getparent" tabindex="-1"><a class="header-anchor" href="#getparent" aria-hidden="true">#</a> getparent()</h3><p>获取 <code>obj</code> 对象的父对象</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> num <span class="token operator">=</span> obj<span class="token punctuation">:</span><span class="token function">getparent</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><blockquote><p>此处只返回一个数值</p></blockquote><h3 id="setparent" tabindex="-1"><a class="header-anchor" href="#setparent" aria-hidden="true">#</a> setparent()</h3><p>设置 <code>obj</code> 对象的父对象为 <code>obj0</code></p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code>obj<span class="token punctuation">:</span><span class="token function">setparent</span><span class="token punctuation">(</span>obj0<span class="token punctuation">)</span>
</code></pre></div><h3 id="delete" tabindex="-1"><a class="header-anchor" href="#delete" aria-hidden="true">#</a> delete()</h3><p>删除 <code>obj</code> 对象</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code>obj<span class="token punctuation">:</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div>`,40);function H(O,S){const p=o("RouterLink"),e=o("ExternalLinkIcon");return d(),k("div",null,[g,n("table",null,[x,n("tbody",null,[n("tr",null,[m,n("td",null,[a("对象的颜色。颜色的格式支持内置颜色、十六进制、RGB。与 "),s(p,{to:"/notes/3d-scene.html#bgcolor-%E5%9C%BA%E6%99%AF%E8%83%8C%E6%99%AF%E9%A2%9C%E8%89%B2"},{default:h(()=>[a("场景背景颜色")]),_:1}),a(" 的设置相同")])]),y,v,f,_,j,w,z,q,E,A,R,B,C])]),M,n("div",F,[V,n("p",null,[a("如果需要外部模型，可以到 "),n("a",L,[a("ModelResource仓库"),s(e)]),a(" 中找有没有合适的模型。如果其中没有合适的模型，但是你手上又有特别想用的模型，可以按照 "),n("a",N,[a("ModelResource仓库提供的指引"),s(e)]),a(" 进行Pull Request请求上传模型。一旦你的Pull Request被同意，Github工作流会立即将你上传的模型部署到仓库网页中供使用并以邮件形式通知。")])]),n("div",W,[D,n("p",null,[a("如果手中有三维模型资源，可以在"),n("a",G,[a("3D Viewer"),s(e)]),a("中查看，也可以通过这个网站导出为 "),I,a(" 模型")])]),P])}const K=r(b,[["render",H],["__file","3d-objects.html.vue"]]);export{K as default};