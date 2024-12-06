import{_ as s,c as a,e as t,o as p}from"./app-TX6nqiCH.js";const e={};function o(l,n){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="_4-5-混合整数规划" tabindex="-1"><a class="header-anchor" href="#_4-5-混合整数规划"><span>4.5 混合整数规划</span></a></h1><p>线性规划和混合整数规划是运筹学中重要的工具，在这里提供了解决这些模型的函数和一些示例。请注意，调用 <code>mip:func(args)</code> 是对 <code>math.func(mip, args)</code> 的语法糖。</p><h2 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h2><p>为了方便后面的解释，请先看一个典型的 <strong>线性规划(LP)</strong> 模型:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">       min     d1*x1 +  d2*x2 + ... +  dn*xn</span>
<span class="line">subject to    a11*x1 + a12*x2 + ... + a1n*xn &gt;= b1</span>
<span class="line">              a21*x1 + a22*x2 + ... + a2n*xn &gt;= b2</span>
<span class="line">                   ........................</span>
<span class="line">              am1*x1 + am2*x2 + ... + amn*xn &gt;= bn</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个模型有 n 个<strong>列</strong>的变量和 m + 1 个<strong>行</strong>的下界约束（目标函数也是一种特殊的不等式）。还有 m 个对偶变量。<strong>混合整数规划(MIP)</strong> 问题是一个线性规划问题，其中一些变量需要额外要求为整数。为了简洁地构建 mip 模型并解决它们，我们设计了以下六个函数。请注意，调用 <code>mip:func(args)</code> 是对 <code>math.func(mip, args)</code> 的语法糖。</p><p><a id="math.newmip"> math.newmip ([fin]) </a></p><p>创建一个新的 mip 模型或从文件 fin 中读取以 CPLEX LP 格式表示的模型并返回。默认情况下，每个列变量都大于或等于 0。</p><p><a id="mip:addrow"> mip:addrow (coltab|colname, bndtype [, b [, rowname]]) </a></p><p>添加一行到模型 mip。</p><ul><li>表 coltab 包含列变量所需的系数(可以是稀疏的)，例如 &#39;{1, 3, [5]=7}&#39; 或 &#39;{x1=1, x2=3, x5=7}&#39;。一个新的以数字索引命名的列变量将自动命名为&quot;cn&quot;，其中 n 是当前最大列数加1。</li><li>colname 是一个带系数为1的单个列变量名称。</li><li>如果 bndtype 是 &quot;min&quot;, &quot;max&quot;, &quot;&lt;=&quot;, &quot;&lt;&quot;, &quot;&gt;=&quot;, &quot;&gt;&quot;, &quot;=&quot;, &quot;==&quot;, &quot;unb&quot;, &quot;bin&quot;, &quot;int&quot; 中的一个，则 bndtype 代表不同的边界类型。</li><li>当 bndtype 是 &quot;&lt;=&quot;, &quot;&lt;&quot;, &quot;&gt;=&quot;, &quot;&gt;&quot;, &quot;=&quot;, &quot;==&quot; 时，b（不等式的右值）和 rowname 适用。</li><li>默认情况下，rowname（行或对偶变量名称）是 &quot;rm&quot;，其中 m 是当前最大行数加1.</li></ul><p><a id="mip:delrow"> mip:delrow (rownum|rowname) </a></p><p>从 mip 模型中删除一行。</p><p><a id="mip:addcol"> mip:addcol (rowtab, bndtype, d [, colname]) </a></p><p>在模型 mip 中添加一列。</p><ul><li>表 rowtab 包含行变量需要的系数（可以是稀疏的），例如&#39;{2, 4，[6]=8}&#39;或&#39;{u1=2, u2=4, u6=8}&#39;。一个新的数字索引的行变量会被自动命名为&quot;rm&quot;，其中 m 是当前行数的最大值加 1。</li><li>bndtype 是 &quot;~&quot;、&quot;&lt;=&quot;、&quot;&lt;&quot;、&quot;&gt;=&quot;、&quot;&gt;&quot;、&quot;=&quot;、&quot;==&quot; 之一，代表不同的<strong>对偶问题</strong>边界类型。请注意，当对偶问题的不等式作为列添加到原问题中时，系数的符号需要重新判断。例如，如果带有对偶约束&quot;&gt;&quot;符号的不等式被添加到最小化原问题的列中，系数的符号需要翻转。一个使用 bndtype &quot;~&quot; 的列可以直接添加到原模型中。</li><li>d 是<strong>对偶不等式</strong>的右值。</li><li>默认情况下，colname 为&quot;cn&quot;，其中 n 是当前列数的最大值加 1。</li></ul><p><a id="mip:delcol"> mip:delcol (colnum|colname) </a></p><p>从 mip 模型中删除一列。</p><p><a id="mip:solve"> mip:solve ([fout]) </a></p><p>解决 mip 模型（将模型以 CPLEX LP 格式保存到文件 fout）。</p><ul><li>对于线性规划，返回以下之一：&quot;optimal&quot;、&quot;feasible&quot;、&quot;infeasible&quot;、&quot;nofeasible&quot;、&quot;unbounded&quot;、&quot;undefined&quot;。将目标、列（原）变量和行（对偶）变量的值分别写入 mip 模型的 &#39;obj&#39;、&#39;colname&#39; 和 &#39;rowname&#39; 属性。</li><li>对于混合整数规划，返回以下之一：&quot;optimal&quot;、&quot;feasible&quot;、&quot;nofeasible&quot;、&quot;undefined&quot;。将目标、列变量的值分别写入 mip 模型的 &#39;obj&#39;、&#39;colname&#39; 属性。</li></ul><h2 id="示例模型" tabindex="-1"><a class="header-anchor" href="#示例模型"><span>示例模型</span></a></h2><p>这里展示两个简单的模型，首先是一个包含两个变量和两个约束的混合整数规划模型：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">       max     143x1 + 60x2</span>
<span class="line">subject to     110x1 + 30x2 &lt;= 4000</span>
<span class="line">                  x1 +   x2 &lt;= 75</span>
<span class="line">                  x1        ∈ {0, 1, 2, ...}</span>
<span class="line">                         x2 ∈ {0, 1}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将数学模型翻译成代码：</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> mip <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">newmip</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                   <span class="token comment">--创建一个整数规划</span></span>
<span class="line"></span>
<span class="line">mip<span class="token punctuation">:</span><span class="token function">addrow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x1 <span class="token operator">=</span> <span class="token number">143</span><span class="token punctuation">,</span> x2 <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;max&#39;</span><span class="token punctuation">)</span>      <span class="token comment">--设置目标函数</span></span>
<span class="line">mip<span class="token punctuation">:</span><span class="token function">addrow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x1 <span class="token operator">=</span> <span class="token number">110</span><span class="token punctuation">,</span> x2 <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span> <span class="token number">4000</span><span class="token punctuation">)</span> <span class="token comment">--添加第一个约束</span></span>
<span class="line">mip<span class="token punctuation">:</span><span class="token function">addrow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>x1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>   x2 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token string">&#39;&lt;=&#39;</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">)</span>   <span class="token comment">--添加第二个约束</span></span>
<span class="line">mip<span class="token punctuation">:</span><span class="token function">addrow</span><span class="token punctuation">(</span><span class="token string">&#39;x1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;int&#39;</span><span class="token punctuation">)</span>                     <span class="token comment">--设置x1为整数边界</span></span>
<span class="line">mip<span class="token punctuation">:</span><span class="token function">addrow</span><span class="token punctuation">(</span><span class="token string">&#39;x2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bin&#39;</span><span class="token punctuation">)</span>                     <span class="token comment">--设置x2为二进制边界</span></span>
<span class="line">mip<span class="token punctuation">:</span><span class="token function">solve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                                 <span class="token comment">--解决模型               </span></span>
<span class="line"></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>mip<span class="token punctuation">.</span>obj<span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> mip<span class="token punctuation">.</span>x1<span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> mip<span class="token punctuation">.</span>x2<span class="token punctuation">)</span>    <span class="token comment">--打印目标函数和变量的值</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们展示一个略微复杂一点的例子，这是一个线性规划，其中目标函数和约束条件使用缩写表示：</p><p><img src="https://mcw.zhhuu.top/doc/img/lp.svg" alt=""></p><p>在这个模型中有100个变量和100个约束条件，无法手动逐个添加。它们需要通过循环进行处理：</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> lp <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">newmip</span><span class="token punctuation">(</span><span class="token punctuation">)</span>         <span class="token comment">--创建一个线性规划</span></span>
<span class="line"><span class="token keyword">local</span> c <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>                     <span class="token comment">--创建一个系数数组</span></span>
<span class="line"><span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token keyword">do</span>                <span class="token comment">--遍历数组</span></span>
<span class="line">     c<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i                    <span class="token comment">--设置系数</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line">lp<span class="token punctuation">:</span><span class="token function">addrow</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> <span class="token string">&quot;min&quot;</span><span class="token punctuation">)</span>              <span class="token comment">--设置目标函数</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token keyword">do</span>                <span class="token comment">--遍历100个约束条件</span></span>
<span class="line">     <span class="token keyword">local</span> w <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>                <span class="token comment">--创建约束系数数组</span></span>
<span class="line">     <span class="token keyword">for</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span> <span class="token keyword">do</span>           <span class="token comment">--遍历100个约束系数</span></span>
<span class="line">         <span class="token keyword">if</span> i<span class="token operator">==</span>j <span class="token keyword">then</span>            <span class="token comment">--如果行号等于列号</span></span>
<span class="line">             w<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>            <span class="token comment">--将系数设为1</span></span>
<span class="line">         <span class="token keyword">else</span></span>
<span class="line">             w<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>            <span class="token comment">--否则将系数设为0</span></span>
<span class="line">         <span class="token keyword">end</span></span>
<span class="line">     <span class="token keyword">end</span></span>
<span class="line">     lp<span class="token punctuation">:</span><span class="token function">addrow</span><span class="token punctuation">(</span>w<span class="token punctuation">,</span> <span class="token string">&quot;&gt;=&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>       <span class="token comment">--向模型添加约束</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line">lp<span class="token punctuation">:</span><span class="token function">solve</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                       <span class="token comment">--解决模型</span></span>
<span class="line"></span>
<span class="line"><span class="token function">print</span><span class="token punctuation">(</span>lp<span class="token punctuation">[</span><span class="token string">&#39;obj&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>                 <span class="token comment">--打印目标值</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>本文使用ChatGPT翻译，如有遗漏请<a href="https://github.com/huuhghhgyg/MicroCityNotes/issues/new" target="_blank" rel="noopener noreferrer"><strong>反馈</strong></a>。</p></blockquote>`,31)]))}const c=s(e,[["render",o],["__file","4.5_mixed_integer_programming.html.vue"]]),u=JSON.parse('{"path":"/docs/web/4.5_mixed_integer_programming.html","title":"4.5 混合整数规划","lang":"zh-CN","frontmatter":{"description":"4.5 混合整数规划 线性规划和混合整数规划是运筹学中重要的工具，在这里提供了解决这些模型的函数和一些示例。请注意，调用 mip:func(args) 是对 math.func(mip, args) 的语法糖。 函数 为了方便后面的解释，请先看一个典型的 线性规划(LP) 模型: 这个模型有 n 个列的变量和 m + 1 个行的下界约束（目标函数也是一...","head":[["meta",{"property":"og:url","content":"https://huuhghhgyg.github.io/MicroCityNotes/docs/web/4.5_mixed_integer_programming.html"}],["meta",{"property":"og:site_name","content":"MicroCity笔记"}],["meta",{"property":"og:title","content":"4.5 混合整数规划"}],["meta",{"property":"og:description","content":"4.5 混合整数规划 线性规划和混合整数规划是运筹学中重要的工具，在这里提供了解决这些模型的函数和一些示例。请注意，调用 mip:func(args) 是对 math.func(mip, args) 的语法糖。 函数 为了方便后面的解释，请先看一个典型的 线性规划(LP) 模型: 这个模型有 n 个列的变量和 m + 1 个行的下界约束（目标函数也是一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mcw.zhhuu.top/doc/img/lp.svg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-06-09T05:29:11.000Z"}],["meta",{"property":"article:modified_time","content":"2024-06-09T05:29:11.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.5 混合整数规划\\",\\"image\\":[\\"https://mcw.zhhuu.top/doc/img/lp.svg\\"],\\"dateModified\\":\\"2024-06-09T05:29:11.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[]},{"level":2,"title":"示例模型","slug":"示例模型","link":"#示例模型","children":[]}],"git":{"updatedTime":1717910951000,"contributors":[{"name":"huuhghhgyg","email":"huuhghhgyg@outlook.com","commits":4,"url":"https://github.com/huuhghhgyg"}]},"filePathRelative":"docs/web/4.5_mixed_integer_programming.md","autoDesc":true,"excerpt":"\\n<p>线性规划和混合整数规划是运筹学中重要的工具，在这里提供了解决这些模型的函数和一些示例。请注意，调用 <code>mip:func(args)</code> 是对 <code>math.func(mip, args)</code> 的语法糖。</p>\\n<h2>函数</h2>\\n<p>为了方便后面的解释，请先看一个典型的 <strong>线性规划(LP)</strong> 模型:</p>\\n<div class=\\"language-text line-numbers-mode\\" data-highlighter=\\"prismjs\\" data-ext=\\"text\\" data-title=\\"text\\"><pre><code><span class=\\"line\\">       min     d1*x1 +  d2*x2 + ... +  dn*xn</span>\\n<span class=\\"line\\">subject to    a11*x1 + a12*x2 + ... + a1n*xn &gt;= b1</span>\\n<span class=\\"line\\">              a21*x1 + a22*x2 + ... + a2n*xn &gt;= b2</span>\\n<span class=\\"line\\">                   ........................</span>\\n<span class=\\"line\\">              am1*x1 + am2*x2 + ... + amn*xn &gt;= bn</span>\\n<span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{c as comp,u as data};