let keys = document.querySelectorAll("#keyboard > div");
        let display = document.querySelector('#display');
        let bag = '';

        keys.forEach(key => {
            key.addEventListener('click', function(event) {
                let targetNumber = event.target.innerText;

                if (targetNumber === 'AC') {
                    bag = '';
                    display.innerText = bag;
                } else if (targetNumber === '=') {
                    try {
                        display.innerText = eval(bag);
                        bag = display.innerText;
                    } catch (error) {
                        display.innerText = 'Error';
                    }
                } else {
                    bag += targetNumber;
                    display.innerText = bag;
                }
            });
        });