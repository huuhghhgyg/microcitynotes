import{_ as i}from"./icon_microcity.4fee059d.js";import{_ as s}from"./button_load.c2b498fc.js";import{_ as r}from"./icon_shapes_polygon.f053fcef.js";import{_ as a}from"./button_action.b9732718.js";import{_ as c,r as l,o as d,c as g,a as t,b as o,d as e,f as h}from"./app.bb55360d.js";const p="/MicroCityNotes/assets/world_countries.59f09c0c.png",_="/MicroCityNotes/assets/data_visualization.92e88960.png",u={},m=t("h1",{id:"_2-1-showing-a-world-map",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-1-showing-a-world-map","aria-hidden":"true"},"#"),o(" 2.1 Showing a World Map")],-1),f=t("p",null,"This tutorial will guide you in manipulating and visualizing GIS data in MicroCity.",-1),b=t("h2",{id:"loading-data-and-creating-a-map",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#loading-data-and-creating-a-map","aria-hidden":"true"},"#"),o(" Loading Data and Creating a Map")],-1),y=t("strong",null,"Download",-1),k={href:"https://github.com/microcity/microcity.github.io/raw/main/docs/data/countries.shp",target:"_blank",rel:"noopener noreferrer"},S={href:"https://github.com/microcity/microcity.github.io/raw/main/docs/data/countries.dbf",target:"_blank",rel:"noopener noreferrer"},w=t("img",{src:i,alt:"icon_microcity"},null,-1),C=t("strong",null,"MicroCity",-1),x=t("img",{src:s,alt:"button_load"},null,-1),T=t("strong",null,"Data Tab",-1),E=t("strong",null,"Data->Shapes->Polygon->01. countries",-1),I=t("img",{src:p,alt:"Screenshot"},null,-1),M=h('<h2 id="visualizing-coutries-properties" tabindex="-1"><a class="header-anchor" href="#visualizing-coutries-properties" aria-hidden="true">#</a> Visualizing Coutries&#39; Properties</h2><p>Right click <img src="'+r+'" alt="icon"> <strong>01. countries</strong> in the <strong>Workspace panel</strong>. Click <strong>Attributes-&gt;Table-&gt;Show</strong> in the popup menu. In the <strong>Settings</strong> Panel, find the <strong>Colors-&gt;Type</strong> option and select <strong>Graduated Color</strong>. In its sub-option <strong>Attribute</strong>, select <strong>POP_EST</strong> which is population property of countries. In the <strong>Setting</strong> Panel, find the <strong>Chart</strong> option and click the <strong>...</strong> button. In the popup dialog, select <strong>pie</strong> in Chart Type option and select <strong>GDP_MD_EST</strong> in Attribute (Size) option and select <strong>EXPORT</strong> and <strong>IMPORT</strong> checkboxs in Fields option and click <strong>Okay</strong> button. <img src="'+_+'" alt="Screenshot"></p><h2 id="editing-shapes" tabindex="-1"><a class="header-anchor" href="#editing-shapes" aria-hidden="true">#</a> Editing Shapes</h2><p>Select <img src="'+a+'" alt="button"><strong>Action</strong> button at toolbar. Left click some country and right click it and select <strong>Edit Selected Shape</strong> in the popup menu. Then the shape will be in editing mode. You can change its polygon points and finish your editing by right click and select <strong>Edit Selected Shape</strong> again.</p>',4);function P(v,D){const n=l("ExternalLinkIcon");return d(),g("div",null,[m,f,b,t("p",null,[y,o(" the "),t("a",k,[o("countries.shp"),e(n)]),o(" (ArcGIS shapefile) and the "),t("a",S,[o("countries.dbf"),e(n)]),o(" (dBase file) in a same folder. Open "),w,C,o(" and load "),x,o(" or drag the countries.shp into MicroCity and select "),T,o(" in Workspace panel. Double click "),E,o(" in Workspace panel. "),I]),M])}const B=c(u,[["render",P],["__file","2.1_showing_a_world_map.html.vue"]]);export{B as default};
