window._thingEngineAssets = {"scenes":{"main":{"c":"Main","p":{"backgroundColor":2823437},":":[{"c":"Container","p":{"name":"ui/city-panel"},":":[{"c":"Label","p":{"x":32,"y":695,"text":"player hp","style.align":"left","dataPath":"game.currentScene.localPlayer.currentHp"}},{"c":"OrientationTrigger","p":{"landscapeX":1244,"landscapeY":48,"portraitX":357,"portraitY":47},":":[{"c":"Button","p":{"tint":14417920,"onClick":"game.closeCurrentScene","sndClick":"click","sndOver":"over"},":":[{"c":"DSprite","p":{"scale.x":3.125,"scale.y":3.125,"image":"WHITE","tint":16711680}},{"c":"Text","p":{"pivot.y":19,"text":"X","style.fontSize":37}}]}]},{"c":"Button","p":{"x":1180,"y":620,"image":"images/ui/map.png","onClick":"showScene`world","sndClick":"click","sndOver":"over"}}]},{"c":"Tilemap","p":{"x":513,"y":273,"image":"images/tiles.png","tilemap":[-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],"rows":2,"columns":6,"tileW":320,"tileH":160,"wField":1920,"hField":320,"verticesRandomization":1}},{"c":"AnimatedSprite","p":{"x":550,"y":293,"spineData":"img/lady1/lady1.json"}}]},"world":{"c":"World","p":{"isStatic":true,"backgroundColor":3939759},":":[{"c":"Button","p":{"x":1187,"y":630,"image":"images/ui/buttons/orange.png","onClick":"closeCurrentScene`","sndClick":"click","sndOver":"over"}}]}},"prefabs":{"1":{"c":"MovieClip","p":{"name":"1","image":"bunny.png","timeline":{"l":{},"p":0.02,"d":0.85,"f":[{"n":"x","t":[{"v":-7,"t":0},{"v":-69,"t":63,"s":143.70000000000002},{"v":79,"t":150}]},{"n":"y","t":[{"v":-21,"t":0},{"v":-94,"t":63},{"v":-182,"t":193}]},{"n":"scale.x","t":[{"v":0.17,"t":0},{"v":1,"t":17}]},{"n":"scale.y","t":[{"v":0.2,"t":0},{"v":1,"t":17}]}]}}},"boss-part":{"c":"DSprite","p":{"name":"boss-part","x":434,"y":448,"image":"ondemand/2.png"}},"bunny-double":{"c":"Bunny","p":{"name":"bunny-double","x":345,"y":395,"pivot.y":75,"image":"bunny.png","xSpeed":-3},":":[{"c":"DSprite","p":{"x":5,"y":48,"image":"bunny.png"}},{"c":"PrefabReference","p":{"x":9,"y":24,"scale.x":0,"scale.y":0,"prefabName":"particle-blink"}}]},"counter-text":{"c":"Text","p":{"name":"counter-text","x":620,"y":333,"pivot.y":24,"text":"100","style.fontSize":44}},"fader/curtains":{"c":"OrientationTrigger","p":{"name":"fader/curtains","landscapeX":640,"landscapeY":360,"portraitX":205,"portraitY":360,"portraitScaleX":0.32},":":[{"c":"Container","p":{"x":-640,"y":-360},":":[{"c":"MovieClip","p":{"y":360,"scale.y":45,"image":"WHITE","tint":0,"timeline":{"l":{"hide fader":81},"p":0.02,"d":0.85,"f":[{"n":"x","t":[{"v":0,"t":0},{"v":320,"t":70,"m":3,"b":0.4,"g":2,"a":"game.faderShoot"},{"v":320,"t":74,"m":1,"a":"this.stop"},{"v":320,"t":83,"m":1},{"v":0,"t":120,"m":1,"a":"game.faderEnd"}]},{"n":"scale.x","t":[{"v":0.625,"t":0},{"v":40,"t":15,"m":1},{"v":40,"t":74,"m":1},{"v":40,"t":83,"m":1},{"v":0.625,"t":120,"m":1}]}]}}},{"c":"MovieClip","p":{"y":360,"scale.y":45,"image":"WHITE","tint":0,"timeline":{"l":{"hide fader":81},"p":0.02,"d":0.85,"f":[{"n":"x","t":[{"v":1275,"t":0},{"v":960,"t":70,"m":4,"b":0.4,"g":2},{"v":960,"t":74,"m":1},{"v":960,"t":83,"m":1},{"v":1281,"t":120,"m":1}]},{"n":"scale.x","t":[{"v":0.625,"t":0},{"v":40,"t":15,"m":1},{"v":40,"t":74,"m":1,"a":"this.stop"},{"v":40,"t":83,"m":1},{"v":0.625,"t":120,"m":1}]}]}}}]},{"c":"MovieClip","p":{"timeline":{"l":{"hide fader":216},"p":0.02,"d":0.85,"f":[{"n":"alpha","t":[{"v":0,"t":0,"m":1},{"v":0,"t":125,"m":1},{"v":1,"t":133,"m":1},{"v":0.8200000000000001,"t":144,"m":1},{"v":1,"t":157,"m":1},{"v":0.4,"t":171,"m":1},{"v":1,"t":183,"m":1,"j":132},{"v":0,"t":251,"m":1}]}]}},":":[{"c":"Text","p":{"translatableText":"loading","style.fontSize":35}}]}]},"fader/default":{"c":"OrientationTrigger","p":{"name":"fader/default","landscapeX":640,"landscapeY":360,"landscapeAlpha":0.5,"portraitX":204,"portraitY":343,"portraitR":1.571},":":[{"c":"MovieClip","p":{"name":"fader","scale.x":80,"scale.y":45,"image":"WHITE","tint":0,"timeline":{"l":{"hide fader":180},"p":0.02,"d":0.85,"f":[{"n":"alpha","t":[{"v":0,"t":0,"m":1},{"v":1,"t":8,"m":1,"a":"game.faderShoot"},{"v":1,"t":10,"m":1,"a":"this.stop"},{"v":1,"t":180,"m":1},{"v":0,"t":191,"m":1,"a":"game.faderEnd"}]}]}}},{"c":"MovieClip","p":{"name":"loading-label","timeline":{"l":{"hide fader":238},"p":0.02,"d":0.85,"f":[{"n":"alpha","t":[{"v":0,"t":0,"m":1},{"v":0,"t":125,"m":1},{"v":1,"t":133,"m":1},{"v":0.8200000000000001,"t":144,"m":1},{"v":1,"t":157,"m":1},{"v":0.4,"t":171,"m":1},{"v":1,"t":183,"m":1,"j":132},{"v":0,"t":264,"m":1}]}]}},":":[{"c":"Text","p":{"translatableText":"loading","style.fontSize":35}}]}]},"fill-test":{"c":"MovieClip","p":{"name":"fill-test","timeline":{"l":{},"p":0.02,"d":0.85,"f":[{"n":"visible","t":[{"v":true,"t":0,"m":2},{"v":true,"t":22,"m":2,"a":"this.remove"}]}]}},":":[{"c":"Fill","p":{"image":"perlin.jpg"}}]},"flytext":{"c":"FlyText","p":{"name":"flytext","x":700,"y":408,"text":"Fly Text","style.fontSize":20,"style.fill":"#ff0","style.stroke":"#a50","style.strokeThickness":3}},"mc-ref":{"c":"MovieClip","p":{"name":"mc-ref","x":220.14822261656593,"y":194.83117701566084,"image":"bunny.png","isPlaying":false,"timeline":{"l":{},"p":0.02,"d":0.85,"f":[{"n":"alpha","t":[{"v":0,"t":0,"m":1},{"v":1,"t":30,"m":1}]}]}}},"modal-settings":{"c":"OrientationTrigger","p":{"name":"modal-settings","landscapeX":640,"landscapeY":360,"portraitX":205,"portraitY":360},":":[{"c":"Sprite","p":{"name":"backdrop","x":-640,"y":-360,"alpha":0.84,"scale.x":80,"scale.y":45,"image":"WHITE","tint":41}},{"c":"Text","p":{"x":1,"y":-277,"text":"","translatableText":"modal_title","style.fontSize":38}},{"c":"Text","p":{"y":-152,"text":"","translatableText":"settings.music_volume","style.fontSize":25}},{"c":"ProgressBar","p":{"x":-147,"y":-19,"rotation":-1.5707963267948966,"interactive":true,"dataPath":"game.Sound.musicVol","height":300,"capMargin":0,"refreshInterval":1,"max":1,"step":0.01},":":[{"c":"Sprite","p":{"name":"bg","scale.x":1.875,"scale.y":18.75,"image":"WHITE","tint":15360}},{"c":"Sprite","p":{"name":"bar","x":5,"scale.x":1.25,"scale.y":17.643750000000004,"image":"WHITE","tint":47360}},{"c":"DSprite","p":{"name":"cap","x":18,"y":63,"rotation":1.5707963267948966,"image":"bunny.png"}}]},{"c":"Text","p":{"x":-8,"y":57,"text":"","translatableText":"settings.fx_volume","style.fontSize":25}},{"c":"ProgressBar","p":{"x":-147,"y":185,"rotation":-1.5707963267948966,"interactive":true,"dataPath":"game.Sound.soundsVol","height":300,"capMargin":0,"refreshInterval":1,"afterSlide":"game.Sound.play`click","max":1,"step":0.01},":":[{"c":"Sprite","p":{"name":"bg","scale.x":1.875,"scale.y":18.75,"image":"WHITE","tint":15360}},{"c":"Sprite","p":{"name":"bar","x":5,"scale.x":1.25,"scale.y":17.643750000000004,"image":"WHITE","tint":47360}},{"c":"DSprite","p":{"name":"cap","x":18,"y":63,"rotation":1.5707963267948966,"image":"bunny.png"}}]},{"c":"OrientationTrigger","p":{"landscapeX":599,"landscapeY":-322,"portraitX":163,"portraitY":-322},":":[{"c":"Button","p":{"tint":14417920,"onClick":"game.hideModal","hotkey":27,"sndClick":"click","sndOver":"over"},":":[{"c":"DSprite","p":{"scale.x":3.125,"scale.y":3.125,"image":"WHITE","tint":16711680}},{"c":"Text","p":{"pivot.y":19,"text":"X","style.fontSize":37}}]}]},{"c":"Button","p":{"x":-293,"y":1,"image":"ui/button.png","onClick":"game.Sound.toggleFullSound","sndClick":"click","sndOver":"over"}},{"c":"BgMusic","p":{"loop":"mus/shop","resetPositionOnPlay":false,"fade":0.5}}]},"particle":{"c":"Particle","p":{"name":"particle","x":640,"y":360,"image":"WHITE"}},"particle-blink":{"c":"MovieClip","p":{"name":"particle-blink","x":266,"y":328,"image":"ui/blink.png","rSpeed":0.0256,"timeline":{"l":{},"p":0.02,"d":0.85,"f":[{"n":"scale.x","t":[{"v":0,"t":0,"m":1},{"v":1,"t":30},{"v":0,"t":52,"a":"this.remove","m":1}]},{"n":"scale.y","t":[{"v":0,"t":0,"m":1},{"v":1,"t":30},{"v":0,"t":52,"m":1}]}]}}},"shape":{"c":"Shape","p":{"name":"shape","x":532,"y":418,"shape":4,"shapeFillColor":2241348,"_shapePoints":[{"x":-12,"y":-33},{"x":34,"y":-41},{"x":71,"y":2},{"x":37,"y":8},{"x":41,"y":45},{"x":-9,"y":47},{"x":-16,"y":11},{"x":-48,"y":13}]},":":[{"c":"Shape","p":{"name":"shape","x":13,"y":9,"shape":4,"shapeFillColor":4478310,"_shapePoints":[{"x":-17,"y":-37},{"x":10,"y":-40},{"x":43,"y":-11},{"x":11,"y":-7},{"x":11,"y":29},{"x":-16,"y":30},{"x":-20,"y":-8},{"x":-46,"y":-6}]}},{"c":"Shape","p":{"name":"shape","x":12,"y":-12,"shape":4,"shapeFillColor":7833753,"_shapePoints":[{"x":-8,"y":-10},{"x":5,"y":-12},{"x":30,"y":5},{"x":5,"y":6},{"x":6,"y":31},{"x":-12,"y":30},{"x":-13,"y":7},{"x":-30,"y":9}]}}]},"stats-panel":{"c":"Container","p":{"name":"stats-panel"},":":[{"c":"Label","p":{"name":"stats-panel","x":16,"y":34,"alpha":0.5,"text":"60","style.fontSize":40,"style.align":"left","verticalAlign":"center","style.strokeThickness":2,"style.stroke":"#002255","dataPath":"FPS","template":"%d FPS","isNumeric":true,"decimalsCount":1}}]},"ui/city-panel":{"c":"Container","p":{"name":"ui/city-panel"},":":[{"c":"Label","p":{"x":32,"y":695,"text":"player hp","style.align":"left","dataPath":"game.currentScene.localPlayer.currentHp"}},{"c":"OrientationTrigger","p":{"landscapeX":1244,"landscapeY":48,"portraitX":357,"portraitY":47},":":[{"c":"Button","p":{"tint":14417920,"onClick":"game.showScene`world","sndClick":"click","sndOver":"over"},":":[{"c":"DSprite","p":{"scale.x":3.125,"scale.y":3.125,"image":"WHITE","tint":16711680}},{"c":"Text","p":{"pivot.y":19,"text":"X","style.fontSize":37}}]}]},{"c":"Button","p":{"x":1181,"y":621,"image":"images/ui/map.png","onClick":"showScene`world","sndClick":"click","sndOver":"over"}}]},"ui/panel":{"c":"Container","p":{"name":"ui/panel"},":":[{"c":"Label","p":{"x":32,"y":695,"text":"player hp","style.align":"left","dataPath":"game.currentScene.localPlayer.currentHp"}},{"c":"OrientationTrigger","p":{"landscapeX":1244,"landscapeY":48,"portraitX":357,"portraitY":47},":":[{"c":"Button","p":{"tint":14417920,"onClick":"game.closeCurrentScene","sndClick":"click","sndOver":"over"},":":[{"c":"DSprite","p":{"scale.x":3.125,"scale.y":3.125,"image":"WHITE","tint":16711680}},{"c":"Text","p":{"pivot.y":19,"text":"X","style.fontSize":37}}]}]},{"c":"MobileJoystick","p":{"x":147,"y":565,"alpha":0.65,"image":"ui/joystick-move.png"}}]},"ui/prompt":{"c":"OrientationTrigger","p":{"name":"ui/prompt","landscapeX":640,"landscapeY":360,"portraitX":205,"portraitY":360},":":[{"c":"MovieClip","p":{"name":"backdrop","scale.x":128,"scale.y":72,"timeline":{"l":{},"p":0.02,"d":0.85,"f":[{"n":"alpha","t":[{"v":0,"t":0,"m":1},{"v":1,"t":7,"m":1}]}]}},":":[{"c":"Button","p":{"name":"easyCloseBtn","alpha":0.7000000000000001,"scale.x":0.625,"scale.y":0.625,"image":"WHITE","tint":40,"hoverImage":"WHITE","pressImage":"WHITE","disabledImage":"WHITE","hotkey":27,"sndClick":"click"}}]},{"c":"Sprite","p":{"x":-333,"y":-336,"interactive":true,"scale.x":41.25,"scale.y":19.56875,"image":"WHITE","tint":0}},{"c":"Text","p":{"name":"title","x":1,"y":-277,"text":"Enter text here","style.fontSize":38}},{"c":"Text","p":{"x":1,"y":-307,"text":"prompt examle","style.fontSize":20,"style.fill":"#aaa"}},{"c":"TextInput","p":{"name":"text-input","x":-116,"y":-194,"text":"text input","style.fontSize":27,"style.align":"left","verticalAlign":"center","maxInputLen":16,"onChange":"this.#cursor.gotoLabel`onChange"},":":[{"c":"MovieClip","p":{"name":"cursor","scale.x":0.42,"scale.y":3.16,"pivot.x":-5,"image":"WHITE","timeline":{"l":{"onChange":22},"p":0.02,"d":0.85,"f":[{"n":"alpha","t":[{"v":0,"t":0,"m":1},{"v":0,"t":14,"m":1},{"v":1,"t":23,"m":1},{"v":1,"t":51,"m":1},{"v":0,"t":61,"m":1,"j":0}]}]}}},{"c":"Button","p":{"x":112,"y":2,"alpha":0.23,"scale.x":17.375,"scale.y":2.7,"image":"WHITE","hoverImage":"WHITE","pressImage":"WHITE","disabledImage":"WHITE","onClick":"this.parent.focus","sndClick":"click","sndOver":"over"}}]},{"c":"Trigger","p":{"x":-10,"y":-104,"dataPath":"this.parent.#text-input.isEmpty","invert":true,"pow":0.1,"damp":0.7,"scaleShift":-1},":":[{"c":"Button","p":{"name":"okBtn","tint":3646481,"hoverImage":"EMPTY","hotkey":13,"sndClick":"click","sndOver":"over"},":":[{"c":"MovieClip","p":{"scale.x":11.343750000000002,"scale.y":2.7,"image":"WHITE","tint":899708,"isPlaying":false,"timeline":{"l":{"btn-over":4,"btn-out":36},"p":0.02,"d":0.85,"f":[{"n":"tintG","t":[{"v":186,"t":0,"m":1},{"v":139,"t":10,"m":1,"a":"this.stop"},{"v":186,"t":44,"m":1,"a":"this.stop"}]}]}}},{"c":"Text","p":{"text":"","translatableText":"ok","style.fontSize":29,"verticalAlign":"center"}}]}]}]},"ui/sure-question":{"c":"Container","p":{"name":"ui/sure-question"},":":[{"c":"MovieClip","p":{"name":"backdrop","x":640,"y":360,"scale.x":128,"scale.y":72,"timeline":{"l":{},"p":0.02,"d":0.85,"f":[{"n":"alpha","t":[{"v":0,"t":0,"m":1},{"v":1,"t":7,"m":1}]}]}},":":[{"c":"Button","p":{"name":"easyCloseBtn","alpha":0.7000000000000001,"scale.x":0.625,"scale.y":0.625,"image":"WHITE","tint":40,"hoverImage":"WHITE","pressImage":"WHITE","disabledImage":"WHITE","hotkey":27,"sndClick":"click"}}]},{"c":"OrientationTrigger","p":{"portraitX":-216,"portraitY":59,"portraitScaleY":0.66,"portraitScaleX":0.66},":":[{"c":"MovieClip","p":{"name":"main","x":640,"y":370,"tint":0,"timeline":{"l":{},"p":0.06,"d":0.73,"f":[{"n":"scale.x","t":[{"v":0,"t":0},{"v":1,"t":12}]},{"n":"scale.y","t":[{"v":0,"t":0},{"v":1,"t":12}]}]}},":":[{"c":"Sprite","p":{"x":-333,"y":-267,"interactive":true,"scale.x":41.25,"scale.y":33.75,"image":"WHITE","tint":0}},{"c":"Text","p":{"name":"title","y":-233,"text":"","translatableText":"modal_title","style.fontSize":41,"style.fill":"#0c0","style.fontWeight":"bolder"}},{"c":"Text","p":{"name":"message","y":-65,"text":"message text","style.fontSize":30}},{"c":"Button","p":{"name":"okBtn","x":-130,"y":204,"image":"ui/button.png","sndClick":"click","sndOver":"over"},":":[{"c":"Text","p":{"name":"label","y":-23,"text":"","translatableText":"ok","style.fontSize":35}}]},{"c":"Button","p":{"name":"noBtn","x":130,"y":204,"image":"ui/button.png","sndClick":"click","sndOver":"over"},":":[{"c":"Text","p":{"name":"label","y":-23,"text":"","translatableText":"no","style.fontSize":35}}]}]}]}]}},"images":["bunny.png","images/dialogs/characters/asteria.png","images/dialogs/characters/imperator.png","images/dialogs/characters/ovidiy.png","images/dialogs/cloud_01.png","images/dialogs/cloud_tap_to_continue.png","images/particles/CartoonSmoke.png","images/roads/blue.png","images/roads/granite.png","images/roads/lava.png","images/roads/marble.png","images/roads/mosaic.png","images/roads/road1.png","images/roads/road10.png","images/roads/road11.png","images/roads/road12.png","images/roads/road13.png","images/roads/road2.png","images/roads/road3.png","images/roads/road4.png","images/roads/road5.png","images/roads/road9.png","images/tiles.png","images/ui/avatars/avatar_back.png","images/ui/avatars/girl_black_01.png","images/ui/avatars/girl_black_02.png","images/ui/avatars/girl_white_01.png","images/ui/avatars/girl_white_02.png","images/ui/avatars/man_black_01.png","images/ui/avatars/man_black_02.png","images/ui/avatars/man_white_01.png","images/ui/avatars/man_white_02.png","images/ui/buttons/blue.png","images/ui/buttons/gray.png","images/ui/buttons/green.png","images/ui/buttons/orange.png","images/ui/buttons/white.png","images/ui/chest.png","images/ui/crystal.png","images/ui/hammer.png","images/ui/map.png","images/ui/panels/brown.png","images/ui/panels/ui_back.png"],"resources":["img/lady1/lady1.json"],"resourcesMetadata":{"img/lady1/lady1.json":{"spineAtlas":false}},"sounds":{"click":["click.ogg","click.aac"],"mus/gs3_title":["mus/gs3_title.ogg","mus/gs3_title.aac"],"mus/shop":["mus/shop.ogg","mus/shop.aac"],"mus/title":["mus/title.ogg","mus/title.aac"],"mus/title_i":["mus/title_i.ogg","mus/title_i.aac"],"over":["over.ogg","over.aac"]},"projectDesc":{"title":"new-game-test-start","id":"my-onw-example","icon":"img/bunny.png","screenOrientation":"auto","width":1280,"height":720,"portraitWidth":408,"portraitHeight":720,"dynamicStageSize":false,"preventUpscale":false,"defaultFont":"Roboto, Arial","soundFormats":["ogg","aac"],"renderResolution":1,"webfontloader":null,"fontHolderText":"ЯSфz","loadOnDemandSounds":{"mus/gs3_title":2},"muteOnFocusLost":true,"version":"0.0.9","framesSkipLimit":4,"embedLocales":true,"loadOnDemandTextures":{},"autoFullscreenDesktop":false,"autoFullscreenMobile":false,"soundDefaultBitrate":48,"soundBitrates":{},"renderResolutionMobile":1,"defaultLanguage":"en","mipmap":false,"defaultMusVol":1,"defaultSoundsVol":1,"keepSoundWhilePageUpdate":false,"jpgQuality":95,"pngQuality":[0.95,1]},"text":{"en":{"ok":"Ok","yes":"Yes","no":"No","title":"THING-EDITOR\nexample project","modal_title":"SOUND SETTINGS","settings.music_volume":"Music Volume","settings.fx_volume":"FX Volume","loading":"Loading..."},"ru":{"ok":"Ок","yes":"Да","no":"Нет","title":"THING-РЕДАКТОР\nпримеры","modal_title":"НАСТРОЙКА ЗВУКА","settings.music_volume":"Громкость Музыки","settings.fx_volume":"Громкость звуков","loading":"Загрузка..."}}};