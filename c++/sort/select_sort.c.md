```cpp
#include <stdio.h>
#include <stdlib.h>

void selected (int *);
void showdata (int *);

int  main()
{

	int data[8] = {16, 25, 39, 27, 12, 8, 45, 63};
	printf("原始数据为： \n");
	showdata(data);
	printf("--------------------------------\n");
	selected(data);
	printf("sort after");
	showdata(data);
	/* code */
	return 0;
}

void showdata(int data[])
{
	int i;
	for(i = 0; i < 8; i++)
		printf("%3d", data[i]);
	printf("\n");
}

void selected(int data[])
{
	int i, j, tmp;
	
	for (i = 0; i < 7; i++)
	{
		for(j = i + 1; j < 8; j++)
		{
			if(data[i] > data[j])
			{
				tmp = data[i];
				data[i] = data[j];
				data[j] = tmp;
			}
		}
		showdata(data);
	}
	printf("\n");
	
}
```