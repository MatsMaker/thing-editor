/*
*	minimal scene with basic engine methods
*/
import Scene from "thing-editor/js/engine/components/scene.js";


class Main extends Scene {
	
	init() { //called by engine after scene created
		super.init();

	}

	onShow() { //called after scene added to screen
		// this.lady1.play();
	}

	update() { //called 60 frames per second
		super.update();
	}

	onHide() { //called before scene 
		this.lady1.stop();
	}

	onRemove() { //called by engine before scene will be destroyed
		super.onRemove();
		this.lady1 = null;
	}
}

export default Main;