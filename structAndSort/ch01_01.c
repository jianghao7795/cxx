#include <stdio.h>
#include <stdlib.h>

int main(void)
{
	int i, j, find, val = 0, data[80] = {0};
	for (i = 0; i < 80; i++)
	{
		data[i] = rand() % 150 + 1;
	}

	while (val != -1)
	{
		find = 0;
		printf("请输入要查找的减值，输入-1 离开： ");
		scanf("%d", &val);
		for (i = 0; i < 80; i++)
		{
			if (data[i] == val)
			{
			}
		}
	}
}