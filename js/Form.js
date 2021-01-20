class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
        this.reset = createButton("reset");

    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide(); 
    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(displayWidth/2-50,0);

        this.reset.position(displayWidth-100,20);
        this.input.position(displayWidth/2-50, displayHeight/2-80);
        this.button.position(displayWidth/2+10, displayHeight/2-50);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount+= 1;
            player.index = playerCount;
            console.log(player.index);
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello "+ player.name);
            this.greeting.position(displayWidth/2-70, displayHeight/4);
        })

        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.update(0);
        })
    }
}