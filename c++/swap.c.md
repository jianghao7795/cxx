```cpp
//排序
#include <stdio.h>
#define N 10

int main()
{
	int i, j, a[N], temp;
	printf("请输入 %d 个数字：\n", N);
	for(i=0;i<N;i++)
        scanf("%d",&a[i]);
    for(i=0;i<N-1;i++)
    {
        int min=i;
        for(j=i+1;j<N;j++)
            if(a[min]>a[j]) min=j;
		if(min!=i)
		{
			temp=a[min];
			a[min]=a[i];
			a[i]=temp;
		}
    }
    printf("排序结果是:\n");
    for(i=0;i<N;i++)
        printf("%d ",a[i]);
    printf("\n");
    return 0;
}
```