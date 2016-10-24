var binarySearchObj={a:[],initialize:function(p,q){this.p=p;this.q=q;},search:function(k){var r;var a_=[];if(this.p===this.q)return -1;if(this.isInt(this.p) && this.isInt(this.q)){r=parseInt((this.p+this.q)/2);var current=this.a[r];if(current===k)return r;else if(current>k){this.q=r-1;return this.search(k);}else{this.p=r+1;return this.search(k);}}},isInt:function(n){if(typeof n==='number'){if(n%1===0){return true;}return false;}}};

// function binarySearch(a,p,q,k){
//   var i,r;
//   var a_=[];
//   a_=a;
//   if(p===q)return -1;
  
//   if(isInt(p) && isInt(q)){
//     r=parseInt((p+q)/2);
    
//     if(a_[r]===k)
//       return r;
//     else if(a_[r]>k)
//       return binarySearch(a_,p,r-1,k);
//     else
//       return binarySearch(a_,r+1,q,k);
//   }
//   return -1;
// }

// function isInt(n){
//   if(typeof n==='number'){
//     if(n%1===0){
//     return true;
//     }
//     return false;
//   }
// }

// var data=[100,200,399,409,598,646,773,889];
// var key=598;
// console.log(binarySearch(data,0,data.length,key));

var bs=Object.create(binarySearchObj);bs.a=[100,200,399,409,598,646,773,889];bs.initialize(0,bs.a.length);console.log(bs.search(889));