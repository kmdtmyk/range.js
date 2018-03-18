export default class{

  constructor(start, end, excludeEnd = false){
    this.start = start
    this.end = end
    this.excludeEnd = excludeEnd
  }

  toString(){
    if(this.excludeEnd){
      return `${this.start}...${this.end}`
    }else{
      return `${this.start}..${this.end}`
    }
  }

}
