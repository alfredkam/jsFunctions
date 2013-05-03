(function() {
    
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

    Math.binomialDistribution = functio( n , i , prob) {
        
    };

})();
