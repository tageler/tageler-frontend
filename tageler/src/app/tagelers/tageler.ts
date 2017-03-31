export class Tageler {
  _id?: string;
  title: string;
  text?: string;
  group: [string];
  start: Date;
  end: Date;
  bring_along: string;
  uniform: string;
  picture?: string;
  checkout? :{
    deadline?: Date;
    contact? :[{
      name?: string;
      phone?: string;
      mail?: string;
      other?: string;
    }]
  }
}
