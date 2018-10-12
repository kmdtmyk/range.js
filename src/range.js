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
    this._start = start
    this._end = end
    this._excludeEnd = excludeEnd
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

  step(step, callback){
    if(step === 0){
      throw new TypeError("step can't be 0")
    }
    if(step < 0){
      throw new TypeError("step can't be negative")
    }
    this._step = step
    const result = []
    for(const i of this){
      result.push(i)
      if(callback){
        callback(i)
      }
    }
    delete this._step
    return result
  }

  toArray(){
    return Array.from(this)
  }

  toString(){
    if(this._excludeEnd){
      return `${this._start}...${this._end}`
    }else{
      return `${this._start}..${this._end}`
    }
  }

  *[Symbol.iterator](){
    const type = typeof this._start
    const step = this._step || 1
    let value = this._start
    while(true){
      if(this._excludeEnd && value < this._end === false){
        break
      }else if(value <= this._end === false){
        break
      }
      yield value
      if(type === "string"){
        value = String.fromCharCode(value.charCodeAt(0) + step)
      }else{
        value = value + step
      }
    }
  }

}
