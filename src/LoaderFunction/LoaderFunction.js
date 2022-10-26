const mainHomeFunction = async () => {
    const res = await fetch('https://programmers-home-server-sofiuzzamansofi.vercel.app/courses');
    const data = await res.json();
    return data;
}


const categoryWiseFuction = async (category) => {
    const res = await fetch(`https://programmers-home-server-sofiuzzamansofi.vercel.app/course/${category}`);
    const data = await res.json();
    return data;
}


const categoryDetails = async (id) => {
    const res = await fetch(`https://programmers-home-server-sofiuzzamansofi.vercel.app/course/category/${id}`);
    const data = await res.json();
    return data;
}


const languageFn = async () => {
    const res = await fetch(`https://programmers-home-server-sofiuzzamansofi.vercel.app/maincategory/Language`);
    const data = await res.json();
    return data;
}

const frameworkFn = async (id) => {
    const res = await fetch(`https://programmers-home-server-sofiuzzamansofi.vercel.app/maincategory/Framework`);
    const data = await res.json();
    return data;
}

export { mainHomeFunction, categoryWiseFuction, categoryDetails, languageFn, frameworkFn };