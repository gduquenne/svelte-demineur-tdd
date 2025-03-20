import { describe, it, expect } from 'vitest';
import { createBoard } from './Board';
import type { Board, BoardConfig } from './Board';
import { CellContent, CellState } from './Cell';

describe('Board Types', () => {
  describe('BoardConfig', () => {
    it('should have rows, columns and mines properties', () => {
      const config: BoardConfig = {
        rows: 10,
        cols: 10,
        mines: 10
      };
      
      expect(config.rows).toBe(10);
      expect(config.cols).toBe(10);
      expect(config.mines).toBe(10);
    });
  });

  describe('Board', () => {
    it('should have config and cells properties', () => {
      const board: Board = {
        config: {
          rows: 3,
          cols: 3,
          mines: 1
        },
        cells: Array(9).fill(null) // La vraie implémentation sera testée via createBoard
      };
      
      expect(board.config).toBeDefined();
      expect(board.config.rows).toBe(3);
      expect(board.config.cols).toBe(3);
      expect(board.config.mines).toBe(1);
      expect(Array.isArray(board.cells)).toBe(true);
    });
  });

  describe('createBoard', () => {
    it('should create a board with the given dimensions', () => {
      const config: BoardConfig = {
        rows: 3,
        cols: 4,
        mines: 2
      };
      
      const board = createBoard(config);
      
      expect(board.config).toEqual(config);
      expect(board.cells.length).toBe(config.rows * config.cols);
    });

    it('should create cells with correct positions', () => {
      const config: BoardConfig = {
        rows: 2,
        cols: 2,
        mines: 1
      };
      
      const board = createBoard(config);
      
      expect(board.cells[0].position).toEqual({ row: 0, col: 0 });
      expect(board.cells[1].position).toEqual({ row: 0, col: 1 });
      expect(board.cells[2].position).toEqual({ row: 1, col: 0 });
      expect(board.cells[3].position).toEqual({ row: 1, col: 1 });
    });

    it('should create cells with initial state HIDDEN', () => {
      const config: BoardConfig = {
        rows: 2,
        cols: 2,
        mines: 1
      };
      
      const board = createBoard(config);
      
      board.cells.forEach(cell => {
        expect(cell.state).toBe(CellState.HIDDEN);
      });
    });

    it('should create cells with initial content EMPTY', () => {
      const config: BoardConfig = {
        rows: 2,
        cols: 2,
        mines: 0 // Pas de mines pour ce test
      };
      
      const board = createBoard(config);
      
      board.cells.forEach(cell => {
        expect(cell.content).toBe(CellContent.EMPTY);
      });
    });

    it('should throw error if mines count exceeds cell count', () => {
      const config: BoardConfig = {
        rows: 2,
        cols: 2,
        mines: 5 // Plus de mines que de cellules
      };
      
      expect(() => createBoard(config)).toThrow();
    });
  });
}); 