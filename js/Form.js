class Form {

  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    //this.title = createElement('h2');
    this.titleImg = createImg("./images/title.png");
    this.reset = createButton('');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    //this.title.hide();
    this.titleImg.hide();
  }

  display(){
    //this.title.html("Car Racing Game");
    //this.title.position(displayWidth/2 - 50, 0);
    this.titleImg.position(displayWidth/2 - 380, 200);
    this.titleImg.style('width','700px');
    this.input.position(displayWidth/2 - 140 , displayHeight/2 - 80);
    this.input.class("customInput");
    this.button.position(displayWidth/2 - 120, displayHeight/2);
    this.button.class("customButton");
    this.reset.position(displayWidth-100,20);
    this.reset.class("resetButton");

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      var message = `
      Hello ${this.input.value()}
      </br>wait for another player to join...`;
      this.greeting.html(message);
      //this.greeting.html("Hello " + player.name)

      this.greeting.position(displayWidth/2 - 300, displayHeight/4+100);
      this.greeting.class("greeting");
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
      var playerInfo=database.ref('players');
      playerInfo.remove();
    });

  }
}
