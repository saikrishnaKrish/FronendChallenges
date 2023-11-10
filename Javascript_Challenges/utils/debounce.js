function debounceFn(fn,delay){
    let timerId
    return function(...args){
        clearTimeout(timerId);
        timerId=setTimeout(()=>{
            fn.apply(this,args)
        },delay)
    }
}

export default debounceFn