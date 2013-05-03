(function() {
    
    //C n r
    Math.choose = function ( n, k ) {
          var addTillZero = function(x) {
                var total = 0;
                while(x--) {
                    total+=x;
                }
                return total;
          };

          return addTillZero(n) / (addTillZero(k) * addTillZero(n-k));
    };
    
    //binomial distribution
    Math.binomialDist = function(n, i, prob) {
        return Math.choose(n,i)*Math.pow(prob,i)*Math.pow(1-prob,n-i);
    }

    //probability mass function
    Math.pmf = functio( n , i , prob) {
        var arr = [];
        for(var x=0;x<i;i++) {
            arr.push(Math.choose(n,i)*Math.pow(prob,i)*Math.pow(1-prob,n-i));
        }
        return arr;
    };
    
    //summation
    Math.summation = function(n,i, fn) {
        var total = 0;
        for(;i<n;i++) {
            total+=fn(i);
        }
        return total;
    }
    
    
})();
