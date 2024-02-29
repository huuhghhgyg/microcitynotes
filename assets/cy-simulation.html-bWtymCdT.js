import{_ as r,a as c,b as h,c as l,d,e as p,f as m,g as u,h as f,i as g,j as b,k as y,l as v,m as w,n as x,o as _,p as k,q as G,r as j,s as T,t as A,u as q,v as V}from"./Result-All2-cnkq843b.js";import{_ as I,r as n,o as P,c as R,a as e,b as t,d as s,w as S,e as a}from"./app-WB5ROtMu.js";const C={},M=a('<h1 id="port-agv-service-process-3d-simulation-approach" tabindex="-1"><a class="header-anchor" href="#port-agv-service-process-3d-simulation-approach"><span>Port AGV Service Process 3D Simulation Approach</span></a></h1><blockquote><p>This train of thought is for reference only.</p></blockquote><p><img src="'+r+'" alt="Banner"></p><p>Simulating the process of a container terminal is a complex task that involves many factors and entities. This article mainly introduces the approach to simulate the process of AGV receiving services from the yard crane to accepting services from the quay crane using MicroCityWeb.</p><h2 id="implementing-yard-crane-handling-of-containers" tabindex="-1"><a class="header-anchor" href="#implementing-yard-crane-handling-of-containers"><span>Implementing Yard Crane Handling of Containers</span></a></h2><p><img src="'+c+'" alt="Problem 1 Screenshot"></p><h3 id="overall-approach" tabindex="-1"><a class="header-anchor" href="#overall-approach"><span>Overall Approach</span></a></h3><p>Implementing the handling of containers by the yard crane is the first step in simulating the yard. I plan to use an object-oriented approach for this part, abstracting the yard crane and the yard as objects.</p><h4 id="overall-structure" tabindex="-1"><a class="header-anchor" href="#overall-structure"><span>Overall Structure</span></a></h4><p>The specific idea is to treat the <strong>yard as a data model</strong> that stores various data, such as container entities, coordinates of containers in corresponding positions (rows, columns, heights), etc. The <strong>yard crane is treated as an operator</strong> responsible for the yard crane&#39;s 3D animation and management of data in the yard object.</p><p>The benefit of doing this is to decouple the yard crane from the yard, making it easier to expand in the future. In addition, if the object&#39;s properties are well considered, multiple objects can be easily created in the same scene to simulate multiple yard cranes operating in the yard.</p><h4 id="events-and-tasks" tabindex="-1"><a class="header-anchor" href="#events-and-tasks"><span>Events and Tasks</span></a></h4><p>I plan to create <strong>task sequences</strong> for the main entity objects that require movement in the overall process. This allows for parallel operations of multiple yard cranes in the same scene, with each yard crane performing its own tasks without interfering with each other. In addition, a central control program is needed to control the execution of tasks at each time node and the 3D animation of the yard crane.</p><h4 id="business-process" tabindex="-1"><a class="header-anchor" href="#business-process"><span>Business Process</span></a></h4><p>In this simulation, the main focus of the business process is the movement of containers. Therefore, the most important aspect is the transfer of ownership of containers. The process flow of container ownership transfer is shown in the following diagram:</p><div style="text-align:center;"><p><img src="'+h+'" alt="Container Object Process Flow" width="600"></p><p>Container Object Process Flow</p></div><h3 id="object-structure" tabindex="-1"><a class="header-anchor" href="#object-structure"><span>Object Structure</span></a></h3><p>The following are the structures of the main objects involved in this simulation.</p><div style="text-align:center;"><p><img src="'+l+'" alt="Structure of Yard Crane Object" width="500"></p><p><img src="'+d+'" alt="Structure of Yard Object" width="500"></p></div><h3 id="implementation-approach" tabindex="-1"><a class="header-anchor" href="#implementation-approach"><span>Implementation Approach</span></a></h3><h4 id="yard-size" tabindex="-1"><a class="header-anchor" href="#yard-size"><span>Yard Size</span></a></h4><p>For the yard object, since its main function is to store container objects and related data (such as coordinates of corresponding positions), we need to determine the size of the yard. Therefore, determining the size of the yard is a necessary step. When creating the yard object, we need to determine the size of the yard, including the number of rows, columns, and height. This facilitates subsequent operations.</p><p>My approach is to first determine the <strong>area occupied by the yard</strong> and the <strong>number of container layers</strong>. Based on the relevant data, we can calculate the maximum number of rows and columns that can be used to place containers.</p><ul><li>Regarding <strong>the area occupied by the yard</strong>, it can be determined by inputting the coordinates of two points when creating the object. Based on the diagonal formed by connecting the two points, we can determine the area occupied by the yard.</li><li>As for <strong>the number of container layers</strong>, it can be determined by inputting a number when creating the object. Based on these two inputs, we can determine the size of the yard.</li></ul><p><img src="'+p+'" alt="Yard Layout Calculation"></p><h4 id="events-and-tasks-1" tabindex="-1"><a class="header-anchor" href="#events-and-tasks-1"><span>Events and Tasks</span></a></h4><p>Since the yard crane is the main object that needs to be moved in this simulation, we only need to operate the yard crane during each loop of task execution.</p><p>Therefore, I plan to treat the task sequence of the yard crane as a <strong>queue</strong>. During each loop of task execution, we take out the first task from the object&#39;s task sequence and execute it. After execution, we check if the task completion condition is met. If so, we delete the task and move on to the next one. This ensures that the yard crane objects execute tasks in order during each loop of task execution.</p><p>The method for executing tasks is <code>executeTask(dt)</code>, where the object executes tasks based on the duration <code>dt</code>. The <code>executeTask(dt)</code> function contains the logic for processing tasks, including task type determination, task execution, and task deletion.</p><p>If there are multiple yard cranes in the scene, simply add these objects to the list of objects executing tasks. During each loop of task execution, the main control program will iterate through this list of objects and execute tasks for each object.</p>',30),O={class:"hint-container tip"},L=a('<p class="hint-container-title">Tips</p><p>Note that although the task execution appears to be simultaneous in terms of time, it actually depends on the sequence position of the objects.</p><p>One example is: suppose two objects need to occupy position A at the same time. According to the order of the task sequence, the object that is executed first will occupy position A, while the object that is executed later will fail to occupy it, even though they are both trying to occupy position A at the same moment. Therefore, it is not strictly simultaneous execution here, but sequential execution according to the task sequence at the same time.</p><h4 id="business-process-1" tabindex="-1"><a class="header-anchor" href="#business-process-1"><span>Business Process</span></a></h4><ol><li>The yard crane first obtains the coordinates of the corresponding position (row, column, height) of the container from the yard and moves the spreader to the designated position in the yard to grab the container. The ownership of the container is transferred from the yard (<code>cy.containers</code>) to the yard crane spreader (<code>rmg.attached</code>) (by removing the table reference, setting the value to <code>nil</code>).</li><li>The yard crane moves the container to the aisle and releases it there. In the same way, the ownership of the container is transferred from the yard crane spreader (<code>rmg.attached</code>) to the aisle (<code>rmg.stash</code>), indicating that the container can be picked up.</li><li>If there is a vehicle that takes away the container, the ownership of the container can be further transferred from the aisle of the yard crane (<code>rmg.stash</code>) to the vehicle.</li></ol><h3 id="results" tabindex="-1"><a class="header-anchor" href="#results"><span>Results</span></a></h3><p><img src="'+m+'" alt="Yard Crane Simulation"></p><h2 id="implementation-of-the-whole-process-from-agv-arrival-to-service" tabindex="-1"><a class="header-anchor" href="#implementation-of-the-whole-process-from-agv-arrival-to-service"><span>Implementation of the Whole Process from AGV Arrival to Service</span></a></h2><h3 id="problem-description" tabindex="-1"><a class="header-anchor" href="#problem-description"><span>Problem Description</span></a></h3><p><img src="'+u+'" alt="Problem 2 Description"></p><p>Implement the three-dimensional representation of the process above using event scheduling method.</p><h3 id="what-s-new" tabindex="-1"><a class="header-anchor" href="#what-s-new"><span>What&#39;s New</span></a></h3><p>The implementation of the previous simulation serves as the foundation for this simulation. Compared to the previous simulation, the most significant improvement in this simulation is:</p><ul><li>Using the <strong>object-oriented</strong> programming paradigm to create objects of four types: yard crane, yard (data model), AGV, quay crane, and ship (data model), and implement the movement methods for the objects and their components.</li></ul>',14),D=a('<ul><li>Continuing with the idea of <strong>event-driven simulation</strong>, the overall control process is implemented to control multiple objects simultaneously at the same time (primarily achieved through the object&#39;s <code>executeTask(dt)</code> and <code>maxStep()</code> functions). In the object-oriented programming paradigm, <code>executeTask(dt)</code> and <code>maxStep()</code> can be seen as interfaces. The main program controls the objects by implementing these two interfaces. (Although Lua seems to lack this concept.)</li><li>Using task sequences to implement the flow of each object, achieving mutual waiting between the yard crane and AGV, and between the AGV and quay crane, and coordinating tasks between different objects.</li><li>Attempting to extend the flow from the yard to the AGV, and then to the quay crane and ship, implementing two-level queuing and waiting.</li></ul><h3 id="object-design" tabindex="-1"><a class="header-anchor" href="#object-design"><span>Object Design</span></a></h3><p>Due to the large number of attributes and functions, the design of objects is presented in the form of a mind map.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>This section takes up a lot of space. You can also directly jump to the next section <a href="#overall-layout">Overall Layout</a>.</p></div>',4),Y=a('<h4 id="yard" tabindex="-1"><a class="header-anchor" href="#yard"><span>Yard</span></a></h4><p>The yard remains as the data model. <img src="'+f+'" alt="Yard"></p><h4 id="yard-crane" tabindex="-1"><a class="header-anchor" href="#yard-crane"><span>Yard Crane</span></a></h4><p><img src="'+g+'" alt="Yard Crane"></p><h4 id="agv" tabindex="-1"><a class="header-anchor" href="#agv"><span>AGV</span></a></h4><p><img src="'+b+'" alt="AGV"></p><h4 id="quay-crane" tabindex="-1"><a class="header-anchor" href="#quay-crane"><span>Quay Crane</span></a></h4><p>The code and structures involving the quay crane are derived mainly from the yard, so they will not be described in detail later. <img src="'+y+'" alt="Quay Crane"></p><h4 id="ship" tabindex="-1"><a class="header-anchor" href="#ship"><span>Ship</span></a></h4><p>The ship object also serves as a data model, designed similarly to the yard.</p><div style="text-align:center;"><p><img src="'+v+'" alt="Ship" width="400"></p></div><h3 id="overall-layout" tabindex="-1"><a class="header-anchor" href="#overall-layout"><span>Overall Layout</span></a></h3><p><img src="'+w+'" alt="Overall Layout"></p><h3 id="overall-process" tabindex="-1"><a class="header-anchor" href="#overall-process"><span>Overall Process</span></a></h3><div style="text-align:center;"><p><img src="'+x+'" alt="Overall Process Diagram"></p><p>Container Flow Process</p></div><p>Compared to the previous simulation, this simulation goes further in terms of the process. It adds the flow of AGV arrival and queuing, as well as the service of the quay crane and container loading onto the ship.</p><h4 id="process-analysis" tabindex="-1"><a class="header-anchor" href="#process-analysis"><span>Process Analysis</span></a></h4><p>With the introduction of AGVs, the flow between the yard crane, quay crane, and AGV has becomes more complex. First, the arrival of AGVs is random, which may cause queuing. Second, the arrival of AGVs triggers the flows of the yard crane and AGV, which in turn trigger the flow of the quay crane. Therefore, the flow of this simulation is a multi-level flow that needs to consider the coordination between multiple objects.</p><p>Especially in the process between AGV and RMG, there is a mutual waiting between AGV and RMG. When the AGV arrives, it needs to notify the RMG to extract the cargo. In the process of extraction by the RMG:</p><ul><li>The RMG needs to wait for the AGV to arrive at the designated position before it can move the cargo onto the AGV.</li><li>The AGV needs to wait for the RMG to grab the container and place it on the AGV before transferring the ownership of the container from the RMG to the AGV.</li></ul><p>Therefore, the process between the AGV and the RMG is a mutually waiting process. The specific process can be referred to in the diagram below.</p><div style="text-align:center;"><p><img src="'+_+'" alt="Process Diagram of Mutual Waiting between AGV and RMG" width="400"></p></div><p>The process of the quay crane is similar to that of the RMG, which is also a mutually waiting process. The main points are:</p><ul><li>When the AGV arrives at the designated position, the quay crane may be serving other AGVs, so the AGV has to wait.</li><li>When the AGV just enters the service area of the quay crane, it notifies the quay crane to reach the designated position. If the quay crane arrives at the designated position first, it has to wait.</li></ul><h3 id="implementation-method" tabindex="-1"><a class="header-anchor" href="#implementation-method"><span>Implementation Method</span></a></h3><h4 id="implementation-of-queuing-process" tabindex="-1"><a class="header-anchor" href="#implementation-of-queuing-process"><span>Implementation of Queuing Process</span></a></h4><p>For AGV queuing, I chose to use cellular automaton as the data model of parking spaces. The length of each parking space is:</p>',27),W=e("p",{class:"katex-block"},[e("span",{class:"katex-display"},[e("span",{class:"katex"},[e("span",{class:"katex-mathml"},[e("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[e("semantics",null,[e("mrow",null,[e("mtext",null,"Length of Parking Space"),e("mo",null,"="),e("mtext",null,"Length of 1 Container in the data model"),e("mo",null,"+"),e("mtext",null,"Gap between containers")]),e("annotation",{encoding:"application/x-tex"}," \\text{Length of Parking Space} = \\text{Length of 1 Container in the data model} + \\text{Gap between containers} ")])])]),e("span",{class:"katex-html","aria-hidden":"true"},[e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),e("span",{class:"mord text"},[e("span",{class:"mord"},"Length of Parking Space")]),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),e("span",{class:"mrel"},"="),e("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),e("span",{class:"mord text"},[e("span",{class:"mord"},"Length of 1 Container in the data model")]),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),e("span",{class:"mbin"},"+"),e("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),e("span",{class:"base"},[e("span",{class:"strut",style:{height:"0.8889em","vertical-align":"-0.1944em"}}),e("span",{class:"mord text"},[e("span",{class:"mord"},"Gap between containers")])])])])])],-1),z=a('<p>Since the length of the AGV is slightly longer than that of 1 container, it needs to occupy the length of 2 parking spaces. When executing a task, the AGV checks if the space ahead is blocked, and if not, it moves forward. If the space ahead is the target bay, it moves forward and waits for the RMG operation, then continues to move forward in terms of cells until it leaves. The queuing principles for the RMG and quay crane are also the same.</p><div style="text-align:center;"><p><img src="'+k+'" alt="AGV Queuing Diagram"></p><p>Diagram of AGV Cellular Automaton Queuing Model</p></div><h4 id="implementation-of-event-scheduling-method" tabindex="-1"><a class="header-anchor" href="#implementation-of-event-scheduling-method"><span>Implementation of Event Scheduling Method</span></a></h4><p>In the previous simulation, I used a variable step size to advance the time for simulation. In this simulation, I used the event scheduling method to accurately advance the events to their occurrence time for execution.</p><p>You may have noticed that in the <a href="#object-design">Object Design</a> section, <code>executeTask()</code> and <code>maxstep()</code> are marked as <code>(interface)</code>. This is because to calculate the accurate advancement time, I need to implement <code>executeTask()</code> and <code>maxstep()</code> methods in each object. The <code>executeTask()</code> method is used to execute the task, and the <code>maxstep()</code> method is used to calculate the time remaining for the current task to be completed and obtain the maximum advancement time based on that, and then compare it with the interval time <code>dt</code> obtained from the system execution to get the maximum advancement time.</p><p>I believe that the following diagram from the course can effectively represent how the event scheduling method is used for simulation and scene refreshing. The first row refers to the business process of simulation, and the Refresh part in the second row refers to refreshing the scene.</p><p><img src="'+G+'" alt="Event Scheduling Diagram"></p><h3 id="results-1" tabindex="-1"><a class="header-anchor" href="#results-1"><span>Results</span></a></h3><div class="hint-container warning"><p class="hint-container-title">Warning</p><p>The following parts contain animated GIFs, and the images have a large file size. Since this site is hosted on GitHub Pages, if you don&#39;t have a special network environment, the animated GIFs may load slowly or even fail to load.</p></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>If you encounter moiré patterns in the animated GIFs while directly viewing them, you can try opening them to enlarge the view and see if there is any improvement.</p></div><p>RMG running process <img src="'+j+'" alt="RMG Running Process 1"></p><p><img src="'+T+'" alt="RMG Running Process 2"></p><p>Quay crane running process <img src="'+A+'" alt="Quay Crane Running Process"></p><p>Overall running process <img src="'+q+'" alt="Overall Running Process 1"></p><p><img src="'+V+'" alt="Overall Running Process 2"></p>',15),B={href:"https://github.com/huuhghhgyg/MicroCityNotes/issues/new",target:"_blank",rel:"noopener noreferrer"},F=e("strong",null,"feedback",-1);function E(N,Q){const o=n("RouterLink"),i=n("ExternalLinkIcon");return P(),R("div",null,[M,e("div",O,[L,e("blockquote",null,[e("p",null,[t("If you are not familiar with object-oriented programming, you can refer to "),s(o,{to:"/en/notes/oop.html"},{default:S(()=>[t("General Knowledge - Object-Oriented Programming")]),_:1}),t(".")])]),D]),Y,W,z,e("blockquote",null,[e("p",null,[t("This post is translated using ChatGPT, please "),e("a",B,[F,s(i)]),t(" if any omissions.")])])])}const K=I(C,[["render",E],["__file","cy-simulation.html.vue"]]);export{K as default};
