let t = -1;
      let MAX = 1000;
    let a = Array(MAX).fill(0); // Maximum size of Stack
  
    function isEmpty() {
        return (t < 0);
    }
  
    function push(x) {
        if (t >= (MAX - 1)) {
            console.log("Stack Overflow");
            return false;
        } else {
        t+=1;
            a[t] = x;
              
            console.log(x + " pushed into stack");
            return true;
        }
    }
  
    function pop() {
        if (t < 0) {
            console.log("Stack Underflow");
            return 0;
        } else {
            let x = a[t];
            t-=1;
            return x;
        }
    }
  
    function print() {
        for (i = t; i > -1; i--) {
            console.log(" " + a[i]);
        }
    }
  
    //let us take some elements--
        push(10);
        push(20);
        push(30);
        console.log(pop() + " Popped from stack");
        console.log("Elements present in stack : ");
        print();