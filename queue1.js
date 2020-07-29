/****
 * 队列和栈类似，但是使用了不同的原则，都列遵循的是FIFO(First In First Out) 先进先出，队列从尾部添加新元素，从顶部移除元素，最新添加
 * 的元素必须排在队列的末尾，如过安检排队，自助餐厅排队等
 * 
 * 以下用数组模拟一个队列
 */

 function Queue() {
    // 保存队列元素
    var items = [];
    // 入队
    this.enqueue = function (element) {
        items.push(element);
    }

    // 出队，并返回出对元素
    this.dequeue = function () {
        return items.shift();
    }

    // 返回队列中的第一个元素
    this.front = function () {
        return items[0]
    }

    // 是否为空
    this.isEmpty = function () {
        return items.length === 0;
    }

    // 清空队列
    this.clear = function () {
        items = [];
    }

    // 返回队列中的元素个数
    this.size = function () {
        return items.length;
    }

    // 输出队列中的元素到控制台
    this.print = function () {
        console.log(items.toString())
    }
 }