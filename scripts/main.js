window.addEventListener('scroll', () => {
    const header = document.querySelector('header')
    const banner = document.querySelector('.videodisney')
    header.classList.toggle('scroll', scrollY > 0)
    banner.classList.toggle('disneyscroll', scrollY > 0)
})



