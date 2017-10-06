class stack{
    constructor(){
        this.array = [];
    }
    pop(){
        if (this.array.length == 0)
        throw new RangeError('Stack is empty );');
        return this.array.pop();   
    }

    push(item){
        return this.array.push(item);
    }
    
    top_item(){
        if (this.array.length == 0)
        throw new RangeError('Stack is empty );');
        var top = this.array.length - 1;
        return this.array[top];
        
    }
    isEmpty(){
       var status =  (this.array.length == 0)? true : false;
       return status;
    }
    size(){
        return this.array.length;
    }
}

