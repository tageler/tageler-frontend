export class Tageler {
  _id?: string;
  title: string;
  text?: string;
  group: [string];
  start: Date;
  end: Date;
  bringAlong: string;
  uniform: string;
  picture?: string;
  picture_file?: File;
  checkout?: {
    deadline?: Date;
    contact?: [{
      name?: string;
      phone?: string;
      mail?: string;
      other?: string;
    }]
  }
  free: boolean;
}
