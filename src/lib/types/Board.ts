import { createCell } from './Cell';
import type { Cell } from './Cell';

/**
 * Configuration du plateau de jeu
 */
export interface BoardConfig {
  rows: number;
  cols: number;
  mines: number;
}

/**
 * Représente le plateau de jeu du démineur
 */
export interface Board {
  config: BoardConfig;
  cells: Cell[];
}

/**
 * Crée un nouveau plateau de jeu avec les dimensions spécifiées
 * @param config Configuration du plateau
 * @returns Un nouveau plateau avec des cellules vides
 * @throws Error si le nombre de mines est supérieur au nombre de cellules
 */
export function createBoard(config: BoardConfig): Board {
  const { rows, cols, mines } = config;
  const totalCells = rows * cols;
  
  if (mines > totalCells) {
    throw new Error(`Le nombre de mines (${mines}) ne peut pas être supérieur au nombre de cellules (${totalCells})`);
  }
  
  const cells: Cell[] = [];
  
  // Créer toutes les cellules vides
  // Stryker disable UpdateOperator
  for (let row = 0; row < rows; row++) {
  // Stryker disable UpdateOperator
    for (let col = 0; col < cols; col++) {
      cells.push(createCell(row, col));
    }
  }
  
  return {
    config,
    cells
  };
} 