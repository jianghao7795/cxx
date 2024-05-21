

给定一个整数数组 `nums` 和一个整数目标值 `target`，请你在该数组中找出 **和为目标值** *`target`* 的那 **两个** 整数，并返回它们的数组下标。

你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。

```sh
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
```



```rust
use std::collections::HashMap;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map = HashMap::with_capacity(nums.len());

        for i in 0..nums.len() {
            if let Some(k) = map.get(&(target - nums[i])) {
                if *k != i {
                    return vec![*k as i32, i as i32];
                }
            }
            map.insert(nums[i], i);
        }

        return vec![];
    }
}
```

运行代码：

```rust
use std::collections::HashMap;

fn main() {
    let nums = vec![2, 7, 11, 15];
    let target = 17;
    let res = two_sum(nums, target);
    println!("{:?}", res);
}

fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut map = HashMap::new();

    for i in 0..nums.len() {
        if let Some(k) = map.get(&(target - nums[i])) {
            if *k != i as i32 {
                return vec![*k, i as i32];
            }
        }

        let app = map.insert(nums[i], i as i32); // 将键值对插入到映射中。如果映射中没有此键，则返回None。如果映射中确实存在此键，则会更新该值，并返回旧值

        match app {
            Some(vb) => println!("key {} already exists with value {}", nums[i], vb), // 键值对已存在 并更新旧值
            None => println!("key is not present"), // 键值对插入成功
        }
    }

    return vec![];
}
```

