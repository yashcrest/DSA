#include <iostream>
void reverse(int *array, int numElements)
{
    int temp;
    int left = 0;
    int right = numElements - 1;

    while (left < right)
    {
        // swapping left and right indicies
        temp = array[left];
        array[left] = array[right];
        array[right] = temp;

        left++;
        right--;
    }
}

int main()
{
    int a[6] = {3, 6, 8, 1, 4, 6};

    std::cout << "Original array: ";
    for (int i = 0; i < 6; i++)
    {
        std::cout << a[i] << " ";
    }
    std::cout << std::endl;

    reverse(a, 6);

    std::cout << "Reversed array: ";
    for (int i = 0; i < 6; i++)
    {
        std::cout << a[i] << " ";
    }
    std::cout << std::endl;

    return 0;
}