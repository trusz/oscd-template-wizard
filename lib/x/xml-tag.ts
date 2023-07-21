export function xml(strings: TemplateStringsArray): Document {
	const str = strings.join('');
	const document = new DOMParser().parseFromString(str, 'application/xml')
	return document
}