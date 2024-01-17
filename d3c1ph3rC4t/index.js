let hashAlg = require('./hashing.js');
let pwGen = require('./pwGen.js');
let dictionaryJS  = require('./words_dictionary.js');
let prompt = require('prompt-sync')();
let d = new Date();
let year = d.getFullYear();

let __version__ = '0.1(alpha)';
let cmd = [];
let speChar = ['','.',',','!','?','/','&','%','$','#','£','€','¤','\\','*','_','-',';',':','=','^','~','§','¡','¥','+'];

const printHappyCat = () => {
console.log('\x1b[32m\x1b[1m /\\_/\\\n(>^.^<)\n (___)_/\x1b[0m');
};

const printCoolCat = () => {
console.log('\x1b[32m\x1b[1m /\\_/\\\n(>□_□<)\x1b[0m\x1b[30m   *puts on sunglasses*\x1b[32m\x1b[1m\n (-__)_/\x1b[0m');
};

const printHappyCatWaving = () => {
console.log('\x1b[32m\x1b[1m /\\_/\\\n(>^.^<)\n (-__)_/\x1b[0m');
};

const printWaveMouthCat = () => {
console.log('\x1b[32m\x1b[1m /\\_/\\\n(>^~^<)\n (___)_/\x1b[0m');
};

const printWaveMouthPlusEyesCat = () => {
console.log('\x1b[32m\x1b[1m /\\_/\\\n(>+~+<)\n (___)_/\x1b[0m');
};

const printErrorCat = () => {
console.log('\x1b[31m\x1b[1m /\\_/\\\n(>×~×<)\n (___)_/\x1b[0m');
};

const printSadCat = () => {
console.log('\x1b[32m\x1b[1m /\\_/\\\n(>𝜏.𝜏<)\n (___)_/\x1b[0m');
};

