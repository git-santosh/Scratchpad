// **************************************************************************
// *     Write a program to print following pattern  / When n = 7	        *
// *                   	                      	1                           *
// *                                 	2    	3    	2                   *
// *                          	3    	4    	5    	4    	3           *
// *                  	4    	5    	6    	7    	6    	5    	4   *
// * Program to create Mirror image  wirtten by Santosh Suryawanshi         *
// **************************************************************************

var no=7; // taken number value
var left =0; // left variable is determine left side of values 
var temp=0;  // temp is condition which decides when to go next line 
var right=0; // right variable is determine right side of values 
for(var row=1; row<=no; row++){
    for(var space=row; space < no-1; space++){ //this loop is for creating space 
         process.stdout.write('        '); 
         left++;
    }       
    if(row == 5){
        process.exit(0);
    }
    else{
        while(temp != 2*row-1){
           if (left <= no-2)
            {
                var value = row+temp;
                process.stdout.write( value.toString()+'\t');
                ++left;
            }
            else
            {
                ++right;
                var value2=(row+temp-2*right)
                process.stdout.write( value2.toString()+'\t');
                
            }
            ++temp;
    }
    right = left = temp = 0; // when while condition false i.e its time to reset all variables 
    process.stdout.write('\n');          
    }
}








// for(var j=1; j<=i; j++){
//       var left = i.toString();
//         if(i%2! == 0){
//         process.stdout.write(left);
//       } 
//       left--; 
//     }

//     process.stdout.write('\n');