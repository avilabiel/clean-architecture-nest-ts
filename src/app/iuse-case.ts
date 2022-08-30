export default interface IUseCase {
  execute(...params: any): Promise<any> | any;
}
