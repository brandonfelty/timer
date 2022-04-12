const args = process.argv;
args.splice(0,2);
//console.log(args.length)
let iterations = 0;

const timer = () => {
  process.stdout.write('\x07');
}

for (const arg of args) {
  setTimeout(timer, arg * 1000);
};

