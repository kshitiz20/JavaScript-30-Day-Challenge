 

 
 var hoursHand= document.querySelector('.hourHand')
 console.log(hoursHand);

 var minsHand= document.querySelector('.minsHand')
 var secondsHand= document.querySelector('.secondsHand');

    function clock(){
        var date= new Date();
        var seconds= date.getSeconds();
        var mins= date.getMinutes();
        var hours= date.getHours();
        console.log(seconds);
        console.log(mins);
        var secondsInDegrees= (seconds/60)*360+90;
        secondsHand.style.transform = `rotate(${secondsInDegrees}deg)`;
        
        var minsInDegrees= (mins)/60*360+90;
        minsHand.style.transform = `rotate(${minsInDegrees}deg)`;

        var hoursInDegrees= (hours)/12*360+90;
        hoursHand.style.transform = `rotate(${hoursInDegrees}deg)`;

        

    }

    setInterval(clock,1000);

    clock();
 