var stdin = process.openStdin();

stdin.addListener('data', function(data){
	console.log('you entered'+data);
	/*process.exit(0); //exits the process*/
	process.stdin.pause(); //does not exit the process
	callMeToTest();
});

function callMeToTest(){
	console.log('called: callMeToTest');
}