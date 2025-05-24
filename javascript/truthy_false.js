const check_truthy_false = (value) => {
    if (value) {
        console.log(value + " is truthy")
        return
    }
    console.log(value + " is falsy")
}


// string
check_truthy_false("afaq")
check_truthy_false("")

// number
check_truthy_false(1)
check_truthy_false(0)
check_truthy_false(-0)

// objects
check_truthy_false({})
check_truthy_false({undefined: undefined})
check_truthy_false({name: "afaq"})
check_truthy_false({null: null})
check_truthy_false({NaN: NaN})

// arrays
check_truthy_false([])
check_truthy_false([0])
check_truthy_false([false])

// functions
const func1 = () => false
const func2 = () => undefined
const func3 = function() { return undefined }
check_truthy_false(func1)
check_truthy_false(func2)
check_truthy_false(func3)
