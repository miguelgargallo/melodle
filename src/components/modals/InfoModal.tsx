// Miguel Gargallo 2022 (c) All Rights Reserved.
import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="🍑 Cómo jugar culitos" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Adivina la palabra en el número de intentos posibles. Después de cada intento, el color de las baldosas 
        cambiará para mostrar lo cerca que estaba de la palabra.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="Z"
          status="correct"
        />
        <Cell value="O" />
        <Cell value="R" />
        <Cell value="R" />
        <Cell value="A" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra W está en la palabra y en el lugar correcto.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="C" />
        <Cell value="U" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="L"
          status="present"
        />
        <Cell value="O" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra L está en la palabra pero en el lugar equivocado.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="B" />
        <Cell value="O" />
        <Cell value="O" />
        <Cell isRevealing={true} isCompleted={true} value="B" status="absent" />
        <Cell value="S" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        La letra U no está en la palabra en ningún lugar.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        Esta es una versión de código abierto del juego de adivinar palabras que 
        todos conocemos y anamos -{' '}
        <a
          href="https://miguelon.net"
          className="underline font-bold"
        >
          consulte el código aquí
        </a>{' '}
      </p>
    </BaseModal>
  )
}
