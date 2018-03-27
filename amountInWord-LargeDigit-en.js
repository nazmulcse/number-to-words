/**
 * Created by Nazmul on 3/27/2018.
 */
function inWords(number) {
    var gonona = {
        amount: null,
        numberFragements: {
            integerPart: null,
            fractionPart: null,
            isFloatValue: false,
        },
        unit: {
            koti: 'crore',
            lokkho: 'lakh',
            hazar: 'thousand',
            sotok: 'hundred',
            ekok: '',
        },

        numericWord: {
            '.': 'point',
            '00': '',
            '1': 'one',
            '01': 'one',
            '2': 'two',
            '02': 'two',
            '3': 'three',
            '03': 'three',
            '4': 'four',
            '04': 'four',
            '5': 'five',
            '05': 'five',
            '6': 'six',
            '06': 'six',
            '7': 'seven',
            '07': 'seven',
            '8': 'eight',
            '08': 'eight',
            '9': 'nine',
            '09': 'nine',
            '10': 'ten',
            '11': 'eleven',
            '12': 'twelve',
            '13': 'thirteen',
            '14': 'fourteen',
            '15': 'fifteen',
            '16': 'sixteen',
            '17': 'seventeen',
            '18': 'eighteen',
            '19': 'nineteen',
            '20': 'twenty',
            '21': 'twenty one',
            '22': 'twenty two',
            '23': 'twenty three',
            '24': 'twenty four',
            '25': 'twenty five',
            '26': 'twenty six',
            '27': 'twenty seven',
            '28': 'twenty eight',
            '29': 'twenty nine',
            '30': 'thirty',
            '31': 'thirty one',
            '32': 'thirty two',
            '33': 'thirty three',
            '34': 'thirty four',
            '35': 'thirty five',
            '36': 'thirty six',
            '37': 'thirty seven',
            '38': 'thirty eight',
            '39': 'thirty nine',
            '40': 'forty',
            '41': 'forty one',
            '42': 'forty two',
            '43': 'forty three',
            '44': 'forty four',
            '45': 'forty five',
            '46': 'forty six',
            '47': 'forty seven',
            '48': 'forty eight',
            '49': 'forty nine',
            '50': 'fifty',
            '51': 'fifty one',
            '52': 'fifty two',
            '53': 'fifty  three',
            '54': 'fifty four',
            '55': 'fifty five',
            '56': 'fifty six',
            '57': 'fifty seven',
            '58': 'fifty eight',
            '59': 'fifty nine',
            '60': 'sixty',
            '61': 'sixty one',
            '62': 'sixty two',
            '63': 'sixty three',
            '64': 'sixty four',
            '65': 'sixty five',
            '66': 'sixty six',
            '67': 'sixty seven',
            '68': 'sixty eight',
            '69': 'sixty nine',
            '70': 'seventy',
            '71': 'seventy one',
            '72': 'seventy two',
            '73': 'seventy three',
            '74': 'seventy four',
            '75': 'seventy five',
            '76': 'seventy six',
            '77': 'seventy seven',
            '78': 'seventy eight',
            '79': 'seventy nine',
            '80': 'eighty',
            '81': 'eighty one',
            '82': 'eighty two',
            '83': 'eighty three',
            '84': 'eighty four',
            '85': 'eighty five',
            '86': 'eighty six',
            '87': 'eighty seven',
            '88': 'eighty eight',
            '89': 'eighty nine',
            '90': 'ninety',
            '91': 'ninety one',
            '92': 'ninety two',
            '93': 'ninety three',
            '94': 'ninety four',
            '95': 'ninety five',
            '96': 'ninety six',
            '97': 'ninety seven',
            '98': 'ninety eight',
            '99': 'ninety nine',
        },
        isFloat: function (value) {
            return (value).toString().indexOf('.') > -1
        },
        isZero: function (num) {
            return /^0+$/.test(num);
        },
        createSegment: function (num) {
            var segments = {
                koti: null,
                lokkho: null,
                hazar: null,
                sotok: null,
                ekok: null
            };

            segments.koti = Math.floor(num / 10000000);
            num = num % 10000000;

            segments.lokkho = Math.floor(num / 100000);
            num = num % 100000;

            segments.hazar = Math.floor(num / 1000);
            num = num % 1000;

            segments.sotok = Math.floor(num / 100);
            num = num % 100;

            segments.ekok = num;

            return segments;
        },

        setAmount: function (amount) {
            if (!isNaN(amount) && Number(amount) > -1) {
                this.amount = Number(amount);
                if (this.isFloat(this.amount)) {
                    var numberStr = (this.amount).toString();
                    var positionOfDecimalPoint = numberStr.indexOf('.');
                    this.numberFragements.integerPart = numberStr.substring(0, positionOfDecimalPoint);
                    this.numberFragements.fractionPart = numberStr.substring(positionOfDecimalPoint + 1);
                    this.numberFragements.isFloatValue = true;
                } else {
                    this.numberFragements.integerPart = Number(amount);
                    this.numberFragements.isFloatValue = false;
                }
            } else {
                throw new Error('Invalid parameter given, expected positive numeric value');
            }
        },
        getFractionSentece: function (fractionValue) {
            var fractionSentence = ''
            var fractionPartArray = fractionValue.toString().split('');
            fractionPartArray.forEach(function (character, index) {
                if (character === '0' && index < fractionPartArray.length - 1) {
                    fractionSentence += 'zero '
                } else {
                    fractionSentence += this.numericWord[character] + ' '
                }
            }, this);
            return fractionSentence.trim();
        },
        generateSentence: function (segments) {
            var numberString = '';
            for (var i = segments.length - 1; i >= 0; i--) {
                for (var key in segments[i]) {
                    if (segments[i][key]) {
                        var amountWord = this.numericWord[segments[i][key]] ? this.numericWord[segments[i][key]] + ' ' : '';
                        if (key === 'koti' && segments[i]['koti'] && segments[i + 1] && segments[i + 1]['ekok']) {
                            numberString = numberString.trim();
                            amountWord = ' ';
                        }
                        numberString += amountWord + this.unit[key] + " ";
                    }
                }
            }
            return numberString;
        },

        getAmountInWord: function (value) {
            var amount = value;
            var segmentArray = [];
            var koti = amount / 10000000;
            if (koti > 99) {
                while (koti > 99) {
                    var result = this.createSegment(amount);
                    koti = result.koti;
                    segmentArray.push(result);
                    amount = Math.floor(amount / 10000000);
                }
            } else {
                var result = this.createSegment(amount);
                segmentArray.push(result);
            }
            return this.generateSentence(segmentArray).trim();
        },
        init: function (amount) {
            if (this.isZero(amount)) return 'zero';
            this.setAmount(amount);
            var integerNumberInWord = this.getAmountInWord(this.numberFragements.integerPart);
            if (!this.numberFragements.isFloatValue) {
                return integerNumberInWord;
            }
            var fractionNumberInWord = this.getFractionSentece(this.numberFragements.fractionPart);
            return integerNumberInWord + ' ' + this.numericWord['.'] + ' ' + fractionNumberInWord
        },
    }
    return gonona.init(number);

}