if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let r={};const f=e=>a(e,d),b={module:{uri:d},exports:r,require:f};s[d]=Promise.all(i.map((e=>b[e]||f(e)))).then((e=>(c(...e),r)))}}define(["./workbox-cbd5c79e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"assets/1.1_what_microcity_can_do.html-34fd4054.js",revision:"26402d394278c136d4d12d86830245d9"},{url:"assets/1.1_what_microcity_can_do.html-cca5cb01.js",revision:"0ab7378c0495d0df88d1b2bee90405ff"},{url:"assets/2.1_showing_a_world_map.html-56e24b63.js",revision:"d6e4ab1e690053e3944dab0c0973a9ca"},{url:"assets/2.1_showing_a_world_map.html-e29818a0.js",revision:"4bca3622bda446d88bb6b05db9426c09"},{url:"assets/2.2_searching_for_countries.html-68e77739.js",revision:"cc465850b2ab18084a2c5fae3b2969ac"},{url:"assets/2.2_searching_for_countries.html-a5a39909.js",revision:"f8f96d4a976e48583e5343c3feb1aee7"},{url:"assets/3.1_ui_overview.html-3822c775.js",revision:"b5d49db3a3f5119a66560f69bf55d151"},{url:"assets/3.1_ui_overview.html-521c40c2.js",revision:"dce0bbd4704e72f2c0ba0f28db3f80ac"},{url:"assets/3.2_vector_shapes.html-97111062.js",revision:"d7bfa7d459fc73bdd06a7155c0097548"},{url:"assets/3.2_vector_shapes.html-a0b04a96.js",revision:"fed7638da4b717e7f926477ec3f99366"},{url:"assets/3.3_raster_grids.html-b4f623e1.js",revision:"bdf3698e966de9175ddd7ad76a569075"},{url:"assets/3.3_raster_grids.html-e869cf0b.js",revision:"5edb00b8304d4ac6a38f925db92662cd"},{url:"assets/3.4_3d_scenes.html-cb326aaa.js",revision:"b156765cc75d445563904375287def63"},{url:"assets/3.4_3d_scenes.html-cd0c818c.js",revision:"f8d463bb1f15c30edd589676aa6bd4cf"},{url:"assets/3.5_tables.html-4093cc06.js",revision:"44e801bcdf89220338967e7eabe15361"},{url:"assets/3.5_tables.html-d2ea90a4.js",revision:"11b1bbc88d8ef0b40f463ad1c8ca8ce3"},{url:"assets/3.6_maps_and_layers.html-3be60476.js",revision:"c91d1546445358d73abca7b793739cd4"},{url:"assets/3.6_maps_and_layers.html-c9d9b8cf.js",revision:"b380a12ad73103a527ae414478ced1de"},{url:"assets/3.7_modules.html-15445fc5.js",revision:"08b8053e5a74c51c06e968546b0100bc"},{url:"assets/3.7_modules.html-f443d950.js",revision:"3b8c7fddeef042d26f70ccddf52a4e86"},{url:"assets/3d_objects_en.html-e7bc8c25.js",revision:"c105a65788d4fbe65177a26ac5079eaf"},{url:"assets/3d_objects_en.html-eff18170.js",revision:"5194561e633edd42dcb4d11a1eb6a318"},{url:"assets/3d_objects.html-b8caf160.js",revision:"ef44d0f80c5b068f1a95c894926a1fe9"},{url:"assets/3d_objects.html-d4a06675.js",revision:"9d8baf7baf41f97cd3198aa127b7e39b"},{url:"assets/3d_scene_en.html-2a560764.js",revision:"cec3567bfc5b8f03e9de847c7aabfdb9"},{url:"assets/3d_scene_en.html-5a3a3b37.js",revision:"0d5f6541d56d427b62f2bfe7d1740ab3"},{url:"assets/3d_scene.html-2743ae05.js",revision:"6e5e1bde1731802bab14555175ef19e8"},{url:"assets/3d_scene.html-6de8b432.js",revision:"43b2ec60f53390b0c3bea0f864617afb"},{url:"assets/4.1_si_overview.html-1f435be2.js",revision:"02573f08ddc085f4fe702ea34cee80e5"},{url:"assets/4.1_si_overview.html-ba3b9836.js",revision:"02d2ef2ac8115b345d80c74d576436b3"},{url:"assets/4.2_ui_control.html-01364891.js",revision:"e700b2ad44dfe0836ae6e8109910d9d8"},{url:"assets/4.2_ui_control.html-292e2328.js",revision:"3dc3d6b1311740ec6886b6217f4398b0"},{url:"assets/4.3_shapes_and_tables.html-3a297fd9.js",revision:"4ba0583a4f9bb11a5465bc47797f1854"},{url:"assets/4.3_shapes_and_tables.html-55efe0d4.js",revision:"ed61b01ec19780188349dfd95daef44f"},{url:"assets/4.4_grids.html-245dff1a.js",revision:"cb5ab9f471ec4e06df6ca395edc88d7c"},{url:"assets/4.4_grids.html-f8672e20.js",revision:"c3b71f04c9bd5f0cde5524671710fcc8"},{url:"assets/4.5_3d_scenes.html-0a901340.js",revision:"d8976a7c4da55861764c001ea39bf482"},{url:"assets/4.5_3d_scenes.html-543d915b.js",revision:"79cd7fbb5378d8d1a55d795c86edfa15"},{url:"assets/4.6_networks.html-78dcc619.js",revision:"2dd00898b478024e21343ce851c31c8e"},{url:"assets/4.6_networks.html-e41b725c.js",revision:"4fd7a53a6c44170f856c4a2afccb7a22"},{url:"assets/4.7_des_simulations.html-3e37a6a5.js",revision:"b422b32de1f64841ced212359926d055"},{url:"assets/4.7_des_simulations.html-cbfbc9cb.js",revision:"9e6af3f962aee35caec63a626df336c2"},{url:"assets/4.8_mixed_integer_programming.html-44ab7c45.js",revision:"7ffa2a018a336ee7060aa9a589496f19"},{url:"assets/4.8_mixed_integer_programming.html-b260f762.js",revision:"481b19fd6e005b49675d995c616a89d8"},{url:"assets/404.html-510eecfe.js",revision:"d9d8bbe4476db75f55602a872936c43a"},{url:"assets/404.html-64ec1846.js",revision:"0cd70369fd6564ad1fb43eed62e358ee"},{url:"assets/A2hs-ff152677.js",revision:"757baabbf26bd17af4e70a9075609666"},{url:"assets/app-5b80ee66.js",revision:"a5999c698d072709080523cb99e4cacd"},{url:"assets/AutoTranslate-69d71a2c.js",revision:"d99e4430b92ebcfbd5c0d65edb0e4896"},{url:"assets/back-to-top-8efcbe56.svg",revision:"cbe7b14b16686bbafd5f42b528a5360e"},{url:"assets/button_3d-050223f5.js",revision:"b1d87c2188190dc8f9ad758ff3209930"},{url:"assets/button_action-ad2061de.js",revision:"a45c2da3625b69f983ea2f3f250ed37f"},{url:"assets/button_load-ad8cb86f.js",revision:"391a5543a75ec54a6c326b181f2841e4"},{url:"assets/coordinate-3f58bdc2.js",revision:"fb10fbb20084962399397c8af25e98f9"},{url:"assets/flowchart-35969cab.js",revision:"9e6946328eeacbd52ab4fc11bd4a99f8"},{url:"assets/framework-ce30d885.js",revision:"47a3093f09dabd42e42036141dd38d6c"},{url:"assets/giscus-9b97f17f.js",revision:"a519f6eb52505a1196cccfcabfc4dd6a"},{url:"assets/icon_microcity-478542b8.js",revision:"0e7e05a07396d393fc7977851d9d6556"},{url:"assets/icon_module-5fb09e4d.js",revision:"927274ea2b678bc32f744ed0e157301f"},{url:"assets/icon_script_editor-51788c73.js",revision:"2a9329638f5d3bdd769734a539f336b3"},{url:"assets/icon_shapes_polygon-0fc7a949.js",revision:"780fc09847b268c582be5334dce3ca5f"},{url:"assets/index-70769223.js",revision:"097390f0c66585e8b9e39361bf5f05d1"},{url:"assets/index.html-29e92a59.js",revision:"01d70a74109bce819e1841e5c2997e3f"},{url:"assets/index.html-476d7115.js",revision:"7b85c80687e768bb7760d5c0a0ab4f57"},{url:"assets/index.html-4850372b.js",revision:"133f5bbfa7113d06619a6d43017010f1"},{url:"assets/index.html-b18b74fd.js",revision:"e0173cc7b6b4369c18e2ed850ad7b5a3"},{url:"assets/index.html-bcc633b8.js",revision:"71bc645da8090eae2b075ab873aa28ac"},{url:"assets/index.html-cf867437.js",revision:"d34b9b5e9f4dfa2056862771068d2add"},{url:"assets/index.html-f2f533a5.js",revision:"c670674409998f60767b4b4e8c70bf52"},{url:"assets/index.html-fce98dc3.js",revision:"c44ac16678bcc0a05c60a49134ab355e"},{url:"assets/KaTeX_AMS-Regular-0cdd387c.woff2",revision:"66c678209ce93b6e2b583f02ce41529e"},{url:"assets/KaTeX_AMS-Regular-30da91e8.woff",revision:"10824af77e9961cfd548c8a458f10851"},{url:"assets/KaTeX_AMS-Regular-68534840.ttf",revision:"56573229753fad48910bda2ea1a6dd54"},{url:"assets/KaTeX_Caligraphic-Bold-07d8e303.ttf",revision:"497bf407c4c609c6cf1f1ad38f437f7f"},{url:"assets/KaTeX_Caligraphic-Bold-1ae6bd74.woff",revision:"de2ba279933d60f7819ff61f71c17bed"},{url:"assets/KaTeX_Caligraphic-Bold-de7701e4.woff2",revision:"a9e9b0953b078cd40f5e19ef4face6fc"},{url:"assets/KaTeX_Caligraphic-Regular-3398dd02.woff",revision:"a25140fbe6692bffe71a2ab861572eb3"},{url:"assets/KaTeX_Caligraphic-Regular-5d53e70a.woff2",revision:"08d95d99bf4a2b2dc7a876653857f154"},{url:"assets/KaTeX_Caligraphic-Regular-ed0b7437.ttf",revision:"e6fb499fc8f9925eea3138cccba17fff"},{url:"assets/KaTeX_Fraktur-Bold-74444efd.woff2",revision:"796f3797cdf36fcaea18c3070a608378"},{url:"assets/KaTeX_Fraktur-Bold-9163df9c.ttf",revision:"b9d7c4497cab3702487214651ab03744"},{url:"assets/KaTeX_Fraktur-Bold-9be7ceb8.woff",revision:"40934fc076960bb989d590db044fef62"},{url:"assets/KaTeX_Fraktur-Regular-1e6f9579.ttf",revision:"97a699d83318e9334a0deaea6ae5eda2"},{url:"assets/KaTeX_Fraktur-Regular-51814d27.woff2",revision:"f9e6a99f4a543b7d6cad1efb6cf1e4b1"},{url:"assets/KaTeX_Fraktur-Regular-5e28753b.woff",revision:"e435cda5784e21b26ab2d03fbcb56a99"},{url:"assets/KaTeX_Main-Bold-0f60d1b8.woff2",revision:"a9382e25bcf75d856718fcef54d7acdb"},{url:"assets/KaTeX_Main-Bold-138ac28d.ttf",revision:"8e431f7ece346b6282dae3d9d0e7a970"},{url:"assets/KaTeX_Main-Bold-c76c5d69.woff",revision:"4cdba6465ab9fac5d3833c6cdba7a8c3"},{url:"assets/KaTeX_Main-BoldItalic-70ee1f64.ttf",revision:"52fb39b0434c463d5df32419608ab08a"},{url:"assets/KaTeX_Main-BoldItalic-99cd42a3.woff2",revision:"d873734390c716d6e18ff3f71ac6eb8b"},{url:"assets/KaTeX_Main-BoldItalic-a6f7ec0d.woff",revision:"5f875f986a9bce1264e8c42417b56f74"},{url:"assets/KaTeX_Main-Italic-0d85ae7c.ttf",revision:"39349e0a2b366f38e2672b45aded2030"},{url:"assets/KaTeX_Main-Italic-97479ca6.woff2",revision:"652970624cde999882102fa2b6a8871f"},{url:"assets/KaTeX_Main-Italic-f1d6ef86.woff",revision:"8ffd28f6390231548ead99d7835887fa"},{url:"assets/KaTeX_Main-Regular-c2342cd8.woff2",revision:"f8a7f19f45060f7a177314855b8c7aa3"},{url:"assets/KaTeX_Main-Regular-c6368d87.woff",revision:"f1cdb692ee31c10b37262caffced5271"},{url:"assets/KaTeX_Main-Regular-d0332f52.ttf",revision:"818582dae57e6fac46202cfd844afabb"},{url:"assets/KaTeX_Math-BoldItalic-850c0af5.woff",revision:"48155e43d9a284b54753e50e4ba586dc"},{url:"assets/KaTeX_Math-BoldItalic-dc47344d.woff2",revision:"1320454d951ec809a7dbccb4f23fccf0"},{url:"assets/KaTeX_Math-BoldItalic-f9377ab0.ttf",revision:"6589c4f1f587f73f0ad0af8ae35ccb53"},{url:"assets/KaTeX_Math-Italic-08ce98e5.ttf",revision:"fe5ed5875d95b18c98546cb4f47304ff"},{url:"assets/KaTeX_Math-Italic-7af58c5e.woff2",revision:"d8b7a801bd87b324efcbae7394119c24"},{url:"assets/KaTeX_Math-Italic-8a8d2445.woff",revision:"ed7aea12d765f9e2d0f9bc7fa2be626c"},{url:"assets/KaTeX_SansSerif-Bold-1ece03f7.ttf",revision:"f2ac73121357210d91e5c3eaa42f72ea"},{url:"assets/KaTeX_SansSerif-Bold-e99ae511.woff2",revision:"ad546b4719bcf690a3604944b90b7e42"},{url:"assets/KaTeX_SansSerif-Bold-ece03cfd.woff",revision:"0e897d27f063facef504667290e408bd"},{url:"assets/KaTeX_SansSerif-Italic-00b26ac8.woff2",revision:"e934cbc86e2d59ceaf04102c43dc0b50"},{url:"assets/KaTeX_SansSerif-Italic-3931dd81.ttf",revision:"f60b4a34842bb524b562df092917a542"},{url:"assets/KaTeX_SansSerif-Italic-91ee6750.woff",revision:"ef725de572b71381dccf53918e300744"},{url:"assets/KaTeX_SansSerif-Regular-11e4dc8a.woff",revision:"5f8637ee731482c44a37789723f5e499"},{url:"assets/KaTeX_SansSerif-Regular-68e8c73e.woff2",revision:"1ac3ed6ebe34e473519ca1da86f7a384"},{url:"assets/KaTeX_SansSerif-Regular-f36ea897.ttf",revision:"3243452ee6817acd761c9757aef93c29"},{url:"assets/KaTeX_Script-Regular-036d4e95.woff2",revision:"1b3161eb8cc67462d6e8c2fb96c68507"},{url:"assets/KaTeX_Script-Regular-1c67f068.ttf",revision:"a189c37d73ffce63464635dc12cbbc96"},{url:"assets/KaTeX_Script-Regular-d96cdf2b.woff",revision:"a82fa2a7e18b8c7a1a9f6069844ebfb9"},{url:"assets/KaTeX_Size1-Regular-6b47c401.woff2",revision:"82ef26dc680ba60d884e051c73d9a42d"},{url:"assets/KaTeX_Size1-Regular-95b6d2f1.ttf",revision:"0d8d9204004bdf126342605f7bbdffe6"},{url:"assets/KaTeX_Size1-Regular-c943cc98.woff",revision:"4788ba5b6247e336f734b742fe9900d5"},{url:"assets/KaTeX_Size2-Regular-2014c523.woff",revision:"b0628bfd27c979a09f702a2277979888"},{url:"assets/KaTeX_Size2-Regular-a6b2099f.ttf",revision:"1fdda0e59ed35495ebac28badf210574"},{url:"assets/KaTeX_Size2-Regular-d04c5421.woff2",revision:"95a1da914c20455a07b7c9e2dcf2836d"},{url:"assets/KaTeX_Size3-Regular-500e04d5.ttf",revision:"963af864cbb10611ba33267ba7953777"},{url:"assets/KaTeX_Size3-Regular-6ab6b62e.woff",revision:"4de844d4552e941f6b9c38837a8d487b"},{url:"assets/KaTeX_Size4-Regular-99f9c675.woff",revision:"3045a61f722bc4b198450ce69b3e3824"},{url:"assets/KaTeX_Size4-Regular-a4af7d41.woff2",revision:"61522cd3d9043622e235ab57762754f2"},{url:"assets/KaTeX_Size4-Regular-c647367d.ttf",revision:"27a23ee69999affa55491c7dab8e53bf"},{url:"assets/KaTeX_Typewriter-Regular-71d517d6.woff2",revision:"b8b8393d2e65fcebda5fa99fa3264f41"},{url:"assets/KaTeX_Typewriter-Regular-e14fed02.woff",revision:"0e0460587676d22eae09accd6dcfebc6"},{url:"assets/KaTeX_Typewriter-Regular-f01f3e87.ttf",revision:"6bf4287568e1d3004b54d5d60f9f08f9"},{url:"assets/lp.html-3c129983.js",revision:"954b356cba402c107fa6664861eea806"},{url:"assets/lp.html-a619815e.js",revision:"ad0b10bcc7f1ba8518d2bdcb0557369c"},{url:"assets/lua.html-2c805e48.js",revision:"d3088015ac055c85a1cf63578d9418b6"},{url:"assets/lua.html-b69ec079.js",revision:"624cfa2ba591b403ca9ba6bbf48ae446"},{url:"assets/network.html-200120e5.js",revision:"5a35c481d99eb07566b6e593c22e90ab"},{url:"assets/network.html-817fa78b.js",revision:"512d67ac4bb74da4673a2c2c4fc185d0"},{url:"assets/play-e69133ca.svg",revision:"f868a35a15355f29bd6001c9adeb68cf"},{url:"assets/polygon_sizes-208348b1.js",revision:"ae88c7b807b3fb1a4da9ad0cd225a905"},{url:"assets/search-0782d0d1.svg",revision:"83621669651b9a3d4bf64d1a670ad856"},{url:"assets/SearchBox-e69246db.js",revision:"713bf23981fc7f1469da4fbd0a9986a0"},{url:"assets/style-a0ba3a88.css",revision:"2b8e3401dd5b1d7355b165ccc0cc5530"},{url:"assets/timelapse.html-50d1df38.js",revision:"38004b4f39e2cc877afd7d6fbfc05a15"},{url:"assets/timelapse.html-c8de9c2e.js",revision:"0de0e8cab61d416005b7e489173ff3ec"},{url:"assets/two_way-db10fb1f.svg",revision:"19f0a97f9994249b0ff19be5269fd79f"},{url:"assets/versions.html-76bcaafb.js",revision:"755cb8780d1bf554990a85bc40677855"},{url:"assets/versions.html-d061ea1e.js",revision:"ddbdaea10425e03a405a63e4e1dd4a82"},{url:"assets/visualization.html-a65be55f.js",revision:"546940ef4c0a29e36d90973137ccbd49"},{url:"assets/visualization.html-f72d938f.js",revision:"8f3d5ee252e4ea58b657167a8173c376"},{url:"assets/warehouse_simulation.html-b4530d0a.js",revision:"68621a55e2670e5cf7b8d33b084a2235"},{url:"assets/warehouse_simulation.html-ec72ea77.js",revision:"9bea4e69934bbb5fab9deb6f0ca5efdb"},{url:"assets/web_ui_en.html-2c982244.js",revision:"1ef48eaa3e5a7f95826a14e398d5bc82"},{url:"assets/web_ui_en.html-36358768.js",revision:"cdc7fbd6c0a49e4de5feb4d96f3687df"},{url:"assets/web_ui.html-01902948.js",revision:"d867c484278865d385c270a4413e0cb7"},{url:"assets/web_ui.html-50884220.js",revision:"b08ca6d3f6dee11c190e11ecc1712a35"},{url:"404.html",revision:"1cf480c2f01cbd3c7e4b12c72a8eb608"},{url:"docs/1.1_what_microcity_can_do.html",revision:"85f6e651f809f7145499fbde5b1d7dd1"},{url:"docs/2.1_showing_a_world_map.html",revision:"289fb2b179d70843e5fb7d83eb28e2f6"},{url:"docs/2.2_searching_for_countries.html",revision:"73369b61fa2f379092e388b42c6e9ddc"},{url:"docs/3.1_ui_overview.html",revision:"bafbb7690e7ff3fcb3f11eb4ba2c1422"},{url:"docs/3.2_vector_shapes.html",revision:"86ed7111f6a0e2da7177958c2255042b"},{url:"docs/3.3_raster_grids.html",revision:"92baa32bdb31b23ac4f251f817e63ed4"},{url:"docs/3.4_3d_scenes.html",revision:"921bc980caed0f1a31d11a9700d847c3"},{url:"docs/3.5_tables.html",revision:"3661966c39c8ecb033c212bc2128a97d"},{url:"docs/3.6_maps_and_layers.html",revision:"b8efd55ebbc72ad8098af45d72ff3132"},{url:"docs/3.7_modules.html",revision:"511ccfc41dade77c15bdf39475886873"},{url:"docs/4.1_si_overview.html",revision:"0d11173fbd77bb230213bc9e44ad8f85"},{url:"docs/4.2_ui_control.html",revision:"ca918a2ee5fd3cc52578e423fb543714"},{url:"docs/4.3_shapes_and_tables.html",revision:"2069c3a5d81173c2654f9ad1a4a4e1b3"},{url:"docs/4.4_grids.html",revision:"3608e2429d874f7913df5dd1745850c2"},{url:"docs/4.5_3d_scenes.html",revision:"1b06a7cfb6c0d1313c92169eaf8331c4"},{url:"docs/4.6_networks.html",revision:"9e271b2109902cc72b691a4d1c02a761"},{url:"docs/4.7_des_simulations.html",revision:"7615f1d3eb1a8be0de5579fa6972bc18"},{url:"docs/4.8_mixed_integer_programming.html",revision:"21aa72ef5e480f58243879c7e3b37f7e"},{url:"docs/imgs/index.html",revision:"da9d3de9cba3e80b7f6507b1e19962c5"},{url:"docs/index.html",revision:"03ecb83578caa7182ef51970bb40e166"},{url:"google3a9084eedb90aa13.html",revision:"5fdd561cbfed9c1a090e11665147df61"},{url:"index.html",revision:"fdb3a55ed70079849637db00e5350fee"},{url:"notes/3d_objects_en.html",revision:"9fedaa1fb8dfa5a91b0bd4715f47a8a0"},{url:"notes/3d_objects.html",revision:"eb67c66b32755d6106883fcea4eb2288"},{url:"notes/3d_scene_en.html",revision:"990252db70764bbaf84df77ca960e0f1"},{url:"notes/3d_scene.html",revision:"ab4d6aeae36baaec318b200ccf448950"},{url:"notes/index.html",revision:"189cc936ade9c3817b8e5bef513c5aad"},{url:"notes/lp.html",revision:"51d85c3c56f4f25c6ef99f5c0e6a8e2c"},{url:"notes/lua.html",revision:"519b3f653934e4514404d5e391b3cbd4"},{url:"notes/network.html",revision:"6896b75f7e4e96b179813164f59b3955"},{url:"notes/timelapse.html",revision:"4cf36ae549bf9376db54442c9c9eac48"},{url:"notes/versions.html",revision:"f687795b60b384ccc3c02993c03b9b36"},{url:"notes/visualization.html",revision:"6ec361401d52dac36b4676fe05121b4a"},{url:"notes/warehouse_simulation.html",revision:"8684ba4321bf3be908c2d15e3b2d3b11"},{url:"notes/web_ui_en.html",revision:"29c88dce27db84ff6ceda602f21ebf2a"},{url:"notes/web_ui.html",revision:"2a7cf18f7ca9eea63be10a608d06eb39"},{url:"assets/3trend-5c531da3.webp",revision:"62e6f891c43c490d73e9c40baced8bda"},{url:"assets/6-1trend-5e7d1cc0.webp",revision:"77b688d0752c48c1d9ceaa7543f08116"},{url:"assets/6trend-f8e56193.webp",revision:"29a2a9741a7f5953bb3c394f3f70a644"},{url:"assets/AceEditor-a675d7c5.png",revision:"d79c0c73bbf389f15e08dc2aa04f6c9d"},{url:"assets/auto_test-101a89ac.webp",revision:"a32c2b274444d267076dfa6f94e6d63c"},{url:"assets/AutoTranslate-35f1f93d.png",revision:"7cd770336647da7598fe161fa99df301"},{url:"assets/BottomBar-30d9c8d2.gif",revision:"63e38d376fe4a371b8d97947b73fbd8c"},{url:"assets/box_lwh-0396f3b9.jpg",revision:"9c29ae29f4e3a90f4bbb1bc323488e6e"},{url:"assets/city_logistics-1664b134.png",revision:"f0e83dfc21b4da0afee21ec1645a5ce4"},{url:"assets/close_save_grid-ccbd51be.png",revision:"06823158f287c332e303ce9e74f119b1"},{url:"assets/close_save_shapes-1b417e51.png",revision:"6285144c1d85e6c8d7c12459ea8ecfa2"},{url:"assets/color5-c9889a20.gif",revision:"7d57428b2e042e57250ff788e5214737"},{url:"assets/color8-6e00fd06.gif",revision:"7190cdbbc801e3598b39822c2f4449f1"},{url:"assets/CommandBar-e201fad9.png",revision:"9904a62da9659ffe01e56405c607c435"},{url:"assets/coordinate-19d86f0b.png",revision:"4696bfa608a3929ab8ffee4ed9da17f0"},{url:"assets/data_visualization-92e88960.png",revision:"bcf2333bc33ffde8b5f201e79ae4fb2b"},{url:"assets/DL_Heatmap-dd6ce94d.png",revision:"5f26dd003befff9e1f6eb994197cf3ce"},{url:"assets/edit_point-a19bc15b.png",revision:"b56499ca449e9cb42efa0ef5fe21aefd"},{url:"assets/edit_shape-220e5d8f.png",revision:"5ee823e7cf71f04215c697036c15acb0"},{url:"assets/fixed_increment_advance-bba0f944.png",revision:"20f2f4c8bbc3113184537da242398b9c"},{url:"assets/gis_data_structure-e0d0de5b.png",revision:"77fa044dae581369badf8cb87d8e006c"},{url:"assets/GraduatedColorProperties-7cfa6748.png",revision:"acaa6f8e656886bcec42e74379e9eee5"},{url:"assets/GraduatedColorResult-c782c941.png",revision:"9869925032dbd7d448f4b1b60ab3c8a9"},{url:"assets/GraduatedColorSettings-ed4a8a9a.png",revision:"74ff570e2d95f95663e1565bb86a75e8"},{url:"assets/grid_attributes-5692514f.png",revision:"99da94947795b278ee0bb4410dcf5e0e"},{url:"assets/grid_menu-e895d27d.png",revision:"636dff6ad1216aa74de6214aba408e9f"},{url:"assets/grid_selection-8854b919.png",revision:"a854dc544ec5239818be6a245b4d558a"},{url:"assets/grid_structure-3ee378f9.png",revision:"4be1f0e0a70ddd24dfe875312edef079"},{url:"assets/LabelAttribProperties-626ac855.png",revision:"f95bfff89484f9f07ec316c996da5cf3"},{url:"assets/layer_menu-6ca31e5d.png",revision:"55d3c08736142acc4245d482c2c0ce6a"},{url:"assets/LookupTableColor-10db14bb.png",revision:"af9601eb62ef3be4d01eb33f51a63661"},{url:"assets/LookupTableProperties-0ecb4f51.png",revision:"16ab4c133ef51f5e9db60a401211c0da"},{url:"assets/main_window-9123f68c.png",revision:"312ba4b6c91267ecef63c6ee00bc21e9"},{url:"assets/map_coordinates-da327b14.png",revision:"c39aa1c8a4c3ed6e5b507f8cf3874160"},{url:"assets/map_menu-09bcc68b.png",revision:"a95051447bc04efd2d5e706c872d3493"},{url:"assets/module_libraries_settings-dd7c0fc9.png",revision:"bf0570b0b6130844d28fa3c402a27ffb"},{url:"assets/module_settings-1a887b09.png",revision:"ba28f8624752e27c514377e213ea642a"},{url:"assets/modules-d3a93b78.png",revision:"55cea6ae301455d142cec78857a08aa9"},{url:"assets/new_grid-6d78c958.png",revision:"cf382a920be3a7338877a71b78d66365"},{url:"assets/new_scene-08d6e9d8.png",revision:"d5e69908016913fe08d8e00c90f6fb13"},{url:"assets/new_shapes-df4ba5d2.png",revision:"36c06984f09ac60f8161c8d6aa860cf7"},{url:"assets/new_table-8a32e9c0.png",revision:"89408a0284dd95c1421c0d5b4e6131f7"},{url:"assets/new-91c8e806.gif",revision:"aadcfac586760bc33926ca5ce7f02a9c"},{url:"assets/object_menu-b625bc11.png",revision:"eec516547d2a3ac027546ae348f4f054"},{url:"assets/old-cb6004db.gif",revision:"4080855b1419e2c04463cebd35711270"},{url:"assets/optimal_layout-15b57475.webp",revision:"584a4e39d1b598fc7c4fb08653ba0477"},{url:"assets/PlotPrice1-2328e878.png",revision:"2343fd9de1abdbbaf15f5413236f76fb"},{url:"assets/PlotPrice2-c18b4f48.png",revision:"1a853fda82ea81fff7b44d65ba15346a"},{url:"assets/polygon_sizes-e43aaa45.jpg",revision:"dc376be92b128dadabd35eace5ccee21"},{url:"assets/polylines_order-a9694329.jpg",revision:"31638de01c4de5ae632f20f1b6403fee"},{url:"assets/Preset_Earth-187e9689.png",revision:"f55773fa09d457dd715992b6835564b7"},{url:"assets/Preset_Truck-cbe34d0b.png",revision:"a77828aa329b3c20d7cd8cb8696db5dd"},{url:"assets/Presets-f42b2331.png",revision:"26dee069587516d47812b816f671eac8"},{url:"assets/problem1-9ac7436c.webp",revision:"c245c369ed623e8e388767d4f830afa3"},{url:"assets/problem2-03a3acd7.webp",revision:"325bed85492b9881ea786baa7245e353"},{url:"assets/query_results-31e2845b.png",revision:"527d9a24621e0953478d8cd1224d973a"},{url:"assets/RangeDotRelateToMap-20b52dc3.png",revision:"503a9b2bb8e9a9106462e15478480baa"},{url:"assets/RelateToMapBig-d6b0ca1c.png",revision:"f0dd5026b6fa4bee47c155db6d44d822"},{url:"assets/RelateToMapSmall-6e9a8bd7.png",revision:"10945aba05b9286a9182b5957f15ef01"},{url:"assets/RelateToScreenBig-bca4cb07.png",revision:"2095d6f27c66191ed2f3a5c55e4e286f"},{url:"assets/RelateToScreenSmall-3831f1e8.png",revision:"9bb544030d3ed11649649524ea8d4bb4"},{url:"assets/RunCode-5d7103a9.gif",revision:"5f634a99c4fc97eea5525a02b8f51677"},{url:"assets/scene_coordinate-c96bd73e.png",revision:"4a5134bd71717c44e496080a75478b39"},{url:"assets/scene_menu-442703ef.png",revision:"92664f67e27932c0d91c26ade6252378"},{url:"assets/script_editor-7fa005ad.png",revision:"5cee3858ed9d28fd46d30d87477de338"},{url:"assets/segments-0b7c3d2a.jpg",revision:"adfe33d8ae64831aebeedec7a91a1f99"},{url:"assets/SelectLinksColor-240a09ee.png",revision:"90ba31fd0a8532b3f841b39f898c8b7e"},{url:"assets/SetParameterProperties-0acb1156.png",revision:"fdbc3e7d199a408b5526279c6d1c6474"},{url:"assets/shapes_files-bf1b62f1.png",revision:"9a734a267477ee4d92b1cf39554bd4e2"},{url:"assets/shapes_menu-ad30912a.png",revision:"1ce52bb22c77de1d9b138fac30adbf95"},{url:"assets/shipping_planning-40b10165.png",revision:"73ff5ae946bc1b3408af6852a40f14b2"},{url:"assets/shot_parameter_id-76d4dffb.png",revision:"c89a255188060a166f8890523d9596af"},{url:"assets/shot_script_editor-46219406.png",revision:"d7f18072054f41155cde343988a8a176"},{url:"assets/sim-result-164ef386.webp",revision:"4d4fb876261b1b2f812c26a2459287ce"},{url:"assets/SizeProperties-453146b0.png",revision:"0c1b64600f1cac883992d07661a4832d"},{url:"assets/table_menu-e66f74f4.png",revision:"568acc7e16f0e89d9aab0846e6b37969"},{url:"assets/table_view_menu-30711cd5.png",revision:"a5b97ce1a8ed91d31c4fe571e0d5da4e"},{url:"assets/TableSelect-dc014ed8.png",revision:"a2f14a33f90021823a66786f4be84fae"},{url:"assets/terminal_simulation-246e0695.gif",revision:"b2c8c2047ae16200788732a65d9d342a"},{url:"assets/test_layout-4909cfc0.webp",revision:"04e32d297a5182f881182b3b039c3680"},{url:"assets/warehouse_simulation-21c167f0.gif",revision:"f62546662765fda4f41338846a1af6a6"},{url:"assets/WebUIOverview-710d432e.png",revision:"769241be4e6ed733ce783a4a7bd63443"},{url:"assets/WebUIParts-129a5d54.png",revision:"411be83677e6ad958f5f7fb506ec1026"},{url:"assets/world_countries-59f09c0c.png",revision:"e850582792c99b09af68ca948e2aff8e"},{url:"assets/无预判障碍-02cf6598.gif",revision:"6b6189014d83c82c480cd0dad1d3aec0"},{url:"assets/预判障碍-6d8bb908.gif",revision:"8236b76fb86d617e815a12382aa2c140"},{url:"images/icon_microcity.png",revision:"08f31df45215c6018336c0acf1ff5e4d"},{url:"images/icon_microcitynotes.png",revision:"8fab94c045ebfa93980673848abc96b2"},{url:"images/icon/icon-144.png",revision:"06593bf0bb1b7646ed53c336be5ee07b"},{url:"images/icon/icon-192.png",revision:"dd4c61d0beacce8e965296d679fff0ca"},{url:"images/icon/icon-512.png",revision:"65e0e189f0e4f4fe72e6a6c47480c655"}],{}),e.cleanupOutdatedCaches()}));
//# sourceMappingURL=service-worker.js.map
