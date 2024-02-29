import{_ as c,a as l,b as d,c as h,d as p,e as u,f as g,g as f,h as m,i as b,j as y,k as _,l as v,m as T,n as w,o as k,p as S,q as z}from"./DL_Heatmap-RXB-9ZZK.js";import{_ as x,r as n,o as C,c as L,a as e,b as t,d as a,w as s,e as i}from"./app-WB5ROtMu.js";const I={},P=i('<h1 id="visualization-of-results" tabindex="-1"><a class="header-anchor" href="#visualization-of-results"><span>Visualization of Results</span></a></h1><p>This article introduces various methods for visualizing computational results. This includes changing the color of the content, changing the size of shapes, and changing the attribute labels displayed for elements.</p><h2 id="changing-shape-color" tabindex="-1"><a class="header-anchor" href="#changing-shape-color"><span>Changing Shape Color</span></a></h2><p>In the graphic properties box located at the bottom left corner of the program interface, the type of color displayed can be changed by modifying the <code>Type</code> attribute under the <code>Colors</code> section. There are 3 options available:</p><ul><li>Unique Symbol: Specifies a specific color for all graphics in the same layer, which will not be discussed further here.</li><li><a href="#lookup-table-changing-color-based-on-table-values">Lookup Table</a>: Displays the corresponding color based on a numerical query from a table.</li><li><a href="#graduated-color-displaying-gradient-color-based-on-values">Graduated Color</a>: Sets a gradient color based on the numerical values in the table.</li></ul><h3 id="lookup-table-changing-color-based-on-table-values" tabindex="-1"><a class="header-anchor" href="#lookup-table-changing-color-based-on-table-values"><span>Lookup Table - Changing Color Based on Table Values</span></a></h3><p>By changing the <code>Type</code> attribute to <code>Lookup Table</code>, the color of the graphics can be modified based on the values in the table, achieving the effect of selecting specific graphics.</p><p><img src="'+h+'" alt="LookupTableProperties.png"></p><p>In this example, the <code>Attribute</code> of <code>Lookup Table</code> is changed to <code>SELECT</code> in order to control the color of lines based on the values in the <code>SELECT</code> column of the table (as shown in the above image of attribute settings). When the value is 0, the color is displayed as black, and when the value is 1, the color is displayed as red. The values in the <code>SELECT</code> column of the table and the specific settings in the <code>Lookup Table</code> are shown in the following images.</p><p><img src="'+p+'" alt="TableSelect.png"><img src="'+u+'" alt="LookupTableColor.png"></p><p>The final effect achieved is shown below. <img src="'+g+'" alt="SelectLinksColor.png"></p><h3 id="graduated-color-displaying-gradient-color-based-on-values" tabindex="-1"><a class="header-anchor" href="#graduated-color-displaying-gradient-color-based-on-values"><span>Graduated Color - Displaying Gradient Color Based on Values</span></a></h3><p>By changing the <code>Type</code> attribute to <code>Graduated Color</code>, different colors can be displayed based on the varying numerical values in the table, achieving the effect of displaying a gradient color.</p><p><img src="'+f+'" alt="GraduatedColorProperties.png"></p><p>In this example, a gradient color is displayed based on the population size of each country. It can be observed that China has a large population, hence the color displayed is red, while India also has a significant population, resulting in an orange color. Other regions have smaller populations, but differences can still be discerned through the colors.</p><p><img src="'+m+'" alt="GraduatedColorResult.png"></p><p>The <code>Colors</code> attribute under <code>Graduated Color</code> can also be adjusted with other color schemes. The settings interface is shown in the following image, but each individual setting will not be listed here.</p><p><img src="'+b+'" alt="GraduatedColorSettings.png"></p>',18),G=i('<h2 id="changing-the-display-size-of-shapes-and-labels" tabindex="-1"><a class="header-anchor" href="#changing-the-display-size-of-shapes-and-labels"><span>Changing the Display Size of Shapes and Labels</span></a></h2><h3 id="selection-of-reference-system" tabindex="-1"><a class="header-anchor" href="#selection-of-reference-system"><span>Selection of Reference System</span></a></h3><p>There are 2 reference systems for displaying the size of content: one based on the map and one based on the screen. In this case, both the size of shapes and the display of labels are set to the same reference system.</p><p>When content is displayed <strong>based on the map</strong>, the size of the content will be synchronized and scaled according to the size of the map, as shown in the following images:</p><div style="text-align:center;"><p><img src="'+y+'" alt="RelateToMapBig.png"> (Enlarging the content based on the map)</p><p><img src="'+_+'" alt="RelateToMapSmall.png"> (Shrinking the content based on the map)</p></div><p>When content is displayed <strong>based on the screen</strong>, the size of the content remains relatively consistent regardless of the map scaling, as shown in the following image:</p><div style="text-align:center;"><p><img src="'+v+'" alt="RelateToScreenBig.png"> (Enlarging the content based on the screen)</p><p>Translate into English:</p><p><img src="'+T+'" alt="RelateToScreenSmall.png"> (Shrunk with the screen as the reference system)</p></div><p>Therefore, when drawing, <strong>the reference system should be selected according to the purpose of the drawing</strong>.</p><ul><li>If you need to draw shapes with a specific size or label with a specific size on a map, such as drawing a circle with a radius of 10 km, you should use <strong>the map as the reference system</strong>.</li><li>If you only need labels and graphics to be displayed clearly at any size, you can choose <strong>the screen as the reference system</strong>.</li></ul><h4 id="application-examples-of-reference-system" tabindex="-1"><a class="header-anchor" href="#application-examples-of-reference-system"><span>Application examples of reference system</span></a></h4><p>Draw dots in the picture, set the radius of the circle to be the same as the size of the circle, and set the center of the circle to be the center of each green dot. <strong>The size of the gray circle represents the coverage range of each green dot</strong>.</p><p><img src="'+w+'" alt="RangeDotRelateToMap.png"></p><p>In the picture, the gray circle is drawn for each green dot with a radius of 16, representing the coverage range of each green dot. These gray circles are stored in a layer called <code>Range.shp</code>, and the layer type is <code>Points</code>.</p><h3 id="setting-the-reference-system" tabindex="-1"><a class="header-anchor" href="#setting-the-reference-system"><span>Setting the reference system</span></a></h3><p>The size reference system for graphics and labels can be set in the bottom left corner of the program interface. <img src="'+k+'" alt="SizeProperties.png"></p><p>The two positions marked in the picture can adjust the size reference system for graphics and the size reference system for labels respectively.</p><ul><li><strong>Setting the size reference system for graphics</strong>: Adjust the size reference system for graphics under the <code>Size</code> column in the <code>Size relates to...</code> section. Adjust the <code>Default Size</code> to adjust the size of the graphics relative to the coordinate system.</li><li><strong>Setting the size reference system for labels</strong>: Adjust the size reference system for labels under the <code>Labels</code> column in the <code>Size relates to...</code> section. Adjust the <code>Default Size</code> to adjust the size of the labels relative to the coordinate system.</li></ul><h2 id="changing-the-displayed-labels" tabindex="-1"><a class="header-anchor" href="#changing-the-displayed-labels"><span>Changing the displayed labels</span></a></h2><h3 id="manually-changing-the-displayed-labels" tabindex="-1"><a class="header-anchor" href="#manually-changing-the-displayed-labels"><span>Manually changing the displayed labels</span></a></h3><p>The size reference system for graphics and labels can be set in the bottom left corner of the program interface. The labels displayed in the picture above are <code>ID</code>. If you need to change it to other columns in the table, you can change the <code>Attribute</code> property under the <code>Labels</code> column to achieve it.</p><p>The position to be changed is shown in the picture. If you need to display the value in the corresponding <code>MSG</code> column in the table, you only need to change the <code>Attribute</code> property value under the <code>Labels</code> column to <code>MSG</code>.</p><p><img src="'+S+'" alt="LabelAttribProperties.png"></p><p>However, every time the graphics are changed and the <code>Update()</code> function is executed, the label will be hidden. If the script to be executed contains the <code>Update()</code> function for this layer, there is no need to manually reconfigure the displayed labels after each script execution. <strong>The displayed labels can be automatically selected through the script</strong>.</p><h3 id="automatically-changing-the-displayed-labels" tabindex="-1"><a class="header-anchor" href="#automatically-changing-the-displayed-labels"><span>Automatically changing the displayed labels</span></a></h3><p><strong>The value of an attribute can be changed using the <code>SetParameter()</code> function</strong>. Taking the <code>Attribute</code> property under the <code>Labels</code> column in the picture above as an example, you can see that its <code>ID</code> is <code>LABEL_ATTRIB</code> and its type is <code>Choice</code> in the bottom bar.</p><blockquote><p>It should be noted that when the type is <code>Choice</code>, the parameter values are numbered starting from 1 and the numbering corresponds to the contents of the drop-down menu in order.</p></blockquote><p>After clicking on this property, you can see that <code>MSG</code> is in the second position.</p><p><img src="'+z+`" alt="SetParameterProperties.png"></p><p>Since the numbering in Lua usually starts from 1, the number for <code>ID</code> here corresponds to 1, and the number for <code>MSG</code> corresponds to 2. The object to be operated on is <code>MSG</code>, so the function needs to fill in the parameter value of type <code>Choice</code> as 2.</p><p>Now that all the required parameters have been obtained, the <code>SetParameter()</code> function can be used to change the displayed labels.</p><div class="language-lua line-numbers-mode" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="token comment">-- transports is the graphic layer</span>
<span class="token function">SetParameter</span><span class="token punctuation">(</span>transports<span class="token punctuation">,</span> <span class="token string">&quot;LABEL_ATTRIB&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>The <code>SetParameter()</code> function needs to be executed after the <code>Update()</code> function, otherwise the effect will be overwritten by the <code>Update()</code> function.</p></blockquote><p>Now let&#39;s take a closer look at the specific usage of the <code>SetParameter()</code> function:</p><div class="language-lua line-numbers-mode" data-ext="lua" data-title="lua"><pre class="language-lua"><code><span class="token function">SetParameter</span><span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token operator">|</span>Grid<span class="token operator">|</span>Scene<span class="token operator">|</span>Module<span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">,</span> Number<span class="token operator">|</span><span class="token string">&quot;String&quot;</span><span class="token operator">|</span>Object<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><table><thead><tr><th>Parameter</th><th>Meaning</th></tr></thead><tbody><tr><td>Parameter1</td><td>The input object, which can be <code>Shapes</code>, <code>Table</code>, <code>Grid</code>, <code>Scene</code>, or <code>Module</code></td></tr><tr><td>Parameter2</td><td>The <code>id</code> corresponding to the attribute. In the previous context, it is <code>LABEL_ATTRIB</code></td></tr><tr><td>Parameter3</td><td>If you need to change the attribute value, it only accepts three types: Number, String, and Object</td></tr></tbody></table>`,35),A=e("code",null,"SetParameter()",-1),R=e("h2",{id:"using-raster-grids",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#using-raster-grids"},[e("span",null,"Using Raster Grids")])],-1),q=e("strong",null,"draw heat maps",-1),B=e("p",null,[t("One scenario of using raster grids to draw heat maps is "),e("strong",null,"plotting price maps"),t(". When plotting a price map, we can iterate through each grid point on the raster grid, calculate the sum of distances from that grid point to each warehouse, and set the value of that grid point to this sum. This way, we can obtain a heat map. This method helps us visualize the distribution of prices and discover the trends and patterns of prices.")],-1),E=e("p",null,[e("img",{src:c,alt:"PlotPrice1.png"}),e("img",{src:l,alt:"PlotPrice2.png"}),e("img",{src:d,alt:"DL_Heatmap.png"})],-1),M={href:"https://github.com/huuhghhgyg/MicroCityNotes/issues/new",target:"_blank",rel:"noopener noreferrer"},j=e("strong",null,"feedback",-1);function D(N,U){const o=n("RouterLink"),r=n("ExternalLinkIcon");return C(),L("div",null,[P,e("p",null,[t("If interested, the manual can be referred to for example "),a(o,{to:"/en/docs/2.1_showing_a_world_map.html"},{default:s(()=>[t("2.1 Showing a World Map")]),_:1}),t(" to manually experiment with changing this attribute.")]),G,e("p",null,[t("The introduction of the "),A,t(" function can be found in the "),a(o,{to:"/en/docs/4.2_ui_control.html"},{default:s(()=>[t("4.2 User Interface Control")]),_:1}),t(" document, please refer to it.")]),R,e("p",null,[t("Raster grids can also be used for visualization, and I believe the most common application of raster grids is to "),q,t(". The generation of a heat map is mainly achieved by modifying the value of each cell on the raster grid. If you are not familiar with the specific structure of raster grids, you can refer to the "),a(o,{to:"/en/docs/3.3_raster_grids.html"},{default:s(()=>[t("3.3 Raster Grids")]),_:1}),t(" document. For controlling raster grids using scripts, you can refer to the "),a(o,{to:"/en/docs/4.4_grids.html"},{default:s(()=>[t("4.4 Grids")]),_:1}),t(" document.")]),B,E,e("blockquote",null,[e("p",null,[t("This post is translated using ChatGPT, please "),e("a",M,[j,a(r)]),t(" if any omissions.")])])])}const O=x(I,[["render",D],["__file","visualization.html.vue"]]);export{O as default};
