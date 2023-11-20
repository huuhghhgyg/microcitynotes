import{_ as i}from"./button_load-ad8cb86f.js";import{_ as r}from"./button_action-ad2061de.js";import{_ as a}from"./button_3d-050223f5.js";import{_ as d,r as c,o as l,c as g,a as e,b as t,d as n,w as o,e as _}from"./app-b20d2587.js";const h="/MicroCityNotes/assets/new_grid-6d78c958.png",u="/MicroCityNotes/assets/grid_structure-3ee378f9.png",p="/MicroCityNotes/assets/grid_menu-e895d27d.png",m="/MicroCityNotes/assets/close_save_grid-ccbd51be.png",f="/MicroCityNotes/assets/grid_selection-8854b919.png",b="/MicroCityNotes/assets/grid_attributes-5692514f.png",v={},w=e("h1",{id:"_3-3-栅格图",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-3-栅格图","aria-hidden":"true"},"#"),t(" 3.3 栅格图")],-1),G=e("strong",null,"Grid",-1),y=e("strong",null,"Data",-1),x=e("strong",null,"Workspace",-1),C=e("strong",null,"Grid",-1),N=e("strong",null,"modules",-1),S=_('<h2 id="opening-creating-saving-and-closing-grids" tabindex="-1"><a class="header-anchor" href="#opening-creating-saving-and-closing-grids" aria-hidden="true">#</a> Opening, Creating, Saving and Closing Grids</h2><p>Users can click <img src="'+i+'" alt="button"><strong>Load</strong> button or <strong>File-&gt;Grid-&gt;Load</strong> menu item to open a <strong>Grid</strong>. Creating new <strong>Grid</strong> can be done from menu <strong>File-&gt;Grid-&gt;New</strong> and the pop-up dialog:</p><p><img src="'+h+'" alt="new grid">    <img src="'+u+'" alt="grid_structure"> The above right figure is the data structure and definitions of a Grid. A Grid starts from its bottom left corner which has coordinate <strong>(xMin, yMin)</strong>, contains <strong>NX*NY Square Cells</strong>. Each cell has its own <strong>Integer Coordinate</strong> (X, Y), in the range of (0, 0) to (XMax, YMax).</p><p>Saving <strong>Grid</strong> can be done from the right click context menu <strong>Save or Save As</strong>. You can also close a <strong>Grid</strong> from the menu and get a prompt dialog to save it.</p><p><img src="'+p+'" alt="grid menu">    <img src="'+m+'" alt="close and save"></p><h2 id="showing-and-editing-grids" tabindex="-1"><a class="header-anchor" href="#showing-and-editing-grids" aria-hidden="true">#</a> Showing and Editing Grids</h2>',6),M=e("strong",null,"Grid",-1),k=e("strong",null,"Data",-1),A=e("strong",null,"Action",-1),T=e("img",{src:r,alt:"button"},null,-1),D=e("strong",null,"Grid",-1),V=e("strong",null,"Attributes",-1),B=e("strong",null,"Settings",-1),E=e("p",null,[e("img",{src:f,alt:"grid selection"}),t("    "),e("img",{src:b,alt:"grid_attributes"})],-1),I=e("h2",{id:"display-settings-and-3d-view",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#display-settings-and-3d-view","aria-hidden":"true"},"#"),t(" Display Settings and 3D View")],-1),L=e("strong",null,"Grid",-1),Y=e("strong",null,"Settings",-1),P=e("img",{src:a,alt:"button"},null,-1),R=e("strong",null,"Grid",-1);function U(X,F){const s=c("RouterLink");return l(),g("div",null,[w,e("p",null,[t("MicroCity can open, create and edit SAGA Grid (*.sgrd) which is called "),G,t(" and maintained in the "),y,t(" Tab of the "),x,t(" Panel. Image files (*.bmp, *.gif, *.jpg, *.png, *.tif, *.pcx) can be opened as "),C,t(" as well. By using "),N,t(" (see "),n(s,{to:"/docs/3.7_modules.html"},{default:o(()=>[t("3.7")]),_:1}),t(") other raster file formats, such like ESRI Arc/Info Grid (*.adf) and Surfer Grid (*.grd), can also be imported or exported.")]),S,e("p",null,[t("Double click a "),M,t(" from the "),k,t(" Tab will give you a map view (for maps and layers see "),n(s,{to:"/docs/3.6_maps_and_layers.html"},{default:o(()=>[t("3.6")]),_:1}),t("). Toggle "),A,t(" botton "),T,t(" and select a range of cells in a "),D,t(". Then the value of these cells can be edited in the "),V,t(" Tab of the "),B,t(" Panel.")]),E,I,e("p",null,[t("Users can show cell values, change color and set transparency of a "),L,t(" by using "),Y,t(" Panel. Using "),P,t(" button can creat a 3D surface of a "),R,t(" in which cell values are translated to elevation (see "),n(s,{to:"/docs/3.6_maps_and_layers.html#controlling-map-views"},{default:o(()=>[t("3.6")]),_:1}),t(").")])])}const W=d(v,[["render",U],["__file","3.3_raster_grids.html.vue"]]);export{W as default};