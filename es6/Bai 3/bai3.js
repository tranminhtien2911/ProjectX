class Novel {
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    // Method in Classes

    getAuthor(){
        return 'Author is ' + this.author;
    }

}

let myNovel = new Novel("Tôi thấy hoa vàng trên cỏ xanh", "Nguyễn Ngọc Ánh");
console.log('>>> check novel: ', myNovel);
console.log('>>> check author: ', myNovel.getAuthor());