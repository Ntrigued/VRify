import DOMReader from "./DOMReader.js";


class VRify {
    buttons = []; // list of elements with "VRify-Button" class.
    scene = null; //a-scene element

    setup() {
        // Reset if setup had already been run
        this.buttons = [];
        if(document.getElementById("VRify-Scene")) {
            document.getElementById("VRify-Scene").remove();
        }

        this.scene = document.createElement("a-scene");
        this.scene.id = "VRify-Scene";
        this.scene.style.display = "none";
        document.body.appendChild(VRify.scene);
        console.log(document.getElementById("VRify-Scene"));
        this.scene.setAttribute("environment", "preset: tron");

        this.buttons = document.getElementsByClassName("VRify-Button");
        for(var i = 0; i < VRify.buttons.length; i++) {
            var button = VRify.buttons[i];
            button.onclick = function() {
                console.log("clicked");
                document.getElementsByClassName("a-enter-vr-button")[0].click();
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