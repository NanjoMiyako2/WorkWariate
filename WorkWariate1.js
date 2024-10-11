
function InitCanvas(){
	CanvasResize1();
}
function CanvasResize1(){

	canvas1 = document.getElementById("canvas1")

	canvas1.width = 400;
	canvas1.height = 300;
}

function CanvasResize2(){

	canvas1 = document.getElementById("canvas1")

	canvas1.width = 500;
	canvas1.height = 800;

}

function CanvasResize3(MemoriCount, OneMemoriHeight, width1){
	MinHeight = 100;
	
	Height1 = MinHeight + MemoriCount * OneMemoriHeight;
	
	canvas1 = document.getElementById("canvas1")

	canvas1.width = width1;
	canvas1.height = Height1;	
	
	
	
}

function CalcStartMemoriHeight(MemoriCount, OneMemoriHeight){

	MemoriMaxUpper = 50;
	
	StartHeight1 = MemoriMaxUpper + MemoriCount * OneMemoriHeight
	
	return StartHeight1;
}

function DrawMemori(MemoriCount){

	canvasElem = document.getElementById("canvas1");
	if(canvasElem.getContext){
		ctx1 = canvasElem.getContext("2d")
		ctx1.strokeStyle = "black"
		ctx1.lineWidth = 4
	}


	OneMemoriHeight = 10;
	OneMemoriWidth = 10;
	
	MemoriStartHeight = CalcStartMemoriHeight(MemoriCount, OneMemoriHeight)
	MemoriStartWidth = 30;
	
	CurrentHeight = MemoriStartHeight
	for(i=0; i<MemoriCount; i++){
		if( (i % 5) == 0){
			ctx1.strokeStyle = "red"
			str1 = String(i) + ("h");
			ctx1.font = '10px Roboto medium';
			ctx1.fillText(str1, 10,CurrentHeight+OneMemoriHeight);
			
		}else{
			ctx1.strokeStyle = "black"
		}
		
		ctx1.strokeRect(MemoriStartWidth, CurrentHeight, 
			OneMemoriWidth, OneMemoriHeight)
			

		
		CurrentHeight -= OneMemoriHeight
	
	}
}


function main(){
	InitCanvas()

	MemoriCount1 = 22
	
	CanvasResize3(MemoriCount1, 10, 500)
	
	DrawMemori(MemoriCount1)
}


main()