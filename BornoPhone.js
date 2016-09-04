var phones = require('./phones');

class BornoPhone {
  convert(phonetics, word, last, offset) {
    if (offset === word.length) {
      phonetics.push(last.toLowerCase());
      return;
    }

    let char = word[offset];
    let pros = phones.vowels[char] || phones.vowels[phones.combinable[char]] || (() => {
      if (word[offset-1] == '্') {
        return ('postCom' in phones.consonants[char]) ? phones.consonants[char].postCom : phones.consonants[char].def;
      } else {
        return phones.consonants[char] ? phones.consonants[char].def : [''];
      }
    })();

    if (!pros) {
      pros = [''];
    }

    // let interpolate_combinable_1 = (char in phones.consonants) && !word[offset+1];
    // let interpolate_combinable_2 = (char in phones.consonants) && !(word[offset+1] in phones.consonants) && (word[offset-1] == '্');

    // if (interpolate_combinable_1 || interpolate_combinable_2) {
      // let ar = word.split('');
      // ar.splice(offset+1, 0, [phones.consonants[char].defcom]);
      // word = ar.join('');
    // }

    for (let pro of pros) {
      this.convert(phonetics, word, last+pro, offset+1);
    }
  }

  phonetify(word) {
    let phonetics = [];
    this.convert(phonetics, word, '', 0);

    return phonetics;
  }
}

module.exports = BornoPhone;
