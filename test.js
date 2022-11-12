let a = "";
document.querySelectorAll('.pvs-list__paged-list-item').forEach(function(item) {
    a += item.querySelector('.mr1 span').innerText;
    a += ' | ';
    a += item.querySelector('img').src;
    a += ' | ';
    try{
        a += item.querySelector('.pv2 a').href
    } catch (e){
        a += '#'
    }
    a += ' \n';
});
console.log(a)