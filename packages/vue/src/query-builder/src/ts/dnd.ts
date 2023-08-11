export type DndDropTargetType = 'rule' | 'ruleGroup' | 'inlineCombinator';

export interface DraggedItem {
  path: number[];
}

export type DropEffect = 'move' | 'copy';

export interface DropResult {
  path: number[];
  type: DndDropTargetType;
  dropEffect?: DropEffect;
}
export interface DragCollection {
  isDragging: boolean;
  dragMonitorId: string | symbol;
}
export interface DropCollection {
  isOver: boolean;
  dropMonitorId: string | symbol;
  dropEffect?: DropEffect;
}
