import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { Board} from './entities'

@ValidatorConstraint()
export class IsBoard implements ValidatorConstraintInterface {

  validate(board: Board) {
    return board.length > 3 &&
      board.every(row =>
        row.length > 3 
      )
  }
}

// Hieronder moet worden toegevoegd dat een kleur een andere kleur kan vervangen (bij winst)
export const isValidTransition = (color, board1, board2) => {
 return color && board1 && board2
}

// We hebben andere logica nodig om winnaar te bepalen
//  export const calculateWinner = (board: Board)=>
//   board
//   .map(
//     (row) => row.map((tile) => ({
//       tile.every(
//     if player.color && !player.pawn.includes(3) {
//       return winner === !player.color
//     }
//   ),
  

//   // finished: geen moves meer mogelijk / er is een winnaar
//  export const finished = () =>
//    calculateWinner(board) === true 
  
