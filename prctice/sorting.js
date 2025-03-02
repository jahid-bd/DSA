const array = [5, 7, 13, 3, 10, 5, 6, 2];

//buble short protita item tar porer item er sathe compare kore
// jodi kono item er porer item boro soto oi tahole swap kore
// evabe protita itme tar porer item er sahte compare kore and swap kore jotokhon na sobcheye boro item last e jai
// evabe akta item short hoi then next iteration e second last short hoi
// evabe colte thake array the joto gulu item ase

/**
 * example - [2,1,4,3]
 * first iteration -> inner loop 1 -> [2,1,4,3] -> [1,2,4,3] (swap = 2,1)
 * first iteration -> inner loop 2 -> [1,2,4,3] -> [1,2,4,3] (no change 2, 4 condition not applicable)
 * first iteration -> inner loop 2 -> [1,2,4,3] -> [1,2,3,4] (swap = 4,3)
 * if not short firt iteration it goes to second iteration
 *
 */

function bubleSorth(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // jehetu proti loop e last item short hosse tai last portjonto jawar jorkar nai
    for (let j = 0; j < array.length - i - 1; j++) {
      // check next item need is small or not
      if (array[j] > array[j + 1]) {
        // swap
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log(bubleSorth(array));

/**
 * Selection short
 * selection short akta kore index item select kore ebong full array serach kore je sobche soto item konta
 * tar pore sei index ke swap korte hobe searched item er sathe
 * evabe colte thakbe array length porjonto
 */

function selectionShort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let small = i;

    for (let j = i; j < array.length - 1; j++) {
      if (array[j] < array[small]) {
        small = array[j];
      }
    }

    // swap small with the current item
    let temp = array[i];
    array[i] = array[small];
    array[small] = temp;
  }

  return array;
}

console.log(selectionShort(array));

// smallest item find from an arraay
// [2, 5, 7, 8, 1]
// smallest = 1
// serach and compare 1 by 1
// todo keep a smallest value
// samll = array[0]
// loop 2 = small2 is less than small = 5 no next
// loop 3=  small 2 is lessa than small 7 no
// next
// looop 4 samm is less than 1 yes -> samm = 1
