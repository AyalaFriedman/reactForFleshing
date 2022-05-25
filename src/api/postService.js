export default async function getPostsList() {
    try {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const response = await fetch(url);
        const postUsers = await response.json();
        console.log(postUsers);
        return postUsers;
    }
    catch (err) {
        console.error(err);
    }
}

export const savePostApi = async (post) => {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts`;
        const response = await fetch(url, {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify(post)
        });
        const data = await response.json();
        console.log("return sucssesfully");
        console.log(data);
        return data;
    }
    catch (err) {
        console.error(err);
    }
}