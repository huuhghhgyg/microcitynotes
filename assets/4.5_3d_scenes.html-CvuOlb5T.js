import{_ as t}from"./icon_script_editor-S0ak5iz0.js";import{_ as p,c as o,b as s,a,f as l,g as i,e as c,r as u,o as r}from"./app-TX6nqiCH.js";const d={};function k(m,n){const e=u("RouteLink");return r(),o("div",null,[n[11]||(n[11]=s("h1",{id:"_4-5-3d-scenes",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_4-5-3d-scenes"},[s("span",null,"4.5 3D Scenes")])],-1)),s("p",null,[n[1]||(n[1]=s("strong",null,"Scenes",-1)),n[2]||(n[2]=a(" and inside ")),n[3]||(n[3]=s("strong",null,"3D objects",-1)),n[4]||(n[4]=a(" (")),l(e,{to:"/en/docs/3.4_3d_scenes.html"},{default:i(()=>n[0]||(n[0]=[a("3.4")])),_:1}),n[5]||(n[5]=a(') can be scripted. Sample codes for this chapter can be found in the "3d_samples" folder of the ')),n[6]||(n[6]=s("strong",null,"Project",-1)),n[7]||(n[7]=a(" Tab in ")),n[8]||(n[8]=s("img",{src:t,alt:"icon"},null,-1)),n[9]||(n[9]=s("strong",null,"ScriptEditor",-1)),n[10]||(n[10]=a("."))]),n[12]||(n[12]=c(`<h2 id="_3d-scene-and-object-manipulation" tabindex="-1"><a class="header-anchor" href="#_3d-scene-and-object-manipulation"><span>3D Scene and Object Manipulation</span></a></h2><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">CreateScene</span> <span class="token punctuation">(</span><span class="token string">&quot;Title&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> RotSpeed<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> TransSpeed<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Creates a new 3d scene and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">AddZipTo3DPath</span> <span class="token punctuation">(</span>Scene<span class="token punctuation">,</span> <span class="token string">&quot;filename.zip&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Adds a zip file to the search directory and returns true if succeed. It is useful for collecting a large amount of files.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">LoadSkybox</span> <span class="token punctuation">(</span>Scene<span class="token punctuation">,</span> <span class="token string">&quot;top.jpg&quot;</span> <span class="token punctuation">,</span><span class="token string">&quot;bottom.jpg&quot;</span> <span class="token punctuation">,</span><span class="token string">&quot;left.jpg&quot;</span> <span class="token punctuation">,</span><span class="token string">&quot;right.jpg&quot;</span> <span class="token punctuation">,</span><span class="token string">&quot;front.jpg&quot;</span> <span class="token punctuation">,</span><span class="token string">&quot;back.jpg&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Loads six image files as the skybox of a 3d scene.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">LoadObject</span> <span class="token punctuation">(</span>Scene<span class="token punctuation">,</span> <span class="token string">&quot;filename.3ds&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span>shadow <span class="token operator">=</span> <span class="token keyword">false</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> AnimationSpeed<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Loads a 3d object from a file and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">AddLight</span> <span class="token punctuation">(</span>Scene<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> Radius <span class="token punctuation">[</span><span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">,</span> g <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">255</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Adds a light object and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">Add3DLabel</span><span class="token punctuation">(</span>Scene<span class="token punctuation">,</span> <span class="token string">&quot;label&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> width<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">,</span> height<span class="token operator">=</span><span class="token number">10</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">180</span><span class="token punctuation">,</span> g <span class="token operator">=</span> <span class="token number">180</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">180</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&quot;font.xml&quot;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Adds a 3D label at (0,0,0) and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">Add3DLine</span> <span class="token punctuation">(</span>Scene<span class="token punctuation">,</span> x1<span class="token punctuation">,</span> y1<span class="token punctuation">,</span> z1<span class="token punctuation">,</span> x2<span class="token punctuation">,</span> y2<span class="token punctuation">,</span> z2 <span class="token punctuation">[</span><span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> g <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Adds a 3D line object frome (x1, y1, z1) to (x2, y2, z2) and retruns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">Add3DRect</span> <span class="token punctuation">(</span>Scene<span class="token punctuation">,</span> length<span class="token punctuation">,</span> width <span class="token punctuation">[</span><span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">180</span><span class="token punctuation">,</span> g <span class="token operator">=</span> <span class="token number">180</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">180</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Adds a 3D rectangular object from (-length/2,0,-width/2) to (length/2,0,width/2) and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">Add3DBox</span> <span class="token punctuation">(</span>Scene<span class="token punctuation">,</span> length<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height <span class="token punctuation">[</span><span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">180</span><span class="token punctuation">,</span> g <span class="token operator">=</span> <span class="token number">180</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">180</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> bShowEdge <span class="token operator">=</span> <span class="token keyword">true</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Adds a 3D box object from (-length/2,-height/2,-width/2) to (length/2,height/2,width/2) and returns the object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">AddSphere</span> <span class="token punctuation">(</span>Scene<span class="token punctuation">,</span> radius <span class="token punctuation">[</span><span class="token punctuation">,</span> polycount <span class="token operator">=</span> <span class="token number">16</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> r <span class="token operator">=</span> <span class="token number">180</span><span class="token punctuation">,</span> g <span class="token operator">=</span> <span class="token number">180</span><span class="token punctuation">,</span> b <span class="token operator">=</span> <span class="token number">180</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Adds a sphere at (0,0,0) and returns the object. If the radius parameter is less than 0, returns an invisible object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetTexture</span> <span class="token punctuation">(</span>Object<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Returns the texture files of a object: &quot;filename1&quot;, &quot;filename2&quot;, ... .</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">LoadTexture</span> <span class="token punctuation">(</span>Scene<span class="token punctuation">,</span> Object<span class="token punctuation">,</span> <span class="token string">&quot;filename1&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span> <span class="token string">&quot;filename2&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Loads texture files to an object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetPosition</span> <span class="token punctuation">(</span>Object<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">[</span><span class="token punctuation">,</span> absolute <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sets the position of an object relative to its parent (or the absolute position to the scene).</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetPosition</span> <span class="token punctuation">(</span>Object <span class="token punctuation">[</span><span class="token punctuation">,</span> absolute <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Gets the position of an object relative to its parent (or the absolute position to the scene).</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetRotation</span> <span class="token punctuation">(</span>Object<span class="token punctuation">,</span> rx<span class="token punctuation">,</span> ry<span class="token punctuation">,</span> rz <span class="token punctuation">[</span><span class="token punctuation">,</span> absolute <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sets the rotation (left hand rule) of an object in degrees relative to its parent (or the absolute rotation to the scene).</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetRotation</span> <span class="token punctuation">(</span>Object <span class="token punctuation">[</span><span class="token punctuation">,</span> absolute <span class="token operator">=</span> <span class="token keyword">false</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Gets the rotation (left hand rule) of an object in degrees relative to its parent (or the absolute rotation to the scene).</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetScale</span> <span class="token punctuation">(</span>Object<span class="token punctuation">,</span> sx<span class="token punctuation">,</span> sy<span class="token punctuation">,</span> sz<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sets the scale of an object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetScale</span> <span class="token punctuation">(</span>Object<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Gets the scale of an object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetParent</span> <span class="token punctuation">(</span>Object<span class="token punctuation">,</span> Parent<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Attaches an object to another object as a child.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetParent</span> <span class="token punctuation">(</span>Object<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Gets the parent of an object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetObject</span> <span class="token punctuation">(</span>Object <span class="token string">&quot;id&quot;</span> <span class="token punctuation">[</span><span class="token punctuation">,</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">,</span>rx<span class="token punctuation">,</span> ry<span class="token punctuation">,</span> rz <span class="token punctuation">[</span><span class="token punctuation">,</span>sx<span class="token punctuation">,</span> sy<span class="token punctuation">,</span> sz<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sets the ID, position, rotation and scale of an object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">DelObject</span> <span class="token punctuation">(</span>Object<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Deletes an object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetCamera</span> <span class="token punctuation">(</span>Scene<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token punctuation">[</span><span class="token punctuation">,</span>Tx<span class="token punctuation">,</span> Ty<span class="token punctuation">,</span> Tz<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sets the position and target of the scene camera.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetCamera</span> <span class="token punctuation">(</span>Scene<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Gets the camera object of a 3d scene and its position and targt.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetSelections</span> <span class="token punctuation">(</span>Scene<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Returns selected objects from a 3d scene.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetObjectID</span> <span class="token punctuation">(</span>Object1 <span class="token punctuation">[</span><span class="token punctuation">,</span> Object2<span class="token punctuation">,</span> <span class="token punctuation">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Returns &quot;id&quot;s of objects.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">SetObjectID</span> <span class="token punctuation">(</span>Object<span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Sets the id of an object.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token function">GetObject</span> <span class="token punctuation">(</span>Scene<span class="token punctuation">,</span> <span class="token string">&quot;id&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Finds an object by its id.</p>`,57))])}const g=p(d,[["render",k],["__file","4.5_3d_scenes.html.vue"]]),v=JSON.parse('{"path":"/en/docs/4.5_3d_scenes.html","title":"4.5 3D Scenes","lang":"en-US","frontmatter":{"prev":"./4.4_grids.md","next":"./4.6_networks.md","description":"4.5 3D Scenes Scenes and inside 3D objects () can be scripted. Sample codes for this chapter can be found in the \\"3d_samples\\" folder of the Project Tab in iconScriptEditor. 3D S...","head":[["meta",{"property":"og:url","content":"https://huuhghhgyg.github.io/MicroCityNotes/en/docs/4.5_3d_scenes.html"}],["meta",{"property":"og:site_name","content":"MicroCity Notes"}],["meta",{"property":"og:title","content":"4.5 3D Scenes"}],["meta",{"property":"og:description","content":"4.5 3D Scenes Scenes and inside 3D objects () can be scripted. Sample codes for this chapter can be found in the \\"3d_samples\\" folder of the Project Tab in iconScriptEditor. 3D S..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-25T03:41:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-25T03:41:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4.5 3D Scenes\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-25T03:41:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"3D Scene and Object Manipulation","slug":"_3d-scene-and-object-manipulation","link":"#_3d-scene-and-object-manipulation","children":[]}],"git":{"updatedTime":1700883676000,"contributors":[{"name":"huuhghhgyg","email":"huuhghhgyg@outlook.com","commits":4,"url":"https://github.com/huuhghhgyg"}]},"filePathRelative":"en/docs/4.5_3d_scenes.md","autoDesc":true,"excerpt":"\\n<p><strong>Scenes</strong> and inside <strong>3D objects</strong> (<a href=\\"/MicroCityNotes/en/docs/3.4_3d_scenes.html\\" target=\\"_blank\\">3.4</a>) can be scripted. Sample codes for this chapter can be found in the \\"3d_samples\\" folder of the <strong>Project</strong> Tab in <strong>ScriptEditor</strong>.</p>"}');export{g as comp,v as data};