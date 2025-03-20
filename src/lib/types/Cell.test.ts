import { describe, it, expect } from 'vitest';
import { CellState, CellContent, createCell } from './Cell';
import type { Position, Cell } from './Cell';

describe('Cell Types', () => {
  describe('CellState', () => {
    it('should define the possible states of a cell', () => {
      expect(CellState.HIDDEN).toBeDefined();
      expect(CellState.REVEALED).toBeDefined();
      expect(CellState.FLAGGED).toBeDefined();
      expect(CellState.QUESTION).toBeDefined();
    });
  });

  describe('CellContent', () => {
    it('should define the possible contents of a cell', () => {
      expect(CellContent.EMPTY).toBe(0);
      expect(CellContent.MINE).toBe(-1);
      // Numbers 1-8 represent adjacent mines
      expect(typeof CellContent.ONE).toBe('number');
      expect(typeof CellContent.EIGHT).toBe('number');
    });
  });

  describe('Position', () => {
    it('should have row and column properties', () => {
      const position: Position = { row: 1, col: 2 };
      expect(position.row).toBe(1);
      expect(position.col).toBe(2);
    });
  });

  describe('Cell', () => {
    it('should have state, content and position properties', () => {
      const cell: Cell = {
        state: CellState.HIDDEN,
        content: CellContent.EMPTY,
        position: { row: 0, col: 0 }
      };
      
      expect(cell.state).toBe(CellState.HIDDEN);
      expect(cell.content).toBe(CellContent.EMPTY);
      expect(cell.position.row).toBe(0);
      expect(cell.position.col).toBe(0);
    });
  });

  describe('createCell', () => {
    it('should create a cell with the given position', () => {
      const cell = createCell(1, 2);
      
      expect(cell.state).toBe(CellState.HIDDEN);
      expect(cell.content).toBe(CellContent.EMPTY);
      expect(cell.position.row).toBe(1);
      expect(cell.position.col).toBe(2);
    });

    it('should create a cell with the given content', () => {
      const cell = createCell(1, 2, CellContent.MINE);
      
      expect(cell.state).toBe(CellState.HIDDEN);
      expect(cell.content).toBe(CellContent.MINE);
      expect(cell.position.row).toBe(1);
      expect(cell.position.col).toBe(2);
    });

    it('should create a cell with the given state', () => {
      const cell = createCell(1, 2, CellContent.ONE, CellState.FLAGGED);
      
      expect(cell.state).toBe(CellState.FLAGGED);
      expect(cell.content).toBe(CellContent.ONE);
      expect(cell.position.row).toBe(1);
      expect(cell.position.col).toBe(2);
    });
  });
}); 