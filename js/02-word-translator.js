let language = prompt('Enter a language code: (es, de, en, fr)').toLowerCase()
switch (language) {
	case 'fr':
		document.write('Hello world in French is: \'Bonjour le monde!\' ')
		break
	case 'es':
		document.write('Hello world in Español is: \'Hola Mundo!\'')
		break
    case 'de':
        document.write('Hello world in German is: \'Hallo Welt!\'')
	default: 
		document.write('Hello World!')
}