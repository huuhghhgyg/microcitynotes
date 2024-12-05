import{_ as p}from"./fixed_increment_advance-Be9dYTkx.js";import{_ as r,c as d,e as a,f as s,b as o,a as n,g as i,r as l,o as m}from"./app-DBXIMjCi.js";const u={};function h(v,e){const c=l("FlowChart"),t=l("RouteLink");return m(),d("div",null,[e[8]||(e[8]=a('<h1 id="advancement-of-simulation-time" tabindex="-1"><a class="header-anchor" href="#advancement-of-simulation-time"><span>Advancement of Simulation Time</span></a></h1><p>The advancement of time in simulation refers to how the simulation time is progressed during the simulation process.</p><h2 id="classification-of-time-advancement-methods" tabindex="-1"><a class="header-anchor" href="#classification-of-time-advancement-methods"><span>Classification of Time Advancement Methods</span></a></h2><p>There are three main types of commonly used methods for advancing simulation time:</p><ul><li><strong>Event Scheduling Method</strong>: The event scheduling method is an event-based simulation method that progresses time by sorting the events in the simulation system and executing activities in the order of their occurrence.</li><li><strong>Fixed Increment Advancement Method</strong>: The fixed increment advancement method refers to fixing a time increment during the simulation process. After setting the initial time, the simulation progresses by incrementing the time based on the set increment.</li><li>Activity Event Scanning Method: For systems with high uncertainty, time advancement is achieved by scanning the events occurring in the system and executing the corresponding activities. This method may be more difficult to implement and can result in inaccurate time advancement (with errors), which could be due to my insufficient expertise. 😥</li></ul><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><h3 id="event-scheduling-method" tabindex="-1"><a class="header-anchor" href="#event-scheduling-method"><span>Event Scheduling Method</span></a></h3><p>The event scheduling method is an event-based simulation method that progresses time by sorting the events in the simulation system and executing activities in the order of their occurrence. During the simulation process, the simulation system progresses time to the next event and executes the corresponding activities based on the current simulation time and remaining events.</p><p>The event scheduling method can be divided into the following three main steps, which are also the main steps of the control program for event scheduling:</p><ul><li>Time Scanning: Determines the next event occurrence time and advances the simulation clock to that moment.</li><li>Event Identification: Accurately identifies the event to occur.</li><li>Event Execution: Accurately executes the event that occurs.</li></ul><p>The basic principle flowchart of the event scheduling method is as follows:</p>',11)),s(c,{id:"flowchart-61",code:"eJxVjrEOwjAMRPd8hUcY+gORkgVlYC4/ECUutWgdVKcI+HqcMHW8O/vdEVN1XmrcqoWrCooLfWOlwkZSZOfLE7euLdxoRRjVZeK7wTemQxxeyBWC2nv/J0HnU+Gs1JZfZkwPoAmoAglM2i0zZqNXyNnCSOu+dBYEzmJMGzf4NmPwrW3wimzYE5fzP+jqg6ISzQ/z6Ugl",preset:"vue"}),o("p",null,[e[1]||(e[1]=n("For the specific implementation of the event scheduling method in MicroCityWeb, please refer to ")),s(t,{to:"/en/notes/event-scheduling.html"},{default:i(()=>e[0]||(e[0]=[n("Discrete Event Simulation and Program Control - Coroutines")])),_:1}),e[2]||(e[2]=n("."))]),e[9]||(e[9]=a('<h3 id="fixed-increment-advancement-method" tabindex="-1"><a class="header-anchor" href="#fixed-increment-advancement-method"><span>Fixed Increment Advancement Method</span></a></h3><p>The fixed increment advancement method refers to progressing time by a fixed step length starting from the initial time during the simulation process. Within each step length, if no event occurs, the simulation clock advances by a unit of time T. If there are several events within the step, they are executed in order, and these events are considered to have occurred at the end of the step.</p><div style="text-align:center;"><p><img src="'+p+`" alt="Fixed Increment Advancement Method"></p><p>Example Problem</p></div><h4 id="code-flow-example" tabindex="-1"><a class="header-anchor" href="#code-flow-example"><span>Code Flow Example</span></a></h4><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">while</span> scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">do</span></span>
<span class="line">    t <span class="token operator">=</span> t <span class="token operator">+</span> dt</span>
<span class="line">    <span class="token keyword">if</span> t <span class="token operator">%</span> cycle <span class="token operator">~=</span> work_time <span class="token keyword">then</span></span>
<span class="line">        d <span class="token operator">=</span> d <span class="token operator">+</span> v <span class="token operator">*</span> dt</span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Time after departure:&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">,</span> <span class="token string">&quot;hours&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">else</span></span>
<span class="line">        <span class="token function">print</span><span class="token punctuation">(</span><span class="token string">&quot;Time after departure:&quot;</span><span class="token punctuation">,</span> t<span class="token punctuation">,</span> <span class="token string">&quot;hours, resting&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">end</span></span>
<span class="line"></span>
<span class="line">    car<span class="token punctuation">:</span><span class="token function">setpos</span><span class="token punctuation">(</span><span class="token function">CastToLine</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">-- linear trajectory</span></span>
<span class="line"></span>
<span class="line">    os<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>This is the main code flow and cannot be directly used.</p></blockquote>`,6)),o("p",null,[e[5]||(e[5]=n("The last part of ")),s(t,{to:"/en/notes/warehouse-simulation.html"},{default:i(()=>e[3]||(e[3]=[n("Simulation Idea for Automatic Warehouse")])),_:1}),e[6]||(e[6]=n(" mentions the ")),s(t,{to:"/en/notes/warehouse-simulation.html#improvement-space"},{default:i(()=>e[4]||(e[4]=[n("improvement space")])),_:1}),e[7]||(e[7]=n(" and implements the global simulation clock, ultimately achieving the time advancement method. It also implements non-fixed increment advancement, as detailed in the following section."))]),e[10]||(e[10]=a(`<h4 id="change-from-event-scheduling-to-main-clock-advancement-in-automatic-warehouse-simulation" tabindex="-1"><a class="header-anchor" href="#change-from-event-scheduling-to-main-clock-advancement-in-automatic-warehouse-simulation"><span>Change from Event Scheduling to Main Clock Advancement in Automatic Warehouse Simulation</span></a></h4><p>Specifically, the following changes were made based on the original:</p><ul><li>Most <code>os.sleep()</code> related to the event scheduling method were removed. Due to the simplicity of the simulation process, the event scheduling method related to cargo loading and unloading was retained to optimize resource utilization.</li><li>A global simulation clock was set to change the mindset of the <code>Agv:Move()</code> function from &quot;executing tasks and refreshing the scene with a fixed step length&quot; to &quot;monitoring changes in simulation clock duration, executing tasks based on the duration changes, and refreshing the scene&quot;.</li><li>Added simulation speed adjustment.</li></ul><p>From the above changes, it can be seen that the core of the simulation shifted from event tasks to the simulation clock. The part of scene refresh utilized <code>os.clock()</code>.</p><h3 id="non-fixed-increment-advancement-method" tabindex="-1"><a class="header-anchor" href="#non-fixed-increment-advancement-method"><span>Non-Fixed Increment Advancement Method</span></a></h3><p>Here is a simple example about the time advancement method and the <code>os.clock()</code> function, modified from the built-in cube rotation example in MicroCityWeb. In this example, <code>os.clock()</code> is used to calculate CPU running time, in order to achieve a certain ratio between simulated time and real-world time. The specific ratio can be adjusted by the <code>simspeed</code> (simulation speed) parameter.</p><div class="language-lua line-numbers-mode" data-highlighter="prismjs" data-ext="lua" data-title="lua"><pre><code><span class="line"><span class="token keyword">local</span> obj <span class="token operator">=</span> scene<span class="token punctuation">.</span><span class="token function">addobj</span><span class="token punctuation">(</span><span class="token string">&#39;box&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">-- Initial position</span></span>
<span class="line"><span class="token keyword">local</span> x <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">local</span> y <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">local</span> z <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">local</span> rx<span class="token punctuation">,</span> ry <span class="token operator">=</span> <span class="token number">0.1</span><span class="token punctuation">,</span> <span class="token number">0.1</span> <span class="token comment">-- rotation speeds in the x and y directions</span></span>
<span class="line"><span class="token keyword">local</span> simspeed <span class="token operator">=</span> <span class="token number">10</span> <span class="token comment">-- simulation speed</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">local</span> t <span class="token operator">=</span> <span class="token number">0</span> <span class="token comment">-- global simulation clock</span></span>
<span class="line"><span class="token keyword">local</span> t0 <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">clock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">-- record the start of the simulation time</span></span>
<span class="line"><span class="token keyword">while</span> scene<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">do</span></span>
<span class="line">    <span class="token keyword">local</span> dt <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">clock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> t0 <span class="token comment">-- calculate the time difference since the last recorded time</span></span>
<span class="line">    t <span class="token operator">=</span> t <span class="token operator">+</span> dt <span class="token comment">-- simulate the corresponding length of time that has passed on the simulation clock</span></span>
<span class="line">    </span>
<span class="line">    <span class="token comment">-- Set the rotation position of the cube at this moment</span></span>
<span class="line">    x <span class="token operator">=</span> x <span class="token operator">+</span> rx <span class="token operator">*</span> dt <span class="token operator">*</span> simspeed </span>
<span class="line">    y <span class="token operator">=</span> y <span class="token operator">+</span> ry <span class="token operator">*</span> dt <span class="token operator">*</span> simspeed </span>
<span class="line">    obj<span class="token punctuation">:</span><span class="token function">setrot</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span></span>
<span class="line">	</span>
<span class="line">    t0 <span class="token operator">=</span> os<span class="token punctuation">.</span><span class="token function">clock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">-- record the simulation time</span></span>
<span class="line"><span class="token keyword">end</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Related information:</p><ul><li>When the simulation speed <code>simspeed</code> is set to 1, it indicates that the simulation clock is running at the same speed as the real-world clock. <code>simspeed</code> can be considered as an acceleration factor.</li><li><code>dt</code> represents the time difference between two recorded times, and the time step in the simulation is calculated based on <code>dt*simspeed</code>.<div class="hint-container info"><p class="hint-container-title">Info</p><p>It should be noted that the value of the time increment <code>dt</code> is generally not the same in each loop cycle, and its specific value generally depends on the computer&#39;s processing power.</p></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Sometimes there may not be much time-consuming operation between two recorded times, and the calculated value of <code>dt</code> may be 0. Generally, there is a <code>scene.render()</code> between two time recordings, which usually ensures that a non-zero time difference can be calculated between the two samples.</p></div></li></ul><blockquote><p>This post is translated using ChatGPT, please <a href="https://github.com/huuhghhgyg/MicroCityNotes/issues/new" target="_blank" rel="noopener noreferrer"><strong>feedback</strong></a> if any omissions.</p></blockquote>`,10))])}const f=r(u,[["render",h],["__file","timelapse.html.vue"]]),b=JSON.parse('{"path":"/en/notes/timelapse.html","title":"Advancement of Simulation Time","lang":"en-US","frontmatter":{"description":"Advancement of Simulation Time The advancement of time in simulation refers to how the simulation time is progressed during the simulation process. Classification of Time Advanc...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://huuhghhgyg.github.io/MicroCityNotes/notes/timelapse.html"}],["meta",{"property":"og:url","content":"https://huuhghhgyg.github.io/MicroCityNotes/en/notes/timelapse.html"}],["meta",{"property":"og:site_name","content":"MicroCity Notes"}],["meta",{"property":"og:title","content":"Advancement of Simulation Time"}],["meta",{"property":"og:description","content":"Advancement of Simulation Time The advancement of time in simulation refers to how the simulation time is progressed during the simulation process. Classification of Time Advanc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-05T08:47:42.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-05T08:47:42.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Advancement of Simulation Time\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-05T08:47:42.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Classification of Time Advancement Methods","slug":"classification-of-time-advancement-methods","link":"#classification-of-time-advancement-methods","children":[]},{"level":2,"title":"Example","slug":"example","link":"#example","children":[{"level":3,"title":"Event Scheduling Method","slug":"event-scheduling-method","link":"#event-scheduling-method","children":[]},{"level":3,"title":"Fixed Increment Advancement Method","slug":"fixed-increment-advancement-method","link":"#fixed-increment-advancement-method","children":[]},{"level":3,"title":"Non-Fixed Increment Advancement Method","slug":"non-fixed-increment-advancement-method","link":"#non-fixed-increment-advancement-method","children":[]}]}],"git":{"updatedTime":1704444462000,"contributors":[{"name":"huuhghhgyg","email":"huuhghhgyg@outlook.com","commits":2,"url":"https://github.com/huuhghhgyg"}]},"filePathRelative":"en/notes/timelapse.md","autoDesc":true,"excerpt":"\\n<p>The advancement of time in simulation refers to how the simulation time is progressed during the simulation process.</p>\\n<h2>Classification of Time Advancement Methods</h2>\\n<p>There are three main types of commonly used methods for advancing simulation time:</p>\\n<ul>\\n<li><strong>Event Scheduling Method</strong>: The event scheduling method is an event-based simulation method that progresses time by sorting the events in the simulation system and executing activities in the order of their occurrence.</li>\\n<li><strong>Fixed Increment Advancement Method</strong>: The fixed increment advancement method refers to fixing a time increment during the simulation process. After setting the initial time, the simulation progresses by incrementing the time based on the set increment.</li>\\n<li>Activity Event Scanning Method: For systems with high uncertainty, time advancement is achieved by scanning the events occurring in the system and executing the corresponding activities. This method may be more difficult to implement and can result in inaccurate time advancement (with errors), which could be due to my insufficient expertise. 😥</li>\\n</ul>"}');export{f as comp,b as data};
