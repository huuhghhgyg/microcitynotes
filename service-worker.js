if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,f)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let r={};const d=e=>a(e,c),b={module:{uri:c},exports:r,require:d};s[c]=Promise.all(i.map((e=>b[e]||d(e)))).then((e=>(f(...e),r)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1.1_what_microcity_can_do.html-54617ef4.js",revision:"22fed015a5f1f1c12da74fada990e86a"},{url:"assets/1.1_what_microcity_can_do.html-6c95bf8d.js",revision:"b1eb68365103e492d11bc4c499d9cee4"},{url:"assets/2.1_showing_a_world_map.html-6cb3b5fe.js",revision:"ad16823c38824b1bb57cd00508715dee"},{url:"assets/2.1_showing_a_world_map.html-7c7eca7d.js",revision:"fdb3859a306a12cae0743f7d7511f482"},{url:"assets/2.2_searching_for_countries.html-04abd92b.js",revision:"160af9be2b3441e394233fca8013cb32"},{url:"assets/2.2_searching_for_countries.html-4570e012.js",revision:"35d9e89665e5471d568513ee6da61959"},{url:"assets/3.1_ui_overview.html-102ece36.js",revision:"0bc53af63a42b8651a18369fe5a95d10"},{url:"assets/3.1_ui_overview.html-6d150268.js",revision:"a304c7dc9aa48278efefe3eaad145f4c"},{url:"assets/3.2_vector_shapes.html-0cedbee9.js",revision:"2757b5380d95daf37bb286df5666d0e8"},{url:"assets/3.2_vector_shapes.html-15f67c83.js",revision:"53350c5b4aea63a879d4e33aeb61e632"},{url:"assets/3.3_raster_grids.html-3685194f.js",revision:"7b0c7fbac4ab8dd80227ec4ac934c61c"},{url:"assets/3.3_raster_grids.html-ee24414b.js",revision:"df3ed34e2ccc08009129cc0a8895ad39"},{url:"assets/3.4_3d_scenes.html-4880c526.js",revision:"c41095e94787fb774b4154a89574f503"},{url:"assets/3.4_3d_scenes.html-a796740d.js",revision:"4fa7bfe2a39abe0129569a1271563ad5"},{url:"assets/3.5_tables.html-4a206c80.js",revision:"8a8f6dd6b4b58d3d5a16ac44c81b0bda"},{url:"assets/3.5_tables.html-6e052148.js",revision:"c25bc852ce86ca0d39a12f47d1366905"},{url:"assets/3.6_maps_and_layers.html-2f018ff8.js",revision:"6802ef540a2320f0fd97169408dc7d1a"},{url:"assets/3.6_maps_and_layers.html-e10e7f34.js",revision:"095c4bdb5f275812c49e79b3e0d0fc92"},{url:"assets/3.7_modules.html-00f74f6a.js",revision:"9752ea9446d77e072691bdc08027dc55"},{url:"assets/3.7_modules.html-7d4e71b6.js",revision:"6d5be03a62c9aac07e3361acbf7e3181"},{url:"assets/4.1_si_overview.html-4df38018.js",revision:"bad7bbdc2615701b84bb02888cd47924"},{url:"assets/4.1_si_overview.html-b58a7b95.js",revision:"1c8e2e2ab82fe523046eb1d26737f6ff"},{url:"assets/4.2_ui_control.html-595a7096.js",revision:"34c4b65cf19aec5109f6cc98271b1675"},{url:"assets/4.2_ui_control.html-d76f927c.js",revision:"54510904fd8b7a14b7290fadc17a2ffa"},{url:"assets/4.3_shapes_and_tables.html-87d8e4f8.js",revision:"484cb4f3b77513bbe8e8502d8f81f5d6"},{url:"assets/4.3_shapes_and_tables.html-b4156a40.js",revision:"76815ed471fe28946a8d524943b30720"},{url:"assets/4.4_grids.html-2688fa94.js",revision:"9d0f40ddccb2b9ae3852bfdb42104227"},{url:"assets/4.4_grids.html-e9554afb.js",revision:"1f7e1daa5c219466c244f84667b76f88"},{url:"assets/4.5_3d_scenes.html-4bf324da.js",revision:"704375def9e0ab1e716cb8eda08e767a"},{url:"assets/4.5_3d_scenes.html-d441bdf4.js",revision:"ea7a79b37b3667dddabd6388c11837fb"},{url:"assets/4.6_networks.html-1bd6186c.js",revision:"58d587bd768382cffd2c9d918c82dad2"},{url:"assets/4.6_networks.html-31a14c79.js",revision:"403076fc94d44270910b5d46b0927d8a"},{url:"assets/4.7_des_simulations.html-2c6b3829.js",revision:"b445d48748e61ae56e06c983b7c63c85"},{url:"assets/4.7_des_simulations.html-339eaa84.js",revision:"e8ce1b2761946ba3b01102bbe5f3208e"},{url:"assets/4.8_mixed_integer_programming.html-6aaf2164.js",revision:"b6ea21121459e1e60183619db560f155"},{url:"assets/4.8_mixed_integer_programming.html-95f8cc73.js",revision:"5e056ffe001e875e2f4252f2f555f046"},{url:"assets/404.html-14a4cdee.js",revision:"44b5f286f5f0bd19768f95023be8de92"},{url:"assets/404.html-b1fab15f.js",revision:"4e6399436346db3ad3e397cb26a41c66"},{url:"assets/A2hs-286ca9be.js",revision:"c556a0697a1d949ae47d8b6899703ef3"},{url:"assets/app-7557f5c6.js",revision:"592116c5e5cbb14a7298679c4c55d734"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/button_3d-050223f5.js",revision:"b1d87c2188190dc8f9ad758ff3209930"},{url:"assets/button_action-ad2061de.js",revision:"a45c2da3625b69f983ea2f3f250ed37f"},{url:"assets/button_load-ad8cb86f.js",revision:"391a5543a75ec54a6c326b181f2841e4"},{url:"assets/framework-9fc6aeb2.js",revision:"d017ecc183413b143de34f7b807641e3"},{url:"assets/icon_microcity-478542b8.js",revision:"0e7e05a07396d393fc7977851d9d6556"},{url:"assets/icon_module-5fb09e4d.js",revision:"927274ea2b678bc32f744ed0e157301f"},{url:"assets/icon_script_editor-51788c73.js",revision:"2a9329638f5d3bdd769734a539f336b3"},{url:"assets/icon_shapes_polygon-0fc7a949.js",revision:"780fc09847b268c582be5334dce3ca5f"},{url:"assets/index.html-07a3d19c.js",revision:"f90c76f60649823c71b6e8a754b15950"},{url:"assets/index.html-3fe03399.js",revision:"a3d0abd6bb07b549e36d8640f61f5a2b"},{url:"assets/index.html-640e1553.js",revision:"f943db6c5e26c958016535be69cbc33e"},{url:"assets/index.html-6df673b8.js",revision:"19de056b0cbf354d47d8ec2f4066205c"},{url:"assets/index.html-98dd96b9.js",revision:"7df831fabd9f33f54365e6785186f43a"},{url:"assets/index.html-b98405c7.js",revision:"774c2e4be92f1a1b4cef084ab99119cd"},{url:"assets/index.html-d68d0525.js",revision:"dda4220e33aa0c937f1295ec61b23095"},{url:"assets/index.html-f1730fec.js",revision:"95d833cda51638aba85c5215a5e93681"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/lp.html-72bdfd21.js",revision:"8e9817ec3db4a83f40968325265cccd7"},{url:"assets/lp.html-fc5142a0.js",revision:"654492d2d5504eef7f9ea204f8c551d6"},{url:"assets/lua.html-1ac65dc2.js",revision:"e941eea4b597e8d55342cce7eb16c4a9"},{url:"assets/lua.html-e9854d0c.js",revision:"20b3a701bab964386c1dffdd36663a2f"},{url:"assets/network.html-1e97f326.js",revision:"1d64843e9a41774fca202cedacd6a6df"},{url:"assets/network.html-b6dca780.js",revision:"bc6f18f75cf40b49bfd158711a18815d"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/SearchBox-33bb6e43.js",revision:"80fa383cec96088c801d4021b019be15"},{url:"assets/style-6e83b91d.css",revision:"532e94aca149e52e6db256b7aceff1cc"},{url:"assets/two_way-db10fb1f.svg",revision:"19f0a97f9994249b0ff19be5269fd79f"},{url:"assets/visualization.html-73c84ca5.js",revision:"f6e071ec933f2b448ce4de9046d21aa0"},{url:"assets/visualization.html-90acc64a.js",revision:"01112ac172d6191da76c29bc86078325"},{url:"404.html",revision:"d63fdfd38eeb4a2ab5165eb9d188c126"},{url:"docs/1.1_what_microcity_can_do.html",revision:"19fe973606831723acc0dbd7c77baf52"},{url:"docs/2.1_showing_a_world_map.html",revision:"c1105b5d596aa67c3262cb68fbf8db2c"},{url:"docs/2.2_searching_for_countries.html",revision:"1acab9d9b3a84df453736ba4f6597c6d"},{url:"docs/3.1_ui_overview.html",revision:"7ee9c573487c3dde2b8f907466c1ab57"},{url:"docs/3.2_vector_shapes.html",revision:"b69fdcfaf11c8bc45118bca193cf4cc7"},{url:"docs/3.3_raster_grids.html",revision:"14e5023ba6cf43e914e8aee55b529aed"},{url:"docs/3.4_3d_scenes.html",revision:"13dc4556e300bc6218a981b90e9400a3"},{url:"docs/3.5_tables.html",revision:"edcc1963b5e7098dd6728d2e18f47ab9"},{url:"docs/3.6_maps_and_layers.html",revision:"eb1f0e8116b191f96eac01faffac8444"},{url:"docs/3.7_modules.html",revision:"61beb28818ae5cf94978b73a6f995081"},{url:"docs/4.1_si_overview.html",revision:"b002cc15dcf63fc4e43eaa2dd8bb9fbc"},{url:"docs/4.2_ui_control.html",revision:"56e12641f9675ad53240fff49a7c18be"},{url:"docs/4.3_shapes_and_tables.html",revision:"eb3b6aacfe20a265d5d3a4ef1d89da29"},{url:"docs/4.4_grids.html",revision:"2894bb00de92b865d84613b9f301f490"},{url:"docs/4.5_3d_scenes.html",revision:"8c2d61a78fe3554da0fb5c1eb54a9b93"},{url:"docs/4.6_networks.html",revision:"4f0c7d80c8c3a64b1144131e60f413d7"},{url:"docs/4.7_des_simulations.html",revision:"74fa982e5987a0ac3e78977bd60dcf46"},{url:"docs/4.8_mixed_integer_programming.html",revision:"4b634909a7edac4058314df8325adb54"},{url:"docs/imgs/index.html",revision:"03d001e9b31d94215c6ebb131751fe3d"},{url:"docs/index.html",revision:"a7b2ac7d27a674a7c3b582b886b3d687"},{url:"google3a9084eedb90aa13.html",revision:"5fdd561cbfed9c1a090e11665147df61"},{url:"index.html",revision:"1a46ba6ff5d976301aef08ace0d08005"},{url:"notes/index.html",revision:"30cab8b1fa57ce7af7e0d435ffb2ccff"},{url:"notes/lp.html",revision:"90adf651b16bcea11b905c94f3178422"},{url:"notes/lua.html",revision:"2dbce14a9794ce7d9ee3d04643cd2a15"},{url:"notes/network.html",revision:"b9d823f9ca9e013869aac7cb8f40f11a"},{url:"notes/visualization.html",revision:"0727e58a418dfa808ce5cc275006ffdb"},{url:"assets/city_logistics-1664b134.png",revision:"f0e83dfc21b4da0afee21ec1645a5ce4"},{url:"assets/close_save_grid-ccbd51be.png",revision:"06823158f287c332e303ce9e74f119b1"},{url:"assets/close_save_shapes-1b417e51.png",revision:"6285144c1d85e6c8d7c12459ea8ecfa2"},{url:"assets/data_visualization-92e88960.png",revision:"bcf2333bc33ffde8b5f201e79ae4fb2b"},{url:"assets/DL_Heatmap-dd6ce94d.png",revision:"5f26dd003befff9e1f6eb994197cf3ce"},{url:"assets/edit_point-a19bc15b.png",revision:"b56499ca449e9cb42efa0ef5fe21aefd"},{url:"assets/edit_shape-220e5d8f.png",revision:"5ee823e7cf71f04215c697036c15acb0"},{url:"assets/gis_data_structure-e0d0de5b.png",revision:"77fa044dae581369badf8cb87d8e006c"},{url:"assets/GraduatedColorProperties-7cfa6748.png",revision:"acaa6f8e656886bcec42e74379e9eee5"},{url:"assets/GraduatedColorResult-c782c941.png",revision:"9869925032dbd7d448f4b1b60ab3c8a9"},{url:"assets/GraduatedColorSettings-ed4a8a9a.png",revision:"74ff570e2d95f95663e1565bb86a75e8"},{url:"assets/grid_attributes-5692514f.png",revision:"99da94947795b278ee0bb4410dcf5e0e"},{url:"assets/grid_menu-e895d27d.png",revision:"636dff6ad1216aa74de6214aba408e9f"},{url:"assets/grid_selection-8854b919.png",revision:"a854dc544ec5239818be6a245b4d558a"},{url:"assets/grid_structure-3ee378f9.png",revision:"4be1f0e0a70ddd24dfe875312edef079"},{url:"assets/LabelAttribProperties-626ac855.png",revision:"f95bfff89484f9f07ec316c996da5cf3"},{url:"assets/layer_menu-6ca31e5d.png",revision:"55d3c08736142acc4245d482c2c0ce6a"},{url:"assets/LookupTableColor-10db14bb.png",revision:"af9601eb62ef3be4d01eb33f51a63661"},{url:"assets/LookupTableProperties-0ecb4f51.png",revision:"16ab4c133ef51f5e9db60a401211c0da"},{url:"assets/main_window-9123f68c.png",revision:"312ba4b6c91267ecef63c6ee00bc21e9"},{url:"assets/map_coordinates-da327b14.png",revision:"c39aa1c8a4c3ed6e5b507f8cf3874160"},{url:"assets/map_menu-09bcc68b.png",revision:"a95051447bc04efd2d5e706c872d3493"},{url:"assets/module_libraries_settings-dd7c0fc9.png",revision:"bf0570b0b6130844d28fa3c402a27ffb"},{url:"assets/module_settings-1a887b09.png",revision:"ba28f8624752e27c514377e213ea642a"},{url:"assets/modules-d3a93b78.png",revision:"55cea6ae301455d142cec78857a08aa9"},{url:"assets/new_grid-6d78c958.png",revision:"cf382a920be3a7338877a71b78d66365"},{url:"assets/new_scene-08d6e9d8.png",revision:"d5e69908016913fe08d8e00c90f6fb13"},{url:"assets/new_shapes-df4ba5d2.png",revision:"36c06984f09ac60f8161c8d6aa860cf7"},{url:"assets/new_table-8a32e9c0.png",revision:"89408a0284dd95c1421c0d5b4e6131f7"},{url:"assets/object_menu-b625bc11.png",revision:"eec516547d2a3ac027546ae348f4f054"},{url:"assets/PlotPrice1-2328e878.png",revision:"2343fd9de1abdbbaf15f5413236f76fb"},{url:"assets/PlotPrice2-c18b4f48.png",revision:"1a853fda82ea81fff7b44d65ba15346a"},{url:"assets/query_results-31e2845b.png",revision:"527d9a24621e0953478d8cd1224d973a"},{url:"assets/RangeDotRelateToMap-20b52dc3.png",revision:"503a9b2bb8e9a9106462e15478480baa"},{url:"assets/RelateToMapBig-d6b0ca1c.png",revision:"f0dd5026b6fa4bee47c155db6d44d822"},{url:"assets/RelateToMapSmall-6e9a8bd7.png",revision:"10945aba05b9286a9182b5957f15ef01"},{url:"assets/RelateToScreenBig-bca4cb07.png",revision:"2095d6f27c66191ed2f3a5c55e4e286f"},{url:"assets/RelateToScreenSmall-3831f1e8.png",revision:"9bb544030d3ed11649649524ea8d4bb4"},{url:"assets/scene_coordinate-c96bd73e.png",revision:"4a5134bd71717c44e496080a75478b39"},{url:"assets/scene_menu-442703ef.png",revision:"92664f67e27932c0d91c26ade6252378"},{url:"assets/script_editor-7fa005ad.png",revision:"5cee3858ed9d28fd46d30d87477de338"},{url:"assets/SelectLinksColor-240a09ee.png",revision:"90ba31fd0a8532b3f841b39f898c8b7e"},{url:"assets/SetParameterProperties-0acb1156.png",revision:"fdbc3e7d199a408b5526279c6d1c6474"},{url:"assets/shapes_files-bf1b62f1.png",revision:"9a734a267477ee4d92b1cf39554bd4e2"},{url:"assets/shapes_menu-ad30912a.png",revision:"1ce52bb22c77de1d9b138fac30adbf95"},{url:"assets/shipping_planning-40b10165.png",revision:"73ff5ae946bc1b3408af6852a40f14b2"},{url:"assets/shot_parameter_id-76d4dffb.png",revision:"c89a255188060a166f8890523d9596af"},{url:"assets/shot_script_editor-46219406.png",revision:"d7f18072054f41155cde343988a8a176"},{url:"assets/SizeProperties-453146b0.png",revision:"0c1b64600f1cac883992d07661a4832d"},{url:"assets/table_menu-e66f74f4.png",revision:"568acc7e16f0e89d9aab0846e6b37969"},{url:"assets/table_view_menu-30711cd5.png",revision:"a5b97ce1a8ed91d31c4fe571e0d5da4e"},{url:"assets/TableSelect-dc014ed8.png",revision:"a2f14a33f90021823a66786f4be84fae"},{url:"assets/terminal_simulation-246e0695.gif",revision:"b2c8c2047ae16200788732a65d9d342a"},{url:"assets/warehouse_simulation-21c167f0.gif",revision:"f62546662765fda4f41338846a1af6a6"},{url:"assets/world_countries-59f09c0c.png",revision:"e850582792c99b09af68ca948e2aff8e"},{url:"images/icon_microcity.png",revision:"08f31df45215c6018336c0acf1ff5e4d"},{url:"images/icon_microcitynotes.png",revision:"8fab94c045ebfa93980673848abc96b2"},{url:"images/icon/icon-144.png",revision:"06593bf0bb1b7646ed53c336be5ee07b"},{url:"images/icon/icon-192.png",revision:"dd4c61d0beacce8e965296d679fff0ca"},{url:"images/icon/icon-512.png",revision:"65e0e189f0e4f4fe72e6a6c47480c655"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
