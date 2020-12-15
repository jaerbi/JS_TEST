class RandomColor {

    private _randomColor(): string {
            let color = Math.floor(Math.random() * Math.pow(10, 6)) + '';
            if (color.length !== 6) {
                color = this._randomColor();
            }

            return color + '';
    }
}
