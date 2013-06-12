var a,b,c,d,g,h,j,k,m,n,o,p,q,r,s,t,u,v;
	    
	    function randomize(){
                // variables used = a,b,c,d,g,h,j,k,m,n,o,p,q,r,s,t,u,v
                // variables not equal = (c,g),(j,k)
                // variables positive values = a,b,c,d,g,h,j,k,m,n,o,p,q,r,s,t,u,v
                // variables max values = (a,4),(c,4),(d,4),(g,4),(h,4),(j,4),(k,4)
                // variables sums = (c,g,q)
                // variables products = (a,a,m),(a,2,n),(c,2,o),(d,2,p),(d,d,r),(g,2,s),(h,h,t),(j,2,u),(k,2,v)
                // end restrictions
                
                var variables = new Array();
                var random;
                
                //+ , max=4
                for (var i = 0;i<7; i++ ){
                    random = 0;
                    while (random <= 0 || random >4){
                        random = Math.floor(Math.random()*(6+6))-6;   
                    }
                    variables[i] = random;
                }
                
                a = variables[0];   //max=4
                c = variables[1];   //max=4
                d = variables[2];   //max=4
                g = variables[3];   //max=4
                h = variables[4];   //max=4
                j = variables[5];   //max=4
                k = variables[6];   //max=4
                
                if(c == g){
                    random = 0;
                    while (random <= 0 || random >4 || random == g){
                        random = Math.floor(Math.random()*(6+6))-6;   
                    }
                    c = random;
                }
                
                if(j == k){
                    random = 0;
                    while (random <= 0 || random >4 || random == k){
                        random = Math.floor(Math.random()*(6+6))-6;   
                    }
                    j = random;
                }
                
                //+
                //random = 0;
                //while (random <= 0){
                //    random = Math.floor(Math.random()*(6+6))-6;   
                //}
                b = 2;
                
                //Sums & Products
                q = c+g;
                m = a*a;
                n = a*2;
                o = c*2;
                p = d*2;
                r = d*d;
                s = g*2;
                t = h*h;
                u = j*2;
                v = k*2;
	    }
	    
	    function createQ(){
		//Set variables for question
		document.getElementById("q1").innerHTML ="\\("+m+"x^{"+b+"}+"+n+"x+1= \\  \\)";
		document.getElementById("q2").innerHTML ="\\(x^{"+o+"}-"+p+"x^{"+q+"}+"+r+"x^{"+s+"}= \\ \\)";
                document.getElementById("q3").innerHTML ="\\("+t+"x^{"+u+"}-y^{"+v+"}= \\ \\)";
	    }
