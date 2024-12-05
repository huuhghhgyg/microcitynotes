import{_ as n}from"./icon_script_editor-S0ak5iz0.js";import{_ as a,c as s,e as t,o as i}from"./app-DBXIMjCi.js";const o={};function l(p,e){return i(),s("div",null,e[0]||(e[0]=[t('<h1 id="_4-8-mixed-integer-programming" tabindex="-1"><a class="header-anchor" href="#_4-8-mixed-integer-programming"><span>4.8 Mixed Integer Programming</span></a></h1><p>MicroCity employs the <a href="https://sourceforge.net/projects/lpsolve/" target="_blank" rel="noopener noreferrer"><em>lpsolve</em></a> to takle <strong>Mixed Integer Linear Programming</strong> problems. Developers can use embedded Lua functions to build and solve models. Sample codes for this chapter can be found in the &quot;optimization_samples&quot; folder of the <strong>Project</strong> Tab in <img src="'+n+`" alt="icon"><strong>ScriptEditor</strong>.</p><h2 id="model-creation-and-execution" tabindex="-1"><a class="header-anchor" href="#model-creation-and-execution"><span>Model Creation and Execution</span></a></h2><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">CreateLP</span> <span class="token punctuation">(</span><span class="token punctuation">[</span>rows <span class="token operator">=</span> <span class="token number">0</span> <span class="token punctuation">,</span> columns <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Creates a <em>Mixed Integer Linear Programming</em> model and returns the <strong>LPModel</strong> object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetObjFunction</span> <span class="token punctuation">(</span>LPModel<span class="token punctuation">,</span> rowTable<span class="token punctuation">,</span> <span class="token string">&quot;MAX&quot;</span><span class="token operator">|</span><span class="token string">&quot;MIN&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sets the objective function of a <em>LPModel</em> with a <em>Lua Table</em> which stores coefficients of the decision variables.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">AddConstraint</span> <span class="token punctuation">(</span>LPModel<span class="token punctuation">,</span> rowTable<span class="token punctuation">,</span> <span class="token string">&quot;&lt;=&quot;</span><span class="token operator">|</span><span class="token string">&quot;&gt;=&quot;</span><span class="token operator">|</span><span class="token string">&quot;==&quot;</span><span class="token punctuation">,</span> rhsValue<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Adds a constraint to a <em>LPModel</em> with a <em>Lua Table</em> which stores coefficients of the decision variables.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetInteger</span> <span class="token punctuation">(</span>LPModel<span class="token punctuation">,</span> index<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sets a decision variable specified by the <em>index</em> as an integer variable.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetBinary</span> <span class="token punctuation">(</span>LPModel<span class="token punctuation">,</span> index<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sets a decision variable of a <em>LPModel</em> specified by the <em>index</em> as a binary variable.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetUnbounded</span> <span class="token punctuation">(</span>LPModel<span class="token punctuation">,</span> index<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sets a decision variable of a <em>LPModel</em> to be unbounded(+/- infinity).</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SolveLP</span> <span class="token punctuation">(</span>LPModel <span class="token punctuation">[</span><span class="token punctuation">,</span> timeoutSec <span class="token operator">=</span> <span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Solves a <em>LPModel</em> and returns 0 as success, -1 as invalid LP model, -2 as nomemory, 1 as suboptimal, 2 as infeasible, 3 as unbounded, 4 as degenerate, 5 as a numerical failure encountered, 6 as the user abort, 7 as a timeout error, 9 as the model could be solved by presolve, 10 as the B&amp;B routine failed, 11 as the B&amp;B was stopped because of a break-at-first, 12 as a feasible B&amp;B solution was found, 13 as no feasible B&amp;B solution found.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetObjective</span> <span class="token punctuation">(</span>LPModel<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Returns the objective function value of a <em>LPModel</em>.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetVariable</span> <span class="token punctuation">(</span>LPModel<span class="token punctuation">,</span> index<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Returns the value of a decision variable specified by the <em>index</em>.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetVariables</span> <span class="token punctuation">(</span>LPModel<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Returns all values of the decision variables of a <em>LPModel</em>.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetDual</span> <span class="token punctuation">(</span>LPModel<span class="token punctuation">,</span> index<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Returns the dual value of a decision variable specified by the <em>index</em>.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetDuals</span> <span class="token punctuation">(</span>LPModel<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Returns all dual values of the decision variables of a <em>LPModel</em>.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">ReadLP</span><span class="token punctuation">(</span><span class="token string">&quot;fileName.mps&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Reads a <em>LPModel</em> from a file (*.lp, *.mps) and returns the <em>LPModel</em> if succeed.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">WriteLP</span> <span class="token punctuation">(</span>LPModel<span class="token punctuation">,</span> <span class="token string">&quot;fileName.mps&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Writes a <em>LPModel</em> to a file (*.lp, *.mps) and returns true if succeed.</p>`,31)]))}const d=a(o,[["render",l],["__file","4.8_mixed_integer_programming.html.vue"]]),u=JSON.parse('{"path":"/en/docs/4.8_mixed_integer_programming.html","title":"4.8 Mixed Integer Programming","lang":"en-US","frontmatter":{"prev":"./4.7_des_simulations.md","description":"4.8 Mixed Integer Programming MicroCity employs the lpsolve to takle Mixed Integer Linear Programming problems. Developers can use embedded Lua functions to build and solve mode...","head":[["meta",{"property":"og:url","content":"https://huuhghhgyg.github.io/MicroCityNotes/en/docs/4.8_mixed_integer_programming.html"}],["meta",{"property":"og:site_name","content":"MicroCity Notes"}],["meta",{"property":"og:title","content":"4.8 Mixed Integer Programming"}],["meta",{"property":"og:description","content":"4.8 Mixed Integer Programming MicroCity employs the lpsolve to takle Mixed Integer Linear Programming problems. Developers can use embedded Lua functions to build and solve mode..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-25T03:41:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-25T03:41:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.8 Mixed Integer Programming\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T03:41:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Model Creation and Execution","slug":"model-creation-and-execution","link":"#model-creation-and-execution","children":[]}],"git":{"updatedTime":1700883676000,"contributors":[{"name":"huuhghhgyg","email":"huuhghhgyg@outlook.com","commits":4,"url":"https://github.com/huuhghhgyg"}]},"filePathRelative":"en/docs/4.8_mixed_integer_programming.md","autoDesc":true,"excerpt":"\\n<p>MicroCity employs the <a href=\\"https://sourceforge.net/projects/lpsolve/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><em>lpsolve</em></a> to takle <strong>Mixed Integer Linear Programming</strong> problems. Developers can use embedded Lua functions to build and solve models. Sample codes for this chapter can be found in the \\"optimization_samples\\" folder of the <strong>Project</strong> Tab in <strong>ScriptEditor</strong>.</p>"}');export{d as comp,u as data};
