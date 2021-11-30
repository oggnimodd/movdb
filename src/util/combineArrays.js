export const combineArrays = (listOfArray) => {
  const collect = [];
  for (let i = 0; i < listOfArray.length; i += 1) {
    for (let j = 0; j < listOfArray[i].length; j += 1) {
      const current = listOfArray[i][j];
      const alreadyExist = collect.filter((k) => k.id === current.id)[0];
      if(!alreadyExist) {
        collect.push(current);
      }
    }
  }

  return collect;
};
