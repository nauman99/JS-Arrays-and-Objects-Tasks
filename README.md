# JS-Arrays-and-Objects-Tasks

**Level 01 - Basic**

**Access methods**

**Question 1**
How will you access the third position of the following array?

                     let arr = [5, 10, 15]

**Answer:** ```arr[2]```

**Question 2**
How will you access the second element, degree from the following object?

                     let obj = { name: "Maimoona", degree: "MBBS" }

**Answer:** ```obj.degree``` (alternatively we can also use obj["degree"]).

**Question 3**
How will you access all elements of the following array using loops?

                      let arr = [1, 2, 3, 4, 5, 6, 7]

**Answer:** There are multiple ways to do it using different for loops, one example is the following;
```
arr.forEach((elem) => {
  console.log(elem);
});
```

**Question 4**
How will you access all elements of the following object using loops?

                      let obj = { name: "Maimoona", degree: "MBBS", age: 25 }

**Answer:** There are multiple ways to do it, one example is the following;
```
for (let key in obj) {
  console.log(key, obj[key]);
}
```
***The rest of the answers and code are in the Js files above.***
