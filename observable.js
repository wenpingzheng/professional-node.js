var Observabel = function (generator) {
    // 构造函数 generator 1. 定义数据生产的动作 2. generator内必有'通知'消费者的动作(函数)
    this._generator = generator;
}

Observabel.prototype.subscribe = function (Observer) {
    // 链接生产者与消费者
    this._generator.call(this, Observer);
}

var Observer = function (consumer) {
    // 数据消费者 定义数据消费的动作
    this._consumer = consumer;
}
Observer.prototype.onNotify = function (data) {
    // 触发消费者“消费”这一动作
    this._consumer.call(this, data)
}