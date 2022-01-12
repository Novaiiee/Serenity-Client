export function maxCharacterLength(str: string, length: number) {
	// if (str.length > length) return str.substring(0, length);
	// else return str;

	const words = str.split(",");
	if (words.length < length) return words;

	words.length = length;
	return words.join(" ");
}
