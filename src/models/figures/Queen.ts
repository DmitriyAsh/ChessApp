import { Figure, FiguresNames } from './Figure';
import blackLogo from '../../assets/bQ.png';
import whiteLogo from '../../assets/wQ.png';
import { Colors } from '../Colors';
import { Cell } from '../Cell';

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell);
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
		this.name = FiguresNames.QUEEN;
	}
}
