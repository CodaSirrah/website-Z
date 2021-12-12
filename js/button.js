const btn = document.querySelector('.btn-animated')

btn.addEventListener('click', () => { {
        btn.classList.add('btn-animation');
        btn.addEventListener('animationend', () => {
            btn.classList.remove('btn-animation');
        })
    }
})