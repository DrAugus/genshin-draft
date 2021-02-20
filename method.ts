export const enter = () => {
    document.getElementById('div1').style.backgroundColor = '#F7F7F7';
    document.getElementById('div1').style.boxShadow = '2px 2px 2px #4285F4'
}
export const leave = () => {
    document.getElementById('div1').style.backgroundColor = '#ffffff';
    document.getElementById('div1').style.boxShadow = ''
}