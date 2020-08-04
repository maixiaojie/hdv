# HdButton 按钮

### 介绍

HdButton 是一个按钮组件

### 引入

```js
import Vue from 'vue';
import { HdButton } from 'hd-ui';

Vue.use(HdButton);
```

## 代码演示

### 基础用法

```html
<hd-button type="primary">primary</hd-button>
<hd-button type="default">default</hd-button>
```

### 自定义颜色

```html
<hd-button backgroundColor="#03a9f4" color="#fff">按钮</hd-button>
```

## API

### Props

| 参数                    | 说明     | 类型     | 默认值    |
| ----------------------- | -------- | -------- | --------- |
| type                    | 按钮类型 | _string_ | `primary` |
| backgroundColor `1.0.0` | 按钮颜色 | _string_ | -         |
| color `1.0.0`           | 文字颜色 | _string_ | -         |

### Events

| 事件名 | 说明       | 回调参数     |
| ------ | ---------- | ------------ |
| click  | 点击时触发 | event: Event |

### Slots

| 名称    | 说明     |
| ------- | -------- |
| default | 默认插槽 |
