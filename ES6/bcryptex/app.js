import bcrypt from 'bcrypt'
let user={
    username:"rahul",
    password: "iloveindia",
    cc:'4444555566667777',
    cvv:'666'
}
let salt=bcrypt.genSaltSync(10);
let new_cc= bcrypt.hashSync(user.cc,salt)
console.log(user.cc);
console.log(new_cc);