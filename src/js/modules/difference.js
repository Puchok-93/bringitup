export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);

        this.items = items;
        this.oldCounter = 0;
        this.newCounter = 0;
    }

     // Не оптимальный вариант
    // bindTriggers() {
    //     this.oldOfficer.querySelector('.plus').addEventListener('click', () => {
    //         if (this.oldOfficer !== this.oldItems.length - 2) {
    //             this.oldItems[this.oldCounter].style.display = 'flex';
    //             this.oldCounter++;
    //         } else {
    //             this.oldItems[this.oldCounter].style.display = 'flex';
    //             this.oldItems[this.oldItems.length - 1].remove();
    //         }
    //     });

    //     this.newOfficer.querySelector('.plus').addEventListener('click', () => {
    //         if (this.newOfficer !== this.oldItems.length - 2) {
    //             this.newItems[this.newCounter].style.display = 'flex';
    //             this.newCounter++;
    //         } else {
    //             this.newItems[this.newCounter].style.display = 'flex';
    //             this.newItems[this.newItems.length - 1].remove();
    //         }
    //     });
    // }

    bindTriggers(container, items, counter) {
        container.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length - 2) {
                items[counter].style.display = 'flex';
                counter++;
            } else {
                items[counter].style.display = 'flex';
                items[items.length - 1].remove();
            }
        });
    }

    // Не оптимальный вариант
    // hideItems() {
    //     this.oldItems.forEach((item, i, arr) => {
    //         if (i !== arr.length -1) {
    //             item.style.display = 'none';
    //         }
    //     });

    //     this.newItems.forEach((item, i, arr) => {
    //         if (i !== arr.length -1) {
    //             item.style.display = 'none';
    //         }
    //     });
    // }

    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length -1) {
                item.style.display = 'none';
            }
        });

    }

    init() {
        this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
        this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);
        this.hideItems(this.oldItems);
        this.hideItems(this.newItems);
    }
}