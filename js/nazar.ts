class WorkExperience {
  
  constructor(public name: string, public time: number) {}

  public howMany(): string {
    return `${this.name} пропрацював ${this.time} років!;`;
  }
}

class Nazar {
  sraka = 'SRAKATAN';
  private _name: string = 'Nazar';
  private _age: number = 28;
  private _works: string[] = [
    'Chemical',
    'Poland',
    'Mountain',
    'Baisecl',
    'Mashrums',
    'PipPop'
  ];
  workExperience: WorkExperience[] = [
    new WorkExperience("Chemical", 3),
    new WorkExperience("Poland", 1),
    new WorkExperience("Mountain", 3),
    new WorkExperience("Baisecl", 5),
    new WorkExperience("Mashrums", 2),
    new WorkExperience("PipPop", 1)
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

nazar = new Nazar();

yura = new User(
    "Yura",
    28,
    ["Chemical", "Grishick", "Poli", "TenantCloud", "RocketHarbor"],
    [
      new WorkExperience("Chemical", 4),
      new WorkExperience("Grishick", 1),
      new WorkExperience("Poli", 1),
      new WorkExperience("TenantCloud", 9),
      new WorkExperience("RocketHarbor", 7)
    ]
);
console.log(this.yura.workExperience[3].howMany());
console.log(this.nazar.workExperience[2].howMany());
console.log(this.yura.workExperience);
console.log(this.nazar.filterWork('sraka', 13));
