import{_ as a}from"./button_load-GOP3K2yO.js";import{_ as d,a as _,b as l,c,d as g,e as h}from"./grid_attributes-xxRYXyrC.js";import{_ as m}from"./button_action-tmG_4IgV.js";import{_ as p}from"./button_3d-coWyniAs.js";import{_ as u,r as n,o as f,c as G,a as t,b as r,d as s,w as e,e as x}from"./app-L7G4vjgb.js";const b={},k=x('<h1 id="_3-3-栅格图" tabindex="-1"><a class="header-anchor" href="#_3-3-栅格图" aria-hidden="true">#</a> 3.3 栅格图</h1><p>MicroCity可以打开、创建和编辑SAGA Grid（*.sgrd），在<strong>工作空间面板</strong>的<strong>数据</strong>选项卡中被称为<strong>Grid</strong>并进行维护。图像文件（*.bmp、*.gif、*.jpg、*.png、*.tif、*.pcx）也可以被作为<strong>Grid</strong>打开。通过使用<strong>模块</strong>（参见[3.7](3.7_modules.md）），其他栅格文件格式，例如ESRI Arc/Info Grid（*.adf）和Surfer Grid（*.grd），也可以被导入或导出。</p><h2 id="打开、创建、保存和关闭grid" tabindex="-1"><a class="header-anchor" href="#打开、创建、保存和关闭grid" aria-hidden="true">#</a> 打开、创建、保存和关闭Grid</h2><p>用户可以点击<img src="'+a+'" alt="按钮"><strong>Load</strong>按钮或<strong>File-&gt;Grid-&gt;Load</strong>菜单项来打开一个<strong>Grid</strong>。从菜单<strong>File-&gt;Grid-&gt;New</strong>中可以创建一个新的<strong>Grid</strong>，然后弹出对话框:</p><p><img src="'+l+'" alt="new grid">    <img src="'+c+'" alt="grid_structure"></p><p>上图是一个Grid的数据结构和定义。Grid从其左下角开始，具有坐标**(xMin, yMin)<strong>，包含</strong>NX*NY个方形单元格**。每个单元格有自己的<strong>整数坐标</strong>(X, Y)，范围从(0, 0)到(XMax, YMax)。</p><p>保存Grid可通过右键上下文菜单<strong>Save or Save As</strong>来完成。也可以通过菜单关闭Grid，并获得一个提示对话框来保存它。</p><p><img src="'+g+'" alt="grid menu">    <img src="'+h+'" alt="close and save"></p><h2 id="显示和编辑grids" tabindex="-1"><a class="header-anchor" href="#显示和编辑grids" aria-hidden="true">#</a> 显示和编辑Grids</h2>',9),N=t("strong",null,"数据",-1),v=t("strong",null,"Grid",-1),w=t("strong",null,"Action",-1),y=t("img",{src:m,alt:"按钮"},null,-1),L=t("strong",null,"Grid",-1),M=t("strong",null,"设置面板",-1),S=t("strong",null,"属性",-1),A=t("p",null,[t("img",{src:d,alt:"grid selection"}),r("    "),t("img",{src:_,alt:"grid_attributes"})],-1),C=t("h2",{id:"显示设置和3d视图",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#显示设置和3d视图","aria-hidden":"true"},"#"),r(" 显示设置和3D视图")],-1),E=t("strong",null,"设置",-1),I=t("strong",null,"网格",-1),V=t("img",{src:p,alt:"button"},null,-1),B=t("strong",null,"网格",-1),R={href:"https://github.com/huuhghhgyg/MicroCityNotes/issues/new",target:"_blank",rel:"noopener noreferrer"},X=t("strong",null,"反馈",-1);function Y(D,F){const o=n("RouterLink"),i=n("ExternalLinkIcon");return f(),G("div",null,[k,t("p",null,[r("双击"),N,r("选项卡中的一个"),v,r("将为您提供一个地图视图（有关地图和图层，请参见"),s(o,{to:"/docs/3.6_maps_and_layers.html"},{default:e(()=>[r("3.6")]),_:1}),r("）。切换"),w,r("按钮 "),y,r("，然后在"),L,r("中选择一系列单元格。然后可以在"),M,r("的"),S,r("选项卡中编辑这些单元格的值。")]),A,C,t("p",null,[r("用户可以使用"),E,r("面板来显示单元格的值，更改颜色并设置"),I,r("的透明度。使用"),V,r("按钮可以创建一个"),B,r("的3D表面，其中单元格的值被转换为高程（见"),s(o,{to:"/docs/3.6_maps_and_layers.html#controlling-map-views"},{default:e(()=>[r("3.6")]),_:1}),r("）。")]),t("blockquote",null,[t("p",null,[r("这篇文章使用ChatGPT翻译自其他语言，如果有问题请在"),t("a",R,[X,s(i)]),r("页面提交反馈。")])])])}const z=u(b,[["render",Y],["__file","3.3_raster_grids.html.vue"]]);export{z as default};