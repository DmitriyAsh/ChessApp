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
}
