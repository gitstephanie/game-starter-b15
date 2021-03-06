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
  
export const isValidTransition = function(from_x, from_y, to_x, to_y) {
   const from = {column: from_x, row: from_y};
   const to = {column: to_x, row: to_y};
   return from && to;
}

//   if(from_x < 0 || from_x > 3 || from_y < 0 || from_y > 3) {
//     throw new BadRequestError('The square_from coordinates %j are not within the game grid', from);
// }

// if(to_x < 0 || to_x > 3 || to_y < 0 || to_y > 3) {
//   throw new BadRequestError('The square_to coordinates %j are not within the game grid', to);
// }

// const player = Player.findOneById(1)
// console.log({player}) // outcome = {player: [Function: Player]}

// pieceType = game.board.value ?????
// if(pieceType === null) { // pieceType moet gedefined worden
//   throw new BadRequestError('There is no piece present at coordinate %j', from));
// }
// if(from_x === to_x && from_y === to_y) {
//   throw new BadRequestError('The square_from coordinate %j can not be the same as the square_to coordinate %j', from, to);
// }

// const playerFrom = getPlayer(from_x, from_y); // define getPlayer
//     const playerTo = getPlayer(to_x, to_y);
//     if(playerFrom !== ' ' && playerFrom == playerTo) {
//         throw new BadRequestError('There already is a piece you control at %j', to);
//     }

// // Check if move is not diagonal
// if(from_x !== to_x && from_y !== to_y) {
//   throw new BadRequestError('From %j to %j is a diagonal move, this is not allowed', from, to);
// }

// function checkSpaceIsFree(x, y) {
//   const space = {row: y, column: x};

//   //Check if move is only one step
//   if(Math.abs((from_y - to_y) + (from_x - to_x)) !== 1) {
//     throw new BadRequestError('Piece %s can only move 1 space, cannot move from %j to %j', pieceType, from, to));
// }

// }

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
  
