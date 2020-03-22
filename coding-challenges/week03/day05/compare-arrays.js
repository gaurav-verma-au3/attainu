function compareArrays()
{
var array1 = [0, 1, 2, 3, 4, 5, 6];
var array2 = [1, 2, 3, 4, 5, 6];
var flag = true;
  if 
  ( array1.length != array2.length)
  {
  flag = false;
  }
    for (var i=0; i<array1.length; i++)
      if (array1[i]!=array2[i])
      {
        flag = false;
      }
console.log(flag)
}

compareArrays();
