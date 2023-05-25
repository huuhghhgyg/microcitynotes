import{_ as n}from"./CommandBar-65d8510c.js";import{_ as s,o as a,c as e,e as t}from"./app-59a876a1.js";const p={},o=t(`<h1 id="离散事件模拟和程序控制" tabindex="-1"><a class="header-anchor" href="#离散事件模拟和程序控制" aria-hidden="true">#</a> 离散事件模拟和程序控制</h1><h2 id="协程" tabindex="-1"><a class="header-anchor" href="#协程" aria-hidden="true">#</a> 协程</h2><p>MicroCityWeb中提供了几个协程相关函数，方便实现事件调度法。如果主要用于实现事件调度法且尚不清楚事件调度法的原理，可以阅读 <a href="./timelapse#%E4%BA%8B%E4%BB%B6%E8%B0%83%E5%BA%A6%E6%B3%95">时间推进法-事件调度法</a> 部分了解相关概念。</p><h3 id="coroutine-queue" tabindex="-1"><a class="header-anchor" href="#coroutine-queue" aria-hidden="true">#</a> coroutine.queue</h3><p>将函数或协程添加到协程队列中等待</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code>coroutine<span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span>rt<span class="token punctuation">,</span> f<span class="token operator">|</span>co <span class="token punctuation">[</span><span class="token punctuation">,</span> 参数列表<span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><p>参数</p><table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td><code>rt</code></td><td>相对当前队列的时间，要求大于等于0。换句话说，也就是再过<code>rt</code>执行输入的函数或协程</td></tr><tr><td><code>f/co</code></td><td>函数或协程。如果是函数，只需要输入函数名</td></tr></tbody></table><h3 id="coroutine-qtime" tabindex="-1"><a class="header-anchor" href="#coroutine-qtime" aria-hidden="true">#</a> coroutine.qtime</h3><p>获取当前队列的时间</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> time <span class="token operator">=</span> coroutine<span class="token punctuation">.</span><span class="token function">qtime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h3><p>此处提供两个示例</p><ul><li><a href="#%E5%8D%8F%E7%A8%8B%E6%B7%BB%E5%8A%A0%E4%BB%BB%E5%8A%A1">协程添加任务</a>：使用协程添加任务，并在函数中显示当前队列时间</li><li><a href="#%E8%BD%A6%E8%BE%86%E7%A7%BB%E5%8A%A8">车辆移动</a>：使用协程实现以真实世界的时间刷新场景</li></ul><h4 id="协程添加任务" tabindex="-1"><a class="header-anchor" href="#协程添加任务" aria-hidden="true">#</a> 协程添加任务</h4><p>这个示例中展示了如何使用协程添加任务，并在函数中显示当前队列时间</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">function</span> <span class="token function">Show</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间：&quot;</span><span class="token punctuation">,</span>coroutine<span class="token punctuation">.</span><span class="token function">qtime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>
<span class="token keyword">function</span> <span class="token function">ShowShort</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;当前时间short：&quot;</span><span class="token punctuation">,</span>coroutine<span class="token punctuation">.</span><span class="token function">qtime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

coroutine<span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> Show<span class="token punctuation">)</span>
coroutine<span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">,</span> Show<span class="token punctuation">)</span>
coroutine<span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> ShowShort<span class="token punctuation">)</span>
coroutine<span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> Show<span class="token punctuation">)</span>

<span class="token comment">-- 结果：</span>
<span class="token comment">-- 当前时间： 5.0</span>
<span class="token comment">-- 当前时间： 10.0</span>
<span class="token comment">-- 当前时间short： 15.0</span>
<span class="token comment">-- 当前时间： 20.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="车辆移动" tabindex="-1"><a class="header-anchor" href="#车辆移动" aria-hidden="true">#</a> 车辆移动</h4><p>这个示例中展示了如何使用协程实现以真实世界的时间刷新场景</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>scene<span class="token punctuation">.</span><span class="token function">setenv</span><span class="token punctuation">(</span><span class="token punctuation">{</span>grid<span class="token operator">=</span><span class="token string">&#39;plane&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">-- 设置场景网格背景</span>

<span class="token comment">-- 车辆</span>
<span class="token keyword">local</span> car <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&#39;/res/2axle.glb&#39;</span><span class="token punctuation">)</span>
car<span class="token punctuation">.</span>speed <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">--车速度</span>

<span class="token comment">-- 初始时间</span>
<span class="token keyword">local</span> t <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">clock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> dt <span class="token operator">=</span> <span class="token number">0</span>

<span class="token comment">-- 刷新时间状态t和dt(按照CPU间隔步进，达到和真实时间同步)</span>
<span class="token keyword">function</span> <span class="token function">refreshtime</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    dt <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">clock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> t
    t <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">clock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment">-- 协程更新场景</span>
<span class="token keyword">function</span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    coroutine<span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span>dt<span class="token punctuation">,</span> update<span class="token punctuation">)</span> <span class="token comment">--根据CPU步进时间添加下一次更新</span>
    <span class="token function">carmove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">--移动车辆</span>
    scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">--渲染场景</span>
    <span class="token function">refreshtime</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">--计算本次dt</span>
<span class="token keyword">end</span>

<span class="token comment">-- 车辆移动</span>
<span class="token keyword">function</span> <span class="token function">carmove</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;car move at &quot;</span><span class="token punctuation">,</span>t<span class="token punctuation">)</span>
    <span class="token keyword">local</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token operator">=</span> car<span class="token punctuation">:</span><span class="token function">getpos</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    car<span class="token punctuation">:</span><span class="token function">setpos</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z<span class="token operator">+</span>dt<span class="token operator">*</span>car<span class="token punctuation">.</span>speed<span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token comment">-- 初始更新（添加第一次更新）</span>
<span class="token comment">-- 由于函数中涉及到添加后续更新，因此更新会自动循环</span>
coroutine<span class="token punctuation">.</span><span class="token function">queue</span><span class="token punctuation">(</span>dt<span class="token punctuation">,</span>update<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="随机数" tabindex="-1"><a class="header-anchor" href="#随机数" aria-hidden="true">#</a> 随机数</h2><h3 id="创建随机数种子" tabindex="-1"><a class="header-anchor" href="#创建随机数种子" aria-hidden="true">#</a> 创建随机数种子</h3><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> seed <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">randomseed</span><span class="token punctuation">(</span>x <span class="token punctuation">[</span><span class="token punctuation">,</span> dist<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre></div><p>参数</p><table><thead><tr><th>参数</th><th>含义</th></tr></thead><tbody><tr><td><code>x</code></td><td>随机数种子，会根据输入的不同数值返回不同的随机数。如果需要每次的值都不一样，可以考虑将随机数种子<code>x</code>设置为当前时间</td></tr><tr><td><code>dist</code></td><td>随机数分布（可选参数）。如果不设置，默认为均匀分布。如果设置这个参数，还可以设置 <code>mu</code> 和 <code>sigma</code> 作为对应分布的参数</td></tr></tbody></table><p><code>dist</code>参数可以设置键值为三种分布：</p><ul><li><code>&#39;normal&#39;</code>：正态分布</li><li><code>&#39;exponential&#39;</code>：指数分布</li><li><code>&#39;poisson&#39;</code>：泊松分布</li></ul><p>此外，还可以设置这几种分布的参数，其中 <code>mu</code> 键为均值，<code>sigma</code> 键为方差。</p><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1" aria-hidden="true">#</a> 示例</h3><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token comment">-- 创建泊松分布的随机数种子</span>
<span class="token keyword">local</span> seed <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">randomseed</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span><span class="token function">time</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>distribution <span class="token operator">=</span> <span class="token string">&quot;poisson&quot;</span><span class="token punctuation">,</span> mu <span class="token operator">=</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">-- 泊松分布，均值为3</span>

<span class="token comment">-- 输出随机数</span>
<span class="token function">print</span><span class="token punctuation">(</span>seed<span class="token punctuation">:</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="程序控制" tabindex="-1"><a class="header-anchor" href="#程序控制" aria-hidden="true">#</a> 程序控制</h2><p>本文中的程序控制主要是指如何使用用户界面中的<a href="./web-ui#%E8%93%9D%E8%89%B2-%E5%91%BD%E4%BB%A4%E5%8C%BA%E5%9F%9F">按钮</a>控制程序的运行，包括暂停、恢复、停止等。</p><div style="text-align:center;"><p><img src="`+n+`" alt="命令栏"> 命令栏</p></div><blockquote><p>主要是指命令栏的前3个按钮</p></blockquote><p>MicroCityWeb中的程序控制主要是指3D界面渲染中通过 <code>scene</code> 对象实现的3D界面运动的暂停、恢复、停止，具体的函数如下：</p><div class="language-lua" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> state <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>此处将 <code>scene.render()</code> 的返回值存放于 <code>state</code> 变量中，<code>state</code> 变量的值为 <code>true</code> 或者 <code>false</code>，分别代表程序的运行状态为运行或者被终止（命令栏中按下按钮3）。</p><p>3D对象的暂停渲染也是通过调用 <code>scene.render()</code> 来实现的。如果刷新3D对象是通过不断调用 <code>scene.render()</code> 函数实现，并且刷新间隔时间不是通过 <code>os.sleep()</code> 来控制，那么可以实现在3D界面上将渲染暂停在某个状态。这是因为如果使用 <code>os.sleep()</code> 来控制3D对象的运动速度，那么当点击暂停按钮时，很可能正好处于 <code>os.sleep()</code> 的过程中，导致程序无法立即响应，从而导致暂停按钮无效。因此，建议在控制3D对象的运动速度时避免使用 <code>os.sleep()</code>，而是通过添加其他参数的方式来控制推进时长，以达到控制3D对象运动速度的目的。</p>`,38),c=[o];function i(l,u){return a(),e("div",null,c)}const k=s(p,[["render",i],["__file","event-scheduling.html.vue"]]);export{k as default};
