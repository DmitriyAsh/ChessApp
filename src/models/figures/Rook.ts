import { Figure, FiguresNames } from './Figure';
import blackLogo from '../../assets/bR.png';
import whiteLogo from '../../assets/wR.png';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export class Rook extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FiguresNames.ROOK;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;
		if (this.cell.isEmptyVertical(target)) return true;
		if (this.cell.isEmptyHorizontal(target)) return true;
		return false;
	}
}
