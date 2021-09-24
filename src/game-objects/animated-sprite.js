// this class automatically generated with Thing-Editor's component's Wizard,
// and contain basic game-object's methods.
// For details: https://github.com/Megabyteceer/thing-editor/wiki/Custom-Components#custom-component-methods
import Lib from "thing-editor/js/engine/lib";
import Container from "thing-editor/js/engine/components/container";
import game from "thing-editor/js/engine/game";

const poolMap = new Map();

function pool(name) {
	if(!poolMap.has(name)) {
		poolMap.set(name, []);
	}
	return poolMap.get(name);
}

function getSpriteInstance(name) {
	let p = pool(name);
	if(p.length === 0) {
		let res = Lib.resources[name];
		
		if (!res.spineData) {
			res.spineData = generateSpriteData(res.data, name);
		}
		
		let ret = new PIXI.AnimatedSprite(res.spineData);
		ret.autoUpdate = false;
		assert(!ret._poolName, "Sprite structure changed. Pooling needs refactoring (_poolName field renaming).");
		ret._poolName = name;
		
		return ret;
	}
	return p.pop();
}
function generateSpriteData(skeletonData) {
	const explosionTextures = [];
	let key;
	for (key in skeletonData.frames) {
		const texture = PIXI.Texture.from(key);
		explosionTextures.push(texture);
	}
	return explosionTextures;
}

function disposeSpineInstance(o) {
	o.visible = true;
	o.tint = 0xffffff;
	// if (o.state.getCurrent(0)) {
	// 	o.state.clearTrack(0);
	// 	o.skeleton.setToSetupPose();
	// }
	pool(o._poolName).push(o);
}

export default class AnimatedSprite extends Container {

	_initSprite() {
		assert(!this.spriteContent, "Sprite content was not disposed released properly.");
		if(this.spineData) {
			assert(PIXI.AnimatedSprite, "AnimatedSprite is not imported properly.");
			if(!Lib.resources[this.spineData]) {
				this.spineData = null;
				return;
			}

			this.spriteContent = getSpriteInstance(this.spineData);
			/// #if EDITOR
			__getNodeExtendData(this.spriteContent).hidden = true;
			/// #endif
			this.addChild(this.spriteContent);
			this.spriteContent.play();
		}
	}
	
	init() {
		super.init();
		// Add initialization code here
	}

	set spineData(v) {
		if(this.spineData !== v) {
			this._spineData = v;
			this._releaseSpine();
			this._initSprite();
		}
	}

	get spineData() {
		return this._spineData;
	}

	_releaseSpine() {
		if(this.spriteContent) {
			this.spriteContent = null;
		}
	}

	__EDITOR_onCreate() {
		this.spineData = Object.keys(Lib.resources).find((res) => res.spineData);
	}
	
	update() {
		for (let c of this.children) {
			if(c !== this.spriteContent) {
				c.update();
			} else {
				const dt = game.pixiApp.ticker.deltaTime;
				c.update(dt);
			}
		}
	}

	onRemove() {
		// Add onRemove code here
		this._releaseSpine();		
		super.onRemove();
		this._spineData = null;
	}
	
}

/// #if EDITOR

//AnimatedSprite.__EDITOR_group = "Custom/MyComponentsSubGroup"; //group in Classes List Window for more comfort

__EDITOR_editableProps(AnimatedSprite, [ //list of editable properties
	{
		type: 'splitter',
		title: 'AnimatedSprite',
		name: 'AnimatedSprite-props'
	},
	window.makeResourceSelectEditablePropertyDescriptor('spineData', true, true,(r) => {
		let res = Lib.resources[r.name];
		return res.data && res.data.hasOwnProperty('frames');
	}),
	/*,
	{
		name:'myProperty',
		type:Number,
		default: 1,
		step: 0.01
	}*/
]);

// AnimatedSprite.prototype.play.___EDITOR_isGoodForCallbackChooser = true;
// AnimatedSprite.prototype.stop.___EDITOR_isGoodForCallbackChooser = true;

/// #endif