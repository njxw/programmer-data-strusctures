/*
    数组时计算机科学中最常用的数据结构，在js中，对于数组的任意位置上添加和删除元素是很方便的，有时候我们还需要
    在添加和删除元素时有更控制的数据结构，有两种数据结构和数组类似，但在添加和删除时更为可控，他们就是栈和队列


    这里学习栈的概念：

    栈是一种遵循后进先出的有序集合，新添加的或者待删除的元素都保存在栈的末尾，叫做栈顶，另一端叫做栈底，新元素都靠近栈顶
    旧元素都靠近栈底，日常生活中常见的栈结构如书桌上的一摞书，餐厅里堆放的盘子

    栈也被用在编程语言的编译器和内存中保存变量，方法调用等

    下面用数组模拟一个栈结构
*/

// 创建一个类表示栈
function Stack() {
    // 保存栈里面的元素
    var items = [];

    // 添加一个或多个元素到栈顶
    this.push = function (element) {
        items.push(element);
    }

    // 移除栈顶的元素同时返回被移除的元素
    // 利用数组的pop方法可以删除数组的第一项并且返回被删除元素
    this.pop = function () {
        return items.pop();
    }

    // 返回栈顶元素，不对栈修改
    this.peek = function () {
        return items[items.length -1];
    }

    // 判断栈是不是空的
    this.isEmpty = function () {
        return items.length === 0;
    }

    // 得到栈里的元素个数
    this.size = function () {
        return items.length;
    }

    // 清空栈
    this.clear = function () {
        items = []
    }

    // 输出栈元素到控制台
    this.print = function() {
        console.log(items.toString())
    }
}

// 使用

var stack = new Stack();

stack.push(1);
stack.push([2, 'a']);

stack.print();