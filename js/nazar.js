class WorkExperience {
  constructor(public name: string, public time: number) {}

  howMany(): string {
    return `${this.name} пропрацював ${this.time} років;`;
  }
}

class Nazar {
  sraka = "SRAKATAN";
  private _name: string = "Nazar";
  private _age: number = 28;
  private _works: string[] = [
    "Chemical",
    "Poland",
    "Mountain",
    "Baisecl",
    "Mashrums"
  ];
  workExperience: WorkExperience[] = [
    new WorkExperience("Chemical", 3),
    new WorkExperience("Poland", 1),
    new WorkExperience("Mountain", 3),
    new WorkExperience("Baisecl", 5),
    new WorkExperience("Mashrums", 2)
  ];

  filterWork(a: string, b: number): void {
    console.log(this._works, a + b, this._getNameAge());
  }

  private _getNameAge(): string {
    return `${this._name} = : ${this._age}`;
  }
}

class User {
  workExperience: WorkExperience[];
    constructor(
      private _name: string,
      private _age: number,
      private _works: string[],
      workExperience: WorkExperience[]
    ) {
      this.workExperience = workExperience;
    }

    public filterWork(): void {
      console.log(this._works, this._getNameAge());
    }

    private _getNameAge(): string {
      return `${this._name} = : ${this._age}`;
    }
}
