private _randomeText(length: number): string {
        let solution = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            const isSpace = this._isOdd(i) ? ' ' : '';
            
            solution += characters.charAt(Math.floor(Math.random() * charactersLength)) + isSpace;
        }

        return solution;
    }
