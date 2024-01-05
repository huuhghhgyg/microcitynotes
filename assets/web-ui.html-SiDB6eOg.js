import{_ as l,a as s,b as d,c,d as h,e as u,f as p,g,h as f,i as b}from"./AutoTranslate-DxMBsWAh.js";import{_ as m}from"./CommandBar-jgj8yIQP.js";import{_ as k,r as o,o as w,c as v,a as e,b as t,d as i,w as y,e as n}from"./app-IN4dFWf9.js";const _={},C=n('<h1 id="user-interface-overview" tabindex="-1"><a class="header-anchor" href="#user-interface-overview" aria-hidden="true">#</a> User Interface Overview</h1><p>The overall interface of MicroCity Web is shown in the following image. This article will provide a detailed introduction to the user interface (UI) operations of MicroCity Web.</p><p><img src="'+l+'" alt="Overall Interface"></p><h2 id="overview-of-interface-sections" tabindex="-1"><a class="header-anchor" href="#overview-of-interface-sections" aria-hidden="true">#</a> Overview of Interface Sections</h2><p>In general, the interface of MicroCity Web can be divided into 4 sections.</p><ul><li><a href="#blue-section-commands">Top - Blue Section</a>: Executes various operations on code and files</li><li><a href="#green-section-code-editor">Left - Green Section</a>: Code editor</li><li><a href="#red-section-canvas">Right - Red Section</a>: View area</li><li><a href="#yellow-section-code-output">Bottom - Yellow Section</a>: Output information, recognizes program running status</li></ul><p><img src="'+s+'" alt="Interface Sections"></p><p>Below, we will provide a detailed explanation of the usage and features of these sections.</p><h2 id="blue-section-commands" tabindex="-1"><a class="header-anchor" href="#blue-section-commands" aria-hidden="true">#</a> Blue Section - Commands</h2><p>The content of this section is shown in the following image, and there are a total of 9 available buttons.</p><p><img src="'+m+'" alt="Command Bar"></p><p>Their specific functions are as follows:</p><ul><li><p><a href="#program-control">Program Control</a></p><ol><li>Run/Debug</li><li>Pause Execution</li><li>Stop Execution/Force Stop</li></ol></li><li><p><a href="#code-editing">Code Editing</a></p><ol start="4"><li>Show Editor / Hide Editor</li><li>Open Sample Code</li><li>Open Local Code File / Upload File to Virtual Disk</li><li>Save Code / Download</li></ol></li><li><p><a href="#others">Others</a></p><ol start="8"><li>Share</li><li>View Help Documentation</li></ol></li></ul><h3 id="program-control" tabindex="-1"><a class="header-anchor" href="#program-control" aria-hidden="true">#</a> Program Control</h3><p>The first three buttons are mainly used to control program execution. Their specific functions are as follows:</p><ol><li><p><strong>Run/Debug:</strong> Left-clicking will run the code in the left side <a href="#green-code-editor">Code Editor</a> of the webpage; Right-clicking will start debugging the code.</p></li><li><p><strong>Pause Execution:</strong> If the program is running, clicking this button will pause the program execution (if supported by the program).</p></li><li><p><strong>Stop Execution/Force Stop:</strong> If the program is running, left-clicking this button will stop the program execution. In some cases where left-clicking fails to stop the script, right-clicking can forcibly terminate its execution.</p></li></ol><p><img src="'+d+'" alt="Program Control"></p><h3 id="code-editing" tabindex="-1"><a class="header-anchor" href="#code-editing" aria-hidden="true">#</a> Code Editing</h3><p>Buttons numbered 4 to 7 are mainly related to code editing.</p><ol start="4"><li><p><strong>Show Editor / Hide Editor:</strong> If the left-side code editor is open, clicking this button will close it. If it is closed, clicking this button will open it again. If you right-click, the editor can expand to full screen.</p></li><li><p><strong>Open Sample Code:</strong> This button loads built-in code (imports built-in models), such as cube, truck, earth, world map, etc. The specific models will be discussed in detail when introducing the <a href="#red-canvas-area">Canvas area</a>.</p></li></ol><div style="text-align:center;"><p><img src="'+c+'" alt="Built-in Code"></p><p>List of built-in codes</p></div>',21),x={start:"6"},S=e("li",null,[e("p",null,[e("strong",null,"Open Local Code File / Upload File to Virtual Disk")]),e("p",null,[e("strong",null,"Left-clicking:"),t(" This opens a file dialog where you can select a code file (.lua) on your local machine. After selecting a file, its contents will be automatically imported into the left-side code editor.")]),e("p",null,[e("strong",null,"Right-clicking:"),t(' You can choose one or more files to upload to MicroCity Web. Right-clicking the "Save" button (⑦) allows you to view the list of uploaded files.')])],-1),E=e("p",null,[e("strong",null,"Save Code / Download")],-1),I=e("p",null,[e("strong",null,"Left-clicking:"),t(" When you save a file for the first time, clicking the save button will prompt a save file dialog where you can choose the save location and enter a file name. If you have previously saved the file locally, and you have made modifications and want to save the changes, simply click the save button to directly save the changes to the previously saved file.")],-1),B={class:"hint-container tip"},T=e("p",{class:"hint-container-title"},"Tips",-1),D=e("code",null,".mw",-1),R=e("p",null,[e("strong",null,"Right-clicking:"),t(" You can view the list of files uploaded to the virtual disk and download them to your local machine by clicking on a file in the list.")],-1),A=n('<h3 id="others" tabindex="-1"><a class="header-anchor" href="#others" aria-hidden="true">#</a> Others</h3><ol start="8"><li><strong>Share:</strong> After clicking this button, a dialog will pop up asking for a password. Afterwards, you will receive a link that anyone can use to access your shared content.</li></ol><p>If you enter a password in the pop-up dialog box, when others open the link, they can only run your program code and observe the running result, without being able to view your code (unless you inform them of the password); if you do not enter a password, others can not only run your code to view the running result, but also view the code you wrote.</p><ol start="9"><li><strong>View the help documentation.</strong></li></ol><h2 id="green-area-code-editor" tabindex="-1"><a class="header-anchor" href="#green-area-code-editor" aria-hidden="true">#</a> Green area: Code Editor</h2><p><img src="'+h+'" alt="Code Editor"></p><p>The integrated code editor on the left side of MicroCity Web is based on AceEditor, so it also has some features of AceEditor.</p><h3 id="keyboard-shortcuts" tabindex="-1"><a class="header-anchor" href="#keyboard-shortcuts" aria-hidden="true">#</a> Keyboard shortcuts</h3><p>Below are some common shortcuts to help you edit code more effectively.</p><p><strong>Most commonly used:</strong></p><ul><li><kbd>Ctrl</kbd>+<kbd>Z</kbd>: Undo</li></ul><p><strong>Line operations:</strong></p><ul><li><kbd>Ctrl</kbd>+<kbd>D</kbd>: Delete a line</li><li><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>D</kbd>: Duplicate a line</li><li><kbd>Alt</kbd>+<kbd>↑</kbd>: Move the line of code up</li><li><kbd>Alt</kbd>+<kbd>↓</kbd>: Move the line of code down</li></ul><p><strong>Search content:</strong></p><ul><li><kbd>Ctrl</kbd>+<kbd>K</kbd>: Find the next occurrence of the selected content in the code</li></ul><p><strong>Code indentation:</strong></p><ul><li><kbd>Ctrl</kbd>+<kbd>[</kbd>: Increase code indentation</li><li><kbd>Ctrl</kbd>+<kbd>]</kbd>: Decrease code indentation</li></ul><p><strong>Modify values:</strong></p><ul><li><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>↑</kbd>: Increment the value of the number before the cursor</li><li><kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>↓</kbd>: Decrement the value of the number before the cursor</li></ul><h2 id="red-area-canvas" tabindex="-1"><a class="header-anchor" href="#red-area-canvas" aria-hidden="true">#</a> Red area: Canvas</h2><p>You can import scenes from built-in code, see <a href="#%E4%BB%A3%E7%A0%81%E7%BC%96%E8%BE%91">Command Area - Code Editing</a></p><blockquote><p>After importing scene code, you need to click the &quot;Run&quot; button to load the scene.</p></blockquote><div style="text-align:center;"><p><img src="'+u+'" alt="Built-in Code_Cube"> Built-in car model</p><p><img src="'+p+'" alt="Built-in Code_Cube"> Built-in earth model</p></div><h3 id="scene-operations" tabindex="-1"><a class="header-anchor" href="#scene-operations" aria-hidden="true">#</a> Scene operations</h3><p>Operations on scenes, including perspective movement and rotation, need to be performed in the canvas area. Therefore, the basic operations in the canvas area are explained below.</p><ul><li>Zoom in/out on the scene: Scroll up the mouse wheel to zoom in and scroll down to zoom out.</li><li>Pan: Hold down the right mouse button and drag.</li><li>Rotate <ul><li>Scene rotation: Hold down the left mouse button and drag to rotate from your perspective.</li><li>Object rotation: Click on the object, and after the color of the object changes, hold down the left mouse button and drag to rotate around the object as the center. <img src="'+g+'" alt="Rotate object"></li></ul></li></ul><p>The above operations apply to both 2D and 3D objects.</p><h2 id="yellow-area-code-output" tabindex="-1"><a class="header-anchor" href="#yellow-area-code-output" aria-hidden="true">#</a> Yellow area: Code Output</h2><p>After opening MicroCity Web, the code output area is as follows. Clicking on the code output area will cause the entire area to move up, allowing you to see more historical output information.</p><p><img src="'+f+'" alt="Bottom Bar"></p><p>Speaking of the information output in this area, the code output area will display the following information:</p><ul><li><strong>Script output:</strong> The left side shows the output of the script, including the output time and script output content.</li><li><strong>Script running status:</strong> The first line on the right side indicates the running status of the script. <code>state:ready</code> indicates that the script is ready to start running (not running), <code>state:running</code> indicates that the script is running.</li><li><strong>MicroCityWeb version:</strong> Indicates the current version of MicroCityWeb being used. If it differs from the known version, you can force refresh to load the latest version.</li></ul><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><p><img src="'+b+'" alt="Disable Auto-Translate"></p><p><strong>Disable Auto-Translate:</strong> If your operating system language is not English and your browser has auto-translate enabled, you need to manually disable it, otherwise code execution will result in errors.</p>',35),M={href:"https://github.com/huuhghhgyg/MicroCityNotes/issues/new",target:"_blank",rel:"noopener noreferrer"},O=e("strong",null,"feedback",-1);function L(W,F){const a=o("RouterLink"),r=o("ExternalLinkIcon");return w(),v("div",null,[C,e("ol",x,[S,e("li",null,[E,I,e("div",B,[T,e("p",null,[t("In the new version of MicroCity Web, the code and uploaded files are packaged as "),D,t(" files. For more information, please refer to "),i(a,{to:"/en/notes/debug.md/#file-saving"},{default:y(()=>[t("File Saving | Debugging Related")]),_:1}),t(".")])]),R])]),A,e("blockquote",null,[e("p",null,[t("This post is translated using ChatGPT, please "),e("a",M,[O,i(r)]),t(" if any omissions.")])])])}const N=k(_,[["render",L],["__file","web-ui.html.vue"]]);export{N as default};
