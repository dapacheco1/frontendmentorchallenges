
const not_viewed = document.querySelectorAll('.main--notifications-not-viewed');
const stats = document.querySelectorAll('.main--notifications-content-status');
const markAll = document.querySelector('.header--actions');
const notifications = document.querySelector('.header--number');

/**
 * Listener to mark all not viewed notifications as seen.
 */
markAll.addEventListener('click',()=>{

    not_viewed.forEach((item,index)=>{
        item.setAttribute("class","main--notifications-viewed");
        stats[index].setAttribute("style","display:none;");
    });

    notifications.innerHTML = 0;
    if(Number(notifications.innerHTML)==0){
        notifications.setAttribute("style","display:none;")
    }
});


/**
 * Listener fot all not viewed items to change it to other styles.
 */
not_viewed.forEach((item,index)=>{

    item.addEventListener('click',()=>{

        item.setAttribute("class","main--notifications-viewed");
        stats[index].setAttribute("style","display:none;");
        notifications.innerHTML = Number(notifications.innerHTML)-1;
        
        if(Number(notifications.innerHTML)==0){
            notifications.setAttribute("style","display:none;")
        }

    });
});