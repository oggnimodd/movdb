export const colors = {
  low: '#ee1520', // 1-2
  low2: '#FF4048', // 3-4
  mid: '#FAB303', // 4-6
  mid2: '#b6cf2b', // 6-8
  high: '#2fd62f', // 8-10
};

export const scoreColors = (score) => {
  if(score === 0) {
    return colors.mid;
  }

  if(score >= 7) {
    return colors.high;
  }

  if(score >= 6 && score < 7) {
    return colors.mid2;
  }

  if(score >= 4 && score < 6) {
    return colors.mid;
  }

  if(score >= 3 && score < 4) {
    return colors.low2;
  }

  return colors.low;
};
