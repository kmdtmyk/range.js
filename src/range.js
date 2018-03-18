export default class{

  constructor(start, end, excludeEnd = false){
    const {length} = arguments
    if(length < 2){
      const message = `Failed to construct 'Range': 2 argument required, but only ${length} present.`
      throw new TypeError(message)
    }
    if(typeof start !== typeof end){
      const message = `Illegal constructor`
      throw new TypeError(message)
    }
    this.start = start
    this.end = end
    this.excludeEnd = excludeEnd
  }

  forEach(callback){
    for(const i of this){
      callback(i)
    }
    return this
  }

  map(callback){
    const result = []
    for(const i of this){
      result.push(callback(i))
    }
    return result
  }

  toArray(){
    return Array.from(this)
  }

  toString(){
    if(this.excludeEnd){
      return `${this.start}...${this.end}`
    }else{
      return `${this.start}..${this.end}`
    }
  }

  *[Symbol.iterator](){
    const type = typeof this.start
    let i = this.start
    while(true){
      yield i
      if(type === "string"){
        i = String.fromCharCode(i.charCodeAt(0) + 1)
      }else{
        i = i + 1
      }
      if(this.excludeEnd && i < this.end === false){
        break
      }else if(i <= this.end === false){
        break
      }
    }
  }

}
