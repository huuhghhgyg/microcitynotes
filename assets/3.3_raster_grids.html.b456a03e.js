import{_ as r}from"./button_load.c2b498fc.js";import{_ as a}from"./button_action.b9732718.js";import{_ as i}from"./button_3d.bf0cdabc.js";import{_ as d,r as l,o as c,c as g,a as t,b as s,e as n,w as o,f as _}from"./app.8a4c0097.js";const h="/./assets/new_grid.6d78c958.png",u="/./assets/grid_structure.3ee378f9.png",p="/./assets/grid_menu.e895d27d.png",m="/./assets/close_save_grid.ccbd51be.png",f="/./assets/grid_selection.8854b919.png",b="/./assets/grid_attributes.5692514f.png",v={},w=t("h1",{id:"_3-3-raster-grids",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_3-3-raster-grids","aria-hidden":"true"},"#"),s(" 3.3 Raster Grids")],-1),G=t("strong",null,"Grid",-1),x=t("strong",null,"Data",-1),S=t("strong",null,"Workspace",-1),y=t("strong",null,"Grid",-1),k=t("strong",null,"modules",-1),C=_('<h2 id="opening-creating-saving-and-closing-grids" tabindex="-1"><a class="header-anchor" href="#opening-creating-saving-and-closing-grids" aria-hidden="true">#</a> Opening, Creating, Saving and Closing Grids</h2><p>Users can click <img src="'+r+'" alt="button"><strong>Load</strong> button or <strong>File-&gt;Grid-&gt;Load</strong> menu item to open a <strong>Grid</strong>. Creating new <strong>Grid</strong> can be done from menu <strong>File-&gt;Grid-&gt;New</strong> and the pop-up dialog:</p><p><img src="'+h+'" alt="new grid">    <img src="'+u+'" alt="grid_structure"> The above right figure is the data structure and definitions of a Grid. A Grid starts from its bottom left corner which has coordinate <strong>(xMin, yMin)</strong>, contains <strong>NX*NY Square Cells</strong>. Each cell has its own <strong>Integer Coordinate</strong> (X, Y), in the range of (0, 0) to (XMax, YMax).</p><p>Saving <strong>Grid</strong> can be done from the right click context menu <strong>Save or Save As</strong>. You can also close a <strong>Grid</strong> from the menu and get a prompt dialog to save it.</p><p><img src="'+p+'" alt="grid menu">    <img src="'+m+'" alt="close and save"></p><h2 id="showing-and-editing-grids" tabindex="-1"><a class="header-anchor" href="#showing-and-editing-grids" aria-hidden="true">#</a> Showing and Editing Grids</h2>',6),T=t("strong",null,"Grid",-1),A=t("strong",null,"Data",-1),D=t("strong",null,"Action",-1),N=t("img",{src:a,alt:"button"},null,-1),V=t("strong",null,"Grid",-1),M=t("strong",null,"Attributes",-1),B=t("strong",null,"Settings",-1),E=t("p",null,[t("img",{src:f,alt:"grid selection"}),s("    "),t("img",{src:b,alt:"grid_attributes"})],-1),I=t("h2",{id:"display-settings-and-3d-view",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#display-settings-and-3d-view","aria-hidden":"true"},"#"),s(" Display Settings and 3D View")],-1),L=t("strong",null,"Grid",-1),R=t("strong",null,"Settings",-1),Y=t("img",{src:i,alt:"button"},null,-1),P=t("strong",null,"Grid",-1),U=t("strong",null,"< 3.2 Vector Shapes",-1),X=t("a",{href:"."},[t("strong",null,"Table of Contents")],-1),F=t("strong",null,"3.4 3D Scenes >",-1);function $(j,q){const e=l("RouterLink");return c(),g("div",null,[w,t("p",null,[s("MicroCity can open, create and edit SAGA Grid (*.sgrd) which is called "),G,s(" and maintained in the "),x,s(" Tab of the "),S,s(" Panel. Image files (*.bmp, *.gif, *.jpg, *.png, *.tif, *.pcx) can be opened as "),y,s(" as well. By using "),k,s(" (see "),n(e,{to:"/docs/3.7_modules.html"},{default:o(()=>[s("3.7")]),_:1}),s(") other raster file formats, such like ESRI Arc/Info Grid (*.adf) and Surfer Grid (*.grd), can also be imported or exported.")]),C,t("p",null,[s("Double click a "),T,s(" from the "),A,s(" Tab will give you a map view (for maps and layers see "),n(e,{to:"/docs/3.6_maps_and_layers.html"},{default:o(()=>[s("3.6")]),_:1}),s("). Toggle "),D,s(" botton "),N,s(" and select a range of cells in a "),V,s(". Then the value of these cells can be edited in the "),M,s(" Tab of the "),B,s(" Panel.")]),E,I,t("p",null,[s("Users can show cell values, change color and set transparency of a "),L,s(" by using "),R,s(" Panel. Using "),Y,s(" button can creat a 3D surface of a "),P,s(" in which cell values are translated to elevation (see "),n(e,{to:"/docs/3.6_maps_and_layers.html#controlling-map-views"},{default:o(()=>[s("3.6")]),_:1}),s(").")]),t("p",null,[n(e,{to:"/docs/3.2_vector_shapes.html"},{default:o(()=>[U]),_:1}),s(" | "),X,s(" | "),n(e,{to:"/docs/3.4_3d_scenes.html"},{default:o(()=>[F]),_:1})])])}const J=d(v,[["render",$],["__file","3.3_raster_grids.html.vue"]]);export{J as default};
