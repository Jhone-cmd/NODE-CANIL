type MenuOptions = '' | 'all' | 'dog' | 'cat' | 'fish';

export const createMenuObeject = (activeMenu: MenuOptions) => {
    let returnObejct = {
        all: false,
        dog: false,
        cat: false,
        fish: false
    };

    if(activeMenu !== '') {
         returnObejct[activeMenu] = true;
    };

    return returnObejct;
    
};