import{_ as a}from"./icon_microcity.4fee059d.js";import{_ as c}from"./button_load.c2b498fc.js";import{_ as l}from"./icon_shapes_polygon.f053fcef.js";import{_ as d}from"./button_action.b9732718.js";import{_ as h,r as s,o as g,c as _,a as t,b as o,e as n,w as r,f as p}from"./app.8a4c0097.js";const u="/./assets/world_countries.59f09c0c.png",m="/./assets/data_visualization.92e88960.png",f={},b=t("h1",{id:"_2-1-showing-a-world-map",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-1-showing-a-world-map","aria-hidden":"true"},"#"),o(" 2.1 Showing a World Map")],-1),k=t("p",null,"This tutorial will guide you in manipulating and visualizing GIS data in MicroCity.",-1),w=t("h2",{id:"loading-data-and-creating-a-map",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#loading-data-and-creating-a-map","aria-hidden":"true"},"#"),o(" Loading Data and Creating a Map")],-1),y=t("strong",null,"Download",-1),S={href:"https://github.com/microcity/microcity.github.io/raw/main/docs/data/countries.shp",target:"_blank",rel:"noopener noreferrer"},C={href:"https://github.com/microcity/microcity.github.io/raw/main/docs/data/countries.dbf",target:"_blank",rel:"noopener noreferrer"},x=t("img",{src:a,alt:"icon_microcity"},null,-1),T=t("strong",null,"MicroCity",-1),E=t("img",{src:c,alt:"button_load"},null,-1),I=t("strong",null,"Data Tab",-1),P=t("strong",null,"Data->Shapes->Polygon->01. countries",-1),D=t("img",{src:u,alt:"Screenshot"},null,-1),M=p('<h2 id="visualizing-coutries-properties" tabindex="-1"><a class="header-anchor" href="#visualizing-coutries-properties" aria-hidden="true">#</a> Visualizing Coutries&#39; Properties</h2><p>Right click <img src="'+l+'" alt="icon"> <strong>01. countries</strong> in the <strong>Workspace panel</strong>. Click <strong>Attributes-&gt;Table-&gt;Show</strong> in the popup menu. In the <strong>Settings</strong> Panel, find the <strong>Colors-&gt;Type</strong> option and select <strong>Graduated Color</strong>. In its sub-option <strong>Attribute</strong>, select <strong>POP_EST</strong> which is population property of countries. In the <strong>Setting</strong> Panel, find the <strong>Chart</strong> option and click the <strong>...</strong> button. In the popup dialog, select <strong>pie</strong> in Chart Type option and select <strong>GDP_MD_EST</strong> in Attribute (Size) option and select <strong>EXPORT</strong> and <strong>IMPORT</strong> checkboxs in Fields option and click <strong>Okay</strong> button. <img src="'+m+'" alt="Screenshot"></p><h2 id="editing-shapes" tabindex="-1"><a class="header-anchor" href="#editing-shapes" aria-hidden="true">#</a> Editing Shapes</h2><p>Select <img src="'+d+'" alt="button"><strong>Action</strong> button at toolbar. Left click some country and right click it and select <strong>Edit Selected Shape</strong> in the popup menu. Then the shape will be in editing mode. You can change its polygon points and finish your editing by right click and select <strong>Edit Selected Shape</strong> again.</p>',4),v=t("strong",null,"< What MicroCity Can Do",-1),z=t("a",{href:"."},[t("strong",null,"Table of Contents")],-1),L=t("strong",null,"2.2 Searching for Countries >",-1);function A(O,R){const e=s("ExternalLinkIcon"),i=s("RouterLink");return g(),_("div",null,[b,k,w,t("p",null,[y,o(" the "),t("a",S,[o("countries.shp"),n(e)]),o(" (ArcGIS shapefile) and the "),t("a",C,[o("countries.dbf"),n(e)]),o(" (dBase file) in a same folder. Open "),x,T,o(" and load "),E,o(" or drag the countries.shp into MicroCity and select "),I,o(" in Workspace panel. Double click "),P,o(" in Workspace panel. "),D]),M,t("p",null,[n(i,{to:"/docs/1.1_what_microcity_can_do.html"},{default:r(()=>[v]),_:1}),o(" | "),z,o(" | "),n(i,{to:"/docs/2.2_searching_for_countries.html"},{default:r(()=>[L]),_:1})])])}const $=h(f,[["render",A],["__file","2.1_showing_a_world_map.html.vue"]]);export{$ as default};
