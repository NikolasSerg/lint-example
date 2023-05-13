function foo (arg) {
    console.log(arg)
    let x = 2
    x++
    const y = x > 10 ? 15 : 5
    return x + y
}

const test = 'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне.'

foo(test)
