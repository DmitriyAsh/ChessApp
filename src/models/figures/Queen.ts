import { Figure, FiguresNames } from './Figure';
import blackLogo from '../../assets/bQ.png';
import whiteLogo from '../../assets/wQ.png';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export class Queen extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FiguresNames.QUEEN;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;
		if (this.cell.isEmptyVertical(target)) return true;
		if (this.cell.isEmptyHorizontal(target)) return true;
		if (this.cell.isEmptyDiagonal(target)) return true;
		return false;
	}
}
