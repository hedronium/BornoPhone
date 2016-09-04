var vowels = {
  'অ': ['O'],
  'আ': ['A'],
  'ই': ['I', 'EE'],
  'ঈ': ['EE', 'I'],
  'উ': ['U', 'OO'],
  'ঊ': ['OO', 'U'],
  'ঋ': ['REE', 'RI'],
  'এ': ['E', 'A'],
  'ঐ': ['OI', 'OY'],
  'ও': ['O'],
  'ঔ': ['OU', 'OW']
};

var combinable = {
  'া': 'আ',
  'ি': 'ই',
  'ী': 'ঈ',
  'ু': 'উ',
  'ূ': 'ঊ',
  'ৃ': 'ঋ',
  'ে': 'এ',
  'ৈ': 'ঐ',
  'ো': 'ও',
  'ৌ': 'ঔ'
};

var consonants = {
  'ক': {
    defcom: 'ও',
    def: ['K', 'C']
  },
  'খ': {
    defcom: 'ও',
    def: ['KH']
  },
  'গ': {
    defcom: 'ও',
    def: ['G']
  },
  'ঘ': {
    defcom: 'ও',
    def: ['GH']
  },
  'ঙ': {
    defcom: 'ও',
    def: ['NG']
  },
  'চ': {
    defcom: 'ও',
    def: ['CH']
  },
  'ছ': {
    defcom: 'ও',
    def: ['CHH']
  },
  'জ': {
    defcom: 'ও',
    def: ['J']
  },
  'ঝ': {
    defcom: 'ও',
    def: ['JH']
  },
  'ঞ': {
    defcom: 'ও',
    def: ['N']
  },
  'ট': {
    defcom: 'ও',
    def: ['T']
  },
  'ঠ': {
    defcom: 'ও',
    def: ['TH']
  },
  'ড': {
    defcom: 'ও',
    def: ['D']
  },
  'ঢ': {
    defcom: 'ও',
    def: ['DH']
  },
  'ণ': {
    defcom: 'ও',
    def: ['N']
  },
  'ত': {
    defcom: 'ও',
    def: ['T']
  },
  'থ': {
    defcom: 'ও',
    def: ['TH']
  },
  'দ': {
    defcom: 'ও',
    def: ['D']
  },
  'ধ': {
    defcom: 'ও',
    def: ['DH']
  },
  'ন': {
    defcom: 'ও',
    def: ['N']
  },
  'প': {
    defcom: 'ও',
    def: ['P']
  },
  'ফ': {
    defcom: 'ও',
    def: ['F']
  },
  'ব': {
    defcom: 'ও',
    def: ['B']
  },
  'ভ': {
    defcom: 'ও',
    def: ['BH']
  },
  'ম': {
    defcom: 'ও',
    def: ['M']
  },
  'য': {
    defcom: 'ও',
    def: ['J'],
    postCom: ['Y']
  },
  'র': {
    defcom: 'ও',
    def: ['R']
  },
  'ল': {
    defcom: 'ও',
    def: ['L']
  },
  'শ': {
    defcom: 'ও',
    def: ['SH']
  },
  'ষ': {
    defcom: 'ও',
    def: ['SH']
  },
  'স': {
    defcom: 'ও',
    def: ['SH']
  },
  'হ': {
    defcom: 'ও',
    def: ['H']
  },
  'ড়': {
    defcom: 'ও',
    def: ['R']
  },
  'ঢ়': {
    defcom: 'ও',
    def: ['R']
  },
  'য়': {
    defcom: 'ও',
    def: ['Y','W']
  },
  'ৎ': {
    defcom: 'ও',
    def: ['T']
  },
  'ং': {
    defcom: '',
    def: ['ng']
  }
};

module.exports = {vowels, combinable, consonants};
