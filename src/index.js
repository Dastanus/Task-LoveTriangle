/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(array = []) {
  let count = 0;
  let preferences = [0];
  preferences = preferences.concat(array);
  if(preferences.length>=3){
    for(let i=1; i<=preferences.length; i++){
      for(let k=i+1; k<=preferences.length; k++){
        for(let m=i+1; m<=preferences.length; m++){
          if((i!=k&&k!=m&&i!=m)&&(preferences[i]==k&&preferences[k]==m&&preferences[m]==i)){
            count++;
          }
        }
      }
    }
  }
  return count;
  };
