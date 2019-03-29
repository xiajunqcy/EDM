# CountDown

这是一个倒计时组件

## Demo

countdown

## API

| 属性      | 说明                                                    | 类型                     | 默认值        | 必选  |
| --------- | ------------------------------------------------------- | ------------------------ | ------------- | ----- |
| \_endDate | 结束的时间                                              | string \| Date           | 0             | false |
| \_etype   | 倒计时类型， '4':日时分秒，'3':时分秒，'2':分秒，'1':秒 | '4' \| '3' \| '2' \| '1' | 4             | false |
| \_eUnit   | 倒计时单位 ['天', '时', '分', '秒']                     | string[]                 | [':',':',':'] | false |
| \_eTimeUp | 倒计时结束时候的回调函数                                | function                 | undefined     | false |