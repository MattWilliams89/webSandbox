var Dimmer = function(img) {
    this.img = img;
};

Dimmer.prototype.toggle = function(){
    if (this.img.src.match("ic_launcher.png")) {
        this.dim();
    }
    else {
        this.reset();
    }
};

Dimmer.prototype.dim = function(){
    this.img.src = "ic_launcher_dim.png";
};

Dimmer.prototype.reset = function(){
    this.img.src = "ic_launcher.png";
};
