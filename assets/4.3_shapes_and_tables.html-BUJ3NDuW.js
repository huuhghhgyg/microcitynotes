import{_ as o}from"./icon_script_editor-S0ak5iz0.js";import{_ as l,c as u,b as s,a as n,f as p,g as e,e as i,r as c,o as r}from"./app-DBXIMjCi.js";const d={};function k(h,a){const t=c("RouteLink");return r(),u("div",null,[a[24]||(a[24]=s("h1",{id:"_4-3-矢量图形和表格",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_4-3-矢量图形和表格"},[s("span",null,"4.3 矢量图形和表格")])],-1)),s("p",null,[a[9]||(a[9]=n("用户可以使用 MicroCity 脚本操作 ")),a[10]||(a[10]=s("strong",null,"形状（Shapes）",-1)),a[11]||(a[11]=n(" 和 ")),a[12]||(a[12]=s("strong",null,"表格（Tables）",-1)),a[13]||(a[13]=n("。有关")),s("strong",null,[a[5]||(a[5]=n("形状（Shapes）")),s("strong",null,[a[2]||(a[2]=n("的详细数据结构，您可以参考上一章节 ")),p(t,{to:"/docs/desktop/2.2_searching_for_countries.html#gis-data-structure"},{default:e(()=>a[0]||(a[0]=[n("2.2")])),_:1}),a[3]||(a[3]=n(" 和 ")),p(t,{to:"/docs/desktop/3.2_vector_shapes.html"},{default:e(()=>a[1]||(a[1]=[n("3.2")])),_:1}),a[4]||(a[4]=n("。由于"))]),a[6]||(a[6]=n("形状（Shapes）")),a[7]||(a[7]=s("strong",null,"可以被视为带有地理数据的",-1)),a[8]||(a[8]=n("表格（Tables）"))]),a[14]||(a[14]=n("，因此一些用于表格数据操作的嵌入函数可以在 ")),a[15]||(a[15]=s("strong",null,"形状（Shapes）",-1)),a[16]||(a[16]=n(" 和 ")),a[17]||(a[17]=s("strong",null,"表格（Tables）",-1)),a[18]||(a[18]=n(" 中同时使用。本章节的示例代码可以在 ")),a[19]||(a[19]=s("strong",null,"项目（Project）",-1)),a[20]||(a[20]=n(' 选项卡的"shapes_samples"文件夹中找到，该文件夹位于 ')),a[21]||(a[21]=s("img",{src:o,alt:"icon"},null,-1)),a[22]||(a[22]=s("strong",null,"ScriptEditor",-1)),a[23]||(a[23]=n("。"))]),a[25]||(a[25]=i(`<h2 id="表格数据操作" tabindex="-1"><a class="header-anchor" href="#表格数据操作"><span>表格数据操作</span></a></h2><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">CreateShapes</span> <span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Point|Line|Polygon&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回一个 <em>Shapes</em> 对象。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">CreateTable</span> <span class="token punctuation">(</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回一个 <em>Table</em> 对象。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetFieldCount</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回 <em>Shapes</em> 或 <em>Table</em> 中字段的数量。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetField</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">,</span> iField<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>输入字段的索引（从 1 开始）并返回字段名和类型（&quot;Int&quot;、&quot;Float&quot;、&quot;Double&quot; 或 &quot;String&quot;）。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">AddField</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">,</span> <span class="token string">&quot;field1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Int|Float|Double|String&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&quot;field2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Int|Float|Double|String&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>向 *Table 或 <em>Shapes</em> 添加字段，并按照顺序返回布尔值（<em>true</em> 或 <em>false</em>）。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">DelField</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">,</span> iField<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>成功删除字段时返回 <em>true</em>。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetRecCount</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回 <em>Shapes</em> 或 <em>Table</em> 中的记录总数。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">AddRecord</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>向 <em>Shapes</em> 或 <em>Table</em> 添加一条记录，并返回该记录的索引。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetValue</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">,</span> <span class="token string">&quot;field_name&quot;</span><span class="token punctuation">,</span> index1 <span class="token punctuation">[</span><span class="token punctuation">,</span> index2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>从指定字段和 <em>Shapes</em> 或 <em>Table</em> 的索引中检索值。按照索引的顺序返回多个值。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetValue</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">&quot;field_name&quot;</span><span class="token punctuation">,</span> index1 <span class="token punctuation">[</span><span class="token punctuation">,</span> index2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>为指定字段和 <em>Shapes</em> 或 <em>Table</em> 的索引设置值。</p><h2 id="地理数据操作" tabindex="-1"><a class="header-anchor" href="#地理数据操作"><span>地理数据操作</span></a></h2><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetSelections</span> <span class="token punctuation">(</span>Shapes<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>从<em>Shapes</em>中返回所选的形状对象。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetShape</span> <span class="token punctuation">(</span>Shapes<span class="token punctuation">,</span> index1 <span class="token punctuation">[</span><span class="token punctuation">,</span> index2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>按索引顺序从<em>Shapes</em>中返回<em>Shape</em>对象。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">AddShape</span> <span class="token punctuation">(</span>Shapes<span class="token punctuation">,</span> Shape<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>将<em>Shape</em>对象添加到<em>Shapes</em>中并返回其索引。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">AddShape</span> <span class="token punctuation">(</span>Shapes <span class="token punctuation">[</span><span class="token punctuation">,</span> x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>将定义为点的<em>Shape</em>对象添加到<em>Shapes</em>中。返回<em>Shape</em>对象和索引。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">DelShape</span> <span class="token punctuation">(</span>Shape<span class="token operator">|</span>Shapes<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>删除一个<em>Shape</em>或<em>Shapes</em>对象，如果成功则返回true。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">AddPoint</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token punctuation">[</span><span class="token punctuation">,</span> iPart <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>在<em>Shape</em>中添加一个点，如果成功则返回true。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">InsPoint</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token punctuation">[</span><span class="token punctuation">,</span> iPoint <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> iPart <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>在<em>Shape</em>中插入一个点，如果成功则返回true。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetPoint</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token punctuation">[</span><span class="token punctuation">,</span> iPoint <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> iPart <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>设置<em>Shape</em>中的点坐标，如果成功则返回true。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">DelPoint</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">,</span> iPoint <span class="token punctuation">[</span><span class="token punctuation">,</span> iPart<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>从<em>Shape</em>中删除位置为iPoint的一个点，如果成功则返回true。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">DelPart</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">,</span> iPart<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>从<em>Shape</em>中删除一个部分，如果成功则返回true。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetPartCount</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回<em>Shape</em>中部分的数量。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetPointCount</span> <span class="token punctuation">(</span>Shape <span class="token punctuation">[</span><span class="token punctuation">,</span> iPart<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回<em>Shape</em>中点的数量。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetPointXY</span> <span class="token punctuation">(</span>Shape <span class="token punctuation">[</span><span class="token punctuation">,</span> iPoint <span class="token punctuation">[</span><span class="token punctuation">,</span> iPart <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>从<em>Shape</em>或指定点的坐标中返回所有点的坐标：x1，y1，x2，y2，...。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">CopyShapeTo</span> <span class="token punctuation">(</span>TargetShapes<span class="token punctuation">,</span> dx<span class="token punctuation">,</span> dy<span class="token punctuation">,</span> Shape1 <span class="token punctuation">[</span><span class="token punctuation">,</span> Shape2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>将<em>Shape</em>对象复制到目标<em>Shapes</em>，并进行相对平移（dx，dy），返回新的<em>Shape</em>对象。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">MoveShapeTo</span> <span class="token punctuation">(</span>dx<span class="token punctuation">,</span> dy<span class="token punctuation">,</span> Shape1 <span class="token punctuation">[</span><span class="token punctuation">,</span> Shape2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>将<em>Shape</em>对象平移到其相对位置（dx，dy）。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetCenterXY</span> <span class="token punctuation">(</span>Shapes<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回<em>Shapes</em>的中心坐标（x，y）。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetCenterXY</span> <span class="token punctuation">(</span>Shapes<span class="token punctuation">,</span> index1 <span class="token punctuation">[</span><span class="token punctuation">,</span> index2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回在<em>Shapes</em>中由索引指定的<em>Shape</em>对象的中心坐标（x1，y1，x2，y2，...）。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetCenterXY</span> <span class="token punctuation">(</span>Shape1 <span class="token punctuation">[</span><span class="token punctuation">,</span> Shape2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回<em>Shape</em>对象的中心坐标（x1，y1，x2，y2，...）。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetDistance</span> <span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2 <span class="token punctuation">[</span><span class="token punctuation">,</span> x3<span class="token punctuation">,</span> y3<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回每两个坐标（x，y）对之间的总距离。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetShapeLen</span> <span class="token punctuation">(</span>Shape1 <span class="token punctuation">[</span><span class="token punctuation">,</span> Shape2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回<em>Shape</em>对象的长度。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetShapeArea</span> <span class="token punctuation">(</span>Shape1 <span class="token punctuation">[</span><span class="token punctuation">,</span> Shape2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回<em>Shape</em>对象的面积。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetShapeType</span> <span class="token punctuation">(</span>Shape<span class="token operator">|</span>Shapes<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回<em>Shapes</em>或<em>Shape</em>对象的类型（&quot;Point&quot;，&quot;Line&quot;或&quot;Polygon&quot;）。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetExtent</span> <span class="token punctuation">(</span>Shapes<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回<em>Shapes</em>的范围坐标（Lx，By，Rx，Ty）。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetExtent</span> <span class="token punctuation">(</span>Shapes<span class="token punctuation">,</span> index<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回<em>Shapes</em>中索引为index的<em>Shape</em>的范围坐标（Lx，By，Rx，Ty）。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetExtent</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回<em>Shape</em>的范围坐标（Lx，By，Rx，Ty）。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetIntersection</span> <span class="token punctuation">(</span>ShapeA<span class="token punctuation">,</span> ShapeB<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回两个<em>Shapes</em>的交集的<em>Shape</em>（<em>Point</em>，<em>Line</em>或<em>Polygon</em>）对象。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetValue</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">,</span> <span class="token string">&quot;field_name&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>返回<em>Shape</em>的指定字段的值。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetValue</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">,</span> value1<span class="token punctuation">,</span> <span class="token string">&quot;field_name1&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> value2<span class="token punctuation">,</span> <span class="token string">&quot;field_name2&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>为<em>Shape</em>的不同字段设置值。</p><div class="language-lua" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetCoorSys</span> <span class="token punctuation">(</span><span class="token string">&quot;Earth&quot;</span><span class="token operator">|</span><span class="token string">&quot;Non-Earth&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre></div><p>设置坐标系统。如果使用&quot;Earth&quot;，距离、长度和面积将根据地球椭球坐标系统计算。默认情况下使用&quot;Non-Earth&quot;，即笛卡尔坐标系统。</p><blockquote><p>这篇文章使用ChatGPT翻译自其他语言，如果有问题请在<a href="https://github.com/huuhghhgyg/MicroCityNotes/issues/new" target="_blank" rel="noopener noreferrer"><strong>反馈</strong></a>页面提交反馈。</p></blockquote>`,81))])}const S=l(d,[["render",k],["__file","4.3_shapes_and_tables.html.vue"]]),v=JSON.parse('{"path":"/docs/desktop/4.3_shapes_and_tables.html","title":"4.3 矢量图形和表格","lang":"zh-CN","frontmatter":{"prev":"./4.2_ui_control.md","next":"./4.4_grids.md","description":"4.3 矢量图形和表格 用户可以使用 MicroCity 脚本操作 形状（Shapes） 和 表格（Tables）。有关形状（Shapes）的详细数据结构，您可以参考上一章节 和 。由于形状（Shapes）可以被视为带有地理数据的表格（Tables），因此一些用于表格数据操作的嵌入函数可以在 形状（Shapes） 和 表格（Tables） 中同时使用。...","head":[["meta",{"property":"og:url","content":"https://huuhghhgyg.github.io/MicroCityNotes/docs/desktop/4.3_shapes_and_tables.html"}],["meta",{"property":"og:site_name","content":"MicroCity笔记"}],["meta",{"property":"og:title","content":"4.3 矢量图形和表格"}],["meta",{"property":"og:description","content":"4.3 矢量图形和表格 用户可以使用 MicroCity 脚本操作 形状（Shapes） 和 表格（Tables）。有关形状（Shapes）的详细数据结构，您可以参考上一章节 和 。由于形状（Shapes）可以被视为带有地理数据的表格（Tables），因此一些用于表格数据操作的嵌入函数可以在 形状（Shapes） 和 表格（Tables） 中同时使用。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-19T05:56:24.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-19T05:56:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.3 矢量图形和表格\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-19T05:56:24.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"表格数据操作","slug":"表格数据操作","link":"#表格数据操作","children":[]},{"level":2,"title":"地理数据操作","slug":"地理数据操作","link":"#地理数据操作","children":[]}],"git":{"updatedTime":1710827784000,"contributors":[{"name":"huuhghhgyg","email":"huuhghhgyg@outlook.com","commits":7,"url":"https://github.com/huuhghhgyg"}]},"filePathRelative":"docs/desktop/4.3_shapes_and_tables.md","autoDesc":true,"excerpt":"\\n<p>用户可以使用 MicroCity 脚本操作 <strong>形状（Shapes）</strong> 和 <strong>表格（Tables）</strong>。有关<strong>形状（Shapes）<strong>的详细数据结构，您可以参考上一章节 <a href=\\"/MicroCityNotes/docs/desktop/2.2_searching_for_countries.html#gis-data-structure\\" target=\\"_blank\\">2.2</a> 和 <a href=\\"/MicroCityNotes/docs/desktop/3.2_vector_shapes.html\\" target=\\"_blank\\">3.2</a>。由于</strong>形状（Shapes）<strong>可以被视为带有地理数据的</strong>表格（Tables）</strong>，因此一些用于表格数据操作的嵌入函数可以在 <strong>形状（Shapes）</strong> 和 <strong>表格（Tables）</strong> 中同时使用。本章节的示例代码可以在 <strong>项目（Project）</strong> 选项卡的\\"shapes_samples\\"文件夹中找到，该文件夹位于 <strong>ScriptEditor</strong>。</p>"}');export{S as comp,v as data};
