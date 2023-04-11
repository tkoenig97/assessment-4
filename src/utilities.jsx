export default function capFirstLetter(string) {
    return string.replace(/(^|\-)\w/g, function (m) {
        return m.toUpperCase();
    });
}
