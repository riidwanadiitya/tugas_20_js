function indexKata() {
    let data = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.';
    let kata1 = new RegExp("are");
    console.log(kata1.exec(data))
    console.log(null);
    let kata2 = new RegExp("words");
    console.log(kata2.exec(data));



}

indexKata();