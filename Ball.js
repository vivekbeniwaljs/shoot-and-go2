class Ball {
    constructor(x, y) {
        var options = {
            'density': 1.2,
            'restitution': 0.8
        }

        this.body = Bodies.circle(x, y, 20, options)
        this.r = 20
        World.add(world, this.body)
        this.trajectory = []


    }
    display() {

        var pos = this.body.position
        var angle = this.body.angle

        
        var position = [pos.x, pos.y]
        console.log(position)
        this.trajectory.push(position)

        for(var i = 0; i<this.trajectory.length; i++){

            if(this.trajectory[i][0]>750 && this.trajectory[i][0]<790 && this.trajectory[i][1]>95&& this.trajectory[i][1]<104)
            score++

        }

        push()
        translate(pos.x, pos.y)
        rotate(angle)
        ellipseMode(RADIUS)
        ellipse(0, 0, this.r, this.r)
        pop()
    }


}
