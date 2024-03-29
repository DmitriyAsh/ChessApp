import { Figure, FiguresNames } from './Figure';
import blackLogo from '../../assets/bN.png';
import whiteLogo from '../../assets/wN.png';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export class Knight extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FiguresNames.KNIGHT;
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) return false;
		const dx = Math.abs(this.cell.x - target.x);
		const dy = Math.abs(this.cell.y - target.y);
		return (dx === 1 && dy === 2) || (dx === 2 && dy === 1);
	}
}
