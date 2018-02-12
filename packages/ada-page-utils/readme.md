# @studionand/ada-page-utils

composition based filter and sorting utils for ada-pages

This package provides provides filter and sorting methods which can be applied to the result of

```javascript
const pages = api.pages.getPages({
  attributes: ['title', 'data', 'createdAt', 'tags', 'type'],
});
```

## Filter
The Filter methods are using higher order functions to allow the composition of complex filter queries.

```javascript
const subset = pages.filter(
  all(
    pagesThatHaveTag('TagA'),
    some(
      pagesThatHaveTag('TagB1'),
      pagesThatHaveTag('TagB2'),
    ),
    none(pagesThatHaveTag('TagC')),
  )
)
```
In the example above, **all** pages need to have `TagA`, either `TagB1` **or** `TagB2` and **not** `TagC`.