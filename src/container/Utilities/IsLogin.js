export const isLogin = () => {
    let inLocal = localStorage.getItem('rudra');

    if (inLocal === 'rudra0987') {
        return true
    } else {
        return false
    }
}