let text = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque reprehenderit. dolores nobis ad ipsam. Praesentium, labore velit iure, atque fugiat odit dolor, impedit repudiandae reprehenderit itaque nostrum libero porro laboriosam!. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque reprehenderit/ dolores nobis ad ipsam. Praesentium, labore velit iure, atque fugiat odit dolor, impedit repudiandae reprehenderit, itaque nostrum libero porro laboriosam!"

//se necesita una funcion para normalizar todas las palabras (quitar signos de puntuacion, todas en minusculas)
function normalize(word: string) {
    return word.toLowerCase().replace(/[.!,//]/g, "");
}

function sameWords(text: string) {
    let dict: { [key: string]: number } = {};
    let separateWords = text.split(" ");

    for (let word of separateWords) {
        if (normalize(word) in dict) {
            ++dict[normalize(word)];
        } else {
            dict[normalize(word)] = 1;
        }
    }

    console.log(dict);
}

sameWords(text);