export class Suburb {
  constructor(
    public name: String,
    public state: State,
    public locality: String,
    public latitude: number,
    public longitude: number,
    public postcode: String,
    public selected: boolean
  ) {}
}

export interface State {
  name: String;
  abbreviation: String;
}
