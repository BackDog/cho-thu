var Entity = {
  x: 0,
  y: 0,
  w: 0,
  h: 0,
  checkCollision(entity) {
    return false;
  }
}
var Wall = Object.create(Entity);
Wall.x = 2;
var Wall2 = Object.create(Entity);
Wall2.x = 1;
console.log(Wall.x);
console.log(Wall2.x);