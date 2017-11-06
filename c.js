var cc=10;

var obj={
	first:"first",
	second:"sec"
}

function show(name,age){
	this.name=name;
	this.age=age;
}

show.prototype.get=function(){
	console.log(this.name);
}