try{
  const d3v1lC4tBoot = () => {
    
  };
  
  const rand = (min, max) => {
    return(Math.random() * (max - min) + min);
  };
  
  const testPW = (PW, salt, hash, alg) => {
    return(hashAlg.hash(PW, salt, alg, 'hex') === hash)
  };
  
  const mainStrongBruteLoop = (pw) => {
    let i = 0;
    let PW = [];
    while(pw[0] === alphabet[alphabet.length - 1]){
      
    };
    return(PW);
  };
  
  const weakBruteForce = (salt, hash, keywords, keynumbers, hashAlg) => {
    let PW = '';
    let PWs = pwGen.generateWeakPWs(keywords, keynumbers, speChar);
    let PWcracked = false;
    for(let i = 0; i < PWs.length && PWcracked != true; i++){
      PWcracked = testPW(PWs[i], salt, hash, hashAlg);
      if(PWcracked){
        PW = PWs[i];
      };
    };
    return([PWcracked, PW]);
  };
  
  const strongBruteForce = (salt, hash, alphabet, hashAlg) => {
    let PW = [alphabet[0]];
    let PWcracked = false;
    while(!PWcracked){
      PWcracked = testPW(PW, salt, hash, hashAlg);
      if(PW[0] = alphabet[alphabet.length - 1]){
        mainStrongBruteLoop(PW);
      };
    };
    return([PWcracked, PW]);
  };
  
  const generateKeyNumbers = (birthDate) => {
    let keynumbers = [''].concat(birthDate);
  
    for(let i = 0; i < year; i++){
      keynumbers.push(i.toString());
    };
    
    let order = ['123','132','213','231','312','321'];
    
    let allBirthDateCombinations = [];
  
    for(let i = 0; i < order.length; i++){
        allBirthDateCombinations.push(birthDate[parseInt(order[i][0]) - 1] + birthDate[parseInt(order[i][1]) - 1] + birthDate[parseInt(order[i][2]) - 1]);
    };
  
    keynumbers = keynumbers.concat(allBirthDateCombinations);
    
    return(keynumbers);
  };
  
  const d3v1lC4t = (cmd) => {
    console.log('\n\x1b[30mNow running d3v1lC4t\x1b[0m\n\n\x1b[94m   8 d88b        d8  8 .d88b   d8  w\n.d88  wwP Yb  dP  8  8 8P     dP8 w8ww\n8  8    8  YbdP   8  8 8b    dPw8  8\n`Y88 Y88P   YP   888 8 `Y88P    8  Y8P\x1b[0m\n');
    console.log('\x1b[0mMade by \x1b[35m\x1b[1m\x1b[3mc1ph3rC4t\x1b[0m\n');
    
    let cmdA = [];let _cmd = cmd;cmd.forEach((it) => {if(it.startsWith('a ')){_cmd = it.split('');_cmd.splice(0, 2);cmdA.push(_cmd.toString().split(',').join(''));};});
    let cmdS = [];_cmd = cmd;cmd.forEach((it) => {if(it.startsWith('s ')){_cmd = it.split('');_cmd.splice(0, 2);cmdS.push(_cmd.toString().split(',').join(''));};});
    let cmdH = [];_cmd = cmd;cmd.forEach((it) => {if(it.startsWith('h ')){_cmd = it.split('');_cmd.splice(0, 2);cmdH.push(_cmd.toString().split(',').join(''));};});

    let hashAlg;
    let salt;
    let PWHash;

    if(cmdA.length > 0){
      hashAlg = cmdA[0].toString();
    } else{
      hashAlg = prompt('Enter hashing algorithim: ');
    };
    if(cmdS.length > 0){
      salt = cmdS[0].toString();
    } else{
      salt = prompt('Enter the salt: ');
    };
    if(cmdH.length > 0){
      PWHash = cmdH[0].toString();
    } else{
      PWHash = prompt('Enter the password hash: ');
    };
    
    const birthDate = prompt('Enter victims birthdate(dd/mm/yyyy e.g. 01/01/2000): ').split('/');
    const keywords = prompt('Enter keywords about the victim(seperate with \',\'): ').split(',');
    const keynumbers = generateKeyNumbers(birthDate);
    
    console.log('\nPassword status: \x1b[32mSECURE\x1b[0m\nEntering \x1b[32mPhase-1(weak)\x1b[0m\n');
    printHappyCat();
    console.log();
    
    let result = weakBruteForce(salt, PWHash, keywords, keynumbers, hashAlg);
    
    if(result[0]){
      
      console.log('Password status: \x1b[31mCRACKED\x1b[0m\n');
      console.log('Password is:\x1b[31m\n' + result[1] + '\x1b[0m\n');
      printCoolCat();
      console.log();
      
    }else{
      
      console.log('Password status: \x1b[32mSECURE\x1b[0m\nEntering \x1b[33mPhase-2(medium strong)\x1b[0m\n');
      printWaveMouthCat();
      console.log();
      
      let dictionary = dictionaryJS.dictionary().split('": 1,\n  "');
      let a = pwGen.generateWeakPWs('a', keynumbers, speChar).length;
      while(dictionary.length * a > 1000000){
        dictionary.splice(Math.round(rand(0, dictionary.length - 3)),3)
      };
      //let result = weakBruteForce(salt, PWHash, dictionary, keynumbers, hashAlg);
      let result = [false, '10']
      if(result[0]){
        
        console.log('Password status: \x1b[31mCRACKED\x1b[0m\n');
        printCoolCat();
        console.log();
        
      }else{
        /*
        console.log('Password status: \x1b[32mSECURE\x1b[0m\nEntering \x1b[31mPhase-3(strong\n');
        printWaveMouthPlusEyesCat();
        console.log();
        
        if(result[0]){
          
          console.log('Password status: \x1b[31mCRACKED\x1b[0m\n');
          printCoolCat();
          console.log();
          
        }else{
          */
          console.log('Password status: \x1b[32mSECURE\n\x1b[1md3c1ph3rC4t\x1b[0m was saddly unable to crack the password.\n');
          printSadCat();
          console.log();
          
        //};
      };
    };
  };
  
  const hashCmd = (cmd) => {
    let cmdA = [];let _cmd = cmd;cmd.forEach((it) => {if(it.startsWith('a ')){_cmd = it.split('');_cmd.splice(0, 2);cmdA.push(_cmd.toString().split(',').join(''));};});
    let cmdS = [];_cmd = cmd;cmd.forEach((it) => {if(it.startsWith('s ')){_cmd = it.split('');_cmd.splice(0, 2);cmdS.push(_cmd.toString().split(',').join(''));};});
    let cmdP = [];_cmd = cmd;cmd.forEach((it) => {if(it.startsWith('p ')){_cmd = it.split('');_cmd.splice(0, 2);cmdP.push(_cmd.toString().split(',').join(''));};});
    
    let alg;
    let salt;
    let PW;
    
    if(cmdA.length > 0){
      alg = cmdA[0];
    } else{
      alg = prompt('Enter hashing algorithim: ');
    };
    if(cmdS.length > 0){
      salt = cmdS[0];
    } else{
      salt = prompt('Enter salt: ');
    };
    if(cmdP.length > 0){
      PW = cmdP[0];
    } else{
      PW = prompt('Enter password: ');
    };
    console.log(hashAlg.hash(PW, salt, alg, 'hex'));
  };
  
  const help = (cmd) => {
    if(cmd.length === 1){
      console.log('\'cls\' to clear the screen.\n\'exit\' to exit \x1b[32m\x1b[1md3c1ph3rC4t\x1b[0m\n\'\x1b[94m\x1b[1md3v1l\x1b[0m\' to run \x1b[94m\x1b[1md3v1lC4t\x1b[0m a password recovery tool by \x1b[35m\x1b[1m\x1b[3mc1ph3rC4t\x1b[0m.\n\'hash\' to hash a password.\n'); //\'\'\n
    } else{
      if(cmd[1] === 'hash'){
        console.log('\'-a\' pass a hashing algorithim to the function\n\'-s\' pass a salt to the function\n\'-p\' pass a password to the function\n');
      } else{
        if(cmd[1] === 'd3v1l'){
          console.log('\'-a\' pass a hashing algorithim to \x1b[94m\x1b[1md3v1lC4t\x1b[0m\n\'-s\' pass a salt to \x1b[94m\x1b[1md3v1lC4t\x1b[0m\n\'-h\' pass a hash to \x1b[94m\x1b[1md3v1lC4t\x1b[0m\n');//\'\' pass to \x1b[94m\x1b[1md3v1lC4t\x1b[0m\n
        } else{
          if(cmd[1] === 'hash'){
            console.log('\'-a\'\n');
          } else{
            if(cmd[1] === 'hash'){
              console.log('\'-a\'\n');
            };
          };
        };
      };
    };
  };
  
  const processCmd = (cmd) => {
    //console.log(cmd)
    if(cmd[0] === 'help'){
      help(cmd);
    } else {
      if(cmd[0] === 'd3v1l'){
        d3v1lC4t(cmd);
      } else {
        if(cmd[0] === 'hash'){
          hashCmd(cmd);
        } else{
          if(cmd[0] === 'cls'){
            console.clear();
          } else{
            if(cmd[0] === 'exit'){
              running = false;
            } else{
            console.log('\x1b[31mInvalid command!\x1b[0m\n');
            };
          };
        };
      };
    };
  };
  
  /*{ Main loop. }*/
  
  console.clear();
  console.log(`\n\x1b[30mNow running d3c1ph3rC4t v${__version__}`);
  console.log('\n\x1b[32m   8 d88b      d8       8     d88b      .d88b   d8  w\n.d88  wwP .d8b  8  88b. 8d8b.  wwP 8d8b 8P     dP8 w8ww\n8  8    8 8     8  8  8 8P Y8    8 8P   8b    dPw8  8\n`Y88 Y88P `Y8P 888 88P´ 8   8 Y88P 8    `Y88P    8  Y8P\n                   8');
  printHappyCat();
  console.log('\x1b[0mMade by \x1b[35m\x1b[1m\x1b[3mc1ph3rC4t\x1b[0m\n\n\x1b[30mType \'help\' for a list of commands.\x1b[0m\n');
  
  let running = true;
  while(running){
    cmd = prompt('> ');
    processCmd(cmd.split(' -'));
  };
} catch(err){
  console.clear();
  printErrorCat();
  console.log('\n\x1b[32m\x1b[1md3c1ph3rC4t\x1b[0m ran into an error.\nError information:');
  console.log('\x1b[31m');
  console.log(err);
};
