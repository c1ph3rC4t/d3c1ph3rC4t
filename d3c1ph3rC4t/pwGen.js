exports.generateWeakPWs = function (keywords, keynumbers, speChar) {
  PWs = []
  for(let i = 0; i < keywords.length; i++){
    for(let j = 0; j < keynumbers.length; j++){
      for(let k = 0; k < speChar.length; k++){
        PWs.push(keywords[i] + keynumbers[j] + speChar[k]);
        PWs.push(keywords[i] + speChar[k] + keynumbers[j]);
        PWs.push(speChar[k] + keywords[i] + keynumbers[j]);
        PWs.push(speChar[k] + keynumbers[j] + keywords[i]);
      };
    };
  };
  return(PWs);
};