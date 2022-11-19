 async function merge(p, r) {
      let bars = document.querySelectorAll(".bar");//.
    
      //await sleep(delay);
      var q = Math.floor( (p + r) / 2 );
      var i, j;
      var n1 = q - p + 1;
      var n2 = r - q;
      var L = [];
      var R = [];
      let arr=[];
    console.log(typeof(bars));
    console.log(bars  ); 
    //  L= bars.slice(p,p+n1);
    L=Object.entries( bars).slice(p,p+n1).map(entry => entry[1]);
      //R= bars.slice(q+1,q+n2+1);
      R=Object.entries( bars).slice(q+1,q+n2+1).map(entry => entry[1]);
    
      // L.push(Infinity);
      // R.push(Infinity);
    
      i = 0;
      j = 0;
      
      // Initial index of merged subarray
      k = p;
     
      while (i < n1 && j < n2) {
        //arr = document.querySelectorAll(".bar");
        console.log("L[i]= "+L[i].innerText + "R[j]="+ R[j].innerText);
          if (Number(L[i].innerText) < Number(R[j].innerText)) {
              arr[k] = L[i];
    
              //arr.push(L[i]);
    
              //  console.log("L is "+ L);
              // arr[k].style.height = L[i].style.height; 
              // arr[k].childNodes[0].innerText = L[i].childNodes[0].innerText;
              // arr = document.querySelectorAll(".bar"); 
              i++;
          }
          else {
             arr[k] = R[j];
            // console.log("R is "+ R);
            //arr.push(R[j]);
    
            // arr[k].style.height = R[j].style.height; 
            // arr[k].childNodes[0].innerText = R[j].childNodes[0].innerText;
            // arr = document.querySelectorAll(".bar");  
              j++;
          }
          k++;
      }
    
      while(i<n1){
    
    
        arr[k] =L[i];
    
        // arr[k].style.height = L[i].style.height; 
        // arr[k].childNodes[0].innerText = L[i].childNodes[0].innerText; 
    
        //arr.push(L[i]);
    
        i++;
        k++; 
      }
    
      while(j<n2){
    
        arr[k] = R[j];
    
        //console.log(k)  
        //arr.push(R[j]);
        // arr[k].style.height = R[j].style.height; 
        
        // arr[k].childNodes[0].innerText = R[j].childNodes[0].innerText; 
    
    
          j++;
          k++;
      }
     
      for(let k=p;k<=r;k++){
        let tmp = arr[k];
        Object.assign([],bars,{k,tmp})
        // bars[k].style.height = arr[k].style.height; 
        // bars[k].innerText = arr[k].innerText;
        // bars[k].innerHtml = arr[k].innerHtml;
    
        bars[k].style.backgroundColor = "yellow"; 
     
      }
      //await sleep(delay);
    
      //if(p == 0 && r == size - 1)
         // setColorRange(p, r, SORTED);
      //else
        //  setColorRange(p, r, UNSORTED);
    
      }
 

async function mergeSort(p, r) {
  if(p < r) {
      var q = Math.floor( (p + r) / 2 );

      await mergeSort(p, q);

      await mergeSort(q + 1, r);

      await merge(p, q, r);
  }
}