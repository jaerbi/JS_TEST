private _randomDate(number): moment.Moment {
        const randomNum = Math.floor(Math.random() * number);
        const solution = moment(moment(), 'DD-MM-YYYY').add(randomNum, 'hours').add(randomNum, 'days').add(randomNum, 'minutes');
        
        return solution;
    }
