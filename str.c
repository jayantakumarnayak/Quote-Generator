#include<stdio.h>
struct employee{
 int salary;
 float hike;
 char name[20];
};
void main(){
    struct employee jay={50000,10.5,'Jayanta'};
    struct employee *ptr=&jay;
printf("The name of the employee is %s\n",&(*ptr).name);
printf("The salary of the employee is %d\n",&(*ptr).salary);
printf("The hike of the employee is %f\n",&(*ptr).hike);
}
