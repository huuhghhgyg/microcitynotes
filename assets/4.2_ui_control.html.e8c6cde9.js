import{_ as o}from"./icon_script_editor.6508d134.js";import{_ as p,r as c,o as u,c as i,a as n,e as s,w as e,b as t,f as l}from"./app.fffb7028.js";const r="/assets/shot_parameter_id.76d4dffb.png",d={},k=l('<h1 id="_4-2-user-interfaces-control" tabindex="-1"><a class="header-anchor" href="#_4-2-user-interfaces-control" aria-hidden="true">#</a> 4.2 User Interfaces Control</h1><p>Microcity Script can be used to control some features appearing in user interfaces, which include moduels, data objects, messages and so on. There are some sample codes can be found in the &quot;user_interface&quot; folder of the <strong>Project</strong> Tab in <img src="'+o+`" alt="icon"><strong>ScriptEditor</strong>.</p><h2 id="basic-user-interfaces" tabindex="-1"><a class="header-anchor" href="#basic-user-interfaces" aria-hidden="true">#</a> Basic User Interfaces</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">Print</span> <span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Prints values in the <em>Messages Panel</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">Note</span> <span class="token punctuation">(</span><span class="token string">&quot;hello&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span><span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Notifies users and pauses the execution.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">SetProcessText</span> <span class="token punctuation">(</span><span class="token string">&quot;processing&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sets a text at the bottom left corner of <em>MicroCity</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">SetProgress</span> <span class="token punctuation">(</span>position<span class="token punctuation">,</span> range<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sets the progress bar of <em>position/range</em> that locates at the bottom right conner of <em>MicroCity</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">Sleep</span> <span class="token punctuation">(</span>milliseconds<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Pauses the execution for <em>milliseconds</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetReady</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns false if user cancel the current execution.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetClickXY</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns x,y where a user clicked at a <em>Map View</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetDragExtent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns bottom-left and top-right corner coordinate: Lx, By, Rx, Ty, which a user used mouse to drag a rectangle in a <em>Map View</em>.</p><h2 id="data-objects" tabindex="-1"><a class="header-anchor" href="#data-objects" aria-hidden="true">#</a> Data Objects</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Internal global variable that holds a string of current working directory, such as &quot;c:\\microcity&quot;.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">Open</span> <span class="token punctuation">(</span><span class="token string">&quot;.\\\\shapes.shp&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&quot;.\\\\grid.sgrd&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&quot;.\\\\table.dbf&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&quot;.\\\\scene.m3d&quot;</span> <span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Opens and returns <em>Shapes</em>, <em>Table</em>, <em>Grid</em> and <em>Scene</em> object from current working directory or opened data.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">Close</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Grid<span class="token operator">|</span>Table<span class="token operator">|</span>Scene<span class="token operator">|</span>Network<span class="token operator">|</span>RndEngine<span class="token operator">|</span>LPModel<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Closes an opened or created <em>Shapes</em>, <em>Table</em>, <em>Grid</em>, <em>Scene</em>, <em>Network</em>, <em>RndEngine</em> or <em>LPModel</em> object.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">Update</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Grid<span class="token operator">|</span>Table <span class="token punctuation">[</span><span class="token punctuation">,</span> bShow <span class="token operator">=</span> ture<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Update current changes of <em>Shapes</em>, <em>Grid</em> or <em>Table</em> object in <em>MicroCity</em>. The <em>bShow</em> indicates whether to create a view of the object. Returns false if user cancel the current execution.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">CreateMap</span> <span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> Shapes1<span class="token operator">|</span>Grid1 <span class="token punctuation">[</span><span class="token punctuation">,</span> Shapes2<span class="token operator">|</span>Grid2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Creates a <em>Map View</em> to show objects which can be arranged in layers by their order in the parameters.</p><h2 id="modules-and-parameters" tabindex="-1"><a class="header-anchor" href="#modules-and-parameters" aria-hidden="true">#</a> Modules and Parameters</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">AddModule</span> <span class="token punctuation">(</span><span class="token string">&quot;Function&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This function can add a lua function as a module to current module library. The module&#39;s default name is the function&#39;s name. Returns a <em>Module</em> object.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">AddParameter</span> <span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;Node&quot;</span><span class="token punctuation">,</span>   <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
<span class="token function">AddParameter</span> <span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;Value&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;id&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> default <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">AddParameter</span> <span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;Range&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;id&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> low <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">[</span><span class="token punctuation">,</span>  high <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">AddParameter</span> <span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;Check&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;id&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> default <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">AddParameter</span> <span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;String&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&quot;string&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span>
<span class="token function">AddParameter</span> <span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;Choice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&quot;choice1|choice2|&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> choice <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">AddParameter</span> <span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;File&quot;</span><span class="token punctuation">,</span>   <span class="token string">&quot;id&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&quot;c:\\\\default.txt&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token function">AddParameter</span> <span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;Color&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;id&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&quot;color&quot;</span> <span class="token operator">=</span> <span class="token string">&quot;255 255 255&quot;</span><span class="token punctuation">)</span>
<span class="token function">AddParameter</span> <span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;Shapes&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
<span class="token function">AddParameter</span> <span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;Grid&quot;</span><span class="token punctuation">,</span>   <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
<span class="token function">AddParameter</span> <span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;Scene&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
<span class="token function">AddParameter</span> <span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;Table&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
<span class="token function">AddParameter</span> <span class="token punctuation">(</span>Module<span class="token punctuation">,</span> ParentNode<span class="token punctuation">,</span> <span class="token string">&quot;Field&quot;</span><span class="token punctuation">,</span>  <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>These functions can add a parameter to a module&#39;s settings panel. Returns corresponding values or an object. The <em>ParentNode</em> can be set to the first return of a <em>AddParameter</em> function. If <em>&quot;Field&quot;</em> is set at the third place, the <em>parent_node</em> can be set to a <em>Table</em> or <em>Shapes</em> object to get its attributes table&#39;s head.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetParameter</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token operator">|</span>Grid<span class="token operator">|</span>Scene<span class="token operator">|</span>Module<span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the parameter specified by <em>&quot;id&quot;</em> from the object&#39;s settings panel.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">SetParameter</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token operator">|</span>Grid<span class="token operator">|</span>Scene<span class="token operator">|</span>Module<span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> Number<span class="token operator">|</span><span class="token string">&quot;String&quot;</span><span class="token operator">|</span>Object<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sets the parameter specified by <em>&quot;id&quot;</em> in the object&#39;s settings panel. Returns <em>true</em> if succeed. Note that the choice parameter should start from 1. A parameter&#39;s <em>&quot;id&quot;</em> can be found in the parameter&#39;s helper text shown as below.</p><p><img src="`+r+'" alt="shot"></p>',40),m=n("strong",null,"< 4.1 SI Overview",-1),g=n("a",{href:"."},[n("strong",null,"Table of Contents")],-1),v=n("strong",null,"4.3 Shapes and Tables >",-1);function h(b,q){const a=c("RouterLink");return u(),i("div",null,[k,n("p",null,[s(a,{to:"/docs/4.1_si_overview.html"},{default:e(()=>[m]),_:1}),t(" | "),g,t(" | "),s(a,{to:"/docs/4.3_shapes_and_tables.html"},{default:e(()=>[v]),_:1})])])}const P=p(d,[["render",h],["__file","4.2_ui_control.html.vue"]]);export{P as default};
