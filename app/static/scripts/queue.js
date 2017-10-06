class queue{
    constructor(){
        this.array = [];
    }
    pop(){
        if (this.array.length == 0)
        throw new RangeError('Stack is empty );');
        return this.array.pop();  
    }

    push(item){

        return this.array.splice(0,0,item);
    }

    front_item(){
        if (this.array.length == 0)
        throw new RangeError('Stack is empty );');
        var top = this.array.length - 1;
        return this.array[top];
    }
    
    isEmpty(){
        var result = (this.array.length == 0)? true : false;
        return result;
    }

    size(){
        return this.array.length;
    }

}