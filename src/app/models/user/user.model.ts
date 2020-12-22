export class UserModel {
  constructor(
      public active: number,
      public branch: string,
      public code: string,
      public email: string,
      public position: string,
      public hash: string,
      public id: number,
      public name: string,
      public pass: string,
      public phone: string,
      public permissions: any,

  ){}
}
