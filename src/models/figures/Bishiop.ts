import { Cell } from '../Cell';
import { Colors } from '../Colors';
import { Figure, FiguresNames } from './Figure';
import blackLogo from '../../assets/bB.png';
import whiteLogo from '../../assets/wB.png';

export class Bishop extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FiguresNames.BISHOP;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;
		if (this.cell.isEmptyDiagonal(target)) return true;
		return false;
	}
}
