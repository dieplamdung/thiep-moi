export type TypographyProps = {
  variant: Variant;
  color?: string;
  onClick?: () => void;
  className?: string;
  children?: any;
  cursor?: Cursor;
  spacing?: string;
};

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h3r'
  | 'b1'
  | 'b1r'
  | 'b2'
  | 'b2m'
  | 'button'
  | 'label'
  | 'text';
export type Cursor =
  | 'auto'
  | 'default'
  | 'none'
  | 'context-menu'
  | ' help'
  | 'pointer'
  | 'progress'
  | 'wait'
  | 'cell'
  | 'crosshair'
  | 'text'
  | 'vertical-text'
  | 'alias'
  | 'copy'
  | 'move'
  | 'no-drop'
  | 'not-allowed'
  | 'e-resize'
  | 'n-resize'
  | 'ne-resize'
  | 'nw-resize'
  | 's-resize'
  | 'se-resize'
  | 'sw-resize'
  | 'w-resize'
  | 'ew-resize'
  | 'ns-resize'
  | 'nesw-resize '
  | 'nwse-resize '
  | 'col-resize '
  | 'row-resize'
  | 'all-scroll'
  | 'zoom-in '
  | 'zoom-out '
  | 'grab'
  | 'grabbing';
