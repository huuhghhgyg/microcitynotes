import{_ as e}from"./icon_script_editor-ibm_2NsU.js";import{_ as t,r as p,o,c as i,a as n,b as a,d as u,w as c,e as l}from"./app-RK2nwtF0.js";const d={},r=n("h1",{id:"_4-4-栅格图形",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_4-4-栅格图形","aria-hidden":"true"},"#"),a(" 4.4 栅格图形")],-1),k=n("strong",null,"Grids",-1),m=n("strong",null,"Project",-1),v=n("img",{src:e,alt:"icon"},null,-1),g=n("strong",null,"ScriptEditor",-1),h=l(`<h2 id="cellular-data-manipulation" tabindex="-1"><a class="header-anchor" href="#cellular-data-manipulation" aria-hidden="true">#</a> Cellular Data Manipulation</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">CreateGrid</span> <span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Int|Float|Double&quot;</span><span class="token punctuation">,</span> XMax<span class="token punctuation">,</span> YMax <span class="token punctuation">[</span><span class="token punctuation">,</span> CellSize <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> xMin <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> yMin <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> init <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns a <em>Grid</em> object.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetCellSize</span> <span class="token punctuation">(</span>Grid<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the Cellsize value of a <em>Grid</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetGridMaxXY</span> <span class="token punctuation">(</span>Grid<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns XMax, YMax of a <em>Grid</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">ConvertToGridXY</span> <span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> x1<span class="token punctuation">,</span> y1 <span class="token punctuation">[</span><span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Converts real coordinates to coordinates in a <em>Grid</em>. Returns X1, Y1, X2, Y2, ... .</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">ShapeToGrid</span> <span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> Shape<span class="token punctuation">,</span> value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Rasterizes a <em>Shape</em> in a <em>Grid</em>. The cell values will be set according to the covering area and the inputed value.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">ShapeToGrid</span> <span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> Shapes<span class="token punctuation">,</span> <span class="token string">&quot;field_name&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Rasterizes all <em>Shape</em> objects in a <em>Shapes</em>. The cell values will be set according to the covering area and the values of <em>Shapes</em> field.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetValue</span> <span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> X1<span class="token punctuation">,</span> Y1 <span class="token punctuation">[</span><span class="token punctuation">,</span> X2<span class="token punctuation">,</span> Y2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns cells&#39; (specified by <em>Grid</em> coordinates) values: value1, value2, ... .</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">SetValue</span> <span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> value<span class="token punctuation">,</span> X1<span class="token punctuation">,</span> Y1 <span class="token punctuation">[</span><span class="token punctuation">,</span> X2<span class="token punctuation">,</span> Y2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sets values for cells specified by <em>Grid</em> coordinates.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetCenterXY</span> <span class="token punctuation">(</span>Grid<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the center real coordinate (x, y) of a <em>Grid</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetCenterXY</span> <span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> X1<span class="token punctuation">,</span> Y1 <span class="token punctuation">[</span><span class="token punctuation">,</span> X2<span class="token punctuation">,</span> Y2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the real coordinates of cells&#39; centers: x1, y1, x2, y2, ... .</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetExtent</span> <span class="token punctuation">(</span>Grid<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the leftbottom and righttop corner of a <em>Grid</em>&#39;s extent: Lx, By, Rx, Ty.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetExtent</span> <span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> X<span class="token punctuation">,</span> Y<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the leftbottom and righttop corner of a cell&#39;s extent: Lx, By, Rx, Ty.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetFractalDim</span> <span class="token punctuation">(</span>Grid<span class="token punctuation">,</span> X1<span class="token punctuation">,</span> Y1<span class="token punctuation">,</span> X2<span class="token punctuation">,</span> Y2<span class="token punctuation">,</span> fold <span class="token punctuation">[</span><span class="token punctuation">,</span> MultiFractalQ <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Calculates fractal dimension of the specified area in a <em>Grid</em>. Returns dimension, RSQ of linear regression, and the number of boxes in every fold.</p>`,27);function b(f,x){const s=p("RouterLink");return o(),i("div",null,[r,n("p",null,[k,a(" in MicroCity have simple structure ("),u(s,{to:"/docs/3.3_raster_grids.html"},{default:c(()=>[a("3.3")]),_:1}),a(') but efficient time and space utilization if applying algorithms on them. Sample codes for this chapter can be found in the "grid_samples" folder of the '),m,a(" Tab in "),v,g,a(".")]),h])}const R=t(d,[["render",b],["__file","4.4_grids.html.vue"]]);export{R as default};