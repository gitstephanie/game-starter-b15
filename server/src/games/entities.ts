import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, Index, OneToMany, ManyToOne } from 'typeorm'
import User from '../users/entity'

export type Color = 'red' | 'blue'
export type redRow = [ 'red', 'red', 'red' ]
export type emptyRow = [null, null, null]
export type blueRow = [ 'blue', 'blue', 'blue']
export type Board = [ redRow, emptyRow, blueRow ]

type Status = 'pending' | 'started' | 'finished'

// export default const Pieces = () =>  {
//   return [['F', 'B', '5', '9', '1', 'S', '6', '8', '8', '9'],
//           ['B', 'B', '9', '5', '3', '2', '8', '7', '9', '9'],
//           ['7', '5', '4', '8', '6', '4', '4', '8', '3', '7'],
//           ['B', '7', 'B', '5', '9', '6', '6', '9', '9', 'B']];
// };

//const emptyBoard: Board = [ emptyRow, emptyRow, emptyRow ] // wij hebben geen emptyBoard, eerder een defaultBoard

@Entity()
export class Game extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @Column('json')
  board: Board

  @Column('text', {default: 'red'})
  turn: Color

  @Column('text', {nullable: true})
  winner: Color

  @Column('text', {default: 'pending'})
  status: Status

  // this is a relation, read more about them here:
  // http://typeorm.io/#/many-to-one-one-to-many-relations
  @OneToMany(_ => Player, player => player.game, {eager:true})
  players: Player[]
}

@Entity()
@Index(['game', 'user', 'color'], {unique:true})
export class Player extends BaseEntity {

  @PrimaryGeneratedColumn()
  id?: number

  @ManyToOne(_ => User, user => user.players)
  user: User

  @ManyToOne(_ => Game, game => game.players)
  game: Game

  @Column()
  userId: number // comment these lines out when you start the game 

  @Column('text',{nullable: true})
  color: Color

};