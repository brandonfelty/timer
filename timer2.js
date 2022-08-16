const beeper = (time) => {
  setTimeout(() => console.log('\nBeep'), time * 1000);
};

process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding ("utf-8")
process.stdin.on("data", function(key) { 
  if ( key === '\u0003' ) {
    console.log('\nThanks for using me, ciao!');
    process.exit();
  }

  if (key === 'b') {
    beeper(0);
  }

  let time = [];
  for (let i = 1; i <= 9; i++) {
    time.push(i.toString());
  }
  const timeInput = time.find(element => (element === key));
  
  if (timeInput) {
    console.log(`\nSetting timer for ${timeInput} seconds...`);
    beeper(timeInput);
  }
})
