/**
 * Représente les différents états possibles d'une cellule
 */
export enum CellState {
  HIDDEN = 'hidden',
  REVEALED = 'revealed',
  FLAGGED = 'flagged',
  QUESTION = 'question'
}

/**
 * Représente les différents contenus possibles d'une cellule
 */
export enum CellContent {
  EMPTY = 0,
  ONE = 1,
  TWO = 2,
  THREE = 3,
  FOUR = 4,
  FIVE = 5,
  SIX = 6,
  SEVEN = 7,
  EIGHT = 8,
  MINE = -1
}

/**
 * Représente la position d'une cellule dans la grille
 */
export interface Position {
  row: number;
  col: number;
}

/**
 * Représente une cellule dans la grille du démineur
 */
export interface Cell {
  state: CellState;
  content: CellContent;
  position: Position;
}

/**
 * Crée une nouvelle cellule avec les paramètres spécifiés
 * @param row La ligne de la cellule
 * @param col La colonne de la cellule
 * @param content Le contenu de la cellule (par défaut vide)
 * @param state L'état de la cellule (par défaut caché)
 * @returns Une nouvelle cellule
 */
export function createCell(
  row: number,
  col: number,
  content: CellContent = CellContent.EMPTY,
  state: CellState = CellState.HIDDEN
): Cell {
  return {
    state,
    content,
    position: { row, col }
  };
} 