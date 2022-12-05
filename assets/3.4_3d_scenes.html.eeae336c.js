import{_ as e}from"./button_load.c2b498fc.js";import{_ as n,o as t,c as s,f as o}from"./app.b7f26e6b.js";const a="/MicroCityNotes/assets/new_scene.08d6e9d8.png",r="/MicroCityNotes/assets/scene_menu.442703ef.png",i="/MicroCityNotes/assets/object_menu.b625bc11.png",c="/MicroCityNotes/assets/scene_coordinate.c96bd73e.png",g={},d=o('<h1 id="_3-4-3d场景" tabindex="-1"><a class="header-anchor" href="#_3-4-3d场景" aria-hidden="true">#</a> 3.4 3D场景</h1><p>MicroCity 3D Scene (*.m3d) is a data file format to store 3D scenes&#39; information. Popular 3D file formats including 3D Studio Max (*.3ds), Wavefront OBJ (*.obj) and Stereolithography (*.stl) can be <strong>loaded</strong> as objects in a scene (<a href="#showing-and-editing-3d-scenes">see below</a>) but not be stored in the .m3d file.</p><h2 id="opening-creating-saving-and-closing-3d-scenes" tabindex="-1"><a class="header-anchor" href="#opening-creating-saving-and-closing-3d-scenes" aria-hidden="true">#</a> Opening, Creating, Saving and Closing 3D Scenes</h2><p>Users can click <strong>Load</strong> button <img src="'+e+'" alt="button"> or <strong>File-&gt;Scene-&gt;Load</strong> menu item to open a <strong>Scene</strong>. Creating new <strong>Scene</strong> can be done from menu <strong>File-&gt;Scene-&gt;New</strong> and fill the pop-up dialog as shown below. After pressing <strong>Okay</strong> button an item will appear in the <strong>Data</strong> Tab of the <strong>Workspace</strong> Panel. Then <strong>Scene</strong> can be <strong>saved</strong> or <strong>closed</strong> through right-click menu:</p><p><img src="'+a+'" alt="new scene">    <img src="'+r+'" alt="scene_menu"></p><h2 id="showing-and-editing-3d-scenes" tabindex="-1"><a class="header-anchor" href="#showing-and-editing-3d-scenes" aria-hidden="true">#</a> Showing and Editing 3D Scenes</h2><p>Double click a <strong>Scene</strong> from the <strong>Data</strong> tab will give you a <strong>scene view</strong>. <strong>Left-mouse-dragging</strong> in a scene veiw will rotate the camera and <strong>right-mouse-dragging</strong> will translate the camera. <strong>Double-left-clicking</strong> a scene view can select objects and <strong>Double-right-clicking</strong> a scene view can popup a context menu (shown below). One can add objects, load objects and set objects, etc.. Note that the <strong>Rotation</strong> in the coordinate system should obey <strong>Left-hand</strong> rule. The illustration of the coordinate system and an example of the rotation around y-axis is shown below:</p><p><img src="'+i+'" alt="object_menu">    <img src="'+c+'" alt="scene_coordinate"></p><p>The coordinate used in the position and rotation of an object is <strong>relative</strong> to its parent object. By default, the parent of a new object is null.</p><h2 id="display-settings" tabindex="-1"><a class="header-anchor" href="#display-settings" aria-hidden="true">#</a> Display Settings</h2><p>Users can change the background color, reference grid or other display options of a <strong>Scene</strong> by using <strong>Settings</strong> Panel.</p>',11),l=[d];function h(p,m){return t(),s("div",null,l)}const b=n(g,[["render",h],["__file","3.4_3d_scenes.html.vue"]]);export{b as default};
