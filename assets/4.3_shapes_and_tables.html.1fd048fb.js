import{_ as p}from"./icon_script_editor.6508d134.js";import{_ as o,r as u,o as l,c as i,a,b as n,e,w as t,f as c}from"./app.fffb7028.js";const d={},r=a("h1",{id:"_4-3-shapes-and-tables",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_4-3-shapes-and-tables","aria-hidden":"true"},"#"),n(" 4.3 Shapes and Tables")],-1),m=a("strong",null,"Shapes",-1),k=a("strong",null,"Tables",-1),v=a("strong",null,"Shapes",-1),h=a("strong",null,"Shapes",-1),g=a("strong",null,"Tables",-1),b=a("strong",null,"Shapes",-1),f=a("strong",null,"Tables",-1),S=a("strong",null,"Project",-1),x=a("img",{src:p,alt:"icon"},null,-1),_=a("strong",null,"ScriptEditor",-1),y=c(`<h2 id="tabular-data-manipulation" tabindex="-1"><a class="header-anchor" href="#tabular-data-manipulation" aria-hidden="true">#</a> Tabular Data Manipulation</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">CreateShapes</span> <span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Point|Line|Polygon&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns a <em>Shapes</em> object.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">CreateTable</span> <span class="token punctuation">(</span><span class="token string">&quot;Name&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns a <em>Table</em> object.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetFieldCount</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the number of fields in a <em>Shapes</em> or <em>Table</em></p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetField</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">,</span> iField<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Inputs the index (starts from 1) of a field and returns the field name and type (&quot;Int&quot;, &quot;Float&quot;, &quot;Double&quot; or &quot;String).</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">AddField</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">,</span> <span class="token string">&quot;field1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Int|Float|Double|String&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&quot;field2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Int|Float|Double|String&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Adds fields to a *Table or <em>Shapes</em> and returns booleans (<em>true</em> or <em>false</em>) by order.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">DelField</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">,</span> iField<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns <em>true</em> if successfully delete a field.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetRecCount</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the total number of records in a <em>Shapes</em> or <em>Table</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">AddRecord</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Adds a record to a <em>Shapes</em> or <em>Table</em> and returns the index.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetValue</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">,</span> <span class="token string">&quot;field_name&quot;</span><span class="token punctuation">,</span> index1 <span class="token punctuation">[</span><span class="token punctuation">,</span> index2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Retrieve values from a specified field and indexes of a <em>Shapes</em> or <em>Table</em>. Returns multiple values by the order of indexes.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">SetValue</span> <span class="token punctuation">(</span>Shapes<span class="token operator">|</span>Table<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token string">&quot;field_name&quot;</span><span class="token punctuation">,</span> index1 <span class="token punctuation">[</span><span class="token punctuation">,</span> index2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sets values for a specified field and indexes of a <em>Shapes</em> or <em>Table</em>.</p><h2 id="geographic-data-manipulation" tabindex="-1"><a class="header-anchor" href="#geographic-data-manipulation" aria-hidden="true">#</a> Geographic Data Manipulation</h2><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetSelections</span> <span class="token punctuation">(</span>Shapes<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns selected shape objects from a <em>Shapes</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetShape</span> <span class="token punctuation">(</span>Shapes<span class="token punctuation">,</span> index1 <span class="token punctuation">[</span><span class="token punctuation">,</span> index2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns <em>Shape</em> objects from a <em>Shapes</em> by the order of indexes.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">AddShape</span> <span class="token punctuation">(</span>Shapes<span class="token punctuation">,</span> Shape<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Adds a <em>Shape</em> object to a <em>Shapes</em> and returns its index.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">AddShape</span> <span class="token punctuation">(</span>Shapes <span class="token punctuation">[</span><span class="token punctuation">,</span> x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Adds a <em>Shape</em> object to a <em>Shapes</em> which defined as points. Returns the <em>Shape</em> object and index.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">DelShape</span> <span class="token punctuation">(</span>Shape<span class="token operator">|</span>Shapes<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Deletes a <em>Shape</em> or <em>Shapes</em> object and returns ture if successful.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">AddPoint</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token punctuation">[</span><span class="token punctuation">,</span> iPart <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Adds a point to a <em>Shape</em> and returns ture if successful.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">InsPoint</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token punctuation">[</span><span class="token punctuation">,</span> iPoint <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> iPart <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Inserts a point to a <em>Shape</em> and returns ture if successful.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">SetPoint</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y <span class="token punctuation">[</span><span class="token punctuation">,</span> iPoint <span class="token operator">=</span> <span class="token number">1</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> iPart <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sets a point coordinates in a <em>Shape</em> and returns ture if successful.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">DelPoint</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">,</span> iPoint <span class="token punctuation">[</span><span class="token punctuation">,</span> iPart<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Deletes a point at position iPoint from a <em>Shape</em> and returns ture if successful..</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">DelPart</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">,</span> iPart<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Deletes a part from a <em>Shape</em> and returns ture if successful.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetPartCount</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the number of parts in a <em>Shape</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetPointCount</span> <span class="token punctuation">(</span>Shape <span class="token punctuation">[</span><span class="token punctuation">,</span> iPart<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the number of points in a <em>Shape</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetPointXY</span> <span class="token punctuation">(</span>Shape <span class="token punctuation">[</span><span class="token punctuation">,</span> iPoint <span class="token punctuation">[</span><span class="token punctuation">,</span> iPart <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns all points&#39; coordinates: x1, y1, x2, y2, ... from a <em>Shape</em> or a specified point&#39;s coordinate.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">CopyShapeTo</span> <span class="token punctuation">(</span>TargetShapes<span class="token punctuation">,</span> dx<span class="token punctuation">,</span> dy<span class="token punctuation">,</span> Shape1 <span class="token punctuation">[</span><span class="token punctuation">,</span> Shape2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Copys <em>Shape</em> objects to a target <em>Shapes</em> with relative translation (dx, dy) and returns new <em>Shape</em> objects.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">MoveShapeTo</span> <span class="token punctuation">(</span>dx<span class="token punctuation">,</span> dy<span class="token punctuation">,</span> Shape1 <span class="token punctuation">[</span><span class="token punctuation">,</span> Shape2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Translates <em>Shape</em> objects to its relative position (dx, dy).</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetCenterXY</span> <span class="token punctuation">(</span>Shapes<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the center coordinate (x, y) of a <em>Shapes</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetCenterXY</span> <span class="token punctuation">(</span>Shapes<span class="token punctuation">,</span> index1 <span class="token punctuation">[</span><span class="token punctuation">,</span> index2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the center coordinates (x1, y1, x2, y2, ...) of <em>Shape</em> objects specified by indexes in a <em>Shapes</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetCenterXY</span> <span class="token punctuation">(</span>Shape1 <span class="token punctuation">[</span><span class="token punctuation">,</span> Shape2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the center coordinates (x1, y1, x2, y2, ...) of <em>Shape</em> objects.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetDistance</span> <span class="token punctuation">(</span>x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2 <span class="token punctuation">[</span><span class="token punctuation">,</span> x3<span class="token punctuation">,</span> y3<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the total distance between every two pairs of coordinates (x, y).</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetShapeLen</span> <span class="token punctuation">(</span>Shape1 <span class="token punctuation">[</span><span class="token punctuation">,</span> Shape2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns lengths of <em>Shape</em> objects.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetShapeArea</span> <span class="token punctuation">(</span>Shape1 <span class="token punctuation">[</span><span class="token punctuation">,</span> Shape2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns areas of <em>Shape</em> objects.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetShapeType</span> <span class="token punctuation">(</span>Shape<span class="token operator">|</span>Shapes<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the type (&quot;Point&quot;, &quot;Line&quot; or &quot;Polygon&quot;) of the a <em>Shapes</em> or <em>Shape</em> object.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetExtent</span> <span class="token punctuation">(</span>Shapes<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the extent coordinates (Lx, By, Rx, Ty) of a <em>Shapes</em>&#39;s extent.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetExtent</span> <span class="token punctuation">(</span>Shapes<span class="token punctuation">,</span> index<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the extent coordinates (Lx, By, Rx, Ty) of a <em>Shape</em> indexed in a <em>Shapes</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetExtent</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the extent coordinates (Lx, By, Rx, Ty) of a <em>Shape</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetIntersection</span> <span class="token punctuation">(</span>ShapeA<span class="token punctuation">,</span> ShapeB<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns a <em>Shape</em> (<em>Point</em>, <em>Line</em> or <em>Polygon</em>) object of the intersection of two <em>Shapes</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">GetValue</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">,</span> <span class="token string">&quot;field_name&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Returns the value of specified field of a <em>Shape</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">SetValue</span> <span class="token punctuation">(</span>Shape<span class="token punctuation">,</span> value1<span class="token punctuation">,</span> <span class="token string">&quot;field_name1&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> value2<span class="token punctuation">,</span> <span class="token string">&quot;field_name2&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sets values in different fiedds for a <em>Shape</em>.</p><div class="language-lua line-numbers-mode" data-ext="lua"><pre class="language-lua"><code><span class="token function">SetCoorSys</span> <span class="token punctuation">(</span><span class="token string">&quot;Earth&quot;</span><span class="token operator">|</span><span class="token string">&quot;Non-Earth&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Sets coordinate system. If using &quot;Earth&quot;, distances, lenths and areas are calculated according to the earth ellipsoid coordinate system. By default the &quot;Non-Earth&quot; is used, which is cartesian coordinate system.</p>`,80),q=a("strong",null,"< 4.2 UI Control",-1),R=a("a",{href:"."},[a("strong",null,"Table of Contents")],-1),T=a("strong",null,"4.4 Grids >",-1);function P(G,j){const s=u("RouterLink");return l(),i("div",null,[r,a("p",null,[n("Users can manipulate "),m,n(" and "),k,n(" with MicroCity Script. For detailed data structure of "),v,n(", you can refer to previous chapter "),e(s,{to:"/docs/2.2_searching_for_countries.html#gis-data-structure"},{default:t(()=>[n("2.2")]),_:1}),n(" and "),e(s,{to:"/docs/3.2_vector_shapes.html"},{default:t(()=>[n("3.2")]),_:1}),n(". Because "),h,n(" can be treated as "),g,n(" with extra field with geographic data, some of embeded functions for tabular data manipulation can be used both in "),b,n(" and "),f,n('. Sample codes for this chapter can be found in the "shapes_samples" folder of the '),S,n(" Tab in "),x,_,n(".")]),y,a("p",null,[e(s,{to:"/docs/4.2_ui_control.html"},{default:t(()=>[q]),_:1}),n(" | "),R,n(" | "),e(s,{to:"/docs/4.4_grids.html"},{default:t(()=>[T]),_:1})])])}const w=o(d,[["render",P],["__file","4.3_shapes_and_tables.html.vue"]]);export{w as default};
