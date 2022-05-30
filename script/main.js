const elDoor = document.querySelector('select[name="door"');
const elCheese = document.querySelector('select[name="cheese"');
const elAlgoritm = document.querySelector('.algoritm');

const txtOpen = '<div>You opened freezer. The door is open.<div/>';
const txtClose = '<div>You closed freezer. The door is close.<div/>';

const txtTake =  '<div>You took the cheese. Please, close the door.<div/>';
const txtPut =  '<div>You put the cheese. Please, close the door.<div/>';

const txtWrong = '<div>Wrong !!! Plesase, open the door.<div/>';

const runCheeseOpen = () => {
    const valueCheese = elCheese.value;

    if (valueCheese === 'take') {
        elAlgoritm.insertAdjacentHTML('beforeend', txtTake);
        return;
    }

    if (valueCheese === 'put') {
        elAlgoritm.insertAdjacentHTML('beforeend', txtPut);
        return;
    }
};

const runCheeseClose = () => {
    const valueCheese = elCheese.value;

    if (valueCheese === 'take') {
        elAlgoritm.insertAdjacentHTML('beforeend', txtWrong);
        return;
    }

    if (valueCheese === 'put') {
        elAlgoritm.insertAdjacentHTML('beforeend', txtWrong);
        return;
    }
};

const runDoor = () => {
    const valueDoor = elDoor.value;

    if (valueDoor === 'open') {
        elAlgoritm.insertAdjacentHTML('beforeend', txtOpen);
        elCheese.addEventListener('change', runCheeseOpen);
        return;
    } 
    
    if (valueDoor === 'close') {
        elAlgoritm.insertAdjacentHTML('beforeend', txtClose);
        elCheese.addEventListener('change', runCheeseClose);
        return;
    }
    return;
};

elDoor.addEventListener('change', runDoor);
