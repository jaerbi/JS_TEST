# JS_TEST
JavaScript_test

interface ICandidateResponce {
  responseMail(): string;
}

interface ICandidateAngular {
  role: string;
  company: string;
  location: string;
}

class CandidateInfo implements ICandidateAngular, ICandidateResponce {
  role = "Angular2+";
  company = "Devox Software";
  location = "Kyiv or Remote";

  public responseMail(status?: boolean): string {
    const defaultAnswer = " Tnx for the suggestion :)";
    const positive = "I will be happy to take advantage of this offer.";
    const notYet = "Everything is changing so fast that maybe soon in the near future.";

    return (status ? positive : notYet) + defaultAnswer;
  }
}

class BestCandidate extends CandidateInfo {
  constructor(public name: string) {
    super();
  }
}

const bestCandidate = new BestCandidate('Yura');
const answer = bestCandidate.responseMail();
