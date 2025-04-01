const { body } = document

function changeBackground(number) {
    let previousBackground
    if (body.className) {
        previousBackground = body.className
    }
    body.className = ''
    switch(number) {
        case 'one':
            return (previousBackground === 'background-one' ? false : body.classList.add('background-one'))
        case 'two':
            return (previousBackground === 'background-two' ? false : body.classList.add('background-two'))
        case 'three':
            return (previousBackground === 'background-three' ? false : body.classList.add('background-three'))
        default:
            break
    }
}