//создаем массив со случайными элементами
let arr = new Array (10);

function getRandomArbitrary(min, max) {
    return Math.round((Math.random() * (max - min) + min),0);
  };
  getRandomArbitrary(-100, 100);
  for (let i = 0; i < arr.length; i++) {
      arr[i] = getRandomArbitrary(-100, 100);
  };
  console.log(arr);



  arr.forEach(function(item, i, arr) {
    if (item < 0) {arr[i] = 0};
  }
  );
  console.log(arr);



  let count = 0;
  arr.forEach(function(item, i , arr){
      if (item == 0 && count == 1) {
        arr[i+1] = -1;
        count =0;
      }
      else if(item == 0){
        count++;
      }
  });
  console.log(arr);

