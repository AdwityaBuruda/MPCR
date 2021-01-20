class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        } )
    }

    update(state){
        database.ref("/").update({
            gameState : state
        });
    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }

        car1 = createSprite(100,200);
        car1.addImage("car1", car1Img)
        car2 = createSprite(300,200);
        car2.addImage("car2", car2Img)
        car3 = createSprite(500,200);
        car3.addImage("car3", car3Img)
        car4 = createSprite(700,200);
        car4.addImage("car4", car4Img)
        cars = [car1, car2, car3, car4];
    } 

    play(){
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();
        Player.getCarsAtEnd();
        if(allPlayers !== undefined){
            background("black");
            image(track, 0, -displayHeight*4, displayWidth, displayHeight*5);
            var index = 0;
            var x = 100;
            var y;
            for(var plr in allPlayers){
                index = index+1;
                x = x+330;
                y = displayHeight-allPlayers[plr].distance;
                cars[index-1].x = x;
                cars[index-1].y = y;
                
                if(index === player.index){
                    stroke(10);
                    fill("red");
                    ellipse(x,y,60,60);
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
                
            }

            

        }

        if(keyDown("up") && player.index !== null){
            console.log(player.index);
            player.distance+= 50;
            player.update();

        }

        if(player.distance>5250){
            gameState = 2;
            player.rank+=1;
            Player.updateCarsAtEnd(player.rank);
        }

        drawSprites();
    }

    end(){
        console.log("gameOver");
        console.log(player.rank);
    }
}