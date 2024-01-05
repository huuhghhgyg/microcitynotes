import{_ as e,a as o}from"./Subplot_Vertical-oXTmfxKU.js";import{_ as p,r as i,o as c,c as l,a as n,b as s,d as t,e as u}from"./app-IN4dFWf9.js";const r={},d=u(`<h1 id="general-drawing-code" tabindex="-1"><a class="header-anchor" href="#general-drawing-code" aria-hidden="true">#</a> General Drawing Code</h1><p>This section provides some well-written drawing objects that can be directly used when visualizing data.</p><div class="hint-container info"><p class="hint-container-title">Info</p><p>All open source code on this page follows the MIT license and can be used freely. However, please retain the copyright information when publicly released.</p></div><h2 id="importing-library-files" tabindex="-1"><a class="header-anchor" href="#importing-library-files" aria-hidden="true">#</a> Importing Library Files</h2><p>First, let&#39;s introduce how to use library files. &quot;Library files&quot; refer to pre-packaged drawing functions, and there are three methods to import files into MicroCity Web for use.</p><h3 id="method-1-code-based-import" tabindex="-1"><a class="header-anchor" href="#method-1-code-based-import" aria-hidden="true">#</a> Method 1: Code-Based Import</h3><p>👍 <strong>It is recommended to use this method to import library files, so that you can ensure that the latest version of the library is used.</strong></p><p>Taking the import of <code>Histogram</code> and <code>Subplot</code> as an example, the code to import the library files is as follows:</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;Downloading dependencies to the virtual disk...&#39;</span><span class="token punctuation">)</span>
<span class="token comment">-- Download the histogram code to the virtual disk</span>
os<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.zhhuu.top/ModelResource/libs/Histogram.lua&#39;</span><span class="token punctuation">)</span>
<span class="token comment">-- Download the subplot code to the virtual disk</span>
os<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span><span class="token string">&#39;https://www.zhhuu.top/ModelResource/libs/Subplot.lua&#39;</span><span class="token punctuation">)</span>
<span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&#39;Download completed&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="method-2-download-code-files-and-import" tabindex="-1"><a class="header-anchor" href="#method-2-download-code-files-and-import" aria-hidden="true">#</a> Method 2: Download Code Files and Import</h3><p>Go to the <a href="#code-file-download">Code File Download</a> section to download the required library files, then import the file into MicroCity Web, and finally reference the file to use it.</p><p>Taking the import of a histogram as an example, the code to import is as follows:</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;Histogram&quot;</span><span class="token punctuation">)</span> <span class="token comment">-- Import the histogram</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="method-3-copying-the-code" tabindex="-1"><a class="header-anchor" href="#method-3-copying-the-code" aria-hidden="true">#</a> Method 3: Copying the Code</h3><p>Unless you need to modify the function&#39;s functionality or logic, it is not recommended to do so. The code for each function is available in the <a href="#code">Code</a> section.</p><h2 id="histogram" tabindex="-1"><a class="header-anchor" href="#histogram" aria-hidden="true">#</a> Histogram</h2><p>A histogram is generally used to display the frequency or frequency distribution of each data value in a dataset.</p><p>It divides the data into several intervals (or &quot;bins&quot;) with a certain interval, then draws a bar chart of the frequency (or frequency) on the vertical axis for each interval, reflecting the distribution of the data.</p><p>Here is an example of a histogram drawn using a histogram object (function).</p><div style="text-align:center;"><p><img src="`+e+`" alt="Histogram Example" width="500"></p></div><h3 id="importing-the-histogram" tabindex="-1"><a class="header-anchor" href="#importing-the-histogram" aria-hidden="true">#</a> Importing the Histogram</h3><p>First, import the code for the histogram. For specific import methods, please refer to <a href="#importing-library-files">Importing Library Files</a>.</p><p>The filename for the histogram is <code>Histogram.lua</code>, and the code to import the histogram is:</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;Histogram&quot;</span><span class="token punctuation">)</span> <span class="token comment">-- Import the histogram</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="creating-a-histogram-object" tabindex="-1"><a class="header-anchor" href="#creating-a-histogram-object" aria-hidden="true">#</a> Creating a Histogram Object</h3><p>Create a histogram object:</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> plot <span class="token operator">=</span> <span class="token function">Histogram</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span> <span class="token comment">-- list represents the dataset</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>You can also set the properties of the graph when creating the object.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token keyword">local</span> plot <span class="token operator">=</span> <span class="token function">Histogram</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>range<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">40</span><span class="token punctuation">,</span><span class="token number">90</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">100</span><span class="token punctuation">}</span><span class="token punctuation">,</span> scale<span class="token operator">=</span><span class="token punctuation">{</span><span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">,</span> fdisp<span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">(</span>x<span class="token operator">/</span>n<span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token operator">..</span><span class="token string">&quot;%&quot;</span> <span class="token keyword">end</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Setting the properties is not necessary and can be done based on your needs. In this example, only the <code>range</code>, <code>scale</code>, and <code>fdisp</code> properties are set.</p><h3 id="setting-histogram-properties" tabindex="-1"><a class="header-anchor" href="#setting-histogram-properties" aria-hidden="true">#</a> Setting Histogram Properties</h3><p>The example provided above demonstrates setting histogram properties. Based on the code, more properties can be set. Please refer to the table below for more details:</p><table><thead><tr><th>Attribute Value</th><th>Function</th><th>Example</th></tr></thead><tbody><tr><td><code>origin</code></td><td>Set the origin point of the graph (bottom left corner)</td><td><code>origin = {-50, -50}</code>, sets the origin point of the graph at the position (-50, -50)</td></tr><tr><td><code>size</code></td><td>Set the length of the graph&#39;s x and y axes, which can be understood as the size of the graph</td><td><code>size = {100, 100}</code>, sets the x and y axes length of the graph to 100</td></tr><tr><td><code>scale</code></td><td>Set the scale of the x and y coordinate axes</td><td><code>scale = {3, 2}</code>, sets the scale of the x and y axes of the graph to 3 and 2 respectively</td></tr><tr><td><code>axislabel</code></td><td>Set the labels of the x and y axes</td><td><code>axislabel = {&quot;x&quot;, &quot;y&quot;}</code>, sets the labels of the x and y axes of the graph to &quot;x&quot; and &quot;y&quot; respectively</td></tr><tr><td><code>range</code></td><td>Set the display range of the x and y coordinate axes</td><td><code>range = {0, 10, 0, 20}</code>, sets the range of the x axis to [0,10] and the y axis to [0,20]</td></tr><tr><td><code>filled</code></td><td>Set whether to fill the bar chart</td><td><code>filled = false</code>, sets the bar chart to hollow. The default style is filled</td></tr><tr><td><code>fdisp</code></td><td>Set the display function of the data label, which returns the quantity by default. Setting the display function of the data label will also affect the display of the y-axis scale</td><td><code>fdisp = function(v) return (v/n*100)..&quot;%&quot; end</code>, sets the data label to be displayed as a percentage (assuming n is the sample size)</td></tr></tbody></table><h3 id="advanced-usage-of-histogram" tabindex="-1"><a class="header-anchor" href="#advanced-usage-of-histogram" aria-hidden="true">#</a> Advanced Usage of Histogram</h3><p>📈 <strong>Dynamically Refreshing Data Graph</strong></p><ol><li>Modify the data in the graph. Here we take adding data to the graph as an example, where <code>rnd</code> is the added data. The value of <code>plot.data</code> can also be modified directly.</li></ol><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>table<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>plot<span class="token punctuation">.</span>data<span class="token punctuation">,</span> rnd<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>Refresh the graph</li></ol><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code>plot<span class="token punctuation">:</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><h4 id="basic-usage-example-drawing-a-poisson-distribution" tabindex="-1"><a class="header-anchor" href="#basic-usage-example-drawing-a-poisson-distribution" aria-hidden="true">#</a> Basic Usage Example: Drawing a Poisson Distribution</h4><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;Histogram&quot;</span><span class="token punctuation">)</span> <span class="token comment">-- Import the Histogram library</span>

<span class="token keyword">local</span> seed <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">randomseed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    distribution <span class="token operator">=</span> <span class="token string">&quot;poisson&quot;</span><span class="token punctuation">,</span>
    mu <span class="token operator">=</span> <span class="token string">&quot;3&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> list <span class="token operator">=</span> <span class="token punctuation">{</span>seed<span class="token punctuation">:</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token comment">-- Static drawing</span>
<span class="token keyword">for</span> i <span class="token operator">=</span> <span class="token operator">#</span>list<span class="token punctuation">,</span> <span class="token number">400</span> <span class="token keyword">do</span>
    table<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> seed<span class="token punctuation">:</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">end</span>

<span class="token keyword">local</span> histplot <span class="token operator">=</span> <span class="token function">Histogram</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    range <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    scale <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="advanced-usage-example-dynamically-refreshing-the-poisson-distribution-graph" tabindex="-1"><a class="header-anchor" href="#advanced-usage-example-dynamically-refreshing-the-poisson-distribution-graph" aria-hidden="true">#</a> Advanced Usage Example: Dynamically Refreshing the Poisson Distribution Graph</h4><p>This is an example of drawing a Poisson distribution and dynamically refreshing the data graph. Assuming that the <code>Histogram</code> object has been imported and the scene is set to display in 2D.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;Histogram&quot;</span><span class="token punctuation">)</span> <span class="token comment">-- Import the Histogram library</span>

<span class="token keyword">local</span> seed <span class="token operator">=</span> math<span class="token punctuation">.</span><span class="token function">randomseed</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    distribution <span class="token operator">=</span> <span class="token string">&quot;poisson&quot;</span><span class="token punctuation">,</span>
    mu <span class="token operator">=</span> <span class="token string">&quot;3&quot;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> list <span class="token operator">=</span> <span class="token punctuation">{</span>seed<span class="token punctuation">:</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>

<span class="token keyword">local</span> histplot <span class="token operator">=</span> <span class="token function">Histogram</span><span class="token punctuation">(</span>list<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    range <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    scale <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token comment">-- Dynamically drawing</span>
<span class="token keyword">local</span> count <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span> count <span class="token operator">&lt;</span> <span class="token number">1000</span> <span class="token keyword">and</span> scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">do</span>
    <span class="token keyword">local</span> rnd <span class="token operator">=</span> seed<span class="token punctuation">:</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    table<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>histplot<span class="token punctuation">.</span>data<span class="token punctuation">,</span> rnd<span class="token punctuation">)</span>

    histplot<span class="token punctuation">:</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    count <span class="token operator">=</span> count <span class="token operator">+</span> <span class="token number">1</span>
<span class="token keyword">end</span>
scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="subplot" tabindex="-1"><a class="header-anchor" href="#subplot" aria-hidden="true">#</a> Subplot</h2><p>A Subplot is used to solve the positioning and sizing issues when placing multiple graphs in a single interface. The name is borrowed from MATLAB.</p><div style="text-align:center;"><p><img src="`+o+`" alt="Subplot" width="500"></p></div><h3 id="importing-subplots" tabindex="-1"><a class="header-anchor" href="#importing-subplots" aria-hidden="true">#</a> Importing Subplots</h3><p>First, import the code for subplots. The specific import method can be found in <a href="#importing-library-files">Importing Library Files</a>.</p><p>The filename of the subplot is <code>Subplot.lua</code>, and it is referenced as follows:</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;Subplot&quot;</span><span class="token punctuation">)</span> <span class="token comment">--referencing the subplot</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="subplot-attribute-settings" tabindex="-1"><a class="header-anchor" href="#subplot-attribute-settings" aria-hidden="true">#</a> Subplot Attribute Settings</h3><p>Here we will provide a detailed explanation of the attributes of the subplot. Setting the attributes is not mandatory and can be done based on your needs.</p><table><thead><tr><th style="text-align:center;">Attribute</th><th>Function</th><th>Example</th></tr></thead><tbody><tr><td style="text-align:center;"><code>span</code></td><td>Sets the spacing between subplots</td><td><code>span=10</code>, sets the spacing between subplots in all four directions to 10</td></tr><tr><td style="text-align:center;"><code>diag</code></td><td>Sets the position and size of the subplot by specifying the coordinates of the two diagonal points</td><td><code>diag = {-80, -70, 80, 70}</code>, sets the diagonal range of the subplot from coordinates <code>(-80,-70)</code> to <code>(80,70)</code></td></tr></tbody></table><h3 id="reading-subplot-values" tabindex="-1"><a class="header-anchor" href="#reading-subplot-values" aria-hidden="true">#</a> Reading Subplot Values</h3><p>After creating the subplot with the specified attributes, or modifying the subplot attributes and refreshing, you can read the calculated values of the subplot to obtain the original positions and sizes of each subplot in the <code>Subplot</code> module. You can mainly read these values using the following attributes.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p>Here, it is assumed that the subplot object is stored in the <code>subplot</code> variable after creating it.</p></div><table><thead><tr><th style="text-align:center;">Calculated Attribute</th><th>Meaning</th><th>Example</th></tr></thead><tbody><tr><td style="text-align:center;"><code>originpt</code></td><td>The original position of each subplot in the <code>Subplot</code> object</td><td>You can obtain the original position of the subplot in the <code>i</code>th row and <code>j</code>th column using <code>subplot.originpt[i][j][1]</code> and <code>subplot.originpt[i][j][2]</code></td></tr><tr><td style="text-align:center;"><code>psize</code></td><td>The size of each subplot in the <code>Subplot</code> object</td><td>You can obtain the width and height of the subplot in the <code>subplot</code> using <code>subplot.psize[1]</code> and <code>subplot.psize[2]</code> respectively. (Assuming that all subplots have the same size)</td></tr></tbody></table><h3 id="example-1" tabindex="-1"><a class="header-anchor" href="#example-1" aria-hidden="true">#</a> Example</h3><p>Here is an example of drawing the display range of the subplots. It is assumed that the <code>Subplot</code> module has already been imported, and the scene has been set to display in 2D.</p><p>In this example, the display range of each subplot in a 2-row, 3-column subplot is drawn as a rectangle. The range of each subplot is represented by four gray points, and the position of each subplot is represented by a blue rectangle.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;Subplot&quot;</span><span class="token punctuation">)</span> <span class="token comment">--import the subplot code</span>

<span class="token keyword">local</span> subplot <span class="token operator">=</span> <span class="token function">Subplot</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>span <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">-- Drawing the boundary points of the Subplot object</span>
<span class="token keyword">local</span> lb <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;points&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> vertices<span class="token operator">=</span><span class="token punctuation">{</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> lt <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;points&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> vertices<span class="token operator">=</span><span class="token punctuation">{</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> rb <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;points&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> vertices<span class="token operator">=</span><span class="token punctuation">{</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">local</span> rt <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&quot;points&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>size <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span> vertices<span class="token operator">=</span><span class="token punctuation">{</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>subplot<span class="token punctuation">.</span>diag<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>-- Drawing Range for i = 1, subplot.row do for j = 1, subplot.col do scene.addobj(&quot;polyline&quot;, {size = 8, color = &quot;blue&quot;, vertices={ subplot.originpt[i][j][1]+subplot.psize[1], subplot.originpt[i][j][2], 0, subplot.originpt[i][j][1], subplot.originpt[i][j][2], 0, subplot.originpt[i][j][1], subplot.originpt[i][j][2]+subplot.psize[2], 0, subplot.originpt[i][j][1]+subplot.psize[1], subplot.originpt[i][j][2]+subplot.psize[2], 0, subplot.originpt[i][j][1]+subplot.psize[1], subplot.originpt[i][j][2], 0, } }) end end scene.render()</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><p>You can remove the <code>scene.setenv</code> code at the beginning of the script, depending on the combination of your code. The <code>scene.render()</code> in the code is to refresh the image when dynamically drawing.</p><h3 id="code-file-download" tabindex="-1"><a class="header-anchor" href="#code-file-download" aria-hidden="true">#</a> Code File Download</h3>`,67),h={href:"https://github.com/huuhghhgyg/ModelResource/tree/main/libs",target:"_blank",rel:"noopener noreferrer"},k=n("thead",null,[n("tr",null,[n("th",null,"Name"),n("th",null,"Link")])],-1),b=n("td",null,"Histogram",-1),m={href:"https://github.com/huuhghhgyg/ModelResource/blob/main/libs/Histogram.lua",target:"_blank",rel:"noopener noreferrer"},g=n("td",null,"Subplot",-1),f={href:"https://github.com/huuhghhgyg/ModelResource/blob/main/libs/Subplot.lua",target:"_blank",rel:"noopener noreferrer"},v=n("blockquote",null,[n("p",null,"🔗The links in the table above point to the GitHub repository. You can view the code directly on GitHub or download the files to your local machine for use.")],-1),y={href:"https://github.com/huuhghhgyg/MicroCityNotes/issues/new",target:"_blank",rel:"noopener noreferrer"},w=n("strong",null,"feedback",-1);function x(q,_){const a=i("ExternalLinkIcon");return c(),l("div",null,[d,n("p",null,[s("Please find the list of code files in "),n("a",h,[s("ModelResource/libs"),t(a)])]),n("table",null,[k,n("tbody",null,[n("tr",null,[b,n("td",null,[n("a",m,[s("ModelResource/libs/Histogram.lua"),t(a)])])]),n("tr",null,[g,n("td",null,[n("a",f,[s("ModelResource/libs/Subplot.lua"),t(a)])])])])]),v,n("blockquote",null,[n("p",null,[s("This post is translated using ChatGPT, please "),n("a",y,[w,t(a)]),s(" if any omissions.")])])])}const H=p(r,[["render",x],["__file","plots.html.vue"]]);export{H as default};