export class Validator {

    // Пороверяет пустой ли контрол
    static required( value ='' ) {
        return value && value.trim()
    }

    static minLength(length) {
        return value => {
            return value.length >= length
        }
    }
}