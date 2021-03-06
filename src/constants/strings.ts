// Miguel Gargallo 2022 (c) All Rights Reserved.
export const GAME_TITLE = process.env.REACT_APP_GAME_NAME!
export const WIN_MESSAGES = ['Buen trabajo π!', 'Ole π', 'Bien Culito! π']
export const GAME_COPIED_MESSAGE = 'Tu copiabas en los exΓ‘menes fijo π©'
export const NOT_ENOUGH_LETTERS_MESSAGE = 'ΒΏQue fumas? π¬'
export const WORD_NOT_FOUND_MESSAGE = 'Ni de coΓ±a!! πππ'
export const HARD_MODE_ALERT_MESSAGE =
  'Vas con 99 porros encima, como quieres cambiar de modo en medio de partida? π΅ anda borras jodidas cookies, y vuelve a empezar tolai! Que no te enteras, jaja -3000 IQ!'
export const HARD_MODE_DESCRIPTION =
  'Las pistas π han de ser consecutivas, o pa tu casa'
export const HIGH_CONTRAST_MODE_DESCRIPTION = 'Pa los daltonicos o amantes del minimalismo π'
export const CORRECT_WORD_MESSAGE = (solution: string) =>
  `Ya tienes una excusa pa comprar π«, la palabra era ${solution}`
export const WRONG_SPOT_MESSAGE = (guess: string, position: number) =>
  `Bobi, debe usar ${guess} in position ${position}`
export const NOT_CONTAINED_MESSAGE = (letter: string) =>
  `Algo me dice que no eras la mas π€ lista de clase, la palabra debe contener la letra: ${letter}`
export const ENTER_TEXT = 'β΅'
export const DELETE_TEXT = 'β«'
export const STATISTICS_TITLE = 'π³οΈβπ Melodle Stats π³οΈβπ'
export const GUESS_DISTRIBUTION_TEXT = 'Distribucion posible π₯°'
export const NEW_WORD_TEXT = 'Relaja la raja culito π§ββοΈ'
export const SHARE_TEXT = 'Comparte si quieres tu progreso π'
export const MIGRATE_BUTTON_TEXT = 'Transfierelo a otro melodle pc βοΈ'
export const MIGRATE_DESCRIPTION_TEXT =
  'Click aqui pa transferir tus stats de pro de mierda a otro dispositivo Melodle π±.'
export const TOTAL_TRIES_TEXT = 'Intentos que llevas π€‘'
export const SUCCESS_RATE_TEXT = 'Victorias? Aqui π'
export const CURRENT_STREAK_TEXT = 'Streak actual π¦'
export const BEST_STREAK_TEXT = 'Mejor streak βοΈ'
export const DISCOURAGE_INAPP_BROWSER_TEXT =
  "Bro mejora tu buscador π©."
