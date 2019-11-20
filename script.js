/** developed by Leandro Sena | 20/11/2019 */

window.onload = function(){
    var stage = document.getElementById("stage");
    var ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);

    const vel = 1; //velocidade
    
    var vx = 0; // velocidade x
    var vy = 0; // velocidade y

    var px = 10; // localizacao x
    var py = 10; // localizacao y

    var tp = 20; // tamanho peças
    var qp = 20; //quantidade peças

    var ax = 5; // fruta
    var ay = 15; // fruta

    var trail = [];
    tail = 5;

    const game = () => {
        px +=vx;
        py +=vy;
        
        if(px < 0){
            px= qp-1;
        }

        if(px > qp - 1){
            px = 0;
        }

        if(py < 0){
            py = qp-1;
        }

        if(py > qp - 1){
            py = 0;
        }
        
        // stage
        ctx.fillStyle = "#333";
        ctx.fillRect(0,0, stage.clientWidth, stage.height);

        // fruit
        ctx.fillStyle = "#900";
        ctx.fillRect(ax*tp,ay*tp,tp,tp);

        // snake
        ctx.fillStyle = "#ccc";

        for(var i =0; i < trail.length; i++){
            ctx.fillRect(trail[i].x*tp,trail[i].y*tp,tp-1,tp-1);
            if(trail[i].x == px && trail[i].y == py){
                vx=0;
                vy=0;
            }
        }

        trail.push({x:px,y:py});
        while(trail.length > tail){
            trail.shift();
        }

        if(ax==px && ay == py){
            tail++;
            ax = Math.floor(Math.random()*qp);
            ay = Math.floor(Math.random()*qp);            
        }

      

    }

    function keyPush(event){
        
        switch(event.keyCode){
            case 37: //left
                    vx = -vel;
                    vy = 0;
                break;
                case 38: //up
                    vx = 0;
                    vy = -vel;
                break;
                case 39: //right
                    vx = vel;
                    vy = 0;
                break;
                case 40: // down
                    vx = 0;
                    vy = vel;
                break;                
            default:
            break;
        }
    }


    setInterval(game, 60);

    
    

}