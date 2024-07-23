const units = [
	'nol',
	'bir',
	'ikki',
	'uch',
	"to'rt",
	'besh',
	'olti',
	'yetti',
	'sakkiz',
	"to'qqiz",
]

const teens = [
	"o'n",
	"o'n bir",
	"o'n ikki",
	"o'n uch",
	"o'n to'rt",
	"o'n besh",
	"o'n olti",
	"o'n yetti",
	"o'n sakkiz",
	"o'n to'qqiz",
]

const tens = [
	'',
	'',
	'yigirma',
	"o'ttiz",
	'qirq',
	'ellik',
	'oltimish',
	'yetmish',
	'sakson',
	"to'qson",
]

const thousands = ['', 'ming', 'million']

export function convertToWords(num: number): string {
	if (num === 0) return 'nol'
	if (num < 0) return 'minus ' + convertToWords(Math.abs(num))

	let word = ''
	let thousandCounter = 0

	while (num > 0) {
		let part = num % 1000
		if (part > 0) {
			let partWord = convertHundreds(part)
			word =
				partWord +
				(thousands[thousandCounter] ? ' ' + thousands[thousandCounter] : '') +
				' ' +
				word
		}
		num = Math.floor(num / 1000)
		thousandCounter++
	}

	return word.trim()
}

function convertHundreds(num: number): string {
	let word = ''

	if (num >= 100) {
		word += units[Math.floor(num / 100)] + ' yuz '
		num = num % 100
	}

	if (num >= 10 && num <= 19) {
		word += teens[num - 10] + ' '
	} else {
		if (num >= 20) {
			word += tens[Math.floor(num / 10)] + ' '
			num = num % 10
		}
		if (num > 0) {
			word += units[num] + ' '
		}
	}

	return word.trim()
}
