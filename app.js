var text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque reprehenderit. dolores nobis ad ipsam. Praesentium, labore velit iure, atque fugiat odit dolor, impedit repudiandae reprehenderit itaque nostrum libero porro laboriosam!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque reprehenderit/ dolores nobis ad ipsam. Praesentium, labore velit iure, atque fugiat odit dolor, impedit repudiandae reprehenderit, itaque nostrum libero porro laboriosam!";
//se necesita una funcion para normalizar todas las palabras (quitar signos de puntuacion, todas en minusculas)
function normalize(word) {
    return word.toLowerCase().replace(/[.!,//]/g, "");
}
function sameWords(text) {
    var dict = {};
    var separateWords = text.split(" ");
    for (var _i = 0, separateWords_1 = separateWords; _i < separateWords_1.length; _i++) {
        var word = separateWords_1[_i];
        if (normalize(word) in dict) {
            ++dict[normalize(word)];
        }
        else {
            dict[normalize(word)] = 1;
        }
    }
    console.log(dict);
}
sameWords(text);
