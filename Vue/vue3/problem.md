错误： Set operation on key "modelValue" failed: target is readonly

因为`props`是一个`readonly`的值(`isReadonly(props) === true`)，所以我们不能直接这么使用

所以，我们是需要一个中间值来绑定`v-model`

### 方式一：通过 watch 中转

```vue
<!-- 子组件 -->
<template>
  <input type="text" v-model="proxy" />
</template>
<script setup>
import { ref, watch } from "vue";
const emit = defineEmits();
const props = defineProps({
  modelValue: String,
});
const proxy = ref(props.modelValue);
watch(
  () => proxy.value,
  (v) => emit("update:modelValue", v)
);
</script>
```

### 方式二：computed 的 get 和 set get   更新父级传来的props

```vue
<!-- 子组件 -->
<template>
  <input type="text" v-model="proxy" />
</template>
<script setup>
const props = defineProps();
const proxy = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emit("update:modelValue", v);
  },
});
</script>
```
