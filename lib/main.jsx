import { AScene } from "aframe";
import DOMReader from "./DOMReader.js";

class VRify {
    buttons = []; // list of elements with "VRify-Button" class.
    scene = null; //a-scene element

    setup() {
        console.log(AScene);
        // Reset if setup had already been run
        this.buttons = [];
        if(document.getElementById("VRify-Scene")) {
            document.getElementById("VRify-Scene").remove();
        }

        this.buttons = document.getElementsByClassName("VRify-Button");
        for(var i = 0; i < this.buttons.length; i++) {
            var button = this.buttons[i];
            button.onclick = function() {
                this.scene = document.createElement('a-scene');
                this.scene.id = "VRify-Scene";
                this.scene.setAttribute("environment", "preset: tron");
                const box = document.createElement('a-box');
                box.setAttribute('color', 'red');
                this.scene.appendChild(box);
                document.body.appendChild(this.scene);
            };
        }
    };

    ready(f){
        if(document.readyState == "complete") f();
        else {
            document.addEventListener("readystatechange", function(){
                if(document.readyState == "complete") f();
            })
        }
    }
};

export default VRify;