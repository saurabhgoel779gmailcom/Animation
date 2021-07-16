class Player
{
    constructor() {
		this.x = 500;
		this.y=200;
		this.spt=createSprite(this.x, this.y, 100,100);
	}

  applyGravity()
    {
        this.spt.velocityY=this.spt.velocityY+2;
	}

	MoveRight()
	{
		this.spt.x=this.spt.x+5;
	}

	MoveLeft()
	{
		this.spt.x=this.spt.x-5;
	}

	Jump()
	{
		this.spt.velocityY=this.spt.velocityY-4;
	}
	
}
























