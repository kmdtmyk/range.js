export default class{

  constructor(start, end){
    this.start = start
    this.end = end
  }

  toString(){
    return `${this.start}..${this.end}`
  }

}
