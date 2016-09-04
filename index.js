 let objs = {
  Phonetifier: require('./BornoPhone'),
  phonetics: require('./phones')
};

let phonetifier = new objs.Phonetifier;

console.log(phonetifier.phonetify('কুমড়া'));
console.log(phonetifier.phonetify('হৃদপিণ্ড'));
console.log(phonetifier.phonetify('আলু'));
console.log(phonetifier.phonetify('প্রভাত'));
console.log(phonetifier.phonetify('তথ্যা'));
console.log(phonetifier.phonetify('ছত্তগ্রাম'));
console.log(phonetifier.phonetify('ওমরান'));
console.log(phonetifier.phonetify('রঙ্গিন'));
console.log(phonetifier.phonetify('শংগ্রাম'));
console.log(phonetifier.phonetify('শংরাম'));

module.exports = objs;
