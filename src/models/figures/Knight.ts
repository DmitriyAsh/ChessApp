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
}
