export default class{

  constructor(start, end, excludeEnd = false){
    const {length} = arguments
    if(length < 2){
      const message = `Failed to construct 'Range': 2 argument required, but only ${length} present.`
      throw new TypeError(message)
    }
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

  *[Symbol.iterator](){
    for(let i = 0; i < this.end; i++){
      yield i
    }
  }

}
