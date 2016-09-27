var wheels = 4,
        speed = 10;


var car =  {
     	accelarate: function () {
     		speed+= 10;
     	},
     	move: function () {	
     		console.log('moving');
     	},
     	showSpeedoMeter: function () {
     		console.log('SPEED:: '+speed+'KMPH');
     	}
     };

     


car.move();
car.showSpeedoMeter();
car.accelarate();
car.showSpeedoMeter();	

